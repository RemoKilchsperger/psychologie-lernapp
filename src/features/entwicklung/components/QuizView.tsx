import { useMemo, useState } from 'react';
import type { ChapterId, MCQuestion } from '../model';
import { chapterById, chapters } from '../content';
import { quiz } from '../content/quiz';
import { useProgress } from '../../../lib/progress';
import { Rich } from './Rich';

export const qFlag = (id: string) => `entw:q:${id}`;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Mode = 'alle' | 'falsch' | 'neu';

/**
 * MC-Quiz. Mit `fixedChapter` als kompakter Selbstcheck am Kapitelende,
 * sonst mit Kapitel- und Modusauswahl.
 */
export function QuizView({ fixedChapter, onFullRun }: { fixedChapter?: ChapterId; onFullRun?: (score: number) => void }) {
  const { progress, setFlag } = useProgress();
  const [selected, setSelected] = useState<ChapterId[]>(fixedChapter ? [fixedChapter] : chapters.map((c) => c.id));
  const [mode, setMode] = useState<Mode>('alle');
  const [run, setRun] = useState<{ qs: MCQuestion[]; full: boolean } | null>(null);

  const pool = useMemo(() => {
    const base = quiz.filter((q) => selected.includes(q.ch));
    if (mode === 'falsch') return base.filter((q) => progress.flags[qFlag(q.id)] === 'wrong');
    if (mode === 'neu') return base.filter((q) => !progress.flags[qFlag(q.id)]);
    return base;
  }, [selected, mode, progress.flags]);

  const start = (limit?: number) => {
    const qs = shuffle(pool)
      .slice(0, limit ?? pool.length)
      .map((q) => {
        const opts = shuffle(q.options.map((text, i) => ({ text, ok: i === q.correct })));
        return { ...q, options: opts.map((o) => o.text), correct: opts.findIndex((o) => o.ok) };
      });
    setRun({ qs, full: !fixedChapter && mode === 'alle' && selected.length === chapters.length && !limit });
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
            {s.total} Fragen zu diesem Kapitel · {s.ok} zuletzt richtig · {s.wrong} zuletzt falsch
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
      <p className="muted">Prüfungsformat MC: Wähle Kapitel und Modus. Die Reihenfolge der Fragen und Antworten wird jedes Mal gemischt.</p>
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
      <div className="ew-seg" role="radiogroup" aria-label="Modus">
        {(
          [
            ['alle', 'Alle Fragen'],
            ['neu', 'Noch nie beantwortet'],
            ['falsch', 'Zuletzt falsch'],
          ] as [Mode, string][]
        ).map(([m, l]) => (
          <button key={m} role="radio" aria-checked={mode === m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)}>
            {l}
          </button>
        ))}
      </div>
      <div className="ew-quiz-start">
        <span>
          <strong>{pool.length}</strong> Fragen ausgewählt
        </span>
        <div className="ew-chiprow">
          <button className="btn" disabled={!pool.length} onClick={() => start()}>
            Quiz starten
          </button>
          {pool.length > 20 && (
            <button className="btn ghost" onClick={() => start(20)}>
              20 zufällige
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
  qs: MCQuestion[];
  compact: boolean;
  onAnswer: (id: string, ok: boolean) => void;
  onDone: (score: number) => void;
  onExit: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const done = idx >= qs.length;

  if (done) {
    const correct = results.filter(Boolean).length;
    const pct = Math.round((correct / qs.length) * 100);
    const wrongQs = qs.filter((_, i) => !results[i]);
    return (
      <div className={compact ? 'ew-selfcheck col' : 'ew-panel'}>
        <div className="ew-result">
          <div className="ew-result-big">{pct}%</div>
          <p>
            {correct} von {qs.length} richtig
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
                <p className="small">
                  ✓ {q.options[q.correct]} – <span className="muted">{q.why}</span>
                </p>
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
  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const ok = i === q.correct;
    onAnswer(q.id, ok);
    setResults((r) => [...r, ok]);
  };
  const next = () => {
    if (idx + 1 >= qs.length) onDone(results.filter(Boolean).length / qs.length);
    setIdx(idx + 1);
    setPicked(null);
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
        <button className="ew-link" onClick={onExit}>
          Abbrechen
        </button>
      </div>
      <div className="bar">
        <div style={{ width: `${(idx / qs.length) * 100}%` }} />
      </div>
      <h3 className="ew-q">{q.q}</h3>
      <div className="options">
        {q.options.map((o, i) => {
          let cls = 'option';
          if (picked !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === picked) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => answer(i)} disabled={picked !== null}>
              <span className="ew-opt-letter">{'ABCD'[i]}</span> {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="feedback">
          <strong>{picked === q.correct ? 'Richtig!' : 'Leider falsch.'}</strong>{' '}
          <Rich text={q.why} />
          <div style={{ marginTop: 10 }}>
            <button className="btn" onClick={next} autoFocus>
              {idx + 1 >= qs.length ? 'Auswertung' : 'Weiter'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
