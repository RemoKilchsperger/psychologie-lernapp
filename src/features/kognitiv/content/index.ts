import type { Chapter, ChapterId, Def } from '../model';
import { kap1 } from './kap1-einfuehrung';
import { kap2 } from './kap2-wahrnehmung';
import { kap3 } from './kap3-vorstellungen';
import { kap4 } from './kap4-aufmerksamkeit';

export const chapters: Chapter[] = [kap1, kap2, kap3, kap4];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c])) as Record<ChapterId, Chapter>;

/** Alle Begriffe aus den Definitionsblöcken – Grundlage für Karteikarten und Glossar. */
export const glossary: (Def & { ch: ChapterId; section: string })[] = chapters.flatMap((c) =>
  c.sections.flatMap((s) =>
    s.blocks.flatMap((b) => (b.t === 'defs' ? b.items.map((d) => ({ ...d, ch: c.id, section: s.id })) : [])),
  ),
);

export const EXAM_INFO = {
  course: 'Kognitive Psychologie',
  module: 'HS 2026 · Prof. Dr. Ester Reijnen',
  period: 'Zusammenfassung der Vorlesungen 1–4: Einführung · Wahrnehmung · Mentale Vorstellungen · Aufmerksamkeit (Teil 1)',
  format: 'Multiple Choice, 2 h; Typ A (1 aus 5; 1/0 Punkte) und Kprim (4 Aussagen richtig/falsch; 1, ½ oder 0 Punkte)',
  relevant:
    'Stoff: Vorlesung inkl. Folien + Lehrbuch Anderson (2013) Kap. 1, 2, 3, 4, 6, 7. Kein Ersatztermin, Nachprüfung i. d. R. mündlich. Bei Abweichungen Folie ↔ Lehrbuch gilt die Folie. Lücken der Unterlagen: Wahrnehmung F. 47–49 und 80–84 fehlen; Aufmerksamkeit nur Teil 1 (F. 1–21).',
  sources:
    '(F. x) = Folie x des jeweiligen Kapitels · (LB S. x) = Seite im Lehrbuch Anderson · «Web» = Ergänzung aus einer Internetquelle der Notizen · «Ergänzung» = nur zum Verständnis, nicht aus den Unterlagen.',
};
