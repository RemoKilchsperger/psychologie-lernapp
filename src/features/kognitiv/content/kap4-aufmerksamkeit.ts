import type { Chapter } from '../model';

export const kap4: Chapter = {
  id: 'aufmerksamkeit',
  nr: 4,
  short: 'Aufmerksamkeit',
  title: 'Aufmerksamkeit (Teil 1)',
  pages: 'S. 14–16',
  lit: 'Foliensatz «Aufmerksamkeit», nur Teil 1 (F. 1–21); Lehrbuchkap. 3 lag nicht vor',
  color: '#ea580c',
  kern: [
    'Aufmerksamkeit ist ein (serieller) **Flaschenhals**: Nicht alles kann gleichzeitig verarbeitet werden (Wimmelbild, change blindness). (F. 2); (LB S. 74)',
    '**James (1890):** «Besitzergreifen durch den Geist» von einem aus mehreren möglichen Objekten/Gedankengängen; heute: vielschichtig, oft unbewusst, **«not a single thing»**. (F. 3); (LB S. 74)',
    'Funktionen: **Selektion/Verstärkung** relevanter und **Hemmung** irrelevanter Information wegen **Kapazitätsengpass**. (F. 5)',
    'Kernfrage: Wird **früh (physikalisch)** oder **spät (semantisch)** selektiert? Früh: **Filter (Broadbent, 1958)**, **Dämpfung (Treisman)**; spät: **Deutsch & Deutsch (1963)**. (F. 5, 12)',
    '**Treisman & Riley (1969)** stützen Treisman gegenüber Deutsch & Deutsch. (F. 16)',
    '**Perceptual Load:** Der Ort der Selektion hängt von der **perzeptuellen Belastung** ab. (F. 17–18)',
    '**Lachter et al. (2004):** Ohne Aufmerksamkeit keine semantische Verarbeitung → **moderne Version von Broadbent**. (F. 19–21)',
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
  ],
};
