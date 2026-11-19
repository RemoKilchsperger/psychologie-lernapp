import { useState } from 'react';
import { Rich } from './Rich';

/* ───────────── Phasen nach Bowlby ───────────── */

const PHASEN = [
  {
    nr: 1,
    name: 'Vorphase der Bindung',
    age: '0 – 6 Wo.',
    grow: 2,
    keys: ['Jede Person', 'Angeborene Signale'],
    text: 'Bindungsverhalten (Weinen, Lächeln, Blickkontakt) richtet sich an **jede Person**. Angeborene Signale dienen der Bedürfnisbefriedigung. Noch **keine Bindung** – nur Bindungsverhalten.',
    kind: 'Ein Neugeborenes lässt sich von jeder freundlichen Person trösten.',
  },
  {
    nr: 2,
    name: 'Entstehende Bindung',
    age: '6 Wo. – 6/8 Mon.',
    grow: 3,
    keys: ['Vertraute Personen', 'Soziales Lächeln', 'Erwartungen'],
    text: 'Zunehmend **spezifische Reaktionen auf vertraute Personen**; das Kind entwickelt spezifische Erwartungen an deren Verhalten.',
    kind: 'Das Baby lächelt die Mutter strahlender an als eine fremde Person, protestiert aber noch nicht bei Trennung.',
  },
  {
    nr: 3,
    name: 'Ausgeprägte Bindung',
    age: '6/8 Mon. – 1½/2 J.',
    grow: 4,
    keys: ['Spezifische Bindung', 'Trennungsprotest', 'Fremdeln', 'Aktive Kontaktaufnahme'],
    text: 'Die **eigentliche spezifische Bindung**: aktive Kontaktaufnahme (Nachkrabbeln), Unbehagen und **Protest bei Trennung**, Spannung bei Fremden (**Fremdeln** – Höhepunkt im 2. Lj.). Voraussetzung: **Objektpermanenz** und **Schemata**.',
    kind: 'Das Kleinkind weint, wenn die Mutter den Raum verlässt, und versteckt sich vor dem Besuch.',
  },
  {
    nr: 4,
    name: 'Reziproke Beziehungen',
    age: 'ab 1½–2 J.',
    grow: 3,
    keys: ['Inneres Arbeitsmodell', 'Trennungen akzeptieren', 'Ziele anpassen'],
    text: '**Inneres Arbeitsmodell** der Bindung: Das Kind weiss, dass die Bezugsperson grundsätzlich verfügbar ist, akzeptiert Trennungen, passt eigene Ziele an und berücksichtigt Bedürfnisse der Bezugsperson. Lohaus: «Phase der **zielkorrigierten Partnerschaft**».',
    kind: '«Mama geht kurz einkaufen und kommt nach dem Mittagsschlaf wieder» – das Kind kann das annehmen.',
  },
];

export function BowlbyPhasen() {
  const [sel, setSel] = useState(2);
  const p = PHASEN[sel];
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Interaktiv: Wähle eine Phase (Fol. 10)</div>
      <div className="ew-stages">
        {PHASEN.map((ph, i) => (
          <button key={ph.nr} className={'ew-stage' + (i === sel ? ' on' : '')} onClick={() => setSel(i)} style={{ flexGrow: ph.grow }}>
            <span className="ew-stage-nr">{ph.nr}</span>
            <span className="ew-stage-name">{ph.name}</span>
            <span className="ew-stage-age">{ph.age}</span>
          </button>
        ))}
      </div>
      <div className="ew-stage-detail">
        <div className="ew-chiprow">
          {p.keys.map((k) => (
            <span key={k} className="ew-chip">
              {k}
            </span>
          ))}
        </div>
        <p>
          <Rich text={p.text} />
        </p>
        <p className="muted small">
          <strong>Typisch:</strong> {p.kind}
        </p>
      </div>
    </div>
  );
}

/* ───────────── Fremde-Situations-Test ───────────── */

