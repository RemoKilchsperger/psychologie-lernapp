import type { Subject } from '../../types';

const subject: Subject = {
  slug: 'grundlagen-testanwendung',
  title: 'Grundlagen Testanwendung',
  description: 'Testgütekriterien, Testarten und Anwendung psychologischer Tests.',
  accent: '#0ea5e9',
  placeholder: true,
  sections: [
    {
      id: 'guetekriterien',
      title: 'Hauptgütekriterien im Vergleich',
      intro: 'Beispielinhalt – wird durch deine Unterlagen ersetzt.',
      block: {
        kind: 'table',
        columns: ['Kriterium', 'Frage', 'Beispiel'],
        rows: [
          ['Objektivität', 'Ist das Ergebnis unabhängig von der Testleitung?', 'Standardisierte Instruktion'],
          ['Reliabilität', 'Misst der Test genau bzw. zuverlässig?', 'Retest-Reliabilität'],
          ['Validität', 'Misst der Test, was er messen soll?', 'Kriteriumsvalidität'],
        ],
      },
    },
  ],
  quiz: [
    {
      id: 'gt1',
      question: 'Welches Gütekriterium beschreibt die Messgenauigkeit eines Tests?',
      options: ['Objektivität', 'Reliabilität', 'Validität', 'Normierung'],
      correct: 1,
    },
  ],
};

export default subject;
