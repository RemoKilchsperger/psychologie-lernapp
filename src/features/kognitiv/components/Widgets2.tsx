import { useMemo, useState, type ReactNode } from 'react';
import { Rich } from './Rich';
import { Seg, Shell, SortTrainer, keyAct, type SortItem } from './WidgetKit';

/* ═════════════════════ Kapitel 2: Wahrnehmung ═════════════════════ */

/* ── Probleme der Wahrnehmung ── */

const PROB_CATS = [
  { id: 'amb', label: 'Ambiguität' },
  { id: 'inv', label: 'Invarianz' },
  { id: 'miss', label: 'Fehlende Information' },
  { id: 'gen', label: 'Generalisierung' },
];
const PROB: SortItem[] = [
  { text: 'eins-zu-viele: ein Bild, mehrere mögliche Objekte', cat: 'amb', why: '(F. 9–10)' },
  { text: 'viele-zu-eins: verschiedene Ansichten, ein Objekt', cat: 'inv', why: '(F. 9–10)' },
  { text: 'Verdeckung', cat: 'miss', why: '(F. 9–10)' },
  { text: 'verschiedene Individuen → eine Kategorie', cat: 'gen', why: '(F. 9–10)' },
  { text: 'Ein Stuhl von vorne, von der Seite und von oben ist immer derselbe Stuhl', cat: 'inv', why: 'Beispiel ausgedacht [Ergänzung].' },
  { text: 'Dalmatiner, Pudel und Dackel sind alle «Hund»', cat: 'gen', why: 'Beispiel ausgedacht [Ergänzung].' },
  { text: 'Ein Velo steht halb hinter einer Hecke', cat: 'miss', why: 'Beispiel ausgedacht [Ergänzung].' },
  { text: 'Ein kleines nahes und ein grosses fernes Objekt erzeugen dasselbe Netzhautbild', cat: 'amb', why: 'Beispiel ausgedacht [Ergänzung].' },
  { text: 'Die eigene Tasse wird bei Kerzenlicht und bei Sonne erkannt', cat: 'inv', why: 'Beispiel ausgedacht [Ergänzung].' },
];

export function ProblemeSort() {
  return (
    <Shell title="Zuordnen üben: Die vier Probleme der Wahrnehmung">
      <SortTrainer categories={PROB_CATS} items={PROB} prompt="Welches Problem:" />
    </Shell>
  );
}

/* ── Sehbahn ── */

type Feld = 'links' | 'rechts' | 'beide';
type Struktur = 'chiasma' | 'cgl' | 'v1' | 'sc' | 'netzhaut' | null;

const STRUKTUR_INFO: Record<Exclude<Struktur, null>, { title: string; text: string }> = {
  netzhaut: {
    title: 'Netzhaut',
    text: 'Bildaufnehmend. Licht durchquert alle Schichten (Ganglien-, Amakrin-, Bipolar-, Horizontalzellen) bis zu den Rezeptoren; die Axone der ca. **800 000 Ganglienzellen** bilden den Sehnerv. (F. 15–16)',
  },
  chiasma: {
    title: 'Chiasma opticum',
    text: 'Hier kreuzen die **nasalen** Fasern; die temporalen bleiben auf ihrer Seite → jedes Gesichtsfeld landet in der **gegenüberliegenden** Hemisphäre. (F. 17)',
  },
  cgl: {
    title: 'CGL / LGN (Thalamus)',
    text: '6 Schichten: 4 dorsale **parvozelluläre**, 2 ventrale **magnozelluläre**. Linkes CGL: Schichten **2, 3, 5** vom ipsilateralen (linken), **1, 4, 6** vom kontralateralen Auge. (F. 18)',
  },
  v1: {
    title: 'V1 (BA 17, Area striata)',
    text: '**Retinotopie** und **kortikale Vergrösserung** der Fovea; organisiert in Hypersäulen (2 × 2 mm). Von hier Was-Bahn (ventral → temporal) und Wo-Bahn (dorsal → parietal). (F. 19–20)',
  },
  sc: {
    title: 'Colliculus superior',
    text: 'Alternativer Weg vom Sehnerv (neben dem CGL). (F. 17)',
  },
};

