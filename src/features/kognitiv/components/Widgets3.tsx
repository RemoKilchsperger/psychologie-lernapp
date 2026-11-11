import { useEffect, useMemo, useRef, useState } from 'react';
import { figures } from '../figures';
import { Rich } from './Rich';
import { Seg, Shell, SortTrainer, type SortItem } from './WidgetKit';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);

/* ═════════════════════ Kapitel 3: Mentale Vorstellungen ═════════════════════ */

/* ── Mentale Rotation: Selbstversuch ── */

const CELLS = [
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [1, 3],
];
const ANGLES = [0, 45, 90, 135, 180];

function Shape({ cx, cy, angle, mirror }: { cx: number; cy: number; angle: number; mirror: boolean }) {
  const s = 18;
  const mx = 1;
  const my = 1.5;
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${angle}) scale(${mirror ? -1 : 1} 1)`}>
      {CELLS.map(([x, y], i) => (
        <rect key={i} x={(x - mx - 0.5) * s} y={(y - my - 0.5) * s} width={s} height={s} className="kg-cube" />
      ))}
    </g>
  );
}

type RotTrial = { angle: number; mirror: boolean; base: number };

export function Rotation() {
  const [trials, setTrials] = useState<RotTrial[] | null>(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [res, setRes] = useState<{ angle: number; mirror: boolean; rt: number; ok: boolean }[]>([]);
  const [fb, setFb] = useState<boolean | null>(null);
  const t0 = useRef(0);

  useEffect(() => {
    if (!trials || i >= trials.length) return;
    setVisible(false);
    const id = window.setTimeout(() => {
      setVisible(true);
      t0.current = performance.now();
    }, 700);
    return () => window.clearTimeout(id);
  }, [trials, i]);

  const answer = (mirror: boolean) => {
    if (!trials || !visible) return;
    const tr = trials[i];
    const ok = mirror === tr.mirror;
    setRes((r) => [...r, { angle: tr.angle, mirror: tr.mirror, rt: performance.now() - t0.current, ok }]);
    setFb(ok);
    setI(i + 1);
  };

  useEffect(() => {
    if (!trials || i >= trials.length) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') answer(false);
      if (e.key === 'j' || e.key === 'J') answer(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const start = () => {
    const t: RotTrial[] = [];
    for (const a of ANGLES) for (const m of [false, true]) for (let r = 0; r < 2; r++) t.push({ angle: a, mirror: m, base: Math.floor(Math.random() * 4) * 90 });
    setTrials(shuffle(t));
    setI(0);
    setRes([]);
    setFb(null);
  };

  const done = trials && i >= trials.length;
  // wie Shepard & Metzler: nur korrekt beantwortete identische Paare
  const byAngle = ANGLES.map((a) => mean(res.filter((r) => r.angle === a && !r.mirror && r.ok).map((r) => r.rt)));
  const valid = ANGLES.map((a, k) => [a, byAngle[k]] as const).filter(([, v]) => !Number.isNaN(v));
  const fit = useMemo(() => {
    if (valid.length < 2) return null;
    const mx = mean(valid.map(([a]) => a));
    const my = mean(valid.map(([, v]) => v));
    const b = valid.reduce((s, [a, v]) => s + (a - mx) * (v - my), 0) / valid.reduce((s, [a]) => s + (a - mx) ** 2, 0);
    return { a: my - b * mx, b };
  }, [res.length]); // eslint-disable-line react-hooks/exhaustive-deps
  const ymax = Math.max(1500, ...valid.map(([, v]) => v)) * 1.1;
  const W = 360;
  const H = 200;
  const X = (a: number) => 46 + (a / 180) * (W - 66);
  const Y = (v: number) => H - 28 - (v / ymax) * (H - 44);

  return (
    <Shell
      title="Selbstversuch: Mentale Rotation"
      note="Vereinfachte 2-D-Version der Aufgabe von Shepard & Metzler (1971); sie verwendeten 3-D-Würfelobjekte (ca. 1 s bei 0° bis 4–4.5 s bei 180°). Ausgewertet werden wie dort nur richtig beantwortete identische Paare. (F. 4–5)"
    >
      {!trials ? (
        <div className="pk-detail">
          <p>
            Ist die rechte Figur <strong>dieselbe</strong> (nur gedreht) oder <strong>spiegelbildlich</strong>? Antworte so schnell wie möglich – Taste{' '}
            <kbd>F</kbd> = gleich, <kbd>J</kbd> = gespiegelt, oder per Klick. 20 Durchgänge.
          </p>
          <button className="btn small" onClick={start}>
            Test starten
          </button>
        </div>
      ) : !done ? (
        <div className="kg-rot">
          <div className="muted small">
            Durchgang {i + 1} / {trials.length}
            {fb !== null && <span className={'kg-fb ' + (fb ? 'ok' : 'bad')}> {fb ? '✓' : '✗'}</span>}
          </div>
          <svg viewBox="0 0 300 140" className="pk-svg kg-rot-svg" role="img" aria-label="Zwei Figuren zum Vergleichen">
            {visible ? (
              <>
                <Shape cx={80} cy={70} angle={trials[i].base} mirror={false} />
                <Shape cx={220} cy={70} angle={trials[i].base + trials[i].angle} mirror={trials[i].mirror} />
              </>
            ) : (
              <text className="pk-t big" x={150} y={76}>
                +
              </text>
            )}
          </svg>
          <div className="ew-chiprow" style={{ justifyContent: 'center' }}>
            <button className="btn" disabled={!visible} onClick={() => answer(false)}>
              <kbd>F</kbd> gleich
            </button>
            <button className="btn" disabled={!visible} onClick={() => answer(true)}>
              <kbd>J</kbd> gespiegelt
            </button>
          </div>
        </div>
      ) : (
        <div className="pk-split kg-split-wide">
          <svg viewBox={`0 0 ${W} ${H}`} className="pk-svg" role="img" aria-label="Deine Reaktionszeit nach Rotationswinkel">
            {[0, 500, 1000, 1500, 2000, 2500, 3000, 4000, 5000].filter((t) => t < ymax).map((t) => (
              <g key={t}>
                <line className="pk-grid" x1={X(0)} x2={X(180)} y1={Y(t)} y2={Y(t)} />
                <text className="pk-t s" x={26} y={Y(t) + 4}>
                  {(t / 1000).toLocaleString('de-CH')} s
                </text>
              </g>
            ))}
            {ANGLES.map((a) => (
              <text key={a} className="pk-t s" x={X(a)} y={H - 12}>
                {a}°
              </text>
            ))}
            <text className="pk-t s" x={X(90)} y={H} >
              Rotationswinkel
            </text>
            {fit && <line x1={X(0)} x2={X(180)} y1={Y(fit.a)} y2={Y(fit.a + fit.b * 180)} className="pk-line s2" />}
            {valid.map(([a, v]) => (
              <circle key={a} cx={X(a)} cy={Y(v)} r={6} className="pk-dot" />
            ))}
          </svg>
          <div className="pk-detail">
            <h4>Dein Ergebnis</h4>
            <p className="small">
              {res.filter((r) => r.ok).length} von {res.length} richtig.{' '}
              {fit ? (
                <>
                  Steigung: <strong>{Math.round(fit.b * 90)} ms pro 90°</strong>.{' '}
                  {fit.b > 0 ? 'Je grösser der Winkel, desto länger brauchst du – als würdest du die Figur im Kopf drehen.' : 'Kein Anstieg – mit mehr Durchgängen wird das Muster meist deutlicher.'}
                </>
              ) : (
                'Zu wenige gültige Durchgänge für eine Gerade.'
              )}
            </p>
            <p className="muted small">
              <Rich text="Lineare Beziehung = Rotation verläuft **analog zu einer physikalischen Drehung**. Bei Shepard & Metzler war die Tiefe nicht langsamer als die Ebene → 3-D-Repräsentation; Aktivität im Parietalkortex. (F. 5)" />
            </p>
            <button className="btn small" onClick={start}>
              Nochmals
            </button>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ── Imagery Debate ── */

const DEB_CATS = [
  { id: 'prop', label: 'Propositional (Pylyshyn)', color: '#7c3aed' },
  { id: 'bild', label: 'Bildhaft (Kosslyn)', color: '#db2777' },
];
const DEB: SortItem[] = [
  { text: 'Relation/Prädikat + Argumente', cat: 'prop', why: 'z. B. in(Katze, Kommode). (F. 6–8)' },
  { text: 'Bilderleben = Epiphänomen', cat: 'prop', why: 'Pylyshyn (1973). (LB S. 75)' },
  { text: 'auch Abstraktes darstellbar', cat: 'prop', why: '«Ursachen der Erwärmung». (F. 6–8)' },
  { text: 'verwandt mit semantischen Netzwerken', cat: 'prop', why: '(F. 6)' },
  { text: 'enthält analoge Information wie den Farbton', cat: 'bild', why: '(F. 6–8)' },
  { text: 'Distanzen im Bild entsprechen realen Distanzen', cat: 'bild', why: '(F. 6–8)' },
  { text: 'Bilder sind funktional relevant', cat: 'bild', why: '(F. 6–8)' },
  { text: 'Lea (1975): RT hängt von der Anzahl Zwischenobjekte ab', cat: 'prop', why: '→ listen-/netzwerkartige Repräsentation. (F. 12–13)' },
  { text: 'Bobrow: Links in einer strukturellen Beschreibung', cat: 'prop', why: '(F. 14)' },
  { text: 'Kosslyn et al. (1978): Scanzeit linear zur Distanz bei kontrollierten Zwischenobjekten', cat: 'bild', why: '(F. 15–16)' },
  { text: 'Dror, Kosslyn & Waag (1993): Wahrnehmung und Vorstellung auf ähnlichen Mechanismen', cat: 'bild', why: '(F. 19)' },
];

export function ImageryDebate() {
  const [mode, setMode] = useState<'kontrast' | 'trainer'>('kontrast');
  return (
    <Shell title="Die Imagery Debate: «Die Katze ist in der Kommode»">
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['kontrast', 'Zwei Formate'],
          ['trainer', 'Argumente zuordnen'],
        ]}
      />
      {mode === 'kontrast' ? (
        <div className="ew-compare n2">
          <div className="ew-compare-item" style={{ ['--ch' as string]: '#7c3aed' }}>
            <h4>Propositional (Pylyshyn)</h4>
            <svg viewBox="0 0 220 110" className="pk-svg" role="img" aria-label="Proposition in(Katze, Kommode)">
              <rect x={80} y={8} width={60} height={30} rx={15} className="kg-node" />
              <text className="pk-t b" x={110} y={28}>
                in
              </text>
              <line x1={95} y1={38} x2={55} y2={72} className="pk-edge" />
              <line x1={125} y1={38} x2={165} y2={72} className="pk-edge" />
              <text className="pk-t s" x={64} y={52}>
                Agens
              </text>
              <text className="pk-t s" x={160} y={52}>
                Ort
              </text>
              <rect x={20} y={72} width={70} height={28} rx={6} className="kg-node soft" />
              <rect x={130} y={72} width={70} height={28} rx={6} className="kg-node soft" />
              <text className="pk-t" x={55} y={90}>
                Katze
              </text>
              <text className="pk-t" x={165} y={90}>
                Kommode
              </text>
            </svg>
            <p className="small">
              <em>in(Katze, Kommode)</em> – abstrakt, sprachähnlich. Sagt nichts über Grösse, Farbe oder Lage im Raum. Bilderleben = <strong>Epiphänomen</strong>.
            </p>
          </div>
          <div className="ew-compare-item" style={{ ['--ch' as string]: '#db2777' }}>
            <h4>Bildhaft / räumlich (Kosslyn)</h4>
            <svg viewBox="0 0 220 110" className="pk-svg" role="img" aria-label="Bild einer Katze in einer Kommode">
              <rect x={50} y={10} width={120} height={92} rx={4} className="kg-g-frame strong" />
              <line x1={50} y1={56} x2={170} y2={56} className="kg-g-line" />
              <rect x={58} y={62} width={104} height={34} className="kg-drawer" />
              <ellipse cx={110} cy={84} rx={22} ry={10} className="kg-cat" />
              <circle cx={130} cy={74} r={8} className="kg-cat" />
              <path d="M 124 68 l 2 -7 l 4 5 M 132 67 l 3 -7 l 3 6" className="kg-cat-ear" />
              <path d="M 88 86 q -14 -2 -12 -14" className="kg-cat-ear" />
            </svg>
            <p className="small">
              Das Format <strong>ähnelt dem Objekt</strong>: Grösse, Lage und Distanzen sind analog enthalten – und funktional relevant für Aufgaben wie das
              Scannen.
            </p>
          </div>
        </div>
      ) : (
        <SortTrainer categories={DEB_CATS} items={DEB} prompt="Welche Position stützt bzw. beschreibt:" />
      )}
    </Shell>
  );
}

/* ── Scanning: Boot ── */

export function Scanning() {
  const [view, setView] = useState<'bild' | 'netz'>('bild');
  const [target, setTarget] = useState<'luke' | 'anker'>('anker');
  const P = { motor: [62, 78], luke: [168, 64], anker: [298, 90] } as const;
  const dist = Math.round(Math.hypot(P[target][0] - P.motor[0], P[target][1] - P.motor[1]));
  const links = target === 'luke' ? 3 : 4;
  const nodes =
    target === 'luke' ? ['Motor', 'Heck', 'Rumpf', 'Luke'] : ['Motor', 'Heck', 'Rumpf', 'Bug', 'Anker'];
  return (
    <Shell
      title="Interaktiv: Scannen über das Boot (Kosslyn, 1973) – und Bobrows Gegenerklärung"
      note="Die Zwischenknoten im Netz (Heck, Rumpf, Bug) sind ausgedacht [Ergänzung]; laut Folie sind es Motor → Luke 3 Links und Motor → Anker 4 Links. (F. 10–14)"
    >
      <div className="ew-chiprow pk-mb">
        <Seg
          label="Erklärung"
          value={view}
          onChange={setView}
          options={[
            ['bild', 'Bild (Kosslyn)'],
            ['netz', 'Netz (Bobrow)'],
          ]}
        />
        <Seg
          label="Ziel"
          value={target}
          onChange={setTarget}
          options={[
            ['luke', 'Motor → Luke'],
            ['anker', 'Motor → Anker'],
          ]}
        />
      </div>
      {view === 'bild' ? (
        <svg viewBox="0 0 340 130" className="pk-svg kg-boat" role="img" aria-label="Boot mit Motor, Luke und Anker">
          <path d="M 40 70 L 300 70 L 326 46 L 312 104 L 70 104 Z" className="kg-hull" />
          <rect x={120} y={40} width={110} height={30} rx={4} className="kg-cabin" />
          <rect x={46} y={64} width={30} height={34} rx={3} className="kg-part" />
          <circle cx={168} cy={55} r={9} className="kg-part" />
          <path d="M 298 78 l 0 22 m -9 -6 q 9 10 18 0" className="kg-anchor" />
          <text className="pk-t s b" x={61} y={122}>
            Motor
          </text>
          <text className="pk-t s b" x={168} y={30}>
            Luke
          </text>
          <text className="pk-t s b" x={300} y={122}>
            Anker
          </text>
          <line x1={P.motor[0]} y1={P.motor[1]} x2={P[target][0]} y2={P[target][1] - 10} className="kg-scan" />
        </svg>
      ) : (
        <svg viewBox="0 0 340 90" className="pk-svg" role="img" aria-label="Semantisches Netz">
          {nodes.map((n, k) => {
            const x = 30 + k * (280 / (nodes.length - 1));
            return (
              <g key={n}>
                {k > 0 && <line x1={x - 280 / (nodes.length - 1) + 26} x2={x - 26} y1={45} y2={45} className="pk-edge strong" />}
                <rect x={x - 26} y={30} width={52} height={30} rx={15} className={'kg-node' + (k === 0 || k === nodes.length - 1 ? ' l' : ' soft')} />
                <text className="pk-t s b" x={x} y={49}>
                  {n}
                </text>
              </g>
            );
          })}
          <text className="pk-t s" x={170} y={82}>
            {links} Links
          </text>
        </svg>
      )}
      <div className="pk-detail">
        {view === 'bild' ? (
          <p>
            Fokus auf den Motor, dann «scannen» zum {target === 'luke' ? 'Bullauge (Luke)' : 'Anker'}: Distanz ≈ <strong>{dist} Einheiten</strong>. Vorhersage:
            Scanzeit steigt mit der <strong>Distanz</strong> – der Anker dauert länger. So war es auch (Kosslyn, 1973). Wird das Bild als Ganzes betrachtet,
            verläuft die Kurve flach.
          </p>
        ) : (
          <p>
            Bobrow: Das Boot ist als <strong>strukturelle Beschreibung</strong> gespeichert. Motor → {target === 'luke' ? 'Luke' : 'Anker'} ={' '}
            <strong>{links} Links</strong>. Mehr Links = längere Suche → <strong>dieselbe Vorhersage ohne Bild</strong>; das Bilderleben ist ein Epiphänomen.
          </p>
        )}
        <p className="small muted">
          <Rich text="Weil beide dasselbe vorhersagen, trennte **Lea (1975)** Distanz und Anzahl Zwischenobjekte (→ RT folgt den Zwischenobjekten), und **Kosslyn et al. (1978)** kontrollierten die Zwischenobjekte (→ RT linear zur Distanz). (F. 12–16)" />
        </p>
      </div>
    </Shell>
  );
}

/* ── V1-Topographie ── */

export function V1Karte() {
  const [size, setSize] = useState<'klein' | 'mittel' | 'gross'>('klein');
  const ext = { klein: 0.25, mittel: 0.55, gross: 0.9 }[size];
  const fs = { klein: 16, mittel: 34, gross: 58 }[size];
  // Streifen: posterior rechts (x=300), anterior links (x=60)
  const x0 = 300;
  const x1 = 300 - ext * 240;
  return (
    <Shell
      title="Interaktiv: V1 ist topographisch – grosses Bild, weiter anterior"
      note="Schema: Fovea posterior, Peripherie anterior (F. 24–26). Kosslyn et al. (1993, 1995), PET: Aktivierung wandert mit der Grösse des Vorstellungsbilds nach anterior. Aber: Aktivierung ≠ Funktion. (F. 27–33); (LB S. 83)"
    >
      <Seg
        label="Grösse des Vorstellungsbilds"
        value={size}
        onChange={setSize}
        options={[
          ['klein', 'klein'],
          ['mittel', 'mittel'],
          ['gross', 'gross'],
        ]}
      />
      <svg viewBox="0 0 400 150" className="pk-svg wide" role="img" aria-label="Vorstellungsbild und Aktivierung in V1">
        <g transform="translate(70 75)">
          {[60, 40, 20].map((r) => (
            <circle key={r} r={r} className="kg-vfring" />
          ))}
          <text className="pk-t s" y={-64}>
            Gesichtsfeld
          </text>
          <text className="pk-t b kg-imgletter" y={fs * 0.36} style={{ fontSize: fs }}>
            A
          </text>
          <text className="pk-t s" y={74}>
            Fovea = Mitte
          </text>
        </g>
        <text className="pk-t big" x={165} y={80}>
          →
        </text>
        <g>
          <rect x={190} y={60} width={200} height={30} rx={15} className="kg-v1strip" />
          <rect x={190 + (x1 - 60) * (200 / 240)} y={60} width={(x0 - x1) * (200 / 240)} height={30} rx={15} className="kg-v1act" />
          <text className="pk-t s" x={205} y={110}>
            anterior
          </text>
          <text className="pk-t s" x={375} y={110}>
            posterior
          </text>
          <text className="pk-t s" x={290} y={50}>
            Area 17 (V1)
          </text>
          <text className="pk-t s" x={375} y={124}>
            (Fovea)
          </text>
          <text className="pk-t s" x={205} y={124}>
            (Peripherie)
          </text>
        </g>
      </svg>
      <p className="pk-detail">
        {size === 'klein' && 'Kleines Bild → nur der foveanahe, posteriore Teil von V1 ist aktiv.'}
        {size === 'mittel' && 'Mittleres Bild → die Aktivierung reicht weiter nach anterior.'}
        {size === 'gross' && 'Grosses Bild → es «füllt» auch die Peripherie → Aktivierung bis weit anterior.'} Die Vorhersage der topographischen Karte wurde bestätigt.
      </p>
    </Shell>
  );
}

/* ── Evidenz-Leiter ── */

const EVIDENZ = [
  { title: 'Verhalten', who: 'Shepard & Metzler; Kosslyn (Scanning)', shows: 'Lineare RT-Muster passen zu analogen Bildern – aber propositionale Gegenerklärungen sind möglich (Lea, Bobrow).', hyp: '–' },
  { title: 'fMRI', who: 'Ganis, Thompson & Kosslyn (2004)', shows: 'Grosse, nicht vollständige Überlappung von Wahrnehmung und Vorstellung.', hyp: 'A (gleiche Areale)' },
  { title: 'PET', who: 'Kosslyn et al. (1993, 1995)', shows: 'V1 wird topographisch genutzt (klein posterior, gross anterior). Aber: Aktivierung ≠ Funktion.', hyp: 'A' },
  { title: 'MVPA', who: 'Johnson & Johnson (2014)', shows: 'Vorgestellte Szenen sind aus dem Aktivierungsmuster dekodierbar (AUC 56 % vs. 63 % bei Wahrnehmung; Zufall 50 %).', hyp: 'A' },
  { title: 'TMS', who: 'Kosslyn et al. (1999)', shows: 'Echte TMS über Area 17 verlangsamt Wahrnehmung und Vorstellung → V1 ist ursächlich beteiligt.', hyp: 'B (funktionell bedeutsam)' },
  { title: 'Patienten', who: 'R. M. (Farah et al., 1993) / C. K. (Behrmann et al., 1994)', shows: 'Doppelte Dissoziation → Wahrnehmung und Vorstellung sind nicht identisch.', hyp: 'Einschränkung' },
];

export function EvidenzLeiter() {
  const [sel, setSel] = useState(4);
  const e = EVIDENZ[sel];
  return (
    <Shell
      title="Überblick: Welche Methode beantwortet welche Frage?"
      note="Hypothese A: Wahrnehmung und Vorstellung aktivieren dieselben Areale, insb. V1. Hypothese B: V1 ist dabei funktionell bedeutsam. (F. 21); (LB S. 83–84)"
    >
      <div className="pk-steps kg-steps6">
        {EVIDENZ.map((x, k) => (
          <button key={x.title} className={'pk-step' + (k === sel ? ' on' : k < sel ? ' done' : '')} onClick={() => setSel(k)}>
            {x.title}
          </button>
        ))}
      </div>
      <dl className="pk-kv pk-detail">
        <dt>Studie</dt>
        <dd>{e.who}</dd>
        <dt>Befund</dt>
        <dd>{e.shows}</dd>
        <dt>Hypothese</dt>
        <dd>
          <strong>{e.hyp}</strong>
        </dd>
      </dl>
    </Shell>
  );
}

/* ── Doppelte Dissoziation: Tabelle ausfüllen ── */

const DISS_TRUTH: Record<string, boolean> = { 'rm-w': true, 'rm-v': false, 'ck-w': false, 'ck-v': true };

export function Dissoziation() {
  const [cells, setCells] = useState<Record<string, boolean | undefined>>({});
  const [checked, setChecked] = useState(false);
  const keys = Object.keys(DISS_TRUTH);
  const complete = keys.every((k) => cells[k] !== undefined);
  const nOk = keys.filter((k) => cells[k] === DISS_TRUTH[k]).length;
  const cell = (k: string) => {
    const v = cells[k];
    const res = checked ? (v === DISS_TRUTH[k] ? ' pk-ok' : ' pk-bad') : '';
    return (
      <button
        className={'kg-diss-cell' + res}
        disabled={checked}
        onClick={() => setCells({ ...cells, [k]: v === undefined ? true : v ? false : undefined })}
        aria-label={`${k}: ${v === undefined ? 'leer' : v ? 'OK' : 'gestört'}`}
      >
        {v === undefined ? '?' : v ? '✓ OK' : '✗ gestört'}
      </button>
    );
  };
  return (
    <Shell title="Aus dem Gedächtnis: Fülle die doppelte Dissoziation aus" note="Klicke auf ein Feld: ? → OK → gestört. (F. 39)">
      <div className="kg-diss">
        <div />
        <div className="kg-sdt-h">Wahrnehmung</div>
        <div className="kg-sdt-h">Vorstellung</div>
        <div className="kg-sdt-h">R. M. (Farah et al., 1993)</div>
        {cell('rm-w')}
        {cell('rm-v')}
        <div className="kg-sdt-h">C. K. (Behrmann et al., 1994)</div>
        {cell('ck-w')}
        {cell('ck-v')}
      </div>
      <div className="ew-chiprow pk-mt">
        {!checked ? (
          <button className="btn small" disabled={!complete} onClick={() => setChecked(true)}>
            Prüfen
          </button>
        ) : (
          <>
            <span>
              <strong>{nOk} / 4</strong> richtig.{' '}
              {nOk === 4
                ? 'R. M. erkennt und zeichnet ab, kann aber nicht aus dem Gedächtnis zeichnen; C. K. hat eine visuelle Agnosie, zeichnet aber aus dem Gedächtnis.'
                : 'R. M. = Vorstellung gestört; C. K. = Wahrnehmung gestört.'}
            </span>
            <button
              className="ew-link small"
              onClick={() => {
                setCells({});
                setChecked(false);
              }}
            >
              nochmals
            </button>
          </>
        )}
      </div>
    </Shell>
  );
}

/* ═════════════════════ Kapitel 4: Aufmerksamkeit ═════════════════════ */

const DICH_CATS = [
  { id: 'ja', label: 'bemerkt', color: '#16a34a' },
  { id: 'nein', label: 'nicht bemerkt', color: '#dc2626' },
];
const DICH: SortItem[] = [
  { text: 'Stimme vs. Geräusch', cat: 'ja', why: 'Physikalisches Merkmal. (F. 7)' },
  { text: 'männliche vs. weibliche Stimme', cat: 'ja', why: 'Physikalisches Merkmal. (F. 7)' },
  { text: 'Inhalt der Nachricht', cat: 'nein', why: 'Bedeutung. (F. 7)' },
  { text: 'Sprache (z. B. Deutsch statt Englisch)', cat: 'nein', why: 'Bedeutung. (F. 7)' },
  { text: 'vorwärts vs. rückwärts abgespielt', cat: 'nein', why: 'Bedeutung. (F. 7)' },
  { text: '35-mal wiederholte Wörter (Moray)', cat: 'nein', why: '(F. 7)' },
  { text: 'eigener Name (Moray, ca. 33 % der Durchgänge)', cat: 'ja', why: 'Cocktailparty-Effekt – Problem für Broadbent. (F. 9)' },
];

export function Dichotisch() {
  return (
    <Shell title="Zuordnen üben: Was kommt vom unbeachteten Ohr an? (Cherry, 1953; Moray, 1959)">
      <SortTrainer categories={DICH_CATS} items={DICH} prompt="Im unbeachteten Ohr:" />
    </Shell>
  );
}

/* ── Selektionstheorien ── */

type Theorie = 'broadbent' | 'treisman' | 'deutsch';

const THEO_CATS = [
  { id: 'broadbent', label: 'Broadbent (Filter)', color: '#0891b2' },
  { id: 'treisman', label: 'Treisman (Dämpfung)', color: '#7c3aed' },
  { id: 'deutsch', label: 'Deutsch & Deutsch (spät)', color: '#ea580c' },
];
const THEO: SortItem[] = [
  { text: 'Alles-oder-nichts-Filter', cat: 'broadbent', why: '(F. 8)' },
  { text: 'nur ein Kanal passiert', cat: 'broadbent', why: '(F. 8)' },
  { text: 'unbeachteter Input wird blockiert', cat: 'broadbent', why: '(F. 12)' },
  { text: 'unbeachteter Input wird abgeschwächt, nicht blockiert', cat: 'treisman', why: '(F. 11)' },
  { text: '«Dictionary Units» mit Schwellen', cat: 'treisman', why: '(F. 11)' },
  { text: 'erklärt den Cocktailparty-Effekt über tiefe Schwellen', cat: 'treisman', why: '(F. 11)' },
  { text: 'durch Treisman & Riley (1969) gestützt', cat: 'treisman', why: '76.4 vs. 33.4 %. (F. 16)' },
  { text: 'alles wird semantisch verarbeitet', cat: 'deutsch', why: '(F. 13)' },
  { text: 'Engpass auf der Reaktionsstufe (vor KZG/Reaktion)', cat: 'deutsch', why: '(F. 13)' },
  { text: 'durch Treisman & Riley (1969) widerlegt', cat: 'deutsch', why: 'Sagt A = B voraus. (F. 16)' },
  { text: 'gestützt durch MacKay (1973) und Eich (1984)', cat: 'deutsch', why: 'Belege für späte Selektion. (F. 14–15)' },
  { text: 'moderne Version: Lachter et al. (2004)', cat: 'broadbent', why: 'Ohne Aufmerksamkeit keine semantische Verarbeitung. (F. 19–21)' },
  { text: 'Problem: Gray & Wedderburn («Dear Aunt Jane»)', cat: 'broadbent', why: '(F. 8, 10)' },
];

const THEO_TEXT: Record<Theorie, string> = {
  broadbent:
    '**Filtertheorie (1958):** Alles-oder-nichts-Filter **nach dem sensorischen Gedächtnis, vor der Bedeutungsanalyse**; Auswahl nach physikalischen Merkmalen (Tonhöhe, Lautstärke, Ohr). Nur ein Kanal passiert. (F. 8)',
  treisman:
    '**Dämpfungstheorie (1960, 1964):** Der unbeachtete Kanal wird **abgeschwächt**, nicht blockiert. In den **Dictionary Units** haben wichtige Wörter tiefe Schwellen – sie werden auch gedämpft erkannt. Immer noch **frühe** Selektion. (F. 11)',
  deutsch:
    '**Späte Auswahl (1963):** **Alle** Inputs werden bis zur Bedeutung verarbeitet; erst ein Gewichtungs-/Bedeutungsfilter **vor KZG/Reaktion** wählt aus. (F. 13)',
};

export function Selektion() {
  const [t, setT] = useState<Theorie>('broadbent');
  const [mode, setMode] = useState<'modell' | 'trainer'>('modell');
  const [name, setName] = useState(false);
  const early = t !== 'deutsch';
  // Positionen
  const sg = [24, 110];
  const filt = early ? 128 : 300;
  const proc = early ? [168, 290] : [140, 280];
  const kzg = [340, 430];
  const bEnd = t === 'broadbent' ? filt : t === 'treisman' ? kzg[0] : filt;
  const nameReaches = t === 'treisman' || t === 'deutsch';
  const fig = { broadbent: figures.broadbent, treisman: figures.treisman, deutsch: figures.deutsch }[t];
  const [showFig, setShowFig] = useState(false);
  return (
    <Shell title="Interaktiv: Frühe oder späte Selektion?" note="Vereinfachtes Schema nach F. 8, 11, 13 (Originalfolien als Abb. 12–14 darunter).">
      <div className="ew-chiprow pk-mb">
        <Seg
          label="Ansicht"
          value={mode}
          onChange={setMode}
          options={[
            ['modell', 'Modelle'],
            ['trainer', 'Zuordnen üben'],
          ]}
        />
      </div>
      {mode === 'trainer' ? (
        <SortTrainer categories={THEO_CATS} items={THEO} prompt="Welche Theorie:" />
      ) : (
        <>
          <Seg
            label="Theorie"
            value={t}
            onChange={setT}
            options={[
              ['broadbent', 'Broadbent 1958'],
              ['treisman', 'Treisman 1964'],
              ['deutsch', 'Deutsch & Deutsch 1963'],
            ]}
          />
          <svg viewBox="0 0 500 160" className="pk-svg kg-sel" role="img" aria-label="Verarbeitungskette mit Filter">
            <rect x={sg[0]} y={30} width={sg[1] - sg[0]} height={100} rx={6} className="kg-stage" />
            <text className="pk-t s b" x={(sg[0] + sg[1]) / 2} y={22}>
              sensor. Gedächtnis
            </text>
            <rect x={proc[0]} y={30} width={proc[1] - proc[0]} height={100} rx={6} className="kg-stage" />
            <text className="pk-t s b" x={(proc[0] + proc[1]) / 2} y={22}>
              {t === 'treisman' ? 'Dictionary Units' : 'Bedeutungsanalyse'}
            </text>
            <rect x={kzg[0]} y={30} width={kzg[1] - kzg[0]} height={100} rx={6} className="kg-stage" />
            <text className="pk-t s b" x={(kzg[0] + kzg[1]) / 2} y={22}>
              KZG
            </text>
            <text className="pk-t s b" x={470} y={84}>
              Reaktion
            </text>
            {/* Filter */}
            <rect x={filt} y={26} width={26} height={108} rx={8} className={'kg-filter ' + t} />
            <text className="pk-t s" x={filt + 13} y={150}>
              {t === 'broadbent' ? 'Filter (alles/nichts)' : t === 'treisman' ? 'Dämpfung' : 'Bedeutungsfilter'}
            </text>
            {/* Strom A */}
            <line x1={4} x2={kzg[1] - 10} y1={62} y2={62} className="kg-stream a" />
            <text className="pk-t s b" x={14} y={54} style={{ textAnchor: 'start' }}>
              A beachtet
            </text>
            {/* Strom B */}
            <line x1={4} x2={early ? filt : bEnd} y1={100} y2={100} className="kg-stream b" />
            {t === 'treisman' && <line x1={filt + 26} x2={kzg[0] - 4} y1={100} y2={100} className="kg-stream b thin" />}
            {name && nameReaches && <line x1={early ? filt + 26 : filt + 26} x2={kzg[1] - 10} y1={112} y2={112} className="kg-stream name" />}
            <text className="pk-t s b" x={14} y={122} style={{ textAnchor: 'start' }}>
              B unbeachtet{name ? ' (mit eigenem Namen)' : ''}
            </text>
          </svg>
          <label className="ew-check">
            <input type="checkbox" checked={name} onChange={(e) => setName(e.target.checked)} /> Im unbeachteten Ohr fällt der <strong>eigene Name</strong>
          </label>
          <div className="pk-detail">
            <p>
              <Rich text={THEO_TEXT[t]} />
            </p>
            {name && (
              <p className="small">
                {t === 'broadbent' && '⚠ Der Name müsste am Filter hängen bleiben – der Cocktailparty-Effekt ist ein Problem für Broadbent.'}
                {t === 'treisman' && '✓ Der Name hat eine tiefe Schwelle → das gedämpfte Signal genügt, er wird bemerkt.'}
                {t === 'deutsch' && '✓ Alles wurde semantisch verarbeitet; der Name ist wichtig und wird vom Bedeutungsfilter durchgelassen.'}
              </p>
            )}
            <button className="ew-link small" onClick={() => setShowFig(!showFig)}>
              {showFig ? 'Originalfolie ausblenden' : 'Originalfolie zeigen'}
            </button>
            {showFig && <img src={fig.src} alt={fig.title} className="kg-inline-fig" />}
          </div>
        </>
      )}
    </Shell>
  );
}

/* ── Treisman & Riley: Vorhersagen ── */

type Pred = 'gt' | 'eq' | 'zero';
const PRED_LABEL: Record<Pred, string> = { gt: 'A > B (B aber > 0)', eq: 'A = B', zero: 'nur A, B ≈ 0' };
const PRED_TRUE: Record<Theorie, Pred> = { broadbent: 'zero', treisman: 'gt', deutsch: 'eq' };

export function TreismanRiley() {
  const [p, setP] = useState<Partial<Record<Theorie, Pred>>>({});
  const [show, setShow] = useState(false);
  const ths: [Theorie, string][] = [
    ['broadbent', 'Broadbent'],
    ['treisman', 'Treisman'],
    ['deutsch', 'Deutsch & Deutsch'],
  ];
  return (
    <Shell
      title="Entscheidungstest: Treisman & Riley (1969)"
      note="Ziffernfolgen in beiden Ohren; bei einem Zielbuchstaben das Beschatten stoppen. A = Zielbuchstabe im beachteten, B = im unbeachteten Ohr. Die Vorhersage für Broadbent ist abgeleitet [Ergänzung]; Treisman A > B und Deutsch & Deutsch A = B stehen auf F. 16."
    >
      <p className="small">Was sagt jede Theorie für die Entdeckungsrate vorher?</p>
      <div className="kg-pred">
        {ths.map(([t, l]) => (
          <div key={t} className="kg-pred-row">
            <strong>{l}</strong>
            <div className="ew-chiprow">
              {(Object.keys(PRED_LABEL) as Pred[]).map((v) => {
                let c = 'pk-cat';
                if (show) {
                  if (v === PRED_TRUE[t]) c += ' correct';
                  else if (v === p[t]) c += ' wrong';
                } else if (p[t] === v) c += ' kg-picked';
                return (
                  <button key={v} className={c} disabled={show} onClick={() => setP({ ...p, [t]: v })}>
                    {PRED_LABEL[v]}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!show ? (
        <button className="btn small pk-mt" disabled={ths.some(([t]) => !p[t])} onClick={() => setShow(true)}>
          Ergebnis aufdecken
        </button>
      ) : (
        <div className="pk-detail">
          {[
            ['A (beachtet)', 76.4],
            ['B (unbeachtet)', 33.4],
          ].map(([l, v]) => (
            <div key={l as string} className="ew-bar-row">
              <span>{l}</span>
              <span className="ew-bar-track">
                <span className="ew-bar-fill" style={{ width: `${v}%`, background: 'var(--ch)' }} />
              </span>
              <span>{(v as number).toLocaleString('de-CH')} %</span>
            </div>
          ))}
          <p className="small pk-mt">
            <strong>76.4 % vs. 33.4 %:</strong> A ≠ B → <strong>Deutsch & Deutsch widerlegt</strong>; B deutlich über null → passt zur <strong>Dämpfung</strong>.
            Treisman ist adäquater. (F. 16){' '}
            <button
              className="ew-link small"
              onClick={() => {
                setP({});
                setShow(false);
              }}
            >
              nochmals
            </button>
          </p>
        </div>
      )}
    </Shell>
  );
}

/* ── Perceptual Load ── */

const LOAD_RT = { einfach: { kein: 478, irr: 538 }, schwierig: { kein: 694, irr: 713 } } as const;

export function PerceptualLoad() {
  const [load, setLoad] = useState<'einfach' | 'schwierig'>('einfach');
  const [dist, setDist] = useState(true);
  const letters = load === 'einfach' ? ['N', 'o', 'o', 'o', 'o', 'o'] : ['N', 'M', 'K', 'Z', 'H', 'W'];
  const diff = LOAD_RT[load].irr - LOAD_RT[load].kein;
  return (
    <Shell title="Interaktiv: Perceptual Load (Forster & Lavie, 2008)" note="Werte von F. 17 (Abb. 15). Comic-Figur schematisch nachgezeichnet.">
      <div className="ew-chiprow pk-mb">
        <Seg
          label="Aufgabe"
          value={load}
          onChange={setLoad}
          options={[
            ['einfach', 'einfach (geringe Belastung)'],
            ['schwierig', 'schwierig (hohe Belastung)'],
          ]}
        />
        <label className="ew-check">
          <input type="checkbox" checked={dist} onChange={(e) => setDist(e.target.checked)} /> irrelevanter Distraktor
        </label>
      </div>
      <div className="pk-split">
        <svg viewBox="0 0 200 200" className="pk-svg kg-load" role="img" aria-label="Suchdisplay">
          <rect width={200} height={200} rx={10} className="kg-screen" />
          {letters.map((l, k) => {
            const a = (k / 6) * Math.PI * 2 - Math.PI / 2;
            return (
              <text key={k} x={100 + 48 * Math.cos(a)} y={118 + 48 * Math.sin(a)} className="kg-screen-t">
                {l}
              </text>
            );
          })}
          {dist && (
            <g transform="translate(150 18)">
              <rect width={38} height={40} rx={6} className="kg-comic" />
              <circle cx={12} cy={15} r={4} className="kg-comic-eye" />
              <circle cx={26} cy={15} r={4} className="kg-comic-eye" />
              <path d="M 10 27 q 9 8 18 0" className="kg-comic-mouth" />
            </g>
          )}
        </svg>
        <div className="pk-detail">
          {(['einfach', 'schwierig'] as const).map((l) => (
            <div key={l} className={'kg-load-group' + (l === load ? ' on' : '')}>
              <div className="small">
                <strong>{l}</strong> {l === 'einfach' ? '(***)' : '(n. s.)'}
              </div>
              {(['kein', 'irr'] as const).map((d) => (
                <div key={d} className="ew-bar-row">
                  <span className="small">{d === 'kein' ? 'kein Distraktor' : 'irrelevanter'}</span>
                  <span className="ew-bar-track">
                    <span
                      className="ew-bar-fill"
                      style={{ width: `${((LOAD_RT[l][d] - 400) / 350) * 100}%`, background: d === 'irr' ? 'var(--ew-s1)' : 'var(--ew-s2)', opacity: l === load && (d === 'irr') === dist ? 1 : 0.45 }}
                    />
                  </span>
                  <span className="small">{LOAD_RT[l][d]} ms</span>
                </div>
              ))}
            </div>
          ))}
          <p className="small pk-mt">
            {load === 'einfach'
              ? `Geringe Belastung: Der Distraktor kostet ${diff} ms (signifikant) – freie Kapazität verarbeitet Irrelevantes automatisch mit (wie späte Selektion).`
              : `Hohe Belastung: nur ${diff} ms (n. s.) – die Kapazität ist ausgeschöpft, Irrelevantes wird nicht verarbeitet (wie frühe Selektion).`}
          </p>
        </div>
      </div>
    </Shell>
  );
}

/* ── Leakage vs. Slippage ── */

export function Slippage() {
  const [soa, setSoa] = useState<55 | 110>(55);
  const priming = soa === 55 ? 0 : 1;
  return (
    <Shell
      title="Interaktiv: Leakage oder Slippage? (Lachter, Forster & Ruthruff, 2004)"
      note="Prime an irrelevanter (unbeachteter) Position. Laut F. 19–21: bei 55 ms kein Priming, ab 110 ms Priming. Zahlenwerte für das Priming stehen nicht auf der Folie – die Balken sind qualitativ."
    >
      <Seg
        label="Darbietungsdauer des Primes"
        value={String(soa) as '55' | '110'}
        onChange={(v) => setSoa(+v as 55 | 110)}
        options={[
          ['55', '55 ms'],
          ['110', '110 ms'],
        ]}
      />
      <div className="ew-compare n2">
        <div className={'ew-compare-item' + (soa === 55 ? ' kg-dim' : '')} style={{ ['--ch' as string]: '#dc2626' }}>
          <h4>Leakage</h4>
          <p className="small">Info sickert <strong>ohne</strong> Aufmerksamkeit durch → Priming bei <strong>jeder</strong> Dauer, auch bei 55 ms.</p>
          <p className="small">
            Vorhersage bei {soa} ms: <strong>Priming</strong>
          </p>
        </div>
        <div className="ew-compare-item" style={{ ['--ch' as string]: '#16a34a' }}>
          <h4>Slippage</h4>
          <p className="small">
            Die Aufmerksamkeit <strong>rutscht kurz</strong> auf den Prime – das braucht Zeit → Priming nur bei <strong>längerer</strong> Darbietung.
          </p>
          <p className="small">
            Vorhersage bei {soa} ms: <strong>{soa === 55 ? 'kein Priming' : 'Priming'}</strong>
          </p>
        </div>
      </div>
      <div className="pk-detail">
        <div className="ew-bar-row">
          <span>Befund bei {soa} ms</span>
          <span className="ew-bar-track">
            <span className="ew-bar-fill" style={{ width: `${priming ? 70 : 2}%`, background: 'var(--ch)' }} />
          </span>
          <span>{priming ? 'Priming' : 'keins'}</span>
        </div>
        <p className="small pk-mt">
          {soa === 55 ? (
            <>
              <strong>Kein Priming bei 55 ms</strong> – Leakage hätte hier Priming vorhergesagt. Also gibt es <strong>ohne Aufmerksamkeit keine semantische
              Verarbeitung</strong>.
            </>
          ) : (
            <>
              <strong>Priming ab 110 ms</strong> – genug Zeit, dass die Aufmerksamkeit kurz auf den Prime rutscht (Slippage). Zusammen mit 55 ms:{' '}
              <strong>moderne Version von Broadbent</strong>.
            </>
          )}
        </p>
      </div>
    </Shell>
  );
}
