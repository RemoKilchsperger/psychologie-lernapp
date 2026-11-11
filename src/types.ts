/**
 * Datenmodell der Lernapp.
 * Jedes Fach besteht aus Theorie-Abschnitten und einem Quiz.
 * Jeder Abschnitt hat einen "block", der bestimmt, WIE die Theorie dargestellt wird.
 */

export type TheoryBlock =
  /** Zeitstrahl, z.B. Entwicklungsstufen */
  | { kind: 'timeline'; items: { label: string; title: string; text: string; tags?: string[] }[] }
  /** Konzeptkarte: zentrales Konzept mit Ästen und Unterpunkten */
  | {
      kind: 'conceptmap';
      center: string;
      nodes: { title: string; text: string; children?: { title: string; text: string }[] }[];
    }
  /** Formelkarten, z.B. Statistik */
  | { kind: 'formulas'; items: { name: string; formula: string; explanation: string; example?: string }[] }
  /** Prozess / Ablauf in Schritten, z.B. Forschungsprozess */
  | { kind: 'process'; steps: { title: string; text: string }[] }
  /** Vergleichstabelle */
  | { kind: 'table'; columns: string[]; rows: string[][] }
  /** Dimensionen mit zwei Polen, z.B. Persönlichkeitsfaktoren */
  | { kind: 'dimensions'; items: { name: string; low: string; high: string; text: string }[] }
  /** Aufklappbare Karten / Begriffe */
  | { kind: 'cards'; items: { title: string; text: string }[] }
  /** Fliesstext */
  | { kind: 'text'; paragraphs: string[] }
  /** Studienkarten mit hervorgehobener Kernaussage */
  | { kind: 'studies'; items: Study[] }
  /** Begriffe mit Definition (immer sichtbar) */
  | { kind: 'definitions'; items: { term: string; text: string }[] }
  /** Stichpunkt-Gruppen */
  | { kind: 'points'; groups: { title: string; bullets: string[]; note?: string }[] }
  /** Interaktiver Geschichts-Zeitstrahl mit Epochen, Personen, Inhalten und Leitfragen */
  | { kind: 'history'; epochs: Epoch[]; blocks: HistBlock[]; dimensions?: PositionDimension[]; positions?: HistPosition[] };

/** Eine Grundfrage (z.B. Leib-Seele), auf die es gegensätzliche Antworten (Pole) gibt */
export interface PositionDimension {
  id: string;
  title: string;
  question: string;
  poles: { id: string; name: string; text: string }[];
}

/** Eine philosophische Position, verortet über die Lebenszeit ihrer Vertreter */
export interface HistPosition {
  id: string;
  dimension: string;
  pole: string;
  /** Beschriftung auf der Zeitachse */
  label: string;
  from: number;
  to: number;
  vertreter: string[];
  note: string;
  /** Block, in dem die Position behandelt wird */
  blockId: string;
}

/** Jahreszahlen: negativ = v.d.Z. */
export interface Epoch {
  nr: number;
  title: string;
  range: string;
  text: string;
  from: number;
  to: number;
}

export interface HistPerson {
  name: string;
  born: number;
  died?: number;
  /** Kurzlabel auf der Zeitachse (Standard: letztes Wort des Namens) */
  short?: string;
  note: string;
}

export interface HistTopic {
  title: string;
  points: string[];
  quote?: { text: string; by: string };
}

export interface Leitfrage {
  group?: string;
  q: string;
  a: string;
  bullets?: string[];
}

export interface HistBlock {
  id: string;
  nr: number;
  title: string;
  period: string;
  /** Epochen-Nummern (1–7), zu denen der Block gehört */
  epochs: number[];
  kernaussage: string;
  lernziele?: string;
  persons: HistPerson[];
  topics: HistTopic[];
  leitfragen: Leitfrage[];
  /** false = keine offiziellen Leitfragen, sondern eigene Repetitionsfragen */
  leitfragenOfficial: boolean;
}

/** Eine empirische Studie bzw. ein klassisches Experiment */
export interface Study {
  title: string;
  /** Autor:innen und Jahr, z.B. "Bandura (1965)" */
  source?: string;
  /** Alter der untersuchten Kinder, z.B. "0;4" */
  age?: string;
  /** Vorgehen */
  method: string;
  /** Ergebnis */
  result: string;
  /** Kernaussage – das Wichtigste für die Prüfung */
  takeaway: string;
}

/** Unterteil eines Abschnitts mit eigener Darstellung */
export interface TheoryPart {
  title: string;
  intro?: string;
  block: TheoryBlock;
}

export interface TheorySection {
  id: string;
  title: string;
  intro?: string;
  /** Prüfungsrelevante Literatur zu diesem Abschnitt */
  literature?: string;
  /** Entweder ein einzelner Block … */
  block?: TheoryBlock;
  /** … oder mehrere Unterteile */
  parts?: TheoryPart[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Index der richtigen Antwort in options */
  correct: number;
  explanation?: string;
}

export interface Subject {
  slug: string;
  title: string;
  description: string;
  /** Akzentfarbe des Fachs (CSS-Farbe) */
  accent: string;
  /** true, solange nur Beispielinhalte enthalten sind */
  placeholder?: boolean;
  /** Eigene Lernumgebung statt der Standard-Fachseite (z.B. 'entwicklung') */
  custom?: 'entwicklung' | 'geschichte' | 'persoenlichkeit';
  sections: TheorySection[];
  quiz: QuizQuestion[];
}

export interface Semester {
  slug: string;
  title: string;
  subjects: Subject[];
}
