import { useMemo, useState } from 'react';
import type { ChapterId, KprimQuestion, MCQuestion, QuizQuestion } from '../model';
import { chapterById, chapters } from '../content';
import { quiz } from '../content/quiz';
import { useProgress } from '../../../lib/progress';
import { Rich } from './Rich';

export const qFlag = (id: string) => `kog:q:${id}`;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const isKprim = (q: QuizQuestion): q is KprimQuestion => q.kind === 'kprim';

/** Kprim-Bewertung: 4 richtig = 1 Punkt, 3 richtig = ½ Punkt, sonst 0. */
export const kprimScore = (nOk: number) => (nOk === 4 ? 1 : nOk === 3 ? 0.5 : 0);

type Mode = 'alle' | 'falsch' | 'neu';
type Typ = 'beide' | 'a' | 'kprim';

/**
 * MC-Quiz (A-Typ und Kprim). Mit `fixedChapter` als kompakter Selbstcheck am Kapitelende,
 * sonst mit Kapitel-, Typ- und Modusauswahl.
 */
export function QuizView({ fixedChapter, onFullRun }: { fixedChapter?: ChapterId; onFullRun?: (score: number) => void }) {
  const { progress, setFlag } = useProgress();
  const [selected, setSelected] = useState<ChapterId[]>(fixedChapter ? [fixedChapter] : chapters.map((c) => c.id));
  const [mode, setMode] = useState<Mode>('alle');
  const [typ, setTyp] = useState<Typ>('beide');
  const [run, setRun] = useState<{ qs: QuizQuestion[]; full: boolean } | null>(null);

  const pool = useMemo(() => {
    let base = quiz.filter((q) => selected.includes(q.ch));
    if (typ === 'a') base = base.filter((q) => !isKprim(q));
    if (typ === 'kprim') base = base.filter(isKprim);
    if (mode === 'falsch') return base.filter((q) => progress.flags[qFlag(q.id)] === 'wrong');
    if (mode === 'neu') return base.filter((q) => !progress.flags[qFlag(q.id)]);
    return base;
  }, [selected, mode, typ, progress.flags]);

  const start = (limit?: number) => {
    const qs = shuffle(pool)
      .slice(0, limit ?? pool.length)
      .map((q): QuizQuestion => {
        if (isKprim(q)) return { ...q, statements: shuffle(q.statements) };
        const opts = shuffle(q.options.map((text, i) => ({ text, ok: i === q.correct })));
        return { ...q, options: opts.map((o) => o.text), correct: opts.findIndex((o) => o.ok) };
      });
    setRun({ qs, full: !fixedChapter && mode === 'alle' && typ === 'beide' && selected.length === chapters.length && !limit });
  };

  if (run) {
    return (
      <Runner
        qs={run.qs}
        compact={!!fixedChapter}
        onAnswer={(id, ok) => setFlag(qFlag(id), ok ? 'ok' : 'wrong')}
        onDone={(score) => run.full && onFullRun?.(score)}
        onExit={() => setRun(null)}
      />
    );
  }

  const stats = (ch: ChapterId) => {
    const qs = quiz.filter((q) => q.ch === ch);
    const ok = qs.filter((q) => progress.flags[qFlag(q.id)] === 'ok').length;
    const wrong = qs.filter((q) => progress.flags[qFlag(q.id)] === 'wrong').length;
    return { total: qs.length, ok, wrong };
  };

  if (fixedChapter) {
    const s = stats(fixedChapter);
    return (
      <div className="ew-selfcheck">
        <div>
          <h3>Selbstcheck</h3>
          <p className="muted small">
            {s.total} Fragen (A-Typ & Kprim) · {s.ok} zuletzt richtig · {s.wrong} zuletzt falsch
          </p>
        </div>
        <div className="ew-chiprow">
          <button className="btn" onClick={() => start(5)}>
            5 zufällige Fragen
          </button>
          <button className="btn ghost" onClick={() => start()}>
            Alle {s.total} Fragen
          </button>
        </div>
      </div>
    );
  }

  const toggle = (id: ChapterId) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div className="ew-panel">
      <h2>Quiz</h2>
      <p className="muted">
        Prüfungsformat (2 h): <strong>MC im A-Typ</strong> (1 aus 5; 1/0 Punkte) und <strong>Kprim</strong> (vier Aussagen, jede richtig
        oder falsch). Kprim-Bewertung hier: 4 richtig = 1 Punkt, 3 richtig = ½ Punkt. Fragen und Antworten werden jedes Mal gemischt.
      </p>
      <div className="ew-quiz-chapters">
        {chapters.map((c) => {
          const s = stats(c.id);
          const on = selected.includes(c.id);
          return (
            <button key={c.id} className={'ew-qch' + (on ? ' on' : '')} style={{ ['--ch' as string]: c.color }} onClick={() => toggle(c.id)} aria-pressed={on}>
              <span className="ew-qch-top">
                <span className="ew-nr">{c.nr}</span> {c.short}
              </span>
              <span className="ew-mini-bar">
                <span className="ok" style={{ width: `${(s.ok / s.total) * 100}%` }} />
                <span className="bad" style={{ width: `${(s.wrong / s.total) * 100}%` }} />
              </span>
              <span className="muted small">
                {s.ok}/{s.total} richtig{s.wrong ? ` · ${s.wrong} falsch` : ''}
              </span>
            </button>
          );
        })}
      </div>
      <div className="ew-chiprow" style={{ margin: '12px 0' }}>
        <button className="ew-chipbtn" onClick={() => setSelected(chapters.map((c) => c.id))}>
          Alle Kapitel
        </button>
        <button className="ew-chipbtn" onClick={() => setSelected([])}>
          Keine
        </button>
      </div>
      <div className="ew-chiprow">
        <div className="ew-seg" role="radiogroup" aria-label="Fragetyp">
          {(
            [
              ['beide', 'A-Typ + Kprim'],
              ['a', 'nur A-Typ'],
              ['kprim', 'nur Kprim'],
            ] as [Typ, string][]
          ).map(([m, l]) => (
            <button key={m} role="radio" aria-checked={typ === m} className={typ === m ? 'on' : ''} onClick={() => setTyp(m)}>
              {l}
            </button>
          ))}
        </div>
        <div className="ew-seg" role="radiogroup" aria-label="Modus">
          {(
            [
              ['alle', 'Alle'],
              ['neu', 'Noch nie beantwortet'],
              ['falsch', 'Zuletzt falsch'],
            ] as [Mode, string][]
          ).map(([m, l]) => (
            <button key={m} role="radio" aria-checked={mode === m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)}>
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="ew-quiz-start">
        <span>
          <strong>{pool.length}</strong> Fragen ausgewählt
        </span>
        <div className="ew-chiprow">
          <button className="btn" disabled={!pool.length} onClick={() => start()}>
            Quiz starten
          </button>
          {pool.length > 30 && (
            <button className="btn ghost" onClick={() => start(30)}>
              Prüfungssimulation (30 zufällige Fragen)
            </button>
          )}
        </div>
      </div>
      {mode === 'falsch' && !pool.length && <p className="muted small">Keine falsch beantworteten Fragen in der Auswahl – sehr gut!</p>}
    </div>
  );
}

function Runner({
  qs,
  compact,
  onAnswer,
  onDone,
  onExit,
}: {
  qs: QuizQuestion[];
  compact: boolean;
  onAnswer: (id: string, ok: boolean) => void;
  onDone: (score: number) => void;
  onExit: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [points, setPoints] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);
  const done = idx >= qs.length;

  if (done) {
    const total = points.reduce((a, b) => a + b, 0);
    const pct = Math.round((total / qs.length) * 100);
    const wrongQs = qs.filter((_, i) => points[i] < 1);
    return (
      <div className={compact ? 'ew-selfcheck col' : 'ew-panel'}>
        <div className="ew-result">
          <div className="ew-result-big">{pct}%</div>
          <p>
            {total.toLocaleString('de-CH')} von {qs.length} Punkten
          </p>
        </div>
        {wrongQs.length > 0 && (
          <div className="ew-review">
            <h4>Nochmals anschauen</h4>
            {wrongQs.map((q) => (
              <div key={q.id} className="ew-review-item">
                <span className="ew-chip" style={{ ['--ch' as string]: chapterById[q.ch].color }}>
                  {chapterById[q.ch].short}
                </span>
                <p>
                  <strong>{q.q}</strong>
                </p>
                {isKprim(q) ? (
                  <ul className="small">
                    {q.statements.map((s) => (
                      <li key={s.text}>
                        <strong>{s.ok ? 'richtig' : 'falsch'}:</strong> {s.text} <span className="muted">– <Rich text={s.why} /></span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="small">
                    ✓ {q.options[q.correct]} –{' '}
                    <span className="muted">
                      <Rich text={q.why} />
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        <button className="btn" onClick={onExit}>
          Zurück
        </button>
      </div>
    );
  }

  const q = qs[idx];
  const ch = chapterById[q.ch];
  const finish = (pts: number) => {
    setAnswered(true);
    onAnswer(q.id, pts === 1);
    setPoints((p) => [...p, pts]);
  };
  const next = () => {
    if (idx + 1 >= qs.length) onDone(points.reduce((a, b) => a + b, 0) / qs.length);
    setIdx(idx + 1);
    setAnswered(false);
  };

  return (
    <div className={compact ? 'ew-selfcheck col' : 'ew-panel'}>
      <div className="ew-quiz-top">
        <span>
          Frage {idx + 1} / {qs.length}
        </span>
        <span className="ew-chip" style={{ ['--ch' as string]: ch.color }}>
          {ch.nr} · {ch.short}
        </span>
        <span className="ew-chip">{isKprim(q) ? 'Kprim' : 'A-Typ'}</span>
        <button className="ew-link" onClick={onExit}>
          Abbrechen
        </button>
      </div>
      <div className="bar">
        <div style={{ width: `${(idx / qs.length) * 100}%` }} />
      </div>
      <h3 className="ew-q">{q.q}</h3>
      {isKprim(q) ? (
        <KprimItem key={q.id} q={q} answered={answered} onSubmit={finish} />
      ) : (
        <AItem key={q.id} q={q} answered={answered} onSubmit={finish} />
      )}
      {answered && (
        <div style={{ marginTop: 10 }}>
          <button className="btn" onClick={next} autoFocus>
            {idx + 1 >= qs.length ? 'Auswertung' : 'Weiter'}
          </button>
        </div>
      )}
    </div>
  );
}

function AItem({ q, answered, onSubmit }: { q: MCQuestion; answered: boolean; onSubmit: (pts: number) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <>
      <div className="options">
        {q.options.map((o, i) => {
          let cls = 'option';
          if (picked !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === picked) cls += ' wrong';
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={answered}
              onClick={() => {
                setPicked(i);
                onSubmit(i === q.correct ? 1 : 0);
              }}
            >
              <span className="ew-opt-letter">{'ABCDE'[i]}</span> {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="feedback">
          <strong>{picked === q.correct ? 'Richtig!' : 'Leider falsch.'}</strong> <Rich text={q.why} />
        </div>
      )}
    </>
  );
}

function KprimItem({ q, answered, onSubmit }: { q: KprimQuestion; answered: boolean; onSubmit: (pts: number) => void }) {
  const [ans, setAns] = useState<(boolean | null)[]>(q.statements.map(() => null));
  const complete = ans.every((a) => a !== null);
  const nOk = q.statements.filter((s, i) => ans[i] === s.ok).length;
  const pts = kprimScore(nOk);
  return (
    <>
      <p className="muted small">Beurteile jede Aussage als richtig (+) oder falsch (−).</p>
      <div className="pk-kprim">
        {q.statements.map((s, i) => {
          const res = answered ? (ans[i] === s.ok ? ' ok' : ' bad') : '';
          return (
            <div key={i} className={'pk-kprim-row' + res}>
              <span className="pk-kprim-text">
                {s.text}
                {answered && (
                  <span className="pk-kprim-why">
                    <strong>{s.ok ? 'Richtig.' : 'Falsch.'}</strong> <Rich text={s.why} />
                  </span>
                )}
              </span>
              <span className="pk-kprim-btns">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    className={'pk-kprim-btn' + (ans[i] === v ? ' on' : '')}
                    disabled={answered}
                    onClick={() => setAns(ans.map((a, k) => (k === i ? v : a)))}
                    aria-pressed={ans[i] === v}
                    aria-label={v ? 'richtig' : 'falsch'}
                  >
                    {v ? '+' : '−'}
                  </button>
                ))}
              </span>
            </div>
          );
        })}
      </div>
      {!answered ? (
        <button className="btn pk-mt" disabled={!complete} onClick={() => onSubmit(pts)}>
          Antwort prüfen
        </button>
      ) : (
        <div className="feedback">
          <strong>{nOk === 4 ? 'Alles richtig – 1 Punkt!' : nOk === 3 ? '3 von 4 richtig – ½ Punkt.' : `${nOk} von 4 richtig – 0 Punkte.`}</strong>
        </div>
      )}
    </>
  );
}
