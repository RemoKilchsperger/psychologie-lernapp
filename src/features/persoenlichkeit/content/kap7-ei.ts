import type { Chapter } from '../model';

export const kap7: Chapter = {
  id: 'ei',
  nr: 7,
  short: 'Emotionale Intelligenz',
  title: 'Emotionale Intelligenz',
  pages: 'S. 145–191',
  color: '#dc2626',
  kern: [
    'Ausgangspunkt **Wechsler (1944):** Personen mit gleichem IQ unterscheiden sich in der Bewältigung ihrer Umwelt. Verwandtes Konstrukt: **soziale Intelligenz** (Thorndike 1920). (S. 148, 150)',
    'Junges Feld (seit **1990**), popularisiert durch **Goleman (1995)**; drei Stränge: EI als **Fähigkeit**, als **Trait**, als **Kompetenz** (mixed model). (S. 154)',
    '**Ability model** (Salovey & Mayer): **vier hierarchische Zweige**; Messung mit dem **MSCEIT** (maximales Verhalten). Bewertung: **Target-, Konsensus- und Expert*innenkriterium**. (S. 155–175)',
    '**Fragebogen-EI** ist von den Big Five kaum unterscheidbar (*r* ≈ .50) und korreliert **nicht** mit dem MSCEIT. (S. 177)',
    '**Mayer et al. (2016):** EI ist eine **breite Intelligenz** für «**hot information processing**». (S. 180–181)',
    'EI hängt mit Wohlbefinden und Gesundheit zusammen und ist **trainierbar**; Golemans Behauptung «EI wichtiger als IQ» ist **nicht belegt**. (S. 188–191)',
  ],
  sections: [
    {
      id: 'begriffe',
      title: 'Begriffe',
      blocks: [
        {
          t: 'p',
          text: 'Im Alltag werden «emotionale» und «soziale Intelligenz» oft **synonym** gebraucht; Überlappung mit **Emotionsregulation** (Gross) und **Gardners inter-/intrapersonaler Intelligenz**. (S. 149)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Soziale Intelligenz (Thorndike 1920)',
              text: 'Fähigkeit, Menschen zu **verstehen** und **klug mit ihnen umzugehen**. Fünf Aspekte nach Süss et al. (2005): soziales Verständnis, soziale Wahrnehmung, soziales Gedächtnis, soziale Flexibilität, soziales Wissen. Wird den **sozialen Kompetenzen** zugeordnet. (S. 150)',
            },
            {
              term: 'Emotionale Intelligenz (EI)',
              text: 'Junges Forschungsfeld (seit 1990, popularisiert durch Goleman 1995) mit drei Konzeptionen: EI als Fähigkeit, als Eigenschaft (Trait) oder als Kompetenz (mixed model). Ausgangspunkt: Wechsler (1944). (S. 148, 154)',
            },
          ],
        },
      ],
    },
    {
      id: 'konzeptionen',
      title: 'Drei Konzeptionen',
      blocks: [
        {
          t: 'table',
          head: ['', 'Fähigkeit (ability model)', 'Eigenschaft (trait EI)', 'Kompetenz (mixed model)'],
          rows: [
            ['**Vertreter**', 'Salovey & Mayer (1990)', 'Petrides & Furnham (2000)', 'Bar-On (1997), Goleman (1995, 1998)'],
            [
              '**Verständnis**',
              'Standardintelligenz; Fähigkeit, mit eigenen und fremden Emotionen umzugehen, sie zu unterscheiden und zur Steuerung von Denken/Handeln zu nutzen',
              '«**trait emotional self-efficacy**»: emotionsbezogene Dispositionen und Selbstwahrnehmungen; zeigt sich im Habitus',
              'nichtkognitive Fähigkeiten und Kompetenzen zur Bewältigung von Umweltanforderungen; Sammlung erfolgsrelevanter Merkmale',
            ],
            ['**Gemessen wird**', '**maximales** Verhalten (Tests)', '**typisches** Verhalten (Fragebogen)', 'Fragebogen'],
          ],
          caption: 'Tab. 6: EI als Fähigkeit, Eigenschaft oder Kompetenz (S. 155–159)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Ability model (Salovey & Mayer)',
              text: 'EI als **Fähigkeit** / Standardintelligenz: mit eigenen und fremden Emotionen umgehen, sie unterscheiden und zur Steuerung von Denken und Handeln nutzen. Gemessen als **maximales Verhalten** (MSCEIT). Kritik: enthält auch Temperamentsaspekte (z. B. Expressivität). (S. 155, 157)',
            },
            {
              term: 'Trait EI (Petrides & Furnham)',
              text: '«**Trait emotional self-efficacy**»: emotionsbezogene Dispositionen und Selbstwahrnehmungen; zeigt sich im Habitus; gemessen als **typisches Verhalten** per Fragebogen. (S. 155–159)',
            },
            {
              term: 'Mixed model (Bar-On, Goleman)',
              text: 'EI als **Kompetenz**: nichtkognitive Fähigkeiten und Kompetenzen zur Bewältigung von Umweltanforderungen; Sammlung erfolgsrelevanter Merkmale; Fragebogen. (S. 155–159)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Bar-On (1997): fünf Bereiche (S. 159)',
          items: [
            '**Intrapersonale Intelligenz:** u. a. emotionales Bewusstsein, Assertivität, Selbstachtung, Selbstaktualisierung, Unabhängigkeit',
            '**Interpersonale Intelligenz:** Empathie, Beziehungen, soziale Verantwortung',
            '**Adaptation:** Problemlösen, Realitätsprüfung, Flexibilität',
            '**Stressmanagement:** Stresstoleranz, Impulskontrolle',
            '**Generelle Stimmung:** Lebensfreude, Optimismus',
          ],
        },
        { t: 'widget', w: 'ei-konzeptionen' },
      ],
    },
    {
      id: 'msceit',
      title: 'Messung als Fähigkeit: MSCEIT',
      blocks: [
        {
          t: 'list',
          title: 'Kriterien für EI als Intelligenz (Mayer & Salovey 1997; S. 161)',
          items: [
            'als **Fähigkeit operationalisierbar** (richtige/falsche Antworten)',
            '**mässige Korrelation** mit anderen mentalen Fähigkeiten',
            'Fähigkeitsniveau **steigt mit dem Alter**',
          ],
        },
        { t: 'widget', w: 'vier-zweige' },
        {
          t: 'table',
          head: ['Zweig (Emotions-)', 'Fähigkeit', 'MSCEIT-Untertests', 'Bereich'],
          rows: [
            ['**1 Wahrnehmung**', 'Emotionen bei sich, anderen, in Objekten, Kunst, Musik erkennen', 'Gesichter, Bilder', 'erfahrungsbasierte EI'],
            ['**2 Nutzung** (Förderung des Denkens)', 'Emotionen herstellen und für kognitive Prozesse nutzen', 'Unterstützen, Sinneseindrücke', 'erfahrungsbasierte EI'],
            ['**3 Verständnis** (Wissen)', 'verstehen, wie Emotionen zusammenspielen und sich entwickeln', 'Veränderungen, komplexe Emotionen', 'strategische EI'],
            ['**4 Management** (Regulation)', 'offen für Emotionen sein, sie bei sich und anderen regulieren', 'Umgang mit eigenen Emotionen, Emotionen in Beziehungen', 'strategische EI'],
          ],
          caption: 'Tab. 7: Vier-Zweige-Modell und MSCEIT-Untertests (Mayer & Salovey 1997; Mayer et al. 2000). Hierarchie: Wahrnehmung → … → Management. Auswertung als IQ-Norm (100 + 15z) für Gesamt-EI, Bereiche, Zweige. (S. 166–175)',
        },
        {
          t: 'defs',
          items: [
            { term: 'MSCEIT', text: 'Mayer-Salovey-Caruso Emotional Intelligence Test: Performanztest für EI als Fähigkeit (maximales Verhalten); 4 Zweige mit je 2 Untertests, 2 Bereiche (erfahrungsbasiert / strategisch); Auswertung als IQ-Norm. (S. 166–175)' },
            { term: 'Target-Kriterium', text: 'Richtig ist die Übereinstimmung mit den Angaben der **Zielperson** (z. B. wie stark fühlte die Studentin Ärger?). (S. 162–165)' },
            { term: 'Konsensuskriterium', text: 'Punktwert = **relative Häufigkeit** der gewählten Antwort in der **Normstichprobe** (wählen 21 % Stufe 4, gibt es .21 Punkte). Gilt im Anwendungskontext. (S. 162–165)' },
            { term: 'Expert*innenkriterium', text: 'Zustimmung von **21 Emotionsforschenden** (ISRE); nur für die **Forschung**. (S. 162–165)' },
          ],
        },
        { t: 'widget', w: 'konsensus' },
      ],
    },
    {
      id: 'fragebogen',
      title: 'Messung mit Fragebogen und Kritik',
      blocks: [
        {
          t: 'list',
          items: [
            '**Trait-EI und Kompetenz-EI** werden sinnvoll per **Fragebogen** erfasst; **Fähigkeit** nur sinnvoll per **Performanztest**. (S. 176)',
            '**Probleme des Selbstberichts:** ungenau, Antworttendenzen, soziale Erwünschtheit, Impression Management, eingeschränkter Bewusstseinszugang. (S. 176)',
            '**Kritik an Bar-On** (Matthews et al. 2002): Theorie vage; «EI ist, was EQ-Tests testen». (S. 176)',
            'Fragebogen-EI lädt hoch auf **E, P, N**; durchschnittlich ***r* = .50 mit den Big Five** (Dawda & Hart 2000). Selbstbericht und MSCEIT korrelieren **nicht** → verwandte, aber verschiedene Konstrukte. (S. 177)',
            '**Generelle Kritik:** Schuler (2002) – EI sei ein «**Unwort**» (nicht empirisch prüfbar vorgebracht); mangelnde **inkrementelle Validität** über Intelligenz und Persönlichkeit (Amelang & Steinmayr 2006). (S. 178)',
          ],
        },
      ],
    },
    {
      id: 'update',
      title: 'Update Mayer, Caruso & Salovey (2016)',
      blocks: [
        {
          t: 'list',
          title: 'Leitprinzipien (Auswahl; S. 180–181)',
          items: [
            'EI ist eine **Fähigkeit** und Teil der Intelligenz; soll als Fähigkeit gemessen werden.',
            '**Intelligentes Problemlösen ≠ intelligentes Verhalten:** Tests erfassen Potenzial, nicht Alltagsverhalten; Persönlichkeit (z. B. E, N) beeinflusst Verhalten.',
            'Gute Testdefinitionen nötig.',
            'EI ist eine **breite Intelligenz** (ähnlich Cattell-Horn-Carroll-three stratum model), neben sozialer und personal intelligence.',
            'EI dient dem **hot information processing** (Informationen mit hoher persönlicher Relevanz).',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Hot information processing',
              text: 'Verarbeitung von Informationen mit **hoher persönlicher Relevanz** (Emotionen, Beziehungen) – der Bereich, für den EI als breite Intelligenz zuständig ist (Mayer et al. 2016). (S. 180–181)',
            },
            {
              term: 'Three stratum model (Carroll)',
              text: '**g** → **breite Fähigkeiten** (fluide, kristalline Intelligenz, Lernen/Gedächtnis, visuelle/auditive Wahrnehmung, Abruf, Verarbeitungsgeschwindigkeit …) → **spezifische Prozesse**; EI lässt sich als weitere breite Kategorie integrieren. (S. 182–183)',
            },
          ],
        },
        {
          t: 'p',
          text: '**Reaktionen:** Theorie gut, aber das **MSCEIT-Scoring** muss revidiert werden (Legree et al.); zu wenig Anleitung für theoriegeleitete Itemkonstruktion (Schlegel); auch Theorien der **Emotionsregulation** einbeziehen (Fontaine; Mestre et al.; Roberts et al.). (S. 187)',
        },
      ],
    },
    {
      id: 'befunde',
      title: 'Befunde aus Metaanalysen',
      blocks: [
        {
          t: 'study',
          title: 'EI und Wohlbefinden',
          source: 'Sánchez-Álvarez et al. 2016, 77 Studien (S. 188–190)',
          method: 'Metaanalyse über den Zusammenhang verschiedener EI-Masse mit subjektivem Wohlbefinden; meist junge, gebildete Stichproben.',
          result: 'Stärkster Zusammenhang für Mixed-Model-Fragebogen (.38), geringer für Ability-Fragebogen und Fähigkeitstests (.22).',
          takeaway: 'Der hohe Wert der Mixed-Fragebogen ist teils ein **Methodenartefakt** (gleiche Methode, überlappende Inhalte).',
        },
        {
          t: 'study',
          title: 'EI-Training',
          source: 'Hodzic et al. 2018, 24 Studien (S. 188–190)',
          method: 'Metaanalyse von Trainingsstudien zur emotionalen Intelligenz.',
          result: 'Mittlere Effekte; Ability-Trainings wirksamer; Publikations-Bias → Überschätzung; Emotionsverständnis besser trainierbar als Denkförderung und strategische EI.',
          takeaway: 'EI ist **trainierbar** – am besten das **Emotionsverständnis**.',
        },
        {
          t: 'study',
          title: 'EI und Gesundheit',
          source: 'Schutte et al. 2006 (S. 188–190)',
          method: 'Metaanalyse zum Zusammenhang von EI mit Gesundheit.',
          result: 'r = .29 psychische, .31 psychosomatische, .22 körperliche Gesundheit; Trait-EI stärker mit psychischer Gesundheit verbunden als Fähigkeits-EI.',
          takeaway: 'Am stärksten mit **psychosomatischer** Gesundheit (.31), am schwächsten mit körperlicher (.22).',
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Fazit (S. 191)',
          text: [
            'Ca. **30 Messinstrumente**.',
            '**Ability-Tests** korrelieren gering bis moderat mit IQ und sind relativ unabhängig von Persönlichkeit → EI ist eine Intelligenz (neu?).',
            '**Mixed-Modelle** korrelieren (zu) hoch mit Persönlichkeit, gering mit Fähigkeits-EI und **nicht mit IQ**.',
            'Offen: **inkrementelle Validität**. Golemans «EI wichtiger als IQ» ist nicht belegt.',
          ],
        },
      ],
    },
  ],
};
