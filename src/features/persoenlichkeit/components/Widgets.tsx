import { useState, type MouseEvent } from 'react';
import type { WidgetId } from '../model';
import { Rich } from './Rich';
import { Seg, Shell, SortTrainer, keyAct, r2, type SortItem } from './WidgetKit';
import {
  EiKonzeptionen,
  KontrolleSort,
  Konsensus,
  Lebensphasen,
  Perma,
  Rangstabilitaet,
  RotterVP,
  Stabilitaetsarten,
  Via,
  VierZweige,
  WbFaktoren,
} from './Widgets2';

export function Widget({ id }: { id: WidgetId }) {
  switch (id) {
    case 'landkarte':
      return <Landkarte />;
    case 'trait-hierarchie':
      return <TraitHierarchie />;
    case 'temperamente':
      return <Temperamente />;
    case 'validitaeten':
      return <Validitaeten />;
    case 'iq-rechner':
      return <IqRechner />;
    case 'spearman-thurstone':
      return <SpearmanThurstone />;
    case 'gf-gc':
      return <GfGc />;
    case 'bis':
      return <Bis />;
    case 'flynn':
      return <Flynn />;
    case 'faktorenanalyse':
      return <Faktorenanalyse />;
    case 'bigfive-facetten':
      return <BigFiveFacetten />;
    case 'pen-hierarchie':
      return <PenHierarchie />;
    case 'modellvergleich':
      return <Modellvergleich />;
    case 'verwandtschaft':
      return <Verwandtschaft />;
    case 'plomin':
      return <Plomin />;
    case 'heritabilitaet':
      return <Heritabilitaet />;
    case 'falconer':
      return <Falconer />;
    case 'arold':
      return <Arold />;
    case 'stabilitaetsarten':
      return <Stabilitaetsarten />;
    case 'rangstabilitaet':
      return <Rangstabilitaet />;
    case 'lebensphasen':
      return <Lebensphasen />;
    case 'rotter-vp':
      return <RotterVP />;
    case 'kontrolle-sort':
      return <KontrolleSort />;
    case 'ei-konzeptionen':
      return <EiKonzeptionen />;
    case 'vier-zweige':
      return <VierZweige />;
    case 'konsensus':
      return <Konsensus />;
    case 'wb-faktoren':
      return <WbFaktoren />;
    case 'perma':
      return <Perma />;
    case 'via':
      return <Via />;
  }
}

/* ═════════════════════════ Kapitel 1 ═════════════════════════ */

const LANDKARTE_CATS = [
  { id: 'f', label: 'Fähigkeiten', color: '#2563eb' },
  { id: 'h', label: 'Habitus', color: '#db2777' },
];
const LANDKARTE: SortItem[] = [
  { text: 'Intelligenz', cat: 'f', why: 'Leistungsbereich – es gibt besser/schlechter. (S. 17)' },
  { text: 'Kompetenzen', cat: 'f', why: 'Auf der Folie bei den Fähigkeiten; laut Notiz eine Mischung aus Fähigkeit und Habitus. (S. 17)' },
  { text: 'Stile', cat: 'f', why: 'Auf der Folie bei den Fähigkeiten. (S. 17)' },
  { text: 'Kreativität', cat: 'f', why: 'Bei den Fähigkeiten aufgeführt, laut Notiz aber nicht eindeutig zuzuordnen. (S. 17)' },
  { text: 'Temperament', cat: 'h', why: 'Typisches Verhalten, kein besser/schlechter. (S. 17)' },
  { text: 'Charakter (z. B. VIA)', cat: 'h', why: '(S. 17)' },
  { text: 'Affekt (z. B. PANAS)', cat: 'h', why: '(S. 17)' },
  { text: 'Motivation', cat: 'h', why: '(S. 17)' },
  { text: 'Interessen (Holland)', cat: 'h', why: '(S. 17)' },
  { text: 'Einstellungen / Werthaltungen', cat: 'h', why: '(S. 17)' },
];

function Landkarte() {
  const [mode, setMode] = useState<'karte' | 'trainer'>('karte');
  return (
    <Shell title="Landkarte der Persönlichkeit" note="Grenzfälle: Kompetenz = Mischung aus Fähigkeit und Habitus; emotionale Intelligenz und Kreativität sind nicht eindeutig zuzuordnen. (S. 17, Notiz)">
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['karte', 'Karte'],
          ['trainer', 'Zuordnen üben'],
        ]}
      />
      {mode === 'karte' ? (
        <div className="pk-map">
          {LANDKARTE_CATS.map((c) => (
            <div key={c.id} className="pk-map-area" style={{ ['--ch' as string]: c.color }}>
              <h4>{c.label}</h4>
              <p className="muted small">{c.id === 'f' ? 'Leistungsbereich: «besser / schlechter», maximales Verhalten' : 'typisches Verhalten: kein «besser / schlechter»'}</p>
              <div className="ew-chiprow">
                {LANDKARTE.filter((x) => x.cat === c.id).map((x) => (
                  <span key={x.text} className="ew-chip">
                    {x.text}
                  </span>
                ))}
                {c.id === 'f' && <span className="ew-chip pk-chip-dashed">emotionale Intelligenz?</span>}
              </div>
            </div>
          ))}
          <div className="pk-map-bridge" aria-hidden>
            Kompetenz
            <br />= Mischung
          </div>
        </div>
      ) : (
        <SortTrainer categories={LANDKARTE_CATS} items={LANDKARTE} prompt="Fähigkeit oder Habitus:" />
      )}
    </Shell>
  );
}

const TRAIT_LEVELS = [
  { id: 'trait', label: 'Trait (erschlossen)', items: ['gesellig / Soziabilität'], text: 'Latente Eigenschaft – nicht direkt beobachtbar, sondern aus dem Verhalten erschlossen.' },
  {
    id: 'habit',
    label: 'Habituelle Reaktionen',
    items: ['schliesst schnell Freundschaft', 'ist gern unter Leuten', 'liebt Partys', 'ist gesprächig'],
    text: 'Wiederkehrende, typische Verhaltensweisen – sie fassen viele Einzelbeobachtungen zusammen.',
  },
  {
    id: 'spec',
    label: 'Spezifische Reaktionen (beobachtet)',
    items: ['spricht am Montag die neue Kollegin an', 'geht am Freitag an die Geburtstagsparty', 'erzählt in der Pause von den Ferien'],
    text: 'Einzelnes, direkt beobachtbares Verhalten in einer konkreten Situation. [Ergänzung] Die Einzelbeispiele sind ausgedacht.',
  },
];

function TraitHierarchie() {
  const [sel, setSel] = useState('trait');
  const s = TRAIT_LEVELS.find((l) => l.id === sel)!;
  return (
    <Shell title="Interaktiv: Vom Verhalten zum Trait – «Lady G. ist gesellig»" note="Hierarchie spezifische Reaktion → habituelle Reaktion → Trait (S. 27).">
      <div className="pk-ladder">
        {TRAIT_LEVELS.map((l, i) => (
          <button key={l.id} className={'pk-rung' + (sel === l.id ? ' on' : '')} onClick={() => setSel(l.id)} style={{ ['--w' as string]: `${60 + i * 20}%` }}>
            <span className="pk-rung-label">{l.label}</span>
            <span className="pk-rung-items">{l.items.join(' · ')}</span>
          </button>
        ))}
        <div className="pk-ladder-arrow" aria-hidden>
          ↑ erschliessen
        </div>
      </div>
      <div className="pk-detail">
        <Rich text={s.text} />
      </div>
    </Shell>
  );
}

const TEMPS = {
  melancholisch: { saft: 'schwarze Galle', galen: 'Melancholiker (schwerblütig)', desc: 'traurig, nachdenklich', ek: 'labil + introvertiert' },
  cholerisch: { saft: 'gelbe Galle', galen: 'Choleriker (warmblütig)', desc: 'reizbar, durchsetzungsfähig', ek: 'labil + extravertiert' },
  phlegmatisch: { saft: 'Schleim', galen: 'Phlegmatiker (kaltblütig)', desc: 'passiv, ruhig, träge, zuverlässig', ek: 'stabil + introvertiert' },
  sanguinisch: { saft: 'Blut', galen: 'Sanguiniker (leichtblütig)', desc: 'heiter, lebhaft, gesprächig, leichtsinnig', ek: 'stabil + extravertiert' },
} as const;
type TempKey = keyof typeof TEMPS;

