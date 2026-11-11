import type { Chapter } from '../model';

export const kap6: Chapter = {
  id: 'lerntheorie',
  nr: 6,
  short: 'Soziale Lerntheorie',
  title: 'Soziale Lerntheorie (Rotter, Bandura)',
  pages: 'S. 118–140',
  color: '#0891b2',
  kern: [
    '**Kognitive Wende** (ca. 1970): Kritik am Behaviorismus, neue Ideen zum Lernen und neue Persönlichkeitskonzepte. (S. 118)',
    '**Rotter** integriert lerntheoretische und kognitive Aspekte; einer der ersten Lerntheoretiker mit einer Persönlichkeitstheorie. Persönlichkeit = Wechselwirkung zwischen Individuum und bedeutsamer Umwelt – **zugleich stabil und veränderbar**. (S. 123–126)',
    '**VP = f(E & VW):** Das Verhaltenspotenzial hängt von **Erwartung** und **Verstärkungswert** ab. Entscheidend ist die **psychologische Situation** (subjektive Einschätzung). (S. 127–131)',
    'Generalisierte Erwartung → **Kontrollüberzeugung** (locus of control) **internal vs. external**. (S. 133)',
    '**Bandura:** Selbstregulation und **Selbstwirksamkeitserwartung** – diese ist **lernbar**. (S. 135–136)',
    'Persönlichkeit **moderiert** die Wirkung von Umweltereignissen. (S. 138–139)',
  ],
  sections: [
    {
      id: 'grundannahmen',
      title: 'Lerntheoretische Grundannahmen',
      blocks: [
        {
          t: 'callout',
          tone: 'merke',
          title: 'Grundfrage (S. 121)',
          text: 'Verhält man sich so wegen seiner **Persönlichkeit** – oder weil man es in solchen Situationen **gelernt** hat?',
        },
        {
          t: 'p',
          text: '**Radikale Form:** keine Verhaltenssteuerung durch innere Motive; alles Verhalten beruht auf **früheren Lernprozessen**; Vorhersage über frühere Erfahrungen in ähnlichen Situationen. (S. 121)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Kognitive Wende',
              text: 'Ab ca. 1970: Kritik am Behaviorismus, neue Ideen zum Lernen und neue Persönlichkeitskonzepte (u. a. Rotter, Bandura). (S. 118)',
            },
          ],
        },
      ],
    },
    {
      id: 'rotter',
      title: 'Julian B. Rotter (1916–2014)',
      blocks: [
        {
          t: 'list',
          items: [
            '**Ziel:** Ansichten von **Psychoanalyse und Behaviorismus überwinden**. (S. 123)',
            '**Persönlichkeit:** relativ stabiles Gefüge individueller Möglichkeiten, in einer sozialen Situation zu reagieren. (S. 124)',
            '**Veränderbar**, weil ständig neue Erfahrungen gemacht werden; **stabil**, weil neue Erfahrungen durch frühere Lernerfahrungen beeinflusst werden. (S. 126)',
            'Verhalten wird beeinflusst durch **Lerngeschichte** und **wahrgenommene Umweltreize**. (S. 124)',
          ],
        },
        {
          t: 'formula',
          name: 'Rotters Grundformel',
          formula: 'VP = f (E & VW)',
          legend: [
            '**VP** = Verhaltenspotenzial: Wahrscheinlichkeit, dass ein Verhalten gezeigt wird, abhängig von der Aussicht auf Verstärkung',
            '**E** = Erwartung, dass Verstärkung eintritt: rein subjektiv, von Vorerfahrungen abhängig, **kann falsch sein**',
            '**VW** = Verstärkungswert: subjektive Präferenz für den Verstärker (niedrig, wenn man die Folge vermeiden möchte; hoch, wenn man sie gut fände)',
            'Das «&» ist **keine mathematische Verknüpfung**.',
          ],
          source: 'S. 127–129',
        },
        { t: 'figure', fig: 'rotter' },
        {
          t: 'defs',
          items: [
            { term: 'Verhaltenspotenzial (VP)', text: 'Wahrscheinlichkeit, dass ein Verhalten in einer Situation gezeigt wird – abhängig von der Aussicht auf Verstärkung. VP = f(E & VW). (S. 127–129)' },
            { term: 'Erwartung (E)', text: 'Subjektive Wahrscheinlichkeit, dass auf ein Verhalten Verstärkung folgt; abhängig von Vorerfahrungen; kann falsch sein. (S. 127–129)' },
            { term: 'Verstärkungswert (VW)', text: 'Subjektive Präferenz für einen Verstärker: Wie sehr möchte ich diese Folge? (S. 127–129)' },
            { term: 'Verstärker (Rotter)', text: 'Die **Folge** des Verhaltens. Verhalten kann beobachtbar sein oder nicht (auch Gedanken und Gefühle). (S. 127–129)' },
            {
              term: 'Psychologische Situation',
              text: 'Abgrenzung vom Behaviorismus: Es zählt immer die **subjektive Einschätzung** des Individuums; jede Person hat eine eigene Lerngeschichte und stabile Merkmale; die Situation liefert **Hinweisreize**. (S. 131–132)',
            },
          ],
        },
        { t: 'widget', w: 'rotter-vp' },
      ],
    },
    {
      id: 'kontrolle',
      title: 'Erwartungen und Kontrollüberzeugung',
      blocks: [
        {
          t: 'compare',
          items: [
            { title: 'Spezifische Erwartung', text: 'Aus spezifischen Vorerfahrungen; gilt nur für **bestimmte Situationen**.' },
            {
              title: 'Generalisierte Erwartung',
              text: '**Situationsübergreifend**; hilft bei Entscheidungen **ohne Vorerfahrung** → Kontrollüberzeugung als erworbenes Persönlichkeitsmerkmal.',
            },
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Kontrollüberzeugung (locus of control)',
              text: 'Generalisierte Erwartung als **erworbenes** Persönlichkeitsmerkmal: **internal** («Ich habe Kontrolle») vs. **external** (Kontrolle bei Macht, Glück, anderen Personen). (S. 133–134)',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Internal',
              sub: '«Ich habe Kontrolle»',
              bullets: [
                'effizientere Informationsverarbeitung (besseres **intentionales und inzidentelles** Lernen)',
                'höhere Lebensqualität bei chronischen Krankheiten',
                'bessere Stressverarbeitung',
                'hängt mit Arbeitsleistung zusammen',
              ],
            },
            {
              title: 'External',
              sub: 'Macht, Glück, andere',
              bullets: [
                'ängstlicher, aggressiver, dogmatischer, misstrauischer, unsicherer',
                'eher **misserfolgsvermeidend**',
                'korreliert positiv mit **Schwere der Depression**',
                'nach negativen Lebensereignissen eher Depression/Ängstlichkeit',
              ],
            },
          ],
        },
        {
          t: 'p',
          text: '**Entwicklung:** Positive emotionale Zuwendung, Unterstützung und Bestätigung in der Erziehung fördern **internale** Kontrollüberzeugungen; auch die soziale Schicht spielt eine Rolle. (S. 133–134)',
        },
        { t: 'widget', w: 'kontrolle-sort' },
      ],
    },
    {
      id: 'bandura',
      title: 'Albert Bandura: sozial-kognitives Lernen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Selbstregulation',
              text: 'Steuerung des eigenen Verhaltens z. B. durch **Selbstlob, Selbstkritik**; wichtig zur Zielerreichung. (S. 135)',
            },
            {
              term: 'Selbstwirksamkeitserwartung (self-efficacy)',
              text: 'Überzeugung, aufgrund **eigener Fähigkeiten** mit bestimmten Handlungen ein gewünschtes Ergebnis zu erreichen (Bandura 1994); Vertrauen in eigene Fähigkeiten; «selbsterfüllende Prophezeiung»; wichtig für Motivation und Resilienz. (S. 135)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Befunde (S. 136)',
          items: [
            '**Niedrige** Selbstwirksamkeit sagt **Rückfälle** bei Rauchentwöhnung voraus.',
            '**Hohe** Selbstwirksamkeit korreliert mit Erfolg in Schule, Studium, Beruf – auch **inkrementell** über Big Five, Intelligenz und Vorerfahrung.',
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Ausführen', text: 'Das Verhalten selbst ausführen (eigene Erfolgserfahrung)' },
            { title: 'Stellvertretend', text: 'Stellvertretende Erfahrung (**Modelllernen**)' },
            { title: 'Teilnehmend', text: 'Teilnehmende Modellierung («**Trockenübung**»)' },
          ],
        },
        { t: 'p', text: 'So ist Selbstwirksamkeit **lernbar**. (S. 136)' },
        {
          t: 'callout',
          tone: 'achtung',
          text: '**Kontrollüberzeugung** (Rotter; generalisierte Erwartung, *wo* liegt die Kontrolle?) ≠ **Selbstwirksamkeitserwartung** (Bandura; Vertrauen in die *eigene Handlungsfähigkeit*).',
        },
      ],
    },
    {
      id: 'beurteilung',
      title: 'Beurteilung und Transfer',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Pro (S. 137)',
              bullets: [
                'geht über reine Verstärkung hinaus (Selbstverstärkung, Selbstregulation)',
                'verbindet kognitive, soziale und lerntheoretische Ansätze',
                '«objektive» Daten (Verhaltensbeobachtung)',
                'empirische Belege; hohe Relevanz in der angewandten Forschung',
              ],
            },
            { title: 'Contra (S. 137)', bullets: ['keine Diskussion **genetischer/biologischer** Einflüsse'] },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Persönlichkeit als Moderator (S. 138–139)',
          text: [
            'Internale Kontrollüberzeugung → bessere Stressverarbeitung; external → nach negativen Lebensereignissen eher Depression/Ängstlichkeit.',
            'Situationsfaktoren allein erklären nur **bis ca. 10 %** der negativen psychischen/physischen Zustände; der Einbezug von Persönlichkeitsmoderatoren verbessert die Vorhersage.',
            '**Post-traumatic growth** ist möglich.',
          ],
        },
        {
          t: 'p',
          text: '**Weiterentwicklung:** bereichsspezifische Kontrollüberzeugungen (z. B. Diabetes, Arbeit; internal hängt mit Arbeitsleistung zusammen). (S. 139)',
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Kontrollfrage aus der Vorlesung (S. 140)',
          text: 'Erklären Sie Rotters Theorie mit den Begriffen **Verhalten, Verhaltenspotenzial, Verstärker, Erwartung, Verstärkungswert, psychologische Situation**.',
        },
      ],
    },
  ],
};
