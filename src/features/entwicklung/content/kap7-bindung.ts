import type { Chapter } from '../model';

/**
 * Quelle: Entwicklungspsychologie_Bindung_Zusammenfassung.pdf (7 S., 2 Abb.).
 * Eigener Foliensatz «Bindung» (24 Folien) – die Folienangaben (Fol. n) beziehen sich in diesem
 * Kapitel auf diesen Foliensatz, nicht auf die durchlaufende Nummerierung der Kapitel 1–6.
 */
export const kap7: Chapter = {
  id: 'bindung',
  nr: 7,
  short: 'Bindung',
  title: 'Bindung',
  date: '',
  folien: 'Foliensatz Bindung, Fol. 1–24',
  lohaus: 'Kap. 8 (S. 129–141) ohne 8.1.3, 8.2.2.4, 8.2.2.5 · aus Kap. 15 nur 15.2.1.1 «Bindungsqualität» und «Monotropieannahme» (S. 270–271)',
  color: '#0f8f9c',
  kern: [
    '**Bindungs- und Fürsorgesystem** sind komplementäre, evolutionsbiologisch angelegte Verhaltenssysteme mit demselben Ziel: Nähe und Sicherheit des Kindes.',
    '**Bindungsverhalten ≠ Bindung:** Bindungsverhalten ist angeboren und anfangs unspezifisch; Bindung ist das emotionale Band zu bestimmten Personen und entsteht später.',
    '**Feinfühligkeit** (Ainsworth): Signale wahrnehmen, richtig interpretieren, angemessen und prompt reagieren – Grundlage sicherer Bindung.',
    'Bindung entwickelt sich in **vier Phasen nach Bowlby**; Voraussetzung sind Objektpermanenz und Schemata. Bindungs- und Explorationssystem sind Gegenspieler.',
    '**Fremde Situation** (12–18 Mon.): vier Muster – B sicher 60–70 %, A unsicher-vermeidend 15–20 %, C unsicher-ambivalent 10–15 %, D desorganisiert 5–10 %.',
    '**Van den Boom (1994):** Feinfühligkeitstraining erhöht sichere Bindung experimentell (62 % vs. 28 %) → kausaler Einfluss.',
    'Bindung ist relativ stabil, **solange die Umwelt stabil ist**; Kinder haben **multiple Bindungen** – Bowlbys Monotropieannahme ist nicht bestätigt.',
  ],
  sections: [
    {
      id: 'theorie',
      title: 'Bindungstheorie: Bindungs- und Fürsorgesystem',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'John Bowlby (1907–1990)',
              text: '**Bindungstheorie**, **Phasenmodell** der Bindungsentwicklung, **Monotropieannahme**. (Fol. 2; LB S. 130)',
            },
            {
              title: 'Mary Ainsworth (1913–1999)',
              text: '**Feinfühligkeit** (Sensitivität), **Fremde-Situations-Test**. (Fol. 2; LB S. 132, 136)',
            },
          ],
        },
        { t: 'figure', fig: 'fuersorge' },
        {
          t: 'defs',
          items: [
            {
              term: 'Bindungssystem',
              text: 'Evolutionsbiologisch angelegtes Verhaltenssystem des Kindes. **Aktiviert bei Bedrohung der Sicherheit**, deaktiviert, sobald Schutz erreicht ist. Ziel anfangs räumliche Nähe, in späteren Fassungen der Theorie emotional-psychische Sicherheit. (Fol. 3; LB S. 131)',
            },
            {
              term: 'Fürsorgesystem',
              text: 'Komplementäres System der Bezugsperson, **aktiviert durch Bindungsverhalten** des Kindes. Die Bezugsperson nutzt ein inneres Arbeitsmodell für Fürsorge (eigene Kindheit + aktuelle Interaktionen), das veränderbar bleibt. (Fol. 3; LB S. 131)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'ergaenzung',
          text: 'Lohaus unterscheidet **Signalverhalten** (ab Geburt) von **aktivem Bindungsverhalten** (Körperkontakt suchen, Nachfolgen, Festklammern) – Letzteres v. a. ab der 2. Hälfte des 1. Lebensjahres, wenn sich das Kind fortbewegen kann. (LB S. 131)',
        },
      ],
    },
    {
      id: 'signale',
      title: 'Signalverhalten & Bindungsverhalten vs. Bindung',
      blocks: [
        {
          t: 'table',
          caption: 'Signalverhalten des Säuglings (Fol. 4–5)',
          head: ['Signal', 'Kennzeichen'],
          rows: [
            [
              '**Lächeln**',
              '1. Monat: **nichtsoziales** (reflektorisches, endogenes) Lächeln. **Soziales Lächeln** ab ca. 6.–10. Woche (Folie: ab 6. Woche), personenbezogen; fördert das Bonding der Eltern. (LB S. 132)',
            ],
            [
              '**Weinen**',
              '**Wichtigstes Signal**; Eltern probieren Beruhigungsstrategien nacheinander aus; meist Unterscheidung von Schmerz- und Hungerschrei (Gustafson & Harris, 1990). (LB S. 131)',
            ],
            ['**Blickkontakt**', 'Schon Neugeborene wenden den Kopf zur Stimme und fixieren das Gesicht, bevor sie scharf sehen. (LB S. 132)'],
            ['**Imitation**', 'Ab wenigen Tagen (z. B. Zunge herausstrecken); Rückgang 3.–6. Monat (kortikale Reorganisation), danach Anstieg. (LB S. 132)'],
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Bindungsverhalten', text: 'Verhaltensweisen des Kindes, die die **Nähe der Bezugsperson sichern** (z. B. Weinen, Lächeln, Nachkrabbeln). Angeboren und anfangs unspezifisch. (Fol. 6)' },
            { term: 'Bindung', text: '**Emotionales Band** des Kindes an eine bestimmte Bezugsperson; baut auf vertrauten Interaktionsmustern auf und entsteht erst später. (Fol. 6; LB S. 134)' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Beliebige Personen', text: 'Bindungsverhalten richtet sich zuerst an jede Person.' },
            { title: 'Bestimmte Personen', text: 'Zunehmend an vertraute Personen gerichtet.' },
            { title: 'Spezifische Bindung', text: 'Emotionales Band an bestimmte Bezugspersonen. (LB S. 134)' },
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Bindungsverhalten ≠ Bindung',
          text: 'Ein Neugeborenes zeigt **Bindungsverhalten**, hat aber noch **keine Bindung**. Übrigens: Eltern binden sich meist **früher** an das Kind als umgekehrt. (LB S. 134)',
        },
      ],
    },
    {
      id: 'feinfuehligkeit',
      title: 'Feinfühligkeit (Ainsworth)',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Feinfühligkeit (Sensitivität)',
              text: 'Fähigkeit der Bezugsperson, **in konsistenter Weise** die Signale des Kindes (1) **wahrzunehmen**, (2) **richtig zu interpretieren**, (3) **angemessen** und (4) **prompt** zu reagieren (Ainsworth et al., 1974). (Fol. 7; LB S. 132)',
            },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Wahrnehmen', text: 'Signal überhaupt bemerken' },
            { title: 'Richtig interpretieren', text: 'Hunger? Müdigkeit? Schmerz?' },
            { title: 'Angemessen reagieren', text: 'passend zum Bedürfnis' },
            { title: 'Prompt reagieren', text: 'zeitnah – sonst kein Zusammenhang erlebbar' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Folge:** Das Kind fühlt sich sicher, erlebt **Kontrolle** über die Umgebung und entwickelt **Vertrauen** in die Welt. (LB S. 132–133)',
            '**Warum «prompt»?** Wegen der kurzen Gedächtnisspanne erlebt der Säugling nur eine **zeitnahe** Reaktion als Folge seines eigenen Verhaltens. (LB S. 133)',
          ],
        },
        {
          t: 'table',
          caption: 'Wie auf Weinen reagieren? Zwei Theorien, zwei Empfehlungen (Fol. 8)',
          head: ['', 'Bindungstheorie (Sensitivität)', 'Lerntheorie (operantes Konditionieren)'],
          rows: [
            ['**Empfehlung**', 'Prompt und angemessen reagieren', 'Weinen nicht (sofort) verstärken'],
            [
              '**Begründung**',
              'Kind erlebt, dass Signale beantwortet werden → Sicherheit → langfristig **weniger** Weinen. (LB S. 132–133)',
              'Zuwendung = Verstärker → **mehr** Weinen; ausbleibende Verstärkung → Löschung; intermittierende Verstärkung → besonders stabiles Verhalten. (LB S. 21)',
            ],
          ],
        },
        {
          t: 'callout',
          tone: 'web',
          text: [
            'Literatur auf Fol. 23: **Hubbard & van IJzendoorn (1991)**, kritische Replikation von Bell & Ainsworth (1972); Längsschnitt, 50 Mutter-Kind-Paare, erste 9 Lebensmonate.',
            'Befund: **Verzögerte** mütterliche Reaktion verringerte die Zahl der Weinepisoden im 1. Halbjahr – eher im Sinne der Lerntheorie. Erklärung: «differential responsiveness» (Mütter reagieren je nach Art des Weinens unterschiedlich schnell).',
            'Van den Boom (Fol. 20) fand dagegen **weniger** Weinen nach Feinfühligkeitstraining. Die Folie selbst gibt keine Antwort vor.',
          ],
        },
      ],
    },
    {
      id: 'entwicklung',
      title: 'Bindungsentwicklung nach Bowlby',
      blocks: [
        {
          t: 'list',
          title: 'Kognitive Voraussetzungen (Fol. 9)',
          items: [
            '**Objektpermanenz:** Wissen, dass Personen/Objekte weiter existieren, wenn sie nicht sichtbar sind (Piaget, sensumotorische Phase – vgl. Kapitel 5). (LB S. 30, 134)',
            '**Schemata:** kognitive Repräsentationen, nötig zur **Unterscheidung vertrauter und fremder Personen**. (LB S. 134)',
          ],
        },
        { t: 'widget', w: 'bowlby-phasen' },
        {
          t: 'table',
          caption: 'Phasen der Bindungsentwicklung nach Bowlby (Fol. 10; LB S. 135, Tab. 8.1)',
          head: ['Phase', 'Alter', 'Beschreibung'],
          rows: [
            ['**1. Vorphase der Bindung**', 'Geburt – 6 Wochen', 'Bindungsverhalten gegenüber **jeder Person**; angeborene Signale zur Bedürfnisbefriedigung'],
            ['**2. Phase der entstehenden Bindung**', '6 Wochen – 6/8 Monate', 'Zunehmend **spezifische Reaktionen auf vertraute Personen**; spezifische Erwartungen an deren Verhalten'],
            ['**3. Phase der ausgeprägten Bindung**', '6/8 Monate – 1½/2 Jahre', 'Eigentliche spezifische Bindung: **aktive Kontaktaufnahme**, Unbehagen und **Protest bei Trennung**, Spannung bei Fremden (**Fremdeln**)'],
            ['**4. Phase reziproker Beziehungen**', 'ab 1½–2 Jahren', '**Inneres Arbeitsmodell** der Bindung; Akzeptieren von Trennungssituationen'],
          ],
        },
        {
          t: 'list',
          items: [
            '**Phase 4:** Das Kind weiss aufgrund des Arbeitsmodells, dass die Bezugsperson grundsätzlich verfügbar ist; kann eigene Ziele anpassen und Bedürfnisse der Bezugsperson berücksichtigen. (LB S. 135)',
            '**Fremdeln:** stärker bei unvertrauter Person und geringer Distanz; Höhepunkt im 2. Lebensjahr, danach Abnahme. (LB S. 135)',
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Abweichung Folie / Lehrbuch',
          text: 'Lohaus nennt Phase 4 **«Phase der zielkorrigierten Partnerschaft»** und spricht von der **Festigung** eines implizit bereits vorhandenen Arbeitsmodells – die Folie von dessen **Entstehen**. Für die Prüfung gilt die **Folienvariante** («reziproke Beziehungen»).',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Inneres Arbeitsmodell (internal working model)',
              text: 'Verinnerlichte Bindungsrepräsentation (Schema) aus vielen Interaktionserfahrungen. Enthält ein Bild vom **Selbst** («Bin ich liebenswert?») und von **anderen** («Kann ich mich auf andere verlassen?»); prägt spätere Beziehungen. (Fol. 11; LB S. 135)',
            },
            {
              term: 'Explorationssystem',
              text: 'Angeborene **Neugiermotivation**, sich von der Bezugsperson zu entfernen und die Umwelt zu erkunden. **Antagonist zum Bindungssystem:** Bindungs- und Explorationsverhalten schliessen sich aus – Exploration erst, wenn Sicherheit gegeben ist. (Fol. 11; LB S. 135)',
            },
          ],
        },
      ],
    },
    {
      id: 'fremde-situation',
      title: 'Bindungsqualität: Fremde-Situations-Test',
      blocks: [
        {
          t: 'p',
          text: '**Fremde-Situations-Test** (Strange Situation Test, SST; Ainsworth et al., 1978): Einsatzalter **12–18 Monate**; Laborraum mit Einwegspiegel/Video; Abbruch bei übermässiger Belastung. 8 Episoden mit **steigender Belastung** (fremder Raum → fremde Person → Trennung → Alleinsein) aktivieren das Bindungssystem schrittweise. (Fol. 12–13; LB S. 136)',
        },
        { t: 'widget', w: 'fremde-situation' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Was ist besonders aussagekräftig?',
          text: 'Die **Trennungs- und vor allem die Wiedervereinigungsepisoden** (5 und 8), dazu die Spielqualität und die Interaktion mit der Fremden. (LB S. 136–137)',
        },
      ],
    },
    {
      id: 'muster',
      title: 'Die vier Bindungsmuster',
      blocks: [
        { t: 'figure', fig: 'waage' },
        { t: 'widget', w: 'bindungstypen' },
        {
          t: 'table',
          caption: 'Bindungsmuster im Überblick (Fol. 14–18; LB S. 137–138)',
          head: ['Muster', 'Verhalten im SST', 'Entstehung'],
          rows: [
            [
              '**B – sicher** (60–70 %)',
              'Mutter als **sichere Basis** (secure base) und **sicherer Hafen** (safe haven); evtl. Weinen bei Trennung, bevorzugt Mutter gegenüber Fremder; **Freude und Nähesuchen bei Rückkehr**.',
              'Feinfühlige Beantwortung der Signale; Umwelt verlässlich.',
            ],
            [
              '**A – unsicher-vermeidend** (15–20 %)',
              'Indifferent gegenüber Mutter; kaum Kummer bei Trennung; Fremde wie Mutter behandelt; **keine spezifische Reaktion bei Rückkehr** (Lohaus: aktives Meiden der Nähe). Trotzdem gestresst: **erhöhtes Kortisol** (Spangler & Grossmann, 1993).',
              'Bezugsperson bietet zu wenig Zuverlässigkeit, evtl. Zurückweisung → Kind zeigt aus **Angst vor Zurückweisung** weniger Bindungsverhalten.',
            ],
            [
              '**C – unsicher-ambivalent** (10–15 %)',
              'Vor Trennung viel Nähesuchen, wenig Exploration; bei Rückkehr oft **aggressiv/wütend, kaum zu trösten**; allein mit Fremder passiv oder ärgerlich.',
              '**Wechsel** zwischen zuverlässiger und unzuverlässiger Zuwendung; Kind klammert, kann die Bezugsperson aber nicht zur Emotionsregulation nutzen.',
            ],
            [
              '**D – desorganisiert-desorientiert** (5–10 %)',
              'Konfuse, widersprüchliche Muster; **Einfrieren**, unvollständige Bewegungen, Stereotypien; keine konsistente Stressbewältigung; ängstliches Lächeln, Wegschauen bei Annäherung der Bezugsperson.',
              '**«Unlösbares Problem»:** Bezugsperson ist Ziel der Annäherung und zugleich **Quelle der Angst**. Kann auf sehr ungünstige Erfahrungen hinweisen (muss nicht); auch genetische Dispositionen diskutiert. Elternverhalten «feindlich» oder «ängstlich» (Lyons-Ruth et al., 2002; LB S. 271).',
            ],
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            'Buchstaben **nicht** nach Häufigkeit: **A** = vermeidend, **B** = sicher, **C** = ambivalent, **D** = desorganisiert.',
            '**A-Typ ist nicht stressfrei:** kaum Bindungsverhalten, aber erhöhtes Kortisol.',
            '**D** weist auf ungünstige Erfahrungen **hin**, beweist sie aber nicht.',
          ],
        },
      ],
    },
    {
      id: 'kultur',
      title: 'Kulturelle Unterschiede',
      blocks: [
        {
          t: 'list',
          items: [
            'Die Verteilung der Muster unterscheidet sich zwischen Kulturen (Metaanalyse **Mesman et al., 2016**); das **sichere Muster ist fast überall am häufigsten**. (Fol. 16; LB S. 138–139)',
            'Gesellschaften mit hoher Wertschätzung von Gemeinschaft/familiärem Zusammenhalt: **mehr C-Typen** (Strand et al., 2019). Mögliche Erklärung: Ambivalenz fördert die emotionale Orientierung an der Bezugsperson (Rothbaum et al., 2000). (LB S. 139)',
            'Was «angemessene» Bindung ist, muss evtl. **kulturabhängig** definiert werden (**Keller, 2014**): westlich Förderung von **Unabhängigkeit** (Objektstimulation), kollektivistisch **soziale Nähe** (Körperkontakt). (LB S. 139)',
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          title: 'Diskussionsfrage Fol. 17',
          text: 'Was bedeutet der höhere C-Anteil in **Japan**? (Fotos: Co-Sleeping, Tragen – ständige körperliche Nähe.) Japan wird im Lohaus nicht genannt.',
        },
        {
          t: 'callout',
          tone: 'web',
          text: [
            'Studien aus Sapporo (Miyake et al., 1985; Takahashi, 1986/1990): über 30 % C-Typ, **keine A-Typen** (Takahashi 1990: 68 % B, 32 % C, 0 % A; Sekundärquelle).',
            'Deutung: Japanische Kinder kannten kaum Trennungen; der SST war für sie ungewöhnlich belastend, was C-Klassifikationen begünstigt. Der höhere C-Anteil kann daher ein **Messartefakt** sein (Frage der kulturellen Validität), nicht zwingend schlechtere Bindung.',
          ],
        },
      ],
    },
    {
      id: 'vandenboom',
      title: 'Interventionsstudie van den Boom (1994)',
      blocks: [
        {
          t: 'study',
          title: 'Feinfühligkeitstraining bei irritablen Babys',
          source: 'van den Boom, 1994 (Fol. 19–20)',
          age: '0;6 – 1;0',
          method:
            'Frage: Ist Feinfühligkeit ursächlich für sichere Bindung? 100 Mütter irritabler (leicht reizbarer) Babys, randomisiert in Experimentalgruppe (Training mütterlicher Sensitivität ab 0;6) und Kontrollgruppe (keine Intervention). Pretreatment → Intervention → MZP 1 (0;9): Interaktion, Beziehungsqualität, Exploration → MZP 2 (1;0): Fremde Situation.',
          result:
            'EG-Mütter aufmerksamer, eingehender, stimulierender; EG-Kinder geselliger, mehr Exploration, leichter zu beruhigen, weinten weniger. Mit 1;0 waren 62 % der EG-Kinder sicher gebunden vs. 28 % in der KG.',
          takeaway:
            '**Experiment statt Korrelation** → Beleg für einen **kausalen Einfluss der Feinfühligkeit**. Ein schwieriges Temperament führt **nicht zwangsläufig** zu unsicherer Bindung.',
        },
        { t: 'widget', w: 'vandenboom' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Warum ein Experiment?',
          text: 'Eine Korrelation zwischen Feinfühligkeit und sicherer Bindung liesse offen, ob z. B. ein «einfaches» Kind feinfühligeres Verhalten **hervorruft** (vgl. evokative Anlage-Umwelt-Korrelation, Kapitel 1). Durch die **zufällige Zuteilung** und die gezielte Veränderung der Feinfühligkeit ist der Unterschied auf das Training zurückzuführen.',
        },
        {
          t: 'callout',
          tone: 'web',
          text: 'Mütter aus niederländischen Familien mit niedrigem sozioökonomischem Status; Intervention 3 Monate (Ende mit 9 Monaten), zwei Interventions- und zwei Kontrollgruppen. Die Studie kommt im Lohaus nicht vor.',
        },
      ],
    },
    {
      id: 'stabilitaet',
      title: 'Stabilität, multiple Bindung & Folgen',
      blocks: [
        {
          t: 'list',
          title: 'Stabilität (Fol. 21; LB S. 139)',
          items: [
            'Teils **hohe Stabilität:** Waters et al. (2000a) – **72 %** stabile Muster über 20 Jahre.',
            '**Aber:** viele Studien mit Mittelschichtfamilien mit stabilen Familienstrukturen. Bei Beziehungsveränderungen geringere Stabilität; grosse Längsschnitte (Groh et al., 2014) deutlich niedriger. Zudem unterschiedliche Messmethoden (SST vs. Interview).',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Die Stabilität der Bindung hängt von der **Stabilität der bindungsrelevanten Umwelterfahrungen** ab. (LB S. 139)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Monotropieannahme (Bowlby)',
              text: 'Angeborene Tendenz, Bindung auf **eine** Person (meist die Mutter) auszurichten – **empirisch nicht bestätigt**. (LB S. 271)',
            },
            {
              title: 'Heute: multiple Bindung',
              bullets: [
                'Kinder entwickeln Bindungen zu **mehreren Personen** im sozialen Netzwerk (oft mit einer Hauptbezugsperson); die Muster können sich je Person unterscheiden.',
                '**Kompensation:** Andere Bezugspersonen können Bindungsfunktionen übernehmen; eine unsichere Bindung an die Hauptbezugsperson muss nicht zu Nachteilen führen. (LB S. 138–139)',
              ],
            },
          ],
        },
        {
          t: 'table',
          caption: 'Mittel- und langfristige Folgen – drei Wirkwege (Fol. 22)',
          head: ['Wirkweg', 'Befunde'],
          rows: [
            [
              '**Inneres Arbeitsmodell → Sozialbeziehungen**',
              'Sicher Gebundene: selbstsicherer, sozial kompetenter, prosozialer, bessere Freundschaften, oft Anführer*innen (Schneider et al., 2001; LB S. 270), beliebter, suchen eher Unterstützung (LB S. 141). **A/C:** uneinheitliche Befunde. **D:** Aggressivität, antisoziales Verhalten (Kindheit); Delinquenz, psychische Belastung, Gewalt (Jugend). (LB S. 271)',
            ],
            [
              '**Exploration → kognitive Entwicklung**',
              'Sicher Gebundene nutzen die Bezugsperson als sichere Basis, sind weniger mit Bindungsverhalten beschäftigt und **explorieren mehr**. (LB S. 141)',
            ],
            [
              '**Transgenerationale Weitergabe**',
              'Bindungsmuster der Eltern (Adult Attachment Interview) kehren **überzufällig häufig** bei den Kindern wieder (van IJzendoorn, 1995); Eltern, die eigene Erfahrungen verarbeitet haben, fällt sensitives Verhalten leichter. (LB S. 140–141)',
            ],
          ],
        },
        {
          t: 'list',
          items: [
            '**Einschränkung:** Die Folgen gelten bei **konstanter Umgebung**; Veränderungen im sozialen Gefüge können sie verändern. (LB S. 141)',
            'Die **klarsten Befunde** gibt es für den **D-Typ**. (LB S. 270–271)',
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Prüfungsrelevant (Fol. 24)',
          text: [
            'Lohaus **Kap. 8 komplett ausser** 8.1.3 (Intuitives Elternprogramm), 8.2.2.4 (Q-Sort-Verfahren), 8.2.2.5 (Bindungsqualität in verschiedenen Altersgruppen, u. a. AAI).',
            'Aus Kap. 15 **nur** 15.2.1.1 «Bindungsqualität» und «Monotropieannahme».',
            'Die transgenerationale Weitergabe selbst steht aber auf Fol. 22.',
          ],
        },
      ],
    },
  ],
};
