/**
 * Datenmodell des Lernmoduls «Einführung in die Psychologie und ihre Geschichte» (G1-1).
 * Ein Kapitel entspricht einem Abschnitt der Zusammenfassung (= Block 1–9 der Vorlesung).
 *
 * Textkonventionen (siehe components/Rich.tsx):
 *   **fett**                                   → Fachbegriff
 *   (B3/F. 54), (LB S. 83), (Notiz), (Leitfrage) → kleine Quellenmarke
 *   [Ergänzung]                                → Marke «Ergänzung» (weder Folie noch Lehrbuch)
 */

export type ChapterId = 'grundlagen' | 'antike' | 'mittelalter' | 'neuzeit' | 'psychognostik' | 'wissenschaft' | 'schulen' | 'psychiatrie' | 'tiefen';

export type FigureKey = 'spirale' | 'weberfechner' | 'gestalt' | 'struktur';

export type WidgetId =
  | 'geschichtsmodelle'
  | 'epochen'
  | 'paradigma-check'
  | 'platon-erkenntnis'
  | 'teilseelen'
  | 'temperamente'
  | 'erbe'
  | 'thomas-funktionen'
  | 'kreislauf'
  | 'schluss-trainer'
  | 'weltansichten'
  | 'psychognostik'
  | 'weber'
  | 'fechner'
  | 'wundt-weg'
  | 'gestalt'
  | 'lewin'
  | 'psychiatrie'
  | 'instanzen'
  | 'adler';

export type Tone = 'merke' | 'ergaenzung' | 'notiz' | 'achtung' | 'beispiel' | 'pruefung' | 'zitat';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'list'; title?: string; items: string[] }
  | { t: 'defs'; items: Def[] }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'figure'; fig: FigureKey }
  | { t: 'callout'; tone: Tone; title?: string; text: string | string[] }
  | { t: 'compare'; items: { title: string; sub?: string; text?: string; bullets?: string[] }[] }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'person'; name: string; dates: string; tag?: string; items: string[] }
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
  /** Zeitraum, z. B. «ca. 800 v.d.Z.–500 n.d.Z.» */
  period: string;
  /** Epochen nach Schmitthüsen & Krampen, z. B. «1–2» */
  epochs: string;
  block: string;
  color: string;
  /** Das Wichtigste in 3–5 Sätzen */
  kern: string[];
  sections: Section[];
}

export interface Pitfall {
  ch: ChapterId;
  topic: string;
  a: { label: string; text: string };
  b: { label: string; text: string };
  tipp: string;
}

export interface Leitfrage {
  ch: ChapterId;
  /** true = offizielle Leitfrage aus der Vorlesung, false = eigene Repetitionsfrage */
  official: boolean;
  q: string;
  a: string[];
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

/* ───────────── Zeitstrahl ───────────── */

export type LaneId = 'seele' | 'gnostik' | 'wiss' | 'psychiatrie' | 'tiefen';

export interface Lane {
  id: LaneId;
  title: string;
  color: string;
}

export interface TimelineEpoch {
  nr: number;
  title: string;
  range: string;
  from: number;
  to: number;
  text: string;
  /** zweite Zeile im Epochenband (Gründungsphase überlappt Epoche 4) */
  row?: 1;
}

export interface TimelineItem {
  id: string;
  lane: LaneId;
  row: number;
  /** Beschriftung wie im PDF-Zeitstrahl */
  label: string;
  /** Jahr (negativ = v.d.Z.) */
  from: number;
  /** nur bei Balken: Ende */
  to?: number;
  /** Jahresangabe in Worten, z. B. «470–399 v.d.Z.» */
  date: string;
  text: string;
  ch: ChapterId;
  /** Beschriftung links (Standard) oder rechts vom Ereignis-Punkt */
  side?: 'left' | 'right';
  /** * = Datum aus Lehrbuch bzw. aus Folienkarte abgeleitet */
  star?: boolean;
}
