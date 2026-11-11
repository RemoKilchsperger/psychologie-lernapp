import { useEffect, useMemo, useRef, useState } from 'react';
import type { WidgetId } from '../model';
import { Rich } from './Rich';
import { Seg, Shell, SortTrainer, type SortItem } from './WidgetKit';
import { Entry, ErkennungSort, Gestalt, Merkmalspfade, ProblemeSort, RezeptivesFeld, Sdt, Sehbahn } from './Widgets2';
import {
  Dichotisch,
  Dissoziation,
  EvidenzLeiter,
  ImageryDebate,
  PerceptualLoad,
  Rotation,
  Scanning,
  Selektion,
  Slippage,
  TreismanRiley,
  V1Karte,
} from './Widgets3';

export function Widget({ id }: { id: WidgetId }) {
  switch (id) {
    case 'interpretiert':
      return <Interpretiert />;
    case 'stroop':
      return <Stroop />;
    case 'donders':
      return <Donders />;
    case 'sternberg':
      return <Sternberg />;
    case 'geschichte-sort':
      return <GeschichteSort />;
    case 'probleme-sort':
      return <ProblemeSort />;
    case 'sehbahn':
      return <Sehbahn />;
    case 'rezeptives-feld':
      return <RezeptivesFeld />;
    case 'merkmalspfade':
      return <Merkmalspfade />;
    case 'gestalt':
      return <Gestalt />;
    case 'erkennung-sort':
      return <ErkennungSort />;
    case 'sdt':
      return <Sdt />;
    case 'entry-level':
      return <Entry />;
    case 'rotation':
      return <Rotation />;
    case 'imagery-debate':
      return <ImageryDebate />;
    case 'scanning':
      return <Scanning />;
    case 'v1-karte':
      return <V1Karte />;
    case 'evidenz-leiter':
      return <EvidenzLeiter />;
    case 'dissoziation':
      return <Dissoziation />;
    case 'dichotisch-sort':
      return <Dichotisch />;
    case 'selektion':
      return <Selektion />;
    case 'treisman-riley':
      return <TreismanRiley />;
    case 'perceptual-load':
      return <PerceptualLoad />;
    case 'slippage':
      return <Slippage />;
  }
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);

/* ═════════════════════ Kapitel 1 ═════════════════════ */

/* ── Der Geist interpretiert: Intuitions-Check ── */

const INTUITION = [
  {
    q: 'Welche Stadt liegt nördlicher?',
    options: ['Rom', 'Philadelphia'],
    correct: 0,
    why: 'Rom liegt auf ca. 42° N, Philadelphia auf ca. 40° N. Wir urteilen über die Kategorie «Land» (Italien liegt «im Süden») statt über ein exaktes Bild → verzerrte mentale Karte. (F. 24–25)',
  },
  {
    q: 'Welche Stadt liegt nördlicher?',
    options: ['Maastricht', 'Antwerpen'],
    correct: 1,
    why: 'Antwerpen (Belgien) liegt nördlicher als Maastricht (Niederlande) – obwohl die Niederlande «über» Belgien liegen. (F. 24–25)',
  },
];

const F_SENTENCE = 'FINISHED FILES ARE THE RESULT OF YEARS OF SCIENTIFIC STUDY COMBINED WITH THE EXPERIENCE OF YEARS.';

function birthdayP(n: number) {
  let p = 1;
  for (let k = 0; k < n; k++) p *= (365 - k) / 365;
  return 1 - p;
}

