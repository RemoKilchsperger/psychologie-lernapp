import { Link } from 'react-router-dom';
import { semesters } from '../content';
import { useProgress } from '../lib/progress';
import type { CSSProperties } from 'react';

export default function Home() {
  const { progress, reset } = useProgress();

  return (
    <>
      <section className="hero">
        <h1>Lernen für die Semesterprüfungen</h1>
        <p className="muted">Wähle ein Fach – jedes hat eine Theorie-Seite und ein Quiz.</p>
      </section>

      {semesters.map((sem) => (
        <section key={sem.slug} className="semester">
          <h2>{sem.title}</h2>
          <div className="subject-grid">
            {sem.subjects.map((sub) => {
              const key = `${sem.slug}/${sub.slug}`;
              // Lern-Einheiten: normale Abschnitte bzw. die einzelnen Blöcke eines Zeitstrahls
              const units = sub.sections.flatMap((s) =>
                s.block?.kind === 'history' ? s.block.blocks.map((b) => `${key}/${s.id}/${b.id}`) : [`${key}/${s.id}`],
              );
              const readCount = units.filter((u) => progress.read[u]).length;
              const best = progress.quizBest[key];
              return (
                <Link
                  key={sub.slug}
                  to={`/${sem.slug}/${sub.slug}`}
                  className="subject-card"
                  style={{ '--accent': sub.accent } as CSSProperties}
                >
                  <h3>{sub.title}</h3>
                  <p className="muted">{sub.description}</p>
                  <div className="meta">
                    <span>
                      Theorie {readCount}/{units.length}
                    </span>
                    <span>Quiz {best !== undefined ? `${Math.round(best * 100)}%` : '–'}</span>
                    {sub.placeholder && <span className="badge">Beispielinhalt</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <button
        className="btn ghost small"
        onClick={() => {
          if (confirm('Gesamten Lernfortschritt zurücksetzen?')) reset();
        }}
      >
        Fortschritt zurücksetzen
      </button>
    </>
  );
}
