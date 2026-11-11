import { useMemo, useState } from 'react';
import type { ChapterId } from '../model';
import { chapterById, chapters, glossary } from '../content';
import { controlQuestions, pitfalls } from '../content/extras';
import { useProgress } from '../../../lib/progress';
import { Rich, plain } from './Rich';

/* ───────────── Kapitelfilter (gemeinsam) ───────────── */

function ChapterFilter({ value, onChange }: { value: ChapterId | 'alle'; onChange: (v: ChapterId | 'alle') => void }) {
  return (
    <div className="ew-chiprow ew-filter">
      <button className={'ew-chipbtn' + (value === 'alle' ? ' on' : '')} onClick={() => onChange('alle')}>
        Alle
      </button>
      {chapters.map((c) => (
        <button
          key={c.id}
          className={'ew-chipbtn' + (value === c.id ? ' on' : '')}
          style={{ ['--ch' as string]: c.color }}
          onClick={() => onChange(c.id)}
        >
          <span className="ew-dot" /> {c.nr} {c.short}
        </button>
      ))}
    </div>
  );
}

/* ───────────── Karteikarten ───────────── */

const fcFlag = (term: string) => `kog:fc:${term}`;

export function Flashcards() {
  const { progress, setFlag } = useProgress();
  const [ch, setCh] = useState<ChapterId | 'alle'>('alle');
  const [onlyAgain, setOnlyAgain] = useState(false);
  const [view, setView] = useState<'karten' | 'liste'>('karten');
  const [search, setSearch] = useState('');
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = useMemo(() => {
    const s = search.trim().toLowerCase();
    return glossary.filter(
      (g) =>
        (ch === 'alle' || g.ch === ch) &&
        (!onlyAgain || progress.flags[fcFlag(g.term)] !== 'known') &&
        (!s || g.term.toLowerCase().includes(s) || plain(g.text).toLowerCase().includes(s)),
    );
    // progress.flags bewusst nicht in den Abhängigkeiten: Bewerten soll den Stapel nicht sofort umsortieren
  }, [ch, onlyAgain, search, view]);

  const known = glossary.filter((g) => progress.flags[fcFlag(g.term)] === 'known').length;
  const card = cards[Math.min(i, cards.length - 1)];

  const go = (d: number) => {
    setFlipped(false);
    setI((x) => (cards.length ? (x + d + cards.length) % cards.length : 0));
  };
  const rate = (v: 'known' | 'again') => {
    if (!card) return;
    setFlag(fcFlag(card.term), v);
    go(1);
  };
  const reset = (fn: () => void) => {
    fn();
    setI(0);
    setFlipped(false);
  };

  return (
    <div className="ew-panel">
      <h2>Karteikarten</h2>
      <p className="muted">
        {glossary.length} Fachbegriffe aus allen Kapiteln · <strong>{known}</strong> als «gewusst» markiert
      </p>
      <div className="ew-mini-bar wide">
        <span className="ok" style={{ width: `${(known / glossary.length) * 100}%` }} />
      </div>
      <ChapterFilter value={ch} onChange={(v) => reset(() => setCh(v))} />
      <div className="ew-toolbar">
        <div className="ew-seg">
          <button className={view === 'karten' ? 'on' : ''} onClick={() => setView('karten')}>
            Abfragen
          </button>
          <button className={view === 'liste' ? 'on' : ''} onClick={() => setView('liste')}>
            Glossar
          </button>
        </div>
        {view === 'karten' ? (
          <label className="ew-check">
            <input type="checkbox" checked={onlyAgain} onChange={(e) => reset(() => setOnlyAgain(e.target.checked))} /> nur noch nicht gewusste
          </label>
        ) : (
          <input type="search" className="ew-search" placeholder="Begriff suchen …" value={search} onChange={(e) => setSearch(e.target.value)} />
        )}
      </div>

      {view === 'karten' ? (
        card ? (
          <div className="ew-fc-wrap">
            <div className="muted small">
              Karte {Math.min(i, cards.length - 1) + 1} / {cards.length} · {chapterById[card.ch].short}
            </div>
            <button className={'ew-fc' + (flipped ? ' flipped' : '')} style={{ ['--ch' as string]: chapterById[card.ch].color }} onClick={() => setFlipped(!flipped)}>
              {!flipped ? (
                <>
                  <span className="ew-fc-term">{card.term}</span>
                  <span className="ew-fc-hint">Erst selbst erklären – dann klicken</span>
                </>
              ) : (
                <>
                  <span className="ew-fc-small">{card.term}</span>
                  <span className="ew-fc-def">
                    <Rich text={card.text} />
                  </span>
                </>
              )}
            </button>
            <div className="ew-fc-actions">
              <button className="btn ghost" onClick={() => go(-1)} aria-label="Vorherige Karte">
                ←
              </button>
              <button className="btn ew-again" onClick={() => rate('again')}>
                Nochmals
              </button>
              <button className="btn ew-known" onClick={() => rate('known')}>
                Gewusst
              </button>
              <button className="btn ghost" onClick={() => go(1)} aria-label="Nächste Karte">
                →
              </button>
            </div>
          </div>
        ) : (
          <p className="muted">Keine Karten in dieser Auswahl – alles gewusst? 🎉</p>
        )
      ) : (
        <dl className="ew-glossary">
          {[...cards]
            .sort((a, b) => a.term.localeCompare(b.term, 'de'))
            .map((g) => (
              <div key={g.term} className="ew-def" style={{ ['--ch' as string]: chapterById[g.ch].color }}>
                <dt>
                  {g.term} {progress.flags[fcFlag(g.term)] === 'known' && <span title="gewusst">✓</span>}
                  <span className="ew-chip small">{chapterById[g.ch].short}</span>
                </dt>
                <dd>
                  <Rich text={g.text} />
                </dd>
              </div>
            ))}
        </dl>
      )}
    </div>
  );
}

