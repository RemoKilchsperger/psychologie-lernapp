import type { ControlQuestion, KeyNumber, Pitfall } from '../model';

/** Prüfungsrelevante Zahlen und Befunde – kapitelübergreifend. */
export const keyNumbers: KeyNumber[] = [
  { ch: 'einfuehrung', value: '1868', text: 'Donders: Reaktionszeit-Experiment, Subtraktionsmethode', src: 'F. 32' },
  { ch: 'einfuehrung', value: '1879', text: 'Wundt: erstes psychologisches Labor (Leipzig), analytische Introspektion', src: 'LB S. 3' },
  { ch: 'einfuehrung', value: '1885', text: 'Ebbinghaus: Vergessenskurve, Ersparnismethode', src: 'F. 33' },
  { ch: 'einfuehrung', value: '1890', text: 'James: *Principles of Psychology* – keine Experimente', src: 'LB S. 5' },
  { ch: 'einfuehrung', value: 'ab ca. 1920', text: 'Behaviorismus: nur beobachtbares Verhalten', src: 'LB S. 5' },
  { ch: 'einfuehrung', value: '1950er', text: 'Kognitive Wende (nach Anderson 1950–1970)', src: 'LB S. 6' },
  { ch: 'einfuehrung', value: '≈ 900 vs. 800 ms', text: 'Stroop: inkongruent vs. kongruent → ca. 100 ms Interferenz', src: 'F. 31' },
  { ch: 'einfuehrung', value: '6 F', text: 'F-Zählen – viele zählen 3, weil das F in «OF» überflogen wird', src: 'F. 30' },
  { ch: 'einfuehrung', value: '≈ 70 %', text: 'Geburtstagsproblem: Wahrscheinlichkeit gemeinsamer Geburtstag bei 30 Personen', src: 'F. 27' },
  { ch: 'einfuehrung', value: '42° vs. 40° N', text: 'Rom liegt nördlicher als Philadelphia (verzerrte mentale Karten)', src: 'F. 24–25' },
  { ch: 'einfuehrung', value: '397 + 38·u', text: 'Sternberg (1966): 397 ms Achsenabschnitt, 38 ms pro Vergleich (Steigung)', src: 'F. 38; LB S. 8' },
  { ch: 'einfuehrung', value: '549 ms', text: 'Sternberg-Vorhersage für 4 Ziffern (397 + 4·38)', src: 'Kontrollfrage' },
  { ch: 'einfuehrung', value: '1–6', text: 'Umfang der Ziffernmenge im Sternberg-Paradigma', src: 'F. 37' },
  { ch: 'einfuehrung', value: '1980', text: 'Searle: Chinesisches Zimmer', src: 'F. 35' },
  { ch: 'wahrnehmung', value: '6 Mio. / 120 Mio.', text: 'Zapfen / Stäbchen pro Auge', src: 'F. 14; LB S. 28–29' },
  { ch: 'wahrnehmung', value: '≈ 800 000', text: 'Ganglienzellen pro Sehnerv', src: 'F. 16; LB S. 29' },
  { ch: 'wahrnehmung', value: '6 Schichten', text: 'CGL: 4 dorsale parvozelluläre, 2 ventrale magnozelluläre; links ipsilateral 2, 3, 5', src: 'F. 18' },
  { ch: 'wahrnehmung', value: '2 × 2 mm', text: 'Hypersäule in V1 (Hubel & Wiesel, 1977)', src: 'LB S. 31' },
  { ch: 'wahrnehmung', value: '7.3 Meilen', text: 'DARPA Grand Challenge 2004: bestes Fahrzeug (ca. 5 % der Strecke)', src: 'F. 8' },
  { ch: 'wahrnehmung', value: '36', text: 'Geone nach Biederman', src: 'F. 69; LB S. 37' },
  { ch: 'wahrnehmung', value: '21 % → 8 %', text: 'Fehler bei Flugzeug mit 3 vs. 4 Komponenten (Biederman, Ju & Clapper, 1985)', src: 'F. 72–73' },
  { ch: 'wahrnehmung', value: '65 ms', text: 'ab dieser Darbietungszeit sind Strichzeichnungen so gut wie Farbfotos (Biederman & Ju, 1988)', src: 'F. 75' },
  { ch: 'wahrnehmung', value: '36 vs. 23 %', text: 'Fehler bei fehlenden Teilen von Komponenten vs. fehlenden ganzen Komponenten (65 ms; bei 200 ms angeglichen)', src: 'F. 76' },
  { ch: 'wahrnehmung', value: '41 / 70 / 90 %', text: 'Sanocki et al. (1998): Kantenbild mit Hintergrund / ohne / Farbfoto korrekt', src: 'F. 89–90' },
  { ch: 'wahrnehmung', value: '535 ms', text: 'Basisebene am schnellsten verifiziert (vs. 590 superordinate, 660 subordinate; Rosch et al., 1976)', src: 'F. 77–79' },
  { ch: 'wahrnehmung', value: '60 s vs. 2 s', text: 'Deadline «Kopf» vs. «Bauch» bei Thompson & Tangen (2014)', src: 'F. 53–55' },
  { ch: 'wahrnehmung', value: 'B″ −0.11 vs. +0.27', text: 'Pistole vs. Ball halten → liberaleres Kriterium (Witt & Brockmole, 2012)', src: 'F. 91–92' },
  { ch: 'wahrnehmung', value: '50/0/0/50', text: 'perfekte Sensitivität: Hits/Miss/FA/TNEG', src: 'F. 62' },
  { ch: 'vorstellungen', value: '≈ 1 s → 4–4.5 s', text: 'Mentale Rotation: RT bei 0° bis 180° (Shepard & Metzler, 1971)', src: 'F. 5' },
  { ch: 'vorstellungen', value: '3 vs. 4 Links', text: 'Bobrow: Motor → Luke vs. Motor → Anker', src: 'F. 14' },
  { ch: 'vorstellungen', value: '≈ 211 ms', text: 'langsamer bei Detailfrage, wenn Kaninchen neben Elefant (klein) vorgestellt', src: 'F. 20' },
  { ch: 'vorstellungen', value: '63 % vs. 56 %', text: 'MVPA-AUC Perception vs. Imagery (Zufall 50 %; Johnson & Johnson, 2014)', src: 'F. 34–36' },
  { ch: 'vorstellungen', value: '13 vs. 5', text: 'Bower & Winzenz (1970): interagierendes Bild vs. stilles Wiederholen', src: 'F. 42' },
  { ch: 'vorstellungen', value: '33 → 60', text: 'Food Craving nach Essen-Vorstellung (Harvey et al., 2005)', src: 'F. 44' },
  { ch: 'aufmerksamkeit', value: '35-mal', text: 'wiederholte Wörter im unbeachteten Ohr nicht bemerkt (Moray, 1959)', src: 'F. 7' },
  { ch: 'aufmerksamkeit', value: '≈ 33 %', text: 'der Durchgänge: eigener Name im unbeachteten Ohr bemerkt (Moray)', src: 'F. 9' },
  { ch: 'aufmerksamkeit', value: '35 vs. 23 %', text: 'Eich (1984): seltene Schreibweise «fare» nach unbeachtetem «taxi fare»', src: 'F. 15' },
  { ch: 'aufmerksamkeit', value: '40 vs. 38 %', text: 'Eich: Hits vs. FA im Wiedererkennen unbeachteter Wörter → Zufallsniveau', src: 'F. 15' },
  { ch: 'aufmerksamkeit', value: '76.4 vs. 33.4 %', text: 'Treisman & Riley (1969): Ergebnis A vs. B → Treisman adäquater', src: 'F. 16' },
  { ch: 'aufmerksamkeit', value: '478 vs. 538 ms', text: 'Forster & Lavie (2008): einfache Aufgabe ohne/mit Distraktor (signifikant)', src: 'F. 17' },
  { ch: 'aufmerksamkeit', value: '694 vs. 713 ms', text: 'Forster & Lavie: schwierige Aufgabe ohne/mit Distraktor (n. s.)', src: 'F. 17' },
  { ch: 'aufmerksamkeit', value: '55 / 110 ms', text: 'Lachter et al. (2004): kein Priming bei 55 ms, Priming ab 110 ms (Slippage)', src: 'F. 19–21' },
];