function Interpretiert() {
  const [mode, setMode] = useState<'karten' | 'geburtstag' | 'f'>('karten');
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [guess, setGuess] = useState<number | null>(null);
  const [n, setN] = useState(30);
  const [fCount, setFCount] = useState('');
  const [fShown, setFShown] = useState(false);
  return (
    <Shell title="Selbstversuch: Der Geist interpretiert" note="Täuschungen und Heuristiken sind Ausnahmen – meist liefern dieselben Regeln korrekte Ergebnisse. (F. 12)">
      <Seg
        label="Aufgabe"
        value={mode}
        onChange={setMode}
        options={[
          ['karten', 'Mentale Karten'],
          ['geburtstag', 'Geburtstagsproblem'],
          ['f', 'F zählen'],
        ]}
      />
      {mode === 'karten' && (
        <div className="kg-quiz-cards">
          {INTUITION.map((it, i) => (
            <div key={i} className="pk-detail">
              <p>
                <strong>{it.q}</strong>
              </p>
              <div className="ew-chiprow">
                {it.options.map((o, k) => {
                  const picked = picks[i] !== undefined;
                  const cls = !picked ? '' : k === it.correct ? ' correct' : k === picks[i] ? ' wrong' : '';
                  return (
                    <button key={o} className={'pk-cat' + cls} disabled={picked} onClick={() => setPicks({ ...picks, [i]: k })}>
                      {o}
                    </button>
                  );
                })}
              </div>
              {picks[i] !== undefined && (
                <p className="small" style={{ marginTop: 8 }}>
                  <Rich text={it.why} />
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {mode === 'geburtstag' && (
        <div className="pk-detail">
          {guess === null ? (
            <>
              <p>
                <strong>In einem Raum sind 30 Personen. Wie wahrscheinlich ist es, dass mindestens zwei am gleichen Tag Geburtstag haben?</strong> Schätze
                spontan:
              </p>
              <div className="ew-chiprow">
                {[5, 10, 30, 50, 70, 90].map((g) => (
                  <button key={g} className="pk-cat" onClick={() => setGuess(g)}>
                    {g} %
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p>
                Deine Schätzung: <strong>{guess} %</strong> · tatsächlich: <strong className="pk-big">{Math.round(birthdayP(30) * 100)} %</strong>. Rund 70 % –
                intuitiv stark unterschätzt: Wir denken an «jemand hat <em>meinen</em> Geburtstag» statt an alle möglichen Paare. (F. 27)
              </p>
              <label className="pk-slider">
                <span>
                  Anzahl Personen: <strong>{n}</strong> → Wahrscheinlichkeit <strong>{(birthdayP(n) * 100).toFixed(1)} %</strong>
                </span>
                <input type="range" min={2} max={70} value={n} onChange={(e) => setN(+e.target.value)} />
              </label>
              <div className="pk-flynn-bar">
                <span style={{ width: `${birthdayP(n) * 100}%`, background: 'var(--ch)' }}>{n} Personen</span>
              </div>
              <p className="muted small">
                <Rich text="[Ergänzung] Berechnung: 1 − (365 · 364 · … · (365 − n + 1)) / 365ⁿ. Schon ab 23 Personen liegt sie über 50 %." />
              </p>
              <button className="ew-link small" onClick={() => setGuess(null)}>
                nochmals schätzen
              </button>
            </>
          )}
        </div>
      )}
      {mode === 'f' && (
        <div className="pk-detail">
          <p>Lies den Satz einmal zügig und zähle dabei alle «F»:</p>
          <p className="kg-fsentence">
            {fShown
              ? F_SENTENCE.split('').map((c, i) =>
                  c === 'F' ? (
                    <mark key={i} className={F_SENTENCE.slice(i - 1, i + 2).match(/OF\s/) ? 'of' : ''}>
                      F
                    </mark>
                  ) : (
                    c
                  ),
                )
              : F_SENTENCE}
          </p>
          {!fShown ? (
            <div className="ew-chiprow">
              <input className="ew-search kg-num" inputMode="numeric" placeholder="Anzahl" value={fCount} onChange={(e) => setFCount(e.target.value.replace(/\D/g, ''))} />
              <button className="btn small" disabled={!fCount} onClick={() => setFShown(true)}>
                Auflösen
              </button>
            </div>
          ) : (
            <p className="small">
              Es sind <strong>6 F</strong>
              {fCount && ` (du hast ${fCount} gezählt)`}. Viele zählen nur 3, weil das F in <strong>«OF»</strong> (gesprochen «v», Funktionswort) beim
              automatischen Lesen überflogen wird (rot markiert). (F. 30){' '}
              <button
                className="ew-link small"
                onClick={() => {
                  setFShown(false);
                  setFCount('');
                }}
              >
                zurücksetzen
              </button>
            </p>
          )}
        </div>
      )}
    </Shell>
  );
}

/* ── Stroop-Selbsttest ── */

const STROOP_COLORS = [
  { word: 'ROT', css: '#dc2626' },
  { word: 'GRÜN', css: '#16a34a' },
  { word: 'BLAU', css: '#2563eb' },
  { word: 'GELB', css: '#d4a106' },
];

type StroopTrial = { word: number; ink: number; cong: boolean };

function makeStroopTrials(): StroopTrial[] {
  const t: StroopTrial[] = [];
  for (let k = 0; k < 8; k++) {
    const c = k % 4;
    t.push({ word: c, ink: c, cong: true });
    const other = (c + 1 + Math.floor(Math.random() * 3)) % 4;
    t.push({ word: other, ink: c, cong: false });
  }
  return shuffle(t);
}

function Stroop() {
  const [trials, setTrials] = useState<StroopTrial[] | null>(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState<{ cong: boolean; rt: number; ok: boolean }[]>([]);
  const t0 = useRef(0);

  useEffect(() => {
    if (!trials || i >= trials.length) return;
    setVisible(false);
    const id = window.setTimeout(() => {
      setVisible(true);
      t0.current = performance.now();
    }, 600 + Math.random() * 400);
    return () => window.clearTimeout(id);
  }, [trials, i]);

  const answer = (c: number) => {
    if (!trials || !visible) return;
    const tr = trials[i];
    setResults((r) => [...r, { cong: tr.cong, rt: performance.now() - t0.current, ok: c === tr.ink }]);
    setI(i + 1);
  };

  useEffect(() => {
    if (!trials || i >= trials.length) return;
    const onKey = (e: KeyboardEvent) => {
      const k = '1234'.indexOf(e.key);
      if (k >= 0) answer(k);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const start = () => {
    setTrials(makeStroopTrials());
    setI(0);
    setResults([]);
  };

  const done = trials && i >= trials.length;
  const ok = results.filter((r) => r.ok);
  const mc = mean(ok.filter((r) => r.cong).map((r) => r.rt));
  const mi = mean(ok.filter((r) => !r.cong).map((r) => r.rt));
  const max = Math.max(1000, mc || 0, mi || 0) * 1.1;

  return (
    <Shell
      title="Selbstversuch: Stroop-Effekt"
      note="Folie: kongruent ca. 800 ms, inkongruent ca. 900 ms → ca. 100 ms Interferenz, weil Lesen nicht unterdrückt werden kann. (F. 31) Am Bildschirm mit Maus/Tasten sind die Zeiten länger als im Labor – entscheidend ist die Differenz."
    >
      {!trials ? (
        <div className="pk-detail">
          <p>
            <strong>Aufgabe:</strong> Benenne so schnell wie möglich die <strong>Druckfarbe</strong> – nicht das Wort! Klicke auf die passende Farbe oder drücke
            die Tasten <kbd>1</kbd>–<kbd>4</kbd>. 16 Durchgänge, halb kongruent (ROT in Rot), halb inkongruent (ROT in Grün).
          </p>
          <button className="btn small" onClick={start}>
            Test starten
          </button>
        </div>
      ) : !done ? (
        <div className="kg-stroop">
          <div className="muted small">
            Durchgang {i + 1} / {trials.length}
          </div>
          <div className="kg-stroop-stage" aria-live="polite">
            {visible ? (
              <span style={{ color: STROOP_COLORS[trials[i].ink].css }}>{STROOP_COLORS[trials[i].word].word}</span>
            ) : (
              <span className="kg-fix">+</span>
            )}
          </div>
          <div className="kg-stroop-btns">
            {STROOP_COLORS.map((c, k) => (
              <button key={c.word} className="kg-swatch" style={{ ['--sw' as string]: c.css }} onClick={() => answer(k)} disabled={!visible}>
                <span className="kg-key">{k + 1}</span> {c.word.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="pk-detail">
          <h4>Dein Ergebnis</h4>
          {[
            ['kongruent', mc, 'var(--ew-s3)'],
            ['inkongruent', mi, 'var(--ew-s2)'],
          ].map(([l, v, col]) => (
            <div key={l as string} className="ew-bar-row">
              <span>{l as string}</span>
              <span className="ew-bar-track">
                <span className="ew-bar-fill" style={{ width: `${((v as number) / max) * 100}%`, background: col as string }} />
              </span>
              <span className="pk-num" style={{ width: 'auto' }}>
                {Number.isNaN(v) ? '–' : `${Math.round(v as number)} ms`}
              </span>
            </div>
          ))}
          <p style={{ marginTop: 8 }}>
            Interferenz: <strong className="pk-big">{Number.isNaN(mi - mc) ? '–' : `${Math.round(mi - mc)} ms`}</strong> ·{' '}
            {results.length - ok.length} Fehler (nicht gewertet).{' '}
            {mi - mc > 30
              ? 'Inkongruent warst du langsamer – das automatische Lesen hat gestört.'
              : 'Bei so wenigen Durchgängen schwankt das stark – probier es nochmals.'}
          </p>
          <button className="btn small" onClick={start}>
            Nochmals
          </button>
        </div>
      )}
    </Shell>
  );
}

/* ── Donders: Subtraktionsmethode ── */

function Donders() {
  const [p1, setP1] = useState(220);
  const [p2, setP2] = useState(100);
  const [motor, setMotor] = useState(60);
  const [violate, setViolate] = useState(false);
  const extra = violate ? 40 : 0;
  const rtA = p1 + motor;
  const rtB = p1 + extra + p2 + motor;
  const est = rtB - rtA;
  const scale = (v: number) => (v / 650) * 100;
  return (
    <Shell
      title="Interaktiv: Donders’ Subtraktionsmethode"
      note="Die Zeiten der Teilprozesse sind frei wählbar und nur zur Veranschaulichung [Ergänzung]. Die Logik t_Entscheidung = RT_B − RT_A stammt von F. 32, das Problem der reinen Einfügung von F. 36."
    >
      <div className="pk-sliders3">
        <label className="pk-slider">
          <span>
            Prozess 1 – Wahrnehmung: <strong>{p1} ms</strong>
          </span>
          <input type="range" min={100} max={300} step={10} value={p1} onChange={(e) => setP1(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            Prozess 2 – Entscheidung: <strong>{p2} ms</strong>
          </span>
          <input type="range" min={20} max={250} step={10} value={p2} onChange={(e) => setP2(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            Reaktion (Taste): <strong>{motor} ms</strong>
          </span>
          <input type="range" min={40} max={120} step={10} value={motor} onChange={(e) => setMotor(+e.target.value)} />
        </label>
      </div>
      <div className="kg-timeline">
        <div className="kg-tl-row">
          <span className="kg-tl-label">
            A: einfache Reaktion
            <br />
            <strong>RT<sub>A</sub> = {rtA} ms</strong>
          </span>
          <div className="kg-tl-track">
            <span className="kg-seg p1" style={{ width: `${scale(p1)}%` }}>
              Wahrnehmung
            </span>
            <span className="kg-seg mo" style={{ width: `${scale(motor)}%` }}>
              Taste
            </span>
          </div>
        </div>
        <div className="kg-tl-row">
          <span className="kg-tl-label">
            B: Wahlreaktion
            <br />
            <strong>RT<sub>B</sub> = {rtB} ms</strong>
          </span>
          <div className="kg-tl-track">
            <span className="kg-seg p1" style={{ width: `${scale(p1 + extra)}%` }}>
              Wahrnehmung{violate ? ' (+40)' : ''}
            </span>
            <span className="kg-seg p2" style={{ width: `${scale(p2)}%` }}>
              Entscheidung
            </span>
            <span className="kg-seg mo" style={{ width: `${scale(motor)}%` }}>
              Taste
            </span>
          </div>
        </div>
      </div>
      <p className="pk-calc">
        Schätzung: <i>t</i><sub>Entscheidung</sub> = RT<sub>B</sub> − RT<sub>A</sub> = {rtB} − {rtA} = <strong className="pk-big">{est} ms</strong>
        {violate && (
          <>
            {' '}
            · tatsächlich: <strong>{p2} ms</strong>
          </>
        )}
      </p>
      <label className="ew-check">
        <input type="checkbox" checked={violate} onChange={(e) => setViolate(e.target.checked)} /> Annahme der reinen Einfügung verletzen: Die zusätzliche Stufe
        verändert auch die Wahrnehmung (+40 ms)
      </label>
      {violate && (
        <p className="pk-warn">
          Die Subtraktion überschätzt die Entscheidung um 40 ms – und man merkt es nicht, weil die Stufen <strong>nicht direkt sichtbar</strong> sind. Genau das
          ist das Problem der Subtraktionsmethode. (F. 36)
        </p>
      )}
    </Shell>
  );
}

/* ── Sternberg-Paradigma ── */

const ST_DATA = {
  treffer: [
    [1, 410],
    [3, 505],
    [4, 550],
    [5, 570],
    [6, 630],
  ],
  nieten: [
    [1, 460],
    [2, 475],
    [3, 510],
    [4, 530],
    [5, 580],
    [6, 620],
  ],
};

function Sternberg() {
  const [u, setU] = useState(4);
  const [model, setModel] = useState<'erschoepfend' | 'selbst'>('erschoepfend');
  const [degr, setDegr] = useState(false);
  const [showData, setShowData] = useState(true);
  const W = 420;
  const H = 250;
  const x = (v: number) => 50 + ((v - 0.5) / 6) * (W - 70);
  const y = (v: number) => H - 30 - ((v - 350) / 350) * (H - 50);
  const a = 397 + (degr ? 60 : 0);
  const niete = (n: number) => a + 38 * n;
  const treffer = (n: number) => (model === 'erschoepfend' ? a + 38 * n : a + 19 * n);
  const line = (f: (n: number) => number) => `M ${x(0.5)} ${y(f(0.5))} L ${x(6.5)} ${y(f(6.5))}`;
  const rt = niete(u);
  const ticks = useMemo(() => [400, 500, 600, 700], []);
  return (
    <Shell
      title="Interaktiv: Sternberg (1966) – RT = 397 + 38 · u"
      note="Datenpunkte grob aus Abb. 2 abgelesen. Die +60 ms für einen degradierten Reiz sind ein frei gewählter Beispielwert [Ergänzung]; laut LB S. 8 ändert sich nur der Achsenabschnitt, nicht die Steigung."
    >
      <div className="pk-split kg-split-wide">
        <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg" role="img" aria-label="Reaktionszeit nach Umfang der Ziffernmenge">
          {ticks.map((t) => (
            <g key={t}>
              <line className="pk-grid" x1={x(0.5)} x2={x(6.5)} y1={y(t)} y2={y(t)} />
              <text className="pk-t s" x={36} y={y(t) + 4}>
                {t}
              </text>
            </g>
          ))}
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <text key={n} className="pk-t s" x={x(n)} y={H - 12}>
              {n}
            </text>
          ))}
          <text className="pk-t s" x={x(3.5)} y={H} >
            Umfang der Ziffernmenge u
          </text>
          <text className="pk-t s" x={12} y={y(525)} transform={`rotate(-90 12 ${y(525)})`}>
            RT (ms)
          </text>
          <line className="pk-axis-line" x1={x(0.5)} x2={x(6.5)} y1={H - 30} y2={H - 30} />
          <line className="pk-axis-line" x1={x(0.5)} x2={x(0.5)} y1={20} y2={H - 30} />
          <path d={line(niete)} className="pk-line s1 pk-slope" />
          <path d={line(treffer)} className={'pk-line s2 pk-slope' + (model === 'erschoepfend' ? ' dashed' : '')} />
          {showData &&
            ST_DATA.nieten.map(([n, v]) => <circle key={`n${n}`} cx={x(n)} cy={y(v)} r={5} className="kg-pt-hollow" />)}
          {showData && ST_DATA.treffer.map(([n, v]) => <circle key={`t${n}`} cx={x(n)} cy={y(v)} r={5} className="kg-pt-fill" />)}
          <line className="pk-marker" x1={x(u)} x2={x(u)} y1={y(rt)} y2={H - 30} />
          <circle cx={x(u)} cy={y(rt)} r={6} className="pk-dot" />
        </svg>
        <div className="pk-detail">
          <label className="pk-slider">
            <span>
              Umfang der Ziffernmenge: <strong>u = {u}</strong>
            </span>
            <input type="range" min={1} max={6} value={u} onChange={(e) => setU(+e.target.value)} />
          </label>
          <p className="pk-calc">
            RT = {a} + 38 · {u} = <strong className="pk-big">{rt} ms</strong>
          </p>
          <Seg
            label="Suchmodell"
            value={model}
            onChange={setModel}
            options={[
              ['erschoepfend', 'erschöpfend (Befund)'],
              ['selbst', 'selbstabbrechend'],
            ]}
          />
          <p className="small">
            <span className="kg-legend s1" /> Nieten · <span className="kg-legend s2" /> Treffer{' '}
            {model === 'erschoepfend' ? (
              <>– beide Geraden fallen zusammen: gleiche Steigung → <strong>erschöpfende Suche</strong>.</>
            ) : (
              <>– Treffer-Gerade <strong>halb so steil</strong> (im Mittel u/2 Vergleiche). So sahen die Daten <strong>nicht</strong> aus.</>
            )}
          </p>
          <label className="ew-check">
            <input type="checkbox" checked={degr} onChange={(e) => setDegr(e.target.checked)} /> degradierter Reiz (Stimulusqualität)
          </label>
          <label className="ew-check">
            <input type="checkbox" checked={showData} onChange={(e) => setShowData(e.target.checked)} /> Datenpunkte zeigen
          </label>
          {degr && <p className="small">Die Gerade verschiebt sich nur nach oben – gleiche Steigung → der Faktor wirkt auf die <strong>Kodierung</strong>.</p>}
        </div>
      </div>
    </Shell>
  );
}

/* ── Geschichte: Zuordnen ── */

const GESCH_CATS = [
  { id: 'donders', label: 'Donders 1868' },
  { id: 'wundt', label: 'Wundt 1879' },
  { id: 'ebb', label: 'Ebbinghaus 1885' },
  { id: 'james', label: 'James 1890' },
  { id: 'beh', label: 'Behaviorismus ab ~1920' },
  { id: 'wende', label: 'Kognitive Wende 1950er' },
];
const GESCH: SortItem[] = [
  { text: 'Subtraktionsmethode', cat: 'donders', why: '(F. 32)' },
  { text: 'Reaktionszeit als Fenster zu geistigen Prozessen', cat: 'donders', why: '(F. 32)' },
  { text: 'erstes psychologisches Labor in Leipzig', cat: 'wundt', why: '(LB S. 3)' },
  { text: 'analytische Introspektion', cat: 'wundt', why: 'Geschulte Selbstbeobachtung. (LB S. 3)' },
  { text: 'Vergessenskurve', cat: 'ebb', why: '(F. 33)' },
  { text: 'Ersparnismethode', cat: 'ebb', why: '(F. 33)' },
  { text: '«Principles of Psychology»', cat: 'james', why: '(LB S. 5)' },
  { text: 'Beobachtung des eigenen Geistes ohne Experimente', cat: 'james', why: '(LB S. 5)' },
  { text: 'nur beobachtbares Verhalten', cat: 'beh', why: '(LB S. 5)' },
  { text: 'Ablehnung geistiger Vorgänge als Gegenstand', cat: 'beh', why: '(LB S. 5)' },
  { text: 'Computer als Modell → Informationsverarbeitung', cat: 'wende', why: '(F. 33); (LB S. 6)' },
  { text: 'Informationstheorie/KI und Linguistik', cat: 'wende', why: 'Nach Anderson 1950–1970. (LB S. 6)' },
];

function GeschichteSort() {
  return (
    <Shell title="Zuordnen üben: Wer oder was gehört wohin?">
      <SortTrainer categories={GESCH_CATS} items={GESCH} prompt="Wozu gehört" />
    </Shell>
  );
}