/* ───────────── Stolperfallen ───────────── */

export function Pitfalls() {
  const [ch, setCh] = useState<ChapterId | 'alle'>('alle');
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const list = pitfalls.map((p, i) => ({ ...p, i })).filter((p) => ch === 'alle' || p.ch === ch);
  return (
    <div className="ew-panel">
      <h2>Stolperfallen & Verwechslungsgefahren</h2>
      <p className="muted">Die Begriffspaare, die in MC-Fragen gerne vertauscht werden. Im Übungsmodus siehst du nur die Begriffe und erklärst den Unterschied zuerst selbst.</p>
      <ChapterFilter value={ch} onChange={setCh} />
      <label className="ew-check" style={{ margin: '8px 0 16px' }}>
        <input
          type="checkbox"
          checked={hidden}
          onChange={(e) => {
            setHidden(e.target.checked);
            setShown({});
          }}
        />{' '}
        Übungsmodus (Erklärungen verdecken)
      </label>
      <div className="ew-pitfalls">
        {list.map((p) => {
          const open = !hidden || shown[p.i];
          return (
            <article key={p.i} className="ew-pitfall" style={{ ['--ch' as string]: chapterById[p.ch].color }}>
              <header>
                <span className="ew-eyebrow">{chapterById[p.ch].short}</span>
                <h4>{p.topic}</h4>
              </header>
              <div className="ew-pit-pair">
                {[p.a, p.b].map((s, k) => (
                  <div key={k} className="ew-pit-side">
                    <strong>{s.label}</strong>
                    {open && (
                      <span>
                        <Rich text={s.text} />
                      </span>
                    )}
                  </div>
                ))}
                <span className="ew-vs">vs.</span>
              </div>
              {open ? (
                <p className="ew-pit-tipp">
                  <span aria-hidden>💡</span> <Rich text={p.tipp} />
                </p>
              ) : (
                <button className="ew-reveal" onClick={() => setShown({ ...shown, [p.i]: true })}>
                  Unterschied aufdecken
                </button>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ───────────── Kontrollfragen ───────────── */

const cqFlag = (i: number) => `kog:cq:${i}`;

export function ControlQuestions() {
  const { progress, setFlag } = useProgress();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="ew-panel">
      <h2>Kontrollfragen</h2>
      <p className="muted">
        Offene Fragen, die mehrere Konzepte verknüpfen. Formuliere deine Antwort zuerst (laut oder schriftlich), vergleiche dann mit der Musterantwort und
        schätze dich selbst ein.
      </p>
      <ol className="ew-cq">
        {controlQuestions.map((c, i) => {
          const flag = progress.flags[cqFlag(i)];
          return (
            <li key={i} className={'ew-cq-item' + (flag ? ` ${flag}` : '')}>
              <div className="ew-cq-head">
                <span className="ew-cq-nr">{i + 1}</span>
                <div>
                  <div className="ew-chiprow">
                    {c.ch.map((id) => (
                      <span key={id} className="ew-chip" style={{ ['--ch' as string]: chapterById[id].color }}>
                        {chapterById[id].short}
                      </span>
                    ))}
                  </div>
                  <p className="ew-cq-q">{c.q}</p>
                </div>
              </div>
              {open[i] ? (
                <div className="ew-cq-answer">
                  <div className="ew-label">Musterantwort</div>
                  <ul>
                    {c.answer.map((a, k) => (
                      <li key={k}>
                        <Rich text={a} />
                      </li>
                    ))}
                  </ul>
                  <div className="ew-chiprow">
                    <span className="muted small">Wie gut war deine Antwort?</span>
                    <button className={'ew-chipbtn' + (flag === 'known' ? ' on' : '')} onClick={() => setFlag(cqFlag(i), 'known')}>
                      ✓ Sass
                    </button>
                    <button className={'ew-chipbtn' + (flag === 'again' ? ' on' : '')} onClick={() => setFlag(cqFlag(i), 'again')}>
                      ↻ Nochmals üben
                    </button>
                  </div>
                </div>
              ) : (
                <button className="ew-reveal" onClick={() => setOpen({ ...open, [i]: true })}>
                  Musterantwort zeigen
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
