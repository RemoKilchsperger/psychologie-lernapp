import type { Chapter, ChapterId, Def } from '../model';
import { kap1, kap2, kap3 } from './kap1-3';
import { kap4, kap5, kap6 } from './kap4-6';
import { kap7, kap8, kap9 } from './kap7-9';

export const chapters: Chapter[] = [kap1, kap2, kap3, kap4, kap5, kap6, kap7, kap8, kap9];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c])) as Record<ChapterId, Chapter>;

/** Alle Begriffe aus den Definitionsblöcken – Grundlage für Karteikarten und Glossar. */
export const glossary: (Def & { ch: ChapterId })[] = chapters.flatMap((c) =>
  c.sections.flatMap((s) => s.blocks.flatMap((b) => (b.t === 'defs' ? b.items.map((d) => ({ ...d, ch: c.id })) : []))),
);

export const EXAM_INFO = {
  course: 'Einführung in die Psychologie und ihre Geschichte',
  module: 'G1-1 · Herbstsemester 2026 · Dozentin: Lea Laasner Vogt',
  date: '21.01.27',
  format: 'MC (A-Typ & Kprim, ca. 28 Fragen), 60 Min., closed book',
  sources:
    'Foliensatz + Leitfragen Blöcke 1–7, ergänzt mit Schönpflug (2024), Geschichte und Systematik der Psychologie, 4. Aufl. Zitierweise: (B3/F. 54) = Block 3, Folie 54 · (LB S. 83) = Lehrbuchseite · «Ergänzung» = weder Folie noch Lehrbuch, nur zum Verständnis. Bei Widersprüchen gilt die Folie.',
  kern: [
    '**Kontext:** Psychologie und ihre Geschichte immer im Kontext ihrer Zeit sowie der jeweiligen Menschenbilder und Paradigmen betrachten. (B1/F. 21)',
    '**«Lange Vergangenheit, kurze Geschichte»** (Ebbinghaus 1908): als eigenständige Wissenschaft erst ab 1879 (Wundt, Leipzig). (B1/F. 10, 20)',
    '**Antike Grundpositionen** wirken bis heute: Platon (dualistisch, Idealismus) vs. Aristoteles (monistisch, Erfahrung), Säfte-/Temperamentenlehre, Charaktertypen. (B2/F. 40)',
    '**Mittelalter:** vom Christentum geprägt – antike Lehren übernommen und umgedeutet (Augustinus ↔ Platon, Thomas ↔ Aristoteles). (B3/F. 47, 59)',
    '**Induktion und Deduktion** sind die zentralen Verfahren wissenschaftlicher Erkenntnis – beide haben Probleme (Induktionsproblem → Falsifikation). (B4/F. 83)',
    '**Psychognostik:** Aus Körpermerkmalen lässt sich nicht zuverlässig auf Persönlichkeit schliessen. (B5/F. 101)',
    '**Emanzipation von der Philosophie:** Naturwissenschaften als Vorbild für Laborforschung; daneben die geisteswissenschaftliche Linie (Dilthey). (B6/F. 24, 26)',
    '**Schulen um 1900:** Würzburger Schule öffnet für phänomenologische Richtungen; Gestaltpsychologie und Lewin betonen Ganzheit und Person-Umwelt-Interaktion. (B7/F. 46)',
    '**Psychiatrie:** Humoralpathologie bis in die Neuzeit; Psychiatrie entsteht aus der Not überforderter Familien; Zwangsmassnahmen zur «Erziehung» waren verheerend. (B8/F. 64)',
    '**Tiefenpsychologie:** Freud – Unbewusstes, Es/Ich/Über-Ich, Abwehr, Sexualität als Triebenergie; Adler – Minderwertigkeit, Kompensation, Gemeinschaftsgefühl. (B9/F. 77–84)',
  ],
};
