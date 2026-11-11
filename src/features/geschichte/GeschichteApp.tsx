import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ChapterId } from './model';
import { chapterById, chapters } from './content';
import { useProgress } from '../../lib/progress';
import { Overview, type Tab } from './components/Overview';
import { ChapterView } from './components/ChapterView';
import { Timeline } from './components/Timeline';
import { QuizView } from './components/QuizView';
import { Flashcards, Pitfalls, Questions } from './components/Study';
import '../entwicklung/entwicklung.css';
import './geschichte.css';

const TABS: { id: Tab; label: string }[] = [
  { id: 'start', label: 'Übersicht' },
  { id: 'zeitstrahl', label: 'Zeitstrahl' },
  { id: 'kapitel', label: 'Blöcke 1–9' },
  { id: 'karten', label: 'Karteikarten' },
  { id: 'fallen', label: 'Stolperfallen' },
  { id: 'fragen', label: 'Leitfragen' },
  { id: 'quiz', label: 'Quiz' },
];

/**
 * Eigene Lernumgebung für «Einführung in die Psychologie und ihre Geschichte».
 * Nutzt die Grundstile des Entwicklungs-Moduls (ew-*) plus eigene (gs-*).
 * `progressKey` = "semester/fach".
 */
export default function GeschichteApp({ progressKey }: { progressKey: string }) {
  const [params, setParams] = useSearchParams();
  const tab = (TABS.find((t) => t.id === params.get('tab'))?.id ?? 'start') as Tab;
  const k = params.get('k') as ChapterId | null;
  const chId = k && k in chapterById ? k : chapters[0].id;
  const focus = tab === 'zeitstrahl' && k && k in chapterById ? k : null;
  const { progress, toggleRead, recordQuiz } = useProgress();
  const readKey = (id: ChapterId) => `${progressKey}/${id}`;

  const go = (t: Tab, id?: ChapterId) => {
    const p: Record<string, string> = { tab: t };
    if (t === 'kapitel') p.k = id ?? chId;
    if (t === 'zeitstrahl' && id) p.k = id;
    setParams(p);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [tab, chId]);

  return (
    <div className="ew gs">
      <nav className="ew-tabs" role="tablist">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? 'on' : ''} onClick={() => go(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      {tab === 'kapitel' && (
        <div className="ew-chapter-nav gs-chapter-nav" role="tablist" aria-label="Blöcke">
          {chapters.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === chId}
              className={c.id === chId ? 'on' : ''}
              style={{ ['--ch' as string]: c.color }}
              onClick={() => go('kapitel', c.id)}
            >
              <span className="ew-nr">{progress.read[readKey(c.id)] ? '✓' : c.nr}</span>
              <span>{c.short}</span>
            </button>
          ))}
        </div>
      )}

      {tab === 'start' && <Overview readKey={readKey} onOpen={(id) => go('kapitel', id)} onTab={(t) => go(t)} />}
      {tab === 'zeitstrahl' && <Timeline onOpen={(id) => go('kapitel', id)} focusCh={focus} onClearFocus={() => go('zeitstrahl')} />}
      {tab === 'kapitel' && (
        <ChapterView
          key={chId}
          chapter={chapterById[chId]}
          isRead={!!progress.read[readKey(chId)]}
          onToggleRead={() => toggleRead(readKey(chId))}
          onGo={(id) => go('kapitel', id)}
          onTimeline={(id) => go('zeitstrahl', id)}
        />
      )}
      {tab === 'karten' && <Flashcards />}
      {tab === 'fallen' && <Pitfalls />}
      {tab === 'fragen' && <Questions />}
      {tab === 'quiz' && <QuizView onFullRun={(s) => recordQuiz(progressKey, s)} />}
    </div>
  );
}
