import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { Epoch, HistBlock, HistPerson, HistPosition, PositionDimension } from '../../types';
import { useProgress } from '../../lib/progress';
import { useNarrator } from '../../lib/useNarrator';
import { buildNarration, type NarrationSource } from './narration';
import { NarratorBar } from './NarratorBar';
import './history.css';

/* ── Zeitskala: stückweise linear, damit dichte Jahrhunderte mehr Platz bekommen ── */
const STOPS: [number, number][] = [
  [-2000, 0],
  [-500, 6],
  [-200, 12],
  [0, 16],
  [500, 21],
  [1000, 25],
  [1500, 31],
  [1600, 37],
  [1700, 45],
  [1800, 57],
  [1900, 80],
  [1960, 93],
  [2000, 100],
];
function pos(year: number) {
  if (year <= STOPS[0][0]) return 0;
  for (let i = 1; i < STOPS.length; i++) {
    const [y1, p1] = STOPS[i];
    const [y0, p0] = STOPS[i - 1];
    if (year <= y1) return p0 + ((year - y0) / (y1 - y0)) * (p1 - p0);
  }
  return 100;
}
/** Mindestbreite der Zeitachse in px (muss zu .hist-axis min-width passen) */
const AXIS_PX = 1100;
const TICKS =[-2000, -500, 0, 500, 1000, 1500, 1600, 1700, 1800, 1900, 2000];
const fmtYear = (y: number) => (y < 0 ? `${-y} v.d.Z.` : `${y}`);
const fmtLife = (p: HistPerson) =>
  p.died === undefined
    ? `geb. ${fmtYear(p.born)}`
    : p.born < 0
      ? `${-p.born}–${-p.died} v.d.Z.`
      : `${p.born}–${p.died}`;

/* Farbton pro Block */
const HUES = [215, 28, 265, 160, 330, 200, 45, 0, 290];
const blockColor = (nr: number) => `hsl(${HUES[(nr - 1) % HUES.length]} 70% 50%)`;

/* Farbton pro Pol einer Grundfrage */
const POLE_HUES = [215, 28, 265, 160];
const poleColor = (i: number) => `hsl(${POLE_HUES[i % POLE_HUES.length]} 70% 50%)`;
const fmtSpan = (from: number, to: number) =>
  from < 0 && to < 0 ? `${-from}–${-to} v.d.Z.` : from < 0 ? `${-from} v.d.Z.–${to} n.d.Z.` : `${from}–${to}`;

type Tab = 'inhalte' | 'leitfragen' | 'personen';
type AxisView = 'personen' | 'positionen';
const VIEW_KEY = 'psy-lernapp-axis-view';