export function Sehbahn() {
  const [feld, setFeld] = useState<Feld>('links');
  const [s, setS] = useState<Struktur>('chiasma');
  const L = feld !== 'rechts';
  const R = feld !== 'links';
  // linkes Gesichtsfeld → rechte Netzhauthälften (L-Auge nasal, R-Auge temporal) → rechte Hemisphäre
  const cls = (on: boolean, c: 'l' | 'r') => 'kg-fiber ' + c + (on ? '' : ' off');
  const pick = (v: Struktur) => () => setS(v);
  const hit = (v: Exclude<Struktur, null>) => ({
    className: 'pk-hit' + (s === v ? ' on' : ''),
    tabIndex: 0,
    role: 'button',
    onClick: pick(v),
    onKeyDown: keyAct(pick(v)),
    'aria-label': STRUKTUR_INFO[v].title,
  });
  return (
    <Shell title="Interaktiv: Die Sehbahn (Blick von oben)" note="Schematisch. Klicke auf eine Struktur für Details. Merke: linkes Gesichtsfeld → rechte Hemisphäre. (F. 17); (LB S. 29)">
      <Seg
        label="Gesichtsfeld"
        value={feld}
        onChange={setFeld}
        options={[
          ['links', 'linkes Gesichtsfeld'],
          ['rechts', 'rechtes Gesichtsfeld'],
          ['beide', 'beide'],
        ]}
      />
      <div className="pk-split kg-split-wide">
        <svg viewBox="0 0 400 380" className="pk-svg kg-sehbahn" role="img" aria-label="Schema der Sehbahn">
          {/* Gesichtsfeld */}
          <rect x={40} y={8} width={160} height={34} rx={6} className={'kg-vf l' + (L ? '' : ' off')} />
          <rect x={200} y={8} width={160} height={34} rx={6} className={'kg-vf r' + (R ? '' : ' off')} />
          <text className="pk-t b" x={120} y={30}>
            linkes Gesichtsfeld
          </text>
          <text className="pk-t b" x={280} y={30}>
            rechtes Gesichtsfeld
          </text>
          {/* Lichtstrahlen */}
          {L && (
            <>
              <path d="M 90 42 L 140 86 L 158 132" className="kg-ray l" />
              <path d="M 170 42 L 260 86 L 278 132" className="kg-ray l" />
            </>
          )}
          {R && (
            <>
              <path d="M 230 42 L 140 86 L 122 132" className="kg-ray r" />
              <path d="M 310 42 L 260 86 L 242 132" className="kg-ray r" />
            </>
          )}
          {/* Augen */}
          <g {...hit('netzhaut')}>
            <circle cx={140} cy={110} r={28} className="kg-eye" />
            <circle cx={260} cy={110} r={28} className="kg-eye" />
            <path d="M 114 122 A 28 28 0 0 0 166 122" className="kg-retina" />
            <path d="M 234 122 A 28 28 0 0 0 286 122" className="kg-retina" />
          </g>
          <text className="pk-t s" x={86} y={118}>
            temporal
          </text>
          <text className="pk-t s" x={200} y={112}>
            nasal | nasal
          </text>
          <text className="pk-t s" x={314} y={118}>
            temporal
          </text>
          <text className="pk-t s b" x={86} y={104}>
            L-Auge
          </text>
          <text className="pk-t s b" x={314} y={104}>
            R-Auge
          </text>
          {/* Fasern: rechte Hemisphäre (linkes Feld) */}
          <path d="M 158 134 Q 175 160 200 176 Q 228 196 248 236" className={cls(L, 'l')} />
          <path d="M 278 134 Q 262 165 222 182 Q 240 205 252 236" className={cls(L, 'l')} />
          {/* Fasern: linke Hemisphäre (rechtes Feld) */}
          <path d="M 122 134 Q 138 165 178 182 Q 160 205 148 236" className={cls(R, 'r')} />
          <path d="M 242 134 Q 225 160 200 176 Q 172 196 152 236" className={cls(R, 'r')} />
          {/* Chiasma */}
          <g {...hit('chiasma')}>
            <rect x={170} y={164} width={60} height={26} rx={13} className="kg-node" />
          </g>
          <text className="pk-t s b" x={200} y={181}>
            Chiasma
          </text>
          {/* Colliculus */}
          <g {...hit('sc')}>
            <rect x={300} y={200} width={86} height={26} rx={6} className="kg-node soft" />
          </g>
          <text className="pk-t s" x={343} y={217}>
            Colliculus sup.
          </text>
          <path d="M 262 236 Q 285 220 300 214" className="kg-fiber thin" />
          {/* CGL */}
          <g {...hit('cgl')}>
            <rect x={116} y={236} width={64} height={30} rx={8} className={'kg-node' + (R ? ' r' : '')} />
            <rect x={220} y={236} width={64} height={30} rx={8} className={'kg-node' + (L ? ' l' : '')} />
          </g>
          <text className="pk-t s b" x={148} y={255}>
            CGL links
          </text>
          <text className="pk-t s b" x={252} y={255}>
            CGL rechts
          </text>
          <path d="M 148 266 L 148 320" className={cls(R, 'r')} />
          <path d="M 252 266 L 252 320" className={cls(L, 'l')} />
          {/* V1 */}
          <g {...hit('v1')}>
            <rect x={100} y={320} width={96} height={40} rx={10} className={'kg-node' + (R ? ' r' : '')} />
            <rect x={204} y={320} width={96} height={40} rx={10} className={'kg-node' + (L ? ' l' : '')} />
          </g>
          <text className="pk-t s b" x={148} y={344}>
            V1 links
          </text>
          <text className="pk-t s b" x={252} y={344}>
            V1 rechts
          </text>
          <text className="pk-t s" x={148} y={376}>
            linke Hemisphäre
          </text>
          <text className="pk-t s" x={252} y={376}>
            rechte Hemisphäre
          </text>
        </svg>
        <div className="pk-detail">
          <p>
            {feld === 'links' && (
              <>
                Das <strong>linke</strong> Gesichtsfeld fällt auf die <strong>rechten</strong> Netzhauthälften: beim linken Auge die <strong>nasale</strong>, beim
                rechten die <strong>temporale</strong>. Die nasalen Fasern kreuzen im Chiasma → alles landet in der <strong>rechten Hemisphäre</strong>.
              </>
            )}
            {feld === 'rechts' && (
              <>
                Das <strong>rechte</strong> Gesichtsfeld fällt auf die <strong>linken</strong> Netzhauthälften (rechtes Auge nasal, linkes Auge temporal) → nach
                der Kreuzung in die <strong>linke Hemisphäre</strong>.
              </>
            )}
            {feld === 'beide' && (
              <>
                Jede Hemisphäre «sieht» das <strong>gegenüberliegende</strong> Gesichtsfeld – mit Fasern aus <strong>beiden</strong> Augen (deshalb ipsi- und
                kontralaterale Schichten im CGL).
              </>
            )}
          </p>
          {s && (
            <>
              <h4>{STRUKTUR_INFO[s].title}</h4>
              <p>
                <Rich text={STRUKTUR_INFO[s].text} />
              </p>
            </>
          )}
        </div>
      </div>
    </Shell>
  );
}

/* ── Rezeptives Feld ── */

