import { useEffect, useState } from 'react';
import type { Block, FigureKey, Tone } from '../model';
import { figures } from '../figures';
import { Rich } from './Rich';
import { Widget } from './Widgets';

const TONE_LABEL: Record<Tone, string> = {
  merke: 'Merke',
  ergaenzung: 'Ergänzung',
  notiz: 'Aus der Vorlesung',
  achtung: 'Verwechslungsgefahr',
  beispiel: 'Beispiel',
  pruefung: 'Prüfungshinweis',
  zitat: 'Zitat',
};
const TONE_ICON: Record<Tone, string> = {
  merke: '★',
  ergaenzung: '📖',
  notiz: '✎',
  achtung: '⚠',
  beispiel: '💡',
  pruefung: '🎯',
  zitat: '❝',
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
        <aside className={`ew-callout ew-${block.tone} gs-${block.tone}`}>
          <div className="ew-callout-head">
            <span aria-hidden>{TONE_ICON[block.tone]}</span> {block.title ? <Rich text={block.title} /> : TONE_LABEL[block.tone]}
          </div>
          {lines.length === 1 ? (
            <p>
              <Rich text={lines[0]} />
            </p>
          ) : (
            lines.map((l, i) => (
              <p key={i}>
                <Rich text={l} />
              </p>
            ))
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
              {it.sub && <div className="gs-sub">{it.sub}</div>}
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
    case 'person':
      return (
        <article className="gs-person">
          <header>
            <span className="gs-avatar" aria-hidden>
              {initials(block.name)}
            </span>
            <div>
              <h4>{block.name}</h4>
              <div className="gs-person-meta">
                <span className="gs-dates">{block.dates}</span>
                {block.tag && <span className="ew-chip">{block.tag}</span>}
              </div>
            </div>
          </header>
          <ul>
            {block.items.map((it, i) => (
              <li key={i}>
                <Rich text={it} />
              </li>
            ))}
          </ul>
        </article>
      );
    case 'widget':
      return <Widget id={block.w} />;
  }
}

function initials(name: string) {
  const parts = name.split(' ').filter((p) => /^[A-ZÄÖÜ]/.test(p));
  return (parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '');
}

export function FigureView({ fig }: { fig: FigureKey }) {
  const f = figures[fig];
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);
  return (
    <figure className={'ew-figure' + (f.narrow ? ' narrow gs-narrow' : '')}>
      <button className="ew-figure-img" onClick={() => setZoom(true)} aria-label={`Abbildung «${f.title}» vergrössern`}>
        <img src={f.src} alt={f.title} loading="lazy" />
        <span className="ew-zoom-hint">⤢ vergrössern</span>
      </button>
      <figcaption>
        <strong>{f.title}.</strong> {f.caption} <span className="ew-src">{f.source}</span>
      </figcaption>
      {zoom && (
        <div className="ew-lightbox" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <div className="ew-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={f.src} alt={f.title} />
            <p>
              <strong>{f.title}.</strong> {f.caption}
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
