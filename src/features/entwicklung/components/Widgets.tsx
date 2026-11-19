import { useMemo, useState } from 'react';
import type { WidgetId } from '../model';
import { FigureView } from './Blocks';
import { Rich } from './Rich';
import { Bindungstypen, BowlbyPhasen, FremdeSituation } from './WidgetsBindung';

export function Widget({ id }: { id: WidgetId }) {
  switch (id) {
    case 'bronfenbrenner':
      return <Bronfenbrenner />;
    case 'auw-trend':
      return <AuwTrend />;
    case 'praenatal-zeit':
      return <PraenatalZeit />;
    case 'apgar':
      return <Apgar />;
    case 'fruehgeburt':
      return (
        <BarList
          title="Überlebenswahrscheinlichkeit nach Gestationswoche"
          source="Fol. 10"
          unit="%"
          max={100}
          rows={[
            { label: '22. GW', value: 9 },
            { label: '23. GW', value: 49 },
            { label: '24. GW', value: 70 },
            { label: '25. GW', value: 78 },
          ]}
        />
      );
    case 'aktivierung':
      return (
        <BarList
          title="Aktivierungszustände des Neugeborenen pro 24 h"
          source="Fol. 14"
          unit=" h"
          max={8}
          rows={[
            { label: 'Ruhiger Schlaf', value: 8 },
            { label: 'Aktiver Schlaf', value: 8 },
            { label: 'Dösen', value: 1 },
            { label: 'Wach & aufmerksam', value: 2.5 },
            { label: 'Wach & aktiv', value: 2.5 },
            { label: 'Schreien', value: 2 },
          ]}
          note="Schreidauer steigt bis Woche 5–6 und sinkt dann (Metaanalyse Wolke et al., 2017). Lohaus-Begriffe: «aufmerksam, aber quengelig», «Schläfrigkeit»."
        />
      );
    case 'verstaerkung':
      return <Verstaerkung />;
    case 'piaget-stufen':
      return <PiagetStufen />;
    case 'sally-anne':
      return <SallyAnne />;
    case 'bowlby-phasen':
      return <BowlbyPhasen />;
    case 'fremde-situation':
      return <FremdeSituation />;
    case 'bindungstypen':
      return <Bindungstypen />;
    case 'vandenboom':
      return (
        <BarList
          title="Sicher gebunden mit 1;0 (Fremde Situation)"
          source="Fol. 20"
          unit=" %"
          max={100}
          rows={[
            { label: 'Experimentalgruppe (Training)', value: 62 },
            { label: 'Kontrollgruppe', value: 28 },
          ]}
          note="Gleiche Ausgangslage (irritable Babys, randomisiert) – der Unterschied geht auf das Feinfühligkeitstraining zurück."
        />
      );
  }
}

/* ───────────── Bronfenbrenner ───────────── */

const SYSTEMS = [
  { id: 'makro', name: 'Makrosystem', r: 150, text: 'Gesellschaft und Kultur (Werte, Gesetze) setzen bzw. beschränken Möglichkeiten.', ex: 'Einschulungsalter' },
  { id: 'exo', name: 'Exosystem', r: 118, text: 'Kein direkter Kontakt des Kindes – wirkt über andere Personen.', ex: 'Arbeitsplatz der Eltern prägt die Regeln zuhause' },
  { id: 'meso', name: 'Mesosystem', r: 86, text: 'Zusammenspiel mehrerer Mikrosysteme, in denen das Kind selbst ist.', ex: 'Eltern ↔ Schule (Elternsprechtag)' },
  { id: 'mikro', name: 'Mikrosystem', r: 54, text: 'Direkte Interaktion des Individuums.', ex: 'Familie, Schulklasse, Freunde' },
  { id: 'chrono', name: 'Chronosystem', r: 0, text: 'Zeitdimension: Das Individuum altert, Bedeutsamkeit der Systeme und die Systeme selbst verändern sich.', ex: 'z. B. Schuleintritt, gesellschaftlicher Wandel' },
];