type Reiz = 'aus' | 'teil' | 'zentrum' | 'zteil' | 'zganz' | 'umfeld';
const REIZE: [Reiz, string][] = [
  ['aus', 'kein Licht'],
  ['teil', 'Teil des Zentrums'],
  ['zentrum', 'ganzes Zentrum'],
  ['zteil', 'Zentrum + Teil Umfeld'],
  ['zganz', 'Zentrum + ganzes Umfeld'],
  ['umfeld', 'nur Umfeld'],
];
const RATE_ON: Record<Reiz, number> = { aus: 10, teil: 24, zentrum: 44, zteil: 30, zganz: 11, umfeld: 3 };
const RATE_OFF: Record<Reiz, number> = { aus: 10, teil: 5, zentrum: 2, zteil: 6, zganz: 10, umfeld: 40 };
const RATE_TEXT: Record<Reiz, string> = {
  aus: 'Spontanrate – die Zelle feuert auch ohne Reiz.',
  teil: 'erhöht',
  zentrum: 'maximal',
  zteil: 'sinkt wieder (Umfeld hemmt)',
  zganz: 'etwa Spontanrate (Erregung und Hemmung heben sich auf)',
  umfeld: 'unter Spontanrate',
};

function spikes(rate: number, seed: number) {
  const out: number[] = [];
  let s = seed;
  for (let k = 0; k < rate; k++) {
    s = (s * 9301 + 49297) % 233280;
    out.push(4 + (s / 233280) * 252);
  }
  return out.sort((a, b) => a - b);
}

export function RezeptivesFeld() {
  const [view, setView] = useState<'zelle' | 'balken' | 'kante'>('zelle');
  const [typ, setTyp] = useState<'on' | 'off'>('on');
  const [reiz, setReiz] = useState<Reiz>('zentrum');
  const [angle, setAngle] = useState(0);
  const [edge, setEdge] = useState<'links' | 'mitte' | 'rechts' | 'hell'>('mitte');
  const rate = (typ === 'on' ? RATE_ON : RATE_OFF)[reiz];
  const sp = useMemo(() => spikes(rate, rate * 7 + 3), [rate]);

  const light = (() => {
    switch (reiz) {
      case 'aus':
        return null;
      case 'teil':
        return <circle cx={100} cy={100} r={14} className="kg-light" />;
      case 'zentrum':
        return <circle cx={100} cy={100} r={30} className="kg-light" />;
      case 'zteil':
        return <circle cx={100} cy={100} r={48} className="kg-light" />;
      case 'zganz':
        return <circle cx={100} cy={100} r={72} className="kg-light" />;
      case 'umfeld':
        return <path d="M 100 28 A 72 72 0 1 1 99.9 28 Z M 100 70 A 30 30 0 1 0 100.1 70 Z" className="kg-light" fillRule="evenodd" />;
    }
  })();

  // Balkendetektor: 4 On-Zentren in einer senkrechten Reihe
  const centers = [45, 85, 125, 165];
  const rad = (angle * Math.PI) / 180;
  const covered = centers.filter((cy) => Math.abs((cy - 105) * Math.sin(rad)) < 10).length;

  const edgeX = { links: 40, mitte: 100, rechts: 160, hell: 260 }[edge];
  const edgeResp = { links: 15, mitte: 100, rechts: 20, hell: 12 }[edge];

  return (
    <Shell
      title="Interaktiv: Rezeptive Felder und Detektoren"
      note="Antwortverlauf nach F. 23; die Feuerraten-Zahlen sind nur zur Veranschaulichung [Ergänzung]. Verschaltung zu Balken- und Kantendetektoren nach F. 24–25."
    >
      <Seg
        label="Ansicht"
        value={view}
        onChange={setView}
        options={[
          ['zelle', 'Ganglienzelle'],
          ['balken', 'Balkendetektor'],
          ['kante', 'Kantendetektor'],
        ]}
      />
      {view === 'zelle' && (
        <>
          <Seg
            label="Zelltyp"
            value={typ}
            onChange={setTyp}
            options={[
              ['on', 'On-Zentrum / Off-Umfeld'],
              ['off', 'Off-Zentrum / On-Umfeld'],
            ]}
          />
          <div className="pk-split">
            <svg viewBox="0 0 200 200" className="pk-svg" role="img" aria-label="Rezeptives Feld mit Lichtreiz">
              <circle cx={100} cy={100} r={72} className={'kg-rf-s ' + typ} />
              <circle cx={100} cy={100} r={30} className={'kg-rf-c ' + typ} />
              {light}
              <text className="pk-t big b" x={100} y={106}>
                {typ === 'on' ? '+' : '−'}
              </text>
              {[0, 90, 180, 270].map((a) => (
                <text key={a} className="pk-t b" x={100 + 52 * Math.cos((a * Math.PI) / 180)} y={104 + 52 * Math.sin((a * Math.PI) / 180)}>
                  {typ === 'on' ? '−' : '+'}
                </text>
              ))}
            </svg>
            <div className="pk-detail">
              <div className="kg-reize">
                {REIZE.map(([r, l]) => (
                  <button key={r} className={'ew-chipbtn' + (reiz === r ? ' on' : '')} onClick={() => setReiz(r)}>
                    {l}
                  </button>
                ))}
              </div>
              <svg viewBox="0 0 260 46" className="pk-svg kg-spikes" aria-label={`Feuerrate ${rate}`}>
                <line x1={0} x2={260} y1={40} y2={40} className="pk-axis-line" />
                {sp.map((xx, k) => (
                  <line key={k} x1={xx} x2={xx} y1={8} y2={40} className="kg-spike" />
                ))}
              </svg>
              <p className="small">
                Feuerrate: <strong>{rate}</strong> Spikes (Spontanrate 10) –{' '}
                {typ === 'on' ? RATE_TEXT[reiz] : reiz === 'aus' ? RATE_TEXT.aus : 'umgekehrt: Licht im Zentrum hemmt, Licht im Umfeld erregt.'}
              </p>
              <p className="muted small">
                <Rich text="Kuffler (1953): Solche Zellen melden **Kontrast**, nicht absolute Helligkeit. CGL-Zellen verhalten sich gleich. (F. 22)" />
              </p>
            </div>
          </div>
        </>
      )}
      {view === 'balken' && (
        <div className="pk-split">
          <svg viewBox="0 0 200 210" className="pk-svg" role="img" aria-label="Balkendetektor">
            {centers.map((cy) => (
              <g key={cy}>
                <circle cx={100} cy={cy} r={19} className="kg-rf-s on small" />
                <circle cx={100} cy={cy} r={8} className="kg-rf-c on" />
              </g>
            ))}
            <rect x={91} y={0} width={18} height={210} className="kg-light" transform={`rotate(${angle} 100 105)`} />
          </svg>
          <div className="pk-detail">
            <label className="pk-slider">
              <span>
                Orientierung des Lichtbalkens: <strong>{angle}°</strong>
              </span>
              <input type="range" min={0} max={90} value={angle} onChange={(e) => setAngle(+e.target.value)} />
            </label>
            <div className="ew-bar-row">
              <span>V1-Zelle</span>
              <span className="ew-bar-track">
                <span className="ew-bar-fill" style={{ width: `${(covered / 4) * 100}%`, background: 'var(--ch)' }} />
              </span>
              <span>{covered}/4</span>
            </div>
            <p className="small">
              Vier <strong>On-Zentren in einer Reihe</strong> speisen eine V1-Zelle. Sie feuert maximal, wenn der Balken alle Zentren trifft – also nur bei{' '}
              <strong>einer bestimmten Orientierung</strong> (hier senkrecht). (F. 24–25)
            </p>
          </div>
        </div>
      )}
      {view === 'kante' && (
        <div className="pk-split">
          <svg viewBox="0 0 200 210" className="pk-svg" role="img" aria-label="Kantendetektor">
            <rect x={0} y={0} width={Math.min(edgeX, 200)} height={210} className="kg-light" />
            {centers.map((cy) => (
              <g key={cy}>
                <circle cx={78} cy={cy} r={19} className="kg-rf-s on small" />
                <circle cx={78} cy={cy} r={8} className="kg-rf-c on" />
                <circle cx={122} cy={cy} r={19} className="kg-rf-s off small" />
                <circle cx={122} cy={cy} r={8} className="kg-rf-c off" />
              </g>
            ))}
            <text className="pk-t s b" x={78} y={204}>
              On-Off
            </text>
            <text className="pk-t s b" x={122} y={204}>
              Off-On
            </text>
          </svg>
          <div className="pk-detail">
            <div className="kg-reize">
              {(
                [
                  ['links', 'Kante links der Reihen'],
                  ['mitte', 'Kante zwischen den Reihen'],
                  ['rechts', 'Kante rechts der Reihen'],
                  ['hell', 'alles hell'],
                ] as const
              ).map(([v, l]) => (
                <button key={v} className={'ew-chipbtn' + (edge === v ? ' on' : '')} onClick={() => setEdge(v)}>
                  {l}
                </button>
              ))}
            </div>
            <div className="ew-bar-row">
              <span>V1-Zelle</span>
              <span className="ew-bar-track">
                <span className="ew-bar-fill" style={{ width: `${edgeResp}%`, background: 'var(--ch)' }} />
              </span>
              <span>{edgeResp > 50 ? 'max' : 'tief'}</span>
            </div>
            <p className="small">
              Eine Reihe <strong>On-Off</strong> neben einer Reihe <strong>Off-On</strong>: Maximal, wenn Licht auf die On-Zentren und Dunkel auf die
              Off-Zentren fällt – also genau bei einer <strong>Hell-Dunkel-Kante</strong> dazwischen. (F. 24–25)
            </p>
          </div>
        </div>
      )}
    </Shell>
  );
}