type Who = 'M' | 'F' | 'B';
const EPISODEN: { nr: number; dauer: string; ereignis: string; who: Who[]; obs: string; stress: number; phase?: Phase }[] = [
  { nr: 1, dauer: '30 s', ereignis: 'Beobachter begrüsst Mutter und Kind und führt sie in den Raum.', who: ['M', 'B'], obs: '–', stress: 1 },
  { nr: 2, dauer: '3 min', ereignis: 'Mutter und Kind allein, das Kind spielt.', who: ['M'], obs: 'Bezugsperson als **sichere Basis**', stress: 1, phase: 'explo' },
  { nr: 3, dauer: '3 min', ereignis: 'Fremde Person kommt, spricht mit der Mutter, versucht mit dem Kind zu spielen.', who: ['M', 'F'], obs: 'Reaktion auf **Fremde**', stress: 2, phase: 'explo' },
  { nr: 4, dauer: '3 min', ereignis: 'Mutter geht unauffällig; die Fremde tröstet bei Bedarf.', who: ['F'], obs: '**Trennungsangst** (1. Trennung)', stress: 3, phase: 'trennung' },
  { nr: 5, dauer: '3 min', ereignis: 'Mutter kehrt zurück und tröstet; die Fremde geht.', who: ['M'], obs: 'Reaktion auf **Wiedervereinigung**', stress: 2, phase: 'wieder' },
  { nr: 6, dauer: '3 min', ereignis: 'Mutter geht, das Kind ist allein.', who: [], obs: '**Trennungsangst**', stress: 5, phase: 'trennung' },
  { nr: 7, dauer: '3 min', ereignis: 'Fremde kommt zurück, bietet Spiel/Trost an.', who: ['F'], obs: 'Sich von **Fremder beruhigen** lassen', stress: 4, phase: 'fremde' },
  { nr: 8, dauer: '3 min', ereignis: 'Mutter kommt zurück, Fremde geht; Mutter tröstet, lenkt auf Spielzeug.', who: ['M'], obs: 'Reaktion auf **Wiedervereinigung**', stress: 3, phase: 'wieder' },
];
const WHO_LABEL: Record<Who, string> = { M: 'Mutter', F: 'Fremde', B: 'Beobachter' };

type Phase = 'explo' | 'trennung' | 'wieder' | 'fremde';
type Typ = 'B' | 'A' | 'C' | 'D';

const REAKTION: Record<Typ, Record<Phase, string>> = {
  B: {
    explo: 'Nutzt die Mutter als **sichere Basis** und exploriert; bevorzugt die Mutter gegenüber der Fremden.',
    trennung: 'Evtl. Weinen, Spiel lässt nach – das Bindungssystem ist aktiviert.',
    wieder: '**Freude** und **Nähesuchen**, lässt sich rasch trösten (sicherer Hafen) und spielt dann weiter.',
    fremde: 'Lässt sich von der Fremden etwas trösten, bevorzugt aber klar die Mutter.',
  },
  A: {
    explo: 'Exploriert viel, kaum Rückversicherung bei der Mutter; behandelt die Fremde wie die Mutter.',
    trennung: '**Kaum Kummer** sichtbar, spielt weiter – aber **erhöhtes Kortisol**.',
    wieder: '**Keine spezifische Reaktion** bzw. aktives Meiden der Nähe (Wegschauen, Abwenden).',
    fremde: 'Lässt sich von der Fremden ähnlich behandeln wie von der Mutter.',
  },
  C: {
    explo: 'Schon vor der Trennung viel **Nähesuchen**, wenig Exploration.',
    trennung: 'Stark belastet, weint heftig.',
    wieder: 'Sucht Nähe und ist zugleich **ärgerlich/wütend**, **kaum zu trösten** – kann die Mutter nicht zur Beruhigung nutzen.',
    fremde: 'Passiv oder ärgerlich, lässt sich nicht beruhigen.',
  },
  D: {
    explo: 'Kein konsistentes Muster erkennbar.',
    trennung: 'Widersprüchliches Verhalten, evtl. Stereotypien.',
    wieder: '**Einfrieren**, unvollständige Bewegungen, ängstliches Lächeln, **Wegschauen bei Annäherung** der Bezugsperson.',
    fremde: 'Keine konsistente Strategie der Stressbewältigung.',
  },
};

