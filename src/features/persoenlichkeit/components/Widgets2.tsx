import { useState } from 'react';
import { Rich } from './Rich';
import { Seg, Shell, SortTrainer, corr, keyAct, r2, type SortItem } from './WidgetKit';

/* ═════════════════════════ Kapitel 5 ═════════════════════════ */

const PEOPLE = ['Ana', 'Ben', 'Cem', 'Dia', 'Eli'];
const COLORS = ['#2563eb', '#d97706', '#059669', '#db2777', '#7c3aed'];
const T1 = [2, 3, 4, 5, 6];
const SCEN = [
  {
    id: 'mean',
    label: 'Mittelwert stabil, Rangfolge kippt',
    t2: [6, 5, 4, 3, 2],
    text: '**Mean-level stability** ohne **rank-order stability**: Der Gruppenmittelwert bleibt gleich, aber der Tiefste wird zum Höchsten.',
  },
  {
    id: 'rank',
    label: 'Rangfolge stabil, Mittel steigt',
    t2: [3.5, 4.5, 5.5, 6.5, 7.5],
    text: '**Rank-order stability** ohne **mean-level stability**: Alle legen gleich viel zu (z. B. Reifung bei Gewissenhaftigkeit) – die Korrelation bleibt 1. Reifung zeigt sich also in **Mittelwertveränderungen**.',
  },
  {
    id: 'both',
    label: 'Beides stabil (realistisch)',
    t2: [2.4, 2.8, 4.3, 4.7, 5.8],
    text: 'Mittelwert und Rangfolge bleiben weitgehend erhalten, die einzelnen Werte schwanken aber etwas – so sieht relative Stabilität aus.',
  },
  {
    id: 'abs',
    label: 'Absolute Stabilität',
    t2: [2, 3, 4, 5, 6],
    text: '**Absolute Stabilität**: identische Werte zu beiden Zeitpunkten – kommt wegen Messfehlern praktisch nie vor.',
  },
  {
    id: 'none',
    label: 'Weder noch',
    t2: [5, 2.5, 6.5, 4, 6],
    text: 'Weder Mittelwert noch Rangfolge stabil: Der Mittelwert steigt, die Korrelation ist tief.',
  },
];

export function Stabilitaetsarten() {
  const [sc, setSc] = useState(0);
  const s = SCEN[sc];
  const m1 = T1.reduce((a, b) => a + b, 0) / 5;
  const m2 = s.t2.reduce((a, b) => a + b, 0) / 5;
  const r = corr(T1, s.t2);
  const y = (v: number) => 200 - (v / 8) * 180;
  return (
    <Shell title="Interaktiv: Arten von Stabilität an fünf Personen" note="[Ergänzung] Fiktive Werte (z. B. Gewissenhaftigkeit auf einer Skala 0–8) zu zwei Messzeitpunkten. (Tab. 5, S. 104–105)">
      <div className="ew-chiprow pk-mb">
        {SCEN.map((x, i) => (
          <button key={x.id} className={'ew-chipbtn' + (sc === i ? ' on' : '')} onClick={() => setSc(i)}>
            {x.label}
          </button>
        ))}
      </div>
      <div className="pk-split">
        <svg viewBox="0 0 320 224" className="pk-svg" role="img" aria-label={s.label}>
          <line x1="80" y1="16" x2="80" y2="202" className="pk-axis-line" />
          <line x1="240" y1="16" x2="240" y2="202" className="pk-axis-line" />
          <text x="80" y="218" className="pk-t s b">
            Zeitpunkt 1
          </text>
          <text x="240" y="218" className="pk-t s b">
            Zeitpunkt 2
          </text>
          <line x1="70" y1={y(m1)} x2="90" y2={y(m1)} className="pk-mean" />
          <line x1="230" y1={y(m2)} x2="250" y2={y(m2)} className="pk-mean" />
          <text x="96" y={y(m1) - 6} className="pk-t s b" textAnchor="start">
            M
          </text>
          <text x="254" y={y(m2) - 6} className="pk-t s b" textAnchor="start">
            M
          </text>
          {PEOPLE.map((p, i) => (
            <g key={p}>
              <line x1="80" y1={y(T1[i])} x2="240" y2={y(s.t2[i])} stroke={COLORS[i]} strokeWidth="2.2" className="pk-slope" />
              <circle cx="80" cy={y(T1[i])} r="5" fill={COLORS[i]} />
              <circle cx="240" cy={y(s.t2[i])} r="5" fill={COLORS[i]} className="pk-slope-dot" />
              <text x="12" y={y(T1[i]) + 4} className="pk-t s" textAnchor="start" style={{ fill: COLORS[i] }}>
                {p}
              </text>
            </g>
          ))}
        </svg>
        <div className="pk-detail">
          <dl className="pk-kv">
            <dt>Mittelwert</dt>
            <dd>
              {m1.toFixed(1).replace('.', ',')} → {m2.toFixed(1).replace('.', ',')} {Math.abs(m2 - m1) < 0.05 ? '(stabil)' : '(verändert)'}
            </dd>
            <dt>Korrelation</dt>
            <dd>
              r = {r2(r)} {r > 0.8 ? '(Rangfolge stabil)' : '(Rangfolge instabil)'}
            </dd>
          </dl>
          <p>
            <Rich text={s.text} />
          </p>
        </div>
      </div>
    </Shell>
  );
}