/* ── Merkmalspfade: Was oder Wo? ── */

const PFADE = [
  { id: 'magno', title: 'magnozellulär', route: 'V1 4b → V2 dicke Streifen', fn: 'Bewegung, hoher Kontrast', bahn: 'Wo' },
  { id: 'blob', title: 'parvozellulär – Blobs', route: 'V2 dünne Streifen', fn: 'Farbe', bahn: 'Was' },
  { id: 'inter', title: 'parvozellulär – Interblobs', route: 'V2 helle Streifen', fn: 'Orientierung, Position', bahn: 'Was' },
];
const WASWO_CATS = [
  { id: 'was', label: '«Was»-Bahn', color: '#2563eb' },
  { id: 'wo', label: '«Wo»-Bahn', color: '#ea580c' },
];
const WASWO: SortItem[] = [
  { text: 'ventral', cat: 'was', why: '(F. 20)' },
  { text: 'dorsal', cat: 'wo', why: '(F. 20)' },
  { text: 'Temporallappen', cat: 'was', why: '(F. 20)' },
  { text: 'Parietallappen', cat: 'wo', why: '(F. 20)' },
  { text: 'Objekterkennung', cat: 'was', why: '(F. 20)' },
  { text: 'Lokalisation', cat: 'wo', why: '(F. 20)' },
  { text: 'Pfad für Handlungen (Milner & Goodale, 1995)', cat: 'wo', why: '(F. 20)' },
  { text: 'magnozellulärer Pfad', cat: 'wo', why: 'Bewegung, Kontrast. (F. 26)' },
  { text: 'Farbe (Blobs)', cat: 'was', why: '(F. 26)' },
  { text: 'Bewegung', cat: 'wo', why: '(F. 26)' },
  { text: 'Orientierung (Interblobs)', cat: 'was', why: '(F. 26)' },
  { text: 'V2 dicke Streifen', cat: 'wo', why: '(F. 26)' },
  { text: 'V2 dünne Streifen', cat: 'was', why: '(F. 26)' },
];

export function Merkmalspfade() {
  const [mode, setMode] = useState<'pfade' | 'trainer'>('pfade');
  return (
    <Shell
      title="Merkmalskarten: getrennte Pfade (Livingstone & Hubel, 1988)"
      note="Achtung: «dorsal/ventral» bei den CGL-Schichten ist nur die Lage. Die magnozellulären Schichten liegen ventral im CGL, speisen aber die dorsale Wo-Bahn! (F. 18, 26); (LB S. 31)"
    >
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['pfade', 'Pfade'],
          ['trainer', 'Was oder Wo? üben'],
        ]}
      />
      {mode === 'pfade' ? (
        <div className="kg-pfade">
          {PFADE.map((p) => (
            <div key={p.id} className={'kg-pfad ' + (p.bahn === 'Wo' ? 'wo' : 'was')}>
              <span className="kg-pfad-step">{p.title}</span>
              <span className="kg-arrow">→</span>
              <span className="kg-pfad-step">{p.route}</span>
              <span className="kg-arrow">→</span>
              <span className="kg-pfad-step">{p.fn}</span>
              <span className="kg-arrow">→</span>
              <strong className="kg-pfad-bahn">«{p.bahn}»</strong>
            </div>
          ))}
        </div>
      ) : (
        <SortTrainer categories={WASWO_CATS} items={WASWO} prompt="Gehört zur" />
      )}
    </Shell>
  );
}