function Bronfenbrenner() {
  const [sel, setSel] = useState('mikro');
  const s = SYSTEMS.find((x) => x.id === sel)!;
  const rings = SYSTEMS.filter((x) => x.r > 0);
  return (
    <div className="ew-widget ew-bronf">
      <div className="ew-widget-title">Interaktiv: Klicke auf ein System</div>
      <div className="ew-bronf-grid">
        <svg viewBox="0 0 340 340" role="group" aria-label="Ökologisches Modell nach Bronfenbrenner">
          {rings.map((x, i) => (
            <g
              key={x.id}
              className={'ew-ring' + (sel === x.id ? ' on' : '')}
              onClick={() => setSel(x.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSel(x.id)}
              aria-label={x.name}
            >
              <circle cx="170" cy="160" r={x.r} style={{ fillOpacity: 0.1 + i * 0.07 }} />
              <text x="170" y={160 - x.r + 18} textAnchor="middle">
                {x.name.replace('system', '')}
              </text>
            </g>
          ))}
          <circle cx="170" cy="160" r="22" className="ew-ring-kid" />
          <text x="170" y="165" textAnchor="middle" className="ew-ring-kidtext">
            Kind
          </text>
          <g
            className={'ew-chrono' + (sel === 'chrono' ? ' on' : '')}
            onClick={() => setSel('chrono')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSel('chrono')}
            aria-label="Chronosystem"
          >
            <line x1="30" y1="326" x2="300" y2="326" />
            <path d="M300 320 L312 326 L300 332 Z" />
            <text x="170" y="320" textAnchor="middle">
              Chrono · Zeit
            </text>
          </g>
        </svg>
        <div className="ew-bronf-detail">
          <h4>{s.name}</h4>
          <p>{s.text}</p>
          <p className="muted small">
            <strong>Beispiel:</strong> {s.ex}
          </p>
          <div className="ew-chiprow">
            {SYSTEMS.map((x) => (
              <button key={x.id} className={'ew-chipbtn' + (sel === x.id ? ' on' : '')} onClick={() => setSel(x.id)}>
                {x.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Anlage-Umwelt-Korrelation: Trend ───────────── */

const AUW = [
  { id: 'passiv', name: 'Passiv', color: 'var(--ew-s1)', y: [30, 60, 95], trend: 'nimmt ab', ex: 'Musikerehepaar: Gene + Instrumente' },
  { id: 'evokativ', name: 'Evokativ', color: 'var(--ew-s2)', y: [70, 70, 70], trend: 'bleibt gleich', ex: 'Lächelndes Baby wird öfter hochgenommen' },
  { id: 'aktiv', name: 'Aktiv', color: 'var(--ew-s3)', y: [112, 75, 35], trend: 'nimmt zu', ex: 'Bewegungsfreudiges Kind sucht aktive Freunde' },
];
const AUW_X = [70, 210, 350];
const AUW_LABELS = ['Kindheit', 'Jugend', 'Erwachsenenalter'];

function AuwTrend() {
  const [hover, setHover] = useState<string | null>(null);
  const active = AUW.find((a) => a.id === hover);
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Bedeutung der drei Formen über das Alter (schematisch, Fol. 3)</div>
      <div className="ew-legend">
        {AUW.map((a) => (
          <button key={a.id} className="ew-legend-item" onMouseEnter={() => setHover(a.id)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(a.id)} onBlur={() => setHover(null)}>
            <span className="ew-swatch" style={{ background: a.color }} /> {a.name} – {a.trend}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 440 150" className="ew-chart" role="img" aria-label="Passiv nimmt ab, evokativ bleibt gleich, aktiv nimmt zu">
        <line x1="40" y1="125" x2="420" y2="125" className="ew-axis" />
        <text x="12" y="20" className="ew-axis-label">
          hoch
        </text>
        <text x="12" y="122" className="ew-axis-label">
          tief
        </text>
        {AUW_LABELS.map((l, i) => (
          <text key={l} x={AUW_X[i]} y="142" textAnchor="middle" className="ew-axis-label">
            {l}
          </text>
        ))}
        {AUW.map((a) => {
          const pts = a.y.map((y, i) => `${AUW_X[i]},${y}`).join(' ');
          const dim = hover && hover !== a.id;
          return (
            <g key={a.id} style={{ opacity: dim ? 0.2 : 1 }} onMouseEnter={() => setHover(a.id)} onMouseLeave={() => setHover(null)}>
              <polyline points={pts} fill="none" stroke="transparent" strokeWidth="16" />
              <polyline points={pts} fill="none" stroke={a.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {a.y.map((y, i) => (
                <circle key={i} cx={AUW_X[i]} cy={y} r="4.5" fill={a.color} stroke="var(--surface)" strokeWidth="2" />
              ))}
              <text x={AUW_X[2] + 10} y={a.y[2] + 4} className="ew-direct-label">
                {a.name}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="ew-widget-note">{active ? `${active.name}: ${active.trend} – z. B. ${active.ex}` : 'Fahre über eine Linie oder die Legende für ein Beispiel.'}</p>
    </div>
  );
}

/* ───────────── Pränatale Zeitleiste ───────────── */

const PRENATAL = [
  { id: 'zyg', name: 'Zygote', from: 0, to: 2, weeks: '0.–2. Woche', text: 'Verschmelzung von Ei- und Samenzelle, Einnistung.', risk: 'Meist keine Teratogenwirkung – Ausnahme Alkohol.' },
  { id: 'emb', name: 'Embryo', from: 2, to: 8, weeks: '3.–8. Woche', text: 'Differenzierung der Organsysteme (Zellteilung, -migration, -spezialisierung, programmierter Zelltod); Unterstützungssystem entsteht.', risk: 'Sensibelste Phase → strukturelle Schäden (Fehlbildungen).' },
  { id: 'foe', name: 'Fötus', from: 8, to: 38, weeks: '9. Woche bis Geburt', text: 'Erste Reflexe, Koordination durch das Gehirn, Kopfdrehen, Mimik; individuelle Unterschiede; Bewegungen spürbar (ca. 5. Mon.); Schlaf-Wach-Zeiten; im letzten Drittel alle Sinne ausgebildet.', risk: 'Geringere Sensibilität → eher funktionelle Schäden (z. B. Intelligenzminderung, Verhaltensänderungen).' },
];

function PraenatalZeit() {
  const [sel, setSel] = useState('emb');
  const s = PRENATAL.find((p) => p.id === sel)!;
  const pct = (w: number) => `${(w / 38) * 100}%`;
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Interaktiv: Die drei pränatalen Stadien (Wochen 0–38)</div>
      <div className="ew-prenatal">
        {PRENATAL.map((p) => (
          <button
            key={p.id}
            className={`ew-pn-seg ew-pn-${p.id}` + (sel === p.id ? ' on' : '')}
            style={{ left: pct(p.from), width: pct(p.to - p.from) }}
            onClick={() => setSel(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="ew-pn-scale">
        {[0, 2, 8, 20, 27, 38].map((w) => (
          <span key={w} style={{ left: pct(w) }}>
            {w}
          </span>
        ))}
      </div>
      <div className="ew-pn-marks">
        <span style={{ left: pct(20) }}>▲ ca. 5. Mon.: Bewegungen spürbar</span>
      </div>
      <div className="ew-pn-detail">
        <h4>
          {s.name}stadium <span className="muted small">· {s.weeks}</span>
        </h4>
        <p>{s.text}</p>
        <p className={'ew-pn-risk ' + s.id}>
          <strong>Teratogene:</strong> {s.risk}
        </p>
      </div>
    </div>
  );
}

/* ───────────── Apgar-Rechner ───────────── */

const APGAR = [
  { name: 'Herzfrequenz', opts: ['kein Herzschlag', '< 100/min', '> 100/min'] },
  { name: 'Atmungsaktivität', opts: ['keine Atmung', 'unregelmässig, flach', 'regelmässig, Schreien'] },
  { name: 'Reflexauslösbarkeit', opts: ['keine', 'schwache Reflexe', 'starke Reflexe'] },
  { name: 'Muskeltonus', opts: ['schlaff', 'schwache Bewegung der Extremitäten', 'starke Bewegung der Extremitäten'] },
  { name: 'Hautfärbung', opts: ['Körper und Extremitäten blau/blass', 'Körper rosa, Extremitäten blau', 'gesamter Körper rosig'] },
];

function Apgar() {
  const [vals, setVals] = useState<(number | null)[]>(APGAR.map(() => null));
  const sum = vals.reduce<number>((a, v) => a + (v ?? 0), 0);
  const complete = vals.every((v) => v !== null);
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Apgar-Index zum Ausprobieren (Fol. 12)</div>
      <div className="ew-apgar">
        <div className="ew-apgar-head">
          <span>Parameter</span>
          <span>0 Punkte</span>
          <span>1 Punkt</span>
          <span>2 Punkte</span>
        </div>
        {APGAR.map((p, i) => (
          <div key={p.name} className="ew-apgar-row">
            <span className="ew-apgar-name">{p.name}</span>
            {p.opts.map((o, v) => (
              <button
                key={v}
                className={'ew-apgar-opt' + (vals[i] === v ? ' on' : '')}
                onClick={() => setVals(vals.map((x, j) => (j === i ? v : x)))}
                aria-pressed={vals[i] === v}
              >
                <span className="ew-apgar-pts">{v}</span> {o}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="ew-apgar-sum">
        <span>
          Summe: <strong>{sum}</strong> / 10 {!complete && <span className="muted small">(noch nicht alle Parameter gewählt)</span>}
        </span>
        <button className="btn ghost small" onClick={() => setVals(APGAR.map(() => null))}>
          Zurücksetzen
        </button>
      </div>
      <p className="ew-widget-note">Erhoben 1, 5 und 10 Minuten nach der Geburt – prüft die unmittelbare Überlebensfähigkeit.</p>
    </div>
  );
}

/* ───────────── Einfache Balkenliste ───────────── */

function BarList({
  title,
  source,
  rows,
  unit,
  max,
  note,
}: {
  title: string;
  source: string;
  rows: { label: string; value: number }[];
  unit: string;
  max: number;
  note?: string;
}) {
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">
        {title} <span className="ew-src">{source}</span>
      </div>
      <div className="ew-bars" role="table">
        {rows.map((r) => (
          <div key={r.label} className="ew-bar-row" role="row" title={`${r.label}: ${r.value}${unit}`}>
            <span className="ew-bar-label" role="cell">
              {r.label}
            </span>
            <span className="ew-bar-track" role="cell">
              <span className="ew-bar-fill" style={{ width: `${(r.value / max) * 100}%` }} />
            </span>
            <span className="ew-bar-value" role="cell">
              {String(r.value).replace('.', ',')}
              {unit}
            </span>
          </div>
        ))}
      </div>
      {note && <p className="ew-widget-note">{note}</p>}
    </div>
  );
}

/* ───────────── Verstärkung & Bestrafung ───────────── */

type Q = 'pv' | 'pb' | 'nb' | 'nv';
const QUADS: { id: Q; name: string; sub: string; effect: string }[] = [
  { id: 'pv', name: 'Positive Verstärkung', sub: 'Angenehmes hinzufügen', effect: 'Verhalten ↑' },
  { id: 'pb', name: 'Positive Bestrafung', sub: 'Unangenehmes hinzufügen', effect: 'Verhalten ↓' },
  { id: 'nb', name: 'Negative Bestrafung', sub: 'Angenehmes wegnehmen', effect: 'Verhalten ↓' },
  { id: 'nv', name: 'Negative Verstärkung', sub: 'Unangenehmes wegnehmen / aufhören', effect: 'Verhalten ↑' },
];
const SCENARIOS: { text: string; a: Q; why: string }[] = [
  { text: 'Ein Säugling strampelt, das Mobile bewegt sich – er strampelt immer mehr.', a: 'pv', why: 'Angenehmes (bewegtes Mobile) kommt hinzu, Verhalten nimmt zu.' },
  { text: 'Ein Kind räumt auf, damit die Eltern aufhören zu schimpfen.', a: 'nv', why: 'Unangenehmes (Schimpfen) hört auf → Aufräumen nimmt zu.' },
  { text: 'Nach dem Hauen wird dem Kind das Tablet weggenommen; es haut seltener.', a: 'nb', why: 'Angenehmes wird entzogen → Verhalten nimmt ab.' },
  { text: 'Ein Kind muss nach dem Lügen eine Strafarbeit schreiben und lügt seltener.', a: 'pb', why: 'Unangenehmes kommt hinzu → Verhalten nimmt ab.' },
  { text: 'Eine Person meidet Höhen; die Angst verschwindet jedes Mal – die Höhenangst bleibt bestehen.', a: 'nv', why: 'Vermeidung beendet die Angst (Unangenehmes weg) → Vermeiden wird verstärkt.' },
  { text: 'Ein Kind, das sonst wenig Aufmerksamkeit bekommt, wird fürs Stören geschimpft – und stört danach häufiger.', a: 'pv', why: 'Das Schimpfen ist Zuwendung, also etwas Angenehmes → wirkt als positive Verstärkung. Entscheidend ist die Veränderung des Verhaltens!' },
  { text: 'Ein Jugendlicher bekommt für gute Noten Geld und lernt mehr.', a: 'pv', why: 'Geld ist ein sekundärer Verstärker, der hinzugefügt wird.' },
  { text: 'Nach einem Streit gibt es eine Woche Ausgehverbot; die Streits werden seltener.', a: 'nb', why: 'Etwas Angenehmes (Ausgang) wird weggenommen.' },
];

function Verstaerkung() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<Q | null>(null);
  const [score, setScore] = useState(0);
  const sc = SCENARIOS[i % SCENARIOS.length];
  const done = i >= SCENARIOS.length;
  const choose = (q: Q) => {
    if (pick || done) return;
    setPick(q);
    if (q === sc.a) setScore((s) => s + 1);
  };
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Vierfeldertafel (Fol. 22) – und gleich üben</div>
      <div className="ew-quad">
        <span />
        <span className="ew-quad-colhead">Angenehmes</span>
        <span className="ew-quad-colhead">Unangenehmes</span>
        <span className="ew-quad-rowhead">Hinzufügen</span>
        {QUADS.slice(0, 2).map((q) => (
          <QuadCell key={q.id} q={q} pick={pick} answer={done ? null : sc.a} onPick={choose} />
        ))}
        <span className="ew-quad-rowhead">Wegnehmen / aufhören</span>
        {QUADS.slice(2).map((q) => (
          <QuadCell key={q.id} q={q} pick={pick} answer={done ? null : sc.a} onPick={choose} />
        ))}
      </div>
      <div className="ew-trainer">
        {done ? (
          <>
            <p>
              <strong>
                {score} von {SCENARIOS.length} richtig.
              </strong>{' '}
              Merke: Verstärkung erhöht <em>immer</em> die Verhaltenswahrscheinlichkeit, «negativ» heisst nur «wegnehmen».
            </p>
            <button className="btn small" onClick={() => { setI(0); setScore(0); setPick(null); }}>
              Nochmals üben
            </button>
          </>
        ) : (
          <>
            <div className="ew-trainer-count">
              Situation {i + 1} / {SCENARIOS.length} – klicke das passende Feld
            </div>
            <p className="ew-trainer-q">{sc.text}</p>
            {pick && (
              <div className={'ew-trainer-fb ' + (pick === sc.a ? 'ok' : 'bad')}>
                <strong>{pick === sc.a ? 'Richtig!' : `Nicht ganz – richtig ist: ${QUADS.find((q) => q.id === sc.a)!.name}.`}</strong> {sc.why}
                <div>
                  <button className="btn small" onClick={() => { setI(i + 1); setPick(null); }}>
                    Weiter
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function QuadCell({ q, pick, answer, onPick }: { q: (typeof QUADS)[number]; pick: Q | null; answer: Q | null; onPick: (q: Q) => void }) {
  let cls = 'ew-quad-cell ' + (q.effect.includes('↑') ? 'up' : 'down');
  if (pick && answer) {
    if (q.id === answer) cls += ' correct';
    else if (q.id === pick) cls += ' wrong';
  }
  return (
    <button className={cls} onClick={() => onPick(q.id)}>
      <strong>{q.name}</strong>
      <span>{q.sub}</span>
      <span className="ew-quad-effect">{q.effect}</span>
    </button>
  );
}

/* ───────────── Piaget-Stufen ───────────── */

const STAGES = [
  {
    nr: 1,
    name: 'Sensumotorisch',
    age: '0–2 J.',
    span: [0, 2],
    keys: ['Objektpermanenz', 'A-nicht-B-Suchfehler', 'Verinnerlichung von Handlungen'],
    text: 'Versteckte Objekte existieren weiter – das lernt das Kind erst in dieser Stufe. Durch Verinnerlichung äusserer Handlungen und sprachliche Überlagerung wird handlungsunabhängiges Denken möglich → qualitativer Sprung.',
    task: 'A-nicht-B: Das Kind sucht am alten Ort A, obwohl das Objekt sichtbar nach B versteckt wurde.',
  },
  {
    nr: 2,
    name: 'Präoperational',
    age: '2–6 J.',
    span: [2, 7],
    keys: ['Egozentrismus', 'Fehlende Invarianz', 'Zentrierung', 'Statisches Denken'],
    text: 'Mangelnde Perspektivenübernahme, statisches und wenig prozesshaftes Denken, kein Konzept der Erhaltung, Zentrierung auf eine Dimension bzw. einen Zustand.',
    task: 'Drei-Berge-Experiment (Egozentrismus); Umschütt-Aufgabe (Invarianz) – siehe Abb. 8.',
  },
  {
    nr: 3,
    name: 'Konkret-operational',
    age: '7–11 J.',
    span: [7, 12],
    keys: ['Mehrdimensional', 'Perspektivenübernahme', 'Logische Operationen', 'An Konkretes gebunden'],
    text: 'Mehrdimensionales Denken hebt die präoperationalen Begrenzungen auf: Perspektivenübernahme, prozesshaftes Denken, logische und arithmetische Operationen, Handlungsplanung, Raum- und Zeitkonzept – aber an Konkretes gebunden.',
    task: 'Erhaltungsaufgaben werden gelöst.',
  },
  {
    nr: 4,
    name: 'Formal-operational',
    age: 'ab 12 J.',
    span: [12, 16],
    keys: ['Abstrakt', 'Formal-logisch', 'Hypothetisch'],
    text: 'Zunehmend abstraktes Denken, systematisches Denken nach formal-logischen Regeln, hypothetisches Durchdenken von Alternativen.',
    task: 'Pendelversuch: Länge und Gewicht systematisch variieren.',
  },
];

function PiagetStufen() {
  const [sel, setSel] = useState(1);
  const s = STAGES[sel];
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Interaktiv: Wähle eine Stufe</div>
      <div className="ew-stages">
        {STAGES.map((st, i) => (
          <button key={st.nr} className={'ew-stage' + (i === sel ? ' on' : '')} onClick={() => setSel(i)} style={{ flexGrow: st.span[1] - st.span[0] }}>
            <span className="ew-stage-nr">{st.nr}</span>
            <span className="ew-stage-name">{st.name}</span>
            <span className="ew-stage-age">{st.age}</span>
          </button>
        ))}
      </div>
      <div className="ew-stage-detail">
        <div className="ew-chiprow">
          {s.keys.map((k) => (
            <span key={k} className="ew-chip">
              {k}
            </span>
          ))}
        </div>
        <p>{s.text}</p>
        <p className="muted small">
          <strong>Typische Aufgabe:</strong> {s.task}
        </p>
      </div>
    </div>
  );
}

/* ───────────── Sally-Anne ───────────── */

function SallyAnne() {
  const [answer, setAnswer] = useState<'korb' | 'schachtel' | null>(null);
  const fb = useMemo(
    () =>
      answer === 'korb'
        ? { ok: true, text: 'Richtig! Sally hat nicht gesehen, dass Anne den Ball umgelegt hat. Sie hat eine **falsche Überzeugung** und sucht im Korb. Das verstehen Kinder klassisch ab ca. 4 J.' }
        : { ok: false, text: 'So antworten typischerweise 3-Jährige: Sie gehen vom **eigenen Wissen** aus. Sally hat aber nicht gesehen, dass der Ball umgelegt wurde – sie sucht im **Korb**.' },
    [answer],
  );
  return (
    <div className="ew-widget ew-sally">
      <div className="ew-widget-title">Mach die Aufgabe selbst – wie ein Kind (Fol. 53)</div>
      <div className="ew-sally-grid">
        <FigureView fig="sallyanne" />
        <div>
          <p>Schau dir die Bildfolge an. Sally legt den Ball in den Korb und geht hinaus. Anne legt den Ball in die Schachtel. Sally kommt zurück.</p>
          <p>
            <strong>Wo sucht Sally den Ball?</strong>
          </p>
          <div className="ew-chiprow">
            <button className={'btn ' + (answer === 'korb' ? '' : 'ghost')} onClick={() => setAnswer('korb')}>
              Im Korb
            </button>
            <button className={'btn ' + (answer === 'schachtel' ? '' : 'ghost')} onClick={() => setAnswer('schachtel')}>
              In der Schachtel
            </button>
          </div>
          {answer && (
            <p className={'ew-trainer-fb ' + (fb.ok ? 'ok' : 'bad')}>
              <Rich text={fb.text} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