export function Rangstabilitaet() {
  const [m, setM] = useState<'folie' | 'bleidorn' | 'intervall'>('folie');
  const W = 520;
  const H = 210;
  const x = (a: number) => 50 + ((a - 10) / 70) * (W - 80);
  const y = (v: number) => H - 30 - v * (H - 50);
  const folie = (a: number) => (a <= 60 ? 0.35 + 0.4 * ((a - 10) / 50) ** 0.7 : 0.75 - (a - 60) * 0.012);
  const bleidorn = (a: number) => (a <= 25 ? 0.35 + 0.37 * ((a - 10) / 15) ** 0.8 : 0.72 + (a - 25) * 0.0006);
  const path = (f: (a: number) => number) => {
    const p: string[] = [];
    for (let a = 10; a <= 80; a += 1) p.push(`${a === 10 ? 'M' : 'L'}${x(a)},${y(f(a))}`);
    return p.join(' ');
  };
  return (
    <Shell
      title="Rank-order-Stabilität: über das Alter und über das Intervall"
      note={
        m === 'intervall'
          ? 'Damian et al. (2019): je länger das Intervall, desto kleiner die Stabilität. (S. 107)'
          : 'Schematische Verläufe, keine Messwerte. Folie S. 107: Anstieg mit Peak um 60. Bleidorn et al. (2022, 189 Studien): Plateau ab ca. 25 (S. 113). In der Prüfung die Aussage der jeweiligen Folie im Blick behalten.'
      }
    >
      <Seg
        label="Ansicht"
        value={m}
        onChange={setM}
        options={[
          ['folie', 'Folie: Peak um 60'],
          ['bleidorn', 'Bleidorn 2022: Plateau ab 25'],
          ['intervall', 'Intervall'],
        ]}
      />
      {m === 'intervall' ? (
        <div className="ew-bars">
          {[
            { label: 'über 10 Jahre', lo: 0.4, hi: 0.6, t: '.40–.60' },
            { label: 'über ≥ 30 Jahre', lo: 0.17, hi: 0.23, t: 'ca. .20' },
          ].map((b) => (
            <div key={b.label} className="ew-bar-row pk-bar-row">
              <span>{b.label}</span>
              <span className="ew-bar-track pk-range-track">
                <span className="pk-range" style={{ left: `${b.lo * 100}%`, width: `${(b.hi - b.lo) * 100}%` }} />
              </span>
              <span className="ew-bar-value">{b.t}</span>
            </div>
          ))}
        </div>
      ) : (
        <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg wide" role="img" aria-label="Rangstabilität über das Alter">
          <line x1="44" y1={H - 30} x2={W - 20} y2={H - 30} className="pk-axis-line" />
          <line x1="44" y1={H - 30} x2="44" y2="12" className="pk-axis-line" />
          {[10, 25, 40, 60, 80].map((a) => (
            <text key={a} x={x(a)} y={H - 12} className="pk-t s">
              {a} J.
            </text>
          ))}
          <text x="16" y="105" className="pk-t s" transform="rotate(-90 16 105)">
            Rangstabilität
          </text>
          <path d={path(folie)} className={'pk-line s1' + (m === 'folie' ? '' : ' faint')} />
          <path d={path(bleidorn)} className={'pk-line s2' + (m === 'bleidorn' ? '' : ' faint')} />
          {m === 'folie' ? (
            <g>
              <line x1={x(60)} y1={y(folie(60))} x2={x(60)} y2={H - 30} className="pk-marker" />
              <text x={x(60)} y={y(folie(60)) - 10} className="pk-t s b">
                Peak um 60
              </text>
            </g>
          ) : (
            <g>
              <line x1={x(25)} y1={y(bleidorn(25))} x2={x(25)} y2={H - 30} className="pk-marker" />
              <text x={x(25) + 6} y={y(bleidorn(25)) - 10} className="pk-t s b" textAnchor="start">
                Plateau ab ca. 25
              </text>
            </g>
          )}
        </svg>
      )}
    </Shell>
  );
}

