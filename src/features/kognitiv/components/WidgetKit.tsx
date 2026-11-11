import { useMemo, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Rich, withSubs } from './Rich';

/** Rahmen für alle interaktiven Grafiken */
export function Shell({ title, note, children, className = '' }: { title: string; note?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={'ew-widget ' + className}>
      <div className="ew-widget-title">{withSubs(title, 't')}</div>
      {children}
      {note && <p className="ew-widget-note">{typeof note === 'string' ? <Rich text={note} /> : note}</p>}
    </div>
  );
}

/** Enter/Leertaste löst eine Aktion aus (für klickbare SVG-Elemente) */
export const keyAct = (fn: () => void) => (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
};

/** Segment-Umschalter */
export function Seg<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="ew-seg pk-mb" role="radiogroup" aria-label={label}>
      {options.map(([v, l]) => (
        <button key={v} role="radio" aria-checked={value === v} className={value === v ? 'on' : ''} onClick={() => onChange(v)}>
          {l}
        </button>
      ))}
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

export interface SortItem {
  text: string;
  cat: string;
  why?: string;
}

/**
 * Zuordnungs-Trainer: zeigt einen Begriff nach dem anderen, man wählt die passende Kategorie.
 * Am Ende Auswertung und Möglichkeit, nur die falschen zu wiederholen.
 */
export function SortTrainer({
  categories,
  items,
  prompt = 'Wohin gehört …',
  limit,
}: {
  categories: { id: string; label: string; color?: string }[];
  items: SortItem[];
  prompt?: string;
  /** Anzahl Begriffe pro Runde (Standard: alle) */
  limit?: number;
}) {
  const [round, setRound] = useState(0);
  const [pool, setPool] = useState<SortItem[] | null>(null);
  const deck = useMemo(() => shuffle(pool ?? items).slice(0, limit ?? items.length), [round, pool, items, limit]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [wrong, setWrong] = useState<SortItem[]>([]);
  const [okCount, setOk] = useState(0);
  const item = deck[i];
  const catLabel = (id: string) => categories.find((c) => c.id === id)?.label ?? id;

  const restart = (only?: SortItem[]) => {
    setPool(only ?? null);
    setRound((r) => r + 1);
    setI(0);
    setPick(null);
    setWrong([]);
    setOk(0);
  };

  if (!item) {
    return (
      <div className="pk-trainer">
        <p className="pk-trainer-result">
          <strong>
            {okCount} von {deck.length}
          </strong>{' '}
          richtig zugeordnet {okCount === deck.length ? '🎉' : ''}
        </p>
        {wrong.length > 0 && (
          <ul className="pk-trainer-wrong">
            {wrong.map((w) => (
              <li key={w.text}>
                <strong>{w.text}</strong> → {catLabel(w.cat)}
              </li>
            ))}
          </ul>
        )}
        <div className="ew-chiprow">
          <button className="btn small" onClick={() => restart()}>
            Neue Runde
          </button>
          {wrong.length > 0 && (
            <button className="btn ghost small" onClick={() => restart(wrong)}>
              Nur die falschen ({wrong.length})
            </button>
          )}
        </div>
      </div>
    );
  }

  const answer = (c: string) => {
    if (pick) return;
    setPick(c);
    if (c === item.cat) setOk((n) => n + 1);
    else setWrong((w) => [...w, item]);
  };
  const ok = pick === item.cat;

  return (
    <div className="pk-trainer">
      <div className="pk-trainer-top">
        <span className="ew-trainer-count">
          {i + 1} / {deck.length} · {okCount} richtig
        </span>
        <button className="ew-link small" onClick={() => restart()}>
          neu mischen
        </button>
      </div>
      <p className="pk-trainer-q">
        {prompt} <strong>«{item.text}»</strong>?
      </p>
      <div className="pk-trainer-cats">
        {categories.map((c) => {
          let cls = 'pk-cat';
          if (pick) {
            if (c.id === item.cat) cls += ' correct';
            else if (c.id === pick) cls += ' wrong';
          }
          return (
            <button key={c.id} className={cls} style={c.color ? { ['--ch' as string]: c.color } : undefined} disabled={!!pick} onClick={() => answer(c.id)}>
              {c.label}
            </button>
          );
        })}
      </div>
      {pick && (
        <div className={'ew-trainer-fb ' + (ok ? 'ok' : 'bad')}>
          <strong>{ok ? 'Richtig!' : `Falsch – richtig ist: ${catLabel(item.cat)}.`}</strong> {item.why && <Rich text={item.why} />}
          <div>
            <button
              className="btn small"
              autoFocus
              onClick={() => {
                setPick(null);
                setI(i + 1);
              }}
            >
              {i + 1 >= deck.length ? 'Auswertung' : 'Weiter'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Pearson-Korrelation */
export function corr(x: number[], y: number[]) {
  const n = x.length;
  const mx = x.reduce((a, b) => a + b, 0) / n;
  const my = y.reduce((a, b) => a + b, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let k = 0; k < n; k++) {
    sxy += (x[k] - mx) * (y[k] - my);
    sxx += (x[k] - mx) ** 2;
    syy += (y[k] - my) ** 2;
  }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 1;
}

/** Zahl im Schweizer Format mit Dezimalpunkt-Schreibweise der Statistik (.52) */
export const r2 = (v: number) => (v < 0 ? '−' : '') + Math.abs(v).toFixed(2).replace(/^0/, '');