/* ── Gestaltprinzipien ── */

type GKey = 'keine' | 'naehe' | 'farbe' | 'groesse' | 'orient' | 'schicksal' | 'symm' | 'parallel' | 'verlauf' | 'geschl' | 'region' | 'verbund';

const G_INFO: Record<GKey, { label: string; letter?: string; text: string; neu?: boolean }> = {
  keine: { label: 'keine Gruppierung', letter: 'A', text: 'Gleich abständige, gleiche Punkte: keine bevorzugte Gruppierung – Ausgangslage.' },
  naehe: { label: 'Nähe', letter: 'B', text: 'Nahe beieinanderliegende Elemente werden zusammen gesehen.' },
  farbe: { label: 'Ähnlichkeit (Farbe)', letter: 'C', text: 'Gleichfarbige Elemente werden gruppiert.' },
  groesse: { label: 'Ähnlichkeit (Grösse)', letter: 'D', text: 'Gleich grosse Elemente werden gruppiert.' },
  orient: { label: 'Ähnlichkeit (Orientierung)', letter: 'E', text: 'Gleich orientierte Elemente werden gruppiert.' },
  schicksal: { label: 'Gemeinsames Schicksal', letter: 'F', text: 'Elemente, die sich gemeinsam (in dieselbe Richtung) bewegen, gehören zusammen.' },
  symm: { label: 'Symmetrie', letter: 'G', text: 'Spiegelsymmetrische Linien werden zu Paaren gruppiert.' },
  parallel: { label: 'Parallelität', letter: 'H', text: 'Parallel verlaufende Linien werden zusammen gesehen.' },
  verlauf: { label: 'Glatter Verlauf (Kontinuität)', letter: 'I', text: 'Gekreuzte Linien werden als zwei glatt durchlaufende Linien gesehen (1–4 / 3–2), nicht als zwei Knicke.' },
  geschl: { label: 'Geschlossenheit / gute Gestalt', letter: 'J', text: 'Linien, die eine geschlossene Figur bilden, werden zusammen gesehen.' },
  region: { label: 'Gemeinsame Region', text: 'Elemente innerhalb einer gemeinsamen umrandeten Fläche gehören zusammen (Palmer, 1992).', neu: true },
  verbund: { label: 'Verbundenheit', text: 'Durch Linien verbundene Elemente gehören zusammen (Palmer & Rock, 1994). Schlägt die Nähe!', neu: true },
};
const G_KEYS = Object.keys(G_INFO) as GKey[];

function Dots({ xs, r = 7, fill }: { xs: number[]; r?: number | ((i: number) => number); fill?: (i: number) => string }) {
  return (
    <>
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={40} r={typeof r === 'function' ? r(i) : r} className={fill ? fill(i) : 'kg-g-dot'} />
      ))}
    </>
  );
}

const EVEN = [20, 52, 84, 116, 148, 180, 212, 244];
const PAIRS = [20, 42, 84, 106, 148, 170, 212, 234];

function GestaltDrawing({ k, lines = true }: { k: GKey; lines?: boolean }) {
  let content: ReactNode = null;
  const wave = (x: number, flip = 1, amp = 7) => `M ${x} 6 q ${amp * flip} 8.5 0 17 q ${-amp * flip} 8.5 0 17 q ${amp * flip} 8.5 0 17 q ${-amp * flip} 8.5 0 17`;
  switch (k) {
    case 'keine':
      content = <Dots xs={EVEN} />;
      break;
    case 'naehe':
      content = <Dots xs={PAIRS} />;
      break;
    case 'farbe':
      content = <Dots xs={EVEN} fill={(i) => (Math.floor(i / 2) % 2 ? 'kg-g-dot hollow' : 'kg-g-dot')} />;
      break;
    case 'groesse':
      content = <Dots xs={EVEN} r={(i) => (Math.floor(i / 2) % 2 ? 10 : 5)} />;
      break;
    case 'orient':
      content = (
        <>
          {EVEN.map((x, i) =>
            Math.floor(i / 2) % 2 ? <rect key={i} x={x - 3} y={28} width={6} height={24} className="kg-g-dot" /> : <rect key={i} x={x - 12} y={37} width={24} height={6} className="kg-g-dot" />,
          )}
        </>
      );
      break;
    case 'schicksal':
      content = (
        <>
          {EVEN.map((x, i) => {
            const up = Math.floor(i / 2) % 2 === 1;
            return (
              <g key={i} className={up ? 'kg-move-up' : 'kg-move-down'}>
                <circle cx={x} cy={40} r={7} className="kg-g-dot" />
                <path d={up ? `M ${x} 28 l 0 -16 m -5 5 l 5 -5 l 5 5` : `M ${x} 52 l 0 16 m -5 -5 l 5 5 l 5 -5`} className="kg-g-line" />
              </g>
            );
          })}
        </>
      );
      break;
    case 'symm':
      content = (
        <>
          {[24, 84, 144, 204].map((x) => (
            <g key={x}>
              <path d={wave(x, 1)} className="kg-g-line" />
              <path d={wave(x + 26, -1)} className="kg-g-line" />
            </g>
          ))}
        </>
      );
      break;
    case 'parallel':
      content = (
        <>
          {[24, 84, 144, 204].map((x) => (
            <g key={x}>
              <path d={wave(x, 1)} className="kg-g-line" />
              <path d={wave(x + 22, 1)} className="kg-g-line" />
            </g>
          ))}
        </>
      );
      break;
    case 'verlauf':
      content = (
        <>
          <path d="M 70 8 Q 132 40 194 72" className="kg-g-line" />
          <path d="M 70 72 Q 132 40 194 8" className="kg-g-line" />
          <path d="M 70 8 C 120 30 120 50 70 72" className="kg-g-line ghost" />
          {[
            ['1', 62, 10],
            ['2', 202, 10],
            ['3', 62, 76],
            ['4', 202, 76],
          ].map(([t, x, y]) => (
            <text key={t as string} className="pk-t s b" x={x as number} y={y as number}>
              {t}
            </text>
          ))}
        </>
      );
      break;
    case 'geschl':
      content = (
        <>
          <path d="M 100 8 C 80 30 80 50 100 72" className="kg-g-line" />
          <path d="M 164 8 C 184 30 184 50 164 72" className="kg-g-line" />
          <path d="M 100 8 C 120 22 144 22 164 8" className="kg-g-line" />
          <path d="M 100 72 C 120 58 144 58 164 72" className="kg-g-line" />
        </>
      );
      break;
    case 'region':
      content = (
        <>
          {[0, 2, 4, 6].map((i) => (
            <rect key={i} x={EVEN[i] - 13} y={24} width={58} height={32} rx={16} className="kg-g-region" />
          ))}
          <Dots xs={EVEN} />
        </>
      );
      break;
    case 'verbund':
      content = (
        <>
          {lines && [1, 3, 5].map((i) => <line key={i} x1={PAIRS[i]} x2={PAIRS[i + 1]} y1={40} y2={40} className="kg-g-line" />)}
          <Dots xs={PAIRS} />
        </>
      );
      break;
  }
  return (
    <svg viewBox="0 0 264 80" className="pk-svg kg-gestalt-svg" role="img" aria-label={G_INFO[k].label}>
      <rect x={1} y={1} width={262} height={78} rx={6} className="kg-g-frame" />
      {content}
    </svg>
  );
}

