/**
 * Datenmodell des Lernmoduls Entwicklungspsychologie.
 * Ein Kapitel entspricht einer Vorlesung, besteht aus Abschnitten,
 * und jeder Abschnitt aus einer Folge von Inhaltsblöcken.
 *
 * Textkonventionen (siehe components/Rich.tsx):
 *   **fett**          → hervorgehobener Fachbegriff
 *   (Fol. 3), (LB S. 55), (Notiz) → werden als kleine Quellen-Marke dargestellt
 */

export type ChapterId = 'einfuehrung' | 'physisch' | 'lernen' | 'motorik' | 'piaget' | 'kognition2';

export type FigureKey =
  | 'konvergenzmodell'
  | 'praenatal'
  | 'schlaf'
  | 'habituation'
  | 'bandura'
  | 'gehen'
  | 'wauwau'
  | 'erhaltung'
  | 'karotte'
  | 'sallyanne';

export type WidgetId =
  | 'bronfenbrenner'
  | 'auw-trend'
  | 'praenatal-zeit'
  | 'apgar'
  | 'fruehgeburt'
  | 'aktivierung'
  | 'verstaerkung'
  | 'piaget-stufen'
  | 'sally-anne';

export type Tone = 'merke' | 'ergaenzung' | 'notiz' | 'achtung' | 'beispiel' | 'pruefung';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'list'; title?: string; items: string[] }
  | { t: 'defs'; items: Def[] }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'figure'; fig: FigureKey }
  | { t: 'callout'; tone: Tone; title?: string; text: string | string[] }
  | { t: 'compare'; items: { title: string; text?: string; bullets?: string[] }[] }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'study'; title: string; source?: string; age?: string; method: string; result: string; takeaway: string }
  | { t: 'widget'; w: WidgetId };

export interface Def {
  term: string;
  text: string;
}

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Chapter {
  id: ChapterId;
  nr: number;
  /** kurzer Name für Navigation und Filter */
  short: string;
  title: string;
  date: string;
  folien: string;
  lohaus: string;
  color: string;
  /** Das Wichtigste in 3–5 Sätzen */
  kern: string[];
  sections: Section[];
}

export interface Milestone {
  age: string;
  text: string;
  ch: ChapterId;
}

export interface AgeBand {
  label: string;
  span: string;
  items: Milestone[];
}

export interface Pitfall {
  ch: ChapterId;
  topic: string;
  a: { label: string; text: string };
  b: { label: string; text: string };
  tipp: string;
}

export interface ControlQuestion {
  ch: ChapterId[];
  q: string;
  answer: string[];
}

export interface MCQuestion {
  id: string;
  ch: ChapterId;
  q: string;
  options: string[];
  correct: number;
  why: string;
}
