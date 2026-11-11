import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ChapterId } from './model';
import { chapterById, chapters } from './content';
import { useProgress } from '../../lib/progress';
import { Overview, type Tab } from './components/Overview';
import { ChapterView } from './components/ChapterView';
import { QuizView } from './components/QuizView';
import { ControlQuestions, Flashcards, Pitfalls } from './components/Study';
import './entwicklung.css';

const TABS: { id: Tab; label: string }[] = [
  { id: 'start', label: 'Übersicht' },
  { id: 'kapitel', label: 'Kapitel' },
  { id: 'karten', label: 'Karteikarten' },
  { id: 'fallen', label: 'Stolperfallen' },
  { id: 'fragen', label: 'Kontrollfragen' },
  { id: 'quiz', label: 'Quiz' },
];

/** Eigene Lernumgebung für Entwicklungspsychologie. `progressKey` = "semester/fach". */
export default function EntwicklungApp({ progressKey }: { progressKey: string }) {
  const [params, setParams] = useSearchParams();
  const tab = (TABS.find((t) => t.id === params.get('tab'))?.id ?? 'start') as Tab;
  const chId = (params.get('k') as ChapterId) in chapterById ? (params.get('k') as ChapterId) : chapters[0].id;
  const { progress, toggleRead, recordQuiz } = useProgress();
  const readKey = (id: ChapterId) => `${progressKey}/${id}`;

  const go = (t: Tab, k?: ChapterId) => {
    const p: Record<string, string> = { tab: t };
    if (t === 'kapitel') p.k = k ?? chId;
    setParams(p);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [tab, chId]);

  return (
    <div className="ew">
      <nav className="ew-tabs" role="tablist">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? 'on' : ''} onClick={() => go(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      {tab === 'kapitel' && (
        <div className="ew-chapter-nav" role="tablist" aria-label="Kapitel">
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
      {tab === 'kapitel' && (
        <ChapterView
          key={chId}
          chapter={chapterById[chId]}
          isRead={!!progress.read[readKey(chId)]}
          onToggleRead={() => toggleRead(readKey(chId))}
          onGo={(id) => go('kapitel', id)}
        />
      )}
      {tab === 'karten' && <Flashcards />}
      {tab === 'fallen' && <Pitfalls />}
      {tab === 'fragen' && <ControlQuestions />}
      {tab === 'quiz' && <QuizView onFullRun={(s) => recordQuiz(progressKey, s)} />}
    </div>
  );
}
