import type { Chapter } from '../model';

export const kap8: Chapter = {
  id: 'wohlbefinden',
  nr: 8,
  short: 'Wohlbefinden',
  title: 'Persönlichkeit und Wohlbefinden, Positive Psychologie',
  date: '09.12.2026',
  pages: 'S. 193–220',
  color: '#65a30d',
  kern: [
    'Studierende sind belastet: rund **jede dritte Person** zeigt Depressionssymptome – fast doppelt so viele wie in der Wohnbevölkerung (BFS-Erhebung 2024). (S. 193)',
    'Big Five und Wohlbefinden: **Neurotizismus negativ**, **Extraversion** (und Gewissenhaftigkeit) **positiv**. (S. 197–198)',
    '**Soziodemografie** (Alter, Geschlecht, Bildung, Einkommen, Intelligenz) hängt kaum mit Glück zusammen; **Dankbarkeit, Optimismus, Arbeit, Selbstachtung** stark. (S. 198)',
    '**Top-down-Theorien** (Eigenschaften bestimmen Wohlbefinden) vs. **kompetenzorientierte Theorien** (erfolgreiche Bewältigung, Person-Umwelt-Fit). (S. 202)',
    '**PERMA** (Seligman 2011): fünf **unabhängige** Indikatoren von Wohlbefinden/Flourishing. Lebensereignisse verändern die Lebenszufriedenheit unterschiedlich nachhaltig (**Lucas 2007**). (S. 204–207)',
    '**VIA:** 24 Charakterstärken in 6 Tugenden; **3–7 Signaturstärken** pro Person. Wer **≥ 4** bei der Arbeit einsetzen kann, erlebt mehr Positives und eher Berufung. (S. 209–220)',
  ],
  sections: [
    {
      id: 'einfluss',
      title: 'Einflussfaktoren des Wohlbefindens',
      blocks: [
        { t: 'figure', fig: 'bigfive-wb' },
        { t: 'widget', w: 'wb-faktoren' },
        {
          t: 'table',
          head: ['kein bis gering', 'mittel', 'hoch'],
          rows: [
            [
              'Alter, Geschlecht, Bildung, soziale Schicht, Einkommen, Kinder haben, Ethnizität (Mehrheit vs. Minderheit), Intelligenz, körperliche Attraktivität',
              'Anzahl Freunde, verheiratet sein, Religiosität, Anzahl Freizeitaktivitäten, körperliche Gesundheit, Gewissenhaftigkeit, Extraversion, emotionale Stabilität, interne Kontrollüberzeugung',
              'Dankbarkeit, Optimismus, Arbeit haben, Häufigkeit des Geschlechtsverkehrs, Anteil Zeit mit positiven Gefühlen, Wohlbefinden des eineiigen Zwillings, Selbstachtung',
            ],
          ],
          caption: 'Tab. 8: Zusammenhang mit Glück und Lebenszufriedenheit (Reviews/Metaanalysen, z. B. Diener, Myers, Argyle, Anglim et al. 2020; S. 198)',
        },
        {
          t: 'list',
          title: 'Neuere Metaanalysen (S. 200–201)',
          items: [
            '**«Eco-emotions»** (Angst um die Umwelt) hängen bei Jüngeren **negativ** mit Wohlbefinden zusammen.',
            '**Körperliche Aktivität** positiv mit **kurzfristigem** Wohlbefinden.',
            '**Lärm** beeinträchtigt Wohlbefinden.',
            '**Big Five und Träume** (Marin et al. 2026; 89 Studien): Neurotizismus ↔ Albträume; Offenheit ↔ Traumerinnerung, Lebhaftigkeit (schwach ↔ luzides Träumen); Extraversion ↔ Träume teilen.',
          ],
        },
      ],
    },
    {
      id: 'theorien',
      title: 'Theorien: top-down vs. kompetenzorientiert',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Top-down-Theorien (S. 202)',
              sub: 'Persönlichkeit → Wohlbefinden',
              bullets: [
                'Eigenschaften, Temperament, kognitive Stile beeinflussen Wohlbefinden',
                'Wohlbefinden ist daher relativ **zeitstabil** und **situationsunabhängig**',
                'Befunde: Extraversion, Neurotizismus, Selbstachtung, Optimismus',
              ],
            },
            {
              title: 'Kompetenzorientierte Theorien (S. 202)',
              sub: 'Bewältigung × Passung',
              bullets: [
                'Wohlbefinden = Ergebnis **erfolgreicher Bewältigung** externer Anforderungen',
                'enger Bezug zu **internaler Kontrollüberzeugung**',
                'Wechselwirkung **Situation × Disposition**; **Person-Umwelt-Fit**',
                '**subjektive** Lebensumstände wichtiger als objektive',
              ],
            },
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Top-down-Theorien (Wohlbefinden)', text: 'Persönlichkeitseigenschaften, Temperament und kognitive Stile bestimmen das Wohlbefinden → relativ zeitstabil und situationsunabhängig. (S. 202)' },
            { term: 'Kompetenzorientierte Theorien (Wohlbefinden)', text: 'Wohlbefinden = Ergebnis erfolgreicher Bewältigung externer Anforderungen; Wechselwirkung Situation × Disposition, Person-Umwelt-Fit; subjektive Lebensumstände wichtiger als objektive. (S. 202)' },
          ],
        },
        {
          t: 'list',
          title: 'Modell der Faktoren (S. 203)',
          items: [
            '**Situations-/Umweltfaktoren** (z. B. Partnerschaft, Familie)',
            '+ **Bereitschaft und Fähigkeit zu Positiverfahrungen:**',
            'körperlich: Alter, Gesundheit, Temperament',
            'affektiv-motivational: Selbstwert, Genussfähigkeit, Neugier',
            'kognitiv: Tugenden, Optimismus',
            'sozial: Bindungsfähigkeit, Integration, Autonomie',
          ],
        },
      ],
    },
    {
      id: 'perma',
      title: 'PERMA und Lebenszufriedenheit',
      blocks: [
        { t: 'widget', w: 'perma' },
        { t: 'figure', fig: 'perma' },
        {
          t: 'defs',
          items: [
            {
              term: 'PERMA (Seligman 2011)',
              text: '**P**ositive Emotions, **E**ngagement, **R**elationships, **M**eaning, **A**ccomplishment: fünf **unabhängige** Indikatoren von Wohlbefinden/Flourishing (Well-Being Theory). Weiterentwicklung der drei Lebensformen (life of pleasure, engagement, meaning). (S. 204)',
            },
            {
              term: 'Flourishing',
              text: 'Aufblühen; Zielzustand der Well-Being Theory, auf den die PERMA-Komponenten verweisen. Gegenpol auf dem Kontinuum zur Psychopathologie: Psychopathologie ist **therapierbar**, Flourishing **trainierbar**. (S. 204, 208)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Schweiz',
          text: 'Lebenszufriedenheit auf Skala 1–7: *M* = 4.74, *SD* = 1.23 (*N* = 14 169; Ruch 2010) → im Mittel «**etwas zufrieden**». (S. 205)',
        },
        { t: 'figure', fig: 'lucas' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Lebensereignisse (Lucas 2007)',
          text: [
            '[Ergänzung] Nach **Heirat** kehrt die Zufriedenheit weitgehend zum Ausgangsniveau zurück; **Arbeitslosigkeit** und schwere **Behinderung** führen zu **anhaltenden Einbussen**.',
            'Personen, die sich später **scheiden** lassen, zeigen schon um die Heirat einen anderen Verlauf als dauerhaft Verheiratete. (S. 207)',
          ],
        },
      ],
    },
    {
      id: 'via',
      title: 'Charakterstärken (VIA) und Signaturstärken',
      blocks: [
        {
          t: 'p',
          text: 'Kontinuum von **Psychopathologie** (therapierbar) bis **Flourishing** (trainierbar); Charakterstärken als **psychologische Ressourcen**. (S. 208)',
        },
        { t: 'widget', w: 'via' },
        {
          t: 'table',
          head: ['Tugend', 'Stärken'],
          rows: [
            ['**Weisheit und Wissen**', 'Kreativität, Neugier, Urteilsvermögen, Liebe zum Lernen, Weitsicht'],
            ['**Mut**', 'Tapferkeit, Ausdauer, Ehrlichkeit/Authentizität, Tatendrang (Enthusiasmus)'],
            ['**Menschlichkeit**', 'Bindungsfähigkeit, Freundlichkeit, soziale Intelligenz'],
            ['**Gerechtigkeit**', 'Teamwork, Fairness, Führungsvermögen'],
            ['**Mässigung**', 'Vergebungsbereitschaft, Bescheidenheit, Vorsicht, Selbstregulation'],
            ['**Transzendenz**', 'Sinn für das Schöne, Dankbarkeit, Hoffnung, Humor, Spiritualität/Religiosität'],
          ],
          caption: 'Tab. 9: Tugenden und Stärken (VIA-Klassifikation, Peterson & Seligman 2004; S. 209). Schweiz: Neugier und Fairness hoch, Religiosität gering ausgeprägt (S. 210).',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'VIA-Klassifikation',
              text: '«Values in Action» (Peterson & Seligman 2004): **24 Charakterstärken** in **6 Tugenden** (Weisheit und Wissen, Mut, Menschlichkeit, Gerechtigkeit, Mässigung, Transzendenz). Erfassung z. B. mit dem VIA-IS. (S. 209)',
            },
            {
              term: 'Signaturstärken',
              text: '**3–7** individuell besonders bedeutsame Stärken, «**Fingerabdruck**» der Person; ihre Ausübung ist belohnend → mehr Wohlbefinden, positives Erleben am Arbeitsplatz, Gefühl der Berufung. Achtung: Zahl 3–7 und Kriterien **empirisch nicht belegt**. (S. 216)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Kriterien für Signaturstärken (Auswahl; S. 217)',
          items: [
            'Gefühl von Besitz/Authentizität («**das bin wirklich ich**»)',
            'Aufgeregtheit bei der Ausübung',
            'steile Lernkurve',
            'Verlangen und Unvermeidlichkeit des Einsatzes',
            '**Belebung statt Erschöpfung**',
            'intrinsische Motivation',
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Erfassen', text: 'Fragebogen (**VIA-IS**) oder Interview' },
            { title: 'Auswählen', text: 'höchste 3–7 Stärken' },
            { title: 'Prüfen', text: 'Kriterien für Signaturstärken anwenden' },
            { title: 'Finale Liste', text: 'persönliche Signaturstärken (S. 216)' },
          ],
        },
        {
          t: 'study',
          title: 'Signaturstärken am Arbeitsplatz',
          source: 'Harzer & Ruch 2012 (S. 220)',
          method: 'Zusammenhang zwischen der Anzahl Signaturstärken, die am Arbeitsplatz angewendet werden können, und dem Erleben der Arbeit.',
          result: 'Wer mindestens 4 Signaturstärken anwenden kann, hat mehr positives Erleben und empfindet die Arbeit eher als Berufung.',
          takeaway: 'Schwelle: **≥ 4 Signaturstärken** bei der Arbeit. Gruppenprofile (z. B. Studierende) sind für Berufs- und Laufbahnberatung nutzbar. (S. 219)',
        },
      ],
    },
  ],
};
