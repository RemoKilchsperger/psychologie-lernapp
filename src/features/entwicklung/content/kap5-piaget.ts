import type { Chapter } from '../model';

export const kap5: Chapter = {
  id: 'piaget',
  nr: 5,
  short: 'Kognition I – Piaget',
  title: 'Kognition I: Piagets Theorie',
  date: '29.10.',
  folien: 'Fol. 36–43',
  lohaus: '2.5 (ohne Tab. 2.5) · Kap. 9 S. 146 (Definition Kognition)',
  color: '#d55181',
  kern: [
    'Das Kind ist ein **aktiver, intrinsisch motivierter Lerner**.',
    '**Assimilation** (Information ans Schema anpassen) und **Akkommodation** (Schema an Information anpassen) führen zum Äquilibrium.',
    '4 Stufen: **sensumotorisch** (0–2) → **präoperational** (2–6) → **konkret-operational** (7–11) → **formal-operational** (ab 12).',
    'Kritik: Piaget **unterschätzt** kindliche Kompetenzen und nimmt einen Stufenverlauf an.',
  ],
  sections: [
    {
      id: 'kognition',
      title: 'Kognition und Grundannahmen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Kognitionen',
              text: 'Mentale Prozesse (Oberbegriff «Denken»): Lern- und Gedächtnisprozesse, Informationsverarbeitung und Problemlösen, Handlungsplanung und -steuerung, Wissenserwerb, komplexe Denkprozesse. (Fol. 36)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Grundannahmen Piagets (Fol. 37; Notiz)',
          items: [
            '**Intrinsische Motivation** des Kindes',
            '**Geringe Bedeutung** der Stimulation durch die soziale Umgebung',
            '**Stufenabfolge** = diskontinuierliche Entwicklung: stufenweise grosse Veränderungen statt stetig',
          ],
        },
      ],
    },
    {
      id: 'schema',
      title: 'Schema, Assimilation, Akkommodation',
      blocks: [
        {
          t: 'defs',
          items: [
            { term: 'Schema', text: 'Denkeinheit zur Verarbeitung von Information. (Fol. 37)' },
            { term: 'Assimilation', text: 'Einordnung von Information in vorhandene Schemata. (Fol. 37)' },
            { term: 'Akkommodation', text: 'Anpassung der Schemata an neue Information. (Fol. 37)' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Assimilation misslingt', text: 'Die neue Information passt nicht ins Schema' },
            { title: 'Disäquilibrium', text: 'Ungleichgewicht zwischen Schema und Erfahrung' },
            { title: 'Akkommodation', text: 'Das Schema wird angepasst' },
            { title: 'Äquilibrium', text: 'Gleichgewicht ist wiederhergestellt' },
            { title: 'Adaptation', text: 'Zunehmende Anpassung an die Umgebung' },
          ],
        },
        { t: 'figure', fig: 'wauwau' },
        {
          t: 'callout',
          tone: 'achtung',
          text: 'Assimilation passt die **Information ans Schema** an, Akkommodation das **Schema an die Information**.',
        },
      ],
    },
    {
      id: 'stufen',
      title: 'Die vier Stufen',
      blocks: [
        { t: 'widget', w: 'piaget-stufen' },
        {
          t: 'table',
          head: ['Stufe', 'Alter', 'Zentrale Merkmale'],
          rows: [
            [
              '**1 Sensumotorisch**',
              '0–24 Monate',
              '**Objektpermanenz** entwickelt sich (versteckte Objekte existieren weiter); Verinnerlichung äusserer Handlungen: sprachliche Überlagerung ermöglicht handlungsunabhängiges Denken → qualitativer Sprung. **A-nicht-B-Suchfehler** (Fol. 39–40)',
            ],
            [
              '**2 Präoperational**',
              '2–6 Jahre',
              '**Egozentrismus** (mangelnde Perspektivenübernahme, Drei-Berge-Experiment); statisches, wenig prozesshaftes Denken; fehlendes Konzept der **Erhaltung (Invarianz)**; **Zentrierung** auf eine Dimension/einen Zustand (Fol. 41)',
            ],
            [
              '**3 Konkret-operational**',
              '7–11 Jahre',
              'Mehrdimensionales Denken hebt die präoperationalen Begrenzungen auf; Perspektivenübernahme, prozesshaftes Denken, logische und arithmetische Operationen, Handlungsplanung, Konzeption von Raum und Zeit – aber **an Konkretes gebunden** (Fol. 42)',
            ],
            [
              '**4 Formal-operational**',
              'ab 12 Jahren',
              'Zunehmend **abstraktes** Denken, systematisches Denken nach formal-logischen Regeln, **hypothetisches** Durchdenken von Alternativen (Pendelversuch) (Fol. 42)',
            ],
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Objektpermanenz', text: 'Wissen, dass versteckte Objekte weiter existieren. Entwickelt sich in der sensumotorischen Stufe. (Fol. 39)' },
            {
              term: 'A-nicht-B-Suchfehler',
              text: 'Das Kind sucht am alten Ort A, obwohl das Objekt sichtbar nach B versteckt wurde. (Fol. 40)',
            },
            { term: 'Egozentrismus', text: 'Mangelnde Perspektivenübernahme (Drei-Berge-Experiment); präoperationale Stufe. (Fol. 41)' },
            {
              term: 'Erhaltung (Invarianz)',
              text: 'Verständnis, dass Menge/Masse/Anzahl gleich bleiben, wenn sich nur die äussere Form ändert. Fehlt in der präoperationalen Stufe. (Fol. 41)',
            },
            { term: 'Zentrierung', text: 'Ausrichtung auf nur eine Dimension bzw. einen Zustand (z. B. nur Höhe des Glases). (Fol. 41)' },
          ],
        },
        { t: 'figure', fig: 'erhaltung' },
        {
          t: 'callout',
          tone: 'ergaenzung',
          title: 'LB S. 32',
          text: [
            'Ursache fehlender Erhaltung ist u. a. fehlendes **reversibles Denken** (die Umformung gedanklich rückgängig machen).',
            'Perspektivenübernahme hängt stark von der **Aufgabenschwierigkeit** ab: Mit einem Bilderbuch (Löwe vorne, Elefant hinten) gelingt sie schon 3- bis 4-Jährigen.',
          ],
        },
      ],
    },
    {
      id: 'bewertung',
      title: 'Bewertung',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: '+ Stärken',
              bullets: [
                'Anregung für die Forschung',
                'Konzepte wie Objektpermanenz, Mengenerhaltung, Assimilation/Akkommodation',
                'Kind als **aktiv gestaltend** und lernmotiviert',
              ],
            },
            {
              title: '− Kritik',
              bullets: ['Kompetenzen der Kinder **unterschätzt** (zu hohe Altersangaben)', 'Annahme eines **Stufenverlaufs**'],
            },
          ],
        },
        { t: 'p', text: '(Fol. 43) – Die neueren Befunde in Kapitel 6 (intuitives Wissen, ToM) zeigen, wie viel früher Kinder vieles können.' },
      ],
    },
  ],
};
