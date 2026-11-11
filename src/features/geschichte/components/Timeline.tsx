import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { ChapterId, LaneId, TimelineItem } from '../model';
import { BREAKS, TICKS, epochs, epochsOf, items, lanes, xOf } from '../content/timeline';
import { chapterById } from '../content';
import { Rich } from './Rich';

const ROW = 30;
const laneById = Object.fromEntries(lanes.map((l) => [l.id, l]));
const sorted = [...items].sort((a, b) => a.from - b.from || (a.to ?? a.from) - (b.to ?? b.from));

type View = 'strahl' | 'liste' | 'uebung';

/** Epochen, die ein Eintrag berührt */
function itemEpochs(it: TimelineItem): number[] {
  const to = it.to ?? it.from;
  return epochs.filter((e) => it.from < e.to && to >= e.from).map((e) => e.nr);
}

/** Epoche für die Listen-Gruppierung (bei Überlappung 4/5 gilt die Gründungsphase) */
function mainEpoch(year: number) {
  const e = epochsOf(year);
  return e.length ? Math.max(...e) : 1;
}

export function Timeline({ onOpen, focusCh, onClearFocus }: { onOpen: (ch: ChapterId) => void; focusCh?: ChapterId | null; onClearFocus?: () => void }) {
  const [view, setView] = useState<View>('strahl');
  const [sel, setSel] = useState<string | null>(null);
  const [epoch, setEpoch] = useState<number | null>(null);
  const [hidden, setHidden] = useState<Record<LaneId, boolean>>({} as Record<LaneId, boolean>);
  const [query, setQuery] = useState('');
  const detailRef = useRef<HTMLDivElement>(null);

  const visibleLanes = lanes.filter((l) => !hidden[l.id]);
  const q = query.trim().toLowerCase();

  const isActive = (it: TimelineItem) => {
    if (focusCh && it.ch !== focusCh) return false;
    if (epoch !== null && !itemEpochs(it).includes(epoch)) return false;
    if (q && !(it.label.toLowerCase().includes(q) || it.text.toLowerCase().includes(q) || it.date.toLowerCase().includes(q))) return false;
    return true;
  };

  const selItem = items.find((i) => i.id === sel) ?? null;
  const seq = sorted.filter((i) => !hidden[i.lane]);
  const step = (d: number) => {
    const idx = selItem ? seq.findIndex((i) => i.id === selItem.id) : -1;
    const next = seq[(idx + d + seq.length) % seq.length];
    setSel(next.id);
  };

  useEffect(() => {
    if (view !== 'strahl') return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const pick = (id: string) => {
    setSel(id === sel ? null : id);
  };

  return (
    <div className="gs-tl">
      <div className="ew-toolbar">
        <div className="ew-seg" role="tablist" aria-label="Ansicht">
          {(
            [
              ['strahl', 'Zeitstrahl'],
              ['liste', 'Liste'],
              ['uebung', 'Chronologie-Übung'],
            ] as [View, string][]
          ).map(([v, l]) => (
            <button key={v} role="tab" aria-selected={view === v} className={view === v ? 'on' : ''} onClick={() => setView(v)}>
              {l}
            </button>
          ))}
        </div>
        {view !== 'uebung' && (
          <input type="search" className="ew-search" placeholder="Suchen, z. B. Wundt, 1879, Säfte …" value={query} onChange={(e) => setQuery(e.target.value)} />
        )}
      </div>

      {view !== 'uebung' && (
        <div className="ew-chiprow gs-mb">
          {lanes.map((l) => (
            <button
              key={l.id}
              className={'ew-chipbtn' + (!hidden[l.id] ? ' on' : '')}
              style={{ ['--ch' as string]: l.color }}
              onClick={() => setHidden({ ...hidden, [l.id]: !hidden[l.id] })}
              aria-pressed={!hidden[l.id]}
            >
              <span className="ew-dot" /> {l.title}
            </button>
          ))}
          {focusCh && (
            <button className="ew-chipbtn on" style={{ ['--ch' as string]: chapterById[focusCh].color }} onClick={onClearFocus}>
              Nur Kapitel {chapterById[focusCh].nr} · {chapterById[focusCh].short} ✕
            </button>
          )}
          {epoch !== null && (
            <button className="ew-chipbtn on" onClick={() => setEpoch(null)}>
              Epoche {epoch} ✕
            </button>
          )}
        </div>
      )}

      {view === 'strahl' && (
        <>
          <p className="muted small gs-mb">
            Klicke auf eine <strong>Epoche</strong> oder einen <strong>Eintrag</strong>. Balken = Lebensdaten/Zeitspanne, Punkt = Ereignis. Die Achse hat wie im PDF
            <strong> Massstabswechsel</strong> (rot gestrichelt): je näher an der Gegenwart, desto gedehnter. Mit ← → durch die Einträge blättern.
          </p>
          <div className="gs-tl-scroll">
            <div className="gs-tl-inner">
              {/* Epochenband */}
              <div className="gs-tl-row gs-tl-epochrow">
                <div className="gs-tl-label">
                  <strong>Epochen</strong>
                  <span>Schmitthüsen & Krampen</span>
                </div>
                <div className="gs-tl-track gs-tl-epochs">
                  {epochs.map((e) => {
                    const l = xOf(e.from);
                    const r = xOf(e.to);
                    const w = r - l;
                    if (e.nr === 7) {
                      return (
                        <button key={e.nr} className={'gs-tl-epoch e7' + (epoch === 7 ? ' on' : '')} style={{ top: 26 }} onClick={() => setEpoch(epoch === 7 ? null : 7)} title={`${e.title} (${e.range})`}>
                          7 ab 1960 Vermischung →
                        </button>
                      );
                    }
                    return (
                      <button
                        key={e.nr}
                        className={'gs-tl-epoch' + (epoch === e.nr ? ' on' : '') + (e.row ? ' r1' : '')}
                        style={{ left: `${l * 100}%`, width: `${w * 100}%`, top: e.row ? 26 : 0 }}
                        onClick={() => setEpoch(epoch === e.nr ? null : e.nr)}
                        title={`${e.nr} ${e.title} (${e.range})`}
                      >
                        {w > 0.1 ? `${e.nr} ${e.title}` : e.nr}
                      </button>
                    );
                  })}
                </div>
              </div>

              {visibleLanes.map((lane) => {
                const its = items.filter((i) => i.lane === lane.id);
                const rows = Math.max(...its.map((i) => i.row)) + 1;
                return (
                  <div key={lane.id} className="gs-tl-row" style={{ ['--lane' as string]: lane.color } as CSSProperties}>
                    <div className="gs-tl-label">
                      <strong>{lane.title}</strong>
                    </div>
                    <div className="gs-tl-track" style={{ height: rows * ROW + 10 }}>
                      {its.map((it) => (
                        <TlItem key={it.id} it={it} active={isActive(it)} selected={sel === it.id} onClick={() => pick(it.id)} />
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Achse */}
              <div className="gs-tl-row gs-tl-axisrow">
                <div className="gs-tl-label" />
                <div className="gs-tl-track gs-tl-axis">
                  {TICKS.map((t) => (
                    <span key={t.year} className="gs-tl-tick" style={{ left: `${xOf(t.year) * 100}%` }}>
                      {t.label}
                    </span>
                  ))}
                  {BREAKS.map((b) => (
                    <span key={b} className="gs-tl-breakmark" style={{ left: `${xOf(b) * 100}%` }} aria-hidden>
                      //
                    </span>
                  ))}
                </div>
              </div>

              {/* Massstabswechsel über alle Zeilen */}
              <div className="gs-tl-breaks" aria-hidden>
                {BREAKS.map((b) => (
                  <span key={b} style={{ left: `${xOf(b) * 100}%` }} />
                ))}
              </div>
              {epoch !== null && (
                <div className="gs-tl-shade" aria-hidden>
                  <span
                    style={{
                      left: `${xOf(epochs[epoch - 1].from) * 100}%`,
                      width: `${(xOf(epochs[epoch - 1].to) - xOf(epochs[epoch - 1].from)) * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <p className="muted small gs-scrollhint">← Zeitstrahl seitlich wischen →</p>

          {epoch !== null && <EpochCard nr={epoch} />}

          <div ref={detailRef}>
            {selItem ? (
              <Detail it={selItem} onOpen={onOpen} onPrev={() => step(-1)} onNext={() => step(1)} />
            ) : (
              <div className="gs-tl-empty">Wähle einen Eintrag auf dem Zeitstrahl – oder starte mit <button className="ew-link" onClick={() => setSel(seq[0].id)}>dem ersten Eintrag</button> und blättere mit ← →.</div>
            )}
          </div>
        </>
      )}

      {view === 'liste' && <ListView isActive={isActive} hidden={hidden} sel={sel} setSel={pick} onOpen={onOpen} />}
      {view === 'uebung' && <Chronologie />}
    </div>
  );
}

function TlItem({ it, active, selected, onClick }: { it: TimelineItem; active: boolean; selected: boolean; onClick: () => void }) {
  const left = xOf(it.from) * 100;
  const cls = 'gs-ev' + (it.to !== undefined ? ' bar' : ' pt ' + (it.side ?? 'left')) + (selected ? ' on' : '') + (active ? '' : ' dim');
  const style: CSSProperties = { left: `${left}%`, top: it.row * ROW + 4 };
  if (it.to !== undefined) style.width = `max(6px, ${(xOf(it.to) - xOf(it.from)) * 100}%)`;
  return (
    <button className={cls} style={style} onClick={onClick} title={`${it.label} – ${it.date}`} aria-pressed={selected}>
      <span className="gs-ev-label">
        {it.label}
        {it.star && '*'}
      </span>
      <span className="gs-ev-mark" />
    </button>
  );
}

function EpochCard({ nr }: { nr: number }) {
  const e = epochs[nr - 1];
  return (
    <div className="gs-epochcard">
      <span className="gs-epoch-nr">{e.nr}</span>
      <div>
        <strong>{e.title}</strong> <span className="muted small">({e.range})</span>
        <div className="small">{e.text}</div>
      </div>
    </div>
  );
}

function Detail({ it, onOpen, onPrev, onNext }: { it: TimelineItem; onOpen: (ch: ChapterId) => void; onPrev: () => void; onNext: () => void }) {
  const lane = laneById[it.lane];
  const ch = chapterById[it.ch];
  return (
    <article className="gs-tl-detail" style={{ ['--lane' as string]: lane.color } as CSSProperties} aria-live="polite">
      <header>
        <div>
          <div className="ew-eyebrow">{lane.title}</div>
          <h3>{it.label.replace(/^(ab )?\d{3,4}(\/\d{2})?(er)? /, '')}</h3>
          <div className="ew-chiprow">
            <span className="gs-dates">{it.date}</span>
            {itemEpochs(it).map((n) => (
              <span key={n} className="ew-chip" title={epochs[n - 1].title}>
                Epoche {n}
              </span>
            ))}
            {it.star && <span className="ew-chip">* Datum aus Lehrbuch/Folienkarte abgeleitet</span>}
          </div>
        </div>
        <div className="ew-chiprow gs-tl-nav">
          <button className="btn ghost small" onClick={onPrev} aria-label="Früherer Eintrag">
            ←
          </button>
          <button className="btn ghost small" onClick={onNext} aria-label="Späterer Eintrag">
            →
          </button>
        </div>
      </header>
      <p>
        <Rich text={it.text} />
      </p>
      <button className="btn small" style={{ background: ch.color, borderColor: ch.color }} onClick={() => onOpen(it.ch)}>
        Zu Kapitel {ch.nr}: {ch.short} →
      </button>
    </article>
  );
}

/* ───────────── Listenansicht ───────────── */

function ListView({
  isActive,
  hidden,
  sel,
  setSel,
  onOpen,
}: {
  isActive: (it: TimelineItem) => boolean;
  hidden: Record<LaneId, boolean>;
  sel: string | null;
  setSel: (id: string) => void;
  onOpen: (ch: ChapterId) => void;
}) {
  const groups = epochs
    .map((e) => ({ e, its: sorted.filter((i) => !hidden[i.lane] && isActive(i) && mainEpoch(i.from) === e.nr) }))
    .filter((g) => g.its.length);
  if (!groups.length) return <p className="muted">Keine Einträge für diese Auswahl.</p>;
  return (
    <div className="gs-tl-list">
      {groups.map(({ e, its }) => (
        <section key={e.nr} className="gs-tl-group">
          <header>
            <span className="gs-epoch-nr">{e.nr}</span>
            <div>
              <strong>{e.title}</strong> <span className="muted small">{e.range}</span>
            </div>
          </header>
          <ul>
            {its.map((it) => {
              const lane = laneById[it.lane];
              const open = sel === it.id;
              return (
                <li key={it.id} style={{ ['--lane' as string]: lane.color } as CSSProperties} className={open ? 'on' : ''}>
                  <button className="gs-tl-li" onClick={() => setSel(it.id)} aria-expanded={open}>
                    <span className="gs-tl-li-date">{it.date.split(' (')[0]}</span>
                    <span className="gs-tl-li-dot" />
                    <span>{it.label}</span>
                  </button>
                  {open && (
                    <div className="gs-tl-li-body">
                      <p>
                        <Rich text={it.text} />
                      </p>
                      <button className="ew-link" onClick={() => onOpen(it.ch)}>
                        Zu Kapitel {chapterById[it.ch].nr}: {chapterById[it.ch].short} →
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ───────────── Chronologie-Übung ───────────── */

type Level = 'alle' | 'neuzeit' | 'ab1850';

function drawRound(level: Level, n = 5): TimelineItem[] {
  const pool = items.filter((i) => (level === 'alle' ? true : level === 'neuzeit' ? i.from >= 1500 : i.from >= 1850));
  const shuffled = shuffle(pool);
  const out: TimelineItem[] = [];
  for (const it of shuffled) {
    const gap = (o: TimelineItem) => (Math.min(o.from, it.from) < 1500 ? 50 : level === 'ab1850' ? 2 : 8);
    if (out.every((o) => Math.abs(o.from - it.from) >= gap(o))) out.push(it);
    if (out.length === n) break;
  }
  return shuffle(out);
}

function Chronologie() {
  const [level, setLevel] = useState<Level>('alle');
  const [list, setList] = useState<TimelineItem[]>(() => drawRound('alle'));
  const [checked, setChecked] = useState(false);
  const [streak, setStreak] = useState(0);

  const correct = useMemo(() => [...list].sort((a, b) => a.from - b.from), [list]);
  const allOk = checked && list.every((it, i) => it.id === correct[i].id);

  const move = (i: number, d: number) => {
    const j = i + d;
    if (j < 0 || j >= list.length) return;
    const a = [...list];
    [a[i], a[j]] = [a[j], a[i]];
    setList(a);
    setChecked(false);
  };
  const newRound = (lv = level) => {
    setList(drawRound(lv));
    setChecked(false);
  };
  const check = () => {
    setChecked(true);
    const ok = list.every((it, i) => it.id === correct[i].id);
    setStreak(ok ? streak + 1 : 0);
  };

  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Bringe die Einträge in die richtige zeitliche Reihenfolge (früh → spät)</div>
      <div className="ew-chiprow gs-mb">
        <span className="muted small">Zeitraum:</span>
        {(
          [
            ['alle', 'Ganzer Zeitstrahl'],
            ['neuzeit', 'Ab 1500'],
            ['ab1850', 'Ab 1850 (schwer)'],
          ] as [Level, string][]
        ).map(([l, t]) => (
          <button
            key={l}
            className={'ew-chipbtn' + (level === l ? ' on' : '')}
            onClick={() => {
              setLevel(l);
              newRound(l);
            }}
          >
            {t}
          </button>
        ))}
        {streak > 1 && <span className="ew-chip">🔥 {streak} Runden in Folge</span>}
      </div>
      <ol className="gs-chrono">
        {list.map((it, i) => {
          const lane = laneById[it.lane];
          const ok = checked && it.id === correct[i].id;
          return (
            <li key={it.id} className={checked ? (ok ? 'ok' : 'bad') : ''} style={{ ['--lane' as string]: lane.color } as CSSProperties}>
              <span className="gs-chrono-nr">{i + 1}</span>
              <span className="gs-chrono-text">
                <strong>{it.label.replace(/^(ab )?\d{3,4}(\/\d{2})?(er)?( Jh\.)? /, '')}</strong>
                <span className="muted small">{lane.title}</span>
                {checked && (
                  <span className="small">
                    {it.date} · Epoche {itemEpochs(it).join('/')}
                  </span>
                )}
              </span>
              <span className="gs-chrono-btns">
                <button className="btn ghost small" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Nach oben">
                  ↑
                </button>
                <button className="btn ghost small" onClick={() => move(i, 1)} disabled={i === list.length - 1} aria-label="Nach unten">
                  ↓
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      {checked && (
        <div className={'ew-trainer-fb ' + (allOk ? 'ok' : 'bad')}>
          {allOk ? 'Alles richtig!' : 'Noch nicht ganz. Richtige Reihenfolge: ' + correct.map((c) => c.date.split(' (')[0].split(' · ')[0]).join(' → ')}
        </div>
      )}
      <div className="ew-chiprow gs-mt">
        <button className="btn" onClick={check}>
          Prüfen
        </button>
        <button className="btn ghost" onClick={() => newRound()}>
          Neue Runde
        </button>
      </div>
      <p className="ew-widget-note">Tipp: Die Labels sind ohne Jahreszahl – erst nach dem Prüfen siehst du Datum und Epoche.</p>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