const PHASES = [
  {
    id: 'kind',
    name: 'Kindheit & Jugend',
    span: 'bis ca. 18',
    text: 'Hier sind die **Veränderungen am grössten**; die Rangstabilität ist noch tief. (S. 103, 112)',
    tr: [] as [string, string][],
  },
  {
    id: 'pub',
    name: 'Pubertät',
    span: 'ca. 11–16',
    text: '**Disruption hypothesis:** vorübergehende Abnahme sozial relevanter Traits; in Quer- und Längsschnitt, Selbst- und Elternberichten repliziert. (S. 109)',
    tr: [
      ['C', '↓'],
      ['E', '↓'],
      ['A', '↓'],
    ] as [string, string][],
  },
  {
    id: 'jung',
    name: 'Junges Erwachsenenalter',
    span: 'ca. 18–30',
    text: '**Reifung:** Reife-assoziierte Traits nehmen zu (mean-level changes) [Ergänzung] – typischerweise C, A und emotionale Stabilität. Hier gibt es auch die **meisten individuellen Abweichungen** vom Populationstrend (Schwaba & Bleidorn 2018). (S. 109–110)',
    tr: [
      ['C', '↑'],
      ['A', '↑'],
      ['N', '↓'],
    ] as [string, string][],
  },
  {
    id: 'mitte',
    name: 'Lebensmitte',
    span: 'ca. 40–60',
    text: '**Hohe Stabilität.** Costa et al. (2000): kein systematischer Nachweis einer «**Midlife Crisis**», nur kleine Effekte von Reifung und Life Events. (S. 109)',
    tr: [] as [string, string][],
  },
  {
    id: 'alt',
    name: 'Sehr hohes Alter',
    span: 'ab ca. 80',
    text: '**Abnahme emotionaler Stabilität.** (S. 110) [Ergänzung] Die Altersgrenze ist eine grobe Orientierung.',
    tr: [
      ['N', '↑'],
      ['A', '↓'],
      ['E', '↓'],
      ['C', '↓'],
    ] as [string, string][],
  },
];

