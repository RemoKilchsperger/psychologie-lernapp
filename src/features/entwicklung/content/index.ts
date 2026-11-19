import type { Chapter, ChapterId, Def } from '../model';
import { kap1 } from './kap1-einfuehrung';
import { kap2 } from './kap2-physisch';
import { kap3 } from './kap3-lernen';
import { kap4 } from './kap4-motorik';
import { kap5 } from './kap5-piaget';
import { kap6 } from './kap6-kognition2';
import { kap7 } from './kap7-bindung';

export const chapters: Chapter[] = [kap1, kap2, kap3, kap4, kap5, kap6, kap7];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c])) as Record<ChapterId, Chapter>;

/** Alle Begriffe aus den Definitionsblöcken – Grundlage für Karteikarten und Glossar. */
export const glossary: (Def & { ch: ChapterId; section: string })[] = chapters.flatMap((c) =>
  c.sections.flatMap((s) =>
    s.blocks.flatMap((b) => (b.t === 'defs' ? b.items.map((d) => ({ ...d, ch: c.id, section: s.id })) : [])),
  ),
);

export const EXAM_INFO = {
  course: 'Entwicklungspsychologie des Kindes- und Jugendalters',
  module: 'VL G4-1 · Prof. Dr. B. Schwarz, ZHAW',
  period: 'Vorlesungen ab 17.09.2026 · inkl. Foliensatz «Bindung»',
  format: 'MC-Fragen',
  relevant:
    'Lohaus, Vierhaus & Lemola (2024, 8. Aufl.) – jeweils die angegebenen Kapitel (Bindung: Kap. 8 und Teile von 15.2.1.1) – sowie alle Präsentationen inkl. Erläuterungen und Handouts. Erklärvideo zur Literatur und Erläuterungen zur Stabilität auf Moodle sind ebenfalls prüfungsrelevant.',
  sources: '(Fol. n) = Folienseite · (LB S. n) = Seite im Lohaus · (Notiz) = eigene Mitschrift. «Ergänzung» = aus dem Lohaus, nicht von den Folien.',
};
