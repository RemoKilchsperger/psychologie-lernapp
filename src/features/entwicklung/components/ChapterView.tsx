import { useEffect, useState } from 'react';
import type { Chapter } from '../model';
import { chapters } from '../content';
import { BlockView } from './Blocks';
import { Rich } from './Rich';
import { QuizView } from './QuizView';

export function ChapterView({
  chapter,
  isRead,
  onToggleRead,
  onGo,
}: {
  chapter: Chapter;
  isRead: boolean;
  onToggleRead: () => void;
  onGo: (id: Chapter['id']) => void;
}) {
  const idx = chapters.findIndex((c) => c.id === chapter.id);
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];
  const [active, setActive] = useState(chapter.sections[0]?.id);

  // aktiven Abschnitt in der Seitenleiste markieren
  useEffect(() => {
    const els = chapter.sections.map((s) => document.getElementById(`sec-${s.id}`)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id.replace('sec-', ''));
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [chapter]);

  const jump = (id: string) => document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="ew-chapter" style={{ ['--ch' as string]: chapter.color }}>
      <header className="ew-ch-head">
        <div className="ew-ch-badge">{chapter.nr}</div>
        <div>
          <div className="ew-eyebrow">
            Vorlesung {chapter.date} · {chapter.folien}
          </div>
          <h2>{chapter.title}</h2>
          <p className="ew-lohaus">
            <span className="ew-label">Lohaus prüfungsrelevant</span> {chapter.lohaus}
          </p>
        </div>
      </header>

      <div className="ew-ch-layout">
        <nav className="ew-ch-toc" aria-label="Abschnitte">
          <div className="ew-eyebrow">In diesem Kapitel</div>
          <button className={'ew-toc-link' + (active === 'kern' ? ' on' : '')} onClick={() => jump('kern')}>
            Auf einen Blick
          </button>
          {chapter.sections.map((s) => (
            <button key={s.id} className={'ew-toc-link' + (active === s.id ? ' on' : '')} onClick={() => jump(s.id)}>
              {s.title}
            </button>
          ))}
          <button className={'ew-toc-link' + (active === 'check' ? ' on' : '')} onClick={() => jump('check')}>
            Selbstcheck
          </button>
        </nav>

        <div className="ew-ch-body">
          <section id="sec-kern" className="ew-kern">
            <h3>Auf einen Blick</h3>
            <ul>
              {chapter.kern.map((k, i) => (
                <li key={i}>
                  <Rich text={k} />
                </li>
              ))}
            </ul>
          </section>

          {chapter.sections.map((s, i) => (
            <section key={s.id} id={`sec-${s.id}`} className="ew-section">
              <h3>
                <span className="ew-sec-nr">
                  {chapter.nr}.{i + 1}
                </span>{' '}
                {s.title}
              </h3>
              {s.blocks.map((b, j) => (
                <BlockView key={j} block={b} />
              ))}
            </section>
          ))}

          <section id="sec-check" className="ew-section">
            <QuizView key={chapter.id} fixedChapter={chapter.id} />
          </section>

          <div className="ew-ch-footer">
            <button className={'btn ' + (isRead ? 'done' : '')} onClick={onToggleRead}>
              {isRead ? '✓ Kapitel gelernt' : 'Kapitel als gelernt markieren'}
            </button>
            <div className="ew-chiprow">
              {prev && (
                <button className="btn ghost" onClick={() => onGo(prev.id)}>
                  ← {prev.short}
                </button>
              )}
              {next && (
                <button className="btn ghost" onClick={() => onGo(next.id)}>
                  {next.short} →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
