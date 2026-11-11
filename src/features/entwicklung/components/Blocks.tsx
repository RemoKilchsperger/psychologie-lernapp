import { useEffect, useState } from 'react';
import type { Block, FigureKey, Tone } from '../model';
import { figures } from '../figures';
import { Rich } from './Rich';
import { Widget } from './Widgets';

const TONE_LABEL: Record<Tone, string> = {
  merke: 'Merke',
  ergaenzung: 'Ergänzung aus dem Lohaus',
  notiz: 'Aus der Vorlesung',
  achtung: 'Verwechslungsgefahr',
  beispiel: 'Beispiel',
  pruefung: 'Prüfungshinweis',
};
const TONE_ICON: Record<Tone, string> = {
  merke: '★',
  ergaenzung: '📖',
  notiz: '✎',
  achtung: '⚠',
  beispiel: '💡',
  pruefung: '🎯',
};

export function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case 'p':
      return (
        <p className="ew-p">
          <Rich text={block.text} />
        </p>
      );
    case 'list':
      return (
        <div className="ew-list">
          {block.title && (
            <h4>
              <Rich text={block.title} />
            </h4>
          )}
          <ul>
            {block.items.map((it, i) => (
              <li key={i}>
                <Rich text={it} />
              </li>
            ))}
          </ul>
        </div>
      );
    case 'defs':
      return (
        <dl className="ew-defs">
          {block.items.map((d) => (
            <div key={d.term} className="ew-def">
              <dt>{d.term}</dt>
              <dd>
                <Rich text={d.text} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case 'table':
      return (
        <figure className="ew-table">
          <div className="ew-table-scroll">
            <table>
              <thead>
                <tr>
                  {block.head.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j} data-label={block.head[j]}>
                        <Rich text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption>
              <Rich text={block.caption} />
            </figcaption>
          )}
        </figure>
      );
    case 'figure':
      return <FigureView fig={block.fig} />;
    case 'callout': {
      const lines = Array.isArray(block.text) ? block.text : [block.text];
      return (
        <aside className={`ew-callout ew-${block.tone}`}>
          <div className="ew-callout-head">
            <span aria-hidden>{TONE_ICON[block.tone]}</span> {block.title ? <Rich text={block.title} /> : TONE_LABEL[block.tone]}
          </div>
          {lines.length === 1 ? (
            <p>
              <Rich text={lines[0]} />
            </p>
          ) : (
            <ul>
              {lines.map((l, i) => (
                <li key={i}>
                  <Rich text={l} />
                </li>
              ))}
            </ul>
          )}
        </aside>
      );
    }
    case 'compare':
      return (
        <div className={`ew-compare n${block.items.length}`}>
          {block.items.map((it, i) => (
            <div key={i} className="ew-compare-item">
              <h4>
                <Rich text={it.title} />
              </h4>
              {it.text && (
                <p>
                  <Rich text={it.text} />
                </p>
              )}
              {it.bullets && (
                <ul>
                  {it.bullets.map((b, j) => (
                    <li key={j}>
                      <Rich text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    case 'steps':
      return (
        <ol className="ew-steps">
          {block.items.map((s, i) => (
            <li key={i}>
              <span className="ew-step-no">{i + 1}</span>
              <div>
                <strong>{s.title}</strong>
                <span>
                  <Rich text={s.text} />
                </span>
              </div>
            </li>
          ))}
        </ol>
      );
    case 'study':
      return <StudyBox block={block} />;
    case 'widget':
      return <Widget id={block.w} />;
  }
}

function StudyBox({ block }: { block: Extract<Block, { t: 'study' }> }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="ew-study">
      <header>
        <span className="ew-study-tag">Studie</span>
        <h4>{block.title}</h4>
        <div className="ew-study-meta">
          {block.source && <span>{block.source}</span>}
          {block.age && <span className="ew-chip">Alter {block.age}</span>}
        </div>
      </header>
      <p className="ew-study-method">
        <span className="ew-label">Vorgehen</span> {block.method}
      </p>
      {open ? (
        <>
          <p>
            <span className="ew-label">Ergebnis</span> {block.result}
          </p>
          <p className="ew-takeaway">
            <span className="ew-label">Kernaussage</span> <Rich text={block.takeaway} />
          </p>
        </>
      ) : (
        <button className="ew-reveal" onClick={() => setOpen(true)}>
          Was kam heraus? Erst überlegen, dann aufdecken
        </button>
      )}
    </article>
  );
}

export function FigureView({ fig, compact = false }: { fig: FigureKey; compact?: boolean }) {
  const f = figures[fig];
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);
  return (
    <figure className={'ew-figure' + (f.narrow ? ' narrow' : '') + (compact ? ' compact' : '')}>
      <button className="ew-figure-img" onClick={() => setZoom(true)} aria-label={`Abbildung ${f.nr} vergrössern`}>
        <img src={f.src} alt={`Abb. ${f.nr}: ${f.title}`} loading="lazy" />
        <span className="ew-zoom-hint">⤢ vergrössern</span>
      </button>
      {!compact && (
        <figcaption>
          <strong>
            Abb. {f.nr}: {f.title}.
          </strong>{' '}
          {f.caption} <span className="ew-src">{f.source}</span>
        </figcaption>
      )}
      {zoom && (
        <div className="ew-lightbox" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <div className="ew-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={f.src} alt={`Abb. ${f.nr}: ${f.title}`} />
            <p>
              <strong>
                Abb. {f.nr}: {f.title}.
              </strong>{' '}
              {f.caption}
            </p>
            <button className="btn small" onClick={() => setZoom(false)}>
              Schliessen
            </button>
          </div>
        </div>
      )}
    </figure>
  );
}
