import type { Subject } from '../../types';

const subject: Subject = {
  slug: 'grundlagen-methoden',
  title: 'Grundlagen Methoden',
  description: 'Forschungsprozess, Versuchsplanung, Gütekriterien.',
  accent: '#10b981',
  placeholder: true,
  sections: [
    {
      id: 'forschungsprozess',
      title: 'Der empirische Forschungsprozess',
      intro: 'Beispielinhalt – wird durch deine Unterlagen ersetzt.',
      block: {
        kind: 'process',
        steps: [
          { title: 'Fragestellung', text: 'Ein Problem identifizieren und eine Forschungsfrage formulieren.' },
          { title: 'Hypothesen', text: 'Aus der Theorie überprüfbare Hypothesen ableiten.' },
          { title: 'Operationalisierung', text: 'Festlegen, wie die Konstrukte messbar gemacht werden.' },
          { title: 'Datenerhebung', text: 'Untersuchungsdesign umsetzen und Daten sammeln.' },
          { title: 'Auswertung & Interpretation', text: 'Daten statistisch auswerten und auf die Theorie zurückbeziehen.' },
        ],
      },
    },
  ],
  quiz: [
    {
      id: 'gm1',
      question: 'Wie nennt man das Messbarmachen eines theoretischen Konstrukts?',
      options: ['Randomisierung', 'Operationalisierung', 'Validierung', 'Replikation'],
      correct: 1,
    },
  ],
};

export default subject;
