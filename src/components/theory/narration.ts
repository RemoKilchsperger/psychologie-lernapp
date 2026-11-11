import type { Epoch, HistBlock, HistPerson } from '../../types';
import type { Segment, TtsSettings } from '../../lib/useNarrator';

/** Was vorgelesen wird */
export type NarrationSource =
  | { kind: 'all' }
  | { kind: 'epoch'; nr: number }
  | { kind: 'block'; id: string }
  | { kind: 'leitfragen'; id: string };

/* ── Text sprechbar machen: Abkürzungen ausschreiben, Sonderzeichen glätten ── */
const REPL: [RegExp, string][] = [
  [/v\.\s?d\.\s?Z\./g, 'vor der Zeitrechnung'],
  [/n\.\s?d\.\s?Z\./g, 'nach der Zeitrechnung'],
  [/n\.\s?Chr\./g, 'nach Christus'],
  [/v\.\s?Chr\./g, 'vor Christus'],
  [/\bJh\./g, 'Jahrhundert'],
  [/\bz\.\s?B\./g, 'zum Beispiel'],
  [/\bd\.\s?h\./g, 'das heisst'],
  [/\bu\.\s?a\./g, 'unter anderem'],
  [/\bv\.\s?a\./g, 'vor allem'],
  [/\bs\.\s?o\./g, 'siehe oben'],
  [/\bbzw\./g, 'beziehungsweise'],
  [/\bca\./g, 'circa'],
  [/\bCa\./g, 'Circa'],
  [/\bvgl\./g, 'vergleiche'],
  [/\busw\./g, 'und so weiter'],
  [/\betc\./g, 'et cetera'],
  [/\bvs\./g, 'versus'],
  [/\bgriech\./gi, 'griechisch'],
  [/\blat\./gi, 'lateinisch'],
  [/\bS\.\s?(\d)/g, 'Seite $1'],
  [/(\d)\s?[–—]\s?(\d)/g, '$1 bis $2'],
  [/\s[–—]\s(?=\d)/g, ' bis '],
  [/\s[–—]\s/g, ', '],
  [/[–—]/g, ' bis '],
  [/(^|[.:!?]\s*)(→|⇒)\s*/g, '$1Also: '],
  [/\s*(→|⇒|->)\s*/g, ' führt zu '],
  [/≈/g, ' ungefähr '],
  [/Δ/g, 'Delta '],
  [/\b(\p{L}) · (\p{L})\b/gu, '$1 mal $2'],
  [/\s·\s/g, '. '],
  [/ = (?!konstant)(?=\p{L}{3,})/gu, ' bedeutet '],
  [/ = /g, ' gleich '],
  [/ \+ /g, ' plus '],
  [/\b(\p{Lu}) \/ (\p{Lu})\b/gu, '$1 durch $2'],
  [/&/g, ' und '],
  [/[«»"„“”‹›]/g, ''],
  [/(\p{L})\/(\p{L})/gu, '$1 oder $2'],
  [/\s\/\s/g, ' oder '],
  [/\s+/g, ' '],
];
export function speakable(s: string) {
  return REPL.reduce((t, [re, to]) => t.replace(re, to), s).trim();
}

/** Satzzeichen am Ende sicherstellen, damit die Stimme eine Pause macht */
const end = (s: string) => {
  const t = s.trim();
  return /[.!?:]$/.test(t) ? t : `${t}.`;
};
const say = (...parts: (string | undefined | false)[]) =>
  parts
    .filter((p): p is string => !!p && !!p.trim())
    .map((p) => end(speakable(p)))
    .join(' ');

const year = (y: number) => (y < 0 ? `${-y} vor der Zeitrechnung` : `${y}`);
const life = (p: HistPerson) =>
  p.died === undefined
    ? `geboren ${year(p.born)}`
    : p.born < 0
      ? `${-p.born} bis ${-p.died} vor der Zeitrechnung`
      : `${p.born} bis ${p.died}`;

/** Block deckt alle Epochen ab (Überblick) */
const isOverview = (b: HistBlock, epochs: Epoch[]) => b.epochs.length >= epochs.length;

function epochSegment(e: Epoch): Segment {
  return {
    key: `ep${e.nr}`,
    label: `Epoche ${e.nr}: ${e.title}`,
    text: say(`Epoche ${e.nr}: ${e.title}, ${e.range}`, e.text),
    target: { epoch: e.nr, el: `ep-${e.nr}` },
    pauseAfter: 900,
  };
}

function leitfragenSegments(b: HistBlock, progressKey: string, flags: Record<string, string>, opts: TtsSettings, withIntro: boolean): Segment[] {
  const kind = b.leitfragenOfficial ? 'Leitfrage' : 'Zusatzfrage';
  const segs: Segment[] = [];
  let first = true;
  b.leitfragen.forEach((lf, i) => {
    const key = `${progressKey}/${b.id}/${i}`;
    if (opts.onlyOpen && flags[key] === 'known') return;
    const intro = first && withIntro ? `${b.leitfragenOfficial ? 'Leitfragen' : 'Zusatzfragen'} zu Block ${b.nr}` : undefined;
    first = false;
    const target = { blockId: b.id, tab: 'leitfragen' as const, el: `${b.id}-lf${i}` };
    segs.push({
      key: `${b.id}-lf${i}-q`,
      label: `Block ${b.nr} · ${kind} ${i + 1}`,
      text: say(intro, `${kind} ${i + 1}`, lf.q),
      target,
      think: true,
    });
    segs.push({
      key: `${b.id}-lf${i}-a`,
      label: `Block ${b.nr} · ${kind} ${i + 1}: Antwort`,
      text: say('Antwort', lf.a, ...(lf.bullets ?? [])),
      target: { ...target, reveal: key },
      pauseAfter: 1100,
    });
  });
  return segs;
}

function blockSegments(b: HistBlock, progressKey: string, flags: Record<string, string>, opts: TtsSettings): Segment[] {
  const segs: Segment[] = [
    {
      key: `${b.id}-kern`,
      label: `Block ${b.nr}: ${b.title}`,
      text: say(`Block ${b.nr}: ${b.title}`, b.period !== 'Überblick' && `Zeitraum: ${b.period}`, `Kernaussage: ${b.kernaussage}`),
      target: { blockId: b.id, el: `${b.id}-kern` },
      pauseAfter: 700,
    },
  ];
  if (opts.inhalte) {
    b.topics.forEach((t, i) =>
      segs.push({
        key: `${b.id}-t${i}`,
        label: `Block ${b.nr} · ${t.title}`,
        text: say(t.title, ...t.points, t.quote && `Zitat von ${t.quote.by}: ${t.quote.text}`),
        target: { blockId: b.id, tab: 'inhalte', el: `${b.id}-t${i}` },
        pauseAfter: 600,
      }),
    );
  }
  if (opts.personen && b.persons.length) {
    [...b.persons]
      .sort((x, y) => x.born - y.born)
      .forEach((p, i) =>
        segs.push({
          key: `${b.id}-p-${p.name}`,
          label: `Block ${b.nr} · ${p.name}`,
          text: say(i === 0 && `Wichtige Personen in Block ${b.nr}`, `${p.name}, ${life(p)}`, p.note),
          target: { blockId: b.id, tab: 'personen', el: `${b.id}-p-${p.name}`, person: p.name },
          pauseAfter: 500,
        }),
      );
  }
  if (opts.leitfragen) segs.push(...leitfragenSegments(b, progressKey, flags, opts, true));
  return segs;
}

export function buildNarration(
  source: NarrationSource,
  epochs: Epoch[],
  blocks: HistBlock[],
  progressKey: string,
  flags: Record<string, string>,
  opts: TtsSettings,
): Segment[] {
  if (source.kind === 'block') {
    const b = blocks.find((x) => x.id === source.id);
    return b ? blockSegments(b, progressKey, flags, opts) : [];
  }
  if (source.kind === 'leitfragen') {
    const b = blocks.find((x) => x.id === source.id);
    return b ? leitfragenSegments(b, progressKey, flags, { ...opts, leitfragen: true }, true) : [];
  }
  if (source.kind === 'epoch') {
    const e = epochs.find((x) => x.nr === source.nr);
    if (!e) return [];
    const inEpoch = blocks.filter((b) => b.epochs.includes(e.nr));
    const specific = inEpoch.filter((b) => !isOverview(b, epochs));
    return [epochSegment(e), ...(specific.length ? specific : inEpoch).flatMap((b) => blockSegments(b, progressKey, flags, opts))];
  }

  /* Ganzer Zeitstrahl: Überblick, dann Blöcke in Kursreihenfolge;
     jede Epoche wird angesagt, sobald der erste Block sie betrifft. */
  const segs: Segment[] = [
    {
      key: 'intro',
      label: 'Zeitstrahl',
      text: say(
        'Geschichte der Psychologie',
        `Der Zeitstrahl umfasst ${epochs.length} Epochen nach Schmitthüsen und Krampen, 2015, und ${blocks.length} Blöcke`,
      ),
      target: {},
      pauseAfter: 800,
    },
  ];
  const announced = new Set<number>();
  for (const b of blocks.filter((x) => isOverview(x, epochs))) segs.push(...blockSegments(b, progressKey, flags, opts));
  for (const b of blocks.filter((x) => !isOverview(x, epochs))) {
    for (const nr of [...b.epochs].sort((x, y) => x - y)) {
      const e = epochs.find((x) => x.nr === nr);
      if (e && !announced.has(nr)) {
        announced.add(nr);
        segs.push(epochSegment(e));
      }
    }
    segs.push(...blockSegments(b, progressKey, flags, opts));
  }
  for (const e of epochs) if (!announced.has(e.nr)) segs.push(epochSegment(e));
  return segs;
}
