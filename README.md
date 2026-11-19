# Psychologie Lernapp

Lern-Web-App für die Semesterprüfungen: pro Fach eine Theorie-Seite (je nach Thema unterschiedlich dargestellt) und ein Quiz. Der Fortschritt wird im Browser gespeichert.

## Starten

```bash
npm install
npm run dev      # Entwicklungsserver, http://localhost:5173
npm run build    # Produktions-Build nach dist/
```

## Struktur

```
src/
  content/
    index.ts                 Liste aller Semester und Fächer
    semester-1/<fach>.ts     Theorie + Quiz eines Fachs
  components/
    theory/TheoryBlockView   Darstellungsarten der Theorie
    Quiz.tsx
  pages/                     Übersicht und Fachseite
  types.ts                   Datenmodell
```

## Darstellungsarten (`block.kind`)

| kind         | Darstellung                          | Gedacht für                     |
|--------------|--------------------------------------|---------------------------------|
| `timeline`   | Klickbarer Zeitstrahl                | Entwicklungsstufen, Geschichte  |
| `conceptmap` | Konzeptkarte mit aufklappbaren Ästen | Modelle, Gedächtnis, Kognition  |
| `formulas`   | Formelkarten                         | Statistik                       |
| `process`    | Nummerierter Ablauf                  | Forschungsprozess, Methoden     |
| `table`      | Vergleichstabelle                    | Gütekriterien, Testverfahren    |
| `dimensions` | Pole mit Schieberegler               | Persönlichkeitsfaktoren         |
| `cards`      | Umdrehbare Lernkarten                | Begriffe, Paradigmen            |
| `text`       | Fliesstext                           | Allgemeines                     |
| `studies`    | Studienkarten mit Kernaussage        | Studien, Experimente            |
| `definitions`| Begriffe mit Definition              | Definitionen                    |
| `points`     | Stichpunkt-Gruppen                   | Merkmale, Aufzählungen          |

Jeder Abschnitt eines Fachs kann eine andere Darstellung verwenden. Ein Abschnitt hat entweder
einen `block` oder mehrere `parts` (Unterteile mit je eigenem Block) sowie optional `literature`
(prüfungsrelevante Kapitel). Enthält ein Fach `studies`-Blöcke, erscheint automatisch der Tab
„Studien“ mit Filter, Suche und Selbsttest-Modus. Im Quiz werden Fragen und Antwortoptionen gemischt.

## Eigene Lernumgebung: Entwicklungspsychologie

Entwicklungspsychologie hat statt der Standard-Fachseite eine eigene Lernumgebung (`custom: 'entwicklung'` im Fach).
Quelle: `Entwicklungspsychologie_Kindes-und-Jugendalter_Zusammenfassung.pdf` (inkl. der 10 Abbildungen).

```
src/features/entwicklung/
  EntwicklungApp.tsx         Tabs: Übersicht · Kapitel · Karteikarten · Stolperfallen · Kontrollfragen · Quiz
  model.ts                   Datenmodell (Kapitel → Abschnitte → Blöcke)
  figures.ts + img/          Abbildungen aus der Zusammenfassung
  content/kap1…kap6-*.ts     ein Kapitel pro Vorlesung
  content/extras.ts          Altersachse, Stolperfallen, Kontrollfragen
  content/quiz.ts            MC-Fragen (mit Kapitel-Zuordnung)
  components/                Blöcke, interaktive Widgets, Quiz, Karteikarten …
```

Im Text: `**fett**` = Fachbegriff, `(Fol. 3)`, `(LB S. 55)`, `(Notiz)` werden als Quellenmarke dargestellt.
Karteikarten entstehen automatisch aus allen `defs`-Blöcken.

## Eigene Lernumgebung: Einführung in die Psychologie und ihre Geschichte

`custom: 'geschichte'` im Fach. Quelle: `G1-1_Einfuehrung-Psychologiegeschichte_Bloecke-1-9_Zusammenfassung.pdf`
(Blöcke 1–9, inkl. Zeitstrahl S. 2 und Abbildungen). Nutzt die Grundstile von `entwicklung.css` (ew-*) plus `geschichte.css` (gs-*).

```
src/features/geschichte/
  GeschichteApp.tsx          Tabs: Übersicht · Zeitstrahl · Blöcke 1–9 · Karteikarten · Stolperfallen · Leitfragen · Quiz
  model.ts                   Datenmodell (Kapitel, Zeitstrahl, A-Typ- und Kprim-Fragen)
  content/timeline.ts        Einträge des PDF-Zeitstrahls (5 Spuren, Achse mit Massstabswechseln)
  content/kap1-3/4-6/7-9.ts  ein Kapitel pro Block
  content/extras.ts          Stolperfallen, Widersprüche Folie ↔ LB, Kontroll- und Leitfragen
  content/quiz.ts            MC-Fragen im A-Typ und Kprim
  components/Timeline.tsx    interaktiver Zeitstrahl, Listenansicht, Chronologie-Übung
  components/Widgets.tsx     interaktive Grafiken (Teilseelen, Temperamente, Weber/Fechner, Lewin, Freud …)
```

