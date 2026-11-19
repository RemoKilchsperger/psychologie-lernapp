import type { Subject } from '../../types';
import { chapters } from '../../features/entwicklung/content';
import { quiz } from '../../features/entwicklung/content/quiz';

/**
 * Entwicklungspsychologie des Kindes- und Jugendalters (VL G4-1, Prof. Dr. B. Schwarz, ZHAW).
 * Die Inhalte und die Darstellung liegen in src/features/entwicklung/ (eigene Lernumgebung).
 * Quellen: Entwicklungspsychologie_Kindes-und-Jugendalter_Zusammenfassung.pdf,
 *          Entwicklungspsychologie_Bindung_Zusammenfassung.pdf (Kapitel 7)
 *
 * `sections` dient hier nur der Fortschrittsanzeige auf der Startseite (ein Eintrag pro Kapitel).
 */
const subject: Subject = {
  slug: 'entwicklungspsychologie',
  title: 'Entwicklungspsychologie',
  description:
    'Kindes- und Jugendalter – Grundbegriffe & Methoden, physische Entwicklung, Lernen, Motorik & Sensorik, Piaget, Kognition & Intelligenz, Bindung.',
  accent: '#f59e0b',
  custom: 'entwicklung',
  sections: chapters.map((c) => ({ id: c.id, title: `${c.nr} · ${c.short}` })),
  quiz: quiz.map((q) => ({ id: q.id, question: q.q, options: q.options, correct: q.correct, explanation: q.why })),
};

export default subject;