const HISTORY = [
  { name: 'Hippokrates', when: 'ca. 460–370 v. Chr.', text: 'Humoralpathologie: 4 Säfte, deren Gleichgewicht Gesundheit bedeutet (medizinisch, kausal).' },
  { name: 'Galen', when: 'ca. 130–200', text: 'Verbindet die Säfte mit 4 Temperamenten → psycho-physische Konstitution (Typen).' },
  { name: 'Huarte', when: '1575', text: '«Examen»: Abweichungen von den Typen, verschiedene Fähigkeiten → Geburtstag der differentiellen Psychologie.' },
  { name: 'Kant', when: '1798', text: 'Temperamente des Gefühls vs. der Tätigkeit, jeweils stark/schwach.' },
  { name: 'Wundt', when: '1903', text: 'Zwei Dimensionen: Stärke und Wechsel (Schnelligkeit) der Gemütsbewegungen.' },
  { name: 'Eysenck', when: '1954', text: 'Die 4 Temperamente als Kombination der Superfaktoren Extraversion und Neurotizismus.' },
];

function Temperamente() {
  const [e, setE] = useState(70);
  const [n, setN] = useState(30);
  const [axes, setAxes] = useState<'eysenck' | 'wundt'>('eysenck');
  const [hist, setHist] = useState(5);
  const key: TempKey = n >= 50 ? (e >= 50 ? 'cholerisch' : 'melancholisch') : e >= 50 ? 'sanguinisch' : 'phlegmatisch';
  const t = TEMPS[key];
  const S = 240;
  const px = 20 + (e / 100) * S;
  const py = 20 + (1 - n / 100) * S;
  const onClick = (ev: MouseEvent<SVGSVGElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    const x = ((ev.clientX - r.left) / r.width) * 280;
    const y = ((ev.clientY - r.top) / r.height) * 290;
    setE(Math.max(0, Math.min(100, Math.round(((x - 20) / S) * 100))));
    setN(Math.max(0, Math.min(100, Math.round((1 - (y - 20) / S) * 100))));
  };
  const xl = axes === 'eysenck' ? ['introvertiert', 'extravertiert'] : ['langsamer Wechsel', 'schneller Wechsel'];
  const yl = axes === 'eysenck' ? ['stabil', 'labil (Neurotizismus)'] : ['schwache Gemütsbew.', 'starke Gemütsbew.'];
  return (
    <Shell
      title="Interaktiv: Vier Temperamente im Zwei-Dimensionen-Raum (Abb. 1)"
      note="Nachgezeichnet nach S. 21 (Wundt 1903; Eysenck). [Ergänzung] Die Quadrantenzuordnung zu E/N ist die Standardzuordnung; auf der Folie nur als Grafik. Klicke ins Feld oder nutze die Regler."
    >
      <Seg
        label="Achsen"
        value={axes}
        onChange={setAxes}
        options={[
          ['eysenck', 'Achsen nach Eysenck (E × N)'],
          ['wundt', 'Achsen nach Wundt'],
        ]}
      />
      <div className="pk-split">
        <svg viewBox="0 0 280 290" className="pk-svg pk-temp" onClick={onClick} role="img" aria-label={`Gewählt: ${key}`}>
          {(['melancholisch', 'cholerisch', 'phlegmatisch', 'sanguinisch'] as TempKey[]).map((k, i) => (
            <g key={k} className={'pk-quad' + (k === key ? ' on' : '')}>
              <rect x={20 + (i % 2) * 120} y={20 + Math.floor(i / 2) * 120} width="120" height="120" />
              <text x={80 + (i % 2) * 120} y={84 + Math.floor(i / 2) * 120} className="pk-t b">
                {k}
              </text>
            </g>
          ))}
          <line x1="20" y1="140" x2="262" y2="140" className="pk-axis-line" />
          <line x1="140" y1="262" x2="140" y2="18" className="pk-axis-line" />
          <path d="M262 136 L270 140 L262 144 Z" className="pk-arrowhead" />
          <path d="M136 18 L140 10 L144 18 Z" className="pk-arrowhead" />
          <text x="24" y="154" className="pk-t s" textAnchor="start">
            {xl[0]}
          </text>
          <text x="258" y="154" className="pk-t s" textAnchor="end">
            {xl[1]}
          </text>
          <text x="146" y="272" className="pk-t s" textAnchor="start">
            {yl[0]}
          </text>
          <text x="146" y="10" className="pk-t s" textAnchor="start">
            {yl[1]}
          </text>
          <circle cx={px} cy={py} r="8" className="pk-dot" />
        </svg>
        <div className="pk-detail">
          <h4 style={{ textTransform: 'capitalize' }}>{key}</h4>
          <dl className="pk-kv">
            <dt>Galen</dt>
            <dd>
              {t.galen} – {t.desc}
            </dd>
            <dt>Körpersaft</dt>
            <dd>{t.saft}</dd>
            <dt>Eysenck</dt>
            <dd>{t.ek}</dd>
          </dl>
          <label className="pk-slider">
            <span>
              Extraversion {axes === 'wundt' && '(Wechsel)'}: <strong>{e}</strong>
            </span>
            <input type="range" min={0} max={100} value={e} onChange={(ev) => setE(+ev.target.value)} />
          </label>
          <label className="pk-slider">
            <span>
              Neurotizismus {axes === 'wundt' && '(Stärke)'}: <strong>{n}</strong>
            </span>
            <input type="range" min={0} max={100} value={n} onChange={(ev) => setN(+ev.target.value)} />
          </label>
        </div>
      </div>
      <div className="pk-history">
        {HISTORY.map((h, i) => (
          <button key={h.name} className={'pk-hist' + (hist === i ? ' on' : '')} onClick={() => setHist(i)}>
            <strong>{h.name}</strong>
            <span>{h.when}</span>
          </button>
        ))}
      </div>
      <p className="pk-detail">
        <strong>{HISTORY[hist].name}:</strong> {HISTORY[hist].text}
      </p>
    </Shell>
  );
}

const VALID = [
  { name: 'Kognitiver Fähigkeitstest', old: 0.51, neu: 0.31 },
  { name: 'Integritätstest', old: 0.41, neu: 0.31 },
  { name: 'Assessment Center', old: 0.37, neu: 0.28 },
  { name: 'Gewissenhaftigkeit', old: 0.31, neu: 0.19 },
  { name: 'Berufserfahrung', old: 0.18, neu: 0.07 },
];

