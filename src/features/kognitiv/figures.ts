import type { FigureKey } from './model';
import donders from './img/donders.png';
import sternbergRt from './img/sternberg-rt.png';
import sternbergStufen from './img/sternberg-stufen.png';
import ebenen from './img/wahrnehmung-ebenen.png';
import gestalt from './img/gestaltprinzipien.png';
import biederman from './img/biederman-rbc.png';
import roc from './img/roc.png';
import rotation from './img/mentale-rotation.png';
import lea from './img/lea-1975.png';
import kosslyn from './img/kosslyn-1978.png';
import tms from './img/tms-v1.png';
import broadbent from './img/broadbent.png';
import treisman from './img/treisman.png';
import deutsch from './img/deutsch.png';
import load from './img/perceptual-load.png';
import cueing from './img/spatial-cueing.png';
import soa from './img/cueing-soa.png';
import merkmale from './img/elementare-merkmale.png';
import suchfunktionen from './img/suchfunktionen.png';
import fit from './img/fit.png';
import wolfe from './img/wolfe-szenen.png';
import wolfeKontrolle from './img/wolfe-kontrolle.png';

export interface Figure {
  nr: number;
  src: string;
  title: string;
  caption: string;
  source: string;
}

/**
 * Abbildungen aus der Zusammenfassung, in der Reihenfolge des PDFs nummeriert.
 * Viele sind zusätzlich als interaktive Grafik nachgebaut (components/Widgets*.tsx).
 */
