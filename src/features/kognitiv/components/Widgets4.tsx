import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { Rich } from './Rich';
import { keyAct, Seg, Shell, SortTrainer, type SortItem } from './WidgetKit';

/* Interaktive Grafiken zu «Aufmerksamkeit, Teil 2» (visuelle Aufmerksamkeit, F. 22–42). */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);
const ms = (v: number) => (Number.isNaN(v) ? '–' : `${Math.round(v)} ms`);

/** Steigung der Regressionsgeraden (ms pro Element) */
function slope(pts: [number, number][]) {
  if (pts.length < 2) return NaN;
  const mx = mean(pts.map((p) => p[0]));
  const my = mean(pts.map((p) => p[1]));
  let sxy = 0;
  let sxx = 0;
  for (const [x, y] of pts) {
    sxy += (x - mx) * (y - my);
    sxx += (x - mx) ** 2;
  }
  return sxx ? sxy / sxx : NaN;
}

/* ══════════════ Spatial Cueing – Selbstversuch ══════════════ */

type CueCond = 'neutral' | 'valide' | 'invalide';
type CueStage = 'fix' | 'cue' | 'delay' | 'test' | 'feedback';

interface CueTrial {
  cond: CueCond;
  side: 'l' | 'r';
}

const CUE_COLORS: Record<CueCond, string> = { valide: 'var(--ew-s3)', neutral: 'var(--muted)', invalide: 'var(--ew-s2)' };
/** grob aus Abb. 16 (F. 22) abgelesen */
const CUE_REF: Record<CueCond, number> = { valide: 300, neutral: 335, invalide: 372 };

function makeCueTrials(): CueTrial[] {
  // 50 / 40 / 10 % wie auf F. 22 → 20 neutral, 16 valide, 4 invalide
  const conds: CueCond[] = [...Array(20).fill('neutral'), ...Array(16).fill('valide'), ...Array(4).fill('invalide')];
  return shuffle(conds).map((cond) => ({ cond, side: Math.random() < 0.5 ? 'l' : 'r' }));
}

