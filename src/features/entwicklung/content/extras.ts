import type { AgeBand, ControlQuestion, Pitfall } from '../model';

/** Alle Altersangaben aus der Zusammenfassung, kapitelübergreifend auf einer Achse. */
export const ageBands: AgeBand[] = [
  {
    label: 'Pränatal',
    span: 'Zeugung bis Geburt',
    items: [
      { age: 'Wo. 0–2', text: 'Zygotenstadium: Befruchtung, Einnistung; meist keine Teratogenwirkung (Ausnahme Alkohol)', ch: 'physisch' },
      { age: 'Wo. 3–8', text: 'Embryonalstadium: Organsysteme entstehen – sensibelste Phase, strukturelle Schäden', ch: 'physisch' },
      { age: 'ab Wo. 9', text: 'Fötalstadium: erste Reflexe, Mimik, funktionelle Schäden', ch: 'physisch' },
      { age: 'ca. 5. Mon.', text: 'Bewegungen für die Mutter spürbar', ch: 'physisch' },
      { age: 'letztes Drittel', text: 'Alle Sinne ausgebildet; Hören möglich', ch: 'motorik' },
    ],
  },
  {
    label: 'Neugeborene',
    span: '0–1 Monat',
    items: [
      { age: '1/5/10 Min.', text: 'Apgar-Index', ch: 'physisch' },
      { age: 'Geburt', text: 'Ca. 16 h Schlaf, davon ca. 50 % REM', ch: 'physisch' },
      { age: 'Geburt', text: 'Reflexe (Saugen, Rooting, Schreiten, Moro, Schwimmen)', ch: 'motorik' },
      { age: 'Geburt', text: 'Präferenz für Mutterstimme, Muttersprache, Kontraste; Grössenkonstanz; intermodale Wahrnehmung', ch: 'motorik' },
      { age: '2 Wochen', text: 'Imitation: Zunge herausstrecken', ch: 'lernen' },
      { age: 'erste 7 Tage', text: 'Höchstes Sterberisiko im 1. Lebensjahr', ch: 'physisch' },
    ],
  },
  {
    label: 'Erstes Halbjahr',
    span: '1–6 Monate',
    items: [
      { age: 'Wo. 5–6', text: 'Höhepunkt der Schreidauer, danach Abnahme', ch: 'physisch' },
      { age: '0;2', text: 'Lächeln Menschen- mehr als Puppengesichter an (belebt/unbelebt)', ch: 'kognition2' },
      { age: '0;2–0;3', text: 'Gesichterpräferenz', ch: 'motorik' },
      { age: '0;3', text: 'Präferenz eigener Ethnie; Gesichter aller Ethnien noch unterscheidbar', ch: 'motorik' },
      { age: '0;4', text: 'Solidität (Spelke); Präferenz freundlicher Gesichter; visuell-haptisches Wiedererkennen', ch: 'kognition2' },
      { age: '0;5', text: 'Intermodal: Blick zum sich nähernden Zug', ch: 'motorik' },
      { age: '0;6', text: 'Relative Grösse als Tiefencue; visuelle Klippe; Affengesichter noch unterscheidbar', ch: 'motorik' },
    ],
  },
  {
    label: 'Zweites Halbjahr',
    span: '6–12 Monate',
    items: [
      { age: '0;6–0;9', text: 'Verzögerte Nachahmung nach 24 h', ch: 'lernen' },
      { age: '0;7', text: 'Einfache kausale Zusammenhänge; nur Lebewesen bewegen sich selbst', ch: 'kognition2' },
      { age: '0;8', text: 'Soziales Referenzieren; Unterscheidung vertraut/unvertraut', ch: 'kognition2' },
      { age: '0;9', text: 'Perceptual narrowing: Affengesichter / andere Ethnien nicht mehr unterschieden', ch: 'motorik' },
      { age: '0;10–0;11', text: 'Kategorien Tiere – Möbel', ch: 'kognition2' },
    ],
  },
  {
    label: 'Kleinkind',
    span: '1–2 Jahre',
    items: [
      { age: '1;0', text: 'Schwerkraft: Proportion und Form des aufliegenden Objekts werden beachtet', ch: 'kognition2' },
      { age: '12–18 Mon.', text: 'Hilfeverhalten; 1–2 neue Verhaltensweisen pro Tag durch Imitation', ch: 'lernen' },
      { age: '1;1', text: 'Analogien: Lösungsstrategien übertragen', ch: 'kognition2' },
      { age: '1;3', text: 'Imitation von Handlungen aus dem Fernsehen; mehrstufige Kausalketten', ch: 'lernen' },
      { age: '1;6', text: 'Nachahmung von Absichten; Intentionen durch Beobachtung', ch: 'lernen' },
      { age: '0–2 J.', text: 'Piaget: sensumotorische Stufe (Objektpermanenz, A-nicht-B-Fehler)', ch: 'piaget' },
    ],
  },
  {
    label: 'Vorschulalter',
    span: '2–6 Jahre',
    items: [
      { age: '2 J.', text: 'Induktives Schliessen (Vögel – Nest)', ch: 'kognition2' },
      { age: '2½ J.', text: 'Vereinfachte False-Belief-Aufgabe gelöst', ch: 'kognition2' },
      { age: '2–6 J.', text: 'Piaget: präoperationale Stufe (Egozentrismus, fehlende Invarianz, Zentrierung)', ch: 'piaget' },
      { age: '3–4 J.', text: 'Perspektivenübernahme mit Bilderbuch; konkrete Regelbruch-Aufgabe', ch: 'piaget' },
      { age: '3–5 J.', text: 'Theory of Mind (Smarties, Sally-Anne mit ca. 4 J.)', ch: 'kognition2' },
      { age: 'ca. 4 J.', text: 'Kausales Denken im Alltag; deduktiv mit «Stell dir vor …»', ch: 'kognition2' },
      { age: 'Kindergarten', text: 'Biologisches Wissen: nur Lebewesen wachsen, erkranken, heilen', ch: 'kognition2' },
    ],
  },
  {
    label: 'Schulalter & Jugend',
    span: 'ab 6 Jahren',
    items: [
      { age: '5–8 J.', text: 'Hören auf Erwachsenenniveau', ch: 'motorik' },
      { age: '7–11 J.', text: 'Piaget: konkret-operationale Stufe', ch: 'piaget' },
      { age: 'ab 12 J.', text: 'Piaget: formal-operationale Stufe (abstrakt, hypothetisch)', ch: 'piaget' },
      { age: '12–13 J.', text: 'Systematische Hypothesenprüfung (Pendel)', ch: 'kognition2' },
      { age: 'Jugend', text: 'Aktive Anlage-Umwelt-Korrelation wird immer wichtiger', ch: 'einfuehrung' },
    ],
  },
];

