import type { Chapter } from '../model';

export const kap4: Chapter = {
  id: 'motorik',
  nr: 4,
  short: 'Motorik & Sensorik',
  title: 'Motorik- und Sensorikentwicklung',
  date: '15.10.',
  folien: 'Fol. 25–35',
  lohaus: 'Kap. 7 (alle)',
  color: '#c98500',
  kern: [
    'Motorik = **Reifung + Lernerfahrung** (+ Reflexe als Ausgangspunkt) – mit grosser normaler Variabilität und Kulturunterschieden.',
    'Methoden: **Präferenzparadigma** und Habituations-Dishabituations-Paradigma.',
    'Frühe visuelle Präferenzen (Kontraste, Gesichter), **perceptual narrowing**, Tiefenwahrnehmung (visuelle Klippe).',
    'Auditiv: Hören schon pränatal, Präferenz für die **Mutterstimme** und Muttersprache; intermodale Wahrnehmung ab Geburt.',
  ],
  sections: [
    {
      id: 'hinweis',
      title: 'Prüfungshinweis',
      blocks: [
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Keine genauen Altersangaben (Notiz; Fol. 27)',
          text: 'Wann ein Kind X kann, wird nicht genau geprüft – die Lehrbücher nennen unterschiedliche Spannen.',
        },
        {
          t: 'table',
          head: ['Meilenstein', 'Lohaus', 'Siegler', 'Berk'],
          rows: [
            ['Sitzen ohne Hilfe', '5–7 Mon.', '4.5–7.5 Mon.', '5–9 Mon.'],
            ['Alleine stehen', '12–14 Mon.', '9.5–13.5 Mon.', '9–16 Mon.'],
          ],
        },
      ],
    },
    {
      id: 'reflexe',
      title: 'Reflexe',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Reflexe',
              text: 'Angeborene, relativ starre motorische Reaktionsmuster, meist zum Selbstschutz, instinktiv bei passendem Reiz. (Fol. 25)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Beispiele (Fol. 25–26)',
          items: ['Saugreflex', 'Rooting-/Suchreflex', 'Schreitreflex', 'Moro-/Schreckreflex', 'Schwimmreflex'],
        },
        {
          t: 'list',
          title: 'Verlauf (Fol. 26)',
          items: [
            'Mit Muskelkontrolle und Hirnreifung **verschwinden** viele Reflexe (z. B. Moro).',
            'Verschwinden sie nicht (oder fehlen sie) → **Hinweis auf neurologische Störung**.',
            'Manche **bleiben** (Rückziehreflex, Blinzeln).',
            'Reflexe sind **Ausgangspunkt** komplexer Motorik.',
          ],
        },
      ],
    },
    {
      id: 'motorik',
      title: 'Motorikentwicklung',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Einzelne Bewegungsabfolgen', text: 'werden erlernt' },
            { title: 'Koordination', text: 'der Abfolgen' },
            { title: 'Integration', text: 'in längere Verhaltensketten' },
            { title: 'Automatisierung', text: 'nimmt zu' },
            { title: 'Verfeinerung', text: 'durch Anpassung an spezifische Umgebungen' },
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Reifung', text: 'z. B. Myelinisierung' },
            { title: 'Lernerfahrung', text: 'z. B. Kulturunterschiede; blind geborene Kinder sind motorisch verzögert' },
            { title: 'Reflexe', text: 'bahnen manche Entwicklung' },
          ],
        },
        { t: 'figure', fig: 'gehen' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Variabilität ist normal (Largo, 1999; Fol. 27)',
          text: '«Normale» Entwicklung verläuft unterschiedlich: **87 %** krabbeln im Vierfüsslergang vor dem Gehen, andere rutschen, rollen oder überspringen das Krabbeln.',
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Kultur (Fol. 28)',
          text: 'Nso (Kamerun) und Mali trainieren Säuglinge früh motorisch (z. B. Hängeübungen); westliche Mittelschichtmütter lehnen frühes Training eher ab → Kulturen unterscheiden sich darin, **wie sie Motorik fördern**.',
        },
      ],
    },
    {
      id: 'methoden',
      title: 'Untersuchungsmethoden der Wahrnehmung',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Präferenzparadigma',
              text: 'Zwei oder mehr Reize werden gleichzeitig dargeboten; aus der Reaktion (z. B. Blickdauer) wird auf eine Präferenz geschlossen. (Fol. 29)',
            },
            {
              term: 'Habituations-Dishabituations-Paradigma',
              text: 'Reiz bis zur Habituation, dann neuer Reiz; Dishabituation zeigt Unterscheidung (siehe Kapitel Lernen).',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Visuelles Auflösungsvermögen messen (Fol. 29)',
          text: 'Streifenmuster vs. graue Fläche. Ist die Auflösung zu gering, sehen beide grau aus → **keine Präferenz**. Sonst wird das gestreifte Muster länger betrachtet, weil **Kontraste präferiert** werden.',
        },
      ],
    },
    {
      id: 'visuell',
      title: 'Visuelle Wahrnehmung',
      blocks: [
        {
          t: 'list',
          title: 'Präferenzen Neugeborener (Fol. 30)',
          items: [
            'einfache vor komplexen Mustern',
            'symmetrische vor asymmetrischen',
            'äussere vor inneren Konturen',
            'kurvilineare vor geradlinigen',
            'bewegte vor unbewegten',
          ],
        },
        {
          t: 'list',
          title: 'Gesichter (Fol. 30)',
          items: [
            '**Gesichterpräferenz mit 2–3 Monaten** (auch wenn alle anderen Merkmale gleich sind)',
            'bevorzugt Gesichter des Geschlechts der **Hauptbezugsperson**',
            '0;3: längeres Betrachten bei stärkerem Lächeln',
            '0;4/0;6: Präferenz **Freude > Ärger > neutral**',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Perceptual narrowing (Wahrnehmungsverengung)',
              text: 'Mit 0;6 werden Affengesichter unterschieden, mit 0;9 nicht mehr. Weisse Babys unterscheiden mit 0;3 Gesichter innerhalb aller ethnischen Gruppen, mit 0;9 nur noch innerhalb weisser Gesichter. Präferenz der eigenen Ethnie mit 0;3, nicht bei Neugeborenen. (Fol. 31)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Abtasten und Musterergänzung (Fol. 31–32)',
          items: [
            '**Abtasten:** anfangs unsystematisch, von äusseren Konturen zur Gesamtsicht.',
            '**Musterergänzung:** Integration von Elementen zu Gesamtmustern (virtuelles Quadrat).',
            'Bei verdecktem Stab ist **gemeinsame Bewegung** die zentrale Information.',
          ],
        },
        {
          t: 'list',
          title: 'Tiefenwahrnehmung (Fol. 32–33)',
          items: [
            '**Grössenkonstanz** schon früh nach der Geburt.',
            'Monokulares Kriterium **relative Grösse** ab ca. 0;6 (Greifen nach der längeren Seite eines Trapezfensters).',
            '**Visuelle Klippe:** ca. 6 Monate alte Kinder krabbeln kaum über die tiefe Seite.',
            'Wann Tiefencues genutzt werden, hängt von **individueller Lernerfahrung** ab.',
          ],
        },
      ],
    },
    {
      id: 'auditiv',
      title: 'Auditive und intermodale Wahrnehmung',
      blocks: [
        {
          t: 'list',
          title: 'Auditive Wahrnehmung (Fol. 33)',
          items: [
            'Hören schon **pränatal** (letztes Drittel); Erwachsenenniveau erst mit **5;0–8;0**.',
            'Das leiseste wahrgenommene Geräusch des Neugeborenen ist ca. **4-mal lauter** als beim Erwachsenen.',
          ],
        },
        {
          t: 'list',
          title: 'Auditive Präferenzen – gemessen über die Saugfrequenz (Fol. 33)',
          items: [
            'Stimme der **Mutter** (nicht des Vaters)',
            'eigene **Muttersprache** (vermutlich pränatale Erfahrung)',
            '**Ammensprache**',
            'hohe Töne, komplexe Laute, bestimmte Rhythmen',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Intermodale Wahrnehmung',
              text: 'Verknüpfung von Informationen verschiedener Sinne. Grundsätzlich ab Geburt vorhanden, entwickelt sich mit Erfahrung weiter: Neugeborene wenden sich einer Lautquelle zu bzw. greifen danach. (Fol. 34)',
            },
            { term: 'Haptisch', text: 'Aktives Erfühlen durch Integration aller Hautsinne. (Fol. 34)' },
          ],
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Visuell-auditiv (Fol. 34–35)',
              bullets: [
                '5 Monate: Säuglinge schauen bei lauter werdendem Geräusch auf den sich **nähernden Zug** (ähnliche Befunde mit 4 Monaten)',
                '5–7 Monate: Beunruhigung bei **asynchroner** Mutterstimme',
              ],
            },
            {
              title: 'Visuell-haptisch (Fol. 34)',
              bullets: ['4 Monate alte Kinder erkennen **ertastete** Objekte visuell wieder'],
            },
          ],
        },
      ],
    },
  ],
};
