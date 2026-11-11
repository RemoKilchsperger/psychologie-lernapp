import type { Subject } from '../../types';

const subject: Subject = {
  slug: 'quantitative-methoden',
  title: 'Quantitative Methoden',
  description: 'Deskriptive und Inferenzstatistik.',
  accent: '#ef4444',
  placeholder: true,
  sections: [
    {
      id: 'deskriptiv',
      title: 'Kennwerte der deskriptiven Statistik',
      intro: 'Beispielinhalt – wird durch deine Unterlagen ersetzt.',
      block: {
        kind: 'formulas',
        items: [
          { name: 'Arithmetisches Mittel', formula: 'x̄ = Σxᵢ / n', explanation: 'Summe aller Werte geteilt durch ihre Anzahl.', example: '(2 + 4 + 6) / 3 = 4' },
          { name: 'Varianz (Stichprobe)', formula: 's² = Σ(xᵢ − x̄)² / (n − 1)', explanation: 'Mittlere quadrierte Abweichung vom Mittelwert.' },
          { name: 'z-Wert', formula: 'z = (x − x̄) / s', explanation: 'Standardisierter Wert: Abstand vom Mittelwert in Standardabweichungen.' },
        ],
      },
    },
  ],
  quiz: [
    {
      id: 'qm1',
      question: 'Ein z-Wert von 0 bedeutet …',
      options: ['der Wert liegt genau auf dem Mittelwert', 'der Wert ist ungültig', 'die Varianz ist 0', 'der Wert ist minimal'],
      correct: 0,
    },
  ],
};

export default subject;