export function Cueing() {
  const [trials, setTrials] = useState<CueTrial[] | null>(null);
  const [i, setI] = useState(0);
  const [stage, setStage] = useState<CueStage>('fix');
  const [early, setEarly] = useState(false);
  const [res, setRes] = useState<{ cond: CueCond; rt: number }[]>([]);
  const [showRef, setShowRef] = useState(true);
  const t0 = useRef(0);

  const tr = trials?.[i];
  const done = !!trials && i >= trials.length;

  // Ablauf eines Durchgangs: Fixation → Cue (200 ms) → Delay (300–700 ms) → Test
  useEffect(() => {
    if (!trials || done) return;
    let id: number;
    if (stage === 'fix') id = window.setTimeout(() => setStage('cue'), 500);
    else if (stage === 'cue') id = window.setTimeout(() => setStage('delay'), 200);
    else if (stage === 'delay')
      id = window.setTimeout(() => {
        t0.current = performance.now();
        setStage('test');
      }, 300 + Math.random() * 400);
    else if (stage === 'test') id = window.setTimeout(() => respond(true), 1500);
    else
      id = window.setTimeout(() => {
        setEarly(false);
        setI((n) => n + 1);
        setStage('fix');
      }, early ? 900 : 350);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trials, i, stage]);

  const respond = (timeout = false) => {
    if (!tr || stage === 'feedback') return;
    if (stage !== 'test') {
      // zu früh: Durchgang wird ohne Wertung wiederholt
      setEarly(true);
      setTrials((t) => (t ? [...t.slice(0, i + 1), { ...t[i] }, ...t.slice(i + 1)] : t));
      setStage('feedback');
      return;
    }
    if (!timeout) setRes((r) => [...r, { cond: tr.cond, rt: performance.now() - t0.current }]);
    setStage('feedback');
  };

  useEffect(() => {
    if (!trials || done) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        respond();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const start = () => {
    setTrials(makeCueTrials());
    setI(0);
    setRes([]);
    setEarly(false);
    setStage('fix');
  };

  const m: Record<CueCond, number> = {
    valide: mean(res.filter((r) => r.cond === 'valide').map((r) => r.rt)),
    neutral: mean(res.filter((r) => r.cond === 'neutral').map((r) => r.rt)),
    invalide: mean(res.filter((r) => r.cond === 'invalide').map((r) => r.rt)),
  };
  const max = Math.max(450, ...Object.values(m).filter((v) => !Number.isNaN(v))) * 1.1;
  const conds: CueCond[] = ['valide', 'neutral', 'invalide'];

  const arrow = tr && tr.cond !== 'neutral' ? ((tr.cond === 'valide') === (tr.side === 'r') ? '→' : '←') : null;

  return (
    <Shell
      title="Selbstversuch: Spatial Cueing (Posner et al., 1978)"
      note="40 Durchgänge im Verhältnis der Folie: 50 % neutral, 40 % valide, 10 % invalide (F. 22). Am Bildschirm sind die Zeiten länger als im Labor; entscheidend sind Gewinn und Kosten relativ zur neutralen Baseline. Die Referenzwerte sind grob aus Abb. 16 abgelesen."
    >
      {!trials ? (
        <div className="pk-detail">
          <p>
            <strong>Aufgabe:</strong> Schau die ganze Zeit auf die <strong>Mitte</strong>. Erscheint in einem der beiden Kästchen ein Punkt, drücke so schnell wie
            möglich die <kbd>Leertaste</kbd> (oder tippe auf das Feld). Vorher erscheint in der Mitte ein <strong>Cue</strong>: ein Kreuz (neutral) oder ein Pfeil, der
            meist – aber nicht immer – richtig zeigt.
          </p>
          <button className="btn small" onClick={start}>
            Versuch starten (ca. 1 Min.)
          </button>
        </div>
      ) : !done && tr ? (
        <div className="kg-stroop">
          <div className="muted small">
            Durchgang {Math.min(i + 1, trials.length)} / {trials.length}
          </div>
          <div
            className="kg-cue-stage"
            role="button"
            tabIndex={0}
            aria-label="Reagieren"
            onPointerDown={(e) => {
              e.preventDefault();
              respond();
            }}
          >
            <svg viewBox="0 0 300 110" aria-hidden="true">
              <rect x={30} y={30} width={50} height={50} className="kg-cue-box" />
              <rect x={220} y={30} width={50} height={50} className="kg-cue-box" />
              {stage === 'cue' ? (
                <text x={150} y={66} className="kg-cue-sym">
                  {arrow ?? '+'}
                </text>
              ) : (
                <circle cx={150} cy={55} r={3} className="kg-cue-fixdot" />
              )}
              {stage === 'test' && <circle cx={tr.side === 'l' ? 55 : 245} cy={55} r={8} className="kg-cue-target" />}
              {stage === 'feedback' && early && (
                <text x={150} y={100} className="kg-cue-warn">
                  zu früh – Durchgang wird wiederholt
                </text>
              )}
            </svg>
          </div>
        </div>
      ) : (
        <div className="pk-detail">
          <h4>Dein Ergebnis</h4>
          {conds.map((c) => (
            <div key={c} className="ew-bar-row">
              <span>
                {c} <span className="muted small">(n = {res.filter((r) => r.cond === c).length})</span>
              </span>
              <span className="ew-bar-track">
                <span className="ew-bar-fill" style={{ width: `${((m[c] || 0) / max) * 100}%`, background: CUE_COLORS[c] }} />
              </span>
              <span className="ew-bar-value">{ms(m[c])}</span>
            </div>
          ))}
          <p className="pk-mt">
            <strong>Gewinn</strong> (neutral − valide): <strong className="pk-big">{ms(m.neutral - m.valide)}</strong> · <strong>Kosten</strong> (invalide −
            neutral): <strong className="pk-big">{ms(m.invalide - m.neutral)}</strong>
          </p>
          <p className="small">
            {m.valide < m.neutral && m.neutral < m.invalide
              ? 'Genau das Muster von Posner: Der Pfeil hat deine Aufmerksamkeit verdeckt (ohne Augenbewegung) an den angekündigten Ort verschoben.'
              : 'Bei nur 4 invaliden Durchgängen schwanken die Werte stark – probier es nochmals, das typische Muster ist valide < neutral < invalide.'}
          </p>
          <label className="ew-check">
            <input type="checkbox" checked={showRef} onChange={(e) => setShowRef(e.target.checked)} /> Werte der Folie zeigen
          </label>
          {showRef && (
            <p className="small">
              Folie (ca.): valide {CUE_REF.valide} ms · neutral {CUE_REF.neutral} ms (Baseline) · invalide {CUE_REF.invalide} ms → Gewinn ≈{' '}
              {CUE_REF.neutral - CUE_REF.valide} ms, Kosten ≈ {CUE_REF.invalide - CUE_REF.neutral} ms.
            </p>
          )}
          <button className="btn small" onClick={start}>
            Nochmals
          </button>
        </div>
      )}
    </Shell>
  );
}

/* ══════════════ SOA: peripherer vs. symbolischer Cue ══════════════ */

/** schematische Nachbildung der Kurven aus Abb. 17 (F. 23) */
const benefit = (soa: number, t0: number, tau: number) => (soa <= t0 ? 0 : 19.5 * (1 - Math.exp(-(((soa - t0) / tau) ** 1.6))));
const periph = (s: number) => benefit(s, 18, 55);
const symb = (s: number) => benefit(s, 100, 75);

export function Soa() {
  const [soa, setSoa] = useState(150);
  const W = 420;
  const H = 220;
  const x = (v: number) => 44 + (v / 400) * (W - 60);
  const y = (v: number) => H - 32 - (v / 22) * (H - 52);
  const path = (f: (s: number) => number) =>
    Array.from({ length: 81 }, (_, k) => k * 5)
      .map((s, k) => `${k ? 'L' : 'M'} ${x(s).toFixed(1)} ${y(f(s)).toFixed(1)}`)
      .join(' ');
  const p = periph(soa);
  const s = symb(soa);
  const text =
    soa < 100
      ? 'Nur der **periphere** Cue hilft schon – er zieht die Aufmerksamkeit **automatisch** an. Der symbolische Pfeil muss erst **interpretiert** werden: noch kein Nutzen.'
      : soa < 150
        ? 'Der periphere Cue ist fast am Plateau; der **symbolische** beginnt erst jetzt zu wirken (ab ca. 100 ms).'
        : soa < 300
          ? 'Peripher: **Plateau ≈ 20 ms** (ab ca. 150 ms). Symbolisch: steigt noch – die **willentliche** Verschiebung braucht länger.'
          : 'Ab ca. **300 ms** sind **beide Cue-Arten gleich wirksam**. (F. 23)';
  return (
    <Shell title="Interaktiv: Nutzen eines validen Cues nach SOA" note="Kurven schematisch nach Abb. 17 (F. 23) nachgebildet; Zwischenwerte sind daher nur ungefähr.">
      <div className="pk-split kg-split-wide">
        <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg" role="img" aria-label="Nutzen des Cues in Abhängigkeit von der SOA">
          {[0, 10, 20].map((t) => (
            <g key={t}>
              <line className="pk-grid" x1={x(0)} x2={x(400)} y1={y(t)} y2={y(t)} />
              <text className="pk-t s" x={30} y={y(t) + 4}>
                {t}
              </text>
            </g>
          ))}
          {[0, 100, 200, 300, 400].map((t) => (
            <text key={t} className="pk-t s" x={x(t)} y={H - 16}>
              {t}
            </text>
          ))}
          <text className="pk-t s" x={x(200)} y={H - 2}>
            SOA (ms): Beginn Cue bis Beginn Test
          </text>
          <text className="pk-t s" x={11} y={y(11)} transform={`rotate(-90 11 ${y(11)})`}>
            Nutzen (ms)
          </text>
          <line className="pk-axis-line" x1={x(0)} x2={x(400)} y1={y(0)} y2={y(0)} />
          <line className="pk-axis-line" x1={x(0)} x2={x(0)} y1={y(22)} y2={y(0)} />
          <path d={path(periph)} className="pk-line s2" />
          <path d={path(symb)} className="pk-line s1" />
          <line className="pk-marker" x1={x(soa)} x2={x(soa)} y1={y(22)} y2={y(0)} />
          <circle cx={x(soa)} cy={y(p)} r={6} className="pk-dot s2" />
          <circle cx={x(soa)} cy={y(s)} r={6} className="pk-dot s1" />
        </svg>
        <div className="pk-detail">
          <label className="pk-slider">
            <span>
              SOA: <strong>{soa} ms</strong>
            </span>
            <input type="range" min={0} max={400} step={10} value={soa} onChange={(e) => setSoa(+e.target.value)} />
          </label>
          <div className="ew-bar-row">
            <span>
              <span className="kg-legend s2" /> peripher
            </span>
            <span className="ew-bar-track">
              <span className="ew-bar-fill" style={{ width: `${(p / 20) * 100}%`, background: 'var(--ew-s2)' }} />
            </span>
            <span className="ew-bar-value">{p.toFixed(0)} ms</span>
          </div>
          <div className="ew-bar-row">
            <span>
              <span className="kg-legend s1" /> symbolisch
            </span>
            <span className="ew-bar-track">
              <span className="ew-bar-fill" style={{ width: `${(s / 20) * 100}%`, background: 'var(--ew-s1)' }} />
            </span>
            <span className="ew-bar-value">{s.toFixed(0)} ms</span>
          </div>
          <p className="small pk-mt">
            <Rich text={text} />
          </p>
        </div>
      </div>
    </Shell>
  );
}

/* ══════════════ Zuordnen: peripher vs. symbolisch ══════════════ */

const CUE_CATS = [
  { id: 'peri', label: 'peripher (exogen)', color: '#eb6834' },
  { id: 'symb', label: 'symbolisch (endogen)', color: '#2a78d6' },
];
const CUE_ITEMS: SortItem[] = [
  { text: 'Aufblinken eines Kästchens am möglichen Zielort', cat: 'peri', why: '(F. 23)' },
  { text: 'Pfeil in der Bildschirmmitte', cat: 'symb', why: 'Muss interpretiert werden – auch wenn er «auf einen Ort zeigt». (F. 23)' },
  { text: 'der Pfeil-Cue im Posner-Paradigma (F. 22)', cat: 'symb', why: 'Im Paradigma von F. 22 ist der Pfeil ein symbolischer Cue.' },
  { text: 'zieht die Aufmerksamkeit automatisch/reflexhaft an', cat: 'peri', why: '(F. 23)' },
  { text: 'muss erst interpretiert werden; Verschiebung willentlich', cat: 'symb', why: '(F. 23)' },
  { text: 'Nutzen schon kurz nach 0 ms SOA', cat: 'peri', why: '(F. 23)' },
  { text: 'bis ca. 100 ms SOA kein Nutzen', cat: 'symb', why: '(F. 23)' },
  { text: 'Plateau (≈ 20 ms Nutzen) bei ca. 150 ms SOA', cat: 'peri', why: '(F. 23)' },
  { text: 'Plateau erst bei ca. 300 ms SOA', cat: 'symb', why: '(F. 23)' },
  { text: 'reizgetriebene Kontrolle (Corbetta & Shulman, 2002)', cat: 'peri', why: 'Reizgetrieben = exogen. (LB S. 53)' },
  { text: 'zielgerichtete Kontrolle (Corbetta & Shulman, 2002)', cat: 'symb', why: 'Zielgerichtet = endogen. (LB S. 53)' },
  { text: 'das Wort «rechts» in der Bildschirmmitte', cat: 'symb', why: 'Muss gelesen und interpretiert werden. [Ergänzung]' },
  { text: 'ein Licht leuchtet plötzlich am Strassenrand auf', cat: 'peri', why: 'Plötzliches Ereignis am Ort selbst. [Ergänzung]' },
];

export function CueSort() {
  return (
    <Shell title="Zuordnen: peripherer oder symbolischer Cue?" note="Merksatz: peripher = exogen = automatisch; symbolisch = endogen = willentlich.">
      <SortTrainer categories={CUE_CATS} items={CUE_ITEMS} prompt="Peripher oder symbolisch –" />
    </Shell>
  );
}

/* ══════════════ Spotlight / Zoom-Linse ══════════════ */

const SP_LETTERS = 'KXRTMZHLAWPSEVNBDFGCQUYO';
const SP_COLS = 8;
const SP_ROWS = 3;

export function Spotlight() {
  const [spots, setSpots] = useState<[number, number][]>([[180, 75]]);
  const [r, setR] = useState(55);
  const [move, setMove] = useState<'gleiten' | 'springen'>('gleiten');
  const [split, setSplit] = useState(false);
  const next = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const W = 360;
  const H = 150;
  const cells = useMemo(
    () =>
      Array.from({ length: SP_COLS * SP_ROWS }, (_, k) => ({
        x: 30 + (k % SP_COLS) * 43,
        y: 30 + Math.floor(k / SP_COLS) * 45,
        l: SP_LETTERS[k],
      })),
    [],
  );
  const radius = split ? r * 0.7 : r;
  const lit = (c: { x: number; y: number }) => spots.some(([sx, sy]) => (c.x - sx) ** 2 + (c.y - sy) ** 2 <= radius ** 2);

  const place = (e: MouseEvent<SVGSVGElement>) => {
    const box = svgRef.current?.getBoundingClientRect();
    if (!box) return;
    const p: [number, number] = [((e.clientX - box.left) / box.width) * W, ((e.clientY - box.top) / box.height) * H];
    if (!split) setSpots([p]);
    else {
      const k = next.current;
      next.current = 1 - k;
      setSpots((s) => (k === 0 ? [p, s[1] ?? [300, 75]] : [s[0], p]));
    }
  };
  const toggleSplit = (on: boolean) => {
    setSplit(on);
    next.current = 0;
    setSpots(on ? [[90, 75], [270, 75]] : [[180, 75]]);
  };
  const nLit = cells.filter(lit).length;

  return (
    <Shell
      title="Interaktiv: Spotlight und Zoom-Linse"
      note="Klicke ins Feld, um den Spotlight zu verschieben. Die Folie stellt Geschwindigkeit, Bewegungsablauf, Grösse und Einheit als **offene Fragen** (F. 24) – die Schalter zeigen die Alternativen, nicht die Antworten. Zoom-Linse nach Eriksen & St. James (1986) [Ergänzung]."
    >
      <div className="ew-chiprow pk-mb">
        <Seg
          label="Bewegungsablauf"
          value={move}
          onChange={setMove}
          options={[
            ['gleiten', 'gleitet über Zwischenorte'],
            ['springen', 'springt'],
          ]}
        />
        <label className="ew-check">
          <input type="checkbox" checked={split} onChange={(e) => toggleSplit(e.target.checked)} /> geteilter Fokus (Einheit?)
        </label>
      </div>
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="pk-svg kg-spot" onClick={place} role="img" aria-label="Buchstabenfeld mit Aufmerksamkeits-Spotlight">
        <rect width={W} height={H} rx={10} className="kg-screen" />
        {spots.map(([sx, sy], k) => (
          <circle
            key={k}
            r={radius}
            className={'kg-spot-light' + (move === 'gleiten' ? ' glide' : '')}
            style={{ transform: `translate(${sx}px, ${sy}px)` }}
          />
        ))}
        {cells.map((c, k) => (
          <text key={k} x={c.x} y={c.y + 7} className={'kg-spot-l' + (lit(c) ? ' on' : '')}>
            {c.l}
          </text>
        ))}
      </svg>
      <label className="pk-slider pk-mt">
        <span>
          Grösse des Fokus (Zoom-Linse): <strong>{r < 45 ? 'eng' : r > 75 ? 'weit' : 'mittel'}</strong>
        </span>
        <input type="range" min={25} max={110} value={r} onChange={(e) => setR(+e.target.value)} />
      </label>
      <p className="small">
        <strong>{nLit}</strong> von {cells.length} Buchstaben liegen im Fokus: Sie werden <strong>rascher und gründlicher</strong> verarbeitet (
        <strong>Verstärkung</strong>), die übrigen <strong>gehemmt</strong>. (F. 24)
        {split && ' Ob der Fokus wirklich teilbar ist, ist eine der offenen Fragen der Folie.'}
      </p>
    </Shell>
  );
}

/* ══════════════ Visuelle Suche – Selbstversuch ══════════════ */

type SearchMode = 'merkmal' | 'verbindung';
const SET_SIZES = [5, 15, 25] as const;
const GRID_C = 7;
const GRID_R = 5;

interface SearchItem {
  x: number;
  y: number;
  letter: 'X' | 'O';
  red: boolean;
}
interface SearchTrial {
  n: number;
  present: boolean;
  items: SearchItem[];
}
interface SearchResult {
  mode: SearchMode;
  n: number;
  present: boolean;
  rt: number;
  ok: boolean;
}

function makeDisplay(mode: SearchMode, n: number, present: boolean): SearchItem[] {
  const slots = shuffle(Array.from({ length: GRID_C * GRID_R }, (_, k) => k)).slice(0, n);
  return slots.map((s, k) => {
    const x = 26 + (s % GRID_C) * 48 + (Math.random() * 14 - 7);
    const y = 24 + Math.floor(s / GRID_C) * 42 + (Math.random() * 12 - 6);
    if (present && k === 0) return { x, y, letter: 'X', red: true };
    // Merkmalssuche: nur blaue X; Verbindungssuche: blaue X und rote O
    if (mode === 'merkmal' || k % 2 === 0) return { x, y, letter: 'X', red: false };
    return { x, y, letter: 'O', red: true };
  });
}

function makeSearchBlock(mode: SearchMode): SearchTrial[] {
  const t: SearchTrial[] = [];
  for (const n of SET_SIZES) for (const present of [true, false]) for (let k = 0; k < 3; k++) t.push({ n, present, items: makeDisplay(mode, n, present) });
  return shuffle(t);
}

/** Referenzwerte aus Abb. 19 (F. 29) */
const SEARCH_REF: Record<SearchMode, { present: [number, number]; absent: [number, number] }> = {
  merkmal: { present: [450, 450], absent: [460, 460] },
  verbindung: { present: [500, 600], absent: [500, 700] },
};
const MODE_COLOR: Record<SearchMode, string> = { merkmal: 'var(--ew-s2)', verbindung: 'var(--ew-s1)' };

export function VisuelleSuche() {
  const [mode, setMode] = useState<SearchMode>('merkmal');
  const [block, setBlock] = useState<SearchTrial[] | null>(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fb, setFb] = useState<null | boolean>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showRef, setShowRef] = useState(true);
  const t0 = useRef(0);
  const running = !!block && i < block.length;

  useEffect(() => {
    if (!running) return;
    setVisible(false);
    const id = window.setTimeout(() => {
      setFb(null);
      setVisible(true);
      t0.current = performance.now();
    }, 700);
    return () => window.clearTimeout(id);
  }, [block, i, running]);

  const answer = (present: boolean) => {
    if (!block || !visible) return;
    const tr = block[i];
    const ok = present === tr.present;
    setResults((r) => [...r, { mode, n: tr.n, present: tr.present, rt: performance.now() - t0.current, ok }]);
    setFb(ok);
    setVisible(false);
    setI(i + 1);
  };

  useEffect(() => {
    if (!running) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'j' || e.key === 'J') answer(true);
      if (e.key === 'f' || e.key === 'F') answer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const start = (m: SearchMode) => {
    setMode(m);
    setResults((r) => r.filter((x) => x.mode !== m));
    setBlock(makeSearchBlock(m));
    setI(0);
    setFb(null);
  };

  // Mittelwerte (nur korrekte Antworten) pro Modus × anwesend × Set Size
  const series = (['merkmal', 'verbindung'] as SearchMode[]).flatMap((m) =>
    [true, false].map((present) => {
      const pts = SET_SIZES.map((n) => [n, mean(results.filter((r) => r.ok && r.mode === m && r.present === present && r.n === n).map((r) => r.rt))] as [number, number]).filter(
        (p) => !Number.isNaN(p[1]),
      );
      return { m, present, pts, b: slope(pts) };
    }),
  );
  const hasData = series.some((s) => s.pts.length);
  const allY = series.flatMap((s) => s.pts.map((p) => p[1]));
  const yMax = Math.max(800, ...allY) * 1.08;
  const yMin = 400;
  const W = 420;
  const H = 240;
  const x = (n: number) => 54 + ((n - 3) / 24) * (W - 74);
  const y = (v: number) => H - 30 - ((v - yMin) / (yMax - yMin)) * (H - 50);
  const ticks = Array.from({ length: 8 }, (_, k) => 400 + k * 200).filter((t) => t <= yMax);
  const errors = results.filter((r) => !r.ok).length;
  const tr = block?.[i];

  return (
    <Shell
      title="Selbstversuch: Merkmals- vs. Verbindungssuche"
      note="Je Block 18 Durchgänge (Set Size 5/15/25 × Ziel da/nicht da × 3). Gewertet werden nur richtige Antworten. Am Bildschirm sind die RTs länger als in Abb. 19 – vergleiche die Steigungen, nicht die absolute Höhe. Referenzlinien: F. 29."
    >
      {running && tr ? (
        <div className="kg-stroop">
          <div className="muted small">
            {mode === 'merkmal' ? 'Merkmalssuche' : 'Verbindungssuche'} · Durchgang {i + 1} / {block.length} · Ziel: <strong style={{ color: '#dc2626' }}>rotes X</strong>
          </div>
          <div className="kg-search-stage">
            <svg viewBox="0 0 340 210" aria-label="Suchdisplay">
              {visible ? (
                tr.items.map((it, k) => (
                  <text key={k} x={it.x} y={it.y + 9} className="kg-search-l" fill={it.red ? '#dc2626' : '#2563eb'}>
                    {it.letter}
                  </text>
                ))
              ) : (
                <text x={170} y={113} className="kg-search-fix">
                  {fb === false ? '✗' : '+'}
                </text>
              )}
            </svg>
          </div>
          <div className="kg-search-btns">
            <button className="kg-swatch" style={{ ['--sw' as string]: '#71717a' }} disabled={!visible} onClick={() => answer(false)}>
              <kbd>F</kbd> nicht da
            </button>
            <button className="kg-swatch" style={{ ['--sw' as string]: '#dc2626' }} disabled={!visible} onClick={() => answer(true)}>
              <kbd>J</kbd> rotes X da
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="pk-detail pk-mb">
            <p>
              Suche das <strong style={{ color: '#dc2626' }}>rote X</strong>. Drücke <kbd>J</kbd>, wenn es da ist, <kbd>F</kbd>, wenn nicht (oder tippe auf die
              Knöpfe). Mach <strong>beide</strong> Blöcke und vergleiche die Steigungen.
            </p>
            <div className="ew-chiprow">
              <button className="btn small" onClick={() => start('merkmal')}>
                Merkmalssuche starten (rot unter blau)
              </button>
              <button className="btn small" onClick={() => start('verbindung')}>
                Verbindungssuche starten (+ rote O)
              </button>
            </div>
          </div>
          <div className="pk-split kg-split-wide">
            <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg" role="img" aria-label="Reaktionszeit nach Set Size">
              {ticks.map((t) => (
                <g key={t}>
                  <line className="pk-grid" x1={x(3)} x2={x(27)} y1={y(t)} y2={y(t)} />
                  <text className="pk-t s" x={36} y={y(t) + 4}>
                    {t}
                  </text>
                </g>
              ))}
              {SET_SIZES.map((n) => (
                <text key={n} className="pk-t s" x={x(n)} y={H - 14}>
                  {n}
                </text>
              ))}
              <text className="pk-t s" x={x(15)} y={H}>
                Set Size (Anzahl Elemente)
              </text>
              <text className="pk-t s" x={11} y={y((yMax + yMin) / 2)} transform={`rotate(-90 11 ${y((yMax + yMin) / 2)})`}>
                RT (ms)
              </text>
              <line className="pk-axis-line" x1={x(3)} x2={x(27)} y1={H - 30} y2={H - 30} />
              <line className="pk-axis-line" x1={x(3)} x2={x(3)} y1={20} y2={H - 30} />
              {showRef &&
                (['merkmal', 'verbindung'] as SearchMode[]).flatMap((m) =>
                  (['present', 'absent'] as const).map((k) => (
                    <line
                      key={m + k}
                      x1={x(5)}
                      x2={x(25)}
                      y1={y(SEARCH_REF[m][k][0])}
                      y2={y(SEARCH_REF[m][k][1])}
                      className="kg-ref-line"
                      stroke={MODE_COLOR[m]}
                      strokeDasharray={k === 'absent' ? '2 5' : '7 4'}
                    />
                  )),
                )}
              {series.map((s) =>
                s.pts.length ? (
                  <g key={s.m + s.present}>
                    <path
                      d={s.pts.map((p, k) => `${k ? 'L' : 'M'} ${x(p[0])} ${y(p[1])}`).join(' ')}
                      className="pk-line"
                      stroke={MODE_COLOR[s.m]}
                      strokeDasharray={s.present ? undefined : '6 4'}
                    />
                    {s.pts.map((p) => (
                      <circle
                        key={p[0]}
                        cx={x(p[0])}
                        cy={y(p[1])}
                        r={5.5}
                        fill={s.present ? MODE_COLOR[s.m] : 'var(--surface)'}
                        stroke={MODE_COLOR[s.m]}
                        strokeWidth={2}
                      />
                    ))}
                  </g>
                ) : null,
              )}
            </svg>
            <div className="pk-detail">
              <p className="small">
                <span className="kg-legend s2" /> Merkmalssuche · <span className="kg-legend s1" /> Verbindungssuche · gefüllt = Ziel da, leer/gestrichelt = Ziel
                nicht da
              </p>
              {hasData ? (
                <table className="kg-slope-table">
                  <thead>
                    <tr>
                      <th />
                      <th>da</th>
                      <th>nicht da</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(['merkmal', 'verbindung'] as SearchMode[]).map((m) => (
                      <tr key={m}>
                        <th>{m === 'merkmal' ? 'Merkmal' : 'Verbindung'}</th>
                        {[true, false].map((pr) => {
                          const b = series.find((s) => s.m === m && s.present === pr)!.b;
                          return <td key={String(pr)}>{Number.isNaN(b) ? '–' : `${b.toFixed(0)} ms/Obj.`}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="small muted">Noch keine eigenen Daten – starte einen Block.</p>
              )}
              {hasData && <p className="small">{errors} Fehler (nicht gewertet).</p>}
              <label className="ew-check">
                <input type="checkbox" checked={showRef} onChange={(e) => setShowRef(e.target.checked)} /> Referenzlinien der Folie (F. 29)
              </label>
              <p className="small">
                <Rich text="Erwartung: Merkmalssuche **flach (≈ 0 ms/Objekt)**; Verbindungssuche **steigt**, und ohne Ziel etwa **doppelt so steil** wie mit Ziel (selbstabbrechend)." />
              </p>
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

/* ══════════════ Zuordnen: Merkmals- vs. Verbindungssuche ══════════════ */

const SUCHE_CATS = [
  { id: 'merkmal', label: 'Merkmalssuche', color: '#eb6834' },
  { id: 'verbindung', label: 'Verbindungssuche', color: '#2a78d6' },
];
const SUCHE_ITEMS: SortItem[] = [
  { text: 'rotes X unter blauen X', cat: 'merkmal', why: 'Farbe allein definiert das Ziel → Pop-out. (F. 25)' },
  { text: 'rotes X unter blauen X und roten O', cat: 'verbindung', why: 'Weder «rot» noch «X» allein reicht. (F. 27)' },
  { text: 'X unter O', cat: 'merkmal', why: 'Unterschied in einer Dimension (Form). (F. 28)' },
  { text: 'T unter I und Y', cat: 'merkmal', why: 'Der waagrechte Querstrich ist einzigartig → ca. 400 ms. (LB S. 61)' },
  { text: 'T unter I und Z', cat: 'verbindung', why: 'Alle Teilmerkmale kommen auch bei den Distraktoren vor → über 800 ms. (LB S. 61)' },
  { text: 'hellrote Jacke unter weissen Jacken', cat: 'merkmal', why: '(LB S. 60–61)' },
  { text: 'senkrechter Balken unter waagrechten Balken', cat: 'merkmal', why: 'Orientierung ist ein elementares Merkmal. (F. 26)' },
  { text: 'offener Ring unter geschlossenen Ringen', cat: 'merkmal', why: 'Form/Geschlossenheit ist ein elementares Merkmal. (F. 26)' },
  { text: 'Punktgruppe mit anderer Anzahl', cat: 'merkmal', why: '«Neu: Anzahl» als elementares Merkmal. (F. 26)' },
  { text: 'rote Senkrechte unter roten Waagrechten und grünen Senkrechten', cat: 'verbindung', why: 'Erst die Kombination Farbe + Orientierung definiert das Ziel. (F. 30)' },
  { text: 'RT steigt linear mit der Set Size', cat: 'verbindung', why: '5–15 bzw. 10–30 ms/Objekt. (F. 29)' },
  { text: 'Steigung ≈ 0 ms/Objekt, auch ohne Ziel', cat: 'merkmal', why: '(F. 29)' },
  { text: 'ohne Ziel etwa doppelt so steil wie mit Ziel', cat: 'verbindung', why: 'Selbstabbrechende Suche: n/2 vs. n Elemente. (F. 29)' },
  { text: 'Aufmerksamkeit muss die Anordnung Ort für Ort durchgehen', cat: 'verbindung', why: 'FIT: Bindung nur am beachteten Ort. (LB S. 62)' },
];

export function SucheSort() {
  return (
    <Shell title="Zuordnen: Merkmals- oder Verbindungssuche?" note="Entscheidend ist, ob das Ziel durch ein einzigartiges Merkmal definiert ist – nicht, ob «Farbe» vorkommt.">
      <SortTrainer categories={SUCHE_CATS} items={SUCHE_ITEMS} prompt="Merkmals- oder Verbindungssuche –" limit={10} />
    </Shell>
  );
}

/* ══════════════ Merkmals-Integrations-Theorie ══════════════ */

interface FitItem {
  red: boolean;
  vertical: boolean;
}
const FIT_POS: [number, number][] = [
  [40, 40],
  [110, 30],
  [180, 45],
  [45, 110],
  [115, 120],
  [185, 105],
];

function makeFitDisplay(mode: SearchMode): FitItem[] {
  const target = { red: true, vertical: true };
  const dist: FitItem[] =
    mode === 'merkmal'
      ? Array.from({ length: 5 }, () => ({ red: false, vertical: true }))
      : [
          { red: false, vertical: true },
          { red: true, vertical: false },
          { red: false, vertical: true },
          { red: true, vertical: false },
          { red: Math.random() < 0.5, vertical: false },
        ].map((d) => (d.red && d.vertical ? { red: false, vertical: true } : d));
  return shuffle([target, ...dist]);
}

function FitBar({ it, x, y, s = 1 }: { it: FitItem; x: number; y: number; s?: number }) {
  const w = (it.vertical ? 9 : 34) * s;
  const h = (it.vertical ? 34 : 9) * s;
  return <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={2} fill={it.red ? '#dc2626' : '#16a34a'} />;
}

function MiniMap({ label, items, test, focus, color }: { label: string; items: FitItem[]; test: (it: FitItem) => boolean; focus: number | null; color: string }) {
  return (
    <div className="kg-fit-map">
      <svg viewBox="0 0 225 150" aria-hidden="true">
        <rect x={2} y={2} width={221} height={146} rx={8} className="kg-fit-mapbg" />
        {items.map((it, k) =>
          test(it) ? <circle key={k} cx={FIT_POS[k][0] + 5} cy={FIT_POS[k][1]} r={15} fill={color} className={focus === k ? 'kg-fit-act on' : 'kg-fit-act'} /> : null,
        )}
        {focus !== null && <circle cx={FIT_POS[focus][0] + 5} cy={FIT_POS[focus][1]} r={24} className="kg-fit-ring" />}
      </svg>
      <span>{label}</span>
    </div>
  );
}

export function Fit() {
  const [mode, setMode] = useState<SearchMode>('verbindung');
  const [items, setItems] = useState<FitItem[]>(() => makeFitDisplay('verbindung'));
  const [focus, setFocus] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  const [sim, setSim] = useState<number[]>([]);
  const timer = useRef<number[]>([]);

  const clear = () => {
    timer.current.forEach((t) => window.clearTimeout(t));
    timer.current = [];
    setFocus(null);
    setVisited([]);
  };
  const reset = (m: SearchMode = mode) => {
    clear();
    if (m !== mode) setSim([]);
    setMode(m);
    setItems(makeFitDisplay(m));
  };
  useEffect(() => () => timer.current.forEach((t) => window.clearTimeout(t)), []);

  const targetIdx = items.findIndex((it) => it.red && it.vertical);
  const found = focus === targetIdx;
  const pick = (k: number) => {
    setFocus(k);
    setVisited((v) => (v.includes(k) ? v : [...v, k]));
  };

  /** «zufällige» Suche nach FIT: Fokus springt ungelenkt von Element zu Element, bis das Ziel gefunden ist */
  const simulate = () => {
    clear();
    const order = mode === 'merkmal' ? [targetIdx] : shuffle(items.map((_, k) => k));
    const stop = order.indexOf(targetIdx);
    order.slice(0, stop + 1).forEach((k, j) => {
      timer.current.push(window.setTimeout(() => pick(k), 450 * (j + 1)));
    });
    timer.current.push(window.setTimeout(() => setSim((s) => [...s.slice(-19), stop + 1]), 450 * (stop + 1)));
  };

  const redCount = items.filter((it) => it.red).length;
  const vertCount = items.filter((it) => it.vertical).length;
  const fo = focus !== null ? items[focus] : null;

  return (
    <Shell
      title="Interaktiv: Merkmals-Integrations-Theorie"
      note="Gesucht: rote Senkrechte. Klicke ein Element an, um den Aufmerksamkeitsfokus dorthin zu legen – nur dort werden Farbe und Orientierung zu einem Objekt gebunden (F. 30; LB S. 62)."
    >
      <Seg
        label="Suchart"
        value={mode}
        onChange={(m) => reset(m)}
        options={[
          ['merkmal', 'Merkmalssuche'],
          ['verbindung', 'Verbindungssuche'],
        ]}
      />
      <div className="kg-fit">
        <div className="kg-fit-display">
          <svg viewBox="0 0 225 150" role="group" aria-label="Display / Ortskarte">
            <rect x={2} y={2} width={221} height={146} rx={8} className="kg-fit-mapbg" />
            {items.map((it, k) => (
              <g
                key={k}
                className="pk-hit"
                role="button"
                tabIndex={0}
                aria-label={`Element ${k + 1}: ${it.red ? 'rot' : 'grün'}, ${it.vertical ? 'senkrecht' : 'waagrecht'}`}
                onClick={() => pick(k)}
                onKeyDown={keyAct(() => pick(k))}
              >
                <circle cx={FIT_POS[k][0] + 5} cy={FIT_POS[k][1]} r={24} className={'kg-fit-slot' + (visited.includes(k) ? ' seen' : '')} />
                <FitBar it={it} x={FIT_POS[k][0] + 5} y={FIT_POS[k][1]} />
              </g>
            ))}
            {focus !== null && <circle cx={FIT_POS[focus][0] + 5} cy={FIT_POS[focus][1]} r={24} className="kg-fit-ring" />}
          </svg>
          <span>Ortskarte + Aufmerksamkeitsfokus</span>
        </div>
        <div className="kg-fit-maps">
          <MiniMap label="Farbkarte «Rot»" items={items} test={(it) => it.red} focus={focus} color="#dc2626" />
          <MiniMap label="Farbkarte «Grün»" items={items} test={(it) => !it.red} focus={focus} color="#16a34a" />
          <MiniMap label="Orientierung «senkrecht»" items={items} test={(it) => it.vertical} focus={focus} color="#52525b" />
          <MiniMap label="Orientierung «waagrecht»" items={items} test={(it) => !it.vertical} focus={focus} color="#a1a1aa" />
        </div>
      </div>
      <div className="pk-detail">
        <p className="small">
          <strong>Temporäre Objektrepräsentation:</strong>{' '}
          {fo ? (
            <>
              {fo.red ? 'rot' : 'grün'} + {fo.vertical ? 'senkrecht' : 'waagrecht'} →{' '}
              <span className={'kg-fb ' + (found ? 'ok' : 'bad')}>{found ? 'Wiedererkennungs-Netzwerk: Ziel gefunden!' : 'kein Ziel – weiter suchen'}</span> (
              {visited.length} {visited.length === 1 ? 'Element' : 'Elemente'} beachtet)
            </>
          ) : (
            'noch leer – ohne Fokus werden die Merkmale nicht gebunden.'
          )}
        </p>
        <p className="small">
          {mode === 'merkmal' ? (
            <>
              Die Karte <strong>«Rot»</strong> enthält nur <strong>{redCount}</strong> aktive Stelle → das Ziel verrät sich durch ein{' '}
              <strong>einzigartiges Merkmal</strong>; die Aufmerksamkeit geht <strong>direkt dorthin</strong> (Pop-out, ≈ 0 ms/Objekt).
            </>
          ) : (
            <>
              «Rot» ist an <strong>{redCount}</strong>, «senkrecht» an <strong>{vertCount}</strong> Stellen aktiv – <strong>keine einzelne Karte</strong> verrät das
              Ziel. Der Fokus muss Ort für Ort binden → <strong>«zufällige», serielle Suche</strong>.
            </>
          )}
        </p>
        <div className="ew-chiprow">
          <button className="btn small" onClick={simulate}>
            «Zufällige» Suche simulieren
          </button>
          <button className="btn ghost small" onClick={() => reset()}>
            neue Anordnung
          </button>
        </div>
        {sim.length > 0 && (
          <p className="small pk-mt">
            Simulationen: {sim.join(', ')} Schritte · Mittel <strong>{mean(sim).toFixed(1)}</strong>.{' '}
            {mode === 'verbindung' && 'Bei 6 Elementen sind es im Schnitt (6 + 1)/2 = 3.5 – also etwa n/2: selbstabbrechende Suche.'}
          </p>
        )}
      </div>
    </Shell>
  );
}

/* ══════════════ Effizienz: ms pro Element ══════════════ */

interface EffRow {
  label: string;
  lo: number;
  hi: number;
  color: string;
  src: string;
  text: string;
}
const EFF_MAIN: EffRow[] = [
  { label: 'Merkmalssuche', lo: 0, hi: 0.6, color: 'var(--ew-s2)', src: 'F. 29', text: '**≈ 0 ms/Objekt** für Ziel an- und abwesend: Pop-out, parallel.' },
  { label: 'Verbindung, Ziel da', lo: 5, hi: 15, color: 'var(--ew-s1)', src: 'F. 29', text: '**5–15 ms/Objekt** – im Schnitt werden n/2 Elemente geprüft.' },
  { label: 'Verbindung, kein Ziel', lo: 10, hi: 30, color: 'var(--ew-s1)', src: 'F. 29', text: '**10–30 ms/Objekt** – alle n Elemente → etwa doppelt so steil (selbstabbrechend).' },
  { label: 'Reale Szene, Ziel da', lo: 5, hi: 5, color: 'var(--ew-s3)', src: 'F. 38', text: '**5 ms/Item** (Wolfe et al., 2011) – beliebige Objekte in echten Szenen.' },
  { label: 'Reale Szene, kein Ziel', lo: 4, hi: 4, color: 'var(--ew-s3)', src: 'F. 38', text: '**4 ms/Item** – extrem effizient, Szenenwissen verkleinert die «funktionale» Set Size.' },
  { label: 'Isolierte Objekte', lo: 41, hi: 45, color: 'var(--muted)', src: 'Ergänzung', text: '**ca. 41–45 ms/Item** ohne Szene – dieselben Objekte, aber ohne Szenenlenkung. [Ergänzung]' },
];
const EFF_CTRL: EffRow[] = [
  { label: 'korrekt abwesend', lo: 5, hi: 5, color: '#f87171', src: 'F. 39', text: '**5 ms/Item** (Kontrollanalyse).' },
  { label: 'Singletons', lo: 4, hi: 4, color: '#16a34a', src: 'F. 39', text: '**4 ms/Item** – Ziel kommt nur **einmal** vor; RTs insgesamt langsamer, Steigung aber gleich.' },
  { label: 'alle Treffer (ALL)', lo: 7, hi: 7, color: '#0ea5e9', src: 'F. 39', text: '**7 ms/Item** – Ziel 1- bis 6-mal vorhanden.' },
];

export function Effizienz() {
  const [view, setView] = useState<'main' | 'ctrl'>('main');
  const [sel, setSel] = useState(0);
  const rows = view === 'main' ? EFF_MAIN : EFF_CTRL;
  const max = view === 'main' ? 48 : 10;
  const r = rows[Math.min(sel, rows.length - 1)];
  return (
    <Shell title="Vergleich: Sucheffizienz in ms pro Element" note="Steigung b aus RT = a + b · n. Je flacher, desto effizienter. Zeile anklicken für die Erklärung.">
      <Seg
        label="Ansicht"
        value={view}
        onChange={(v) => {
          setView(v);
          setSel(0);
        }}
        options={[
          ['main', 'Labor vs. reale Szenen'],
          ['ctrl', 'Kontrollanalyse (F. 39)'],
        ]}
      />
      <div className="ew-bars">
        {rows.map((row, k) => (
          <div
            key={row.label}
            className={'ew-bar-row kg-eff-row' + (k === sel ? ' on' : '')}
            role="button"
            tabIndex={0}
            onClick={() => setSel(k)}
            onKeyDown={keyAct(() => setSel(k))}
          >
            <span>{row.label}</span>
            <span className="ew-bar-track kg-eff-track">
              <span className="kg-eff-range" style={{ left: `${(row.lo / max) * 100}%`, width: `max(4px, ${((row.hi - row.lo) / max) * 100}%)`, background: row.color }} />
            </span>
            <span className="ew-bar-value">{row.lo === row.hi ? row.lo : row.hi < 1 ? '≈ 0' : `${row.lo}–${row.hi}`}</span>
          </div>
        ))}
      </div>
      <div className="pk-detail">
        <strong>{r.label}</strong> <span className="muted small">({r.src})</span>
        <p className="small">
          <Rich text={r.text} />
        </p>
        <p className="small muted">
          {view === 'main'
            ? 'Achtung: F. 38 (abwesend 4 / anwesend 5) und F. 39 (5 / 4 / 7) unterscheiden sich – andere Teilmengen bzw. Binning.'
            : 'Die Steigungen unterscheiden sich kaum → die hohe Effizienz liegt nicht an mehrfach vorkommenden Zielen.'}
        </p>
      </div>
    </Shell>
  );
}
