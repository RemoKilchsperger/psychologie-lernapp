import { useMemo, useState, type ReactNode } from 'react';
import type { WidgetId } from '../model';
import { FigureView } from './Blocks';
import { Rich } from './Rich';

export function Widget({ id }: { id: WidgetId }) {
  switch (id) {
    case 'geschichtsmodelle':
      return <Geschichtsmodelle />;
    case 'epochen':
      return <Epochen />;
    case 'paradigma-check':
      return <ParadigmaCheck />;
    case 'platon-erkenntnis':
      return <PlatonErkenntnis />;
    case 'teilseelen':
      return <Teilseelen />;
    case 'temperamente':
      return <Temperamente />;
    case 'erbe':
      return <Erbe />;
    case 'thomas-funktionen':
      return <ThomasFunktionen />;
    case 'kreislauf':
      return <Kreislauf />;
    case 'schluss-trainer':
      return <SchlussTrainer />;
    case 'weltansichten':
      return <Weltansichten />;
    case 'psychognostik':
      return <Psychognostik />;
    case 'weber':
      return <Weber />;
    case 'fechner':
      return <Fechner />;
    case 'wundt-weg':
      return <WundtWeg />;
    case 'gestalt':
      return <Gestalt />;
    case 'lewin':
      return <Lewin />;
    case 'psychiatrie':
      return <Psychiatrie />;
    case 'instanzen':
      return <Instanzen />;
    case 'adler':
      return <Adler />;
  }
}

function Shell({ title, children, note, className = '' }: { title: string; children: ReactNode; note?: string; className?: string }) {
  return (
    <div className={'ew-widget ' + className}>
      <div className="ew-widget-title">{title}</div>
      {children}
      {note && (
        <p className="ew-widget-note">
          <Rich text={note} />
        </p>
      )}
    </div>
  );
}

const keyAct = (fn: () => void) => (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
};

/* ───────────── Geschichtsmodelle (Pongratz) ───────────── */

const MODELLE = [
  {
    id: 'kreis',
    name: 'Kreismodell',
    satz: '«Ewige Wiederkehr des Gleichen»',
    wer: 'Friedrich Nietzsche',
    text: 'Geschichte läuft im Kreis – alles kehrt unverändert wieder.',
    path: 'M50 12 A30 30 0 1 1 49.9 12',
  },
  {
    id: 'halb',
    name: 'Halbkreismodell',
    satz: '«Entstehen und Vergehen»',
    wer: 'Vorsokratiker',
    text: 'Dinge entstehen, erreichen einen Höhepunkt und vergehen wieder.',
    path: 'M12 70 Q50 -6 88 70',
  },
  {
    id: 'spirale',
    name: 'Spiralmodell',
    satz: '«In der Geschichte ist alles zugleich neu und alt. Aber warum?»',
    wer: 'Wilhelm Schmidt-Biggemann',
    text: 'Dieselben Grundfragen kehren wieder – aber jeweils **auf neuer Stufe**: Körper/Seele, Induktion/Deduktion, Glauben/Wissen, Objekt/Subjekt, Anlage/Umwelt, Wahrheit/Nutzen. (B1/F. 13)',
    path: 'M8 50 C14 40 18 40 22 50 S30 62 36 50 S46 30 54 50 S68 76 76 50 S90 16 94 30',
  },
];

function Geschichtsmodelle() {
  const [sel, setSel] = useState('spirale');
  const m = MODELLE.find((x) => x.id === sel)!;
  return (
    <Shell title="Interaktiv: Wähle ein Modell">
      <div className="gs-models">
        {MODELLE.map((x) => (
          <button key={x.id} className={'gs-model' + (sel === x.id ? ' on' : '')} onClick={() => setSel(x.id)} aria-pressed={sel === x.id}>
            <svg viewBox="0 0 100 80" aria-hidden>
              <path d={x.path} className="gs-model-path" />
              {x.id === 'kreis' && <path d="M44 8 L52 12 L45 17" className="gs-model-path" />}
              {x.id === 'halb' && <path d="M81 64 L88 70 L89 61" className="gs-model-path" />}
              {x.id === 'spirale' && <path d="M88 26 L94 30 L95 22" className="gs-model-path" />}
            </svg>
            <span>{x.name}</span>
          </button>
        ))}
      </div>
      <div className="gs-detail">
        <h4>
          {m.name} <span className="muted small">· {m.wer}</span>
        </h4>
        <p className="gs-quote">{m.satz}</p>
        <p>
          <Rich text={m.text} />
        </p>
      </div>
    </Shell>
  );
}

/* ───────────── 7 Epochen + Zuordnungs-Trainer ───────────── */

const EPOCHEN = [
  { nr: 1, name: 'Religion & Mythologie', range: '2000–500 v.d.Z.', text: 'Religion und Mythologie behandeln Seele und psychologische Fragen.' },
  { nr: 2, name: 'Beginn des wiss. Denkens', range: '500–200 v.d.Z.', text: 'Psychologische Themen in Philosophie und Medizin.' },
  { nr: 3, name: 'Rückkehr zur Religion', range: '200 v.d.Z.–1600', text: 'Antike Erkenntnisse + christliche Dogmenlehre.' },
  { nr: 4, name: 'Ausdifferenzierung d. Wissenschaften', range: '1600–1900', text: 'Psychologie bleibt Teil von Medizin und Metaphysik.' },
  { nr: 5, name: 'Gründungsphase', range: 'Ende 19. Jh.', text: 'Erster Lehrstuhl und Laboratorien (Wundt 1879).' },
  { nr: 6, name: 'Konsolidierungsphase', range: '1900–1960', text: 'Verankerung in Wissenschaft, Etablierung in der Gesellschaft.' },
  { nr: 7, name: 'Vermischung der Grenzen', range: 'seit 1960', text: 'Auflösung/Aufweichung des Schulendenkens (dauert an), unklare Zuteilung als Wissenschaft.' },
];

const EPOCH_TASKS = [
  { what: 'Platon (427–347 v.d.Z.)', nr: 2 },
  { what: 'Hippokrates (460–370 v.d.Z.)', nr: 2 },
  { what: 'Galen (ca. 129–199)', nr: 3 },
  { what: 'Augustinus (354–430)', nr: 3 },
  { what: 'Thomas von Aquin (1225–1274)', nr: 3 },
  { what: 'Descartes (1596–1650)', nr: 4 },
  { what: 'Lavaters Physiognomische Fragmente (1772)', nr: 4 },
  { what: 'Wundts Labor (1879)', nr: 5 },
  { what: 'Külpe in Würzburg (1894)', nr: 5 },
  { what: 'Mittwoch-Gesellschaft (1902)', nr: 6 },
  { what: 'Gestaltpsychologie (ab 1910)', nr: 6 },
  { what: 'Auflösung des Schulendenkens', nr: 7 },
];

