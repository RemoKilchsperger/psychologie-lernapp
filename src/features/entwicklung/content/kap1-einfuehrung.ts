import type { Chapter } from '../model';

export const kap1: Chapter = {
  id: 'einfuehrung',
  nr: 1,
  short: 'Grundbegriffe & Methoden',
  title: 'Grundbegriffe und Methoden der Entwicklungspsychologie',
  date: '17.09.',
  folien: 'Fol. 1–5',
  lohaus: 'Kap. 1.1/1.2/1.3/1.8 · 2.8 Einleitung/2.8.1 (systemorientierte Theorien) · 3.1/3.2/3.3 · Kap. 4: S. 72 unten bis 74 Mitte',
  color: '#2a78d6',
  kern: [
    'Entwicklung = **relativ überdauernde intraindividuelle Veränderungen** des Erlebens und Verhaltens über die Zeit – über die ganze Lebensspanne, mit Gewinnen und Verlusten.',
    '**Anlage und Umwelt wirken zusammen**: Die Anlage-Umwelt-Korrelation verschiebt sich mit dem Alter von passiv zu aktiv; evokativ bleibt konstant.',
    'Das Individuum gestaltet seine Entwicklung **aktiv** mit und ist in Systeme eingebettet (Bronfenbrenner: Mikro- bis Chronosystem).',
    'Nur der **Längsschnitt** erfasst intraindividuelle Veränderung. Der Querschnitt konfundiert Alter und Kohorte; das Konvergenzmodell kombiniert beide.',
  ],
  sections: [
    {
      id: 'definition',
      title: 'Was ist Entwicklung?',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Entwicklung',
              text: 'Relativ überdauernde intraindividuelle Veränderungen des Erlebens und Verhaltens über die Zeit hinweg. (Fol. 2)',
            },
            { term: 'Intraindividuell', text: 'Veränderung innerhalb einer Person über die Zeit. (Notiz)' },
            { term: 'Interindividuell', text: 'Unterschiede zwischen Personen in diesen Veränderungen. (Notiz)' },
          ],
        },
        {
          t: 'list',
          title: 'Gegenstand der Entwicklungspsychologie (Fol. 3–4)',
          items: [
            '**Beschreibung und Erklärung** der Veränderungen und der interindividuellen Unterschiede darin',
            'über die **gesamte Lebensspanne** (Zeugung bis Tod)',
            'unter Berücksichtigung von **Gewinnen und Verlusten**',
            'im **materiellen und sozialen Kontext**',
            'umfasst die gesamte **bio-psycho-soziale** Entwicklung',
          ],
        },
        {
          t: 'compare',
          items: [
            {
              title: '✗ Keine Entwicklung',
              bullets: [
                'Kurzfristige Schwankungen, z. B. Gestimmtheit im Tagesverlauf (Fol. 2)',
                'Ein plötzliches Ereignis, z. B. ein Bein verlieren (Notiz)',
              ],
            },
            {
              title: '✓ Entwicklung',
              bullets: [
                'Langfristige Trends, z. B. Abnahme des mittleren Affekts über die Schuljahre (Fol. 2)',
                'Lernen, mit dem Verlust des Beins zu leben (Notiz)',
              ],
            },
          ],
        },
        {
          t: 'p',
          text: '**Anwendung:** Wissen über Entwicklung ist die Basis für Entwicklungsdiagnostik, Prognosen und Interventionen. (Fol. 4)',
        },
        {
          t: 'callout',
          tone: 'ergaenzung',
          title: 'Warum Prognosen möglich sind (LB S. 5)',
          text: 'Rangpositionen vieler Merkmale bleiben relativ stabil – Intelligenz stabiler als Sozialverhalten. Prognosen liefern aber nur Wahrscheinlichkeitsbereiche, keine exakten Vorhersagen.',
        },
      ],
    },
    {
      id: 'anlage-umwelt',
      title: 'Grundfrage 1: Anlage oder Umwelt?',
      blocks: [
        {
          t: 'compare',
          items: [
            { title: 'Klassisch', bullets: ['Lern-/Erziehungstheorien → v. a. **Umwelt**', 'Verhaltensgenetik → v. a. **Gene**'] },
            { title: 'Heute', bullets: ['**Anlage und Umwelt**, die miteinander **interagieren** (Fol. 3)'] },
          ],
        },
        {
          t: 'list',
          title: 'Wie Anlage und Umwelt zusammenspielen (Fol. 3)',
          items: [
            '**Umwelt beeinflusst Genexpression:** Jungen mit genetischer Disposition für Aggression waren nur dann aggressiver, wenn sie Misshandlung erfahren hatten.',
            '**Reaktionsspielraum:** genetisch festgelegtes Spektrum der Reaktionsmöglichkeiten auf verschiedene Umweltbedingungen → Menschen reagieren unterschiedlich auf gleiche Umwelten; die optimale Umwelt ist individuell verschieden.',
          ],
        },
        {
          t: 'table',
          caption: 'Drei Formen der Anlage-Umwelt-Korrelation (Fol. 3; Beispiele: Notiz)',
          head: ['Form', 'Mechanismus', 'Beispiel', 'Trend über das Alter'],
          rows: [
            ['**Passiv**', 'Eltern geben Gene **und** passende Umwelt weiter; das Kind muss nichts tun', 'Musikerehepaar: Gene + Instrumente zuhause', 'v. a. in der Kindheit → **nimmt ab**'],
            ['**Evokativ** (evozierend)', 'Genetisch beeinflusste Merkmale **lösen Reaktionen** der Umwelt aus', 'Viel lächelndes Baby wird öfter auf den Arm genommen', '**gleich** über die Lebensspanne'],
            ['**Aktiv**', 'Individuum **sucht/schafft sich** passende Umwelten', 'Bewegungsfreudiges Kind sucht aktive Freunde', 'ab Jugendalter immer wichtiger → **nimmt zu**'],
          ],
        },
        { t: 'widget', w: 'auw-trend' },
      ],
    },
    {
      id: 'aktivitaet',
      title: 'Grundfrage 2: Wer ist aktiv?',
      blocks: [
        {
          t: 'p',
          text: 'Greifen Umwelt und Individuum aktiv in die Entwicklung ein? Danach lassen sich Theorien einordnen (Fol. 4):',
        },
        {
          t: 'table',
          head: ['Theorie-Typ', 'Umwelt aktiv?', 'Individuum aktiv?'],
          rows: [
            ['**Reifeprozesse**', 'nein', 'nein'],
            ['**Lerntheorie**', 'ja', 'nein'],
            ['**Interaktionistische / systemische Theorien** (z. B. Piaget)', 'ja', 'ja'],
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Das Individuum nimmt aktiv Einfluss auf die eigene Entwicklung – so weit Entwicklungsstand und Umwelt es zulassen. «Aktiv» heisst **nicht zwingend planmässig**. (Fol. 4; Notiz)',
        },
      ],
    },
    {
      id: 'bronfenbrenner',
      title: 'Ökologisches Modell (Bronfenbrenner, 1979)',
      blocks: [
        {
          t: 'p',
          text: 'Individuen sind unterschiedlich stark in verschiedene Kontexte eingebunden. **Wir beeinflussen die Systeme und die Systeme uns.** (Fol. 4; Notiz)',
        },
        { t: 'widget', w: 'bronfenbrenner' },
        {
          t: 'table',
          head: ['System', 'Beschreibung', 'Beispiel'],
          rows: [
            ['**Mikrosystem**', 'Direkte Interaktion des Individuums', 'Familie usw.'],
            ['**Mesosystem**', 'Zusammenspiel mehrerer Mikrosysteme', 'Eltern ↔ Schule (Elternsprechtag)'],
            ['**Exosystem**', 'Kein direkter Kontakt, wirkt über andere Personen', 'Arbeitsplatz der Eltern prägt Regeln zuhause'],
            ['**Makrosystem**', 'Gesellschaft und Kultur (Werte, Gesetze) setzen/beschränken Möglichkeiten', 'Einschulungsalter'],
            ['**Chronosystem**', 'Zeitdimension: Individuum altert, Bedeutsamkeit der Systeme und die Systeme selbst verändern sich', '–'],
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Meso vs. Exo',
          text: 'Meso = Verbindung zweier Systeme, in denen das Kind **selbst** ist. Exo = System **ohne direkten Kontakt** des Kindes.',
        },
      ],
    },
    {
      id: 'designs',
      title: 'Forschungsdesigns',
      blocks: [
        {
          t: 'table',
          head: ['Design', 'Vorgehen', 'Vorteile', 'Nachteile'],
          rows: [
            [
              '**Querschnitt**',
              'Verschiedene Stichproben (A, B, C …) unterschiedlichen Alters, **ein** Zeitpunkt (Fol. 4)',
              'Schnell, ökonomisch, leichter repräsentativ (LB S. 55)',
              'Keine intraindividuellen Verläufe; **Alters- und Kohorteneffekte konfundiert**; gilt nur für den Erhebungszeitpunkt (LB S. 55)',
            ],
            [
              '**Längsschnitt**',
              '**Eine** Stichprobe wiederholt zu mehreren Zeitpunkten (Fol. 4/5)',
              'Erfasst intraindividuelle Veränderung, Verlaufstypen, Stabilität (Korrelationen über die Zeit) (LB S. 57)',
              'Testungs-/Serialeffekte; **Alters- und Testzeiteffekte konfundiert**; selektiver Ausfall; Generalisierbarkeit auf andere Kohorten fraglich; teuer (LB S. 57–59)',
            ],
            [
              '**Konvergenzmodell** (Kohorten-Sequenz-Modell)',
              'Mehrere kurze, **überlappende** Längsschnitte verschiedener Kohorten (Fol. 5)',
              'Geringerer Aufwand; vermeidet einige Nachteile beider Grunddesigns (LB S. 60–61)',
              'Teilstichproben müssen im Überlappungsalter vergleichbar sein (sonst z. B. Testungseffekte) (LB S. 61)',
            ],
          ],
        },
        { t: 'figure', fig: 'konvergenzmodell' },
        {
          t: 'callout',
          tone: 'ergaenzung',
          title: 'Klassisches Beispiel: Intelligenz im Alter (LB S. 60)',
          text: 'Im Querschnitt scheint die Intelligenz mit dem Alter deutlich abzufallen, im Längsschnitt kaum. Grund: **Kohorteneffekt** – jüngere Generationen hatten mehr Schulbildung.',
        },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Was ist womit konfundiert?',
          text: ['Querschnitt: **Alter × Kohorte**', 'Längsschnitt: **Alter × Testzeitpunkt** (+ Testungseffekte)'],
        },
      ],
    },
  ],
};