export const pitfalls: Pitfall[] = [
  {
    ch: 'einfuehrung',
    topic: 'Reaktionszeitmethoden',
    a: { label: 'Subtraktionsmethode (Donders)', text: '**Fügt eine Stufe ein** (Aufgabe B = A + Entscheidung) und subtrahiert die RTs.' },
    b: { label: 'Additive Faktoren (Sternberg)', text: '**Variiert Faktoren** und schliesst aus **Additivität vs. Interaktion** auf die Stufen.' },
    tipp: 'Donders = einfügen und subtrahieren; Sternberg = Faktoren variieren.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Sternberg-Formel',
    a: { label: '38 ms', text: '**Steigung** – Dauer **eines Vergleichs** pro Ziffer.' },
    b: { label: '397 ms', text: '**Achsenabschnitt** – konstanter Anteil (Kodierung, Entscheidung, Antwort).' },
    tipp: 'Reizqualität ändert nur den Achsenabschnitt (Kodierung), nicht die Steigung.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Erschöpfende vs. selbstabbrechende Suche',
    a: { label: 'Erschöpfend', text: 'Treffer und Nieten haben **gleiche Steigung** – das ist der Befund.' },
    b: { label: 'Selbstabbrechend', text: 'Treffer-Gerade wäre **halb so steil** (im Mittel *n*/2 Vergleiche).' },
    tipp: 'Erkennbar an gleichen **Steigungen**, nicht an gleichen Achsenabschnitten.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Historische Positionen',
    a: { label: 'Wundt vs. James', text: 'Wundt = **Labor + Introspektion**; James = Beobachtung des eigenen Geistes, **keine Experimente**.' },
    b: { label: 'Behaviorismus', text: 'Lehnt geistige Vorgänge als Gegenstand **ab** – nur beobachtbares Verhalten.' },
    tipp: '1879 Wundt (Labor) · 1890 James (keine Experimente) · ab 1920 Behaviorismus.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Erweiterungen des Informationsverarbeitungsansatzes',
    a: { label: 'Top-down', text: 'Verarbeitung gesteuert durch **Vorwissen und Erwartungen** (Gegenteil: bottom-up = stimulusbasiert).' },
    b: { label: 'Parallel', text: 'Mehrere Prozesse **gleichzeitig** (Gegenteil: sequenziell).' },
    tipp: 'Zwei verschiedene Erweiterungen – top-down ≠ parallel.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Photorezeptoren',
    a: { label: 'Zapfen', text: 'ca. 6 Mio., **Fovea**, Farbe, hohe Auflösung, wenig dämmerungsempfindlich.' },
    b: { label: 'Stäbchen', text: 'ca. 120 Mio., **Peripherie**, keine Farbe, hoch dämmerungsempfindlich; **fehlen in der Fovea**.' },
    tipp: 'Im blinden Fleck gibt es gar keine Rezeptoren.',
  },
  {
    ch: 'wahrnehmung',
    topic: '«Dorsal / ventral»',
    a: { label: 'CGL-Schichten', text: '4 **dorsale parvozelluläre**, 2 **ventrale magnozelluläre** Schichten – reine **Lageangabe**.' },
    b: { label: 'Kortikale Bahnen', text: '**Dorsal = Wo** (parietal), **ventral = Was** (temporal).' },
    tipp: 'Magnozellulär speist die Wo-Bahn, parvozellulär die Was-Bahn – obwohl die magno-Schichten im CGL ventral liegen!',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Was- und Wo-Bahn',
    a: { label: 'Was', text: '**ventral**, **Temporallappen**: Objekterkennung; parvozellulär (Farbe, Form).' },
    b: { label: 'Wo', text: '**dorsal**, **Parietallappen**: Lokalisation; magnozellulär (Bewegung). Milner & Goodale: Pfad für **Handlungen**.' },
    tipp: 'Was = temporal (Schläfe – «was ist das?»), Wo = parietal (Scheitel).',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Balken- vs. Kantendetektor',
    a: { label: 'Balkendetektor', text: '**On-Zentren in einer Reihe**.' },
    b: { label: 'Kantendetektor', text: '**Eine Reihe On-Off + eine Reihe Off-On**.' },
    tipp: 'Kante = Hell neben Dunkel → braucht beide Zelltypen.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Bindungsproblem',
    a: { label: 'Gemeint', text: 'Merkmale **verschiedener Dimensionen** verbinden (Orientierung + Farbe); «Leim» = räumlicher Ort, braucht Aufmerksamkeit.' },
    b: { label: 'Nicht gemeint', text: 'Linie A mit Linie B zu einer Kontur verbinden (das ist **Konturintegration**).' },
    tipp: 'Bindung = über Dimensionen hinweg.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'SDT: Sensitivität vs. Kriterium',
    a: { label: 'Sensitivität d′', text: '**Abstand der Verteilungen** – wie gut Signal und Rauschen trennbar sind.' },
    b: { label: 'Kriterium', text: 'Wo die Ja/Nein-Grenze liegt – verschiebt nur die **Fehlerarten**.' },
    tipp: 'Unabhängig: Experten (Thompson & Tangen) haben höhere Sensitivität **und** ein konservativeres Kriterium.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Liberal vs. konservativ',
    a: { label: 'Liberal', text: 'Kriterium links → viele Hits **und** viele **Falschalarme**.' },
    b: { label: 'Konservativ', text: 'Kriterium rechts → wenige FA, dafür mehr **Misses**.' },
    tipp: 'Konservativ = mehr Misses, nicht mehr Falschalarme.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Biederman: was schadet mehr?',
    a: { label: 'Fehlende Teile von Komponenten', text: 'Schaden **mehr** (ca. 36 % Fehler bei 65 ms).' },
    b: { label: 'Fehlende ganze Komponenten', text: 'Schaden **weniger** (ca. 23 %).' },
    tipp: 'Gilt bei kurzer Darbietung (65 ms); bei 200 ms angeglichen.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Entry level',
    a: { label: 'Normalfall', text: 'Entry level = **Basisebene** (Vogel, Hund) – am schnellsten (Rosch).' },
    b: { label: 'Experten', text: 'Subordinate so schnell wie basic → entry level **verschiebt sich nach unten** (Tanaka & Taylor).' },
    tipp: 'Nicht die spezifischste Ebene – ausser bei Experten.',
  },
  {
    ch: 'wahrnehmung',
    topic: 'Schablone vs. Merkmal (Folie F. 68)',
    a: { label: 'Schablonenabgleich', text: '**Prototypische Form** (Rotkehlchen) → individuelle Entitäten.' },
    b: { label: 'Merkmalsanalyse', text: '**Keine prototypische Form** (Emu) → Kategorien.' },
    tipp: 'Zuordnung laut Folie – so lernen.',
  },
  {
    ch: 'vorstellungen',
    topic: 'Wer argumentiert wie?',
    a: { label: 'Lea & Bobrow', text: 'Argumentieren **propositional**: Anzahl Zwischenobjekte bzw. Links im Netz erklären die RT.' },
    b: { label: 'Kosslyn (1978)', text: 'Kontrolliert die Zwischenobjekte → Scanzeit **linear zur Distanz** → bildhaft.' },
    tipp: 'Lea = Zwischenobjekte, Bobrow = Links, Kosslyn = Distanz.',
  },
  {
    ch: 'vorstellungen',
    topic: 'Versuchsleitereffekte',
    a: { label: 'Verschoben', text: 'Die **Höhe** (das Niveau) der Scanzeiten.' },
    b: { label: 'Unverändert', text: 'Der **lineare Distanzeffekt**.' },
    tipp: 'Intons-Peterson: Erwartung ändert das Niveau, nicht die Steigung.',
  },
  {
    ch: 'vorstellungen',
    topic: 'V1-Topographie',
    a: { label: 'Kleines Vorstellungsbild', text: '**posterior** (entspricht der Fovea).' },
    b: { label: 'Grosses Vorstellungsbild', text: '**anterior** (entspricht der Peripherie).' },
    tipp: 'Kosslyn et al. 1993/1995 (PET): Aktivierung wandert mit der Grösse nach vorne.',
  },
  {
    ch: 'vorstellungen',
    topic: 'Beteiligung vs. Funktion',
    a: { label: 'PET / fMRI', text: 'Zeigen **Aktivierung** = Beteiligung.' },
    b: { label: 'TMS', text: 'Stört das Areal → zeigt **funktionelle (ursächliche) Bedeutung**.' },
    tipp: 'Aktivierung ≠ Funktion – erst TMS beantwortet Hypothese B.',
  },
  {
    ch: 'vorstellungen',
    topic: 'Mentale Rotation',
    a: { label: 'Bildebene', text: 'RT linear mit dem Winkel.' },
    b: { label: 'Bildtiefe', text: 'Ebenfalls linear – **nicht langsamer** als die Ebene → 3-D-Repräsentation.' },
    tipp: 'Tiefe ist nicht langsamer!',
  },
  {
    ch: 'vorstellungen',
    topic: 'Doppelte Dissoziation',
    a: { label: 'R. M. (Farah et al., 1993)', text: 'Wahrnehmung OK, **Vorstellung gestört** (kein Zeichnen aus dem Gedächtnis).' },
    b: { label: 'C. K. (Behrmann et al., 1994)', text: '**Wahrnehmung gestört** (visuelle Agnosie), Vorstellung OK.' },
    tipp: 'R. M. = «R» wie «Repräsentation im Kopf fehlt»; C. K. = «kann nicht erkennen».',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Früh oder spät?',
    a: { label: 'Treisman', text: 'Gehört zur **frühen** Selektion – Dämpfung **vor** der Bedeutungsanalyse, obwohl Bedeutung (tiefe Schwellen) durchkommen kann.' },
    b: { label: 'Deutsch & Deutsch', text: '**Späte** Selektion – Engpass auf der **Reaktionsstufe**, alles wird semantisch verarbeitet.' },
    tipp: 'Früh = Broadbent + Treisman; spät = Deutsch & Deutsch.',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Filter vs. Dämpfung',
    a: { label: 'Broadbent', text: 'Unbeachtetes wird **blockiert** (Alles-oder-nichts).' },
    b: { label: 'Treisman', text: 'Unbeachtetes wird **abgeschwächt** – Wörter mit tiefer Schwelle (eigener Name) kommen durch.' },
    tipp: 'Cocktailparty-Effekt erklärt Treisman, nicht Broadbent.',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Treisman & Riley (1969)',
    a: { label: 'Widerlegt', text: '**Deutsch & Deutsch** (sagt A = B voraus; Ergebnis 76.4 vs. 33.4 %).' },
    b: { label: 'Gestützt', text: '**Treisman** (sagt A > B voraus).' },
    tipp: 'A ≠ B widerlegt die späte Selektion, nicht Treisman.',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Belastungsarten',
    a: { label: 'Perzeptuelle Belastung', text: '**Hohe** Belastung **schützt** vor Ablenkung (Forster & Lavie; Yi et al.: PPA-Effekt verschwindet).' },
    b: { label: 'Arbeitsgedächtnisbelastung', text: 'Wirkt **anders**: Bei 2-back bleibt der Wiederholungseffekt erhalten (Yi et al.).' },
    tipp: 'Nicht jede Belastung ist «Load» im Sinne von Lavie.',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Leakage vs. Slippage',
    a: { label: 'Leakage', text: 'Info sickert **ohne** Aufmerksamkeit durch → spricht **gegen** Broadbent.' },
    b: { label: 'Slippage', text: 'Aufmerksamkeit rutscht **kurz** auf den Reiz → Broadbent **bleibt gültig**.' },
    tipp: 'Kein Priming bei 55 ms, Priming ab 110 ms → Slippage.',
  },
  {
    ch: 'aufmerksamkeit',
    topic: 'Eich (1984)',
    a: { label: 'Explizit', text: 'Wiedererkennen unbeachteter Wörter auf **Zufallsniveau** (40 % Hits vs. 38 % FA).' },
    b: { label: 'Implizit', text: '**Rechtschreib-Bias trotzdem vorhanden** (35 vs. 23 % «fare»).' },
    tipp: 'Semantische Verarbeitung ohne bewusste Erinnerung.',
  },
];

