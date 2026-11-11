import { useState } from 'react';
import type { Study, TheoryBlock } from '../../types';
import { HistoryTimeline } from './HistoryTimeline';

/** Wählt anhand von block.kind die passende Darstellung. */
export function TheoryBlockView({ block, progressKey = '' }: { block: TheoryBlock; progressKey?: string }) {
  switch (block.kind) {
    case 'history':
      return <HistoryTimeline epochs={block.epochs} blocks={block.blocks} dimensions={block.dimensions} positions={block.positions} progressKey={progressKey} />;
    case 'timeline':
      return <Timeline items={block.items} />;
    case 'conceptmap':
      return <ConceptMap center={block.center} nodes={block.nodes} />;
    case 'formulas':
      return <Formulas items={block.items} />;
    case 'process':
      return <Process steps={block.steps} />;
    case 'table':
      return <Table columns={block.columns} rows={block.rows} />;
    case 'dimensions':
      return <Dimensions items={block.items} />;
    case 'cards':
      return <Cards items={block.items} />;
    case 'text':
      return (
        <div className="prose">
          {block.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case 'studies':
      return (
        <div className="studies">
          {block.items.map((s, i) => (
            <StudyCard key={i} study={s} />
          ))}
        </div>
      );
    case 'definitions':
      return (
        <dl className="definitions">
          {block.items.map((d, i) => (
            <div key={i} className="def">
              <dt>{d.term}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>
      );
    case 'points':
      return (
        <div className="points">
          {block.groups.map((g, i) => (
            <div key={i} className="point-group">
              <h4>{g.title}</h4>
              <ul>
                {g.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {g.note && <p className="point-note">{g.note}</p>}
            </div>
          ))}
        </div>
      );
  }
}

/** Studienkarte: Kernaussage immer sichtbar (ausser im Selbsttest), Vorgehen & Ergebnis aufklappbar. */
export function StudyCard({ study, open: forceOpen, hideTakeaway = false }: { study: Study; open?: boolean; hideTakeaway?: boolean }) {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const isOpen = forceOpen ?? open;
  const showTakeaway = !hideTakeaway || revealed;
  return (
    <article className="study">
      <header>
        <h4>{study.title}</h4>
        <div className="study-meta">
          {study.source && <span>{study.source}</span>}
          {study.age && <span className="age">Alter {study.age}</span>}
        </div>
      </header>
      {showTakeaway ? (
        <p className="takeaway">
          <strong>Kernaussage:</strong> {study.takeaway}
        </p>
      ) : (
        <button className="takeaway hidden" onClick={() => setRevealed(true)}>
          Kernaussage aufdecken
        </button>
      )}
      {isOpen && (
        <div className="study-body">
          <p>
            <span className="eyebrow">Vorgehen</span> {study.method}
          </p>
          <p>
            <span className="eyebrow">Ergebnis</span> {study.result}
          </p>
        </div>
      )}
      {forceOpen === undefined && (
        <button className="study-toggle" onClick={() => setOpen(!open)}>
          {open ? 'Weniger' : 'Vorgehen & Ergebnis'}
        </button>
      )}
    </article>
  );
}

type B<K extends TheoryBlock['kind']> = Omit<Extract<TheoryBlock, { kind: K }>, 'kind'>;

function Timeline({ items }: B<'timeline'>) {
  const [active, setActive] = useState(0);
  const it = items[active];
  return (
    <div className="timeline">
      <ol className="timeline-track">
        {items.map((x, i) => (
          <li key={i}>
            <button className={i === active ? 'on' : ''} onClick={() => setActive(i)}>
              <span className="dot" />
              <span className="tl-label">{x.label}</span>
              <span className="tl-title">{x.title}</span>
            </button>
          </li>
        ))}
      </ol>
      {it && (
        <div className="timeline-detail">
          <div className="eyebrow">{it.label}</div>
          <h4>{it.title}</h4>
          <p>{it.text}</p>
          {it.tags && (
            <div className="tags">
              {it.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ConceptMap({ center, nodes }: B<'conceptmap'>) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="conceptmap">
      <div className="cm-center">{center}</div>
      <div className="cm-nodes">
        {nodes.map((n, i) => (
          <div key={i} className={'cm-node' + (open === i ? ' on' : '')}>
            <button onClick={() => setOpen(open === i ? null : i)}>{n.title}</button>
            {open === i && (
              <div className="cm-body">
                <p>{n.text}</p>
                {n.children && (
                  <ul>
                    {n.children.map((c, j) => (
                      <li key={j}>
                        <strong>{c.title}:</strong> {c.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Formulas({ items }: B<'formulas'>) {
  return (
    <div className="formulas">
      {items.map((f, i) => (
        <div key={i} className="formula-card">
          <div className="eyebrow">{f.name}</div>
          <div className="formula">{f.formula}</div>
          <p>{f.explanation}</p>
          {f.example && <p className="example">Beispiel: {f.example}</p>}
        </div>
      ))}
    </div>
  );
}

function Process({ steps }: B<'process'>) {
  return (
    <ol className="process">
      {steps.map((s, i) => (
        <li key={i}>
          <span className="step-no">{i + 1}</span>
          <div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Table({ columns, rows }: B<'table'>) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dimensions({ items }: B<'dimensions'>) {
  const [vals, setVals] = useState<number[]>(() => items.map(() => 50));
  return (
    <div className="dimensions">
      {items.map((d, i) => (
        <div key={i} className="dim">
          <div className="dim-head">
            <strong>{d.name}</strong>
            <span className="muted">{d.text}</span>
          </div>
          <div className="dim-scale">
            <span>{d.low}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={vals[i]}
              aria-label={d.name}
              onChange={(e) => setVals(vals.map((v, j) => (j === i ? +e.target.value : v)))}
            />
            <span>{d.high}</span>
          </div>
        </div>
      ))}
      <p className="muted small">Tipp: Schätze dich selbst ein, um die Pole besser zu verinnerlichen.</p>
    </div>
  );
}

function Cards({ items }: B<'cards'>) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <div className="cards">
      {items.map((c, i) => (
        <button
          key={i}
          className={'flip-card' + (flipped[i] ? ' on' : '')}
          onClick={() => setFlipped({ ...flipped, [i]: !flipped[i] })}
        >
          {flipped[i] ? <span>{c.text}</span> : <strong>{c.title}</strong>}
        </button>
      ))}
    </div>
  );
}
