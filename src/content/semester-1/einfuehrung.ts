import type { Subject } from '../../types';
import { chapters } from '../../features/geschichte/content';
import { quiz } from '../../features/geschichte/content/quiz';

/**
 * Einführung in die Psychologie und ihre Geschichte (G1-1, HS 2026, Lea Laasner Vogt).
 * Die Inhalte und die Darstellung liegen in src/features/geschichte/ (eigene Lernumgebung).
 * Quelle: G1-1_Einfuehrung-Psychologiegeschichte_Bloecke-1-9_Zusammenfassung.pdf
 *
 * `sections` dient hier nur der Fortschrittsanzeige auf der Startseite (ein Eintrag pro Block).
 */
const subject: Subject = {
  slug: 'einfuehrung',
  title: 'Einführung in die Psychologie und ihre Geschichte',
  description: 'Blöcke 1–9: von der Antike bis zur Tiefenpsychologie – interaktiver Zeitstrahl, Grafiken, Leitfragen und Quiz im A-Typ & Kprim.',
  accent: '#e8590c',
  custom: 'geschichte',
  sections: chapters.map((c) => ({ id: c.id, title: `${c.nr} · ${c.short}` })),
  quiz: quiz.flatMap((q) =>
    q.kind === 'kprim' ? [] : [{ id: q.id, question: q.q, options: q.options, correct: q.correct, explanation: q.why }],
  ),
};

export default subject;