function Epochen() {
  const [sel, setSel] = useState(5);
  const [train, setTrain] = useState(false);
  const [order, setOrder] = useState(() => shuffle(EPOCH_TASKS.map((_, i) => i)));
  const [ti, setTi] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const task = EPOCH_TASKS[order[ti % order.length]];
  const e = EPOCHEN[sel - 1];

  const click = (nr: number) => {
    if (!train) return setSel(nr);
    if (pick !== null) return;
    setPick(nr);
    if (nr === task.nr) setScore((s) => s + 1);
  };
  const next = () => {
    setPick(null);
    if (ti + 1 >= order.length) {
      setOrder(shuffle(order));
      setTi(0);
      setScore(0);
    } else setTi(ti + 1);
  };

  return (
    <Shell title={train ? 'Übung: In welche Epoche gehört …?' : 'Interaktiv: Klicke auf eine Epoche'}>
      <div className="gs-epochs" role="group" aria-label="Sieben Epochen">
        {EPOCHEN.map((x) => {
          let cls = 'gs-epoch';
          if (!train && sel === x.nr) cls += ' on';
          if (train && pick !== null) {
            if (x.nr === task.nr) cls += ' correct';
            else if (x.nr === pick) cls += ' wrong';
          }
          return (
            <button key={x.nr} className={cls} onClick={() => click(x.nr)}>
              <span className="gs-epoch-nr">{x.nr}</span>
              <span className="gs-epoch-name">{x.name}</span>
              <span className="gs-epoch-range">{x.range}</span>
            </button>
          );
        })}
      </div>
      {!train ? (
        <div className="gs-detail">
          <h4>
            {e.nr} · {e.name} <span className="muted small">({e.range})</span>
          </h4>
          <p>{e.text}</p>
        </div>
      ) : (
        <div className="ew-trainer">
          <div className="ew-trainer-count">
            Aufgabe {ti + 1} / {order.length} · {score} richtig
          </div>
          <p className="ew-trainer-q">{task.what}</p>
          {pick !== null && (
            <div className={'ew-trainer-fb ' + (pick === task.nr ? 'ok' : 'bad')}>
              {pick === task.nr ? 'Richtig!' : 'Nicht ganz.'} Epoche {task.nr}: {EPOCHEN[task.nr - 1].name} ({EPOCHEN[task.nr - 1].range}).
              <div>
                <button className="btn small" onClick={next} autoFocus>
                  {ti + 1 >= order.length ? 'Neue Runde' : 'Weiter'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="ew-chiprow gs-mt">
        <button className={'ew-chipbtn' + (train ? ' on' : '')} onClick={() => { setTrain(!train); setPick(null); }}>
          {train ? '← Zurück zur Übersicht' : '🎯 Zuordnen üben'}
        </button>
      </div>
    </Shell>
  );
}

/* ───────────── Paradigmenwechsel ja/nein ───────────── */

const PARADIGMA = [
  { what: 'Kopernikus: Die Sonne steht im Zentrum', ok: true, why: 'Grundlegend neues Weltbild – ja.' },
  { what: 'Darwins Evolutionstheorie (1859)', ok: true, why: 'Neues Bild vom Menschen und der Welt – ja.' },
  { what: 'Freuds Todestrieb vs. Lebenstrieb', ok: false, why: 'Erweiterung innerhalb der Psychoanalyse – nein.' },
  { what: 'DSM-5/ICD-11: Autismus-Spektrum statt Subtypen', ok: false, why: 'Neuordnung innerhalb des bestehenden Paradigmas – nein.' },
];

function ParadigmaCheck() {
  const [ans, setAns] = useState<Record<number, boolean>>({});
  return (
    <Shell title="Übung aus der Vorlesung: Paradigmenwechsel?" note="(B1/F. 18)">
      <div className="gs-yn">
        {PARADIGMA.map((p, i) => {
          const a = ans[i];
          const done = a !== undefined;
          return (
            <div key={i} className={'gs-yn-row' + (done ? (a === p.ok ? ' ok' : ' bad') : '')}>
              <span className="gs-yn-q">{p.what}</span>
              <div className="ew-chiprow">
                {[true, false].map((v) => (
                  <button key={String(v)} className={'ew-chipbtn' + (a === v ? ' on' : '')} disabled={done} onClick={() => setAns({ ...ans, [i]: v })}>
                    {v ? 'Ja' : 'Nein'}
                  </button>
                ))}
              </div>
              {done && <span className="gs-yn-why">{(a === p.ok ? '✓ ' : '✗ ') + p.why}</span>}
            </div>
          );
        })}
      </div>
      {Object.keys(ans).length > 0 && (
        <button className="ew-link gs-mt" onClick={() => setAns({})}>
          Zurücksetzen
        </button>
      )}
    </Shell>
  );
}

/* ───────────── Platons Erkenntnislehre ───────────── */

const PLATON_PARTS: Record<string, { t: string; d: string }> = {
  denken: { t: 'Denken', d: 'Der Weg zur Wahrheit: Erkenntnis durch **Denken und Wiedererinnerung** an die Ideen.' },
  ideen: { t: 'Ideenwelt', d: '**Urbild** – unvergänglich, unveränderlich. Hier liegen die eigentlichen Gültigkeiten.' },
  koerper: { t: 'Körperwelt', d: '**Abbild** – vergänglich, veränderlich. Nur «Schatten» der Ideen (Höhlengleichnis).' },
  erfahrung: { t: 'Sinnliche Erfahrung', d: 'Verbindet Körperwelt und Denken – gibt aber **keinen Aufschluss über das Wesentliche**.' },
};

function PlatonErkenntnis() {
  const [sel, setSel] = useState('denken');
  const g = (id: string, children: ReactNode) => (
    <g className={'gs-hit' + (sel === id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel(id)} onKeyDown={keyAct(() => setSel(id))} aria-label={PLATON_PARTS[id].t}>
      {children}
    </g>
  );
  return (
    <Shell title="Platons Erkenntnislehre – klicke auf die Teile" note="Nach B2/F. 32; LB S. 42.">
      <div className="gs-split">
        <svg viewBox="0 0 360 200" className="gs-svg" role="group" aria-label="Platons Erkenntnislehre">
          <defs>
            <marker id="arr-pl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 Z" className="gs-arrowhead" />
            </marker>
          </defs>
          {g('denken', <><rect x="135" y="8" width="90" height="34" rx="8" className="gs-node strong" /><text x="180" y="30" className="gs-t b">Denken</text></>)}
          {g('ideen', <><rect x="12" y="118" width="130" height="70" rx="10" className="gs-node c1" /><text x="77" y="142" className="gs-t b">Ideenwelt</text><text x="77" y="160" className="gs-t s">Urbild</text><text x="77" y="176" className="gs-t s">unvergänglich</text></>)}
          {g('koerper', <><rect x="218" y="118" width="130" height="70" rx="10" className="gs-node c2" /><text x="283" y="142" className="gs-t b">Körperwelt</text><text x="283" y="160" className="gs-t s">Abbild</text><text x="283" y="176" className="gs-t s">vergänglich</text></>)}
          <line x1="140" y1="40" x2="88" y2="114" className="gs-line" markerStart="url(#arr-pl)" markerEnd="url(#arr-pl)" />
          <text x="86" y="72" className="gs-t s" textAnchor="end">Wiedererinnerung</text>
          {g('erfahrung', <><line x1="272" y1="114" x2="222" y2="44" className="gs-line" markerEnd="url(#arr-pl)" /><text x="262" y="72" className="gs-t s" textAnchor="start">sinnliche Erfahrung</text></>)}
          <line x1="146" y1="153" x2="214" y2="153" className="gs-line dashed" />
          <text x="180" y="146" className="gs-t s">Schatten</text>
        </svg>
        <div className="gs-detail">
          <h4>{PLATON_PARTS[sel].t}</h4>
          <p>
            <Rich text={PLATON_PARTS[sel].d} />
          </p>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Teilseelen Platon vs. Aristoteles ───────────── */

const PLATON_SEELEN = [
  { id: 'kopf', name: 'Denkende Seele', gr: 'logistikon', sitz: 'Kopf', staat: 'Herrscher', wagen: 'Wagenlenker', extra: 'unsterblich, hat Vorrang' },
  { id: 'brust', name: 'Zielstrebige & entschlossene Seele', gr: 'thymoeides', sitz: 'Brust', staat: 'Krieger', wagen: 'edles Ross', extra: '' },
  { id: 'bauch', name: 'Begehrende & versorgende Seele', gr: 'epithymetikon', sitz: 'Unterleib', staat: 'Handwerker', wagen: 'widerspenstiges Ross', extra: '' },
];
const ARI_SEELEN = [
  { id: 'veg', name: 'Vegetative Seele', alias: 'Pflanzenseele', f: 'Ernährung, Wachstum, Fortpflanzung', wer: 'Pflanze, Tier, Mensch' },
  { id: 'ani', name: 'Animalische Seele', alias: 'Tierseele', f: 'Begierden, Empfindungen, Fortbewegung', wer: 'Tier, Mensch' },
  { id: 'denk', name: 'Denkende Seele', alias: 'Geistseele', f: 'Logik', wer: 'nur der Mensch' },
];

function Teilseelen() {
  const [who, setWho] = useState<'platon' | 'ari'>('platon');
  const [p, setP] = useState('kopf');
  const [a, setA] = useState('denk');
  const ps = PLATON_SEELEN.find((x) => x.id === p)!;
  const as = ARI_SEELEN.find((x) => x.id === a)!;
  return (
    <Shell title="Interaktiv: Teilseelen im Vergleich" note="Platon: B2/F. 33; LB S. 43 · Aristoteles: B2/F. 34; LB S. 44. Thomas von Aquin übernimmt im Mittelalter die aristotelische Variante.">
      <div className="ew-seg gs-mb" role="tablist">
        <button role="tab" aria-selected={who === 'platon'} className={who === 'platon' ? 'on' : ''} onClick={() => setWho('platon')}>
          Platon · dualistisch
        </button>
        <button role="tab" aria-selected={who === 'ari'} className={who === 'ari' ? 'on' : ''} onClick={() => setWho('ari')}>
          Aristoteles · monistisch
        </button>
      </div>
      {who === 'platon' ? (
        <div className="gs-split">
          <svg viewBox="0 0 160 230" className="gs-svg gs-body" role="group" aria-label="Sitz der Teilseelen nach Platon">
            {[
              { id: 'kopf', el: <circle cx="80" cy="34" r="26" /> },
              { id: 'brust', el: <rect x="44" y="66" width="72" height="62" rx="18" /> },
              { id: 'bauch', el: <rect x="48" y="132" width="64" height="58" rx="16" /> },
            ].map(({ id, el }) => (
              <g key={id} className={'gs-hit gs-zone' + (p === id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setP(id)} onKeyDown={keyAct(() => setP(id))}>
                {el}
              </g>
            ))}
            <text x="80" y="38" className="gs-t s b">Kopf</text>
            <text x="80" y="101" className="gs-t s b">Brust</text>
            <text x="80" y="165" className="gs-t s b">Unterleib</text>
            <line x1="62" y1="190" x2="56" y2="226" className="gs-line" />
            <line x1="98" y1="190" x2="104" y2="226" className="gs-line" />
          </svg>
          <div className="gs-detail">
            <h4>
              {ps.name} <span className="muted small">({ps.gr})</span>
            </h4>
            <dl className="gs-kv">
              <dt>Sitz</dt>
              <dd>{ps.sitz}</dd>
              <dt>Im «Staat»</dt>
              <dd>{ps.staat}</dd>
              <dt>Wagengespann</dt>
              <dd>{ps.wagen}</dd>
            </dl>
            {ps.extra && <p className="gs-hint">★ {ps.extra}</p>}
          </div>
        </div>
      ) : (
        <div className="gs-split">
          <svg viewBox="0 0 220 220" className="gs-svg" role="group" aria-label="Teilseelen nach Aristoteles">
            {[
              { id: 'veg', r: 100, y: 110, label: 'vegetativ', ly: 26 },
              { id: 'ani', r: 70, y: 140, label: 'animalisch', ly: 86 },
              { id: 'denk', r: 38, y: 172, label: 'denkend', ly: 176 },
            ].map((c) => (
              <g key={c.id} className={'gs-hit gs-ring' + (a === c.id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setA(c.id)} onKeyDown={keyAct(() => setA(c.id))}>
                <circle cx="110" cy={c.y} r={c.r} />
                <text x="110" y={c.ly} className="gs-t s b">
                  {c.label}
                </text>
              </g>
            ))}
          </svg>
          <div className="gs-detail">
            <h4>
              {as.name} <span className="muted small">({as.alias})</span>
            </h4>
            <dl className="gs-kv">
              <dt>Funktion</dt>
              <dd>{as.f}</dd>
              <dt>Besitzt</dt>
              <dd>{as.wer}</dd>
            </dl>
            <p className="gs-hint">Die drei Teile sind verbunden und interagieren – die Seele kann ohne Körper nicht bestehen.</p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ───────────── Temperamente (Galen) ───────────── */

const TEMP = [
  { id: 'chol', name: 'Choleriker', saft: 'gelbe Galle', akt: '+', val: '−', x: 0, y: 0, d: 'reizbar, aufbrausend' },
  { id: 'sang', name: 'Sanguiniker', saft: 'Blut', akt: '+', val: '+', x: 1, y: 0, d: 'heiter, lebhaft' },
  { id: 'mel', name: 'Melancholiker', saft: 'schwarze Galle', akt: '−', val: '−', x: 0, y: 1, d: 'schwermütig, traurig' },
  { id: 'phl', name: 'Phlegmatiker', saft: 'Schleim', akt: '−', val: '+', x: 1, y: 1, d: 'ruhig, träge' },
];

function Temperamente() {
  const [sel, setSel] = useState('chol');
  const [hide, setHide] = useState(false);
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const t = TEMP.find((x) => x.id === sel)!;
  return (
    <Shell
      title="Vier Temperamente nach Galen – Aktivierung × Valenz"
      note="Moderne Lesart auf der Folie: Dimensionen Aktivierung & Valenz (nach B2/F. 38). Charakterzüge (heiter, reizbar …) = Ergänzung zum Verständnis."
    >
      <div className="gs-split">
        <div className="gs-temp">
          <span className="gs-axis-y">Aktivierung +</span>
          <span className="gs-axis-x">Valenz +</span>
          <div className="gs-temp-grid">
            {TEMP.map((x) => {
              const open = !hide || shown[x.id];
              return (
                <button
                  key={x.id}
                  className={'gs-temp-cell' + (sel === x.id ? ' on' : '')}
                  onClick={() => {
                    setSel(x.id);
                    if (hide) setShown({ ...shown, [x.id]: true });
                  }}
                >
                  {open ? (
                    <>
                      <strong>{x.name}</strong>
                      <span>{x.saft}</span>
                    </>
                  ) : (
                    <span className="muted">
                      Akt. {x.akt} / Val. {x.val}
                      <br />?
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="gs-detail">
          {!hide || shown[t.id] ? (
            <>
              <h4>{t.name}</h4>
              <dl className="gs-kv">
                <dt>Saft</dt>
                <dd>{t.saft}</dd>
                <dt>Aktivierung</dt>
                <dd>{t.akt === '+' ? 'hoch (+)' : 'tief (−)'}</dd>
                <dt>Valenz</dt>
                <dd>{t.val === '+' ? 'positiv (+)' : 'negativ (−)'}</dd>
              </dl>
              <p className="muted small">{t.d}</p>
            </>
          ) : (
            <p className="muted">Überlege: Welches Temperament und welcher Saft gehören hierhin? Dann klicken.</p>
          )}
          <label className="ew-check gs-mt">
            <input type="checkbox" checked={hide} onChange={(e) => { setHide(e.target.checked); setShown({}); }} /> Übungsmodus (Namen verdecken)
          </label>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Antikes Erbe im Mittelalter ───────────── */

function Erbe() {
  const [sel, setSel] = useState<'platon' | 'ari'>('platon');
  const rows = {
    platon: {
      from: 'Platon',
      to: 'Augustinus (354–430)',
      what: ['Ablehnung des Körperlichen', 'Wahrheit im Geistigen – Erkenntnis durch Glauben und Introspektion (Lichtmetapher)'],
    },
    ari: {
      from: 'Aristoteles',
      to: 'Thomas von Aquin (1225–1274)',
      what: ['Seelenlehre: Pflanzen-, Tier-, Geistseele', 'Logik zur Begründung von Glaubenssätzen (Scholastik)', 'Erkenntnis beginnt mit der sinnlichen Wahrnehmung'],
    },
  } as const;
  const r = rows[sel];
  return (
    <Shell title="Antikes Erbe: wer übernimmt wen?" note="(B3/F. 47, 59) – die Islamische Blütezeit bewahrte und vermittelte das antike Wissen.">
      <div className="gs-erbe">
        {(['platon', 'ari'] as const).map((k) => (
          <button key={k} className={'gs-erbe-row' + (sel === k ? ' on' : '')} onClick={() => setSel(k)}>
            <span className="gs-erbe-node">{rows[k].from}</span>
            <span className="gs-erbe-arrow" aria-hidden>
              ⟶
            </span>
            <span className="gs-erbe-node to">{rows[k].to.split(' (')[0]}</span>
          </button>
        ))}
      </div>
      <div className="gs-detail">
        <h4>
          {r.from} → {r.to}
        </h4>
        <ul>
          {r.what.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

/* ───────────── Thomas: seelische Funktionen ───────────── */

function ThomasFunktionen() {
  return (
    <Shell title="Seelische Funktionen nach Thomas von Aquin" note="B3/F. 55; LB S. 84, Tab. 3.1 – neu ist die gleichwertige Einbeziehung der **Motivation** neben der **Kognition**.">
      <div className="gs-quad">
        <span />
        <span className="gs-quad-h">niedrig</span>
        <span className="gs-quad-h">hoch</span>
        <span className="gs-quad-r">Motivation</span>
        <span className="gs-quad-c">Trieb, Begierde</span>
        <span className="gs-quad-c hi">Wille</span>
        <span className="gs-quad-r">Kognition</span>
        <span className="gs-quad-c">Wahrnehmung</span>
        <span className="gs-quad-c hi">Denken</span>
      </div>
    </Shell>
  );
}

/* ───────────── Kreislauf Theorie – Empirie ───────────── */

function Kreislauf() {
  const [sel, setSel] = useState<'d' | 'i'>('d');
  const info = {
    d: { t: 'Deduktion (Rationalismus)', r: 'Allgemeines → Einzelnes (Theorie → Empirie)', ex: 'Fische leben im Wasser. Goldfisch Hermann ist ein Fisch. → Hermann lebt im Wasser.', p: 'Schluss nur so gut wie die (unbewiesene) Prämisse.' },
    i: { t: 'Induktion (Empirismus)', r: 'Einzelnes → Allgemeines (Empirie → Theorie)', ex: 'Hermann lebt im Wasser, Hermann ist ein Fisch … → Alle Fische leben im Wasser.', p: 'Induktionsproblem (Hume): Zeit & Vollständigkeit.' },
  }[sel];
  return (
    <Shell title="Kreislauf von Theorie und Empirie – klicke auf einen Pfeil" note="Nach B4/F. 80. Heute werden beide Verfahren kombiniert.">
      <div className="gs-split">
        <svg viewBox="0 0 260 220" className="gs-svg" role="group" aria-label="Kreislauf von Theorie und Empirie">
          <defs>
            <marker id="arr-kr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" className="gs-arrowhead" />
            </marker>
          </defs>
          <text x="130" y="30" className="gs-t b big">Theorie</text>
          <text x="130" y="46" className="gs-t s">(allgemein)</text>
          <text x="130" y="186" className="gs-t b big">Empirie</text>
          <text x="130" y="202" className="gs-t s">(speziell)</text>
          <g className={'gs-hit gs-arc d' + (sel === 'd' ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel('d')} onKeyDown={keyAct(() => setSel('d'))}>
            <path d="M88 30 C30 30 30 180 84 182" markerEnd="url(#arr-kr)" />
            <text x="34" y="112" className="gs-t b" textAnchor="middle">
              Deduktion
            </text>
          </g>
          <g className={'gs-hit gs-arc i' + (sel === 'i' ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel('i')} onKeyDown={keyAct(() => setSel('i'))}>
            <path d="M174 182 C230 182 230 30 176 28" markerEnd="url(#arr-kr)" />
            <text x="226" y="112" className="gs-t b" textAnchor="middle">
              Induktion
            </text>
          </g>
        </svg>
        <div className="gs-detail">
          <h4>{info.t}</h4>
          <dl className="gs-kv">
            <dt>Richtung</dt>
            <dd>{info.r}</dd>
            <dt>Beispiel</dt>
            <dd>{info.ex}</dd>
            <dt>Problem</dt>
            <dd>{info.p}</dd>
          </dl>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Trainer Deduktion / Induktion ───────────── */

const SCHLUESSE = [
  { s: 'Alle Menschen sind sterblich. Sokrates ist ein Mensch. → Sokrates ist sterblich.', d: true },
  { s: 'Der Truthahn wurde 100 Tage lang jeden Morgen gefüttert. → Er wird immer gefüttert.', d: false },
  { s: 'Jeder Schwan, den ich bisher gesehen habe, war weiss. → Alle Schwäne sind weiss.', d: false },
  { s: 'Fische leben im Wasser. Goldfisch Hermann ist ein Fisch. → Hermann lebt im Wasser.', d: true },
  { s: 'Aus einer Theorie leite ich eine Hypothese ab und prüfe sie im Experiment.', d: true },
  { s: 'Aus vielen Einzelbeobachtungen formuliere ich eine allgemeine Regel.', d: false },
];

function SchlussTrainer() {
  const [order] = useState(() => shuffle(SCHLUESSE.map((_, i) => i)));
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= order.length;
  const q = SCHLUESSE[order[Math.min(i, order.length - 1)]];
  return (
    <Shell title="Übung: Deduktion oder Induktion?">
      {done ? (
        <div className="ew-trainer-fb ok">
          {score} / {order.length} richtig.{' '}
          <button className="btn small" onClick={() => { setI(0); setScore(0); setPick(null); }}>
            Nochmals
          </button>
        </div>
      ) : (
        <>
          <div className="ew-trainer-count">
            Aussage {i + 1} / {order.length}
          </div>
          <p className="ew-trainer-q">{q.s}</p>
          <div className="ew-chiprow">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                className={'btn ' + (pick === null ? 'ghost' : v === q.d ? 'ew-known' : pick === v ? 'ew-again' : 'ghost')}
                disabled={pick !== null}
                onClick={() => {
                  setPick(v);
                  if (v === q.d) setScore(score + 1);
                }}
              >
                {v ? 'Deduktion' : 'Induktion'}
              </button>
            ))}
          </div>
          {pick !== null && (
            <div className={'ew-trainer-fb ' + (pick === q.d ? 'ok' : 'bad')}>
              {q.d ? 'Deduktion: vom Allgemeinen aufs Einzelne – nur so gut wie die Prämisse.' : 'Induktion: vom Einzelnen aufs Allgemeine – Induktionsproblem (Zeit & Vollständigkeit).'}
              <div>
                <button className="btn small" onClick={() => { setI(i + 1); setPick(null); }} autoFocus>
                  Weiter
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </Shell>
  );
}

/* ───────────── Erkenntnistheorien & Weltansichten ───────────── */

const WELT = [
  {
    col: 'Erkenntnislehre',
    poles: [
      { name: 'Rationalismus', d: 'Deduktion: aus Vernunft/Theorie abgeleitet', who: ['Descartes', 'Platon*'] },
      { name: 'Empirismus', d: 'Induktion: aus Erfahrung verallgemeinert', who: ['Aristoteles', 'Bacon'] },
    ],
  },
  {
    col: 'Seelenlehre',
    poles: [
      { name: 'Dualismus', d: 'Trennung von Seele und Körper', who: ['Platon', 'Descartes'] },
      { name: 'Monismus', d: 'Seele existiert nur mit dem Körper', who: ['Aristoteles', 'La Mettrie'] },
    ],
  },
  {
    col: 'Weltansicht',
    poles: [
      { name: 'Materialismus', d: 'Körperliches ist das Primäre', who: ['La Mettrie'] },
      { name: 'Idealismus', d: 'Bewusstsein/Geistiges ist das Primäre', who: ['Platon'] },
    ],
  },
];
const DENKER = ['Platon', 'Aristoteles', 'Descartes', 'Bacon', 'La Mettrie'];

function Weltansichten() {
  const [who, setWho] = useState<string | null>(null);
  return (
    <Shell
      title="Übersicht Erkenntnistheorien & Weltansichten – wähle einen Denker"
      note="(B4/F. 82). * Zuordnung antiker Denker: Empirismus ↔ Aristoteles, Rationalismus/Idealismus ↔ Platon. Notiz: «Kann nicht einfach schubladisieren.»"
    >
      <div className="ew-chiprow gs-mb">
        <span className="muted small">Denker-Profil:</span>
        {DENKER.map((d) => (
          <button key={d} className={'ew-chipbtn' + (who === d ? ' on' : '')} onClick={() => setWho(who === d ? null : d)}>
            {d}
          </button>
        ))}
      </div>
      <div className="gs-welt">
        {WELT.map((c) => (
          <div key={c.col} className="gs-welt-col">
            <div className="ew-eyebrow">{c.col}</div>
            {c.poles.map((p) => {
              const hit = who && p.who.some((w) => w.replace('*', '') === who);
              return (
                <div key={p.name} className={'gs-welt-pole' + (hit ? ' hit' : who ? ' dim' : '')}>
                  <strong>{p.name}</strong>
                  <span className="small">{p.d}</span>
                  <span className="ew-chiprow">
                    {p.who.map((w) => (
                      <span key={w} className="ew-chip">
                        {w}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ───────────── Psychognostik ───────────── */

const GNOSTIK = [
  {
    id: 'physio',
    name: 'Physiognomik',
    deutet: 'Gesicht / Körper',
    who: 'della Porta (1593), Lavater (1772), Lombroso',
    why: 'Körperoberfläche weist auf den Charakter hin; Inneres = Äusseres.',
    heute: 'Kein Fundament – Qin et al. (2016); Kritik Lichtenberg (1778).',
    icon: (
      <path d="M30 14 C48 10 60 24 58 40 L64 50 L57 52 C58 62 54 70 44 70 L40 80 M30 14 C20 22 18 40 24 54" />
    ),
  },
  {
    id: 'phreno',
    name: 'Phrenologie',
    deutet: 'Schädelform',
    who: 'Franz Joseph Gall (1758–1828)',
    why: '20 Vermögen mit festem Sitz im Gehirn; Ausdehnung = stark, Delle = schwach.',
    heute: 'Widerlegt – aber Idee der Lokalisation von Funktionen [Ergänzung].',
    icon: (
      <>
        <path d="M14 50 C10 20 40 8 56 18 C70 26 72 46 64 56 L62 70 L28 70 L26 60 C18 58 15 54 14 50 Z" />
        <path d="M30 24 L36 40 M44 18 L46 36 M56 30 L50 44" />
      </>
    ),
  },
  {
    id: 'grapho',
    name: 'Graphologie',
    deutet: 'Handschrift',
    who: 'Jean-Hippolyte Michon (Name 1875); Vorläufer Lavaters Pathognomik',
    why: 'Persönlichkeit drückt sich in der Motorik aus.',
    heute: 'Keine Evidenz – Dazzi & Pedrabissi (2009).',
    icon: (
      <>
        <path d="M10 60 C18 40 22 70 30 52 C36 40 40 66 48 50 C54 40 58 60 66 54" />
        <path d="M54 14 L70 30 L44 56 L36 58 L38 50 Z" />
      </>
    ),
  },
];

function Psychognostik() {
  const [sel, setSel] = useState('physio');
  const g = GNOSTIK.find((x) => x.id === sel)!;
  return (
    <Shell title="Drei Deutungslehren – klicke auf eine">
      <div className="gs-models">
        {GNOSTIK.map((x) => (
          <button key={x.id} className={'gs-model' + (sel === x.id ? ' on' : '')} onClick={() => setSel(x.id)} aria-pressed={sel === x.id}>
            <svg viewBox="0 0 80 84" aria-hidden>
              <g className="gs-model-path">{x.icon}</g>
            </svg>
            <span>{x.name}</span>
            <span className="muted small">{x.deutet}</span>
          </button>
        ))}
      </div>
      <div className="gs-detail">
        <h4>
          {g.name} – deutet {g.deutet}
        </h4>
        <dl className="gs-kv">
          <dt>Vertreter</dt>
          <dd>{g.who}</dd>
          <dt>Begründung</dt>
          <dd>{g.why}</dd>
          <dt>Heute</dt>
          <dd>
            <Rich text={g.heute} />
          </dd>
        </dl>
      </div>
    </Shell>
  );
}

/* ───────────── Weber ───────────── */

const WEBER_K = [
  { name: 'Linienlänge', lo: 1, hi: 1 },
  { name: 'Helligkeit', lo: 2, hi: 5 },
  { name: 'Gewichte', lo: 2.5, hi: 3 },
  { name: 'Druck auf die Haut', lo: 3, hi: 10 },
];

function Weber() {
  const [r, setR] = useState(400);
  const k = 0.025;
  const dr = r * k;
  const W = 300;
  const H = 150;
  const px = (v: number) => 40 + (v / 2000) * (W - 56);
  const py = (v: number) => H - 26 - (v / 50) * (H - 40);
  return (
    <Shell title="Interaktiv: Weber-Gesetz ΔR / R = const." note="Rechnung mit der Gewichts-Konstante 2,5 % (Beispiel der Folie: 400 g → 10 g, 800 g → 20 g). Weber-Konstanten nach B6/F. 16.">
      <label className="gs-slider">
        <span>
          Ausgangsreiz <strong>R = {r} g</strong>
        </span>
        <input type="range" min={100} max={2000} step={50} value={r} onChange={(e) => setR(+e.target.value)} />
      </label>
      <p className="gs-big">
        Unterschied bemerkbar ab <strong>{(r + dr).toLocaleString('de-CH')} g</strong> <span className="muted">(ΔR = {dr.toLocaleString('de-CH')} g)</span>
      </p>
      <div className="gs-split">
        <svg viewBox={`0 0 ${W} ${H}`} className="gs-svg gs-chart" role="img" aria-label={`ΔR wächst linear mit R; bei ${r} g sind es ${dr} g`}>
          <line x1="40" y1={H - 26} x2={W - 10} y2={H - 26} className="ew-axis" />
          <line x1="40" y1="10" x2="40" y2={H - 26} className="ew-axis" />
          {[0, 500, 1000, 1500, 2000].map((v) => (
            <text key={v} x={px(v)} y={H - 10} className="ew-axis-label" textAnchor="middle">
              {v}
            </text>
          ))}
          {[0, 25, 50].map((v) => (
            <text key={v} x="34" y={py(v) + 4} className="ew-axis-label" textAnchor="end">
              {v}
            </text>
          ))}
          <text x={W - 10} y={H - 30} className="ew-axis-label" textAnchor="end">
            R (g)
          </text>
          <text x="44" y="16" className="ew-axis-label">
            ΔR (g)
          </text>
          <line x1={px(0)} y1={py(0)} x2={px(2000)} y2={py(50)} className="gs-curve" />
          <line x1={px(r)} y1={py(0)} x2={px(r)} y2={py(dr)} className="gs-guide" />
          <circle cx={px(r)} cy={py(dr)} r="5" className="gs-dot" />
        </svg>
        <div>
          <div className="ew-eyebrow gs-mb">Weber-Konstanten je Sinnesgebiet</div>
          <div className="ew-bars">
            {WEBER_K.map((w) => (
              <div key={w.name} className="ew-bar-row gs-krow">
                <span>{w.name}</span>
                <span className="ew-bar-track gs-range-track">
                  <span className="gs-range" style={{ left: `${(w.lo / 10) * 100}%`, width: `max(4px, ${((w.hi - w.lo) / 10) * 100}%)` }} />
                </span>
                <span className="ew-bar-value">{w.lo === w.hi ? `${w.lo} %` : `${w.lo}–${w.hi} %`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Fechner ───────────── */

function Fechner() {
  const [r, setR] = useState(20);
  const e = Math.log(r);
  const W = 320;
  const H = 200;
  const px = (v: number) => 40 + (v / 100) * (W - 54);
  const py = (v: number) => H - 28 - (v / 5) * (H - 44);
  const curve = useMemo(() => {
    const pts: string[] = [];
    for (let v = 1; v <= 100; v += 0.5) pts.push(`${px(v).toFixed(1)},${py(Math.log(v)).toFixed(1)}`);
    return pts.join(' ');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const steps = [1, 2, 3, 4].map((n) => ({ n, r: Math.exp(n) }));
  return (
    <Shell title="Interaktiv: Fechner-Gesetz E = K · ln R + C" note="Graph mit K = 1 und C = 0 (wie auf B6/F. 18). Reiz wächst geometrisch (×2,72), Empfindung nur arithmetisch (+1).">
      <label className="gs-slider">
        <span>
          Reizintensität <strong>R = {r}</strong> → Empfindung <strong>E = {e.toFixed(2)}</strong>
        </span>
        <input type="range" min={1} max={100} step={1} value={r} onChange={(ev) => setR(+ev.target.value)} />
      </label>
      <svg viewBox={`0 0 ${W} ${H}`} className="gs-svg gs-chart" role="img" aria-label={`Logarithmische Kurve; bei R = ${r} ist E = ${e.toFixed(2)}`}>
        <line x1="40" y1={H - 28} x2={W - 10} y2={H - 28} className="ew-axis" />
        <line x1="40" y1="10" x2="40" y2={H - 28} className="ew-axis" />
        {[0, 20, 40, 60, 80, 100].map((v) => (
          <text key={v} x={px(v)} y={H - 12} className="ew-axis-label" textAnchor="middle">
            {v}
          </text>
        ))}
        {[0, 1, 2, 3, 4].map((v) => (
          <text key={v} x="32" y={py(v) + 4} className="ew-axis-label" textAnchor="end">
            {v}
          </text>
        ))}
        <text x={W - 10} y={H - 32} className="ew-axis-label" textAnchor="end">
          Reizintensität R (geometrisch)
        </text>
        <text x="44" y="16" className="ew-axis-label">
          Empfindung E (arithmetisch)
        </text>
        {steps.map((s) => (
          <g key={s.n} className="gs-guide">
            <line x1="40" y1={py(s.n)} x2={px(s.r)} y2={py(s.n)} />
            <line x1={px(s.r)} y1={py(s.n)} x2={px(s.r)} y2={py(0)} />
          </g>
        ))}
        <polyline points={curve} className="gs-curve" fill="none" />
        <circle cx={px(r)} cy={py(e)} r="5" className="gs-dot" />
      </svg>
      <div className="ew-chiprow">
        {steps.map((s) => (
          <button key={s.n} className="ew-chipbtn" onClick={() => setR(Math.round(s.r))}>
            R ≈ {s.r.toFixed(1)} → E = {s.n}
          </button>
        ))}
      </div>
    </Shell>
  );
}

/* ───────────── Wundts Weg & USA ───────────── */

const WUNDT_EVENTS = [
  { y: 1874, row: 0, t: 'Professur Zürich', d: 'Wundt erhält eine Professur an der Universität Zürich.' },
  { y: 1875, row: 0, t: 'Ruf nach Leipzig', d: 'Wundt wechselt nach Leipzig.' },
  { y: 1879, row: 0, t: '1. Labor/Institut', d: '**Gründungsjahr**: erstes experimentalpsychologisches Institut (LB: zunächst ein Versuchszimmer).' },
  { y: 1883, row: 0, t: 'Phil. Studien', d: 'Zeitschrift «Philosophische Studien» (LB-Tabelle: 1881).' },
  { y: 1875, row: 1, t: 'James: Harvard', d: 'William James: Labor an der Harvard University – v. a. Demonstrationen für den Unterricht.' },
  { y: 1883, row: 1, t: 'Hall-Labor', d: 'G. Stanley Hall: erstes experimentalpsychologisches Labor der USA (Johns Hopkins, gegr. 1876).' },
  { y: 1890, row: 1, t: 'James: Principles', d: '«The Principles of Psychology» – James = «Vater der amerikanischen Psychologie».' },
  { y: 1894, row: 1, t: 'Washburn Dr.', d: 'Margaret Washburn: erste Frau mit Doktortitel in Psychologie (Cornell).' },
];

function WundtWeg() {
  const [sel, setSel] = useState(2);
  const x = (y: number) => 8 + ((y - 1872) / 24) * 84;
  const ev = WUNDT_EVENTS[sel];
  return (
    <Shell title="Wundt in Leipzig vs. Entwicklungen in den USA – klicke auf ein Ereignis" note="Nicht verwechseln: 1883 Hall-Labor (USA) und 1875 James (Harvard). (B6/F. 19, 23)">
      <div className="gs-mini-tl">
        <div className="gs-mini-lane">
          <span className="gs-mini-label">Wundt</span>
        </div>
        <div className="gs-mini-lane">
          <span className="gs-mini-label">USA</span>
        </div>
        {WUNDT_EVENTS.map((e, i) => (
          <button
            key={i}
            className={'gs-mini-ev' + (sel === i ? ' on' : '') + (e.row ? ' usa' : '')}
            style={{ left: `${x(e.y)}%`, top: e.row ? '62%' : '14%' }}
            onClick={() => setSel(i)}
          >
            <span className="gs-mini-dot" />
            <span className="gs-mini-y">{e.y}</span>
            <span className="gs-mini-t">{e.t}</span>
          </button>
        ))}
        <div className="gs-mini-axis">
          {[1875, 1880, 1885, 1890, 1895].map((y) => (
            <span key={y} style={{ left: `${x(y)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>
      <div className="gs-detail">
        <h4>
          {ev.y} · {ev.t}
        </h4>
        <p>
          <Rich text={ev.d} />
        </p>
      </div>
    </Shell>
  );
}

/* ───────────── Gestalt: Melodie transponieren ───────────── */

const MELODIE = [0, 1, 2, 3, 4, 4, 5, 5, 5, 5, 4]; // Tonstufen

function Gestalt() {
  const [shift, setShift] = useState(0);
  const [lines, setLines] = useState(true);
  const W = 340;
  const H = 150;
  const xs = MELODIE.map((_, i) => 30 + i * ((W - 50) / (MELODIE.length - 1)));
  const y = (s: number) => H - 20 - (s + shift) * 11;
  return (
    <Shell
      title="Interaktiv: «Das Ganze ist mehr als die Summe seiner Teile»"
      note="Transponiert man die Melodie, ist **jeder einzelne Ton anders** – die Gestalt (Verlauf, Intervalle) bleibt gleich und erkennbar. Wer die Melodie in Einzeltöne zerlegt (wie Wundts Elementenpsychologie), verliert das Wesentliche. (Leitfrage)"
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="gs-svg gs-chart" role="img" aria-label="Melodie als Punktfolge, verschiebbar">
        {[0, 1, 2, 3, 4].map((l) => (
          <line key={l} x1="16" x2={W - 8} y1={H - 20 - l * 22} y2={H - 20 - l * 22} className="ew-axis" />
        ))}
        {lines && <polyline points={xs.map((x, i) => `${x},${y(MELODIE[i])}`).join(' ')} className="gs-curve soft" fill="none" />}
        {xs.map((x, i) => (
          <ellipse key={i} cx={x} cy={y(MELODIE[i])} rx="7" ry="5.5" className="gs-note" />
        ))}
      </svg>
      <div className="ew-chiprow">
        <span className="muted small">Tonart:</span>
        {[0, 2, 4].map((s) => (
          <button key={s} className={'ew-chipbtn' + (shift === s ? ' on' : '')} onClick={() => setShift(s)}>
            {['Original', '+ 2 Stufen', '+ 4 Stufen'][s / 2]}
          </button>
        ))}
        <label className="ew-check">
          <input type="checkbox" checked={lines} onChange={(e) => setLines(e.target.checked)} /> Gestalt (Verlauf) zeigen
        </label>
      </div>
    </Shell>
  );
}

/* ───────────── Lewin: Lebensraum ───────────── */

function Lewin() {
  const [grenze, setGrenze] = useState(true);
  return (
    <Shell
      title="Interaktiv: Lebensraum eines Kindes (Feldtheorie)"
      note="Das Kind K soll essen (Region E, Löffel L); eine **Kraft (Vektor)** zieht es zur Region Spielen (S). Die **feste Grenze** (Mutter besteht aufs Essen) verhindert den Übergang. (B7/F. 44; LB S. 342)"
    >
      <svg viewBox="0 0 360 180" className="gs-svg gs-lewin wide" role="img" aria-label={grenze ? 'Grenze verhindert den Übergang zum Spielen' : 'Ohne Grenze wechselt das Kind zur Region Spielen'}>
        <defs>
          <marker id="arr-lw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" className="gs-arrowhead" />
          </marker>
        </defs>
        <ellipse cx="300" cy="90" rx="58" ry="62" className="gs-region s" />
        <text x="318" y="70" className="gs-t b big">S</text>
        <text x="318" y="106" className="gs-t s">Spielen</text>
        <ellipse cx="120" cy="90" rx="112" ry="78" className="gs-region e" />
        <text x="60" y="64" className="gs-t b big">E</text>
        <text x="60" y="98" className="gs-t s">Essen</text>
        <text x="150" y="140" className="gs-t b">L</text>
        {grenze && (
          <>
            <line x1="226" y1="24" x2="226" y2="156" className="gs-barrier" />
            <text x="226" y="174" className="gs-t s barrier">feste Grenze (Mutter)</text>
          </>
        )}
        <line x1="208" y1="70" x2="290" y2="70" className="gs-vector" markerEnd="url(#arr-lw)" />
        <text x="250" y="60" className="gs-t s">Kraft (Vektor)</text>
        <g className="gs-kid" style={{ transform: grenze ? 'translateX(0px)' : 'translateX(104px)' }}>
          <circle cx="190" cy="92" r="16" />
          <text x="190" y="97" className="gs-t b">K</text>
        </g>
      </svg>
      <div className="ew-chiprow">
        <button className={'ew-chipbtn' + (grenze ? ' on' : '')} onClick={() => setGrenze(!grenze)}>
          {grenze ? 'Grenze aufheben' : 'Grenze (Mutter) setzen'}
        </button>
        <span className="muted small">V = f(P, U): Das Verhalten ergibt sich aus Person und Umwelt.</span>
      </div>
      <p className="ew-widget-note">
        <strong>Video «Hannah»:</strong> Der Stein zieht Hannah als Zielregion an. Um sich daraufzusetzen, müsste sie sich von ihm abwenden – also eine Bewegung
        weg von der Zielregion machen. <span className="gs-erg">Ergänzung</span> <span className="ew-src">Leitfrage</span>
      </p>
    </Shell>
  );
}

/* ───────────── Psychiatrie im Längsschnitt ───────────── */

const PSY = [
  {
    name: 'Antike',
    span: '800 v.–500 n.d.Z.',
    erkl: 'Humoralpathologie (Vier-Säfte-Lehre); Galen: pneuma, Halluzinationen durch heisse Gallensäfte.',
    beh: 'Heilpflanzen, Früchte, Öl, Honig; Amulette, Gebete, Rituale; Abführmittel (Fall Timokrates).',
    ort: 'Kollektive Werte statt Individualität.',
  },
  {
    name: 'Mittelalter',
    span: '500–1500',
    erkl: 'Humoralpathologisch oder **Strafe Gottes**; Visionen als Grenzerfahrungen.',
    beh: 'Kräuter, Spruchformeln (Hildegard); Barbier/Bader: Aderlass, Amulette; extreme Fälle: Holzkäfige, Verbannung.',
    ort: 'Pflege meist in der Familie; Spät-MA: Hospitäler; 1403 Bethlehem («Bedlam»).',
  },
  {
    name: 'Neuzeit',
    span: 'ab 1500 – 18. Jh.',
    erkl: 'Hexenverfolgung, Melancholie; Geistseele vs. Körperseele; «Manie» und «Melancholie».',
    beh: 'Diäten, Schröpfen, Aderlass, pflanzliche Drogen, chemische Substanzen; ab 1790 **moralisches Regime** (Pinel).',
    ort: '18. Jh.: Tollhäuser ohne ärztliche Versorgung (Bayreuth).',
  },
  {
    name: '19. Jh.',
    span: '1800–1900',
    erkl: 'Über-/Unterreiztheit; Forschung an Universitäten, aber von der Anstaltspraxis abgekoppelt.',
    beh: 'Opium, Digitalis, Bäder; Zwangsstuhl, Drehbett, Isolierung; Zwangssterilisation ab 1880er.',
    ort: 'Zwangseinweisung per Gericht; drastische Zunahme an Anstalten; 1852 Nothschrei, 1895 Proteste.',
  },
  {
    name: '20. Jh.',
    span: '1900–',
    erkl: 'Kriegsneurosen («Kriegszitterer»).',
    beh: 'Lobotomie (1935), EKT (1938), ab 1950er Psychopharmaka.',
    ort: '1. WK: ca. 70’000 Tote in Anstalten; Nachkriegszeit: Deinstitutionalisierung, Sozialpsychiatrie.',
  },
];

function Psychiatrie() {
  const [sel, setSel] = useState(0);
  const p = PSY[sel];
  return (
    <Shell title="Längsschnitt: Umgang mit psychisch kranken Menschen – wähle eine Epoche">
      <div className="ew-stages">
        {PSY.map((x, i) => (
          <button key={x.name} className={'ew-stage' + (sel === i ? ' on' : '')} style={{ flexGrow: 1 }} onClick={() => setSel(i)}>
            <span className="ew-stage-nr">{i + 1}</span>
            <span className="ew-stage-name">{x.name}</span>
            <span className="ew-stage-age">{x.span}</span>
          </button>
        ))}
      </div>
      <dl className="gs-kv gs-mt">
        <dt>Erklärung</dt>
        <dd>
          <Rich text={p.erkl} />
        </dd>
        <dt>Behandlung</dt>
        <dd>
          <Rich text={p.beh} />
        </dd>
        <dt>Ort / Lage</dt>
        <dd>
          <Rich text={p.ort} />
        </dd>
      </dl>
    </Shell>
  );
}

/* ───────────── Freud: Instanzen ───────────── */

const INST = {
  ich: { t: 'Ich', p: 'Realitätsprinzip', d: 'Bewusste Instanz des Denkens und Handelns; vermittelt zwischen Es, Über-Ich und Aussenwelt – «armes Ding … unter dreierlei Dienstbarkeiten».' },
  es: { t: 'Es', p: 'Lustprinzip', d: 'Das Unbewusste, Triebhafte, Unkontrollierte – Libido.' },
  ueber: { t: 'Über-Ich', p: 'Gewissen', d: 'Instanz des Gewissens und der Kontrolle, verinnerlichte Normen (entsteht in der Ödipus-Situation).' },
  welt: { t: 'Aussenwelt', p: 'Realität', d: 'Die Realität stellt Anforderungen, denen das Ich gerecht werden muss.' },
} as const;
type InstId = keyof typeof INST;

function Instanzen() {
  const [sel, setSel] = useState<InstId>('ich');
  const node = (id: InstId, x: number, y: number, r: number) => (
    <g className={'gs-hit gs-inst ' + id + (sel === id ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel(id)} onKeyDown={keyAct(() => setSel(id))}>
      <circle cx={x} cy={y} r={r} />
      <text x={x} y={y + 5} className="gs-t b">
        {INST[id].t}
      </text>
    </g>
  );
  return (
    <Shell title="Strukturmodell: Das Ich unter «dreierlei Dienstbarkeiten» – klicke auf eine Instanz" note="(B9/F. 77–78; LB S. 325–328)">
      <div className="gs-split three">
        <FigureView fig="struktur" />
        <svg viewBox="0 0 240 210" className="gs-svg" role="group" aria-label="Ich zwischen Es, Über-Ich und Aussenwelt">
          <line x1="120" y1="112" x2="120" y2="36" className="gs-line" />
          <line x1="120" y1="112" x2="42" y2="176" className="gs-line" />
          <line x1="120" y1="112" x2="198" y2="176" className="gs-line" />
          {node('ueber', 120, 34, 30)}
          {node('es', 42, 176, 30)}
          {node('welt', 198, 176, 30)}
          {node('ich', 120, 112, 30)}
        </svg>
        <div className="gs-detail">
          <h4>
            {INST[sel].t} <span className="muted small">· {INST[sel].p}</span>
          </h4>
          <p>{INST[sel].d}</p>
          <p className="gs-quote">«Wo Es war, soll Ich werden.»</p>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Adler: vom Lebensplan zum Verhalten ───────────── */

const ADLER = [
  { t: 'Verhalten', d: 'beobachtbares Handeln' },
  { t: 'Lebensstil', d: 'spezifische Taktiken, um den Leitlinien zu folgen – Grundmuster, sich der Welt zu stellen' },
  { t: 'Leitlinien', d: 'Orientierung, die aus dem Lebensplan folgt' },
  { t: 'Lebensplan', d: 'zielgerichtetes Grundprogramm (Umweltanforderungen)' },
];

function Adler() {
  const [sel, setSel] = useState(3);
  return (
    <Shell title="Vom Lebensplan zum Verhalten nach Adler – klicke auf eine Stufe" note="Nach B9/F. 84. Hindernisse wie **Minderwertigkeitserfahrungen** werden **kompensiert** (positiv oder negativ; Überkompensation → neurotische Symptome); das **Gemeinschaftsgefühl** begrenzt das Machtstreben.">
      <div className="gs-split">
        <svg viewBox="0 0 260 200" className="gs-svg" role="group" aria-label="Pyramide von Lebensplan bis Verhalten">
          {ADLER.map((a, i) => {
            const top = 8 + i * 46;
            const inset = 100 - i * 25;
            const inset2 = 100 - (i + 1) * 25;
            return (
              <g key={a.t} className={'gs-hit gs-tier' + (sel === i ? ' on' : '')} role="button" tabIndex={0} onClick={() => setSel(i)} onKeyDown={keyAct(() => setSel(i))}>
                <path d={`M${inset} ${top} L${260 - inset} ${top} L${260 - inset2} ${top + 42} L${inset2} ${top + 42} Z`} style={{ fillOpacity: 0.12 + i * 0.1 }} />
                <text x="130" y={top + 26} className="gs-t b">
                  {a.t}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="gs-detail">
          <h4>{ADLER[sel].t}</h4>
          <p>{ADLER[sel].d}</p>
          <p className="muted small">Leserichtung: Der Lebensplan (unten) bestimmt über Leitlinien und Lebensstil das sichtbare Verhalten (oben).</p>
        </div>
      </div>
    </Shell>
  );
}

/* ───────────── Hilfsfunktionen ───────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