export function Lebensphasen() {
  const [sel, setSel] = useState('pub');
  const p = PHASES.find((x) => x.id === sel)!;
  return (
    <Shell title="Interaktiv: Persönlichkeitsveränderung über die Lebensabschnitte" note="Klicke einen Lebensabschnitt. Pfeile = mittlere Veränderung (mean-level).">
      <div className="pk-phases">
        {PHASES.map((x) => (
          <button key={x.id} className={'pk-phase' + (sel === x.id ? ' on' : '')} onClick={() => setSel(x.id)}>
            <strong>{x.name}</strong>
            <span>{x.span}</span>
          </button>
        ))}
      </div>
      <div className="pk-detail">
        {p.tr.length > 0 && (
          <div className="ew-chiprow pk-mb">
            {p.tr.map(([t, d]) => (
              <span key={t} className={'pk-trait ' + (d === '↑' ? 'up' : 'down')}>
                {t} {d}
              </span>
            ))}
          </div>
        )}
        <Rich text={p.text} />
      </div>
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 6 ═════════════════════════ */

const REAKTIONEN = ['Schweigen und weglaufen', 'Zurückschimpfen', 'Ins Lächerliche ziehen', 'Weinen'];
const ANNA: Record<string, { label: string; e: number[]; vw: number[]; text: string }> = {
  sicher: {
    label: 'Anna fühlt sich unter Freund*innen sicher',
    e: [7, 4, 8, 3],
    vw: [3, 5, 8, 2],
    text: 'Anna erwartet, dass ein Witz gut ankommt (E hoch) und schätzt die Lacher (VW hoch) → «ins Lächerliche ziehen» hat das grösste VP.',
  },
  bloss: {
    label: 'Anna fühlt sich vor Fremden blossgestellt',
    e: [8, 3, 2, 6],
    vw: [7, 3, 4, 3],
    text: 'Dieselbe objektive Situation, aber eine andere **psychologische Situation**: Anna erwartet, dass ein Witz misslingt, und will vor allem raus → «schweigen und weglaufen» gewinnt.',
  },
};

export function RotterVP() {
  const [preset, setPreset] = useState<'sicher' | 'bloss'>('sicher');
  const [e, setE] = useState(ANNA.sicher.e);
  const [vw, setVw] = useState(ANNA.sicher.vw);
  const vp = e.map((x, i) => (x * vw[i]) / 100);
  const max = Math.max(...vp);
  const best = vp.indexOf(max);
  const load = (k: 'sicher' | 'bloss') => {
    setPreset(k);
    setE(ANNA[k].e);
    setVw(ANNA[k].vw);
  };
  return (
    <Shell
      title="Interaktiv: Toni wirft Anna vor anderen vor, schlecht zu kochen – wie reagiert sie?"
      note="Beispiel S. 130. [Ergänzung] Die Werte sind fiktiv, und die Balken nutzen zur Veranschaulichung E × VW. Bei Rotter ist das «&» ausdrücklich keine Rechenformel – wichtig ist nur: Je höher E und VW, desto höher das VP."
    >
      <div className="ew-chiprow pk-mb">
        {(Object.keys(ANNA) as ('sicher' | 'bloss')[]).map((k) => (
          <button key={k} className={'ew-chipbtn' + (preset === k ? ' on' : '')} onClick={() => load(k)}>
            {ANNA[k].label}
          </button>
        ))}
      </div>
      <div className="pk-rotter">
        <div className="pk-rotter-head">
          <span>Reaktion</span>
          <span>Erwartung E</span>
          <span>Verstärkungswert VW</span>
          <span>VP</span>
        </div>
        {REAKTIONEN.map((r, i) => (
          <div key={r} className={'pk-rotter-row' + (i === best ? ' best' : '')}>
            <span className="pk-rotter-name">
              {r} {i === best && <span className="ew-chip">wahrscheinlichste</span>}
            </span>
            <label>
              <span className="pk-mobile-label">E</span>
              <input type="range" min={0} max={10} value={e[i]} onChange={(ev) => setE(e.map((x, k) => (k === i ? +ev.target.value : x)))} aria-label={`Erwartung ${r}`} />
              <span className="pk-num">{e[i]}</span>
            </label>
            <label>
              <span className="pk-mobile-label">VW</span>
              <input type="range" min={0} max={10} value={vw[i]} onChange={(ev) => setVw(vw.map((x, k) => (k === i ? +ev.target.value : x)))} aria-label={`Verstärkungswert ${r}`} />
              <span className="pk-num">{vw[i]}</span>
            </label>
            <span className="ew-bar-track">
              <span className="ew-bar-fill" style={{ width: `${vp[i] * 100}%` }} />
            </span>
          </div>
        ))}
      </div>
      <p className="pk-detail">
        <Rich text={ANNA[preset].text} />
      </p>
    </Shell>
  );
}

const LOC_CATS = [
  { id: 'i', label: 'internal', color: '#0891b2' },
  { id: 'e', label: 'external', color: '#d97706' },
];
const LOC: SortItem[] = [
  { text: 'Wenn ich mich gut vorbereite, bestehe ich die Prüfung.', cat: 'i', why: '«Ich habe Kontrolle.»' },
  { text: 'Ob ich befördert werde, hängt vom Wohlwollen meiner Chefin ab.', cat: 'e', why: 'Kontrolle bei anderen Personen / Macht.' },
  { text: 'Gute Noten sind Glückssache.', cat: 'e', why: 'Kontrolle beim Glück.' },
  { text: 'Wie gesund ich bleibe, hängt stark von meinem eigenen Verhalten ab.', cat: 'i', why: 'Bereichsspezifische internale Überzeugung (z. B. Gesundheit, Diabetes).' },
  { text: 'Es bringt nichts, sich anzustrengen – am Ende entscheidet das Schicksal.', cat: 'e', why: 'Kontrolle bei Schicksal/Glück.' },
  { text: 'Wenn ein Projekt scheitert, überlege ich, was ich hätte anders machen können.', cat: 'i', why: 'Ursache im eigenen Handeln.' },
  { text: 'Mächtige Leute bestimmen, was in meinem Leben passiert.', cat: 'e', why: 'Kontrolle bei Macht.' },
  { text: 'Ich kann viel dafür tun, dass meine Beziehungen gelingen.', cat: 'i', why: '«Ich habe Kontrolle.»' },
];

export function KontrolleSort() {
  return (
    <Shell title="Übung: Internal oder external?" note="[Ergänzung] Selbst formulierte Übungssätze zur Unterscheidung (Definition S. 133–134).">
      <SortTrainer categories={LOC_CATS} items={LOC} prompt="Welche Kontrollüberzeugung zeigt der Satz" />
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 7 ═════════════════════════ */

const EI_CATS = [
  { id: 'a', label: 'Fähigkeit (ability)', color: '#dc2626' },
  { id: 't', label: 'Eigenschaft (trait)', color: '#7c3aed' },
  { id: 'm', label: 'Kompetenz (mixed)', color: '#0891b2' },
];
const EI_ITEMS: SortItem[] = [
  { text: 'Salovey & Mayer (1990)', cat: 'a', why: '(S. 155)' },
  { text: 'Petrides & Furnham (2000)', cat: 't', why: '(S. 155–159)' },
  { text: 'Bar-On (1997)', cat: 'm', why: '(S. 159)' },
  { text: 'Goleman (1995, 1998)', cat: 'm', why: '(S. 155–159)' },
  { text: 'MSCEIT', cat: 'a', why: 'Performanztest – maximales Verhalten. (S. 166)' },
  { text: '«trait emotional self-efficacy»', cat: 't', why: 'Emotionsbezogene Dispositionen und Selbstwahrnehmungen. (S. 155–159)' },
  { text: 'maximales Verhalten (Test)', cat: 'a', why: '(S. 155–159)' },
  { text: 'typisches Verhalten (Fragebogen), zeigt sich im Habitus', cat: 't', why: '(S. 155–159)' },
  { text: 'Sammlung erfolgsrelevanter Merkmale', cat: 'm', why: 'Nichtkognitive Fähigkeiten und Kompetenzen zur Bewältigung von Umweltanforderungen. (S. 155–159)' },
  { text: 'Stressmanagement und generelle Stimmung', cat: 'm', why: 'Bereiche bei Bar-On. (S. 159)' },
  { text: 'Standardintelligenz; Emotionen zur Steuerung des Denkens nutzen', cat: 'a', why: '(S. 155)' },
  { text: 'korreliert (zu) hoch mit Persönlichkeit, nicht mit IQ', cat: 'm', why: 'Fazit S. 191.' },
];

export function EiKonzeptionen() {
  return (
    <Shell title="Zuordnungs-Trainer: Drei Konzeptionen der EI" note="Merke: Ability = Test/maximal; Trait = Fragebogen/typisch; Mixed = Mischung mit Persönlichkeitsvariablen.">
      <SortTrainer categories={EI_CATS} items={EI_ITEMS} prompt="Zu welcher Konzeption gehört" />
    </Shell>
  );
}

const ZWEIGE = [
  { nr: 1, name: 'Wahrnehmung', f: 'Emotionen bei sich, anderen, in Objekten, Kunst, Musik erkennen', u: 'Gesichter, Bilder', b: 'erfahrungsbasiert' },
  { nr: 2, name: 'Nutzung (Förderung des Denkens)', f: 'Emotionen herstellen und für kognitive Prozesse nutzen', u: 'Unterstützen, Sinneseindrücke', b: 'erfahrungsbasiert' },
  { nr: 3, name: 'Verständnis (Wissen)', f: 'verstehen, wie Emotionen zusammenspielen und sich entwickeln', u: 'Veränderungen, komplexe Emotionen', b: 'strategisch' },
  { nr: 4, name: 'Management (Regulation)', f: 'offen für Emotionen sein, sie bei sich und anderen regulieren', u: 'Umgang mit eigenen Emotionen, Emotionen in Beziehungen', b: 'strategisch' },
];

export function VierZweige() {
  const [sel, setSel] = useState(1);
  const z = ZWEIGE[sel - 1];
  return (
    <Shell title="Interaktiv: Vier-Zweige-Modell (Mayer & Salovey 1997)" note="Hierarchie: Wahrnehmung (Basis) → … → Management (höchste Stufe). Auswertung als IQ-Norm (100 + 15z) für Gesamt-EI, Bereiche und Zweige. (S. 166–175)">
      <div className="pk-split">
        <div className="pk-stairs" role="group" aria-label="Vier Zweige">
          {[...ZWEIGE].reverse().map((x) => (
            <button
              key={x.nr}
              className={'pk-stair ' + (x.b === 'strategisch' ? 'strat' : 'erf') + (sel === x.nr ? ' on' : '')}
              style={{ ['--i' as string]: x.nr }}
              onClick={() => setSel(x.nr)}
            >
              <span className="pk-stair-nr">{x.nr}</span> {x.name.split(' (')[0]}
            </button>
          ))}
          <div className="pk-stair-brackets" aria-hidden>
            <span className="strat">▌ strategische EI (3–4)</span>
            <span className="erf">▌ erfahrungsbasierte EI (1–2)</span>
          </div>
        </div>
        <div className="pk-detail">
          <h4>
            Zweig {z.nr}: {z.name}
          </h4>
          <dl className="pk-kv">
            <dt>Fähigkeit</dt>
            <dd>{z.f}</dd>
            <dt>Untertests</dt>
            <dd>{z.u}</dd>
            <dt>Bereich</dt>
            <dd>{z.b}e EI</dd>
          </dl>
        </div>
      </div>
    </Shell>
  );
}

const KONS = [4, 9, 34, 21, 32];

export function Konsensus() {
  const [pick, setPick] = useState<number | null>(null);
  const target = 3;
  const expert = 3;
  return (
    <Shell
      title="Interaktiv: Wie wird eine MSCEIT-Antwort bewertet?"
      note="[Ergänzung] Aufgabe, Verteilung und Target-/Expert*innen-Antwort sind fiktiv. Das Prinzip stammt von S. 162–165: Wählen 21 % Stufe 4, gibt Stufe 4 nach dem Konsensuskriterium .21 Punkte."
    >
      <p className="pk-trainer-q">
        Eine Studentin erzählt, wie ihr Laptop kurz vor der Abgabe abgestürzt ist. <strong>Wie stark fühlte sie Ärger?</strong> (1 = gar nicht … 5 = sehr stark)
      </p>
      <div className="pk-konsensus">
        {KONS.map((p, i) => (
          <button key={i} className={'pk-kons' + (pick === i ? ' on' : '')} onClick={() => setPick(i)} aria-pressed={pick === i}>
            <span className="pk-kons-bar" style={{ height: pick !== null ? `${p * 2.4}px` : 0 }} />
            <span className="pk-kons-pct">{pick !== null ? `${p} %` : ''}</span>
            <strong>{i + 1}</strong>
          </button>
        ))}
      </div>
      {pick === null ? (
        <p className="muted small">Wähle eine Stufe – dann siehst du die Verteilung der Normstichprobe und die Punkte nach allen drei Kriterien.</p>
      ) : (
        <div className="pk-kons-result">
          <div>
            <span className="ew-label">Konsensus</span> {KONS[pick]} % der Normstichprobe wählten Stufe {pick + 1} → <strong>{r2(KONS[pick] / 100)} Punkte</strong>
          </div>
          <div>
            <span className="ew-label">Target</span> Die Studentin selbst gab Stufe {target} an → {pick + 1 === target ? <strong>Treffer</strong> : 'kein Treffer'}
          </div>
          <div>
            <span className="ew-label">Expert*innen</span> Die 21 Emotionsforschenden wählten Stufe {expert} → {pick + 1 === expert ? <strong>Treffer</strong> : 'kein Treffer'} (nur
            Forschung)
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ═════════════════════════ Kapitel 8 ═════════════════════════ */

const WB_CATS = [
  { id: 'g', label: 'kein bis gering', color: '#94a3b8' },
  { id: 'm', label: 'mittel', color: '#d97706' },
  { id: 'h', label: 'hoch', color: '#65a30d' },
];
const WB: SortItem[] = [
  ...['Alter', 'Geschlecht', 'Bildung', 'soziale Schicht', 'Einkommen', 'Kinder haben', 'Ethnizität', 'Intelligenz', 'körperliche Attraktivität'].map((t) => ({ text: t, cat: 'g' })),
  ...['Anzahl Freunde', 'verheiratet sein', 'Religiosität', 'Anzahl Freizeitaktivitäten', 'körperliche Gesundheit', 'Gewissenhaftigkeit', 'Extraversion', 'emotionale Stabilität', 'interne Kontrollüberzeugung'].map((t) => ({
    text: t,
    cat: 'm',
  })),
  ...['Dankbarkeit', 'Optimismus', 'Arbeit haben', 'Häufigkeit des Geschlechtsverkehrs', 'Anteil Zeit mit positiven Gefühlen', 'Wohlbefinden des eineiigen Zwillings', 'Selbstachtung'].map((t) => ({
    text: t,
    cat: 'h',
  })),
].map((x) => ({ ...x, why: '(Tab. 8, S. 198)' }));

export function WbFaktoren() {
  return (
    <Shell title="Zuordnungs-Trainer: Wie stark hängt es mit Glück zusammen?" note="Eine Runde = 10 zufällige Faktoren aus Tab. 8. Merke: Soziodemografie kaum, Persönlichkeit mittel, Dankbarkeit/Optimismus/Selbstachtung hoch.">
      <SortTrainer categories={WB_CATS} items={WB} prompt="Zusammenhang mit Lebenszufriedenheit von" limit={10} />
    </Shell>
  );
}

const PERMA_L = [
  { k: 'P', name: 'Positive Emotions', de: 'positive Gefühle (Pleasure)', life: 'life of pleasure', text: 'Entspricht der früheren Lebensform «life of pleasure». (S. 204)' },
  { k: 'E', name: 'Engagement', de: 'Engagement', life: 'life of engagement', text: 'Entspricht der früheren Lebensform «life of engagement». (S. 204)' },
  { k: 'R', name: 'Relationships', de: 'positive Beziehungen', life: 'neu', text: '**Soziale Unterstützung, Wertschätzung von Beziehungen** – in der Well-Being Theory neu hinzugekommen. (S. 204)' },
  { k: 'M', name: 'Meaning', de: 'Sinn', life: 'life of meaning', text: 'Entspricht der früheren Lebensform «life of meaning». (S. 204)' },
  { k: 'A', name: 'Accomplishment', de: 'Zielerreichung', life: 'neu', text: '**Erfolg, Zielerreichung, Kompetenz** – in der Well-Being Theory neu hinzugekommen. (S. 204)' },
];

export function Perma() {
  const [sel, setSel] = useState(0);
  const p = PERMA_L[sel];
  return (
    <Shell title="Interaktiv: PERMA – fünf Wege zum Flourishing (Seligman 2011)" note="Die fünf Komponenten sind unabhängige Indikatoren – kein Summenwert eines Traits. [Ergänzung] «neu» = gegenüber den drei Lebensformen; so in Abb. 8 dargestellt.">
      <div className="pk-perma">
        {PERMA_L.map((x, i) => (
          <button key={x.k} className={'pk-perma-tile' + (sel === i ? ' on' : '') + (x.life === 'neu' ? ' neu' : '')} onClick={() => setSel(i)}>
            <span className="pk-perma-k">{x.k}</span>
            <span className="pk-perma-n">{x.name}</span>
          </button>
        ))}
      </div>
      <div className="pk-detail">
        <h4>
          {p.k} = {p.name} <span className="muted small">({p.de})</span>
        </h4>
        <Rich text={p.text} />
      </div>
    </Shell>
  );
}

const VIRTUES = [
  { id: 'w', name: 'Weisheit und Wissen', color: '#2563eb', s: ['Kreativität', 'Neugier', 'Urteilsvermögen', 'Liebe zum Lernen', 'Weitsicht'] },
  { id: 'mu', name: 'Mut', color: '#dc2626', s: ['Tapferkeit', 'Ausdauer', 'Ehrlichkeit/Authentizität', 'Tatendrang (Enthusiasmus)'] },
  { id: 'me', name: 'Menschlichkeit', color: '#db2777', s: ['Bindungsfähigkeit', 'Freundlichkeit', 'soziale Intelligenz'] },
  { id: 'g', name: 'Gerechtigkeit', color: '#d97706', s: ['Teamwork', 'Fairness', 'Führungsvermögen'] },
  { id: 'ma', name: 'Mässigung', color: '#059669', s: ['Vergebungsbereitschaft', 'Bescheidenheit', 'Vorsicht', 'Selbstregulation'] },
  { id: 't', name: 'Transzendenz', color: '#7c3aed', s: ['Sinn für das Schöne', 'Dankbarkeit', 'Hoffnung', 'Humor', 'Spiritualität/Religiosität'] },
];
const VIA_CATS = VIRTUES.map((v) => ({ id: v.id, label: v.name, color: v.color }));
const VIA_ITEMS: SortItem[] = VIRTUES.flatMap((v) => v.s.map((s) => ({ text: s, cat: v.id, why: `${v.name}: ${v.s.join(', ')}. (S. 209)` })));

export function Via() {
  const [mode, setMode] = useState<'uebersicht' | 'trainer'>('uebersicht');
  const [sel, setSel] = useState('w');
  return (
    <Shell title="VIA-Klassifikation: 24 Stärken in 6 Tugenden (Peterson & Seligman 2004)" note="Schweiz: Neugier und Fairness hoch, Religiosität gering ausgeprägt. (S. 209–210)">
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['uebersicht', 'Übersicht'],
          ['trainer', 'Zuordnen üben'],
        ]}
      />
      {mode === 'trainer' ? (
        <SortTrainer categories={VIA_CATS} items={VIA_ITEMS} prompt="Zu welcher Tugend gehört die Stärke" limit={12} />
      ) : (
        <div className="pk-via">
          {VIRTUES.map((v) => (
            <div
              key={v.id}
              className={'pk-via-card' + (sel === v.id ? ' on' : '')}
              style={{ ['--ch' as string]: v.color }}
              role="button"
              tabIndex={0}
              onClick={() => setSel(v.id)}
              onKeyDown={keyAct(() => setSel(v.id))}
            >
              <strong>{v.name}</strong>
              <span className="muted small">{v.s.length} Stärken</span>
              {sel === v.id && (
                <ul>
                  {v.s.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </Shell>
  );
}