export function Gestalt() {
  const [mode, setMode] = useState<'galerie' | 'konkurrenz' | 'trainer'>('galerie');
  const [sel, setSel] = useState<GKey>('naehe');
  const [lines, setLines] = useState(true);
  const [round, setRound] = useState(0);
  const [pick, setPick] = useState<GKey | null>(null);
  const [score, setScore] = useState({ ok: 0, n: 0 });
  const quizKeys = G_KEYS.filter((k) => k !== 'keine');
  const target = useMemo(() => quizKeys[Math.floor(Math.random() * quizKeys.length)], [round]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Shell
      title="Interaktiv: Gestaltprinzipien"
      note="Klassische Prinzipien A–J nach F. 36 (vgl. Abb. 5); neuere Prinzipien nach F. 37. Alle gelten nur «ceteris paribus» und können konkurrieren. (F. 38–39)"
    >
      <Seg
        label="Ansicht"
        value={mode}
        onChange={setMode}
        options={[
          ['galerie', 'Galerie'],
          ['konkurrenz', 'Prinzipien konkurrieren'],
          ['trainer', 'Erkennen üben'],
        ]}
      />
      {mode === 'galerie' && (
        <>
          <div className="kg-g-list">
            {G_KEYS.map((k) => (
              <button key={k} className={'ew-chipbtn' + (sel === k ? ' on' : '')} onClick={() => setSel(k)}>
                {G_INFO[k].letter ? `${G_INFO[k].letter} ` : '✦ '}
                {G_INFO[k].label}
              </button>
            ))}
          </div>
          <GestaltDrawing k={sel} />
          <p className="pk-detail">
            <strong>{G_INFO[sel].label}</strong>
            {G_INFO[sel].neu && <span className="ew-chip small">neueres Prinzip</span>}: {G_INFO[sel].text}
          </p>
        </>
      )}
      {mode === 'konkurrenz' && (
        <>
          <GestaltDrawing k="verbund" lines={lines} />
          <label className="ew-check pk-mt">
            <input type="checkbox" checked={lines} onChange={(e) => setLines(e.target.checked)} /> Verbindungslinien zeigen
          </label>
          <p className="pk-detail">
            {lines ? (
              <>
                Nach <strong>Nähe</strong> müssten die eng stehenden Punkte Paare bilden – du siehst aber die <strong>verbundenen</strong> Punkte als Einheit:
                <strong> Verbundenheit schlägt Nähe</strong>. (F. 38) Darum gilt jedes Prinzip nur <em>ceteris paribus</em>; wie die Prinzipien integriert
                werden, ist ungelöst (Quinlan & Wilton, 1998). (F. 39)
              </>
            ) : (
              <>Ohne Linien gruppiert die <strong>Nähe</strong>: Paare aus den eng stehenden Punkten. Schalte die Linien ein!</>
            )}
          </p>
        </>
      )}
      {mode === 'trainer' && (
        <>
          <div className="pk-trainer-top">
            <span className="ew-trainer-count">
              {score.ok} / {score.n} richtig
            </span>
          </div>
          <GestaltDrawing k={target} />
          <p className="pk-trainer-q">Welches Prinzip ist dargestellt?</p>
          <div className="pk-trainer-cats">
            {quizKeys.map((k) => {
              let c = 'pk-cat';
              if (pick) {
                if (k === target) c += ' correct';
                else if (k === pick) c += ' wrong';
              }
              return (
                <button
                  key={k}
                  className={c}
                  disabled={!!pick}
                  onClick={() => {
                    setPick(k);
                    setScore((s) => ({ ok: s.ok + (k === target ? 1 : 0), n: s.n + 1 }));
                  }}
                >
                  {G_INFO[k].label}
                </button>
              );
            })}
          </div>
          {pick && (
            <div className={'ew-trainer-fb ' + (pick === target ? 'ok' : 'bad')}>
              <strong>{pick === target ? 'Richtig!' : `Falsch – das ist «${G_INFO[target].label}».`}</strong> {G_INFO[target].text}
              <div>
                <button
                  className="btn small"
                  autoFocus
                  onClick={() => {
                    setPick(null);
                    setRound((r) => r + 1);
                  }}
                >
                  Nächstes Bild
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </Shell>
  );
}

/* ── Objekterkennung: Ansatz zuordnen ── */

const ERK_CATS = [
  { id: 'schablone', label: 'Schablonenabgleich' },
  { id: 'merkmal', label: 'Merkmalsanalyse' },
  { id: 'geon', label: 'Komponentiale Erkennung (Geone)' },
];
const ERK: SortItem[] = [
  { text: 'Reiz als Ganzes mit gespeicherten Mustern vergleichen', cat: 'schablone', why: '(F. 52)' },
  { text: 'kleine Abweichungen in Schrift, Grösse oder Blickwinkel zerstören die Übereinstimmung', cat: 'schablone', why: '(F. 52)' },
  { text: 'prototypische Form, z. B. Rotkehlchen (laut Folie)', cat: 'schablone', why: '(F. 68)' },
  { text: 'Gibson (1969): gerade/gekrümmte Linien, Überschneidung, Diskontinuität', cat: 'merkmal', why: '(LB S. 35–36)' },
  { text: 'Pandämonium (Selfridge, 1959)', cat: 'merkmal', why: '(F. 67)' },
  { text: 'keine prototypische Form, z. B. Emu (laut Folie)', cat: 'merkmal', why: '(F. 68)' },
  { text: '36 Grundkörper wie Zylinder und Quader', cat: 'geon', why: '(F. 69)' },
  { text: 'Parsing an konkaven Regionen', cat: 'geon', why: '(F. 70)' },
  { text: 'gleiche Teile in falscher Anordnung werden nicht erkannt', cat: 'geon', why: 'Konfiguration = Teil der strukturellen Beschreibung. (F. 69)' },
  { text: 'Kritik: Sanocki et al. (1998) – Kantenbilder mit Hintergrund nur ca. 41 % korrekt', cat: 'geon', why: '(F. 89–90)' },
  { text: 'AFIS liefert eine Kandidatenliste von Fingerabdrücken', cat: 'schablone', why: 'Fingerabdruck-Beispiel unter Schablonenabgleich. (F. 53–55)' },
];

export function ErkennungSort() {
  return (
    <Shell title="Zuordnen üben: Welcher Ansatz der Objekterkennung?">
      <SortTrainer categories={ERK_CATS} items={ERK} prompt="Welcher Ansatz:" />
    </Shell>
  );
}

/* ── Signalentdeckungstheorie ── */

function erf(x: number) {
  // Abramowitz & Stegun 7.1.26
  const s = Math.sign(x);
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-ax * ax);
  return s * y;
}
const Phi = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));
const pdf = (z: number) => Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI);

