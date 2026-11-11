import { useState } from 'react';
import type { ChapterId } from '../model';
import { EXAM_INFO, chapterById, chapters, glossary } from '../content';
import { keyNumbers } from '../content/extras';
import { quiz } from '../content/quiz';
import { useProgress } from '../../../lib/progress';
import { qFlag } from './QuizView';
import { Rich } from './Rich';

export type Tab = 'start' | 'kapitel' | 'karten' | 'fallen' | 'fragen' | 'quiz';

export function Overview({ readKey, onOpen, onTab }: { readKey: (id: ChapterId) => string; onOpen: (id: ChapterId) => void; onTab: (t: Tab) => void }) {
  const { progress } = useProgress();
  const [filter, setFilter] = useState<ChapterId | null>(null);
  const [hide, setHide] = useState(false);
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const readCount = chapters.filter((c) => progress.read[readKey(c.id)]).length;
  const answered = quiz.filter((q) => progress.flags[qFlag(q.id)]).length;
  const correct = quiz.filter((q) => progress.flags[qFlag(q.id)] === 'ok').length;
  const known = glossary.filter((g) => progress.flags[`kog:fc:${g.term}`] === 'known').length;
  const kprim = quiz.filter((q) => q.kind === 'kprim').length;

  return (
    <div className="ew-overview">
      <section className="ew-exam">
        <div>
          <div className="ew-eyebrow">{EXAM_INFO.module}</div>
          <h2>{EXAM_INFO.course}</h2>
          <p className="muted small">{EXAM_INFO.period}</p>
          <p>
            <strong>Prüfung: {EXAM_INFO.format}.</strong> {EXAM_INFO.relevant}
          </p>
          <p className="muted small">Quellenmarken: {EXAM_INFO.sources}</p>
        </div>
        <div className="ew-stats">
          <Stat value={`${readCount}/${chapters.length}`} label="Kapitel gelernt" onClick={() => onTab('kapitel')} />
          <Stat value={`${known}/${glossary.length}`} label="Begriffe gewusst" onClick={() => onTab('karten')} />
          <Stat value={`${correct}/${quiz.length}`} label={`Quizfragen richtig${answered ? ` (${answered} beantwortet)` : ''}`} onClick={() => onTab('quiz')} />
        </div>
      </section>

      <section>
        <h3 className="ew-h">So lernst du hier</h3>
        <ol className="ew-howto">
          <li>
            <button onClick={() => onTab('kapitel')}>
              <strong>Kapitel durcharbeiten</strong>
              <span>Theorie mit interaktiven Grafiken, Rechnern, Zuordnungs-Trainern und Selbstcheck am Ende.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('karten')}>
              <strong>Begriffe festigen</strong>
              <span>Karteikarten mit «gewusst / nochmals» – und Glossar zum Nachschlagen.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('fallen')}>
              <strong>Stolperfallen klären</strong>
              <span>Begriffspaare und Personen, die in MC-Fragen gerne vertauscht werden.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('quiz')}>
              <strong>Prüfung simulieren</strong>
              <span>
                {quiz.length} Fragen ({quiz.length - kprim} A-Typ, {kprim} Kprim), filterbar – und gezielt die falschen wiederholen.
              </span>
            </button>
          </li>
        </ol>
      </section>

      <section>
        <h3 className="ew-h">Die vier Kapitel</h3>
        <div className="ew-chgrid">
          {chapters.map((c) => {
            const qs = quiz.filter((q) => q.ch === c.id);
            const ok = qs.filter((q) => progress.flags[qFlag(q.id)] === 'ok').length;
            const read = progress.read[readKey(c.id)];
            return (
              <button key={c.id} className="ew-chcard" style={{ ['--ch' as string]: c.color }} onClick={() => onOpen(c.id)}>
                <div className="ew-chcard-top">
                  <span className="ew-nr">{c.nr}</span>
                  <span className="muted small">
                    {`Zusammenfassung ${c.pages}`}
                  </span>
                  {read && <span className="ew-done">✓ gelernt</span>}
                </div>
                <h4>{c.title}</h4>
                <ul>
                  {c.kern.slice(0, 3).map((k, i) => (
                    <li key={i}>
                      <Rich text={k} />
                    </li>
                  ))}
                </ul>
                <div className="ew-chcard-foot">
                  <span className="ew-mini-bar">
                    <span className="ok" style={{ width: `${(ok / qs.length) * 100}%` }} />
                  </span>
                  <span className="muted small">
                    Quiz {ok}/{qs.length}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="ew-h">Zahlen und Befunde, die man kennen sollte</h3>
        <p className="muted small">
          In MC-Fragen werden Reaktionszeiten, Prozentwerte und Jahreszahlen gerne leicht verändert. Im Übungsmodus sind die Werte verdeckt – erst
          erinnern, dann aufdecken.
        </p>
        <div className="ew-chiprow ew-filter">
          <button className={'ew-chipbtn' + (filter === null ? ' on' : '')} onClick={() => setFilter(null)}>
            Alle
          </button>
          {chapters.map((c) => (
            <button key={c.id} className={'ew-chipbtn' + (filter === c.id ? ' on' : '')} style={{ ['--ch' as string]: c.color }} onClick={() => setFilter(c.id)}>
              <span className="ew-dot" /> {c.short}
            </button>
          ))}
        </div>
        <label className="ew-check" style={{ margin: '0 0 10px' }}>
          <input
            type="checkbox"
            checked={hide}
            onChange={(e) => {
              setHide(e.target.checked);
              setShown({});
            }}
          />{' '}
          Übungsmodus (Werte verdecken)
        </label>
        <div className="pk-numbers">
          {keyNumbers.map((n, i) => {
            if (filter && n.ch !== filter) return null;
            const open = !hide || shown[i];
            return (
              <div key={i} className="pk-number" style={{ ['--ch' as string]: chapterById[n.ch].color }}>
                {open ? (
                  <span className="pk-number-value">{n.value}</span>
                ) : (
                  <button className="pk-number-value hidden" onClick={() => setShown({ ...shown, [i]: true })} aria-label="Wert aufdecken">
                    ?
                  </button>
                )}
                <span className="pk-number-text">
                  <Rich text={n.text} /> <span className="ew-src">{n.src}</span>
                </span>
                <button className="ew-dotbtn" title={`Zu Kapitel ${chapterById[n.ch].nr}: ${chapterById[n.ch].short}`} onClick={() => onOpen(n.ch)}>
                  <span className="ew-dot" />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label, onClick }: { value: string; label: string; onClick: () => void }) {
  return (
    <button className="ew-stat" onClick={onClick}>
      <span className="ew-stat-value">{value}</span>
      <span className="ew-stat-label">{label}</span>
    </button>
  );
}