export function FremdeSituation() {
  const [i, setI] = useState(0);
  const [typ, setTyp] = useState<Typ>('B');
  const e = EPISODEN[i];
  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Die 8 Episoden durchspielen (Fol. 12–13)</div>
      <div className="ew-sst-steps" role="tablist" aria-label="Episoden">
        {EPISODEN.map((ep, j) => (
          <button
            key={ep.nr}
            role="tab"
            aria-selected={j === i}
            className={'ew-sst-step' + (j === i ? ' on' : '') + (ep.phase === 'wieder' ? ' key' : '')}
            onClick={() => setI(j)}
            title={`Episode ${ep.nr}`}
          >
            <span className="ew-sst-bar" style={{ height: `${ep.stress * 20}%` }} />
            <span className="ew-sst-nr">{ep.nr}</span>
          </button>
        ))}
      </div>
      <div className="ew-sst-legend muted small">Balkenhöhe = Belastung (schematisch) · Episoden mit Rahmen = Wiedervereinigung</div>

      <div className="ew-sst-detail">
        <div className="ew-sst-room" aria-label="Im Raum">
          <span className="ew-sst-person kid">Kind</span>
          {e.who.map((w) => (
            <span key={w} className={'ew-sst-person ' + w}>
              {WHO_LABEL[w]}
            </span>
          ))}
          {e.who.length === 0 && <span className="muted small">allein</span>}
        </div>
        <div>
          <p>
            <strong>Episode {e.nr}</strong> <span className="muted small">({e.dauer})</span> – {e.ereignis}
          </p>
          <p className="muted small">
            <strong>Beobachtet:</strong> <Rich text={e.obs} />
          </p>
        </div>
      </div>

      {e.phase && (
        <div className="ew-trainer">
          <div className="ew-chiprow">
            <span className="muted small">So reagiert ein Kind vom Typ</span>
            {(['B', 'A', 'C', 'D'] as Typ[]).map((t) => (
              <button key={t} className={'ew-chipbtn' + (typ === t ? ' on' : '')} onClick={() => setTyp(t)}>
                {t}
              </button>
            ))}
          </div>
          <p className="ew-sst-reaction">
            <Rich text={REAKTION[typ][e.phase]} />
          </p>
        </div>
      )}

      <div className="ew-sst-nav">
        <button className="btn small ghost" disabled={i === 0} onClick={() => setI(i - 1)}>
          ← Zurück
        </button>
        <button className="btn small" disabled={i === EPISODEN.length - 1} onClick={() => setI(i + 1)}>
          Nächste Episode →
        </button>
      </div>
    </div>
  );
}

/* ───────────── Bindungstypen: Waage + Trainer ───────────── */

