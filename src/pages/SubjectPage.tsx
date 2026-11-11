import { Suspense, lazy, useMemo, useState, type CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findSubject } from '../content';
import { useProgress } from '../lib/progress';
import { TheoryBlockView } from '../components/theory/TheoryBlockView';
import { Quiz } from '../components/Quiz';
import { StudyBrowser, collectStudies } from '../components/StudyBrowser';

const EntwicklungApp = lazy(() => import('../features/entwicklung/EntwicklungApp'));
const GeschichteApp = lazy(() => import('../features/geschichte/GeschichteApp'));
const PersoenlichkeitApp = lazy(() => import('../features/persoenlichkeit/PersoenlichkeitApp'));

type Tab = 'theorie' | 'studien' | 'quiz';

export default function SubjectPage() {
  const params = useParams();
  const found = findSubject(params.semester ?? '', params.subject ?? '');
  const { progress, toggleRead, recordQuiz } = useProgress();
  const [tab, setTab] = useState<Tab>('theorie');
  const studyCount = useMemo(
    () => (found ? collectStudies(found.subject).reduce((n, g) => n + g.studies.length, 0) : 0),
    [found?.subject],
  );

  if (!found) {
    return (
      <p>
        Fach nicht gefunden. <Link to="/">Zur Übersicht</Link>
      </p>
    );
  }
  const { semester, subject } = found;
  const key = `${semester.slug}/${subject.slug}`;

  if (subject.custom) {
    const App = subject.custom === 'geschichte' ? GeschichteApp : subject.custom === 'persoenlichkeit' ? PersoenlichkeitApp : EntwicklungApp;
    return (
      <div className="subject" style={{ '--accent': subject.accent } as CSSProperties}>
        <nav className="crumbs">
          <Link to="/">Übersicht</Link> / <span>{semester.title}</span>
        </nav>
        <h1>{subject.title}</h1>
        <Suspense fallback={<p className="muted">Lädt …</p>}>
          <App progressKey={key} />
        </Suspense>
      </div>
    );
  }

  const tabButton = (id: Tab, label: string) => (
    <button role="tab" aria-selected={tab === id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>
      {label}
    </button>
  );

  return (
    <div className="subject" style={{ '--accent': subject.accent } as CSSProperties}>
      <nav className="crumbs">
        <Link to="/">Übersicht</Link> / <span>{semester.title}</span>
      </nav>
      <h1>{subject.title}</h1>
      <p className="muted">{subject.description}</p>

      <div className="tabs" role="tablist">
        {tabButton('theorie', 'Theorie')}
        {studyCount > 0 && tabButton('studien', `Studien (${studyCount})`)}
        {tabButton('quiz', `Quiz (${subject.quiz.length})`)}
      </div>

      {tab === 'theorie' && (
        <div className="theory">
          {subject.sections.length > 1 && (
            <aside className="toc">
              {subject.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                  {progress.read[`${key}/${s.id}`] ? '✓ ' : ''}
                  {s.title}
                </a>
              ))}
            </aside>
          )}
          {subject.sections.map((s) => {
            const rk = `${key}/${s.id}`;
            const isRead = !!progress.read[rk];
            return (
              <section key={s.id} id={s.id} className="theory-section">
                <h2>{s.title}</h2>
                {s.intro && <p className="muted">{s.intro}</p>}
                {s.literature && (
                  <p className="literature">
                    <span className="eyebrow">Prüfungsrelevant im Lohaus</span> {s.literature}
                  </p>
                )}
                {s.parts && s.parts.length > 1 && (
                  <nav className="part-nav">
                    {s.parts.map((p, i) => (
                      <a key={i} href={`#${s.id}-${i}`} onClick={(e) => { e.preventDefault(); document.getElementById(`${s.id}-${i}`)?.scrollIntoView({ behavior: 'smooth' }); }}>
                        {p.title}
                      </a>
                    ))}
                  </nav>
                )}
                {s.block && <TheoryBlockView block={s.block} progressKey={rk} />}
                {s.parts?.map((p, i) => (
                  <div key={i} id={`${s.id}-${i}`} className="theory-part">
                    <h3>{p.title}</h3>
                    {p.intro && <p className="muted">{p.intro}</p>}
                    <TheoryBlockView block={p.block} progressKey={`${rk}/${i}`} />
                  </div>
                ))}
                {s.block?.kind !== 'history' && (
                  <button className={'btn ' + (isRead ? 'done' : 'ghost')} onClick={() => toggleRead(rk)}>
                    {isRead ? '✓ Gelernt' : 'Als gelernt markieren'}
                  </button>
                )}
              </section>
            );
          })}
        </div>
      )}
      {tab === 'studien' && <StudyBrowser subject={subject} />}
      {tab === 'quiz' && <Quiz questions={subject.quiz} onFinish={(score) => recordQuiz(key, score)} />}
    </div>
  );
}