export function Sdt() {
  const [d, setD] = useState(1.5);
  const [c, setC] = useState(0.75);
  const H = 1 - Phi(c - d);
  const FA = 1 - Phi(c);
  const W = 360;
  const Hh = 170;
  const xmin = -3.5;
  const xmax = 7.5;
  const X = (v: number) => 10 + ((v - xmin) / (xmax - xmin)) * (W - 20);
  const Y = (p: number) => Hh - 22 - (p / 0.42) * (Hh - 40);
  const curve = (mu: number, from = xmin, to = xmax) => {
    const pts: string[] = [];
    for (let v = from; v <= to + 1e-9; v += 0.08) pts.push(`${X(v).toFixed(1)},${Y(pdf(v - mu)).toFixed(1)}`);
    return pts;
  };
  const area = (mu: number) => {
    const pts = curve(mu, Math.max(c, xmin), xmax);
    return `M ${X(Math.max(c, xmin))},${Y(0)} L ${pts.join(' L ')} L ${X(xmax)},${Y(0)} Z`;
  };
  // ROC
  const R = 170;
  const rx = (v: number) => 24 + v * (R - 34);
  const ry = (v: number) => R - 24 - v * (R - 34);
  const roc = (dd: number) => {
    const pts: string[] = [];
    for (let cc = 6; cc >= -6; cc -= 0.1) pts.push(`${rx(1 - Phi(cc)).toFixed(1)},${ry(1 - Phi(cc - dd)).toFixed(1)}`);
    return `M ${pts.join(' L ')}`;
  };
  const n = (p: number) => Math.round(p * 50);
  const crit = c < d / 2 - 0.25 ? 'liberal' : c > d / 2 + 0.25 ? 'konservativ' : 'neutral';
  const preset = (k: 'liberal' | 'neutral' | 'konservativ') => setC(k === 'liberal' ? d / 2 - 1 : k === 'neutral' ? d / 2 : d / 2 + 1);

  return (
    <Shell
      title="Interaktiv: Signalentdeckung – Sensitivität d′ und Kriterium"
      note="Verteilungen als Normalverteilungen mit gleicher Streuung (Standardannahme der SDT) [Ergänzung]. Tabelle für je 50 Signal- und 50 Rauschdurchgänge wie im Zahlenbeispiel F. 62."
    >
      <div className="pk-sliders3 two">
        <label className="pk-slider">
          <span>
            Sensitivität <strong>d′ = {d.toFixed(2)}</strong> (Abstand der Verteilungen)
          </span>
          <input type="range" min={0} max={4} step={0.05} value={d} onChange={(e) => setD(+e.target.value)} />
        </label>
        <label className="pk-slider">
          <span>
            Kriterium <strong>{c.toFixed(2)}</strong> → <strong>{crit}</strong>
          </span>
          <input type="range" min={-2} max={5.5} step={0.05} value={c} onChange={(e) => setC(+e.target.value)} />
        </label>
      </div>
      <div className="ew-chiprow pk-mb">
        {(['liberal', 'neutral', 'konservativ'] as const).map((k) => (
          <button key={k} className={'ew-chipbtn' + (crit === k ? ' on' : '')} onClick={() => preset(k)}>
            {k}
          </button>
        ))}
        {[0, 1, 4].map((v) => (
          <button key={v} className="ew-chipbtn" onClick={() => setD(v)}>
            d′ = {v}
          </button>
        ))}
      </div>
      <div className="kg-sdt">
        <svg viewBox={`0 0 ${W} ${Hh}`} className="pk-svg" role="img" aria-label="Rausch- und Signalverteilung mit Kriterium">
          <path d={area(0)} className="kg-sdt-fa" />
          <path d={area(d)} className="kg-sdt-hit" />
          <path d={`M ${curve(0).join(' L ')}`} className="kg-sdt-noise" />
          <path d={`M ${curve(d).join(' L ')}`} className="kg-sdt-signal" />
          <line x1={X(c)} x2={X(c)} y1={16} y2={Y(0)} className="kg-sdt-crit" />
          <line x1={X(xmin)} x2={X(xmax)} y1={Y(0)} y2={Y(0)} className="pk-axis-line" />
          <text className="pk-t s b" x={X(0) - 22} y={Y(0.36)} style={{ textAnchor: 'end' }}>
            Rauschen
          </text>
          <text className="pk-t s b" x={X(d) + 22} y={Y(0.36)} style={{ textAnchor: 'start' }}>
            Signal + Rauschen
          </text>
          <text className="pk-t s b" x={X(c)} y={11}>
            Kriterium
          </text>
          <text className="pk-t s" x={X(c) - 6} y={Hh - 6} style={{ textAnchor: 'end' }}>
            ← «no match»
          </text>
          <text className="pk-t s" x={X(c) + 6} y={Hh - 6} style={{ textAnchor: 'start' }}>
            «match» →
          </text>
        </svg>
        <svg viewBox={`0 0 ${R} ${R}`} className="pk-svg kg-roc" role="img" aria-label="ROC-Kurve">
          <rect x={rx(0)} y={ry(1)} width={rx(1) - rx(0)} height={ry(0) - ry(1)} className="kg-g-frame" />
          <line x1={rx(0)} y1={ry(0)} x2={rx(1)} y2={ry(1)} className="pk-marker" />
          {[1, 4].map((dd) => (
            <path key={dd} d={roc(dd)} className="pk-edge soft" />
          ))}
          <path d={roc(d)} className="pk-curve" />
          <circle cx={rx(FA)} cy={ry(H)} r={5.5} className="pk-dot" />
          <text className="pk-t s" x={rx(0.5)} y={R - 6}>
            Falschalarmrate
          </text>
          <text className="pk-t s" x={10} y={ry(0.5)} transform={`rotate(-90 10 ${ry(0.5)})`}>
            Trefferrate
          </text>
        </svg>
      </div>
      <div className="kg-sdt-table">
        <div />
        <div className="kg-sdt-h">sagt «match»</div>
        <div className="kg-sdt-h">sagt «no match»</div>
        <div className="kg-sdt-h">Match (50)</div>
        <div className="kg-cell ok">
          Hit <strong>{n(H)}</strong>
          <span>{(H * 100).toFixed(0)} %</span>
        </div>
        <div className="kg-cell bad">
          Miss <strong>{50 - n(H)}</strong>
          <span>{((1 - H) * 100).toFixed(0)} %</span>
        </div>
        <div className="kg-sdt-h">kein Match (50)</div>
        <div className="kg-cell bad">
          False Alarm <strong>{n(FA)}</strong>
          <span>{(FA * 100).toFixed(0)} %</span>
        </div>
        <div className="kg-cell ok">
          TNEG <strong>{50 - n(FA)}</strong>
          <span>{((1 - FA) * 100).toFixed(0)} %</span>
        </div>
      </div>
      <p className="small pk-mt">
        Verschiebe nur das <strong>Kriterium</strong>: Hits und Falschalarme ändern sich gemeinsam, der Punkt wandert <strong>entlang derselben ROC-Kurve</strong>{' '}
        – d′ bleibt gleich. Erhöhe <strong>d′</strong>: Die Verteilungen rücken auseinander, die Kurve wird stärker gebogen. (F. 59–61)
      </p>
    </Shell>
  );
}

