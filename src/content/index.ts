import type { Semester } from '../types';

import einfuehrung from './semester-1/einfuehrung';
import entwicklungspsychologie from './semester-1/entwicklungspsychologie';
import grundlagenMethoden from './semester-1/grundlagen-methoden';
import grundlagenTestanwendung from './semester-1/grundlagen-testanwendung';
import kognitivePsychologie from './semester-1/kognitive-psychologie';
import persoenlichkeitspsychologie from './semester-1/persoenlichkeitspsychologie';
import quantitativeMethoden from './semester-1/quantitative-methoden';

/** Alle Semester und Fächer. Neues Fach: Datei anlegen und hier eintragen. */
export const semesters: Semester[] = [
  {
    slug: 'semester-1',
    title: '1. Semester',
    subjects: [
      einfuehrung,
      entwicklungspsychologie,
      grundlagenMethoden,
      grundlagenTestanwendung,
      kognitivePsychologie,
      persoenlichkeitspsychologie,
      quantitativeMethoden,
    ],
  },
];

export function findSubject(semesterSlug: string, subjectSlug: string) {
  const semester = semesters.find((s) => s.slug === semesterSlug);
  const subject = semester?.subjects.find((s) => s.slug === subjectSlug);
  return semester && subject ? { semester, subject } : null;
}