export const figures: Record<FigureKey, Figure> = {
  donders: {
    nr: 1,
    src: donders,
    title: 'Donders: einfache vs. Wahlreaktionsaufgabe',
    caption:
      'Aufgabe A: Lichtblitz wahrnehmen (Prozess 1) → Taste. Aufgabe B: zusätzlich binäre Entscheidung (Prozess 2). Die RT-Differenz B − A schätzt die Dauer der Entscheidung.',
    source: 'Einf. F. 32',
  },
  'sternberg-rt': {
    nr: 2,
    src: sternbergRt,
    title: 'Sternberg (1966): RT nach Umfang der Ziffernmenge',
    caption: 'RT = 397 + 38 · u. Die RT steigt linear; Treffer und Nieten haben dieselbe Steigung → erschöpfende Suche.',
    source: 'Einf. F. 38',
  },
  'sternberg-stufen': {
    nr: 3,
    src: sternbergStufen,
    title: 'Sternberg: Stufen und je ein manipulierter Faktor',
    caption:
      'Stimuluskodierung ← Stimulusqualität; serieller Vergleich ← Umfang der Ziffern; binäre Entscheidung ← Art der Antwort; Übersetzung & Organisation der Antwort ← relative Häufigkeit der Antwortarten.',
    source: 'Einf. F. 39',
  },
  ebenen: {
    nr: 4,
    src: ebenen,
    title: 'Ablauf der Wahrnehmung',
    caption:
      'Untere Ebene (Merkmale: Orientierung, Farbe, Bewegung) → mittlere Ebene (Konturintegration, Gestaltprinzipien, Figur-Grund) → obere Ebene (Objektidentifizierung & Kategorisierung); parallel «Was»- und «Wo»-Bahn.',
    source: 'Wahrn. F. 11',
  },
  gestalt: {
    nr: 5,
    src: gestalt,
    title: 'Klassische Gestaltprinzipien A–J',
    caption:
      'A keine Gruppierung, B Nähe, C–E Ähnlichkeit (Farbe, Grösse, Orientierung), F gemeinsames Schicksal, G Symmetrie, H Parallelität, I glatter Verlauf, J Geschlossenheit.',
    source: 'Wahrn. F. 36',
  },
  biederman: {
    nr: 6,
    src: biederman,
    title: 'Komponentiale Erkennung (Biederman, 1987)',
    caption:
      'Bottom-up: Kanten-Extraktion → nicht-zufällige Merkmale + Parsing an konkaven Regionen → Komponenten (Geone) → Vergleich der Anordnung mit der Objektrepräsentation → Identifikation (z. B. Bogen 5 seitlich an Zylinder 3 = Tasse).',
    source: 'Wahrn. F. 70',
  },
  roc: {
    nr: 7,
    src: roc,
    title: 'ROC-Kurven',
    caption:
      'x = Falschalarmrate, y = Trefferrate. Diagonale = Zufall; je stärker gebogen, desto höher d′. Ein Kriteriumswechsel verschiebt den Punkt entlang derselben Kurve (konservativ unten links, liberal oben rechts).',
    source: 'Wahrn. F. 61',
  },
  rotation: {
    nr: 8,
    src: rotation,
    title: 'Mentale Rotation (Shepard & Metzler, 1971)',
    caption: 'RT steigt linear mit dem Rotationswinkel – in der Bildebene (links) wie in der Bildtiefe (rechts); Tiefe ist nicht langsamer.',
    source: 'Vorst. F. 5',
  },
  lea: {
    nr: 9,
    src: lea,
    title: 'Lea (1975): RT nach Anzahl Zwischenobjekte n',
    caption: 'Innerhalb gleicher n steigt die RT kaum mit der Distanz; die Sprünge entstehen durch die Anzahl Zwischenobjekte → listen-/netzwerkartige Repräsentation.',
    source: 'Vorst. F. 13',
  },
  kosslyn: {
    nr: 10,
    src: kosslyn,
    title: 'Kosslyn et al. (1978): Scanzeit linear zur Distanz',
    caption: 'Fiktive Insel, Zwischenobjekte kontrolliert: Die Scanzeit steigt linear mit der Distanz.',
    source: 'Vorst. F. 16',
  },
  tms: {
    nr: 11,
    src: tms,
    title: 'TMS über V1: Sham vs. Real (Kosslyn et al., 1999)',
    caption: 'Echte TMS über Area 17 verlängert die RT bei allen fünf Versuchspersonen – in der Wahrnehmungs- und in der Vorstellungsbedingung → V1 ist ursächlich beteiligt.',
    source: 'Vorst. F. 38',
  },
  broadbent: {
    nr: 12,
    src: broadbent,
    title: 'Filtertheorie (Broadbent, 1958)',
    caption: 'Alles-oder-nichts-Filter nach dem sensorischen Gedächtnis, vor der Bedeutungsanalyse; Kriterien: physikalische Merkmale (Tonhöhe, Lautstärke, Ohr).',
    source: 'Aufm. F. 8',
  },
  treisman: {
    nr: 13,
    src: treisman,
    title: 'Dämpfungstheorie (Treisman)',
    caption: 'Unbeachteter Input wird abgeschwächt, nicht blockiert. «Dictionary Units» mit Schwellen: Wörter mit tiefer Schwelle (eigener Name) werden auch gedämpft erkannt.',
    source: 'Aufm. F. 11',
  },
  deutsch: {
    nr: 14,
    src: deutsch,
    title: 'Späte Auswahl (Deutsch & Deutsch, 1963)',
    caption: 'Alle Inputs werden bis zur Bedeutung verarbeitet; erst ein Gewichtungs-/Bedeutungsfilter vor dem Kurzzeitgedächtnis bzw. der Reaktion wählt aus.',
    source: 'Aufm. F. 13',
  },
  load: {
    nr: 15,
    src: load,
    title: 'Perceptual Load (Forster & Lavie, 2008)',
    caption: 'Der irrelevante Comic-Distraktor verlangsamt nur bei der einfachen Aufgabe (478 vs. 538 ms, ***); bei der schwierigen nicht (694 vs. 713 ms, n. s.).',
    source: 'Aufm. F. 17',
  },
  cueing: {
    nr: 16,
    src: cueing,
    title: 'Spatial Cueing (Posner et al., 1978): Durchgangstypen und RT',
    caption:
      'Neutral (zentrales Kreuz), valide (Pfeil zeigt zum Zielort) und invalide (Pfeil zeigt zur Gegenseite); Ablauf Cue → Delay → Test. Valide ≈ 300 ms (Gewinn), neutral ≈ 335 ms (Baseline), invalide ≈ 370 ms (Kosten).',
    source: 'Aufm. F. 22',
  },
  soa: {
    nr: 17,
    src: soa,
    title: 'Nutzen eines validen Cues nach SOA',
    caption:
      'Peripherer Cue (orange): Nutzen steigt kurz nach 0 ms, Plateau ≈ 20 ms ab ca. 150 ms SOA → zieht automatisch an. Symbolischer Cue (blau): bis ca. 100 ms kein Nutzen, Plateau erst bei ca. 300 ms → wird willentlich befolgt.',
    source: 'Aufm. F. 23',
  },
  merkmale: {
    nr: 18,
    src: merkmale,
    title: 'Elementare Merkmale',
    caption:
      'Farbe, Orientierung, Grösse, Form/Geschlossenheit, Krümmung, 3D-Lage/Schattierung und neu Anzahl: Das abweichende Element springt jeweils ohne Absuchen ins Auge (Pop-out).',
    source: 'Aufm. F. 26',
  },
  suchfunktionen: {
    nr: 19,
    src: suchfunktionen,
    title: 'Suchfunktionen: RT × Set Size',
    caption:
      'Merkmalssuche (orange) flach ≈ 450 ms (~0 ms/Objekt); Verbindungssuche (blau) steigt linear: Ziel anwesend (gefüllt) 5–15 ms/Objekt, abwesend (leer) 10–30 ms/Objekt → selbstabbrechende Suche.',
    source: 'Aufm. F. 29',
  },
  fit: {
    nr: 20,
    src: fit,
    title: 'Merkmals-Integrations-Theorie (Treisman & Gelade, 1980)',
    caption:
      'Input → Ortskarte; Farb- und Orientierungskarten erfassen Merkmale parallel. Nur am Ort des Aufmerksamkeitsfokus werden die Merkmale (durchgezogene Linien) zur temporären Objektrepräsentation verbunden und mit dem Wiedererkennungs-Netzwerk abgeglichen. Impliziert eine «zufällige» Suche.',
    source: 'Aufm. F. 30',
  },
  wolfe: {
    nr: 21,
    src: wolfe,
    title: 'Suche in realen Szenen (Wolfe et al., 2011)',
    caption:
      'Zielwort (z. B. «Wasserhahn») 500 ms → leerer Bildschirm 500 ms → Szene bis zur Antwort. Ziel abwesend 4 ms/Item, anwesend 5 ms/Item (Hauptbereich Set Size 25–85) → extrem effizient.',
    source: 'Aufm. F. 38',
  },
  'wolfe-kontrolle': {
    nr: 22,
    src: wolfeKontrolle,
    title: 'Kontrollanalyse: Singletons vs. alle Treffer',
    caption:
      '(A) Mehr Zielinstanzen → kürzere RT, höhere Trefferquote. (B) Singletons insgesamt langsamer, aber gleiche Steigungen (korrekt abwesend 5, Singletons 4, alle Treffer 7 ms/Item).',
    source: 'Aufm. F. 39',
  },
};
