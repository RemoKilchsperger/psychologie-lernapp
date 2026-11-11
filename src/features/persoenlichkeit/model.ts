/**
 * Datenmodell des Lernmoduls Persönlichkeitspsychologie (Semesterstoff HS26).
 * Ein Kapitel entspricht einer Vorlesung bzw. einem Kapitel der Zusammenfassung,
 * besteht aus Abschnitten, und jeder Abschnitt aus einer Folge von Inhaltsblöcken.
 *
 * Textkonventionen (siehe components/Rich.tsx):
 *   **fett**              → hervorgehobener Fachbegriff
 *   *kursiv*              → Formelzeichen / Fremdwort
 *   (S. 13), (Notiz)      → kleine Quellenmarke (S. = Seite im OneNote-Export)
 *   [Ergänzung]           → gelbe Marke: steht nicht auf den Folien
 */

export type ChapterId = 'einfuehrung' | 'intelligenz' | 'eigenschaften' | 'anlage' | 'stabilitaet' | 'lerntheorie' | 'ei' | 'wohlbefinden';

export type FigureKey = 'rotter' | 'bigfive-wb' | 'perma' | 'lucas';

export type WidgetId =
  | 'landkarte'
  | 'trait-hierarchie'
  | 'temperamente'
  | 'validitaeten'
  | 'iq-rechner'
  | 'spearman-thurstone'
  | 'gf-gc'
  | 'bis'
  | 'flynn'
  | 'faktorenanalyse'
  | 'bigfive-facetten'
  | 'pen-hierarchie'
  | 'modellvergleich'
  | 'verwandtschaft'
  | 'plomin'
  | 'heritabilitaet'
  | 'falconer'
  | 'arold'
  | 'stabilitaetsarten'
  | 'rangstabilitaet'
  | 'lebensphasen'
  | 'rotter-vp'
  | 'kontrolle-sort'
  | 'ei-konzeptionen'
  | 'vier-zweige'
  | 'konsensus'
  | 'wb-faktoren'
  | 'perma'
  | 'via';

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
  /** Vorlesungsdatum, falls bekannt */
  date?: string;
  /** Seitenbereich im OneNote-Export */
  pages: string;
  /** Literaturverweis der Folien */
  lit?: string;
  color: string;
  /** Das Wichtigste in 3–6 Sätzen */
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

/** MC-Frage im A-Typ (eine richtige Antwort) */
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