export const controlQuestions: ControlQuestion[] = [
  /* ── 1 Einführung ── */
  {
    ch: ['einfuehrung'],
    q: 'Wie berechnet Donders die Dauer der Entscheidung, und welche Annahme ist dabei problematisch?',
    answer: [
      '**t_Entscheidung = RT_B − RT_A**: Wahlreaktionsaufgabe (Wahrnehmung + binäre Entscheidung) minus einfache Reaktionsaufgabe (nur Wahrnehmung). (F. 32)',
      'Problematisch ist die Annahme der **reinen Einfügung**: dass man eine Stufe einfügen kann, **ohne die übrigen Stufen zu verändern**. Stufen sind nicht direkt sichtbar. (F. 36)',
    ],
  },
  {
    ch: ['einfuehrung'],
    q: 'Wie lange dauert im Sternberg-Paradigma die Antwort bei einer Menge von 4 Ziffern?',
    answer: ['RT = 397 + 38 · u = 397 + 4 · 38 = **549 ms**. (F. 38)'],
  },
  {
    ch: ['einfuehrung'],
    q: 'Welches Datenmuster hätte eine selbstabbrechende Suche erzeugt?',
    answer: [
      'Nieten bräuchten immer *n* Vergleiche, Treffer im Mittel nur *n*/2 → die **Treffer-Gerade wäre halb so steil** wie die Nieten-Gerade. (F. 40)',
      'Gefunden wurden **gleiche Steigungen** → erschöpfende Suche.',
    ],
  },
  {
    ch: ['einfuehrung'],
    q: 'Welcher Faktor beeinflusst nur den Achsenabschnitt, nicht die Steigung – und was folgt daraus?',
    answer: [
      'Die **Stimulusqualität** (intakt vs. degradiert): schlechtere Qualität verlängert die RT, ändert aber die Steigung nicht. (LB S. 8)',
      'Folgerung: Sie wirkt nur auf die Stufe der **Stimuluskodierung**, nicht auf den seriellen Vergleich → Faktoren verschiedener Stufen wirken **additiv**.',
    ],
  },
  {
    ch: ['einfuehrung'],
    q: 'Was soll Searles Chinesisches Zimmer zeigen?',
    answer: [
      'Eine Person ohne Chinesischkenntnisse beantwortet Fragen korrekt nach einem Regelbuch – von aussen wirkt es wie Verstehen.',
      '**Symbolmanipulation ≠ Verstehen** → Grenze der Computermetapher des Informationsverarbeitungsansatzes. (F. 35)',
    ],
  },
  /* ── 2 Wahrnehmung ── */
  {
    ch: ['wahrnehmung'],
    q: 'Welche Information gelangt vom linken Gesichtsfeld in welche Hemisphäre, und wo kreuzen die Fasern?',
    answer: [
      'Das **linke Gesichtsfeld** gelangt in die **rechte Hemisphäre**.',
      'Im **Chiasma opticum** kreuzen die **nasalen** Fasern (die temporalen bleiben auf ihrer Seite). Weiter über CGL (Thalamus) zum visuellen Kortex. (F. 17); (LB S. 29)',
    ],
  },
  {
    ch: ['wahrnehmung'],
    q: 'Wie entsteht aus On-Zentrum-Zellen ein Balkendetektor, aus On-Off- und Off-On-Zellen ein Kantendetektor?',
    answer: [
      '**Balkendetektor:** mehrere On-Zentrum-Zellen, deren Zentren **in einer Reihe** liegen, konvergieren auf eine V1-Zelle → maximale Antwort auf einen hellen Balken dieser **Orientierung**.',
      '**Kantendetektor:** eine Reihe **On-Off**-Zellen neben einer Reihe **Off-On**-Zellen → maximale Antwort auf eine Hell-Dunkel-**Kante**. (F. 24–25)',
    ],
  },
  {
    ch: ['wahrnehmung'],
    q: 'Eine Person sagt fast immer «match». Was passiert mit Hits, FA und d′?',
    answer: [
      'Sehr **liberales** Kriterium → **viele Hits**, aber auch **viele Falschalarme** (wenige Misses, wenige TNEG).',
      '**d′ bleibt unverändert** – das Kriterium verschiebt nur die Fehlerarten; der Punkt wandert auf derselben ROC-Kurve nach oben rechts. (F. 60–61)',
    ],
  },
  {
    ch: ['wahrnehmung'],
    q: 'Was zeigen Sanocki et al. (1998) gegen Biedermans Theorie?',
    answer: [
      'Kantenbilder **mit Hintergrund** werden nur zu ca. **41 %** korrekt erkannt (ohne Hintergrund ca. 70 %, Farbfotos ca. 90 %).',
      'In **natürlichen Szenen** reichen Kanten/Geone nicht – es braucht **Farbe/Oberfläche**. (F. 89–90)',
    ],
  },
  {
    ch: ['wahrnehmung'],
    q: 'Warum gelten Gestaltprinzipien nur «ceteris paribus»? Beispiel nennen.',
    answer: [
      'Jedes Prinzip gilt nur **«im Übrigen gleich»**, weil Prinzipien **konkurrieren** können.',
      'Beispiel: **Verbundenheit schlägt Nähe** (F. 38). Wie die Prinzipien integriert werden, ist ungelöst (Quinlan & Wilton, 1998; F. 39).',
    ],
  },
  /* ── 3 Vorstellungen ── */
  {
    ch: ['vorstellungen'],
    q: 'Was zeigt die lineare Beziehung zwischen Rotationswinkel und RT?',
    answer: [
      'Mentale Rotation verläuft **analog zu einer physikalischen Drehung**: je grösser der Winkel, desto länger (ca. 1 s bei 0° bis 4–4.5 s bei 180°).',
      'Da die Tiefe nicht langsamer ist als die Ebene: **3-D-Repräsentation**. Spricht für analoge/bildhafte Repräsentationen. (F. 5)',
    ],
  },
  {
    ch: ['vorstellungen'],
    q: 'Wie erklärt Bobrow Kosslyns Bootbefunde ohne Bild?',
    answer: [
      'Mit einer **strukturellen Beschreibung** (≈ semantisches Netz): Motor → Luke = **3 Links**, Motor → Anker = **4 Links**.',
      'Mehr Links = längere Suche → gleiche Vorhersage **ohne Bild**; das Bilderleben ist ein **Epiphänomen**. (F. 14)',
    ],
  },
  {
    ch: ['vorstellungen'],
    q: 'Welche Vorhersage machen topographische V1-Karten für grosse vs. kleine Vorstellungsbilder, und wurde sie bestätigt?',
    answer: [
      'Fovea liegt **posterior**, Peripherie **anterior** → **kleine** Bilder sollten weiter **posterior**, **grosse** weiter **anterior** aktivieren.',
      'Bestätigt: **Kosslyn et al. (1993, 1995), PET** – Aktivierung wandert mit der Grösse nach anterior. (F. 24–33); (LB S. 83)',
    ],
  },
  {
    ch: ['vorstellungen'],
    q: 'Warum ist die TMS-Studie stärker als PET-Befunde?',
    answer: [
      'PET/fMRI zeigen nur **Aktivierung** (Beteiligung); Aktivierung ≠ Funktion.',
      'TMS **stört** V1 gezielt: Die RT steigt bei Wahrnehmung **und** Vorstellung gegenüber Sham → V1 ist **ursächlich/funktionell** beteiligt (Kosslyn et al., 1999). (F. 37–38); (LB S. 84)',
    ],
  },
  {
    ch: ['vorstellungen'],
    q: 'Was bedeutet «doppelte Dissoziation» am Beispiel R. M./C. K.?',
    answer: [
      '**R. M.:** Wahrnehmung OK, Vorstellung gestört. **C. K.:** Wahrnehmung gestört (visuelle Agnosie), Vorstellung OK.',
      'Jede Funktion kann ohne die andere ausfallen → Wahrnehmung und Vorstellung beruhen auf **nicht identischen Systemen**. (F. 39)',
    ],
  },
  /* ── 4 Aufmerksamkeit ── */
  {
    ch: ['aufmerksamkeit'],
    q: 'Welche Merkmale des unbeachteten Kanals bemerkten Cherrys Versuchspersonen, welche nicht?',
    answer: [
      '**Bemerkt (physikalisch):** Stimme vs. Geräusch, männlich vs. weiblich.',
      '**Nicht bemerkt (Bedeutung):** Inhalt, Sprache, vorwärts vs. rückwärts. (F. 7)',
    ],
  },
  {
    ch: ['aufmerksamkeit'],
    q: 'Wie erklärt die Dämpfungstheorie den Cocktailparty-Effekt?',
    answer: [
      'Der unbeachtete Kanal wird **abgeschwächt, nicht blockiert**.',
      'Wichtige Wörter wie der **eigene Name** haben eine **tiefe Schwelle** in den «Dictionary Units» → auch das schwache Signal reicht zur Erkennung. (F. 11)',
    ],
  },
  {
    ch: ['aufmerksamkeit'],
    q: 'Was sagen Broadbent, Treisman und Deutsch & Deutsch für Treisman & Riley (1969) vorher, und was kam heraus?',
    answer: [
      '**Treisman:** A > B (unbeachtetes Ohr gedämpft). **Deutsch & Deutsch:** A = B (alles voll verarbeitet). [Ergänzung] Broadbent würde für das unbeachtete Ohr praktisch keine Entdeckung erwarten.',
      'Ergebnis **76.4 % vs. 33.4 %** → A > B, aber B deutlich > 0 → **Treisman adäquater**, Deutsch & Deutsch widerlegt. (F. 16)',
    ],
  },
  {
    ch: ['aufmerksamkeit'],
    q: 'Unter welcher Bedingung stört ein irrelevanter Distraktor nach Forster & Lavie, und warum?',
    answer: [
      'Nur bei **geringer perzeptueller Belastung** (einfache Aufgabe: 478 vs. 538 ms, signifikant; schwierig: 694 vs. 713 ms, n. s.).',
      'Bei geringer Belastung bleibt **freie Kapazität**, die automatisch auch Irrelevantes verarbeitet (wie späte Selektion); bei hoher Belastung ist sie ausgeschöpft (wie frühe Selektion). (F. 17)',
    ],
  },
  {
    ch: ['aufmerksamkeit'],
    q: 'Warum zeigt fehlendes Priming bei 55 ms, dass Slippage statt Leakage vorliegt?',
    answer: [
      'Bei **Leakage** müsste der Prime auch **ganz ohne Aufmerksamkeit** (sehr kurze Darbietung) wirken.',
      'Priming tritt aber erst **ab 110 ms** auf – genug Zeit, dass die Aufmerksamkeit kurz auf den Prime **rutscht** → Slippage. Ohne Aufmerksamkeit keine semantische Verarbeitung = **moderne Broadbent-Version**. (F. 19–21)',
    ],
  },
  /* ── kapitelübergreifend ── */
  {
    ch: ['wahrnehmung', 'aufmerksamkeit'],
    q: 'Warum braucht es für das Bindungsproblem Aufmerksamkeit – und was hat das mit dem Flaschenhals zu tun?',
    answer: [
      'Merkmale verschiedener Dimensionen werden über den **räumlichen Ort** verbunden; diesen Ort auszuwählen ist Aufgabe der **Aufmerksamkeit**. (Wahrn. F. 42); (LB S. 74)',
      'Da Aufmerksamkeit ein (serieller) **Flaschenhals** ist, kann nicht alles gleichzeitig gebunden werden. (Aufm. F. 2)',
    ],
  },
  {
    ch: ['einfuehrung', 'wahrnehmung', 'vorstellungen'],
    q: 'Nenne je ein Beispiel für top-down-Einflüsse aus der Einführung, der Wahrnehmung und den mentalen Vorstellungen.',
    answer: [
      '**Einführung:** Seelöwen-Dressur vs. Kostümball – dasselbe Bild wird je nach Instruktion anders gedeutet. (Einf. F. 19–22)',
      '**Wahrnehmung:** Dror et al. (2006) – Kontextinfo «FBI-Fehlmatch» ändert Experten-Urteile; Biederman et al. (1973) – Szenenkontext.',
      '**Vorstellungen:** Intons-Peterson (1983) – Versuchsleiter-Erwartung verschiebt die Scanzeiten (Höhe).',
    ],
  },
  {
    ch: ['einfuehrung', 'vorstellungen'],
    q: 'Was haben Sternbergs Gedächtnissuche und Shepard & Metzlers mentale Rotation methodisch gemeinsam?',
    answer: [
      'Beide schliessen aus einem **linearen Anstieg der RT** auf einen geistigen Prozess: pro Ziffer ein Vergleich (38 ms) bzw. pro Grad Drehung ein Stück Rotation.',
      'Beide nutzen die **Reaktionszeit als Fenster** zu geistigen Prozessen (Tradition seit Donders).',
    ],
  },
];
