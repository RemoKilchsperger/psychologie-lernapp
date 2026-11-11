import type { Subject } from '../../types';
import { chapters } from '../../features/persoenlichkeit/content';
import { quiz } from '../../features/persoenlichkeit/content/quiz';

/**
 * Persönlichkeitspsychologie und Differentielle Psychologie (Semesterstoff HS26).
 * Die Inhalte und die Darstellung liegen in src/features/persoenlichkeit/ (eigene Lernumgebung).
 * Quelle: Persönlichkeitspsychologie_Semesterstoff-HS26_Zusammenfassung.pdf
 *
 * `sections` dient hier nur der Fortschrittsanzeige auf der Startseite (ein Eintrag pro Kapitel).
 * `quiz` enthält nur die A-Typ-Fragen (die Standardansicht kennt kein Kprim); die eigene Lernumgebung nutzt alle.
 */
const subject: Subject = {
  slug: 'persoenlichkeitspsychologie',
  title: 'Persönlichkeitspsychologie',
  description:
    'Einführung & Temperamente, Intelligenz, Eigenschaftstheorien (Big Five, PEN), Anlage & Umwelt, Stabilität, soziale Lerntheorie, emotionale Intelligenz, Wohlbefinden.',
  accent: '#ec4899',
  custom: 'persoenlichkeit',
  sections: chapters.map((c) => ({ id: c.id, title: `${c.nr} · ${c.short}` })),
  quiz: quiz.flatMap((q) => (q.kind === 'kprim' ? [] : [{ id: q.id, question: q.q, options: q.options, correct: q.correct, explanation: q.why }])),
};

export default subject;
