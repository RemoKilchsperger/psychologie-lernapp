import type { Subject } from '../../types';
import { chapters } from '../../features/kognitiv/content';
import { quiz } from '../../features/kognitiv/content/quiz';

/**
 * Kognitive Psychologie (HS 2026, Vorlesungen 1–4 inkl. Aufmerksamkeit Teil 2).
 * Die Inhalte und die Darstellung liegen in src/features/kognitiv/ (eigene Lernumgebung).
 * Quellen: Kognitive_Psychologie_Gesamt_Zusammenfassung.pdf, Kognition_Aufmerksamkeit-Teil2_Zusammenfassung.pdf
 *
 * `sections` dient hier nur der Fortschrittsanzeige auf der Startseite (ein Eintrag pro Kapitel).
 * `quiz` enthält nur die A-Typ-Fragen (die Standardansicht kennt kein Kprim); die eigene Lernumgebung nutzt alle.
 */
const subject: Subject = {
  slug: 'kognitive-psychologie',
  title: 'Kognitive Psychologie',
  description:
    'Einführung & Reaktionszeitmethoden (Donders, Sternberg), Wahrnehmung (Sehbahn, Gestalt, Objekterkennung, SDT), mentale Vorstellungen (Rotation, Imagery Debate, V1), Aufmerksamkeit (Filter, Dämpfung, Perceptual Load, Spatial Cueing, visuelle Suche, Merkmals-Integrations-Theorie).',
  accent: '#a855f7',
  custom: 'kognitiv',
  sections: chapters.map((c) => ({ id: c.id, title: `${c.nr} · ${c.short}` })),
  quiz: quiz.flatMap((q) => (q.kind === 'kprim' ? [] : [{ id: q.id, question: q.q, options: q.options, correct: q.correct, explanation: q.why }])),
};

export default subject;
