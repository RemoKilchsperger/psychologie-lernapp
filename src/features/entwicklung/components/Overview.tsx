import { useState } from 'react';
import type { ChapterId } from '../model';
import { EXAM_INFO, chapterById, chapters, glossary } from '../content';
import { ageBands } from '../content/extras';
import { quiz } from '../content/quiz';
import { useProgress } from '../../../lib/progress';
import { qFlag } from './QuizView';
import { Rich } from './Rich';

export type Tab = 'start' | 'kapitel' | 'karten' | 'fallen' | 'fragen' | 'quiz';

export function Overview({ readKey, onOpen, onTab }: { readKey: (id: ChapterId) => string; onOpen: (id: ChapterId) => void; onTab: (t: Tab) => void }) {
  const { progress } = useProgress();
  const [filter, setFilter] = useState<ChapterId | null>(null);
  const readCount = chapters.filter((c) => progress.read[readKey(c.id)]).length;
  const answered = quiz.filter((q) => progress.flags[qFlag(q.id)]).length;
  const correct = quiz.filter((q) => progress.flags[qFlag(q.id)] === 'ok').length;
  const known = glossary.filter((g) => progress.flags[`entw:fc:${g.term}`] === 'known').length;

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
              <span>Theorie mit Grafiken, interaktiven Übungen und Selbstcheck am Ende.</span>
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
              <span>Begriffspaare, die in MC-Fragen gerne vertauscht werden.</span>
            </button>
          </li>
          <li>
            <button onClick={() => onTab('quiz')}>
              <strong>Prüfung simulieren</strong>
              <span>{quiz.length} MC-Fragen, filterbar – und gezielt die falschen wiederholen.</span>
            </button>
          </li>
        </ol>
      </section>

      <section>
        <h3 className="ew-h">Die {chapters.length} Kapitel</h3>
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
                    {c.date ? `${c.date} · ` : ''}{c.folien}
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
        <h3 className="ew-h">Entwicklung auf der Altersachse</h3>
        <p className="muted small">
          Alle Altersangaben aus allen Kapiteln auf einer Achse – zum Verknüpfen über die Kapitel hinweg. Filtere nach Kapitel. Achtung: Bei der Motorik
          werden keine genauen Alter geprüft.
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
        <div className="ew-agebands">
          {ageBands.map((b) => {
            const items = b.items.filter((m) => !filter || m.ch === filter);
            if (!items.length) return null;
            return (
              <div key={b.label} className="ew-ageband">
                <div className="ew-ageband-head">
                  <strong>{b.label}</strong>
                  <span className="muted small">{b.span}</span>
                </div>
                <ul>
                  {items.map((m, i) => (
                    <li key={i} style={{ ['--ch' as string]: chapterById[m.ch].color }}>
                      <span className="ew-age">{m.age}</span>
                      <span>{m.text}</span>
                      <button className="ew-dotbtn" title={`Zu Kapitel ${chapterById[m.ch].nr}: ${chapterById[m.ch].short}`} onClick={() => onOpen(m.ch)}>
                        <span className="ew-dot" />
                      </button>
                    </li>
                  ))}
                </ul>
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
