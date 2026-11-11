import type { ChapterId } from '../model';
import { EXAM_INFO, chapters, glossary } from '../content';
import { leitfragen } from '../content/extras';
import { quiz } from '../content/quiz';
import { useProgress } from '../../../lib/progress';
import { qFlag } from './QuizView';
import { fcFlag, lfFlag } from './Study';
import { Rich } from './Rich';

export type Tab = 'start' | 'zeitstrahl' | 'kapitel' | 'karten' | 'fallen' | 'fragen' | 'quiz';

export function Overview({ readKey, onOpen, onTab }: { readKey: (id: ChapterId) => string; onOpen: (id: ChapterId) => void; onTab: (t: Tab) => void }) {
  const { progress } = useProgress();
  const readCount = chapters.filter((c) => progress.read[readKey(c.id)]).length;
  const answered = quiz.filter((q) => progress.flags[qFlag(q.id)]).length;
  const correct = quiz.filter((q) => progress.flags[qFlag(q.id)] === 'ok').length;
  const known = glossary.filter((g) => progress.flags[fcFlag(g.term)] === 'known').length;
  const lfKnown = leitfragen.filter((l) => progress.flags[lfFlag(l.q)] === 'known').length;

  return (
    <div className="ew-overview">
      <section className="ew-exam">
        <div>
          <div className="ew-eyebrow">{EXAM_INFO.module}</div>
          <h2>{EXAM_INFO.course}</h2>
          <p>
            <strong>Prüfung {EXAM_INFO.date}:</strong> {EXAM_INFO.format}.
          </p>
          <p className="muted small">{EXAM_INFO.sources}</p>
        </div>
        <div className="ew-stats">
          <Stat value={`${readCount}/${chapters.length}`} label="Kapitel gelernt" onClick={() => onTab('kapitel')} />
          <Stat value={`${known}/${glossary.length}`} label="Begriffe gewusst" onClick={() => onTab('karten')} />
          <Stat value={`${lfKnown}/${leitfragen.length}`} label="Leitfragen sitzen" onClick={() => onTab('fragen')} />
          <Stat value={`${correct}/${quiz.length}`} label={`Quizfragen richtig${answered ? ` (${answered} beantwortet)` : ''}`} onClick={() => onTab('quiz')} />
        </div>
      </section>

      <section>
        <h3 className="ew-h">So lernst du hier</h3>
        <ol className="ew-howto">
          <li>
            <button onClick={() => onTab('zeitstrahl')}>
              <strong>Zeitstrahl verstehen</strong>
              <span>Alle Personen und Ereignisse aus dem PDF – klickbar, filterbar, mit Chronologie-Übung.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('kapitel')}>
              <strong>Blöcke durcharbeiten</strong>
              <span>Theorie mit interaktiven Grafiken, Leitfragen und Selbstcheck pro Block.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('fallen')}>
              <strong>Verwechslungen klären</strong>
              <span>Stolperfallen, Widersprüche Folie ↔ Lehrbuch und Karteikarten.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('quiz')}>
              <strong>Prüfung simulieren</strong>
              <span>{quiz.length} Fragen im A-Typ und Kprim – gezielt die falschen wiederholen.</span>
            </button>
          </li>
        </ol>
      </section>

      <section className="ew-kern" style={{ ['--ch' as string]: 'var(--accent)' }}>
        <h3>Die 10 Kernaussagen</h3>
        <ol className="gs-kern">
          {EXAM_INFO.kern.map((k, i) => (
            <li key={i}>
              <Rich text={k} />
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="ew-h">Die neun Blöcke – chronologisch entlang des Zeitstrahls</h3>
        <p className="muted small">Block 1 ist systematisch, die Psychiatriegeschichte (Block 8) läuft als Längsschnitt parallel zu den Epochen.</p>
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
                    {c.period} · Epoche {c.epochs}
                  </span>
                  {read && <span className="ew-done">✓ gelernt</span>}
                </div>
                <h4>{c.title}</h4>
                <ul>
                  {c.kern.slice(0, 3).map((k, i) => (
                    <li key={i}>
                      <Rich text={k.replace(/\s*\((B|LB)[^)]*\)/g, '')} />
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