const TYPEN: { id: Typ; name: string; pct: string; tilt: number; balance: string; sst: string; entstehung: string }[] = [
  {
    id: 'B',
    name: 'sicher',
    pct: '60–70 %',
    tilt: 0,
    balance: 'Ausgeglichen: Bindungs- und Explorationsverhalten im Gleichgewicht.',
    sst: 'Mutter als **sichere Basis** und **sicherer Hafen**; evtl. Weinen bei Trennung; **Freude und Nähesuchen** bei Rückkehr.',
    entstehung: '**Feinfühlige** Beantwortung der Signale; Umwelt verlässlich.',
  },
  {
    id: 'A',
    name: 'unsicher-vermeidend',
    pct: '15–20 %',
    tilt: -16,
    balance: 'Zur **Exploration** verschoben – Bindungsverhalten wird unterdrückt.',
    sst: 'Indifferent; kaum Kummer bei Trennung; **keine spezifische Reaktion** bei Rückkehr (Meiden). Trotzdem **erhöhtes Kortisol**.',
    entstehung: 'Zu wenig Zuverlässigkeit, evtl. **Zurückweisung** → aus Angst vor Zurückweisung weniger Bindungsverhalten.',
  },
  {
    id: 'C',
    name: 'unsicher-ambivalent',
    pct: '10–15 %',
    tilt: 16,
    balance: 'Zum **Bindungsverhalten** verschoben – wenig Exploration.',
    sst: 'Viel Nähesuchen schon vor der Trennung; bei Rückkehr **wütend und kaum zu trösten**.',
    entstehung: '**Wechsel** zwischen zuverlässiger und unzuverlässiger Zuwendung → Klammern ohne Beruhigung.',
  },
  {
    id: 'D',
    name: 'desorganisiert-desorientiert',
    pct: '5–10 %',
    tilt: 0,
    balance: '**Keine konsistente Strategie** – die Waage «wackelt».',
    sst: '**Einfrieren**, Stereotypien, widersprüchliches Verhalten, ängstliches Lächeln, Wegschauen bei Annäherung.',
    entstehung: '**«Unlösbares Problem»:** Bezugsperson = Ziel der Annäherung **und** Quelle der Angst (Eltern «feindlich» oder «ängstlich»). Hinweis, kein Beweis für ungünstige Erfahrungen.',
  },
];

const FAELLE: { text: string; a: Typ; why: string }[] = [
  {
    text: 'Lena spielt kaum, solange die Mutter da ist, und klebt an ihr. Als die Mutter zurückkommt, lässt sie sich hochnehmen, strampelt aber wütend und weint lange weiter.',
    a: 'C',
    why: 'Viel Nähesuchen, wenig Exploration, bei Rückkehr ärgerlich und kaum zu trösten → unsicher-ambivalent.',
  },
  {
    text: 'Tim spielt unbeirrt weiter, als die Mutter geht, und schaut bei ihrer Rückkehr kaum auf. Sein Kortisolspiegel ist aber deutlich erhöht.',
    a: 'A',
    why: 'Kein sichtbarer Kummer, keine Reaktion bei Rückkehr – aber physiologisch gestresst → unsicher-vermeidend.',
  },
  {
    text: 'Mia weint, als die Mutter geht. Bei der Rückkehr läuft sie strahlend zu ihr, beruhigt sich schnell und spielt dann weiter.',
    a: 'B',
    why: 'Mutter als sicherer Hafen und sichere Basis → sicher gebunden.',
  },
  {
    text: 'Als der Vater den Raum betritt, krabbelt Noah auf ihn zu, erstarrt auf halbem Weg und dreht dann den Kopf weg.',
    a: 'D',
    why: 'Unvollständige Bewegung, Einfrieren, Wegschauen bei Annäherung → desorganisiert.',
  },
  {
    text: 'Ein Kind erlebt, dass die Mutter manchmal sofort und liebevoll, manchmal gar nicht auf sein Weinen reagiert.',
    a: 'C',
    why: 'Der Wechsel zwischen zuverlässiger und unzuverlässiger Zuwendung gilt als Entstehungsbedingung für das ambivalente Muster.',
  },
  {
    text: 'Eine Mutter weist das Kind häufig ab, wenn es Nähe sucht («Stell dich nicht so an»).',
    a: 'A',
    why: 'Zurückweisung → das Kind zeigt aus Angst vor Zurückweisung weniger Bindungsverhalten → vermeidend.',
  },
  {
    text: 'Ein Kind behandelt die fremde Person genau gleich wie seine Mutter.',
    a: 'A',
    why: 'Fremde wie Mutter behandeln ist typisch für das vermeidende Muster; B-Kinder bevorzugen die Mutter klar.',
  },
  {
    text: 'Die Bezugsperson ist für das Kind zugleich Ziel der Annäherung und Quelle der Angst.',
    a: 'D',
    why: 'Das «unlösbare Problem» erklärt das desorganisierte Muster.',
  },
];

