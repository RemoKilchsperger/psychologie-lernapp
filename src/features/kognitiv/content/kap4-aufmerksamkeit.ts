import type { Chapter } from '../model';

export const kap4: Chapter = {
  id: 'aufmerksamkeit',
  nr: 4,
  short: 'Aufmerksamkeit',
  title: 'Aufmerksamkeit (Teil 1 und 2)',
  pages: 'S. 14–16 + Teil 2 S. 1–6',
  lit: 'Foliensatz «Aufmerksamkeit» F. 1–21 (Teil 1) und F. 22–42 (Teil 2; Exkurs F. 31–35, 40 und 42 nicht behandelt); Teil 2 mit Lehrbuch Anderson (2013) Kap. 3',
  color: '#ea580c',
  kern: [
    'Aufmerksamkeit ist ein (serieller) **Flaschenhals**: Nicht alles kann gleichzeitig verarbeitet werden (Wimmelbild, change blindness). (F. 2); (LB S. 74)',
    '**James (1890):** «Besitzergreifen durch den Geist» von einem aus mehreren möglichen Objekten/Gedankengängen; heute: vielschichtig, oft unbewusst, **«not a single thing»**. (F. 3); (LB S. 74)',
    'Funktionen: **Selektion/Verstärkung** relevanter und **Hemmung** irrelevanter Information wegen **Kapazitätsengpass**. (F. 5)',
    'Kernfrage: Wird **früh (physikalisch)** oder **spät (semantisch)** selektiert? Früh: **Filter (Broadbent, 1958)**, **Dämpfung (Treisman)**; spät: **Deutsch & Deutsch (1963)**. (F. 5, 12)',
    '**Treisman & Riley (1969)** stützen Treisman gegenüber Deutsch & Deutsch. (F. 16)',
    '**Perceptual Load:** Der Ort der Selektion hängt von der **perzeptuellen Belastung** ab. (F. 17–18)',
    '**Lachter et al. (2004):** Ohne Aufmerksamkeit keine semantische Verarbeitung → **moderne Version von Broadbent**. (F. 19–21)',
    '**Teil 2 – visuell:** Aufmerksamkeit lässt sich **verdeckt** (ohne Augenbewegung) auf einen **Ort** richten: valider Cue → schneller (**Gewinn**), invalider Cue → langsamer (**Kosten**). (F. 22; LB S. 57)',
    '**Periphere (exogene)** Cues ziehen Aufmerksamkeit **automatisch und schnell** an; **symbolischen (endogenen)** Cues folgt man **willentlich, langsamer**. (F. 23)',
    '**Merkmalssuche:** Pop-out, RT **unabhängig von der Set Size** (≈ 0 ms/Objekt). **Verbindungssuche:** RT steigt **linear**; Steigung bei abwesendem Ziel **≈ doppelt so gross** → **selbstabbrechende** Suche. (F. 25–29)',
    '**Merkmals-Integrations-Theorie (Treisman & Gelade, 1980):** Merkmale liegen in getrennten **Merkmalskarten**; erst **Aufmerksamkeit auf einen Ort bindet** sie zu einem Objekt. (F. 30; LB S. 62)',
    '**Reale Suche** wird gelenkt durch (1) **Merkmale/Verbindungen**, (2) **Szene**, (3) **Suchverlauf**; Suche in echten Szenen ist **extrem effizient** (≈ 4–5 ms/Item; Wolfe et al., 2011). (F. 36–41)',
  ],
  sections: [
    {
      id: 'formen',
      title: 'Formen und Funktionen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Aufmerksamkeit (James, 1890)',
              text: '«**Besitzergreifen durch den Geist**» von einem aus mehreren möglichen Objekten/Gedankengängen. Heute: vielschichtig, oft unbewusst, **«not a single thing»**. (F. 3); (LB S. 74)',
            },
            {
              term: 'Flaschenhals der Aufmerksamkeit',
              text: 'Aufmerksamkeit ist ein (serieller) **Engpass**: Nicht alles kann gleichzeitig verarbeitet werden (Wimmelbild, **change blindness**). (F. 2); (LB S. 74)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Formen (nicht exklusiv, F. 4)',
          items: [
            '**intern** vs. **extern**',
            '**offen** (mit Blickbewegung) vs. **verdeckt**',
            '**geteilt** (Multitasking)',
            '**Daueraufmerksamkeit**',
            '**selektive/fokussierte** Aufmerksamkeit (Schwerpunkt der Vorlesung)',
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Selektion / Verstärkung', text: 'Relevante Info auswählen – **«Sinn geben»**. (F. 5)' },
            { title: 'Hemmung', text: 'Irrelevante Info unterdrücken – **«zur Seite stellen»**. (F. 5)' },
            { title: 'Konsequenz', text: 'Information in **Raum und Zeit** bleibt **unbeachtet**. (F. 5)' },
          ],
        },
      ],
    },
    {
      id: 'dichotisch',
      title: 'Dichotisches Hören',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Dichotisches Hören / Shadowing',
              text: '**Cherry (1953):** Je Ohr eine **andere** Nachricht; eine wird laut **nachgesprochen** (shadowing, «Beschatten»). Gefragt wird, was vom **unbeachteten** Ohr ankommt. (F. 6)',
            },
            {
              term: 'Cocktailparty-Effekt',
              text: 'Der **eigene Name** im unbeachteten Kanal wird bemerkt – bei **Moray (1959)** in ca. **33 %** der Durchgänge, obwohl 35-mal wiederholte Wörter nicht bemerkt werden. (F. 7, 9) [Web]',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Bemerkt im unbeachteten Ohr', sub: 'physikalische Merkmale', bullets: ['Stimme vs. Geräusch', 'männlich vs. weiblich'] },
            { title: 'Nicht bemerkt', sub: 'Bedeutung', bullets: ['Inhalt', 'Sprache', 'vorwärts vs. rückwärts'] },
          ],
        },
        { t: 'widget', w: 'dichotisch-sort' },
        {
          t: 'study',
          title: '«Dear Aunt Jane»',
          source: 'Gray & Wedderburn (1960) (F. 10)',
          method: 'Ein Ohr hört «Dear – 7 – Jane», das andere «9 – Aunt – 6».',
          result: 'Wiedergegeben wird **«Dear Aunt Jane»** – die Personen wechseln das Ohr und gruppieren nach **Bedeutung**.',
          takeaway: 'Bedeutung steuert die Auswahl → Problem für Broadbents rein physikalischen Filter.',
        },
      ],
    },
    {
      id: 'theorien',
      title: 'Theorien der Selektion',
      blocks: [
        { t: 'widget', w: 'selektion' },
        {
          t: 'table',
          head: ['Theorie', 'Ort / Kriterium', 'Unbeachteter Input'],
          rows: [
            ['**Broadbent (1958)**', 'früh, physikalisch', '**blockiert**'],
            ['**Treisman (1964)**', 'früh, physikalisch', '**gedämpft** (Dämpfung vor der Bedeutungsanalyse)'],
            ['**Deutsch & Deutsch (1963)**', 'spät, semantisch', '**voll verarbeitet**'],
          ],
          caption: 'Vergleich der Selektionstheorien (F. 12)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Filtertheorie',
              text: '**Broadbent (1958):** **Alles-oder-nichts-Filter** nach dem sensorischen Gedächtnis, **vor der Bedeutungsanalyse**; Kriterien: Tonhöhe, Lautstärke, Ohr. Nur **ein Kanal** passiert. Probleme: Cocktailparty, Gray & Wedderburn. (F. 8)',
            },
            {
              term: 'Dämpfungstheorie',
              text: '**Treisman (1960, 1964):** unbeachteter Input wird **abgeschwächt, nicht blockiert**; **«Dictionary Units»** mit Schwellen; tiefe Schwelle (eigener Name) → auch gedämpft erkannt. Kontext senkt Schwellen. (F. 11) [Web]',
            },
            { term: 'Dictionary Units', text: 'Wort-Einheiten in **Treismans** Modell mit unterschiedlichen **Schwellen**; wichtige/erwartete Wörter haben **tiefe Schwellen** und werden auch im gedämpften Kanal erkannt. (F. 11)' },
            {
              term: 'Späte Auswahl',
              text: '**Deutsch & Deutsch (1963):** **Alles** wird semantisch verarbeitet; der **Bedeutungsfilter** kommt erst **vor KZG/Reaktion**. (F. 13)',
            },
          ],
        },
        { t: 'figure', fig: 'broadbent' },
        { t: 'figure', fig: 'treisman' },
        { t: 'figure', fig: 'deutsch' },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Treisman** gehört zur **frühen** Selektion, obwohl sie Bedeutung zulässt (Dämpfung **vor** der Bedeutungsanalyse).',
            '**Deutsch & Deutsch:** Engpass auf der **Reaktionsstufe**, nicht vor der Bedeutungsanalyse.',
          ],
        },
      ],
    },
    {
      id: 'spaet',
      title: 'Belege für späte Selektion',
      blocks: [
        {
          t: 'study',
          title: '«They threw stones toward the bank»',
          source: 'MacKay (1973) (F. 14)',
          method: 'Beachtet: «They threw stones toward the bank»; im **unbeachteten** Ohr gleichzeitig «river» oder «money».',
          result: 'Das unbeachtete Wort beeinflusst die Deutung von «bank» im späteren **Wiedererkennungstest**. (Genaue Ergebnisse stehen nicht auf der Folie.)',
          takeaway: 'Unbeachtetes wird **semantisch verarbeitet** → spricht für späte Selektion.',
        },
        {
          t: 'study',
          title: '«taxi fare»',
          source: 'Eich (1984) (F. 15)',
          method: 'Im unbeachteten Ohr Wortpaare wie «taxi **fare**»; später Wörter schreiben («fare/fair») und Wiedererkennungstest.',
          result:
            'Unbeachtet: häufiger seltene Schreibweise «fare» (**35 vs. 23 %**), obwohl das Wiedererkennen auf **Zufallsniveau** liegt (40 % Hits vs. 38 % FA). Beachtet: 60 vs. 25 %, 88 % Hits vs. 4 % FA.',
          takeaway: '**Implizite** semantische Verarbeitung **ohne explizite Erinnerung**.',
        },
        {
          t: 'table',
          head: ['Eich (1984)', 'seltene Schreibweise «fare»', 'Wiedererkennen Hits', 'FA'],
          rows: [
            ['**unbeachtet**', '**35 %** vs. 23 %', '40 %', '38 % → **Zufallsniveau**'],
            ['beachtet', '60 % vs. 25 %', '88 %', '4 %'],
          ],
          caption: 'Rechtschreib-Bias trotz fehlender expliziter Erinnerung (F. 15)',
        },
      ],
    },
    {
      id: 'entscheidung',
      title: 'Entscheidungstest und Auflösungen',
      blocks: [
        { t: 'widget', w: 'treisman-riley' },
        {
          t: 'defs',
          items: [
            {
              term: 'Perceptual Load Theory',
              text: '**Forster & Lavie (2008):** Ob irrelevante Reize verarbeitet werden, hängt von der **perzeptuellen Belastung** ab. Geringe Belastung → freie Kapazität verarbeitet Irrelevantes (**wie späte Selektion**); hohe → **wie frühe Selektion**. (F. 17)',
            },
            {
              term: 'Leakage',
              text: '**Durchsickern** von Information **trotz fehlender Aufmerksamkeit** – wäre ein echtes Gegenargument gegen Broadbent. (F. 19–21)',
            },
            {
              term: 'Slippage',
              text: 'Aufmerksamkeit **rutscht kurz** auf den Reiz – dann wurde er doch beachtet; **Broadbent bleibt gültig**. (F. 19–21)',
            },
          ],
        },
        { t: 'widget', w: 'perceptual-load' },
        { t: 'figure', fig: 'load' },
        {
          t: 'study',
          title: 'Ignorierte Szenen im fMRI',
          source: 'Yi et al. (2004) (F. 18)',
          method: 'Ignorierte Szenen im Hintergrund; gemessen wird der **Wiederholungseffekt in der PPA**. Belastung: perzeptuell (**degradierte Gesichter**) oder Arbeitsgedächtnis (**2-back**).',
          result: 'Der Wiederholungseffekt verschwindet **nur bei hoher perzeptueller Belastung**, nicht bei hoher Arbeitsgedächtnisbelastung.',
          takeaway: 'Nur **perzeptuelle** Belastung schützt vor der Verarbeitung von Irrelevantem – AG-Belastung wirkt anders.',
        },
        { t: 'widget', w: 'slippage' },
        {
          t: 'formula',
          name: 'Priming-Mass',
          formula: 'Priming = RT_unrelated − RT_repeated',
          legend: ['RT_unrelated: RT, wenn Prime ≠ Zielwort', 'RT_repeated: RT, wenn Prime = Zielwort', '**Positiver Wert** = Erleichterung durch den Prime.'],
          source: 'F. 21',
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Treisman & Riley** widerlegen **Deutsch & Deutsch** (A ≠ B), nicht Treisman.',
            'Perceptual Load: **hohe** Belastung **schützt** vor Ablenkung. Arbeitsgedächtnisbelastung wirkt anders (Yi et al.).',
            '**Leakage** spricht **gegen** Broadbent, **Slippage rettet** ihn.',
          ],
        },
      ],
    },
    /* ════════════ Teil 2: visuelle Aufmerksamkeit (F. 22–42) ════════════ */
    {
      id: 'cueing',
      title: 'Teil 2 · Ortsbasierte Auswahl: Spatial Cueing',
      blocks: [
        {
          t: 'callout',
          tone: 'notiz',
          title: 'Teil 2 – visuelle Aufmerksamkeit',
          text: 'Ab hier folgt die **Zusammenfassung «Aufmerksamkeit, Teil 2»** (Folien 22–42, Lehrbuch Anderson Kap. 3). Teil 1 drehte sich um **auditive** Selektion (früh vs. spät); Teil 2 fragt, **wo** und **wie** visuelle Aufmerksamkeit auswählt. Nicht behandelt: Exkurs F. 31–35 (Bindungsproblem) sowie F. 40 und 42.',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Spatial-Cueing-Paradigma',
              text: '**Posner, Nissen & Ogden (1978):** Ein **Cue** (Hinweisreiz) kündigt den wahrscheinlichen Zielort an; Ablauf: **Cue → Delay → Test**. Ziel: zeigen, dass Aufmerksamkeit auf einen **Ort** gerichtet werden kann («Wo ist Walter?»). (F. 22)',
            },
            {
              term: 'Gewinne (benefits) und Kosten (costs)',
              text: '**Gewinn** = schnellere RT bei **validem** Cue; **Kosten** = langsamere RT bei **invalidem** Cue – jeweils **relativ zur neutralen Baseline**. (F. 22)',
            },
            {
              term: 'Verdeckte Aufmerksamkeitsverschiebung',
              text: 'Der Blick bleibt auf dem **Fixationspunkt**; ausgewertet werden nur Durchgänge **ohne Augenbewegung** → die Aufmerksamkeit wandert **ohne den Blick**. (LB S. 57)',
            },
          ],
        },
        {
          t: 'table',
          head: ['Bedingung', 'Cue', 'Anteil (Folie)', 'RT (ca., Abb. 16)'],
          rows: [
            ['**neutral**', 'zentrales Kreuz', 'ca. **50 %**', '≈ 335 ms = **Baseline**'],
            ['**valide**', 'Pfeil zeigt zum Zielort', 'ca. **40 %**', '≈ 300 ms → **Gewinn**'],
            ['**invalide**', 'Pfeil zeigt zur Gegenseite', 'ca. **10 %**', '≈ 370 ms → **Kosten**'],
          ],
          caption: 'Valide : invalide = 4 : 1 → der Cue stimmt in 80 % der Hinweis-Durchgänge (F. 22). RT-Werte grob aus der Grafik abgelesen.',
        },
        { t: 'widget', w: 'cueing' },
        { t: 'figure', fig: 'cueing' },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Folie vs. Lehrbuch',
          text: 'Die **Folie** nennt Anteile **pro Bedingung (50/40/10 %)**, das **Lehrbuch** 80 % erwartete vs. 20 % unerwartete Seite (LB S. 57). Gemeint ist **dasselbe Verhältnis 4 : 1** innerhalb der Hinweis-Durchgänge. **Für die Prüfung gilt die Folie.**',
        },
        {
          t: 'list',
          title: 'Weitere Befunde aus dem Lehrbuch',
          items: [
            '**Posner, Snyder & Davidson (1980):** Aufmerksamkeit lässt sich bis **24°** von der Fovea lenken. (LB S. 58)',
            'Normalerweise geht die **Aufmerksamkeitsverschiebung der Augenbewegung voraus**. (LB S. 58)',
          ],
        },
      ],
    },
    {
      id: 'cue-art',
      title: 'Teil 2 · Peripherer vs. symbolischer Cue',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Peripherer Cue',
              sub: 'exogen · reizgetrieben',
              bullets: ['z. B. **Aufblinken am möglichen Zielort**', 'zieht Aufmerksamkeit **automatisch/reflexhaft** an', 'Nutzen ab kurz nach 0 ms, **Plateau ≈ 20 ms bei ca. 150 ms SOA**'],
            },
            {
              title: 'Symbolischer Cue',
              sub: 'endogen · zielgerichtet',
              bullets: ['z. B. **Pfeil in der Mitte**', 'muss **interpretiert** werden, Verschiebung **willentlich**', 'bis ca. **100 ms kein Nutzen**, Plateau erst bei **ca. 300 ms**'],
            },
          ],
        },
        {
          t: 'formula',
          name: 'Stimulus Onset Asynchrony (Reizbeginn-Asynchronie)',
          formula: 'SOA = t_Test − t_Cue (ms)',
          legend: ['t_Cue: Beginn des Cues', 't_Test: Beginn des Testreizes', 'Je grösser die SOA, desto mehr Zeit hat die Aufmerksamkeit, sich zum gecueten Ort zu verschieben.'],
          source: 'F. 23',
        },
        { t: 'widget', w: 'soa' },
        { t: 'figure', fig: 'soa' },
        {
          t: 'p',
          text: 'Nach ca. 300 ms sind **beide Cue-Arten gleich wirksam** (F. 23). Das Lehrbuch spricht von **zielgerichteter (endogener)** vs. **reizgetriebener (exogener)** Kontrolle der Aufmerksamkeit (**Corbetta & Shulman, 2002**). (LB S. 53)',
        },
        { t: 'widget', w: 'cue-sort' },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Peripher = exogen = automatisch; symbolisch = endogen = willentlich.** Der **zentrale Pfeil ist endogen**, obwohl er «auf einen Ort zeigt». Im Paradigma von F. 22 ist der Pfeil ein **symbolischer** Cue.',
            '**Gewinne und Kosten** werden relativ zur **neutralen** Bedingung gemessen – **nicht** valide gegen invalide.',
            '**Verdeckt** heisst **ohne Augenbewegung**: Der Cueing-Effekt ist **kein Blickeffekt**.',
          ],
        },
      ],
    },
    {
      id: 'spotlight',
      title: 'Teil 2 · Scheinwerfer-(Spotlight-)Metapher',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Spotlight-Metapher',
              text: 'Reize an einem «attentional» **beleuchteten Ort** werden **rascher und gründlicher** verarbeitet als Reize an anderen Orten. (F. 24; LB S. 58–59)',
            },
            {
              term: 'Verstärkung und Hemmung',
              text: 'Die Verarbeitung am beachteten Ort wird **verstärkt**, an anderen Orten **gehemmt**. (F. 24)',
            },
            {
              term: 'Zoom-Linse',
              text: '**Eriksen & St. James (1986):** Der Fokus lässt sich **grösser oder kleiner** stellen – eine Antwort auf die Frage nach der **Grösse** des Spotlights. [Ergänzung]',
            },
          ],
        },
        { t: 'widget', w: 'spotlight' },
        {
          t: 'steps',
          items: [
            { title: 'Geschwindigkeit', text: 'Wie schnell bewegt sich der Spotlight? (F. 24)' },
            { title: 'Bewegungsablauf', text: '**Gleitet** er über Zwischenorte oder **springt** er? (F. 24)' },
            { title: 'Grösse', text: '**Fix** oder **veränderbar**? (F. 24)' },
            { title: 'Einheit', text: '**Ein** Fokus oder **teilbar**? (F. 24)' },
          ],
        },
        {
          t: 'list',
          title: 'Neuronale Belege (Lehrbuch)',
          items: [
            'Aufmerksamkeit auf eine **Raumregion** → **EKP-Effekt** im visuellen Kortex nach **70–90 ms** (bei **inhaltlichen** Merkmalen erst nach **ca. 200 ms**). (LB S. 59–60)',
            'Stärkste Aktivität über der Hemisphäre **gegenüber** dem beachteten Halbfeld (**Mangun, Hillyard & Luck, 1993**). (LB S. 59–60)',
            '**Hemmung:** Ein **V4-Neuron** feuert **weniger**, wenn auf das **andere** Objekt in seinem rezeptiven Feld geachtet wird (**Luck et al., 1997**). (LB S. 62–63)',
          ],
        },
      ],
    },
    {
      id: 'suche',
      title: 'Teil 2 · Visuelle Suche',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Merkmalssuche (feature search)',
              text: 'Das Ziel unterscheidet sich von den **Distraktoren** (Ablenkreizen) in **einer Dimension**, z. B. Form (X unter O) oder Farbe (rot unter blau) → **Pop-out**, kein Absuchen nötig. (F. 25, 28)',
            },
            {
              term: 'Verbindungssuche (conjunction search)',
              text: 'Das Ziel unterscheidet sich **nur durch eine bestimmte Verbindung** von Merkmalen, z. B. **rotes X** unter **roten O** und **blauen X** – weder «rot» noch «X» allein definiert das Ziel. (F. 27–28)',
            },
            {
              term: 'Set Size',
              text: '**Grösse der Anordnung** = Anzahl Elemente im Suchdisplay (*n*). (F. 29)',
            },
            {
              term: 'Elementare Merkmale',
              text: 'Ca. **12–18** visuelle Merkmale, die dem **(seriellen) Flaschenhals entkommen**: Ein Ziel, das sich in einem davon unterscheidet, wird **sofort** gefunden. Folie: **Farbe, Orientierung, Grösse, Form/Geschlossenheit, Krümmung, 3D-Lage/Schattierung**, neu: **Anzahl**. (F. 26)',
            },
            {
              term: 'Serieller Flaschenhals',
              text: 'Stelle, ab der **nicht mehr alles parallel** verarbeitet werden kann. (LB S. 53)',
            },
            {
              term: 'Selbstabbrechende Suche (self-terminating)',
              text: '**Abbruch, sobald das Ziel gefunden ist.** Ziel da → im Schnitt **n/2** Elemente geprüft; Ziel nicht da → **alle n**. Daher gilt b_abwesend ≈ **2 · b_anwesend**. (F. 29)',
            },
          ],
        },
        { t: 'figure', fig: 'merkmale' },
        {
          t: 'study',
          title: 'T unter I und Y vs. T unter I und Z',
          source: 'Treisman & Gelade (1980) (LB S. 61)',
          method: 'Gesucht wird ein **T**. Bedingung 1: Distraktoren **I und Y** – nur das T hat einen **waagrechten Querstrich**. Bedingung 2: Distraktoren **I und Z** – alle Teilmerkmale des T kommen auch bei den Distraktoren vor.',
          result: 'Bedingung 1: ca. **400 ms**; Bedingung 2: **über 800 ms**.',
          takeaway: 'Hat das Ziel ein **einzigartiges Merkmal**, springt es heraus; sonst muss die Anordnung **durchsucht** werden.',
        },
        {
          t: 'formula',
          name: 'Suchfunktion',
          formula: 'RT(n) = a + b · n',
          legend: [
            'RT: Reaktionszeit (ms); n: Set Size',
            'a: **Achsenabschnitt** (Grundzeit)',
            'b: **Steigung** in ms/Objekt = Zeit pro zusätzlichem Element = **Mass der Sucheffizienz** (flach = effizient)',
          ],
          source: 'F. 29',
        },
        { t: 'widget', w: 'visuelle-suche' },
        { t: 'figure', fig: 'suchfunktionen' },
        {
          t: 'table',
          head: ['Suchart', 'Ziel anwesend', 'Ziel abwesend', 'Interpretation'],
          rows: [
            ['**Merkmalssuche**', '**≈ 0 ms/Objekt** (flach, ≈ 450 ms)', '**≈ 0 ms/Objekt**', 'parallel, Pop-out'],
            ['**Verbindungssuche**', '**5–15 ms/Objekt**', '**10–30 ms/Objekt**', 'seriell, **selbstabbrechend** (abwesend ≈ 2 × anwesend)'],
          ],
          caption: 'Typische Steigungen (F. 29). Lehrbuch: Bei Verbindungssuche wirkt sich die Set Size stärker aus; suchen muss man nur, wenn das Ziel kein einzigartiges Merkmal hat (LB S. 61–62).',
        },
        { t: 'widget', w: 'suche-sort' },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Steigung abwesend ≈ 2 × anwesend** gilt für die **serielle, selbstabbrechende (Verbindungs-)Suche** – **nicht** für die Merkmalssuche (dort beide ≈ 0).',
            '**Merkmalssuche ≠ «einfache Farbe»:** Entscheidend ist, ob das Ziel durch ein **einzigartiges Merkmal** definiert ist. Rot kann auch in einer Verbindungssuche vorkommen (rote O als Distraktoren).',
            'Nicht verwechseln mit **Sternberg (Kap. 1 Einführung):** Dort ist die Gedächtnissuche **erschöpfend** (gleiche Steigungen), hier ist die visuelle Verbindungssuche **selbstabbrechend** (abwesend doppelt so steil).',
          ],
        },
      ],
    },
    {
      id: 'fit',
      title: 'Teil 2 · Merkmals-Integrations-Theorie (FIT)',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Merkmals-Integrations-Theorie (feature integration theory, FIT)',
              text: '**Treisman & Gelade (1980); Treisman (1998):** Merkmale werden **parallel** in getrennten **Merkmalskarten** erfasst; erst der **Aufmerksamkeitsfokus auf einem Ort** verbindet sie zu einem Objekt. (F. 30; LB S. 62)',
            },
            {
              term: 'Bindungsproblem (Antwort der FIT)',
              text: 'Aufmerksamkeit muss auf einen Reiz gerichtet sein, **bevor** seine Merkmale zu einem Muster kombiniert werden. Einzigartiges Merkmal → Aufmerksamkeit **direkt dorthin**; Merkmalsverbindung → Anordnung muss **durchsucht** werden. (LB S. 62)',
            },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Input → Ortskarte', text: 'Das Bild wird auf einer **Ortskarte** abgebildet. (F. 30)' },
            { title: 'Merkmalskarten', text: '**Parallel** in getrennten Karten erfasst (Farbkarten, Orientierungskarten). (F. 30)' },
            { title: 'Aufmerksamkeitsfokus', text: 'Der Fokus auf **einem Ort** verbindet die Merkmale **an diesem Ort**; Merkmale an nicht beachteten Orten (gestrichelt) werden **nicht gebunden**. (F. 30)' },
            { title: 'Temporäre Objektrepräsentation', text: 'Abgleich mit dem **Wiedererkennungs-Netzwerk** → Erkennen. (F. 30)' },
          ],
        },
        { t: 'widget', w: 'fit' },
        { t: 'figure', fig: 'fit' },
        {
          t: 'callout',
          tone: 'merke',
          title: '«Zufällige» Suche',
          text: 'Die FIT **impliziert eine «zufällige» Suche** (F. 30): Bei der Verbindungssuche verrät **keine einzelne Merkmalskarte** das Ziel, also wandert der Fokus **ungelenkt** von Element zu Element.',
        },
        {
          t: 'callout',
          tone: 'ergaenzung',
          text: 'Spätere Modelle (**Guided Search, Wolfe**) betonen dagegen, dass die Suche durch **mehrere Faktoren gelenkt** wird (Salienz, Zielmerkmale, Szene, Wert, Suchgeschichte). Genau das greift der nächste Abschnitt auf. [Ergänzung]',
        },
      ],
    },
    {
      id: 'realwelt',
      title: 'Teil 2 · Suche in der realen Welt',
      blocks: [
        {
          t: 'p',
          text: 'Alltagssuchen sind **selten reine Merkmalssuchen** – Beispiel: **Tomate unter Gurken**. Leitfrage: **Was lenkt (guides) unsere Suche?** (F. 36)',
        },
        {
          t: 'compare',
          items: [
            {
              title: '1 · Merkmale / Verbindungen',
              bullets: [
                'Tomate = **ROT und RUND und GROSS** – in der Gemüsekiste nur über die **Kombination** abgrenzbar. (F. 37)',
                'Folie: «s. aber» **Vickery, King & Jiang (2005)**. [Ergänzung] Die **Zielvorlage** (target template) nutzt **detaillierte** visuelle Information – reale Objekte werden nicht nur über wenige elementare Merkmale gesucht.',
              ],
            },
            {
              title: '2 · Eigenschaften der Szene',
              bullets: ['Suche nach beliebigen Objekten in echten Szenen ist **extrem effizient**: **4 ms/Item** (abwesend), **5 ms/Item** (anwesend). (F. 38)', 'Szenenwissen lenkt mit.'],
            },
            {
              title: '3 · Suchverlauf',
              bullets: [
                'Was man **vorher schon gesucht oder gefunden** hat, **beschleunigt** spätere Suchen (Demo mit wiederholten Objekten). (F. 41)',
                '[Ergänzung] Wolfe et al. (2011, Exp. 4): zweite Suche nach demselben Ziel in derselben Szene **ca. 600 ms schneller**; blosse Vertrautheit mit der Szene half weniger.',
              ],
            },
          ],
        },
        {
          t: 'study',
          title: '«Wasserhahn» in der Küche',
          source: 'Wolfe, Alvarez, Rosenholtz, Kuzmova & Sherman (2011) (F. 38)',
          method: 'Zielwort (z. B. «Wasserhahn») **500 ms** → leerer Bildschirm **500 ms** → reale Szene bis zur Antwort (Ziel da / nicht da). Ausgewertet: Hauptbereich **Set Size 25–85**.',
          result: 'Ziel **abwesend 4 ms/Item**, Ziel **anwesend 5 ms/Item**. [Ergänzung] Isolierte Objekte ohne Szene: ca. **41–45 ms/Item**. Set Size ist in Szenen eigentlich nicht definiert – Ersatz: von Hand eingeteilte Regionen.',
          takeaway: 'Suche in echten Szenen ist **extrem effizient**; **Szenenwissen verkleinert die «funktionale» Set Size**. Die klassische Laborsuche (F. 29) erklärt Alltagssuche **nicht vollständig**.',
        },
        { t: 'figure', fig: 'wolfe' },
        {
          t: 'study',
          title: 'Kontrollanalyse: Singletons vs. ALL',
          source: 'Wolfe et al. (2011) (F. 39)',
          method: '**Singletons** = Ziel kommt **nur einmal** in der Szene vor; **ALL** = alle Durchgänge (Ziel **1- bis 6-mal** vorhanden). Frage: Liegt die hohe Effizienz nur an mehrfach vorhandenen Zielen?',
          result: '(A) **Mehr Zielinstanzen → kürzere RT, höhere Trefferquote.** (B) Singletons insgesamt **langsamer**, aber die **Steigungen unterscheiden sich nicht**: korrekt abwesend **5**, Singletons **4**, alle Treffer **7 ms/Item**.',
          takeaway: 'Die hohe Effizienz liegt **nicht** an mehrfach vorkommenden Zielen.',
        },
        { t: 'figure', fig: 'wolfe-kontrolle' },
        { t: 'widget', w: 'effizienz' },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            'Die Steigungen in realen Szenen (**F. 38: 4/5 ms/Item**) und in der Kontrollanalyse (**F. 39: 5/4/7 ms/Item**) unterscheiden sich, weil **andere Teilmengen bzw. Binning** verwendet wurden – beide Zahlensätze kennen!',
            'F. 38: **abwesend 4**, **anwesend 5**. F. 39: **korrekt abwesend 5**, **Singletons 4**, **alle Treffer 7**.',
          ],
        },
      ],
    },
  ],
};
