/**
 * Datenmodell des Lernmoduls Kognitive Psychologie (Vorlesungen 1–4, HS 2026).
 * Ein Kapitel entspricht einem Kapitel der Zusammenfassung, besteht aus Abschnitten,
 * und jeder Abschnitt aus einer Folge von Inhaltsblöcken.
 *
 * Textkonventionen (siehe components/Rich.tsx):
 *   **fett**              → hervorgehobener Fachbegriff
 *   *kursiv*              → Formelzeichen / Fremdwort
 *   (F. 32), (LB S. 7)    → kleine Quellenmarke (Folie des Kapitels bzw. Anderson-Seite)
 *   [Web]                 → blaue Marke: Ergänzung aus einer Internetquelle der Notizen
 *   [Ergänzung]           → gelbe Marke: steht weder auf den Folien noch in der Zusammenfassung
 */

export type ChapterId = 'einfuehrung' | 'wahrnehmung' | 'vorstellungen' | 'aufmerksamkeit';

export type FigureKey =
  | 'donders'
  | 'sternberg-rt'
  | 'sternberg-stufen'
  | 'ebenen'
  | 'gestalt'
  | 'biederman'
  | 'roc'
  | 'rotation'
  | 'lea'
  | 'kosslyn'
  | 'tms'
  | 'broadbent'
  | 'treisman'
  | 'deutsch'
  | 'load';

export type WidgetId =
  | 'interpretiert'
  | 'stroop'
  | 'donders'
  | 'sternberg'
  | 'geschichte-sort'
  | 'probleme-sort'
  | 'sehbahn'
  | 'rezeptives-feld'
  | 'merkmalspfade'
  | 'gestalt'
  | 'erkennung-sort'
  | 'sdt'
  | 'entry-level'
  | 'rotation'
  | 'imagery-debate'
  | 'scanning'
  | 'v1-karte'
  | 'evidenz-leiter'
  | 'dissoziation'
  | 'dichotisch-sort'
  | 'selektion'
  | 'treisman-riley'
  | 'perceptual-load'
  | 'slippage';

export type Tone = 'merke' | 'ergaenzung' | 'notiz' | 'achtung' | 'beispiel' | 'pruefung';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'list'; title?: string; items: string[] }
  | { t: 'defs'; items: Def[] }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'figure'; fig: FigureKey }
  | { t: 'callout'; tone: Tone; title?: string; text: string | string[] }
  | { t: 'compare'; items: { title: string; sub?: string; text?: string; bullets?: string[] }[] }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'formula'; name: string; formula: string; legend: string[]; source?: string }
  | { t: 'study'; title: string; source?: string; method: string; result: string; takeaway: string }
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
  /** Seitenbereich in der Zusammenfassung */
  pages: string;
  /** Foliensatz / Lehrbuchkapitel */
  lit?: string;
  color: string;
  /** Das Wichtigste in 3–8 Sätzen */
  kern: string[];
  sections: Section[];
}

/** Prüfungsrelevante Zahl / Befund – für die Übersicht «Zahlen, die man kennen sollte» */
export interface KeyNumber {
  ch: ChapterId;
  value: string;
  text: string;
  src: string;
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

/** MC-Frage im A-Typ (eine richtige Antwort aus fünf) */
export interface MCQuestion {
  id: string;
  ch: ChapterId;
  kind?: 'a';
  q: string;
  options: string[];
  correct: number;
  why: string;
}

/** Kprim-Frage: vier Aussagen, jede ist richtig oder falsch */
export interface KprimQuestion {
  id: string;
  ch: ChapterId;
  kind: 'kprim';
  q: string;
  statements: { text: string; ok: boolean; why: string }[];
}

export type QuizQuestion = MCQuestion | KprimQuestion;