/** Stolperfallen und Verwechslungsgefahren. */
export const pitfalls: Pitfall[] = [
  {
    ch: 'einfuehrung',
    topic: 'Wessen Veränderung?',
    a: { label: 'Intraindividuell', text: 'Veränderung **innerhalb einer Person** über die Zeit – das ist Entwicklung.' },
    b: { label: 'Interindividuell', text: '**Unterschiede zwischen Personen** in diesen Veränderungen.' },
    tipp: 'intra = innen, inter = zwischen.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Anlage-Umwelt-Korrelation',
    a: { label: 'Passiv', text: 'Eltern liefern Gene + Umwelt. **Nimmt mit dem Alter ab.**' },
    b: { label: 'Aktiv', text: 'Kind sucht sich passende Umwelt. **Nimmt mit dem Alter zu.**' },
    tipp: 'Evokativ (Umwelt reagiert auf Merkmale) bleibt über die Lebensspanne gleich.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Bronfenbrenner',
    a: { label: 'Mesosystem', text: 'Verbindung zweier Systeme, in denen das Kind **selbst** ist (Eltern ↔ Schule).' },
    b: { label: 'Exosystem', text: 'System **ohne direkten Kontakt** des Kindes (Arbeitsplatz der Eltern).' },
    tipp: 'Exo = «ausserhalb» des Kindes.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Konfundierung in Designs',
    a: { label: 'Querschnitt', text: 'konfundiert **Alter und Kohorte**.' },
    b: { label: 'Längsschnitt', text: 'konfundiert **Alter und Testzeitpunkt** (+ Testungseffekte).' },
    tipp: 'Querschnitt = verschiedene Kohorten; Längsschnitt = verschiedene Zeitpunkte.',
  },
  {
    ch: 'physisch',
    topic: 'Pränatale Schäden',
    a: { label: 'Embryonalstadium', text: '3.–8. Woche → **strukturelle** Schäden (Fehlbildungen).' },
    b: { label: 'Fötalstadium', text: 'ab 9. Woche → **funktionelle** Schäden (z. B. Intelligenzminderung).' },
    tipp: 'Im Embryo werden Strukturen gebaut, im Fötus reifen Funktionen.',
  },
  {
    ch: 'physisch',
    topic: 'Plastizität',
    a: { label: 'Erfahrungserwartend', text: 'Allgemeine Erfahrungen, **an sensible Phasen gebunden**.' },
    b: { label: 'Erfahrungsabhängig', text: 'Spezifische Erfahrungen, **lebenslang**, unabhängig von sensiblen Phasen.' },
    tipp: 'Das Gehirn «erwartet» zu einer bestimmten Zeit bestimmte Erfahrungen.',
  },
  {
    ch: 'lernen',
    topic: 'Negative Verstärkung ≠ Bestrafung',
    a: { label: 'Negative Verstärkung', text: 'Unangenehmes wird **weggenommen** → Verhalten **↑**.' },
    b: { label: 'Bestrafung', text: 'Verhalten **↓** (positiv: Unangenehmes hinzu; negativ: Angenehmes weg).' },
    tipp: 'Verstärkung erhöht IMMER die Verhaltenswahrscheinlichkeit. «Negativ» heisst nur «wegnehmen».',
  },
  {
    ch: 'lernen',
    topic: 'Präferenz & Gedächtnis',
    a: { label: 'Präferenz für Neues', text: 'Test direkt nach der Habituation → **Kurzzeitgedächtnis**.' },
    b: { label: 'Präferenz für Vertrautes', text: 'Spätere Testphase → **Langzeitgedächtnis**.' },
    tipp: 'Nach einer Weile wirkt das Bekannte wieder attraktiv.',
  },
  {
    ch: 'piaget',
    topic: 'Schemata anpassen',
    a: { label: 'Assimilation', text: 'Passt die **Information ans Schema** an (neuer Hund = Wauwau).' },
    b: { label: 'Akkommodation', text: 'Passt das **Schema an die Information** an (Wauwau kann auch klein und bissig sein).' },
    tipp: 'Akkommodation = das Schema ändert sich.',
  },
  {
    ch: 'piaget',
    topic: 'Welche Stufe?',
    a: { label: 'Sensumotorisch', text: '**Objektpermanenz**, **A-nicht-B-Suchfehler**.' },
    b: { label: 'Präoperational', text: '**Egozentrismus**, fehlende **Invarianz**, Zentrierung.' },
    tipp: 'Objekt → Baby; Glas umschütten → Kindergartenkind.',
  },
  {
    ch: 'kognition2',
    topic: 'Schlussfolgern',
    a: { label: 'Induktiv', text: 'Besonderes → Allgemeines, generiert **neues Wissen**.' },
    b: { label: 'Deduktiv', text: 'Allgemeines → Besonderes, **logisch zwingend**.' },
    tipp: 'De-duktiv = von oben herab (aus der Regel).',
  },
  {
    ch: 'kognition2',
    topic: 'Intelligenz nach Cattell',
    a: { label: 'Fluide', text: 'Weitgehend angeboren, ~ g; Höhepunkt im frühen Erwachsenenalter, **sinkt** dann.' },
    b: { label: 'Kristalline', text: 'Bildungs- und kulturabhängig (Wissen, Wortschatz); **bleibt stabil**.' },
    tipp: 'Fluid «fliesst weg», kristallin ist «fest».',
  },
  {
    ch: 'motorik',
    topic: 'Altersangaben',
    a: { label: 'Motorik', text: '**Keine genauen** Altersangaben werden geprüft (Lehrbücher uneinig).' },
    b: { label: 'Theory of Mind', text: 'Klassisch **3–5 J.**, mit vereinfachten Aufgaben schon mit **2½ J.**' },
    tipp: 'Bei ToM die Spanne und die Aufgabenschwierigkeit kennen.',
  },
];