export function HistoryTimeline({
  epochs,
  blocks,
  dimensions = [],
  positions = [],
  progressKey,
}: {
  epochs: Epoch[];
  blocks: HistBlock[];
  dimensions?: PositionDimension[];
  positions?: HistPosition[];
  progressKey: string;
}) {
  const hasPositions = dimensions.length > 0 && positions.length > 0;
  const [view, setViewState] = useState<AxisView>(() => {
    try {
      return localStorage.getItem(VIEW_KEY) === 'positionen' ? 'positionen' : 'personen';
    } catch {
      return 'personen';
    }
  });
  const setView = (v: AxisView) => {
    setViewState(v);
    try {
      localStorage.setItem(VIEW_KEY, v);
    } catch {
      /* ignorieren */
    }
  };
  const axisView: AxisView = hasPositions ? view : 'personen';
  const [hoverPos, setHoverPos] = useState<string | null>(null);
  const [pickedPos, setPickedPos] = useState<string | null>(null);
  const [hoverPole, setHoverPole] = useState<string | null>(null);
  const { progress, toggleRead, setFlag } = useProgress();
  const [epochFilter, setEpochFilter] = useState<number | null>(null);
  const [open, setOpen] = useState<string | null>(blocks[0]?.id ?? null);
  const [tabs, setTabs] = useState<Record<string, Tab>>({});
  const [revealAll, setRevealAll] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [hoverPerson, setHoverPerson] = useState<string | null>(null);
  const [focusPerson, setFocusPerson] = useState<string | null>(null);
  const blockRefs = useRef<Record<string, HTMLLIElement | null>>({});

  /* Personen auf Bahnen verteilen, damit sich Punkte nicht überlappen */
  const placed = useMemo(() => {
    const all = blocks.flatMap((b) =>
      b.persons.map((p) => {
        const label = p.short ?? p.name.split(' ').slice(-1)[0];
        // geschätzte Breite von Punkt + Beschriftung in % der Achse
        const w = ((label.length * 5.8 + 24) / AXIS_PX) * 100;
        return { p, b, x: pos(p.born), label, w };
      }),
    );
    all.sort((a, z) => a.x - z.x);
    const laneEnd: number[] = [];
    return all.map((it) => {
      let lane = laneEnd.findIndex((end) => it.x > end);
      if (lane === -1) lane = laneEnd.length;
      laneEnd[lane] = it.x + it.w;
      return { ...it, lane };
    });
  }, [blocks]);
  const laneCount = Math.max(1, ...placed.map((p) => p.lane + 1));

  /* Positionen je Grundfrage auf Bahnen verteilen (Balken + Beschriftung dürfen sich nicht überlappen) */
  const posRows = useMemo(
    () =>
      dimensions.map((d) => {
        const items = positions
          .filter((p) => p.dimension === d.id)
          .map((p) => {
            const x = pos(p.from);
            const w = Math.max(0.6, pos(p.to) - x);
            const labelW = ((p.label.length * 6.2 + 12) / AXIS_PX) * 100;
            return { p, x, w, end: x + w + labelW, poleIdx: Math.max(0, d.poles.findIndex((pl) => pl.id === p.pole)) };
          })
          .sort((a, z) => a.x - z.x);
        const laneEnd: number[] = [];
        const laid = items.map((it) => {
          let lane = laneEnd.findIndex((e) => it.x > e);
          if (lane === -1) lane = laneEnd.length;
          laneEnd[lane] = it.end;
          return { ...it, lane };
        });
        return { d, items: laid, lanes: Math.max(1, laneEnd.length) };
      }),
    [dimensions, positions],
  );
  const posInfoId = hoverPos ?? pickedPos;
  const posInfo = posRows.flatMap((r) => r.items.map((it) => ({ ...it, d: r.d }))).find((it) => it.p.id === posInfoId);

  const goTo = (blockId: string, tab?: Tab, person?: string) => {
    setOpen(blockId);
    if (tab) setTabs((t) => ({ ...t, [blockId]: tab }));
    setFocusPerson(person ?? null);
    requestAnimationFrame(() =>
      blockRefs.current[blockId]?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    );
  };

  /* ─── Vorlesen ─── */
  const narrator = useNarrator();
  const [source, setSource] = useState<NarrationSource | null>(null);
  const build = (src: NarrationSource) => buildNarration(src, epochs, blocks, progressKey, progress.flags, narrator.settings);
  const listen = (src: NarrationSource) => {
    setSource(src);
    narrator.play(build(src));
  };
  const sourceTitle = !source
    ? ''
    : source.kind === 'all'
      ? 'Ganzer Zeitstrahl'
      : source.kind === 'epoch'
        ? `Epoche ${source.nr}`
        : `Block ${blocks.find((b) => b.id === source.id)?.nr ?? ''}${source.kind === 'leitfragen' ? ' · Leitfragen' : ''}`;
  const speaking = narrator.current?.target;
  const isSpeaking = (el: string) => speaking?.el === el;

  /* Optionen geändert, während vorgelesen wird: Warteschlange neu aufbauen */
  const { inhalte, personen, leitfragen: lfOpt, onlyOpen } = narrator.settings;
  useEffect(() => {
    if (source && narrator.queue.length) narrator.replace(build(source));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inhalte, personen, lfOpt, onlyOpen]);

  /* Ansicht dem Vorlesen folgen lassen: Block öffnen, Tab wählen, Antwort aufdecken, hinscrollen */
  useEffect(() => {
    const t = narrator.current?.target;
    if (!t) return;
    if (t.blockId) {
      const id = t.blockId;
      setOpen(id);
      if (t.tab) setTabs((x) => ({ ...x, [id]: t.tab! }));
    }
    if (t.reveal) setRevealed((x) => ({ ...x, [t.reveal!]: true }));
    setFocusPerson(t.person ?? null);
    if (narrator.settings.follow && t.el) {
      const sel = `[data-speak="${CSS.escape(t.el)}"]`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narrator.current?.key]);

  const activeEpoch = epochs.find((e) => e.nr === epochFilter);
  const speakingEpoch = epochs.find((e) => e.nr === speaking?.epoch);
  const hovered = placed.find((x) => x.p.name === hoverPerson);

  /* Gesamtfortschritt */
  const totals = blocks.reduce(
    (acc, b) => {
      acc.q += b.leitfragen.length;
      acc.known += b.leitfragen.filter((_, i) => progress.flags[`${progressKey}/${b.id}/${i}`] === 'known').length;
      acc.read += progress.read[`${progressKey}/${b.id}`] ? 1 : 0;
      return acc;
    },
    { q: 0, known: 0, read: 0 },
  );

  return (
    <div className="hist">
      {hasPositions && (
        <div className="hist-view" role="tablist" aria-label="Ansicht der Zeitachse">
          <button role="tab" aria-selected={axisView === 'personen'} className={axisView === 'personen' ? 'on' : ''} onClick={() => setView('personen')}>
            Personen
          </button>
          <button
            role="tab"
            aria-selected={axisView === 'positionen'}
            className={axisView === 'positionen' ? 'on' : ''}
            onClick={() => setView('positionen')}
          >
            Philosophische Positionen
          </button>
        </div>
      )}

      {/* ─── Zeitachse ─── */}
      <div className="hist-axis-scroll">
        <div className="hist-axis" style={{ '--lanes': laneCount } as CSSProperties}>
          <div className="hist-epochs">
            {epochs.map((e) => (
              <button
                key={e.nr}
                data-speak={`ep-${e.nr}`}
                className={
                  'hist-epoch' +
                  (epochFilter === e.nr ? ' on' : '') +
                  (epochFilter && epochFilter !== e.nr ? ' dim' : '') +
                  (speaking?.epoch === e.nr ? ' speaking' : '')
                }
                style={{ left: `${pos(e.from)}%`, width: `${pos(e.to) - pos(e.from)}%` }}
                onClick={() => setEpochFilter(epochFilter === e.nr ? null : e.nr)}
                title={`${e.nr}. ${e.title} (${e.range})`}
              >
                <span className="ep-nr">{e.nr}</span>
                <span className="ep-title">{e.title}</span>
              </button>
            ))}
          </div>

          {axisView === 'positionen' ? (
            <div className="hist-positions">
              {posRows.map(({ d, items, lanes }) => (
                <div key={d.id} className="pos-row">
                  <div className="pos-head">
                    <span className="pos-head-inner">
                      <strong>{d.title}</strong>
                      <span className="muted">{d.question}</span>
                      {d.poles.map((pl, i) => (
                        <span
                          key={pl.id}
                          className={'pos-chip' + (hoverPole === `${d.id}/${pl.id}` ? ' on' : '')}
                          style={{ '--c': poleColor(i) } as CSSProperties}
                          onMouseEnter={() => setHoverPole(`${d.id}/${pl.id}`)}
                          onMouseLeave={() => setHoverPole(null)}
                          title={pl.text}
                        >
                          {pl.name}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="pos-lanes" style={{ height: `calc(${lanes} * var(--lane-h))` }}>
                    {items.map(({ p, x, w, lane, poleIdx }) => {
                      const ep = epochs.find((e) => e.nr === epochFilter);
                      const outOfEpoch = ep ? p.to < ep.from || p.from > ep.to : false;
                      const otherPole = hoverPole ? hoverPole !== `${d.id}/${p.pole}` : false;
                      return (
                        <button
                          key={p.id}
                          className={
                            'pos-item' +
                            (outOfEpoch || otherPole ? ' dim' : '') +
                            (posInfoId === p.id ? ' on' : '') +
                            (hoverPole === `${d.id}/${p.pole}` ? ' hl' : '')
                          }
                          style={{ left: `${x}%`, top: `calc(${lane} * var(--lane-h))`, '--c': poleColor(poleIdx) } as CSSProperties}
                          onMouseEnter={() => setHoverPos(p.id)}
                          onMouseLeave={() => setHoverPos(null)}
                          onFocus={() => setHoverPos(p.id)}
                          onBlur={() => setHoverPos(null)}
                          onClick={() => setPickedPos(pickedPos === p.id ? null : p.id)}
                          aria-label={`${p.label}: ${d.poles[poleIdx]?.name}, ${fmtSpan(p.from, p.to)}, ${p.vertreter.join(', ')}`}
                        >
                          <span className="pos-bar" style={{ width: `${w}cqw` }} />
                          <span className="pos-label">{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div className="hist-people">
            {placed.map(({ p, b, x, lane, label }) => {
              const dim = epochFilter !== null && !b.epochs.includes(epochFilter);
              return (
                <button
                  key={p.name}
                  className={'hist-dot' + (dim ? ' dim' : '') + (hoverPerson === p.name ? ' on' : '')}
                  style={{ left: `${x}%`, top: `calc(${lane} * var(--lane-h))`, '--c': blockColor(b.nr) } as CSSProperties}
                  onMouseEnter={() => setHoverPerson(p.name)}
                  onMouseLeave={() => setHoverPerson(null)}
                  onFocus={() => setHoverPerson(p.name)}
                  onBlur={() => setHoverPerson(null)}
                  onClick={() => goTo(b.id, 'personen', p.name)}
                  aria-label={`${p.name}, ${fmtLife(p)}, Block ${b.nr}`}
                >
                  <span className="dot" />
                  <span className="dot-label">{label}</span>
                </button>
              );
            })}
          </div>
          )}

          <div className="hist-ticks">
            {TICKS.map((t) => (
              <span key={t} style={{ left: `${pos(t)}%` }}>
                {t < 0 ? `${-t} v.` : t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hist-info" aria-live="polite">
        {axisView === 'positionen' && posInfo ? (
          (() => {
            const { p, d, poleIdx } = posInfo;
            const pole = d.poles[poleIdx];
            const blk = blocks.find((b) => b.id === p.blockId);
            const rivals = d.poles.filter((pl) => pl.id !== p.pole);
            return (
              <div className="hist-info-epoch">
                <div>
                  <strong>{p.label}</strong>{' '}
                  <span className="muted">
                    ({fmtSpan(p.from, p.to)}) · {d.title}:{' '}
                  </span>
                  <span className="pos-chip static" style={{ '--c': poleColor(poleIdx) } as CSSProperties}>
                    {pole?.name}
                  </span>
                  <div>{p.note}</div>
                  <div className="small muted">
                    <strong>Vertreter:</strong> {p.vertreter.join(', ')}
                    {pole && <> · {pole.text}</>}
                    {rivals.length > 0 && <> · Gegenposition: {rivals.map((r) => r.name).join(', ')}</>}
                  </div>
                </div>
                {blk && (
                  <button className="listen ghost" onClick={() => goTo(blk.id, 'inhalte')}>
                    Zu Block {blk.nr}
                  </button>
                )}
              </div>
            );
          })()
        ) : hovered ? (
          <>
            <strong>{hovered.p.name}</strong> <span className="muted">({fmtLife(hovered.p)}) · Block {hovered.b.nr}</span>
            <div>{hovered.p.note}</div>
          </>
        ) : speakingEpoch || activeEpoch ? (
          (() => {
            const e = (speakingEpoch ?? activeEpoch)!;
            return (
              <div className="hist-info-epoch">
                <div>
                  <strong>
                    Epoche {e.nr}: {e.title}
                  </strong>{' '}
                  <span className="muted">({e.range})</span>
                  <div>{e.text}</div>
                </div>
                {narrator.supported && (
                  <button className="listen" onClick={() => listen({ kind: 'epoch', nr: e.nr })}>
                    🔊 Epoche anhören
                  </button>
                )}
              </div>
            );
          })()
        ) : (
          <span className="muted">
            {axisView === 'positionen'
              ? 'Philosophische Positionen, verortet über die Lebenszeit ihrer Vertreter. Fahre über einen Balken oder einen Pol (z. B. «Dualismus»), um Gegenpositionen zu vergleichen. Ein Klick hält die Info fest.'
              : 'Epochen nach Schmitthüsen & Krampen (2015). Fahre über eine Person oder klicke auf eine Epoche.'}
          </span>
        )}
      </div>

      {/* ─── Toolbar ─── */}
      <div className="hist-toolbar">
        <label className="switch">
          <input type="checkbox" checked={revealAll} onChange={(e) => setRevealAll(e.target.checked)} />
          <span>Alle Antworten anzeigen</span>
        </label>
        <span className="muted small">
          {totals.read}/{blocks.length} Blöcke gelernt · {totals.known}/{totals.q} Leitfragen gewusst
        </span>
      </div>

      <NarratorBar n={narrator} title={sourceTitle} onPlayAll={() => listen({ kind: 'all' })} />

      {/* ─── Blöcke ─── */}
      <ol className="hist-blocks">
        {blocks.map((b) => {
          const isOpen = open === b.id;
          const dim = epochFilter !== null && !b.epochs.includes(epochFilter);
          const tab = tabs[b.id] ?? 'inhalte';
          const readKey = `${progressKey}/${b.id}`;
          const isRead = !!progress.read[readKey];
          const known = b.leitfragen.filter((_, i) => progress.flags[`${readKey}/${i}`] === 'known').length;
          let lastGroup: string | undefined;

          return (
            <li
              key={b.id}
              ref={(el) => (blockRefs.current[b.id] = el)}
              className={
                'hist-block' +
                (isOpen ? ' open' : '') +
                (dim ? ' dim' : '') +
                (isRead ? ' read' : '') +
                (speaking?.blockId === b.id ? ' speaking' : '')
              }
              style={{ '--c': blockColor(b.nr) } as CSSProperties}
            >
              <span className="rail-dot">{isRead ? '✓' : b.nr}</span>
              <div className="hb-card">
                <button className="hb-head" onClick={() => setOpen(isOpen ? null : b.id)} aria-expanded={isOpen}>
                  <span className="hb-period">{b.period}</span>
                  <span className="hb-title">
                    Block {b.nr}: {b.title}
                  </span>
                  <span className="hb-meta">
                    {b.epochs.length < 7 && <span>Epoche {b.epochs.join(', ')}</span>}
                    <span>
                      {known}/{b.leitfragen.length} {b.leitfragenOfficial ? 'Leitfragen' : 'Zusatzfragen'}
                    </span>
                  </span>
                  <span className="chev" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="hb-body">
                    {narrator.supported && (
                      <div className="hb-listen">
                        <button className="listen" onClick={() => listen({ kind: 'block', id: b.id })}>
                          🔊 Block anhören
                        </button>
                        <button className="listen ghost" onClick={() => listen({ kind: 'leitfragen', id: b.id })}>
                          🔊 Nur {b.leitfragenOfficial ? 'Leitfragen' : 'Zusatzfragen'}
                        </button>
                      </div>
                    )}
                    <blockquote className={'kern' + (isSpeaking(`${b.id}-kern`) ? ' speaking' : '')} data-speak={`${b.id}-kern`}>
                      <span className="eyebrow">Kernaussage</span>
                      {b.kernaussage}
                    </blockquote>
                    {b.lernziele && (
                      <p className="muted small">
                        <strong>Lernziele:</strong> {b.lernziele}
                      </p>
                    )}

                    <div className="hb-tabs" role="tablist">
                      {(['inhalte', 'leitfragen', 'personen'] as Tab[]).map((t) => (
                        <button
                          key={t}
                          role="tab"
                          aria-selected={tab === t}
                          className={tab === t ? 'on' : ''}
                          onClick={() => setTabs({ ...tabs, [b.id]: t })}
                        >
                          {t === 'inhalte'
                            ? 'Inhalte'
                            : t === 'leitfragen'
                              ? `${b.leitfragenOfficial ? 'Leitfragen' : 'Zusatzfragen'} (${b.leitfragen.length})`
                              : `Personen (${b.persons.length})`}
                        </button>
                      ))}
                    </div>

                    {tab === 'inhalte' && (
                      <div className="hb-topics">
                        {b.topics.map((t, i) => (
                          <section
                            key={i}
                            className={'topic' + (isSpeaking(`${b.id}-t${i}`) ? ' speaking' : '')}
                            data-speak={`${b.id}-t${i}`}
                          >
                            <h4>{t.title}</h4>
                            <ul>
                              {t.points.map((pt, j) => (
                                <li key={j}>{pt}</li>
                              ))}
                            </ul>
                            {t.quote && (
                              <figure className="quote">
                                «{t.quote.text}»<figcaption>{t.quote.by}</figcaption>
                              </figure>
                            )}
                          </section>
                        ))}
                      </div>
                    )}

                    {tab === 'leitfragen' && (
                      <div className="lf-list">
                        {!b.leitfragenOfficial && (
                          <p className="note small">
                            Zu diesem Block gibt es (noch) keine offiziellen Leitfragen. Das sind Repetitionsfragen aus den Folien.
                          </p>
                        )}
                        {b.leitfragen.map((lf, i) => {
                          const key = `${readKey}/${i}`;
                          const shown = revealAll || revealed[key];
                          const flag = progress.flags[key];
                          const header = lf.group && lf.group !== lastGroup ? lf.group : null;
                          lastGroup = lf.group;
                          return (
                            <div key={i}>
                              {header && <h4 className="lf-group">{header}</h4>}
                              <div
                                className={'lf' + (flag ? ` ${flag}` : '') + (isSpeaking(`${b.id}-lf${i}`) ? ' speaking' : '')}
                                data-speak={`${b.id}-lf${i}`}
                              >
                                <button className="lf-q" onClick={() => setRevealed({ ...revealed, [key]: !revealed[key] })} aria-expanded={!!shown}>
                                  <span className="lf-nr">{i + 1}</span>
                                  <span>{lf.q}</span>
                                </button>
                                {shown ? (
                                  <div className="lf-a">
                                    <p>{lf.a}</p>
                                    {lf.bullets && (
                                      <ul>
                                        {lf.bullets.map((x, j) => (
                                          <li key={j}>{x}</li>
                                        ))}
                                      </ul>
                                    )}
                                    <div className="lf-rate">
                                      <button className={flag === 'known' ? 'on ok' : ''} onClick={() => setFlag(key, flag === 'known' ? null : 'known')}>
                                        ✓ Gewusst
                                      </button>
                                      <button className={flag === 'again' ? 'on again' : ''} onClick={() => setFlag(key, flag === 'again' ? null : 'again')}>
                                        ↻ Nochmals üben
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <button className="lf-reveal" onClick={() => setRevealed({ ...revealed, [key]: true })}>
                                    Antwort aufdecken
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {tab === 'personen' && (
                      <ul className="persons">
                        {[...b.persons]
                          .sort((x, y) => x.born - y.born)
                          .map((p) => (
                            <li
                              key={p.name}
                              className={(focusPerson === p.name ? 'focus' : '') + (isSpeaking(`${b.id}-p-${p.name}`) ? ' speaking' : '')}
                              data-speak={`${b.id}-p-${p.name}`}
                            >
                              <span className="p-life">{fmtLife(p)}</span>
                              <strong>{p.name}</strong>
                              <span>{p.note}</span>
                            </li>
                          ))}
                      </ul>
                    )}

                    <button className={'btn ' + (isRead ? 'done' : 'ghost')} onClick={() => toggleRead(readKey)}>
                      {isRead ? '✓ Block gelernt' : 'Block als gelernt markieren'}
                    </button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
