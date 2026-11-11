import type { Subject } from '../../types';

const subject: Subject = {
  slug: 'kognitive-psychologie',
  title: 'Kognitive Psychologie',
  description: 'Wahrnehmung, Aufmerksamkeit, Gedächtnis, Denken und Sprache.',
  accent: '#a855f7',
  placeholder: true,
  sections: [
    {
      id: 'gedaechtnis',
      title: 'Mehrspeichermodell des Gedächtnisses',
      intro: 'Beispielinhalt – wird durch deine Unterlagen ersetzt. Klicke auf einen Ast.',
      block: {
        kind: 'conceptmap',
        center: 'Gedächtnis (Atkinson & Shiffrin)',
        nodes: [
          {
            title: 'Sensorisches Register',
            text: 'Sehr kurze, modalitätsspezifische Speicherung.',
            children: [
              { title: 'Ikonisch', text: 'visuell, ca. 0,5 s' },
              { title: 'Echoisch', text: 'auditiv, ca. 2 s' },
            ],
          },
          { title: 'Kurzzeitgedächtnis', text: 'Begrenzte Kapazität (ca. 7 ± 2 Einheiten), wenige Sekunden.' },
          {
            title: 'Langzeitgedächtnis',
            text: 'Nahezu unbegrenzte Kapazität.',
            children: [
              { title: 'Deklarativ', text: 'episodisch und semantisch' },
              { title: 'Prozedural', text: 'Fertigkeiten' },
            ],
          },
        ],
      },
    },
  ],
  quiz: [
    {
      id: 'kp1',
      question: 'Welche Kapazität wird dem Kurzzeitgedächtnis klassisch zugeschrieben?',
      options: ['2 ± 1', '7 ± 2', '15 ± 3', 'unbegrenzt'],
      correct: 1,
      explanation: 'Miller (1956): «The Magical Number Seven, Plus or Minus Two».',
    },
  ],
};

export default subject;