/** Offene Kontrollfragen aus der Zusammenfassung mit Musterantworten. */
export const controlQuestions: ControlQuestion[] = [
  {
    ch: ['einfuehrung'],
    q: 'Warum kann ein Querschnittdesign keine Entwicklung im Sinne der Definition erfassen, und welches Problem löst das Konvergenzmodell?',
    answer: [
      'Entwicklung ist als **intraindividuelle** Veränderung definiert. Im Querschnitt wird jede Person nur **einmal** gemessen – es werden verschiedene Personen verschiedenen Alters verglichen, also nur interindividuelle Altersunterschiede.',
      'Zudem sind **Alter und Kohorte konfundiert**: Unterschiede können auf Generationenunterschiede (z. B. mehr Schulbildung) zurückgehen.',
      'Das **Konvergenzmodell** verfolgt mehrere Kohorten in kurzen, **überlappenden Längsschnitten**. So werden intraindividuelle Verläufe erfasst, mit weniger Aufwand als ein langer Längsschnitt; im Überlappungsalter lassen sich die Kohorten vergleichen (sie müssen dort vergleichbar sein).',
    ],
  },
  {
    ch: ['einfuehrung'],
    q: 'Ordnen Sie zu: Ein aktives Kind sucht sich sportliche Freunde. Welche Anlage-Umwelt-Korrelation liegt vor, und wie verändert sich ihre Bedeutung mit dem Alter?',
    answer: [
      '**Aktive** Anlage-Umwelt-Korrelation: Das Kind sucht/schafft sich selbst eine Umwelt, die zu seinen Anlagen passt.',
      'Sie wird **mit dem Alter immer wichtiger**, besonders ab dem Jugendalter. Die passive nimmt ab, die evokative bleibt gleich.',
    ],
  },
  {
    ch: ['physisch'],
    q: 'Warum führt Alkoholkonsum in der 4. Schwangerschaftswoche eher zu anderen Schäden als in der 30. Woche?',
    answer: [
      'Die 4. Woche liegt im **Embryonalstadium** (3.–8. Woche): Die Organsysteme werden gebildet – hochsensible Phase, Teratogene verursachen v. a. **strukturelle** Schäden (Fehlbildungen, z. B. Gesicht, Organe, Mikrozephalie).',
      'Die 30. Woche liegt im **Fötalstadium**: Strukturen sind angelegt, es entstehen eher **funktionelle** Schäden (z. B. verminderte Intelligenz, Verhaltensauffälligkeiten).',
      'Beim Alkohol gilt zudem: keine sicher unschädliche Dosis, und er wirkt als Ausnahme schon in den Wochen 1–2.',
    ],
  },
  {
    ch: ['lernen'],
    q: 'Ein Kind räumt sein Zimmer auf, damit die Eltern aufhören zu schimpfen. Welche Form des operanten Konditionierens ist das?',
    answer: [
      '**Negative Verstärkung**: Etwas Unangenehmes (Schimpfen) wird **weggenommen** bzw. hört auf.',
      'Folge: Das Verhalten (Aufräumen) wird **häufiger** – Verstärkung erhöht immer die Verhaltenswahrscheinlichkeit. Es ist keine Bestrafung.',
    ],
  },
  {
    ch: ['piaget', 'kognition2'],
    q: 'Ein 4-Jähriger sagt nach dem Umschütten, im hohen Glas sei mehr Saft. Welche Merkmale nach Piaget erklären das – und welche Kritik an Piaget zeigen neuere Befunde zu ToM?',
    answer: [
      'Das Kind ist in der **präoperationalen Stufe** (2–6 J.): **fehlendes Konzept der Erhaltung (Invarianz)**, **Zentrierung** auf eine Dimension (Höhe), statisches Denken und – laut Lohaus – fehlendes **reversibles Denken**.',
      'Kritik: Piaget **unterschätzt** kindliche Kompetenzen. ToM-Aufgaben werden klassisch zwischen 3 und 5 J. gelöst, mit **vereinfachten Anforderungen** (eingeübte Fragen, geringe Inhibition, keine sprachliche Antwort) schon mit **2½ J.** (Setoh, Scott & Baillargeon, 2016). Auch die Perspektivenübernahme gelingt mit einer leichteren Aufgabe (Bilderbuch) schon 3- bis 4-Jährigen – die Leistung hängt stark von der Aufgabenschwierigkeit ab.',
    ],
  },
];
