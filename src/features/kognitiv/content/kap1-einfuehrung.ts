import type { Chapter } from '../model';

export const kap1: Chapter = {
  id: 'einfuehrung',
  nr: 1,
  short: 'Einführung',
  title: 'Einführung: Geist, Automatizität und Reaktionszeitmethoden',
  pages: 'S. 1–4',
  lit: 'Foliensatz «Einführung»; Anderson (2013), Kap. 1',
  color: '#7c3aed',
  kern: [
    '**Kognition** (lat. *cognoscere*, «erkennen») = Studium der Funktionsweise des Geistes; untersucht werden die Prozesse **zwischen Reiz und Reaktion**. (F. 9)',
    'Der Geist ist **keine Videokamera**: Er interpretiert – Erleben ist subjektiv und kann fehlerhaft sein. (F. 10)',
    '**Kontext, Erwartungen und begrenzte Ressourcen** bestimmen, was wir wahrnehmen; meist liefern dieselben Regeln aber korrekte Ergebnisse. (F. 11–23)',
    'Vieles läuft **automatisch** (schnell, mühelos, unkontrolliert) – entlastend, aber fehleranfällig (**Stroop**). (F. 28–31)',
    '**Donders (1868):** Reaktionszeit + **Subtraktionsmethode** als Fenster zu geistigen Prozessen. (F. 32)',
    '**Informationsverarbeitungsansatz:** Kognition als Stufenfolge, in der abstrakte Information verarbeitet wird. (F. 34); (LB S. 7)',
    '**Sternberg (1966):** RT steigt linear mit der Mengengrösse; gleiche Steigung für Treffer/Nieten → **erschöpfende Suche**. (F. 37–40)',
    'Erweiterung: Verarbeitung nicht nur **sequenziell** und **bottom-up**, sondern auch **parallel** und **top-down**. (F. 41)',
  ],
  sections: [
    {
      id: 'gegenstand',
      title: 'Gegenstand und Teilgebiete',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Kognition',
              text: 'Lat. *cognoscere* = «erkennen». Studium der **Funktionsweise des Geistes**; untersucht werden die Prozesse **zwischen Reiz und Reaktion**. (F. 9)',
            },
            {
              term: 'Kognitive Psychologie (Anderson)',
              text: 'Wissenschaft davon, wie **Geist und Psyche organisiert** sind und **intelligentes Denken** hervorbringen. (LB S. 1)',
            },
          ],
        },
        {
          t: 'table',
          head: ['Alltag am Sechseläutenplatz …', 'Teilgebiet'],
          rows: [
            ['Dinge wahrnehmen', '**Wahrnehmung**'],
            ['eins nach dem anderen beachten', '**Aufmerksamkeit**'],
            ['sich das Buch auf dem Küchentisch vorstellen', '**Mentale Vorstellungen**'],
            ['sich erinnern', '**Gedächtnis**'],
            ['den Kinobesuch absagen', '**Urteilen, Denken & Entscheiden** (erst im Master, F. 2)'],
          ],
          caption: 'Alltagsbeispiel Sechseläutenplatz (F. 8)',
        },
      ],
    },
    {
      id: 'interpretiert',
      title: 'Der Geist interpretiert – Beispiele',
      blocks: [
        {
          t: 'p',
          text: 'Der Geist ist **keine Videokamera**: Er bildet die Welt nicht ab, sondern **interpretiert** sie. Erleben ist subjektiv und kann fehlerhaft sein. (F. 10) Täuschungen sind aber **Ausnahmen** – meist liefern dieselben Regeln korrekte Ergebnisse. (F. 12)',
        },
        {
          t: 'list',
          items: [
            '**Wahrnehmung:** Länge (Müller-Lyer-artige Pfeilfiguren, F. 11, 13), Grösse (**Ebbinghaus-Täuschung**, F. 14; Tunnel mit Tiefenhinweisen, F. 15), Helligkeit (**Checker-Shadow**: Felder A und B gleich grau, das Gehirn «rechnet» den Schatten heraus, F. 16).',
            '**Erwartungen** (Seelöwen-Dressur vs. Kostümball): Dasselbe mehrdeutige Bild wird je nach Instruktion anders gedeutet → **top-down**-Einfluss. (F. 19–22)',
            '**Aufmerksamkeit** ist begrenzt (Skoda-Spot). (F. 23)',
            '**Mentale Vorstellungen:** Rom liegt nördlicher als Philadelphia (ca. 42° vs. 40° N); Antwerpen nördlicher als Maastricht – Wissen ist in **vereinfachten, verzerrten mentalen Karten** organisiert (Kategorie «Land» statt exaktes Bild). (F. 24–25)',
            '**Gedächtnis:** Behalten wird der **«Gist»** (Kernbedeutung), nicht Details → falsche Erinnerung an passende, nicht gezeigte Wörter. (F. 26)',
            '**Denken:** **Heuristiken** als Abkürzung. Geburtstagsproblem (30 Personen): rund **70 %**, intuitiv stark unterschätzt. (F. 27)',
          ],
        },
        { t: 'widget', w: 'interpretiert' },
      ],
    },
    {
      id: 'automatizitaet',
      title: 'Automatizität',
      blocks: [
        {
          t: 'p',
          text: 'Automatische Prozesse sind **schnell, mühelos und unkontrolliert** – sie entlasten, sind aber fehleranfällig. (F. 28–31)',
        },
        {
          t: 'list',
          items: [
            'Doppelte/vertauschte Wörter werden **überlesen** («PARIS IN THE THE SPRING»). (F. 29)',
            '**F-Zählen:** 6 F; viele zählen 3, weil das F in **«OF»** (gesprochen «v», Funktionswort) überflogen wird. (F. 30)',
            '**Stroop-Effekt:** Druckfarbe benennen; **inkongruent** (ROT in Grün) ca. **900 ms** vs. **kongruent** ca. **800 ms** → ca. **100 ms Interferenz**, weil **Lesen nicht unterdrückt** werden kann. (F. 31) Schlüsselbegriff in Kap. 3. (LB S. 74)',
          ],
        },
        { t: 'widget', w: 'stroop' },
      ],
    },
    {
      id: 'geschichte',
      title: 'Geschichte',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1868 · Donders', text: 'Reaktionszeit-Experiment, **Subtraktionsmethode**.' },
            { title: '1879 · Wundt', text: 'Erstes psychologisches **Labor** (Leipzig); **analytische Introspektion** = geschulte Selbstbeobachtung. (LB S. 3)' },
            { title: '1885 · Ebbinghaus', text: '**Vergessenskurve**, Ersparnismethode.' },
            { title: '1890 · James', text: '*Principles of Psychology* – Beobachtung des eigenen Geistes, **keine Experimente**. (LB S. 5)' },
            { title: 'ab ca. 1920 · Behaviorismus', text: 'Nur **beobachtbares Verhalten**, keine geistigen Vorgänge. (LB S. 5)' },
            {
              title: '1950er · Kognitive Wende',
              text: '(u. a. Computer) → **Informationsverarbeitungsansatz**; nach Anderson 1950–1970, getragen von Leistungsforschung, Informationstheorie/KI, Linguistik. (LB S. 6)',
            },
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Analytische Introspektion', text: 'Methode **Wundts**: geschulte **Selbstbeobachtung** der eigenen Bewusstseinsinhalte im Labor. (LB S. 3)' },
            { term: 'Behaviorismus', text: 'Ab ca. 1920: Gegenstand ist nur **beobachtbares Verhalten**; geistige Vorgänge werden als Gegenstand **abgelehnt**. (LB S. 5)' },
            {
              term: 'Kognitive Wende',
              text: '1950er (nach Anderson 1950–1970): Rückkehr der geistigen Prozesse, u. a. durch den **Computer** als Modell → Informationsverarbeitungsansatz. Getragen von Leistungsforschung, Informationstheorie/KI, Linguistik. (F. 33); (LB S. 6)',
            },
          ],
        },
        { t: 'widget', w: 'geschichte-sort' },
      ],
    },
    {
      id: 'donders',
      title: 'Reaktionszeitmethoden: Donders',
      blocks: [
        {
          t: 'compare',
          items: [
            { title: 'Aufgabe A', sub: 'einfache Reaktionsaufgabe', text: 'Auf **jeden** Lichtblitz dieselbe Taste drücken → **Prozess 1** (Wahrnehmung).' },
            { title: 'Aufgabe B', sub: 'Wahlreaktionsaufgabe', text: 'Je nach Lichtblitz **andere** Taste → **Prozess 1 + Prozess 2** (binäre Entscheidung).' },
          ],
        },
        {
          t: 'formula',
          name: 'Subtraktionsmethode (Donders)',
          formula: 't_Entscheidung = RT_B − RT_A',
          legend: ['RT_A, RT_B: Reaktionszeiten der Aufgaben A und B', 'Die **Differenz** schätzt die Dauer des **zusätzlichen Teilprozesses**.'],
          source: 'F. 32',
        },
        { t: 'figure', fig: 'donders' },
        { t: 'widget', w: 'donders' },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Problem der Subtraktionsmethode (F. 36)',
          text: 'Annahme der **reinen Einfügung**: Man könne eine Stufe einfügen/weglassen, **ohne die übrigen zu verändern**. Das ist nicht gesichert; Stufen sind nicht direkt sichtbar.',
        },
        {
          t: 'defs',
          items: [
            { term: 'Subtraktionsmethode', text: '**Donders (1868):** RT einer Aufgabe mit zusätzlicher Stufe minus RT der Aufgabe ohne diese Stufe = Dauer der Stufe. Problem: Annahme der **reinen Einfügung**. (F. 32, 36)' },
            {
              term: 'Logik der additiven Faktoren',
              text: 'Faktoren, die **verschiedene Stufen** beeinflussen, wirken **additiv** auf die RT; Faktoren, die **dieselbe Stufe** beeinflussen, **interagieren**. Aus dem Muster schliesst man auf die Stufenstruktur (**Sternberg**). (F. 36–39)',
            },
          ],
        },
      ],
    },
    {
      id: 'sternberg',
      title: 'Sternberg-Paradigma (1966)',
      blocks: [
        {
          t: 'p',
          text: 'Ziffernmenge merken (1–6 Ziffern, z. B. 3, 9, 6), dann **Testziffer**: Gehört sie dazu? «Ja» = **Treffer**, «Nein» = **Niete**. (F. 37); (LB S. 7)',
        },
        {
          t: 'formula',
          name: 'Sternberg (1966)',
          formula: 'RT = 397 ms + 38 ms · u',
          legend: [
            '*u*: Umfang der Ziffernmenge',
            '**38 ms** = Dauer **eines Vergleichs** (= **Steigung**)',
            '**397 ms** = konstanter Anteil (Kodierung, Entscheidung, Antwort) (= **Achsenabschnitt**) (LB S. 8)',
          ],
          source: 'F. 38',
        },
        { t: 'widget', w: 'sternberg' },
        { t: 'figure', fig: 'sternberg-rt' },
        {
          t: 'table',
          head: ['Stufe', 'manipulierter Faktor'],
          rows: [
            ['Stimuluskodierung', 'Stimulusqualität (intakt, degradiert)'],
            ['serieller Vergleich', 'Umfang der Ziffern / Mengengrösse (1–6)'],
            ['binäre Entscheidung', 'Art der Antwort (Treffer, Niete)'],
            ['Übersetzung & Organisation der Antwort', 'relative Häufigkeit der Antwortarten (z. B. 50:50)'],
          ],
          caption: 'Stufen und Faktoren (F. 39)',
        },
        { t: 'figure', fig: 'sternberg-stufen' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Reizqualität wirkt nur auf die Kodierung',
          text: 'Schlechtere Reizqualität **verlängert die RT**, ändert aber die **Steigung nicht** (nur den Achsenabschnitt) → sie wirkt nur auf die **Kodierung**, nicht auf den Vergleich. (LB S. 8)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Selbstabbrechende Suche',
              text: 'Suche stoppt beim Fund. Nieten: *n* Vergleiche; Treffer im Mittel *n*/2 → **Treffer-Gerade halb so steil**.',
            },
            {
              title: 'Erschöpfende Suche',
              text: 'Es wird **immer die ganze Menge** verglichen → Treffer und Nieten **gleiche Steigung**. **Das ist der Befund.** (F. 40)',
            },
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Sternberg-Paradigma', text: 'Gedächtnis-Suchaufgabe (1966): Ziffernmenge (1–6) merken, Testziffer prüfen. **RT = 397 + 38·u** – linearer Anstieg, gleiche Steigung für Treffer und Nieten. (F. 37–40)' },
            { term: 'Erschöpfende Suche', text: 'Alle Elemente der Menge werden verglichen, auch nach einem Treffer → **gleiche Steigung** für Treffer und Nieten (Sternberg-Befund). (F. 40)' },
            { term: 'Selbstabbrechende Suche', text: 'Suche bricht beim Treffer ab → Treffer brauchen im Mittel *n*/2 Vergleiche → Treffer-Gerade **halb so steil** wie die Nieten-Gerade. (F. 40)' },
          ],
        },
      ],
    },
    {
      id: 'ansatz',
      title: 'Informationsverarbeitungsansatz und seine Grenzen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Informationsverarbeitungsansatz',
              text: 'Metapher: Kognition als **Abfolge von Stufen**, in denen abstrakte Information verarbeitet wird; ursprünglich **sequenziell** und **bottom-up**. (F. 34); (LB S. 7) «Ihr Geist ist mehr als ein Computer aus Fleisch.»',
            },
            { term: 'Bottom-up', text: '**Stimulusbasierte** Verarbeitung: vom Reiz zu höheren Stufen. (F. 41)' },
            { term: 'Top-down', text: 'Verarbeitung, die von **Vorwissen und Erwartungen** gesteuert wird. Eine der beiden Erweiterungen des Ansatzes. (F. 41)' },
            { term: 'Parallele Verarbeitung', text: 'Mehrere Prozesse **gleichzeitig** (z. B. Sprechen und Fahren). Die andere Erweiterung des Ansatzes. (F. 41)' },
            {
              term: 'Chinesisches Zimmer',
              text: '**Searle (1980):** Eine Person ohne Chinesischkenntnisse gibt nach einem Regelbuch korrekte Antworten – von aussen wirkt es wie Verstehen. **Symbolmanipulation ≠ Verstehen** → Grenze der Computermetapher. (F. 35)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Anwendung (F. 42)',
          text: 'Ein aufgemalter **3-D-Fussgängerstreifen** nutzt Schattierung → Tiefeneindruck → Fahrer bremsen.',
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: '**Top-down ≠ parallel:** zwei **verschiedene** Erweiterungen des Ansatzes.',
        },
      ],
    },
  ],
};