Im Text: `(B3/F. 54)`, `(LB S. 83)`, `(Notiz)`, `(Leitfrage)` = Quellenmarke, `[Ergänzung]` = gelbe Marke.

## Eigene Lernumgebung: Persönlichkeitspsychologie

`custom: 'persoenlichkeit'` im Fach. Quelle: `Persönlichkeitspsychologie_Semesterstoff-HS26_Zusammenfassung.pdf`
(8 Kapitel, Abb. 6–9 als Bilder; Abb. 1–5 als interaktive Grafiken nachgebaut). Aufbau wie Entwicklungspsychologie,
nutzt `entwicklung.css` (ew-*) plus `persoenlichkeit.css` (pk-*). Prüfung: MC im A-Typ und Kprim.

```
src/features/persoenlichkeit/
  PersoenlichkeitApp.tsx     Tabs: Übersicht · Kapitel · Karteikarten · Stolperfallen · Kontrollfragen · Quiz
  model.ts                   Datenmodell (Kapitel, Blöcke inkl. Formelkarte, A-Typ- und Kprim-Fragen)
  figures.ts + img/          Abb. 6–9 aus der Zusammenfassung
  content/kap1…kap8-*.ts     ein Kapitel pro Vorlesung
  content/extras.ts          Schlüsselzahlen (Übersicht), Stolperfallen, Kontrollfragen
  content/quiz.ts            MC-Fragen (A-Typ + Kprim)
  components/WidgetKit.tsx   Rahmen, Zuordnungs-Trainer, Hilfsfunktionen
  components/Widgets*.tsx    interaktive Grafiken (IQ-/Falconer-Rechner, Temperamente, FA, Plomin, Arold, Rotter …)
```

Im Text: `(S. 13)`, `(Notiz)` = Quellenmarke (Seite im OneNote-Export), `[Ergänzung]` = gelbe Marke, `r_MZ` → Index.

## Eigene Lernumgebung: Kognitive Psychologie

`custom: 'kognitiv'` im Fach. Quellen: `Kognitive_Psychologie_Gesamt_Zusammenfassung.pdf` (Vorlesungen 1–4, 16 S., 15 Abbildungen) und `Kognition_Aufmerksamkeit-Teil2_Zusammenfassung.pdf` (6 S., 7 Abbildungen; in Kapitel 4 eingearbeitet).
Aufbau wie Persönlichkeitspsychologie, nutzt `entwicklung.css` (ew-*), `persoenlichkeit.css` (pk-*) plus `kognitiv.css` (kg-*).
Prüfung: MC 2 h, A-Typ **1 aus 5** und Kprim.

```
src/features/kognitiv/
  KognitivApp.tsx            Tabs: Übersicht · Kapitel · Karteikarten · Stolperfallen · Kontrollfragen · Quiz
  model.ts                   Datenmodell (4 Kapitel, Blöcke, A-Typ- und Kprim-Fragen)
  figures.ts + img/          alle 22 Abbildungen aus den Zusammenfassungen (Abb. 16–22 = Aufmerksamkeit Teil 2)
  content/kap1…kap4-*.ts     Einführung · Wahrnehmung · Mentale Vorstellungen · Aufmerksamkeit (Teil 1 und 2)
  content/extras.ts          Schlüsselzahlen, Stolperfallen, Kontrollfragen
  content/quiz.ts            128 MC-Fragen (A-Typ mit 5 Optionen + Kprim)
  components/Widgets*.tsx    32 interaktive Grafiken (Stroop-, Rotations-, Cueing- und Suche-Selbstversuch, Donders, Sternberg,
                             Sehbahn, rezeptive Felder, Gestalt, SDT/ROC, Scanning, V1, Filtermodelle, Perceptual Load, FIT …)
```

Im Text: `(F. 32)`, `(LB S. 7)` = Quellenmarke, `[Web]` = blaue Marke (Internetquelle der Notizen), `[Ergänzung]` = gelbe Marke.

## Neues Fach / Semester hinzufügen

1. Datei `src/content/semester-X/<fach>.ts` anlegen (eine bestehende als Vorlage kopieren).
2. In `src/content/index.ts` importieren und im passenden Semester eintragen.
3. `placeholder: true` entfernen, sobald echte Inhalte drin sind.
