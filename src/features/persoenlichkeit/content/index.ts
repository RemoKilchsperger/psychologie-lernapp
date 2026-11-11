import type { Chapter, ChapterId, Def } from '../model';
import { kap1 } from './kap1-einfuehrung';
import { kap2 } from './kap2-intelligenz';
import { kap3 } from './kap3-eigenschaften';
import { kap4 } from './kap4-anlage';
import { kap5 } from './kap5-stabilitaet';
import { kap6 } from './kap6-lerntheorie';
import { kap7 } from './kap7-ei';
import { kap8 } from './kap8-wohlbefinden';

export const chapters: Chapter[] = [kap1, kap2, kap3, kap4, kap5, kap6, kap7, kap8];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c])) as Record<ChapterId, Chapter>;

/** Alle Begriffe aus den Definitionsblöcken – Grundlage für Karteikarten und Glossar. */
export const glossary: (Def & { ch: ChapterId; section: string })[] = chapters.flatMap((c) =>
  c.sections.flatMap((s) =>
    s.blocks.flatMap((b) => (b.t === 'defs' ? b.items.map((d) => ({ ...d, ch: c.id, section: s.id })) : [])),
  ),
);

export const EXAM_INFO = {
  course: 'Persönlichkeitspsychologie und Differentielle Psychologie',
  module: 'Semesterstoff HS26',
  period: 'Vorlesungen 18.09.–09.12.2026',
  format: '90 min, schriftlich, closed book, Multiple Choice (A-Typ und Kprim)',
  relevant:
    'Grundlage ist der OneNote-Export «Persönlichkeitspsychologie.pdf» (Folien + eigene Notizen). Kein Lehrbuch beigelegt; die Folien verweisen auf Rammsayer & Weber (2016) bzw. Asendorpf (2024).',
  sources: '(S. n) = Seite im OneNote-Export · (Notiz) = eigene Mitschrift · «Ergänzung» = steht nicht auf den Folien, nur zum Verständnis.',
};