export function Bindungstypen() {
  const [sel, setSel] = useState<Typ>('B');
  const t = TYPEN.find((x) => x.id === sel)!;
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<Typ | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= FAELLE.length;
  const f = FAELLE[Math.min(i, FAELLE.length - 1)];

  const choose = (x: Typ) => {
    setSel(x);
    if (pick || done) return;
    setPick(x);
    if (x === f.a) setScore((s) => s + 1);
  };

  return (
    <div className="ew-widget">
      <div className="ew-widget-title">Interaktiv: Bindung als Balance (Fol. 14–18)</div>
      <div className="ew-chiprow ew-typ-select">
        {TYPEN.map((x) => (
          <button key={x.id} className={'ew-chipbtn' + (sel === x.id ? ' on' : '')} onClick={() => setSel(x.id)}>
            <strong>{x.id}</strong> {x.name}
          </button>
        ))}
      </div>
      <div className="ew-typ-grid">
        <svg viewBox="0 0 300 150" className={'ew-seesaw' + (sel === 'D' ? ' wobble' : '')} role="img" aria-label={`Waage für Typ ${t.id}: ${t.balance}`}>
          <line x1="40" y1="70" x2="260" y2="70" className="ew-seesaw-ref" />
          <g style={{ transform: `rotate(${t.tilt}deg)`, transformOrigin: '150px 70px', transition: 'transform 0.4s ease' }}>
            <line x1="40" y1="70" x2="260" y2="70" className={'ew-seesaw-beam' + (sel === 'D' ? ' broken' : '')} />
          </g>
          <path d="M150 72 L118 128 L182 128 Z" className="ew-seesaw-fulcrum" />
          <text x="40" y="146" className="ew-axis-label">Bindungsverhalten</text>
          <text x="260" y="146" textAnchor="end" className="ew-axis-label">Exploration</text>
          {t.tilt !== 0 && (
            <text x={t.tilt < 0 ? 252 : 48} y="22" textAnchor="middle" className="ew-direct-label">
              ↑
            </text>
          )}
        </svg>
        <div>
          <h4>
            {t.id} – {t.name} <span className="ew-chip">{t.pct}</span>
          </h4>
          <p className="small">
            <Rich text={t.balance} />
          </p>
          <p className="small">
            <span className="ew-label">Im SST</span> <Rich text={t.sst} />
          </p>
          <p className="small">
            <span className="ew-label">Entstehung</span> <Rich text={t.entstehung} />
          </p>
        </div>
      </div>
      <p className="ew-widget-note">Wie in Abb. 12: Die angehobene Seite (↑) zeigt, welches Verhalten überwiegt.</p>

      <div className="ew-trainer">
        {done ? (
          <>
            <p>
              <strong>
                {score} von {FAELLE.length} richtig.
              </strong>{' '}
              Merke die Buchstaben: A = vermeidend, B = sicher, C = ambivalent, D = desorganisiert.
            </p>
            <button className="btn small" onClick={() => { setI(0); setScore(0); setPick(null); }}>
              Nochmals üben
            </button>
          </>
        ) : (
          <>
            <div className="ew-trainer-count">
              Fall {i + 1} / {FAELLE.length} – welches Muster passt?
            </div>
            <p className="ew-trainer-q">{f.text}</p>
            <div className="ew-chiprow">
              {TYPEN.map((x) => {
                let cls = 'ew-typ-btn';
                if (pick) {
                  if (x.id === f.a) cls += ' correct';
                  else if (x.id === pick) cls += ' wrong';
                }
                return (
                  <button key={x.id} className={cls} onClick={() => choose(x.id)}>
                    <strong>{x.id}</strong> {x.name}
                  </button>
                );
              })}
            </div>
            {pick && (
              <div className={'ew-trainer-fb ' + (pick === f.a ? 'ok' : 'bad')}>
                <strong>{pick === f.a ? 'Richtig!' : `Nicht ganz – richtig ist ${f.a}.`}</strong> {f.why}
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
