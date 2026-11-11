import type { Chapter } from '../model';

export const kap2: Chapter = {
  id: 'intelligenz',
  nr: 2,
  short: 'Intelligenz',
  title: 'Intelligenz',
  date: '23.09.2026',
  pages: 'S. 29–51',
  color: '#2563eb',
  kern: [
    '**Fähigkeiten** ermöglichen Leistungen (nach Gütemassstab bewertbar): Leistung = f(Fähigkeit, Anstrengung, andere Faktoren). (S. 37)',
    'Zwei Traditionen: **Galton** (eine allgemeine Fähigkeit) vs. **Binet** (Bündel separater Fähigkeiten). «Intelligenz ist, was der Intelligenztest misst» (**Boring 1923**). (S. 39)',
    'IQ heute = **Abweichungs-IQ** nach Wechsler (M = 100, SD = 15), bezogen auf die Altersgruppe. (S. 39)',
    '**Spearman:** g + spezifische Faktoren; **Thurstone:** 7 Primärfaktoren (PMA); Unterschied v. a. durch Stichprobe und Methode. Hierarchische Modelle vereinen beides. (S. 41–45)',
    '**Horn & Cattell:** fluide (*gf*) vs. kristallisierte (*gc*) Intelligenz mit unterschiedlichem Altersverlauf. **BIS (Jäger):** 4 Operationen × 3 Inhalte + g. (S. 43–45)',
    'Intelligenz ist sehr **stabil** (66 Jahre: *r* = .63, korr. .73); **Flynn**- und **Anti-Flynn-Effekt** zeigen Umwelteinflüsse. (S. 29–30, 49)',
  ],
  sections: [
    {
      id: 'faehigkeiten',
      title: 'Fähigkeiten und historische Einbettung',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Fähigkeit',
              text: 'Persönlichkeitseigenschaft, die **Leistungen ermöglicht** (Intelligenz, Kreativität …); Leistungen sind nach einem Gütemassstab bewertbar. Leistung = f(Fähigkeit, Anstrengung, andere Faktoren). Intelligenz ist am häufigsten untersucht. (S. 37)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Historische Stationen',
          items: [
            '**Han-Dynastie** (22 v. Chr.–220 n. Chr.): Beamtenprüfungen (Sprache, Gedächtnis). (S. 35)',
            '**Galton:** Cousin Darwins; erste Tests (Hörschwelle, Geruchsunterscheidung, Diskriminationsfähigkeit); Erblichkeit von Intelligenz; auch die **psycholexikalische Hypothese** geht auf ihn zurück. Tradition: **eine allgemeine Fähigkeit**. (S. 35, 39)',
            '**James McKeen Cattell** (Assistent Wundts): «eigentlicher Begründer» der Intelligenzforschung («mental tests», 1890). (S. 35)',
            '**Binet & Simon (1905):** Intelligenz = gut urteilen, gut verstehen, gut denken. Tradition: **Bündel separater Fähigkeiten**. (S. 39)',
          ],
        },
      ],
    },
    {
      id: 'definitionen',
      title: 'Definitionen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Boring (1923)',
              text: '«Intelligenz ist das, **was der Intelligenztest misst**.» Folge: Tests bauen auf unterschiedlichen Konzepten auf → nur **moderate Korrelationen** zwischen Tests; Testwahl erfordert Wissen über das Modell. Fairness beachten (kulturfrei, zeitgemäss, unabhängig vom Leseverständnis). (S. 39)',
            },
            {
              term: 'Hofstätter (1957)',
              text: 'Intelligenz = die innerhalb einer **Kultur erfolgreichen** gemeinsamen Fähigkeiten. (S. 39)',
            },
            {
              term: 'Wechsler (1964)',
              text: 'Zusammengesetzte/globale Fähigkeit, **zweckvoll zu handeln, vernünftig zu denken** und sich wirkungsvoll mit der Umgebung auseinanderzusetzen. (S. 39)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Gemeinsamer Kern der Definitionen',
          text: 'Sich in **neuen Situationen** aufgrund von **Einsicht** zurechtfinden; Aufgaben durch Denken (Erfassen von Beziehungen) statt durch Erfahrung lösen. (S. 39)',
        },
      ],
    },
    {
      id: 'iq',
      title: 'Der IQ als Abweichungsquotient',
      blocks: [
        {
          t: 'formula',
          name: 'Abweichungs-IQ (Wechsler)',
          formula: 'IQ = 100 + 15 · (X − M) / s',
          legend: [
            '*X* = individuelle Testleistung (Rohwert)',
            '*M* = Mittelwert der **Altersgruppe**',
            '*s* = Standardabweichung der Altersgruppe',
            '(X − M) / s = *z*-Wert → IQ ist eine Norm mit Mittelwert 100 und SD 15',
          ],
          source: 'S. 39',
        },
        { t: 'widget', w: 'iq-rechner' },
        {
          t: 'callout',
          tone: 'achtung',
          text: 'Der Abweichungs-IQ bezieht sich auf die **Altersgruppe**, nicht auf das Lebensalter – er ist also kein «Quotient» im Wortsinn.',
        },
      ],
    },
    {
      id: 'struktur',
      title: 'Strukturmodelle der Intelligenz',
      blocks: [
        {
          t: 'p',
          text: 'Die Strukturdebatte dominierte rund **80 Jahre**; erst die **Faktorenanalyse** erlaubte die Prüfung: Wie viele Fähigkeiten gibt es, wie hängen sie zusammen, wie wichtig ist g? (S. 41)',
        },
        { t: 'widget', w: 'spearman-thurstone' },
        {
          t: 'defs',
          items: [
            {
              term: 'Generalfaktor g (Spearman 1904)',
              text: 'Zwei-Faktoren-Theorie: Jede Testleistung = **g + spezifischer Faktor s** (so viele s wie Tests; s wird als unwichtig/Messfehler behandelt). Personen variieren in g; Tests variieren darin, wie stark sie g erfassen (**g-Ladung / g-«Sättigung»**). (S. 41, 43)',
            },
            {
              term: 'Primary Mental Abilities (Thurstone 1938/41)',
              text: '56 Tests, 218 Collegestudierende → 9 Faktoren (3 nicht interpretierbar); 1941 repliziert: **7 PMA**: Sprachverständnis (V), Wortflüssigkeit (W), Rechengewandtheit (N), Raumvorstellung (S), Auffassungsgeschwindigkeit (P), assoziatives Gedächtnis (M), schlussfolgerndes Denken (R). (S. 43)',
            },
            {
              term: 'Modell multipler Faktoren',
              text: 'Mehrere Faktoren, jeder mit mehreren (nicht allen) Variablen verbunden; eine Variable kann von mehreren Faktoren abhängen. Person = **Intelligenzprofil** statt eines Werts. g entsteht nur aus Korrelationen der Primärfaktoren (schiefwinklige Rotation), **ohne eigene inhaltliche Bedeutung**. (S. 43)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Warum fand Thurstone andere Ergebnisse als Spearman? (S. 43)',
          items: [
            '**Homogenere Stichprobe** (Collegestudierende) → eingeschränkte Varianz → geringere Interkorrelationen → mehr Faktoren.',
            '**Mehr Tests.**',
            '**Neuere FA** (multiple Faktorenanalyse statt g-FA).',
            '**Einfachere Tests** – Spearmans Tests entsprechen Thurstones Faktoren.',
          ],
        },
        {
          t: 'p',
          text: '**Hierarchische Modelle:** Thurstones Faktoren sind selbst korreliert → FA der Interkorrelationen ergibt g als **Faktor 2. Ordnung** – das vereint Spearmans und Thurstones Idee. (S. 45)',
        },
      ],
    },
    {
      id: 'gfgc',
      title: 'Fluide und kristallisierte Intelligenz (Horn & Cattell)',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Fluide Intelligenz (gf)',
              sub: 'Baltes: «Mechanics»',
              bullets: [
                'Anpassung an **neue Probleme** ohne wesentliche Lernerfahrung',
                'Tests: figurale Relationen, Gedächtnisspanne, Induktion',
                'als einzige **«kulturfrei»** messbar (CFT, culture fair)',
                'nimmt im Alter ab',
              ],
            },
            {
              title: 'Kristallisierte Intelligenz (gc)',
              sub: 'Baltes: «Pragmatics»',
              bullets: [
                'kognitive Fertigkeiten, in denen sich **kumulierte Lerneffekte** verfestigt haben',
                '«Endprodukt» von gf und Schulbesuch (Cattell 1973)',
                'z. B. Sprache, soziale Intelligenz, kulturelles Wissen',
                'bleibt bis ins hohe Alter erhalten',
              ],
            },
          ],
        },
        { t: 'widget', w: 'gf-gc' },
      ],
    },
    {
      id: 'bis',
      title: 'Berliner Intelligenzstrukturmodell (BIS; Jäger 1984)',
      blocks: [
        {
          t: 'p',
          text: 'Inventar von ca. **2000 Aufgabentypen** → 191 Aufgabenblöcke / 98 Typen; **545 Berliner Abiturient*innen**. **4 Operationen** × **3 Inhalte**, an der Spitze **g**. Jede Leistung betrifft eine Operation **und** einen Inhalt → **bimodale Klassifikation**; vereint Spearman und Thurstone. (S. 45)',
        },
        { t: 'widget', w: 'bis' },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Fazit FA-Intelligenzforschung (S. 47)',
          text: [
            'Fast 90 Jahre bis zur Konvergenz.',
            '**Für g:** kaum Testleistungen ohne Korrelation mit anderen (keine Nullkorrelationen).',
            '**Gegen g:** Nach Extraktion des ersten Faktors bleibt reliable Varianz übrig.',
            '→ «**sowohl-als-auch**»: alle Ebenen berücksichtigen.',
          ],
        },
      ],
    },
    {
      id: 'praxis',
      title: 'Konsequenzen für die Praxis und Kritik',
      blocks: [
        {
          t: 'list',
          title: 'Testauswahl (S. 47)',
          items: [
            '**Messintention:** g oder Komponenten; Globalmass oder Struktur; sprachfrei/kulturfair oder bildungsabhängig.',
            '**Durchführung:** Einzel- vs. Gruppentest, **Speed- vs. Powertest**, Papier vs. Computer, Dauer.',
            '**Zielgruppe/Normierung:** Altersbereich, Intelligenzbereich, Spezialgruppen.',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Leistungstests gehören zu den erfolgreichsten Verfahren: Sie messen **maximales Verhalten** (statt typisches Verhalten zu erfragen) → weniger verfälschbar, meist hochreliabel, gute Vorhersage von Berufserfolg. (S. 47)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Methodische Kritik',
              bullets: [
                'Beliebigkeit der Variablen: ein Faktor entsteht nur, wenn **Markiervariablen** enthalten sind',
                'FA oft falsch gebraucht',
                'subjektive Entscheidungen (Anzahl Faktoren, Rotationsart)',
              ],
            },
            {
              title: 'Inhaltliche Kritik',
              bullets: [
                'zu enge Inhaltsbereiche → **Gardner (1983/1993): multiple Intelligenzen** – sprachlich, musikalisch, logisch-mathematisch, räumlich, körperlich-kinästhetisch, inter- und intrapersonal; kaum empirisch untersucht',
                'zu «statisches» Bild',
                'trotzdem: Intelligenz ist eine der Errungenschaften der Psychologie (S. 49)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'befunde',
      title: 'Korrelate und Befunde',
      blocks: [
        {
          t: 'study',
          title: 'Stabilität der Intelligenz über 66 Jahre',
          source: 'Deary et al. 2000 (S. 49)',
          method: 'Gleicher Test 1932 (mit 11 Jahren) und 1998 (mit 77 Jahren) bei 101 Personen.',
          result: 'r = .63 (korrigiert .73); gegen 90 Jahre noch ca. .50 (Gow et al. 2011). IQ-Abfall bei Rauchern.',
          takeaway: 'Intelligenz gehört zu den **stabilsten** Persönlichkeitsmerkmalen.',
        },
        {
          t: 'list',
          items: [
            '**Bildung** (Metaanalyse Ritchie & Tucker-Drob 2018): pro zusätzlichem Bildungsjahr ca. **1–5 IQ-Punkte**. (S. 51)',
            '**Sozioökonomischer Erfolg** (Strenze 2007): Intelligenz ist starker Prädiktor, aber **nicht überwältigend besser** als Eltern-SES oder Schulnoten. (S. 51)',
            '**Persönlichkeit** (Anglim et al. 2022): **Offenheit** (ρ ≈ .20) und **Neurotizismus** sind die stärksten Big-Five-Korrelate; Offenheit korreliert stärker mit **gc** als mit gf. (S. 51)',
          ],
        },
      ],
    },
    {
      id: 'flynn',
      title: 'Flynn- und Anti-Flynn-Effekt (Selbststudium NZZ)',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Flynn-Effekt',
              text: 'Anstieg der IQ-Werte im 20. Jh. um ca. **+0,3 Punkte/Jahr** (≈ 30 Punkte in 100 Jahren). Ursachen: Ernährung, medizinische Versorgung, mehr Bildung (Stern: Intelligenz entwickelt sich nur, wenn sie gefordert wird). (S. 29)',
            },
            {
              term: 'Anti-Flynn-Effekt',
              text: '**Sinkende** IQ-Werte u. a. in DK, NO, EE, DE, AT, CH. Erklärung über **Umwelteinflüsse**, nicht Genpool oder Migration. (S. 29)',
            },
          ],
        },
        { t: 'widget', w: 'flynn' },
        {
          t: 'study',
          title: 'Norwegen-Studie',
          source: 'Bratsberg & Rogeberg (S. 29)',
          method: 'Über 700 000 Männer aus 30 Jahrgängen; Vergleich von Brüdern innerhalb derselben Familie.',
          result: 'Jüngere Brüder schneiden schlechter ab als ältere. Pietschnig (21 Länder, 50 Jahre): kein Migrationseffekt.',
          takeaway: 'Der Rückgang zeigt sich **innerhalb von Familien** → **Umwelteinflüsse**, nicht Genpool oder Migration.',
        },
        {
          t: 'list',
          title: 'Erklärungsansätze für den Anti-Flynn-Effekt (S. 30)',
          items: [
            'Umweltgifte (PCB, Blei – umstritten)',
            'Digitalisierung (Wirkung offen)',
            'Spezialisierung/Bildungsreformen («**Zehnkampf**»: Paradedisziplin verbessert, Rest vernachlässigt)',
            'sinkende Aufmerksamkeitsspanne (Jäncke)',
          ],
        },
      ],
    },
  ],
};
