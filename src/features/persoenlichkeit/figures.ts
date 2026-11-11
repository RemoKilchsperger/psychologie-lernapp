import type { FigureKey } from './model';
import rotter from './img/rotter-modell.png';
import bigfiveWb from './img/bigfive-wohlbefinden.png';
import perma from './img/perma.png';
import lucas from './img/lucas-lebensereignisse.png';

export interface Figure {
  nr: number;
  src: string;
  title: string;
  caption: string;
  source: string;
}

/**
 * Abbildungen aus der Zusammenfassung (Nummerierung wie im PDF).
 * Abb. 1–5 sind in der App als interaktive Grafiken nachgebaut (siehe components/Widgets*.tsx).
 */
export const figures: Record<FigureKey, Figure> = {
  rotter: {
    nr: 6,
    src: rotter,
    title: 'Rotters Modell',
    caption:
      'Erwartung (E) und Verstärkungswert (VW) bestimmen gemeinsam das Verhaltenspotenzial (VP). Das Verhalten (beobachtbar oder nicht, auch Gedanken und Gefühle) hat eine Folge: den Verstärker.',
    source: 'S. 129',
  },
  'bigfive-wb': {
    nr: 7,
    src: bigfiveWb,
    title: 'Big Five und Wohlbefinden',
    caption:
      'Neurotizismus und v. a. die Facette Ängstlichkeit hängen negativ mit Wohlbefinden zusammen; Extraversion am deutlichsten positiv, Verträglichkeit, Offenheit und Gewissenhaftigkeit schwächer positiv.',
    source: 'S. 197',
  },
  perma: {
    nr: 8,
    src: perma,
    title: 'Seligmans Well-Being Theory (2011)',
    caption:
      'Positive Emotions, Engagement, Relationships, Meaning, Accomplishment = fünf unabhängige Indikatoren von Flourishing. Weiterentwicklung der drei Lebensformen (pleasure, engagement, meaning).',
    source: 'S. 204',
  },
  lucas: {
    nr: 9,
    src: lucas,
    title: 'Lebenszufriedenheit vor und nach Lebensereignissen (Lucas 2007)',
    caption:
      'A: Heirat, Verwitwung, Scheidung. B: Arbeitslosigkeit, Behinderung, schwere Behinderung. Nach Heirat kehrt die Zufriedenheit fast zum Ausgangsniveau zurück; Arbeitslosigkeit und (schwere) Behinderung hinterlassen bleibende Einbussen.',
    source: 'S. 206',
  },
};