function Validitaeten() {
  const [hover, setHover] = useState<number | null>(null);
  const X0 = 170;
  const W = 360;
  const x = (v: number) => X0 + (v / 0.6) * W;
  return (
    <Shell
      title="Vorhersage von Berufserfolg: Validitäten alt vs. neu"
      note="Schmidt & Hunter (1998) → Sackett et al. (2021). Die neuen Werte sind v. a. wegen konservativerer Korrekturen in der Metaanalyse niedriger. (S. 23)"
    >
      <div className="ew-legend">
        <span className="ew-legend-item">
          <span className="ew-swatch" style={{ background: 'var(--muted)' }} /> 1998 (Schmidt & Hunter)
        </span>
        <span className="ew-legend-item">
          <span className="ew-swatch" style={{ background: 'var(--ch)' }} /> 2021 (Sackett et al.)
        </span>
      </div>
      <svg viewBox="0 0 560 210" className="pk-svg wide" role="img" aria-label="Validitäten 1998 und 2021">
        {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((v) => (
          <g key={v}>
            <line x1={x(v)} y1="8" x2={x(v)} y2="182" className="pk-grid" />
            <text x={x(v)} y="198" className="pk-t s">
              {r2(v)}
            </text>
          </g>
        ))}
        {VALID.map((d, i) => {
          const y = 30 + i * 36;
          const dim = hover !== null && hover !== i;
          return (
            <g key={d.name} style={{ opacity: dim ? 0.3 : 1 }} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <text x={X0 - 10} y={y + 4} className="pk-t" textAnchor="end">
                {d.name}
              </text>
              <line x1={x(d.neu)} y1={y} x2={x(d.old)} y2={y} className="pk-dumbbell" />
              <circle cx={x(d.old)} cy={y} r="6" className="pk-dot-old" />
              <circle cx={x(d.neu)} cy={y} r="6" className="pk-dot" />
              <text x={x(d.old)} y={y - 10} className="pk-t s">
                {r2(d.old)}
              </text>
              <text x={x(d.neu)} y={y - 10} className="pk-t s b">
                {r2(d.neu)}
              </text>
            </g>
          );
        })}
      </svg>
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 2 ═════════════════════════ */

/** Standardnormalverteilung Φ(z) – Näherung nach Abramowitz & Stegun */
function phi(z: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

function IqRechner() {
  const [X, setX] = useState(64);
  const [M, setM] = useState(50);
  const [s, setS] = useState(7);
  const z = (X - M) / s;
  const iq = 100 + 15 * z;
  const pr = phi(z) * 100;
  const W = 520;
  const H = 150;
  const ix = (v: number) => 20 + ((v - 40) / 120) * (W - 40);
  const dens = (v: number) => Math.exp(-(((v - 100) / 15) ** 2) / 2);
  const pts: string[] = [];
  for (let v = 40; v <= 160; v += 1) pts.push(`${ix(v)},${H - 20 - dens(v) * 110}`);
  const clamped = Math.max(40, Math.min(160, iq));
  const area: string[] = [`${ix(40)},${H - 20}`];
  for (let v = 40; v <= clamped; v += 1) area.push(`${ix(v)},${H - 20 - dens(v) * 110}`);
  area.push(`${ix(clamped)},${H - 20 - dens(clamped) * 110}`, `${ix(clamped)},${H - 20}`);
  return (
    <Shell
      title="IQ-Rechner: vom Rohwert zum Abweichungs-IQ"
      note="Der Prozentrang (Anteil der Altersgruppe mit tieferem Wert) folgt aus der Normalverteilung. [Ergänzung] Rohwerte und Normen sind frei wählbar und fiktiv."
    >
      <div className="pk-sliders3">
        <label className="pk-slider">
          <span>
            Rohwert <i>X</i>: <strong>{X}</strong>
          </span>
          <input type="range" min={0} max={100} value={X} onChange={(e) => setX(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            Mittelwert Altersgruppe <i>M</i>: <strong>{M}</strong>
          </span>
          <input type="range" min={20} max={80} value={M} onChange={(e) => setM(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            SD Altersgruppe <i>s</i>: <strong>{s}</strong>
          </span>
          <input type="range" min={3} max={20} value={s} onChange={(e) => setS(+e.target.value)} />
        </label>
      </div>
      <p className="pk-calc">
        <i>z</i> = ({X} − {M}) / {s} = <strong>{z.toFixed(2)}</strong> → IQ = 100 + 15 · {z.toFixed(2)} = <strong className="pk-big">{Math.round(iq)}</strong>
        <span className="muted"> · Prozentrang ≈ {pr < 1 ? '< 1' : pr > 99 ? '> 99' : Math.round(pr)} %</span>
      </p>
      <svg viewBox={`0 0 ${W} ${H + 6}`} className="pk-svg wide" role="img" aria-label={`IQ ${Math.round(iq)}`}>
        <polygon points={area.join(' ')} className="pk-area" />
        <polyline points={pts.join(' ')} className="pk-curve" />
        <line x1="20" y1={H - 20} x2={W - 20} y2={H - 20} className="pk-axis-line" />
        {[55, 70, 85, 100, 115, 130, 145].map((v) => (
          <g key={v}>
            <line x1={ix(v)} y1={H - 20} x2={ix(v)} y2={H - 15} className="pk-axis-line" />
            <text x={ix(v)} y={H - 2} className="pk-t s">
              {v}
            </text>
          </g>
        ))}
        <line x1={ix(clamped)} y1={H - 20} x2={ix(clamped)} y2="14" className="pk-marker" />
        <text x={ix(clamped)} y="10" className="pk-t b">
          {Math.round(iq)}
        </text>
      </svg>
    </Shell>
  );
}

const PMA = ['V', 'W', 'N', 'S', 'P', 'M', 'R'];
const PMA_NAMES: Record<string, string> = {
  V: 'Sprachverständnis',
  W: 'Wortflüssigkeit',
  N: 'Rechengewandtheit',
  S: 'Raumvorstellung',
  P: 'Auffassungsgeschwindigkeit',
  M: 'assoziatives Gedächtnis',
  R: 'schlussfolgerndes Denken',
};
const ST_TEXT = {
  spearman:
    '**Spearman (1904):** Ein Generalfaktor **g** genügt. Jede Testleistung = g + spezifischer Faktor **s** (so viele s wie Tests); s gilt als unwichtig/Messfehler. Tests unterscheiden sich in ihrer g-Ladung. (S. 41)',
  thurstone:
    '**Thurstone (1938/41):** 7 gleichrangige **Primary Mental Abilities**. Jeder Faktor hängt mit mehreren (nicht allen) Tests zusammen; ein Test kann von mehreren Faktoren abhängen (gestrichelt). Person = Intelligenzprofil. g nur aus Korrelationen der Faktoren, ohne inhaltliche Bedeutung. (S. 43)',
  hier:
    '**Hierarchisches Modell:** Die Primärfaktoren sind selbst korreliert → eine FA ihrer Interkorrelationen ergibt **g als Faktor 2. Ordnung**. Vereint Spearmans und Thurstones Idee. (S. 45)',
};

function SpearmanThurstone() {
  const [m, setM] = useState<'spearman' | 'thurstone' | 'hier'>('spearman');
  const [hover, setHover] = useState<string | null>(null);
  const tx = (i: number) => 30 + i * 37;
  const fx = (k: number) => 48 + k * 74;
  const testY = m === 'spearman' ? 170 : 190;
  return (
    <Shell title="Interaktiv: Drei Strukturmodelle im Vergleich" note={hover && PMA_NAMES[hover] ? `${hover} = ${PMA_NAMES[hover]}` : 'Fahre über einen Primärfaktor für seinen Namen.'}>
      <Seg
        label="Modell"
        value={m}
        onChange={setM}
        options={[
          ['spearman', 'Spearman: g + s'],
          ['thurstone', 'Thurstone: 7 PMA'],
          ['hier', 'Hierarchisch'],
        ]}
      />
      <svg viewBox="0 0 560 236" className="pk-svg wide" role="img" aria-label="Strukturmodell">
        {/* Verbindungen */}
        {m === 'spearman' &&
          Array.from({ length: 14 }, (_, i) => <line key={i} x1="280" y1="40" x2={tx(i) + 12} y2={testY - 12} className="pk-edge" />)}
        {m !== 'spearman' &&
          PMA.map((f, k) => (
            <g key={f}>
              <line x1={fx(k)} y1="114" x2={tx(2 * k) + 12} y2={testY - 12} className="pk-edge" />
              <line x1={fx(k)} y1="114" x2={tx(2 * k + 1) + 12} y2={testY - 12} className="pk-edge" />
              {k < 6 && k % 2 === 0 && <line x1={fx(k)} y1="114" x2={tx(2 * k + 2) + 12} y2={testY - 12} className="pk-edge dashed" />}
            </g>
          ))}
        {m === 'hier' && PMA.map((f, k) => <line key={f} x1="280" y1="40" x2={fx(k)} y2="94" className="pk-edge" />)}
        {m === 'thurstone' &&
          PMA.slice(0, -1).map((f, k) => <path key={f} d={`M${fx(k) + 16} 96 Q ${fx(k) + 37} 78 ${fx(k + 1) - 16} 96`} className="pk-edge dashed soft" />)}
        {/* g */}
        {m !== 'thurstone' && (
          <g className="pk-node-g">
            <circle cx="280" cy="28" r="20" />
            <text x="280" y="33" className="pk-t b big">
              g
            </text>
          </g>
        )}
        {m === 'thurstone' && (
          <text x="280" y="40" className="pk-t s">
            (kein inhaltlich bedeutsames g – nur Korrelationen zwischen den Faktoren)
          </text>
        )}
        {/* Primärfaktoren */}
        {m !== 'spearman' &&
          PMA.map((f, k) => (
            <g key={f} className="pk-node-f" onMouseEnter={() => setHover(f)} onMouseLeave={() => setHover(null)}>
              <circle cx={fx(k)} cy="104" r="16" />
              <text x={fx(k)} y="109" className="pk-t b">
                {f}
              </text>
            </g>
          ))}
        {/* Tests */}
        {Array.from({ length: 14 }, (_, i) => (
          <g key={i}>
            <rect x={tx(i)} y={testY - 12} width="24" height="22" rx="4" className="pk-node-t" />
            <text x={tx(i) + 12} y={testY + 3} className="pk-t s">
              T{i + 1}
            </text>
            {m === 'spearman' && (
              <>
                <line x1={tx(i) + 12} y1={testY + 10} x2={tx(i) + 12} y2={testY + 26} className="pk-edge" />
                <circle cx={tx(i) + 12} cy={testY + 36} r="10" className="pk-node-s" />
                <text x={tx(i) + 12} y={testY + 40} className="pk-t s">
                  s{i + 1}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>
      <div className="pk-detail">
        <Rich text={ST_TEXT[m]} />
      </div>
    </Shell>
  );
}

function GfGc() {
  const [age, setAge] = useState(25);
  const W = 540;
  const H = 220;
  const ax = (a: number) => 40 + (a / 80) * (W - 60);
  const ay = (v: number) => H - 30 - (v / 100) * (H - 50);
  const rise = (a: number) => 90 * (1 - Math.exp(-a / 6));
  const gc = (a: number) => (a <= 25 ? rise(a) : rise(25) + (a - 25) * 0.1);
  const gf = (a: number) => (a <= 25 ? rise(a) - 2 : rise(25) - 2 - (a - 25) * 0.85);
  const path = (f: (a: number) => number) => {
    const p: string[] = [];
    for (let a = 1; a <= 80; a += 1) p.push(`${a === 1 ? 'M' : 'L'}${ax(a)},${ay(f(a))}`);
    return p.join(' ');
  };
  const diff = gc(age) - gf(age);
  return (
    <Shell
      title="Interaktiv: Postulierter Altersverlauf von gc und gf (Abb. 2, Baltes 1987)"
      note="Neu gezeichnet nach S. 43 (schematisch, keine Messwerte). Pragmatics = kristallisiert («Intelligenz als kulturelles Wissen»), Mechanics = fluide («Intelligenz als basale Informationsverarbeitung»)."
    >
      <label className="pk-slider">
        <span>
          Alter: <strong>{age} Jahre</strong>
        </span>
        <input type="range" min={2} max={80} value={age} onChange={(e) => setAge(+e.target.value)} />
      </label>
      <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg wide" role="img" aria-label="Altersverlauf fluide und kristallisierte Intelligenz">
        <line x1="40" y1={H - 30} x2={W - 14} y2={H - 30} className="pk-axis-line" />
        <line x1="40" y1={H - 30} x2="40" y2="10" className="pk-axis-line" />
        <text x="14" y="110" className="pk-t s" transform="rotate(-90 14 110)">
          Leistung
        </text>
        {[0, 25, 50, 70].map((a) => (
          <text key={a} x={ax(a)} y={H - 12} className="pk-t s">
            {a === 25 ? 'ca. 25' : a === 70 ? 'ca. 70' : a}
          </text>
        ))}
        <path d={path(gc)} className="pk-line s1" />
        <path d={path(gf)} className="pk-line s2 dashed" />
        <text x={ax(52)} y={ay(gc(52)) - 10} className="pk-t s b">
          kristallisiert (Pragmatics)
        </text>
        <text x={ax(55)} y={ay(gf(55)) + 22} className="pk-t s b">
          fluide (Mechanics)
        </text>
        <line x1={ax(age)} y1={H - 30} x2={ax(age)} y2="12" className="pk-marker" />
        <circle cx={ax(age)} cy={ay(gc(age))} r="5.5" className="pk-dot s1" />
        <circle cx={ax(age)} cy={ay(gf(age))} r="5.5" className="pk-dot s2" />
      </svg>
      <div className="pk-detail">
        {age < 20 && 'Kindheit und Jugend: Beide Intelligenzformen steigen steil und fast parallel an.'}
        {age >= 20 && age <= 30 && 'Um ca. 25 erreicht die fluide Intelligenz ihren Höhepunkt – danach trennen sich die Kurven.'}
        {age > 30 && age < 60 && `Die fluide Intelligenz (Gedächtnis, Problemlösen mit Symbolen/Figuren) nimmt ab, die kristallisierte (Sprache, soziale Intelligenz) bleibt erhalten – Abstand schematisch ca. ${Math.round(diff)} Punkte.`}
        {age >= 60 && 'Hohes Alter: grosser Abstand. Kristallisiertes Wissen bleibt, die basale Informationsverarbeitung (gf) sinkt deutlich.'}
      </div>
    </Shell>
  );
}

const BIS_OPS = [
  { id: 'B', name: 'Bearbeitungs­geschwindigkeit' },
  { id: 'G', name: 'Gedächtnis' },
  { id: 'E', name: 'Einfallsreichtum' },
  { id: 'K', name: 'Verarbeitungs­kapazität' },
];
const BIS_CONT = [
  { id: 'F', name: 'figural-bildhaft' },
  { id: 'V', name: 'verbal' },
  { id: 'N', name: 'numerisch' },
];
const BIS_EX = [
  { task: '1 – 2 – 4 – 7 – ?', answer: '11 (Abstände +1, +2, +3, +4)', op: 'K', cont: 'N' },
  { task: 'A – B – D – G – ?', answer: 'K (Abstände +1, +2, +3, +4)', op: 'K', cont: 'V' },
];

function Bis() {
  const [cell, setCell] = useState<{ op: string; cont: string } | null>({ op: 'K', cont: 'N' });
  const [ex, setEx] = useState<number | null>(null);
  const [showAns, setShowAns] = useState(false);
  const op = BIS_OPS.find((o) => o.id === cell?.op);
  const ct = BIS_CONT.find((c) => c.id === cell?.cont);
  return (
    <Shell
      title="Interaktiv: Berliner Intelligenzstrukturmodell (Jäger 1984)"
      note="4 Operationen × 3 Inhalte, an der Spitze g. Jede Aufgabe gehört gleichzeitig zu einer Operation UND einem Inhalt → bimodal. (S. 45) [Ergänzung] Die Zuordnung der Beispielaufgaben zur Verarbeitungskapazität (schlussfolgerndes Denken) ist eine Interpretation."
    >
      <div className="pk-bis">
        <div className="pk-bis-g">g – allgemeine Intelligenz</div>
        <div className="pk-bis-grid">
          <span />
          {BIS_CONT.map((c) => (
            <span key={c.id} className="pk-bis-h">
              {c.name}
            </span>
          ))}
          {BIS_OPS.map((o) => (
            <div key={o.id} className="pk-bis-row">
              <span className="pk-bis-r">{o.name}</span>
              {BIS_CONT.map((c) => {
                const on = cell?.op === o.id && cell?.cont === c.id;
                const rowcol = cell && (cell.op === o.id || cell.cont === c.id);
                return (
                  <button
                    key={c.id}
                    className={'pk-bis-cell' + (on ? ' on' : rowcol ? ' line' : '')}
                    onClick={() => {
                      setCell({ op: o.id, cont: c.id });
                      setEx(null);
                    }}
                    aria-label={`${o.name} × ${c.name}`}
                  >
                    {o.id}
                    {c.id}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {op && ct && (
        <p className="pk-detail">
          Zelle <strong>{op.name}</strong> × <strong>{ct.name}</strong>: Aufgaben, die die Operation «{op.name}» mit {ct.name}em Material verlangen.
        </p>
      )}
      <div className="ew-chiprow">
        <span className="muted small">Beispiele (S. 45):</span>
        {BIS_EX.map((b, i) => (
          <button
            key={b.task}
            className={'ew-chipbtn' + (ex === i ? ' on' : '')}
            onClick={() => {
              setEx(i);
              setCell({ op: b.op, cont: b.cont });
              setShowAns(false);
            }}
          >
            {b.task}
          </button>
        ))}
      </div>
      {ex !== null && (
        <div className="pk-detail">
          <strong>{BIS_EX[ex].task}</strong> – gleiche Operation wie das andere Beispiel, aber anderer Inhalt ({BIS_CONT.find((c) => c.id === BIS_EX[ex].cont)?.name}).{' '}
          {showAns ? (
            <span>
              Lösung: <strong>{BIS_EX[ex].answer}</strong>
            </span>
          ) : (
            <button className="ew-link" onClick={() => setShowAns(true)}>
              Lösung zeigen
            </button>
          )}
        </div>
      )}
    </Shell>
  );
}

function Flynn() {
  const [years, setYears] = useState(50);
  const gain = 0.3 * years;
  return (
    <Shell
      title="Rechenbeispiel Flynn-Effekt: +0,3 IQ-Punkte pro Jahr"
      note="Rechnerische Veranschaulichung der Zahl aus S. 29 (20. Jh.). [Ergänzung] Der Gedanke «alte Normen» zeigt, warum Tests regelmässig neu normiert werden müssen. Beim Anti-Flynn-Effekt (u. a. DK, NO, EE, DE, AT, CH) kehrt sich die Richtung um."
    >
      <label className="pk-slider">
        <span>
          Normen von vor <strong>{years} Jahren</strong>
        </span>
        <input type="range" min={0} max={100} step={5} value={years} onChange={(e) => setYears(+e.target.value)} />
      </label>
      <div className="pk-flynn">
        <div className="pk-flynn-bar">
          <span style={{ width: `${(100 / 130) * 100}%` }}>heute: IQ 100</span>
        </div>
        <div className="pk-flynn-bar old">
          <span style={{ width: `${((100 + gain) / 130) * 100}%` }}>nach alten Normen: IQ {Math.round(100 + gain)}</span>
        </div>
      </div>
      <p className="pk-calc">
        100 + 0,3 · {years} = <strong>{(100 + gain).toFixed(1).replace('.', ',')}</strong>
        {years === 100 && ' → ≈ 30 Punkte in 100 Jahren'}
      </p>
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 3 ═════════════════════════ */

const FA_ITEMS = ['Ich bin gesellig', 'Ich schliesse leicht Freundschaften', 'Ich bin heiter', 'Ich arbeite ordentlich', 'Ich halte mich an Pläne', 'Ich erledige Aufgaben gründlich'];
const FA_R = [
  [1, 0.62, 0.55, 0.08, 0.05, 0.1],
  [0.62, 1, 0.5, 0.06, 0.04, 0.07],
  [0.55, 0.5, 1, 0.12, 0.09, 0.06],
  [0.08, 0.06, 0.12, 1, 0.58, 0.6],
  [0.05, 0.04, 0.09, 0.58, 1, 0.52],
  [0.1, 0.07, 0.06, 0.6, 0.52, 1],
];
const FA_UNROT = [
  [0.58, 0.52],
  [0.54, 0.5],
  [0.55, 0.42],
  [0.56, -0.5],
  [0.5, -0.47],
  [0.53, -0.49],
];
const FA_ROT = [
  [0.79, 0.07],
  [0.74, 0.04],
  [0.69, 0.11],
  [0.08, 0.77],
  [0.05, 0.7],
  [0.07, 0.75],
];
const FA_NAMES = ['Extraversion', 'Gewissenhaftigkeit', 'Neurotizismus'];

function Faktorenanalyse() {
  const [step, setStep] = useState(0);
  const [names, setNames] = useState<(string | null)[]>([null, null]);
  const L = step >= 2 ? FA_ROT : FA_UNROT;
  const steps = ['1 Korrelationen', '2 Extraktion', '3 Rotation', '4 Benennung'];
  return (
    <Shell
      title="Interaktiv: Faktorenanalyse in vier Schritten"
      note="[Ergänzung] Fiktive Beispieldaten. Die drei Extraversion-Items stammen aus dem Folienbeispiel (S. 60–61), die Gewissenhaftigkeits-Items sind ergänzt."
    >
      <div className="pk-steps">
        {steps.map((s, i) => (
          <button key={s} className={'pk-step' + (step === i ? ' on' : step > i ? ' done' : '')} onClick={() => setStep(i)}>
            {s}
          </button>
        ))}
      </div>
      {step === 0 ? (
        <>
          <div className="pk-matrix-scroll">
            <table className="pk-matrix">
              <thead>
                <tr>
                  <th />
                  {FA_ITEMS.map((_, j) => (
                    <th key={j}>{j + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FA_ITEMS.map((it, i) => (
                  <tr key={it}>
                    <th>
                      {i + 1} {it}
                    </th>
                    {FA_R[i].map((v, j) => (
                      <td key={j} style={{ ['--a' as string]: i === j ? 0 : v }}>
                        {i === j ? '–' : r2(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pk-detail">
            Die Items 1–3 korrelieren untereinander hoch, ebenso 4–6 – zwischen den Gruppen kaum. Wer «Ich bin gesellig» zustimmt, stimmt eher auch «Ich schliesse leicht
            Freundschaften» zu → Hinweis auf einen gemeinsamen Faktor. (S. 60–61)
          </p>
        </>
      ) : (
        <>
          <div className="pk-matrix-scroll">
            <table className="pk-matrix">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>{step === 3 && names[0] ? names[0] : 'Faktor 1'}</th>
                  <th>{step === 3 && names[1] ? names[1] : 'Faktor 2'}</th>
                </tr>
              </thead>
              <tbody>
                {FA_ITEMS.map((it, i) => (
                  <tr key={it}>
                    <th>{it}</th>
                    {L[i].map((v, j) => (
                      <td key={j} className={Math.abs(v) >= 0.3 ? 'hi' : ''} style={{ ['--a' as string]: Math.abs(v) }}>
                        {r2(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {step === 1 && (
            <p className="pk-detail">
              <strong>Extraktion</strong> nach maximal erklärter Varianz: Faktor 1 «zieht» zuerst so viel gemeinsame Varianz wie möglich – alle Items laden mittel darauf.
              Faktor 2 ist bipolar. Ladungen ≥ .30 sind markiert. Schwer zu interpretieren! (S. 59)
            </p>
          )}
          {step === 2 && (
            <p className="pk-detail">
              <strong>Rotation</strong> → Einfachstruktur: Jedes Item lädt nun hoch auf nur <em>einem</em> Faktor. Hier orthogonal (unkorrelierte Faktoren); bei obliquer
              Rotation dürften die Faktoren korrelieren und könnten zu Superfaktoren zusammengefasst werden. (S. 59, 62)
            </p>
          )}
          {step === 3 && (
            <div className="pk-detail">
              <p>
                <strong>Benennung</strong> anhand der hoch ladenden Items – das ist <em>subjektiv</em>. Wie würdest du die Faktoren nennen?
              </p>
              {[0, 1].map((f) => (
                <div key={f} className="ew-chiprow pk-mb">
                  <span className="small">Faktor {f + 1}:</span>
                  {FA_NAMES.map((n) => {
                    const right = (f === 0 && n === 'Extraversion') || (f === 1 && n === 'Gewissenhaftigkeit');
                    const on = names[f] === n;
                    return (
                      <button
                        key={n}
                        className={'ew-chipbtn' + (on ? (right ? ' pk-ok' : ' pk-bad') : '')}
                        onClick={() => setNames(names.map((x, k) => (k === f ? n : x)))}
                      >
                        {n} {on && (right ? '✓' : '✗')}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <div className="ew-chiprow">
        {step > 0 && (
          <button className="btn ghost small" onClick={() => setStep(step - 1)}>
            ← zurück
          </button>
        )}
        {step < 3 && (
          <button className="btn small" onClick={() => setStep(step + 1)}>
            Nächster Schritt →
          </button>
        )}
      </div>
    </Shell>
  );
}

const B5 = [
  { id: 'N', label: 'Neurotizismus (N)', color: '#dc2626', facets: ['Ängstlichkeit', 'Reizbarkeit', 'Depression', 'Soziale Befangenheit', 'Impulsivität', 'Verletzlichkeit'] },
  { id: 'E', label: 'Extraversion (E)', color: '#d97706', facets: ['Herzlichkeit', 'Geselligkeit', 'Durchsetzungsfähigkeit', 'Aktivität', 'Erlebnishunger', 'Frohsinn'] },
  { id: 'O', label: 'Offenheit (O)', color: '#7c3aed', facets: ['Offenheit für Fantasie', 'Offenheit für Ästhetik', 'Offenheit für Gefühle', 'Offenheit für Handlungen', 'Offenheit für Ideen', 'Offenheit für Werte- und Normensysteme'] },
  { id: 'A', label: 'Verträglichkeit (A)', color: '#059669', facets: ['Vertrauen', 'Freimütigkeit', 'Altruismus', 'Entgegenkommen', 'Bescheidenheit', 'Gutherzigkeit'] },
  { id: 'C', label: 'Gewissenhaftigkeit (C)', color: '#2563eb', facets: ['Kompetenz', 'Ordnungsliebe', 'Pflichtbewusstsein', 'Leistungsstreben', 'Selbstdisziplin', 'Besonnenheit'] },
];
const B5_CATS = B5.map((f) => ({ id: f.id, label: f.label, color: f.color }));
const B5_ITEMS: SortItem[] = B5.flatMap((f) =>
  f.facets.map((x) => ({ text: x.replace('Offenheit für ', ''), cat: f.id, why: `${f.label}: ${f.facets.join(', ').replace(/Offenheit für /g, '')}. (S. 64)` })),
);

function BigFiveFacetten() {
  const [mode, setMode] = useState<'trainer' | 'uebersicht'>('trainer');
  const [open, setOpen] = useState<string | null>('E');
  return (
    <Shell title="Facetten-Trainer: Welcher Big-Five-Faktor?" note="Prüfungshinweis: Begriffe den Big Five zuordnen können. Eine Runde = 10 zufällige Facetten. (S. 64)">
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['trainer', 'Zuordnen üben'],
          ['uebersicht', 'Übersicht'],
        ]}
      />
      {mode === 'trainer' ? (
        <SortTrainer categories={B5_CATS} items={B5_ITEMS} prompt="Zu welchem Faktor gehört die Facette" limit={10} />
      ) : (
        <div className="pk-b5">
          {B5.map((f) => (
            <button key={f.id} className={'pk-b5-card' + (open === f.id ? ' on' : '')} style={{ ['--ch' as string]: f.color }} onClick={() => setOpen(f.id)}>
              <span className="pk-b5-letter">{f.id}</span>
              <span className="pk-b5-name">{f.label.replace(/ \(.\)/, '')}</span>
              {open === f.id && (
                <ul>
                  {f.facets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
            </button>
          ))}
        </div>
      )}
    </Shell>
  );
}

const PEN_LEVELS = [
  { id: 4, label: 'IV. Superfaktor', text: '**Extraversion** – Typ-Ebene, wird aus den Interkorrelationen der Traits gewonnen.' },
  { id: 3, label: 'III. Trait', text: '**Traits** wie kontaktfreudig, lebhaft, aktiv, ungestüm, dominant – entstehen aus korrelierten Gewohnheiten.' },
  { id: 2, label: 'II. Habit', text: '**Habituelles Verhalten:** Reaktionen, die sich in ähnlichen Situationen wiederholen.' },
  { id: 1, label: 'I. Beobachtbares Verhalten', text: '**Spezifisches Verhalten:** einzelne, beobachtbare Reaktionen in einer Situation.' },
];
const PEN_TRAITS = ['kontaktfreudig', 'lebhaft', 'aktiv', 'ungestüm', 'dominant'];

function PenHierarchie() {
  const [lvl, setLvl] = useState(4);
  const [tr, setTr] = useState<number | null>(null);
  const ty = (l: number) => ({ 4: 30, 3: 92, 2: 150, 1: 198 })[l]!;
  const trx = (k: number) => 130 + k * 92;
  const habits = PEN_TRAITS.flatMap((_, k) => [0, 1, 2].map((h) => ({ k, x: trx(k) - 26 + h * 26 })));
  const act = (k: number) => tr === null || tr === k;
  return (
    <Shell
      title="Interaktiv: Hierarchischer Aufbau im PEN-Modell (Abb. 3)"
      note="Neu gezeichnet nach S. 67. Klicke eine Ebene (links) oder einen Trait. Eysencks Extraversion-Traits laut Folie S. 70 zusätzlich: gesellig, durchsetzungsfähig, reizsuchend, sorglos, optimistisch, abenteuerlustig."
    >
      <svg viewBox="0 0 600 220" className="pk-svg wide" role="group" aria-label="PEN-Hierarchie">
        {PEN_LEVELS.map((l) => (
          <g key={l.id} className={'pk-hit pk-lvl' + (lvl === l.id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setLvl(l.id)} onKeyDown={keyAct(() => setLvl(l.id))}>
            <rect x="2" y={ty(l.id) - 14} width="78" height="26" rx="6" />
            <text x="41" y={ty(l.id) + 4} className="pk-t s b">
              {l.label.split(' ')[0]} {l.id === 4 ? 'Super' : l.id === 3 ? 'Trait' : l.id === 2 ? 'Habit' : 'Verhalten'}
            </text>
          </g>
        ))}
        {PEN_TRAITS.map((_, k) => (
          <line key={k} x1="314" y1="44" x2={trx(k)} y2="80" className={'pk-edge' + (act(k) ? '' : ' faint')} />
        ))}
        {habits.map((h, i) => (
          <g key={i} className={act(h.k) ? '' : 'pk-faint'}>
            <line x1={trx(h.k)} y1="104" x2={h.x} y2="142" className="pk-edge" />
            <rect x={h.x - 9} y="142" width="18" height="16" className={'pk-node-t' + (lvl === 2 ? ' hl' : '')} />
            <line x1={h.x} y1="158" x2={h.x - 5} y2="192" className="pk-edge" />
            <line x1={h.x} y1="158" x2={h.x + 5} y2="192" className="pk-edge" />
            <circle cx={h.x - 5} cy="197" r="4" className={'pk-node-s' + (lvl === 1 ? ' hl' : '')} />
            <circle cx={h.x + 5} cy="197" r="4" className={'pk-node-s' + (lvl === 1 ? ' hl' : '')} />
          </g>
        ))}
        <g className={'pk-box' + (lvl === 4 ? ' hl' : '')}>
          <rect x="234" y="14" width="160" height="32" rx="6" />
          <text x="314" y="35" className="pk-t b big">
            Extraversion
          </text>
        </g>
        {PEN_TRAITS.map((t, k) => (
          <g
            key={t}
            className={'pk-hit pk-box' + (lvl === 3 ? ' hl' : '') + (tr === k ? ' on' : '') + (act(k) ? '' : ' pk-faint')}
            role="button"
            tabIndex={0}
            onClick={() => {
              setTr(tr === k ? null : k);
              setLvl(3);
            }}
            onKeyDown={keyAct(() => setTr(tr === k ? null : k))}
          >
            <rect x={trx(k) - 44} y="80" width="88" height="24" rx="5" />
            <text x={trx(k)} y="96" className="pk-t s b">
              {t}
            </text>
          </g>
        ))}
      </svg>
      <div className="pk-detail">
        <strong>{PEN_LEVELS.find((l) => l.id === lvl)!.label}:</strong> <Rich text={PEN_LEVELS.find((l) => l.id === lvl)!.text} />
        {tr !== null && <span className="muted"> · Ausgewählt: «{PEN_TRAITS[tr]}» mit seinen Gewohnheiten und Einzelreaktionen.</span>}
      </div>
    </Shell>
  );
}

const MV_PEN = [
  { id: 'E', label: 'Extraversion', to: ['E'] },
  { id: 'N', label: 'Neurotizismus', to: ['N'] },
  { id: 'P', label: 'Psychotizismus', to: ['A', 'C'] },
];
const MV_FFM = [
  { id: 'E', label: 'Extraversion' },
  { id: 'N', label: 'Neurotizismus' },
  { id: 'A', label: 'Verträglichkeit (niedrig)' },
  { id: 'C', label: 'Gewissenhaftigkeit (niedrig)' },
  { id: 'O', label: 'Offenheit' },
];
const MV_TEXT: Record<string, string> = {
  E: '**E und N** finden sich in fast allen Ansätzen – aber «E ist nicht gleich E»: Die Marker unterscheiden sich (Cattell, Eysenck, Costa & McCrae, Norman). (S. 69–71)',
  N: '**E und N** finden sich in fast allen Ansätzen. Neurose gilt als Extremform des Neurotizismus (Psychoanalyse). (S. 71)',
  P: '**P** findet sich aufgeteilt in **niedrige Verträglichkeit** und **niedrige Gewissenhaftigkeit**. Costa & McCrae: P sei eine «willkürliche Vermischung» von V und G. (S. 69, 71)',
  A: '**Niedrige Verträglichkeit** ist ein Teil von Eysencks Psychotizismus. (S. 69, 71)',
  C: '**Niedrige Gewissenhaftigkeit** ist ein Teil von Eysencks Psychotizismus. (S. 69, 71)',
  O: '**Offenheit** hat bei Eysenck keine Entsprechung: Er zählt sie zu den Einstellungen; vermutlich nicht gefunden, weil seine Stichprobe aus traumatisierten Soldaten bestand. Im FFM z. T. «Culture» oder «Intellect». (S. 69, 71)',
};

function Modellvergleich() {
  const [sel, setSel] = useState('P');
  const penY = (i: number) => 40 + i * 70;
  const ffmY = (i: number) => 24 + i * 44;
  const isOn = (p: string, f: string) => sel === p || sel === f;
  return (
    <Shell title="Interaktiv: PEN-Modell ↔ Fünf-Faktoren-Modell" note="Klicke auf einen Faktor links oder rechts.">
      <div className="pk-split">
        <svg viewBox="0 0 360 230" className="pk-svg" role="group" aria-label="Modellvergleich">
          <text x="70" y="12" className="pk-t s b">
            Eysenck (PEN)
          </text>
          <text x="280" y="12" className="pk-t s b">
            Costa & McCrae (FFM)
          </text>
          {MV_PEN.flatMap((p, i) =>
            p.to.map((t) => {
              const j = MV_FFM.findIndex((f) => f.id === t);
              return <line key={p.id + t} x1="130" y1={penY(i)} x2="210" y2={ffmY(j)} className={'pk-edge' + (isOn(p.id, t) ? ' strong' : '')} />;
            }),
          )}
          <line x1="150" y1={ffmY(4)} x2="200" y2={ffmY(4)} className={'pk-edge dashed' + (sel === 'O' ? ' strong' : '')} />
          <text x="140" y={ffmY(4) + 4} className="pk-t s" textAnchor="end">
            fehlt
          </text>
          {MV_PEN.map((p, i) => (
            <g key={p.id} className={'pk-hit pk-box' + (sel === p.id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel(p.id)} onKeyDown={keyAct(() => setSel(p.id))}>
              <rect x="10" y={penY(i) - 15} width="120" height="30" rx="6" />
              <text x="70" y={penY(i) + 5} className="pk-t b">
                {p.label}
              </text>
            </g>
          ))}
          {MV_FFM.map((f, j) => (
            <g key={f.id} className={'pk-hit pk-box' + (sel === f.id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel(f.id)} onKeyDown={keyAct(() => setSel(f.id))}>
              <rect x="210" y={ffmY(j) - 15} width="146" height="30" rx="6" />
              <text x="283" y={ffmY(j) + 5} className="pk-t s b">
                {f.label}
              </text>
            </g>
          ))}
        </svg>
        <div className="pk-detail">
          <Rich text={MV_TEXT[sel]} />
        </div>
      </div>
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 4 ═════════════════════════ */

const VERW = [
  { label: 'Eineiige Zwillinge (EZ/MZ)', v: 100 },
  { label: 'Zweieiige Zwillinge (ZZ/DZ)', v: 50 },
  { label: 'Geschwister', v: 50 },
  { label: 'Eltern – Kind', v: 50 },
  { label: 'Grosseltern – Kind', v: 25 },
  { label: 'Halbgeschwister', v: 25 },
  { label: 'Cousins / Cousinen', v: 12.5 },
  { label: 'Adoptiveltern/-geschwister – Kind', v: 0 },
];

function Verwandtschaft() {
  return (
    <Shell title="Genetische Ähnlichkeit nach Verwandtschaftsgrad (Tab. 4)" note="Gemeint ist der Anteil der variablen Gene, den die Personen teilen. (S. 80)">
      <div className="ew-bars">
        {VERW.map((r) => (
          <div key={r.label} className="ew-bar-row pk-bar-row">
            <span>{r.label}</span>
            <span className="ew-bar-track">
              <span className="ew-bar-fill" style={{ width: `${r.v}%` }} />
            </span>
            <span className="ew-bar-value">{String(r.v).replace('.', ',')} %</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

const PLOMIN = [
  { id: 'MZ.T', name: 'EZ zusammen', r: 0.86, g: 1, u: 1, cut: true },
  { id: 'MZ.A', name: 'EZ getrennt', r: 0.73, g: 1, u: 0 },
  { id: 'DZ.T', name: 'ZZ zusammen', r: 0.6, g: 0.5, u: 1 },
  { id: 'SIB.T', name: 'Geschwister zus.', r: 0.47, g: 0.5, u: 1 },
  { id: 'PO.T', name: 'Eltern–Kind zus.', r: 0.42, g: 0.5, u: 1 },
  { id: 'DZ.A', name: 'ZZ getrennt', r: 0.32, g: 0.5, u: 0 },
  { id: 'SIB.A', name: 'Geschwister getr.', r: 0.25, g: 0.5, u: 0 },
  { id: 'PO.A', name: 'Eltern–Kind getr.', r: 0.25, g: 0.5, u: 0 },
  { id: 'SIB adop.', name: 'Adoptivgeschwister', r: 0.31, g: 0, u: 1 },
  { id: 'PO adop.', name: 'Adoptiveltern–Kind', r: 0.3, g: 0, u: 1 },
];
const PLOMIN_CMP = [
  { label: 'Gene gleich, Umwelt variiert', ids: ['MZ.T', 'MZ.A'], text: 'EZ zusammen (≈ .86) vs. getrennt (.73): Gleiche Gene, aber getrennte Umwelt senkt die Ähnlichkeit nur wenig → geteilte Umwelt spielt eine kleinere Rolle als die Gene.' },
  { label: 'Umwelt gleich, Gene variieren', ids: ['MZ.T', 'DZ.T'], text: 'EZ vs. ZZ, beide zusammen aufgewachsen: Grundlage der Falconer-Formel. 2 · (.86 − .60) = .52 → ca. die Hälfte der Varianz genetisch.' },
  { label: 'Nur Gene (50 %), keine Umwelt', ids: ['SIB.A', 'PO.A', 'DZ.A'], text: 'Getrennt aufgewachsene Verwandte sind sich trotz fehlender gemeinsamer Umwelt ähnlich (.25–.32) → Einfluss der Gene.' },
  { label: 'Nur Umwelt, keine Gene', ids: ['SIB adop.', 'PO adop.'], text: 'Genetisch nicht Verwandte in derselben Familie (.30/.31) → Einfluss der geteilten Umwelt. Achtung: eingeschränkte Umweltvarianz bei Adoptivfamilien (Asendorpf 2024).' },
];

function Plomin() {
  const [cmp, setCmp] = useState(1);
  const [sel, setSel] = useState<string | null>(null);
  const hl = sel ? [sel] : PLOMIN_CMP[cmp].ids;
  const W = 560;
  const H = 230;
  const bw = 44;
  const bx = (i: number) => 34 + i * 52;
  const by = (r: number) => H - 50 - r * 190;
  const d = sel ? PLOMIN.find((p) => p.id === sel)! : null;
  return (
    <Shell
      title="Interaktiv: IQ-Korrelationen nach Verwandtschaft und Umwelt (Abb. 4)"
      note="Plomin & Petrill (1997), neu gezeichnet nach S. 85. T = zusammen, A = getrennt aufgewachsen. Der Wert für EZ zusammen ist auf der Folie abgeschnitten; ≈ .86 entspricht dem Rechenbeispiel von Bouchard & McGue (S. 99)."
    >
      <div className="ew-chiprow pk-mb">
        {PLOMIN_CMP.map((c, i) => (
          <button
            key={c.label}
            className={'ew-chipbtn' + (cmp === i && !sel ? ' on' : '')}
            onClick={() => {
              setCmp(i);
              setSel(null);
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg wide" role="group" aria-label="IQ-Korrelationen">
        {[0, 0.2, 0.4, 0.6, 0.8].map((v) => (
          <g key={v}>
            <line x1="28" y1={by(v)} x2={W - 6} y2={by(v)} className="pk-grid" />
            <text x="22" y={by(v) + 4} className="pk-t s" textAnchor="end">
              {v === 0 ? '0' : r2(v)}
            </text>
          </g>
        ))}
        {PLOMIN.map((p, i) => {
          const on = hl.includes(p.id);
          return (
            <g key={p.id} className={'pk-hit pk-bar' + (on ? ' on' : '') + (p.g === 0 ? ' adop' : '')} role="button" tabIndex={0} onClick={() => setSel(p.id)} onKeyDown={keyAct(() => setSel(p.id))}>
              <rect x={bx(i)} y={by(p.r)} width={bw} height={p.r * 190} rx="3" />
              <text x={bx(i) + bw / 2} y={by(p.r) - 5} className="pk-t s b">
                {p.cut ? '≈' : ''}
                {r2(p.r)}
              </text>
              <text x={bx(i) + bw / 2} y={H - 36} className="pk-t s">
                {p.id}
              </text>
              <text x={bx(i) + bw / 2} y={H - 20} className="pk-t s">
                G {p.g === 0.5 ? '.5' : p.g}
              </text>
              <text x={bx(i) + bw / 2} y={H - 6} className="pk-t s">
                U {p.u}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="pk-detail">
        {d ? (
          <>
            <strong>{d.name}</strong> ({d.id}): r = {d.cut ? '≈ ' : ''}
            {r2(d.r)} · genetische Verwandtschaft {d.g === 0.5 ? '.5' : d.g} · geteilte Familienumwelt {d.u ? 'ja' : 'nein'}
          </>
        ) : (
          PLOMIN_CMP[cmp].text
        )}
      </div>
    </Shell>
  );
}

function Heritabilitaet() {
  const [vg, setVg] = useState(50);
  const [vu, setVu] = useState(50);
  const total = vg + vu;
  const h2 = total ? vg / total : null;
  const presets: [string, number, number][] = [
    ['Grosse Umweltunterschiede', 50, 80],
    ['Chancengleichheit (gleichere Umwelt)', 50, 15],
    ['«Zwei Ohren haben» (keine Variation)', 0, 0],
  ];
  return (
    <Shell
      title="Interaktiv: Heritabilität h² = V_G / (V_G + V_U)"
      note="Gleiche genetische Varianz – aber je kleiner die Umweltvarianz, desto grösser die Heritabilität. Ohne Variation ist h² nicht definiert bzw. 0. (S. 94, 98)"
    >
      <div className="ew-chiprow pk-mb">
        {presets.map(([l, g, u]) => (
          <button
            key={l}
            className={'ew-chipbtn' + (vg === g && vu === u ? ' on' : '')}
            onClick={() => {
              setVg(g);
              setVu(u);
            }}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="pk-sliders3 two">
        <label className="pk-slider">
          <span>
            genotypische Varianz <i>V</i>
            <sub>G</sub>: <strong>{vg}</strong>
          </span>
          <input type="range" min={0} max={100} value={vg} onChange={(e) => setVg(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            Umweltvarianz <i>V</i>
            <sub>U</sub>: <strong>{vu}</strong>
          </span>
          <input type="range" min={0} max={100} value={vu} onChange={(e) => setVu(+e.target.value)} />
        </label>
      </div>
      <div className="pk-stack" aria-label="Zusammensetzung der phänotypischen Varianz">
        {total > 0 ? (
          <>
            <span className="pk-stack-g" style={{ width: `${(vg / total) * 100}%` }}>
              {vg > 0 && 'Gene'}
            </span>
            <span className="pk-stack-u" style={{ width: `${(vu / total) * 100}%` }}>
              {vu > 0 && 'Umwelt'}
            </span>
          </>
        ) : (
          <span className="pk-stack-empty">keine Varianz – alle Personen gleich</span>
        )}
      </div>
      <p className="pk-calc">
        {h2 === null ? (
          <>h² nicht berechenbar (0/0): Ein Merkmal ohne Variation hat keine Heritabilität – obwohl es genetisch bedingt sein kann.</>
        ) : (
          <>
            h² = {vg} / ({vg} + {vu}) = <strong className="pk-big">{r2(h2)}</strong>
          </>
        )}
      </p>
    </Shell>
  );
}

function Falconer() {
  const [mode, setMode] = useState<'zwilling' | 'adoption'>('zwilling');
  const [a, setA] = useState(86);
  const [b, setB] = useState(60);
  const r1 = a / 100;
  const r0 = b / 100;
  const a2 = 2 * (r1 - r0);
  const c2 = mode === 'zwilling' ? r1 - a2 : r0;
  const e2 = mode === 'zwilling' ? 1 - r1 : 1 - (0.5 * a2 + c2);
  const bad = a2 < 0 || c2 < -0.005 || a2 > 1;
  const presets: [string, number, number][] =
    mode === 'zwilling'
      ? [
          ['Bouchard & McGue 1981', 86, 60],
          ['Kontrollfrage S. 14', 70, 45],
        ]
      : [['Beispiel (fiktiv)', 45, 25]];
  const [n1, n0] = mode === 'zwilling' ? ['r_MZ', 'r_DZ'] : ['r_na', 'r_a'];
  const lab = (s: string) => (
    <>
      <i>{s[0]}</i>
      <sub>{s.slice(2)}</sub>
    </>
  );
  return (
    <Shell
      title="Falconer-Rechner: Wie viel ist genetisch?"
      note={
        mode === 'zwilling'
          ? 'a² = 2 (r_MZ − r_DZ); c² = r_MZ − a²; der Rest (1 − r_MZ) = nicht geteilte Umwelt + Messfehler. (S. 98–99) [Ergänzung] e² als Rest ist hier zur Veranschaulichung ergänzt.'
          : 'Adoptionsdesign: r_a = c² (adoptierte Geschwister), r_na = 0,5 a² + c² (leibliche Geschwister) ⇒ a² = 2 (r_na − r_a). (S. 99)'
      }
    >
      <Seg
        label="Design"
        value={mode}
        onChange={(m) => {
          setMode(m);
          if (m === 'zwilling') {
            setA(86);
            setB(60);
          } else {
            setA(45);
            setB(25);
          }
        }}
        options={[
          ['zwilling', 'Zwillingsstudie'],
          ['adoption', 'Adoptionsstudie'],
        ]}
      />
      <div className="ew-chiprow pk-mb">
        {presets.map(([l, x, y]) => (
          <button
            key={l}
            className={'ew-chipbtn' + (a === x && b === y ? ' on' : '')}
            onClick={() => {
              setA(x);
              setB(y);
            }}
          >
            {l} ({r2(x / 100)} / {r2(y / 100)})
          </button>
        ))}
      </div>
      <div className="pk-sliders3 two">
        <label className="pk-slider">
          <span>
            {lab(n1)} {mode === 'zwilling' ? '(eineiig)' : '(leibliche Geschwister)'}: <strong>{r2(r1)}</strong>
          </span>
          <input type="range" min={0} max={100} value={a} onChange={(e) => setA(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            {lab(n0)} {mode === 'zwilling' ? '(zweieiig)' : '(adoptierte Geschwister)'}: <strong>{r2(r0)}</strong>
          </span>
          <input type="range" min={0} max={100} value={b} onChange={(e) => setB(+e.target.value)} />
        </label>
      </div>
      <p className="pk-calc">
        a² = 2 · ({r2(r1)} − {r2(r0)}) = <strong className="pk-big">{r2(a2)}</strong>
        {mode === 'zwilling' ? (
          <>
            {' '}
            · c² = {r2(r1)} − {r2(a2)} = <strong>{r2(c2)}</strong>
          </>
        ) : (
          <>
            {' '}
            · c² = r<sub>a</sub> = <strong>{r2(c2)}</strong>
          </>
        )}
      </p>
      {bad ? (
        <p className="pk-warn">
          ⚠ Diese Kombination ergibt unplausible Werte (a² oder c² ausserhalb 0–1). Typisch gilt: {mode === 'zwilling' ? 'r_MZ ≥ r_DZ ≥ r_MZ / 2' : 'r_na ≥ r_a'}.
        </p>
      ) : (
        <div className="pk-stack" aria-label="Varianzzerlegung">
          <span className="pk-stack-g" style={{ width: `${a2 * 100}%` }}>
            {a2 >= 0.12 && `Gene ${Math.round(a2 * 100)} %`}
          </span>
          <span className="pk-stack-c" style={{ width: `${Math.max(0, c2) * 100}%` }}>
            {c2 >= 0.12 && `geteilt ${Math.round(c2 * 100)} %`}
          </span>
          <span className="pk-stack-u" style={{ width: `${Math.max(0, e2) * 100}%` }}>
            {e2 >= 0.12 && `Rest ${Math.round(e2 * 100)} %`}
          </span>
        </div>
      )}
    </Shell>
  );
}

const AROLD = [
  { id: 'n', label: 'niedrig', color: 'var(--ew-s3)', y0: 13.7, y1: 15.48 },
  { id: 'm', label: 'mittel', color: 'var(--ew-s1)', y0: 14.07, y1: 15.55 },
  { id: 'h', label: 'hoch', color: 'var(--ew-s2)', y0: 14.45, y1: 15.62 },
];

function Arold() {
  const [pgi, setPgi] = useState(-2);
  const W = 520;
  const H = 230;
  const x = (p: number) => 74 + ((p + 2) / 4) * (W - 160);
  const y = (v: number) => H - 30 - ((v - 13.5) / 2.5) * (H - 50);
  const val = (l: (typeof AROLD)[number], p: number) => l.y0 + ((p + 2) / 4) * (l.y1 - l.y0);
  const gap = val(AROLD[2], pgi) - val(AROLD[0], pgi);
  return (
    <Shell
      title="Interaktiv: Polygener Index, Bildungsjahre und Lehrqualität (Abb. 5, Arold et al. 2022)"
      note="Neu gezeichnet nach S. 92 (Werte aus der Grafik abgelesen). Achtung: Die Bildlegende der Zusammenfassung sagt, die Unterschiede würden mit höherem PGI grösser – die Grafik zeigt das Gegenteil: Gute Lehrpersonen nützen v. a. Kindern mit tiefem PGI."
    >
      <label className="pk-slider">
        <span>
          Polygener Index (standardisiert): <strong>{pgi > 0 ? '+' : ''}{pgi.toFixed(1).replace('.', ',')}</strong>
        </span>
        <input type="range" min={-2} max={2} step={0.5} value={pgi} onChange={(e) => setPgi(+e.target.value)} />
      </label>
      <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg wide" role="img" aria-label="Bildungsjahre nach PGI und Lehrqualität">
        {[13.5, 14, 14.5, 15, 15.5, 16].map((v) => (
          <g key={v}>
            <line x1="64" y1={y(v)} x2={x(2) + 4} y2={y(v)} className="pk-grid" />
            <text x="56" y={y(v) + 4} className="pk-t s" textAnchor="end">
              {String(v).replace('.', ',')}
            </text>
          </g>
        ))}
        {[-2, -1, 0, 1, 2].map((p) => (
          <text key={p} x={x(p)} y={H - 10} className="pk-t s">
            {p > 0 ? '+' : ''}
            {p}
          </text>
        ))}
        {AROLD.map((l) => (
          <g key={l.id}>
            <line x1={x(-2)} y1={y(l.y0)} x2={x(2)} y2={y(l.y1)} stroke={l.color} strokeWidth="2.6" />
            <text x={x(2) + 8} y={y(l.y1) + (l.id === 'n' ? 18 : l.id === 'h' ? -10 : 4)} className="pk-t s b" textAnchor="start" style={{ fill: l.color }}>
              {l.label}
            </text>
            <circle cx={x(pgi)} cy={y(val(l, pgi))} r="5" fill={l.color} stroke="var(--surface)" strokeWidth="2" />
          </g>
        ))}
        <line x1={x(pgi)} y1={y(val(AROLD[0], pgi))} x2={x(pgi)} y2={y(val(AROLD[2], pgi))} className="pk-gap" />
        <text x="64" y="10" className="pk-t s" textAnchor="start">
          Bildungsjahre
        </text>
      </svg>
      <p className="pk-detail">
        Bei PGI {pgi > 0 ? '+' : ''}
        {pgi.toFixed(1).replace('.', ',')} liegen zwischen tiefer und hoher Lehrqualität ca. <strong>{gap.toFixed(2).replace('.', ',')} Bildungsjahre</strong>.{' '}
        {pgi <= -1 ? 'Bei tiefem PGI macht die Lehrqualität viel aus.' : pgi >= 1 ? 'Bei hohem PGI liegen die Linien fast aufeinander.' : ''}
      </p>
    </Shell>
  );
}
