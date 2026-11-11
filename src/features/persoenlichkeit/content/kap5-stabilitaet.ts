import type { Chapter } from '../model';

export const kap5: Chapter = {
  id: 'stabilitaet',
  nr: 5,
  short: 'Stabilität',
  title: 'Stabilität und Veränderbarkeit',
  date: '11.11.2026',
  pages: 'S. 102–113',
  color: '#d97706',
  kern: [
    '**Stabilität** ist Teil der Trait-Definition (Abgrenzung zu States); **Veränderbarkeit** ist wichtig für Interventionen. (S. 103)',
    'Drei Arten von Stabilität: **mean-level**, **rank-order**, **personality coherence** (+ absolute Stabilität, die praktisch nie vorkommt). (S. 104)',
    '**Rank-order-Stabilität:** über 10 Jahre ca. .40–.60, über ≥ 30 Jahre ca. .20; sie **nimmt im Lebenslauf zu**. (S. 107)',
    'Veränderungen sind in **Kindheit und Jugend** am grössten; das **junge Erwachsenenalter** ist besonders wichtig. Im Mittel Entwicklung Richtung **Reife** (mean-level changes). (S. 103, 109, 112)',
    'Die Wirkung **kritischer Lebensereignisse** hängt vom Kontext ab. **Psychotherapie** verändert Traits (v. a. N↓, E↑; *d* = .37). (S. 108, 112–113)',
    'Gewollte Veränderung braucht **change goals** und aktives neues Verhalten. (S. 111)',
  ],
  sections: [
    {
      id: 'was',
      title: 'Was heisst Stabilität?',
      blocks: [
        {
          t: 'list',
          items: [
            '**William James (1890):** Mit 30 sei der Charakter «**wie Gips**» gesetzt. (S. 102) – gilt so nicht. (Notiz)',
            '**Eysenck:** Persönlichkeit als «mehr oder weniger stabile und dauerhafte Organisation» → Stabilität ist **Teil der Definition**; Merkmale unterscheiden sich stark in ihrer Stabilität. (S. 103)',
          ],
        },
        {
          t: 'table',
          head: ['Art', 'Bedeutung', 'Grenze'],
          rows: [
            ['**Mean-level stability**', 'gleiche **Mittelwerte** einer Gruppe zu verschiedenen Zeitpunkten', 'individuelle Werte können sich trotzdem stark verschieben (Tiefster wird Höchster)'],
            ['**Rank-order stability**', 'hohe **Korrelation** der Werte zweier Zeitpunkte (wie Test-Retest-Reliabilität)', 'Mittelwert und Streuung können sich trotzdem verändern'],
            ['**Personality coherence**', 'gleiche Ausprägung im **latenten** Merkmal, erfasst über **altersgemässe Indikatoren** (Rangordnung bleibt, Manifestation wechselt)', 'Äquivalente fehlen oft (z. B. Schulschwänzen mit 8 J.?)'],
            ['**Absolute** (identische Werte)', 'gleiche individuelle Werte zu allen Zeitpunkten', 'kommt praktisch nie vor (Messfehler)'],
          ],
          caption: 'Tab. 5: Arten von Stabilität (S. 104–105)',
        },
        {
          t: 'defs',
          items: [
            { term: 'Mean-level stability', text: 'Gleiche **Gruppenmittelwerte** über die Zeit. Grenze: Einzelne können sich trotzdem stark verschieben. (S. 104)' },
            { term: 'Rank-order stability', text: 'Hohe **Korrelation** der Werte zweier Zeitpunkte – die **Rangfolge** bleibt erhalten (wie Test-Retest-Reliabilität). Mittelwert und Streuung können sich trotzdem ändern. (S. 104)' },
            { term: 'Personality coherence', text: 'Gleiche Ausprägung im **latenten** Merkmal, gemessen über **altersgemässe** Indikatoren: Rangordnung bleibt, die Manifestation wechselt. Problem: Äquivalente fehlen oft. (S. 105)' },
          ],
        },
        { t: 'widget', w: 'stabilitaetsarten' },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Man braucht **Rangreihe und Mittelwert**; Vorsicht **Kohorteneffekt**. (S. 106, Notiz)',
        },
      ],
    },
    {
      id: 'methodik',
      title: 'Methodische Erwägungen',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Längsschnitt (Ideal; S. 106)',
              bullets: ['relevante Tests, hohe Reliabilität, grosse Stichproben, **ohne Ausfälle**', 'Problem: teuer; **selektiver Schwund** (Umzug, Abbruch, Tod)'],
            },
            {
              title: 'Querschnitt / Kurzzeit-Längsschnitte',
              bullets: ['Querschnitt anfällig für **Stichproben-Bias**', 'Kurzzeit-Längsschnitte verschiedener Kohorten als Kompromiss', 'Vorsicht: **Kohorte ≠ Alter**'],
            },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Ideal wäre ein **Langzeit-Längsschnitt mit Multi-Trait-Multi-Method-Ansatz** und kontinuierlichem Assessment. Bisher v. a. **WEIRD**-Stichproben (Western, Educated, Industrialized, Rich, Democratic) → Generalisierbarkeit fraglich. (S. 112)',
        },
        {
          t: 'list',
          title: 'Mögliche Ursachen für Stabilität und Veränderung (S. 107)',
          items: [
            'genetische (Ko-)Determination, Gen-Umwelt-Interaktion',
            'Gesundheit, Krankheit, Unfälle',
            'Lern- und Erfahrungsabhängigkeit, Bildung',
            'Person-Environment-Fit, Verhaltensnormen',
            'critical life events',
            '«natürliche Experimente» (Wirtschaft, Pandemien → Kohortenunterschiede)',
            'Umweltgifte (Blei)',
            'unreliable Tests',
          ],
        },
      ],
    },
    {
      id: 'rangstabilitaet',
      title: 'Rank-order-Stabilitäten',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Intervall', text: 'Je länger das Intervall, desto kleiner die Stabilität: ca. **.40–.60** über 10 Jahre, ca. **.20** über ≥ 30 Jahre (Damian et al. 2019).' },
            { title: 'Lebenslauf', text: 'Stabilitäten **nehmen zu**, Peak um **60 Jahre**; die meisten Veränderungen in jungen Jahren oder im hohen Alter.' },
            { title: 'Plastizität', text: '**Lebenslange Plastizität:** Traits können sich zu verschiedenen Zeitpunkten verändern. (S. 107)' },
          ],
        },
        { t: 'widget', w: 'rangstabilitaet' },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Abweichender Befund: Bleidorn et al. (2022; 189 Studien)',
          text: [
            'Die Rangstabilität steigt bis ins junge Erwachsenenalter und erreicht dann ein **Plateau** – kaum Anstieg nach **25 Jahren**.',
            '**Emotionale Stabilität** nahm über die Lebensspanne deutlicher zu als früher angenommen.',
            '**Facetten** und **maladaptive Traits** sind weniger stabil als breite Domänen. (S. 113)',
            'Prüfung: die Aussage der jeweiligen Folie im Blick behalten – Folie S. 107 «Peak um 60», Metaanalyse S. 113 «Plateau ab ca. 25».',
          ],
        },
      ],
    },
    {
      id: 'reifung',
      title: 'Reifung und Lebensabschnitte',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Reifung (Maturity principle)',
              text: 'Im Mittel Entwicklung in Richtung grösserer Reife; gemessen über **mean-level changes** ganzer Gruppen; zeigt sich über Kohorten, Geschlechter und z. T. Kulturen hinweg. Reife-assoziierte Traits nehmen bei jungen Erwachsenen zu. (S. 109) [Ergänzung] Gemeint sind typischerweise Gewissenhaftigkeit, Verträglichkeit und emotionale Stabilität; auf der Folie nicht lesbar.',
            },
            {
              term: 'Disruption hypothesis',
              text: 'In der **Pubertät** vorübergehende **Abnahme** sozial relevanter Traits (−C, −E, −A); in Quer- und Längsschnitt, Selbst- und Elternberichten repliziert. (S. 109)',
            },
          ],
        },
        { t: 'widget', w: 'lebensphasen' },
        {
          t: 'p',
          text: 'Im **kognitiven Leistungsbereich** sind die Stabilitäten **höher** als im habituellen Bereich. (S. 112)',
        },
      ],
    },
    {
      id: 'ereignisse',
      title: 'Kritische Lebensereignisse',
      blocks: [
        {
          t: 'p',
          text: 'Der **Kontext** entscheidet (z. B. erstes Kind mit vs. ohne soziale Unterstützung); die Wirkung hängt von der **psychologischen Situation** ab (individuell; Notiz). Ereignisse sind voneinander abhängig (Ehe → Scheidung) → komplexe Interaktionen. (S. 108)',
        },
        {
          t: 'table',
          head: ['Lebensereignis', 'Veränderung (Bleidorn et al. 2016)', 'Bewertung'],
          rows: [
            ['Erste romantische Beziehung (20er)', 'N↓, teils E↑', '**einflussreich**'],
            ['Schul-/Hochschuleintritt', 'O, C, A↑, N↓', '**einflussreich**'],
            ['Erster Job', 'O, C↑', '**einflussreich**'],
            ['Verwitwung', 'C bei Männern↓, bei Frauen↑', ''],
            ['Beziehungsende', 'kein Effekt', ''],
            ['Ehe', 'Effekt auf Wohlbefinden, aber keine Längsschnitte zur Persönlichkeit', ''],
            ['Scheidung, Elternschaft, Arbeitslosigkeit', 'uneinheitlich', ''],
            ['Pensionierung', 'dürftige Studienlage', ''],
          ],
          caption: 'S. 108',
        },
      ],
    },
    {
      id: 'veraenderung',
      title: 'Individuelle Unterschiede in der Veränderbarkeit',
      blocks: [
        {
          t: 'p',
          text: 'Die meisten Abweichungen vom Populationstrend gibt es im **jungen Erwachsenenalter** (Schwaba & Bleidorn 2018). (S. 110)',
        },
        {
          t: 'steps',
          items: [
            { title: 'Verhalten', text: 'Konkrete Verhaltensweisen ändern' },
            { title: 'Gewohnheit', text: 'werden zu Gewohnheiten' },
            { title: 'Trait', text: 'formen langfristig den Trait (S. 110)' },
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Change goals',
              text: 'Veränderungswille (Hudson & Fraley 2015): Veränderung **wünschen** und aktiv **trait-passendes Verhalten ausführen**; Studien bisher kurz (10 Wochen–6 Monate). (S. 111)',
            },
            {
              term: 'WOOP (G. Oettingen)',
              text: '**W**unsch – schönstes Ergebnis (**O**utcome) – inneres Hindernis (**O**bstacle) – **P**lan («Wenn [Hindernis], dann [Handlung]»). (S. 111)',
            },
          ],
        },
        {
          t: 'study',
          title: 'Psychotherapie verändert Traits',
          source: 'Roberts et al. 2017 (S. 112–113)',
          method: 'Metaanalyse über 207 Studien; Therapien dauerten im Schnitt 24 Wochen.',
          result: 'Deutliche Trait-Veränderung (d = .37), v. a. emotionale Stabilität, dann Extraversion; unabhängig von der Therapierichtung; am stärksten bei Angststörungen, am geringsten bei Substanzabhängigkeit; Effekte bleiben in Follow-ups.',
          takeaway: 'Traits sind **veränderbar** – Psychotherapie senkt v. a. **Neurotizismus** (N↓) und erhöht **Extraversion** (E↑).',
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Fazit (S. 112)',
          text: 'Stabilität und Veränderung werden durch viele Faktoren beeinflusst; Traits **gewinnen an Rangstabilität**; Trait-Niveaus ändern sich über die Lebensspanne; im Mittel Richtung **Reifung**; Individuen unterscheiden sich in Häufigkeit, Timing und Richtung der Veränderung.',
        },
      ],
    },
  ],
};