/* ── Entry level ── */

const ENTRY = [
  { lvl: 'superordinate', ex: 'Tier', rt: 590 },
  { lvl: 'basic', ex: 'Vogel / Hund', rt: 535 },
  { lvl: 'subordinate', ex: 'Spatz / Dalmatiner', rt: 660 },
];

export function Entry() {
  const [expert, setExpert] = useState(false);
  const rt = (l: string, v: number) => (expert && l === 'subordinate' ? 540 : v);
  const best = expert ? ['basic', 'subordinate'] : ['basic'];
  return (
    <Shell
      title="Interaktiv: Entry level (Rosch et al., 1976)"
      note={
        expert
          ? 'Tanaka & Taylor (1991): Experten erkennen in ihrem Gebiet subordinate so schnell wie basic. Der Balken für Experten ist schematisch (kein Wert auf der Folie) [Ergänzung]. (F. 77–79)'
          : 'Verifikationsaufgabe: Basisebene am schnellsten → «entry level». (F. 77–79)'
      }
    >
      <label className="ew-check pk-mb">
        <input type="checkbox" checked={expert} onChange={(e) => setExpert(e.target.checked)} /> Experte im eigenen Gebiet (z. B. Vogelkundlerin)
      </label>
      <div className="kg-entry">
        {ENTRY.map((e) => (
          <div key={e.lvl} className={'ew-bar-row' + (best.includes(e.lvl) ? ' kg-best' : '')}>
            <span>
              <strong>{e.lvl}</strong>
              <br />
              <span className="muted small">{e.ex}</span>
            </span>
            <span className="ew-bar-track">
              <span className="ew-bar-fill" style={{ width: `${(rt(e.lvl, e.rt) / 700) * 100}%`, background: best.includes(e.lvl) ? 'var(--ch)' : 'var(--muted)' }} />
            </span>
            <span className="pk-num" style={{ width: 'auto' }}>
              {expert && e.lvl === 'subordinate' ? '≈ basic' : `${e.rt} ms`}
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}
