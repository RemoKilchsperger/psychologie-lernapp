import type { Chapter } from '../model';

export const kap3: Chapter = {
  id: 'eigenschaften',
  nr: 3,
  short: 'Eigenschaftstheorien',
  title: 'Eigenschaftstheorien und Gesamtsysteme',
  date: '14.10.2026',
  pages: 'S. 58–71',
  color: '#7c3aed',
  kern: [
    'Zwei Ebenen: oben latente **Eigenschaften/Traits/Faktoren/Superfaktoren**, unten beobachtbare **Items, Verhaltensweisen, Symptome**. Eigenschaften zeigen **Stabilität** (über Zeit) und **Konsistenz** (über Situationen). (S. 58)',
    'Von **Typen zu Dimensionen**; Dimensionen werden per **Faktorenanalyse** gewonnen – Ziel: wenige Dimensionen, die Persönlichkeit möglichst umfassend beschreiben. (S. 59)',
    '**Lexikalische Hypothese:** Relevante Persönlichkeitsunterschiede sind in der Sprache kodiert. (S. 63)',
    '**Fünf-Faktoren-Modell** (Costa & McCrae 1992): O, C, E, A, N mit je **6 Facetten**. (S. 64)',
    '**PEN-Modell** (Eysenck): Extraversion, Neurotizismus, Psychotizismus; hierarchisch, biologisch begründet, **lehnt den lexikalischen Ansatz ab**. (S. 66)',
    'Die Modelle sind ähnlicher als gedacht: **P ≈ niedrige Verträglichkeit + Gewissenhaftigkeit**; **Offenheit fehlt** bei Eysenck. (S. 69–71)',
  ],
  sections: [
    {
      id: 'ebenen',
      title: 'Begriffe und Ebenen',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Obere Ebene (latent)',
              text: 'Eigenschaften / **Traits** (engl.) / Konstrukte / **Faktoren** (methodischer Begriff) / **Superfaktoren** / latente Variablen',
            },
            {
              title: 'Untere Ebene (beobachtbar)',
              text: 'Was man direkt beobachten kann: **Items**, Variablen, Fragen, Verhaltensweisen, Beobachtungen, Symptome',
            },
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Eigenschaft (Eigenschaftstheorie)',
              text: 'Verhaltens- und Erlebensmuster mit **Stabilität** (über die Zeit) und **Konsistenz** (über Situationen). (S. 58)',
            },
          ],
        },
        {
          t: 'p',
          text: '**Entwicklung:** Typen sind selten «rein»; präzise Messung zeigt graduelle Unterschiede → Typen zugunsten von **Dimensionen** aufgegeben. Heute «state of the art»: **Gesamtsysteme** mit wenigen Dimensionen (3, 5 oder 6–8?). (S. 58–59)',
        },
      ],
    },
    {
      id: 'fa',
      title: 'Methodenexkurs Faktorenanalyse',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Faktorenanalyse (FA)',
              text: 'Mathematisch-statistisches Verfahren zur **Datenreduktion**: analysiert Korrelationen von Variablen (Items, Skalen) und fasst häufig gemeinsam auftretende Variablen zu **Faktoren** zusammen; möglichst viel Varianz soll erklärt werden. (S. 60)',
            },
            {
              term: 'Faktorladung',
              text: 'Korrelation einer Variablen mit dem Faktor; Zuordnung ab Ladung **≥ .30**. (S. 59)',
            },
            {
              term: 'Rotation',
              text: 'Drehung des Faktorraums → **Einfachstruktur** (jede Variable lädt hoch auf nur einem Faktor). **Orthogonal** = unkorrelierte Faktoren; **oblique** (schiefwinklig) = korrelierte Faktoren, die zu **Superfaktoren höherer Ordnung** zusammengefasst werden können. (S. 59, 62)',
            },
          ],
        },
        { t: 'widget', w: 'faktorenanalyse' },
        {
          t: 'list',
          items: [
            '**Extraktion** sukzessive nach maximal erklärter Varianz; Techniken: Hauptachsen- vs. Hauptkomponentenanalyse. (S. 59)',
            '**Benennung** des Faktors anhand der hoch ladenden Variablen = **subjektiv**; bei Eigenschafts-FA ist der Faktorname der Name der Eigenschaft. Auch die **Anzahl Faktoren** ist subjektiv → **Replizierbarkeit** wichtig. (S. 59, 62)',
            '**Bedeutung für die Eigenschaftstheorie:** Reduktion vieler Verhaltensweisen auf wenige Dimensionen; Hinweis, welche Items eine Dimension gut erfassen (Ladungen). (S. 59)',
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Kontrollfrage aus der Vorlesung (S. 62)',
          text: 'Erklären Sie in 1–2–3 Sätzen: **Was** ist eine Faktorenanalyse, **wozu** dient sie, **wie** funktioniert sie?',
        },
      ],
    },
    {
      id: 'lexikalisch',
      title: 'Lexikalischer Ansatz',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Lexikalische Hypothese',
              text: '(Nach Galton 1884) Alle relevanten Persönlichkeitsbeschreibungen sind in der **Sprache enkodiert**; je häufiger ein Wort bzw. je mehr Synonyme, desto wichtiger; je mehr Wörter pro Trait, desto wichtiger der Trait; soll für alle Sprachen gelten. **Goldberg (1982):** Wichtige Unterschiede werden bemerkt, besprochen und erhalten ein Wort. (S. 63)',
            },
          ],
        },
        {
          t: 'table',
          head: ['Kategorie (Allport & Odbert 1936)', 'Anzahl', 'Beispiele'],
          rows: [
            ['**Persönlichkeitsmerkmale**', '4505', 'stabile Eigenschaften, z. B. schüchtern, gesellig'],
            ['**Aktuelle Befindlichkeit**', '4541', 'Zustände, Stimmungen'],
            ['**Bewertungen**', '5226', 'soziale/charakterliche Urteile'],
            ['**Restkategorie**', '3682', 'z. B. körperliche Attribute, Fähigkeiten, Metaphern'],
          ],
          caption: 'Ca. 18 000 persönlichkeitsrelevante Wörter im Englischen, 4 Kategorien (S. 63)',
        },
        {
          t: 'steps',
          items: [
            { title: 'Wörter sammeln', text: 'Adjektive (auch Verben, Substantive) aus dem Wörterbuch' },
            { title: 'Beschreiben', text: 'Selbst- oder Bekanntenbeschreibung mit diesen Begriffen' },
            { title: 'Korrelieren', text: 'Interkorrelationen der Begriffe berechnen' },
            { title: 'Faktorisieren', text: 'FA → wenige Grunddimensionen. Erster: **Raymond Cattell** (1940/45)' },
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: 'Die Ergebnisse hängen ab von der Auswahl der Begriffe, der Anzahl Variablen und Ein-/Ausschlüssen (z. B. Leistungsbegriffe, Emotion, Interessen). (S. 64)',
        },
      ],
    },
    {
      id: 'bigfive',
      title: 'Big Five / Fünf-Faktoren-Modell (FFM)',
      blocks: [
        {
          t: 'p',
          text: 'Es gibt mehrere Fünf-Faktoren-Modelle; v. a. in **germanischen Sprachen** repliziert, in anderen Sprachfamilien 3–6 Faktoren; Bezeichnungen und Zuordnung variieren. **Costa & McCrae:** zuerst **Drei-Faktoren-Modell NEO** (1985, auf Basis der Cattell-Studien), dann Revision **NEO-PI-R → FFM (1992)**; hierarchisch mit je **6 Facetten**. (S. 64)',
        },
        {
          t: 'defs',
          items: [
            { term: 'Neurotizismus (N)', text: 'Facetten: Ängstlichkeit, Reizbarkeit, Depression, soziale Befangenheit, Impulsivität, Verletzlichkeit. (S. 64)' },
            { term: 'Extraversion (E)', text: 'Facetten: Herzlichkeit, Geselligkeit, Durchsetzungsfähigkeit, Aktivität, Erlebnishunger, Frohsinn. (S. 64)' },
            { term: 'Offenheit für Erfahrungen (O)', text: 'Facetten: Offenheit für Fantasie, Ästhetik, Gefühle, Handlungen, Ideen, Werte- und Normensysteme. (S. 64)' },
            { term: 'Verträglichkeit (A)', text: 'Agreeableness. Facetten: Vertrauen, Freimütigkeit, Altruismus, Entgegenkommen, Bescheidenheit, Gutherzigkeit. (S. 64)' },
            { term: 'Gewissenhaftigkeit (C)', text: 'Conscientiousness. Facetten: Kompetenz, Ordnungsliebe, Pflichtbewusstsein, Leistungsstreben, Selbstdisziplin, Besonnenheit. (S. 64)' },
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Prüfungshinweis (S. 64, Notiz)',
          text: 'Begriffe den Big Five **zuordnen** und die Faktoren **erklären** können. → Übe mit dem Facetten-Trainer.',
        },
        { t: 'widget', w: 'bigfive-facetten' },
        {
          t: 'compare',
          items: [
            { title: 'Stärken', bullets: ['empirisch gut gestützt', 'heute **einflussreichster** Ansatz'] },
            {
              title: 'Schwächen',
              bullets: [
                'kaum **theoretische Begründung** (v. a. empirisch)',
                'unterschiedliche Benennungen erschweren Konsens',
                'lexikalischer Ansatz nicht in allen Sprachen erfolgreich: **E, A, C** kulturell eher kohärent, **N und O nicht immer** (Thalmayer & Saucier 2019)',
              ],
            },
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Heute z. T. Big Five + **Moralfaktor** (sechs Faktoren, vgl. **HEXACO**). (S. 51, 69, Notiz)',
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Beispiel Schweiz',
          text: 'Regionale Unterschiede der Big Five zwischen Kantonen; die Passung Person–Region (**person-environment fit**) hängt mit Wohlbefinden zusammen. (S. 65)',
        },
      ],
    },
    {
      id: 'pen',
      title: 'PEN-Modell von H.-J. Eysenck',
      blocks: [
        {
          t: 'list',
          title: 'Grundannahmen (über 40 Jahre entwickelt; S. 66)',
          items: [
            'wenige, allgemeine, **replizierbare** Grunddimensionen',
            '**Kontinuum** zwischen Normalverhalten und Psychopathologie (Neurosen, Psychosen)',
            'Dimensionen werden an **Extremgruppen** gewonnen und dann «zurückentwickelt»',
            '**lehnt den lexikalischen Ansatz ab**',
            'Dimensionen haben eine **biologische Basis** (erst Erblichkeit nachweisen, dann kausale Theorien)',
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Extraversion (Eysenck)', text: 'Introversion vs. Extraversion. Traits: gesellig, lebhaft, aktiv, durchsetzungsfähig, reizsuchend, sorglos, dominant, optimistisch, abenteuerlustig. (S. 66, 70)' },
            { term: 'Neurotizismus (Eysenck)', text: 'Emotionale Stabilität vs. Labilität. Hoch N → grösseres Risiko für Neurosen. (S. 66)' },
            { term: 'Psychotizismus (P)', text: 'Später ergänzt: Impulskontrolle vs. Impulsivität. Hoch P → grösseres Risiko für Psychosen. **Quantitatives Kontinuum** im Normalbereich, nicht gleich Psychose. (S. 66–67)' },
          ],
        },
        { t: 'widget', w: 'pen-hierarchie' },
        {
          t: 'study',
          title: 'Herleitung von E und N (1947)',
          source: 'Eysenck (S. 66)',
          method: '700 «neurotische» Soldaten (Mill-Hill-Krankenhaus, 2. Weltkrieg); 39 Variablen aus Fremdbeobachtungen faktorenanalysiert.',
          result: '1. unrotierter Faktor = N. 2. bipolarer Faktor: Dysthymie (Ängstlichkeit, Depression, Zwang) vs. Hysterie → Introversion vs. Extraversion.',
          takeaway: 'E und N wurden an einer **Extremgruppe** gewonnen – und genau diese Stichprobe erklärt, warum **Offenheit** bei Eysenck fehlt.',
        },
        {
          t: 'p',
          text: '**P (1952):** Test von **Kretschmers** Annahmen: kontinuierlicher Übergang Normalität–Psychose, also **quantitative, nicht qualitative** Unterschiede (Gegenbeispiel kategorial: «Mandarine vs. Apfel», entweder–oder). 1992 skizziert Eysenck die ganze P-Dimension. (S. 66–67)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Stärken (S. 68)',
              bullets: ['empirisch über viele Stichproben/Kulturen gestützt', 'Betonung von Messung und Experiment', 'viele Verhaltenskorrelate', 'erklärt auch **Ursachen** (biologisch)', 'sehr **sparsam**'],
            },
            { title: 'Schwäche (S. 68)', bullets: ['**P-Skala** psychometrisch problematisch (Reliabilität)'] },
          ],
        },
      ],
    },
    {
      id: 'vergleich',
      title: 'Modellvergleich: Gemeinsamkeiten und Unterschiede',
      blocks: [
        { t: 'widget', w: 'modellvergleich' },
        {
          t: 'list',
          items: [
            '**«E ist nicht gleich E»:** unterschiedliche Marker, z. B. Cattell (Wärme, Lebhaftigkeit, soziale Kompetenz, Gruppenorientierung), Eysenck (s. o.), Costa & McCrae (Herzlichkeit, Durchsetzung, Geselligkeit, Erregungssuche, positive Gefühle, Aktivität), Norman (gesprächig, freimütig, unternehmungslustig, gesellig). (S. 69–70)',
            '**Gemeinsam:** E und N finden sich in fast allen Ansätzen. (S. 71)',
            '**P** findet sich aufgeteilt in (niedrige) **Verträglichkeit** und **Gewissenhaftigkeit**; Costa & McCrae: P sei eine «**willkürliche Vermischung**» von V und G. (S. 69, 71)',
            '**Offenheit:** am meisten diskutiert; historisch und bei Eysenck nicht enthalten; im FFM z. T. «Culture» oder «Intellect». Eysenck: O gehört zu den **Einstellungen**; vermutlich nicht gefunden, weil seine Stichprobe aus **traumatisierten Soldaten** bestand. (S. 69, 71)',
            '**Psychoanalyse:** Freud nutzte Extraversion/Introversion/Neurose; **Jung** beschrieb E/I als **Typen**; Neurose als Extremform des Neurotizismus. (S. 71)',
            '**Warum verschiedene Lösungen?** Unterschiedliche Stichproben, Variablenauswahl und Methoden (lexikalisch vs. Extremgruppen). (S. 69)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Compound traits',
              text: 'Zusammengesetzte Merkmale (Items laden auf mehreren Faktoren), praxisrelevant: z. B. **Integrität** (C, A, ES), **Kundenorientierung** (A, ES, C), **Stresstoleranz** (ES, A, C), **Managementpotenzial** (ES, EX, C); ES = emotionale Stabilität. (S. 70)',
            },
          ],
        },
      ],
    },
  ],
};
