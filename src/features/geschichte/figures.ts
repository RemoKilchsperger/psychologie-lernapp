import type { FigureKey } from './model';
import spirale from './img/spiralmodell.png';
import weberfechner from './img/weber-fechner.png';
import gestalt from './img/gestalt-punkte.png';
import struktur from './img/strukturmodell.png';

export interface Figure {
  src: string;
  title: string;
  caption: string;
  source: string;
  narrow?: boolean;
}

/** Abbildungen aus der Zusammenfassung (Folien-Grafiken). */
export const figures: Record<FigureKey, Figure> = {
  spirale: {
    src: spirale,
    title: 'Spiralmodell',
    caption: 'Dieselben Grundfragen – Körper/Seele, Induktion/Deduktion, Glauben/Wissen, Objekt/Subjekt, Anlage/Umwelt, Wahrheit/Nutzen – kehren auf neuer Stufe wieder.',
    source: 'B1/F. 13',
  },
  weberfechner: {
    src: weberfechner,
    title: 'Konstante nach Weber und Erweiterung nach Fechner',
    caption: 'Links: Bei 400 g braucht es 10 g, bei 800 g 20 g für einen bemerkbaren Unterschied – ΔR/R bleibt konstant. Rechts: logarithmische Beziehung zwischen Reizintensität und Empfindung.',
    source: 'B6/F. 18',
  },
  gestalt: {
    src: gestalt,
    title: '17 Punkte',
    caption: 'Die Punkte werden als Winkelschar/«Drachen» gesehen – nicht als 17 Einzelelemente.',
    source: 'B7/F. 42; LB S. 344',
  },
  struktur: {
    src: struktur,
    title: 'Strukturmodell nach Freud',
    caption: 'Es, Ich, Über-Ich mit bewusst/vorbewusst/unbewusst und dem Verdrängten. «Wo Es war, soll Ich werden.»',
    source: 'B9/F. 77',
    narrow: true,
  },
};
