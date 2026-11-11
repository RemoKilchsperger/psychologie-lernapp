import type { Chapter } from '../model';

export const kap6: Chapter = {
  id: 'kognition2',
  nr: 6,
  short: 'Kognition II',
  title: 'Kognition II: Neuere Ansätze, Denken & Intelligenz',
  date: '29.10.',
  folien: 'Fol. 44–68',
  lohaus: '2.7 · Kap. 3 S. 65/66 · Kap. 9 (ohne 9.6–9.8) · 10.1/10.2.1–10.2.3/10.4/10.5',
  color: '#6250d6',
  kern: [
    '**Wygotski:** Kognitive Entwicklung entsteht durch soziale Interaktion; Zone proximaler Entwicklung.',
    '**Intuitives Wissen** in privilegierten Bereichen (Physik, Biologie, Psychologie) – untersucht mit dem Erwartungs-Enttäuschungs-Paradigma.',
    '**Theory of Mind** klassisch zwischen 3 und 5 J. – mit vereinfachten Aufgaben schon mit 2½ J.',
    'Strukturierung des Denkens: Kategorisierung, kausales, schlussfolgerndes Denken, Analogien.',
    '**Intelligenz:** g-Faktor, Primärfaktoren, fluid/kristallin; ca. 50 % der Unterschiede genetisch.',
  ],
  sections: [
    {
      id: 'wygotski',
      title: 'Soziokulturelle Theorie (Wygotski)',
      blocks: [
        {
          t: 'p',
          text: '**Kognitive Entwicklung entsteht durch soziale Interaktion.** Erwachsene stützen Kinder aktiv und angepasst an den Entwicklungsstand – mittels geteilter Aufmerksamkeit, unter Berücksichtigung der Zone proximaler Entwicklung und indem sie mit Kulturwerkzeugen vertraut machen. Kinder sind Lernende und Lehrende und Produkt ihrer Kultur. (Fol. 45)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Zone proximaler Entwicklung',
              text: 'Distanz zwischen dem momentanen Entwicklungsstand (eigenständiges Problemlösen) und dem Stand der potenziellen Entwicklung. (Fol. 45)',
            },
            { term: 'Scaffolding', text: 'Auf die kindlichen Kompetenzen angepasste Unterstützung. (LB S. 222)' },
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Piaget', text: 'Kind entwickelt sich v. a. **aus sich heraus** (intrinsisch); soziale Stimulation hat geringe Bedeutung.' },
            { title: 'Wygotski', text: 'Entwicklung entsteht **durch soziale Interaktion** und Kultur.' },
          ],
        },
      ],
    },
    {
      id: 'intuitiv',
      title: 'Intuitives Wissen',
      blocks: [
        {
          t: 'list',
          items: [
            '(Angeborenes?) intuitives Wissen in **privilegierten Wissensgebieten** (Physik, Biologie, Psychologie) mit schnellen Zugewinnen ohne viel Lernerfahrung; in nicht privilegierten Bereichen braucht es **explizites Lernen**. (Fol. 47)',
            'Entwicklung: **kontinuierliche Anreicherung** oder **Abfolge von Umstrukturierungen** – eine einmal entwickelte Idee umzustrukturieren braucht viel Erfahrung und Lernen. (Fol. 47; Notiz)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Erwartungs-Enttäuschungs-Paradigma',
              text: 'Enttäuschte Erwartungen zeigen sich durch Verunsicherung, längeres Betrachten des unerwarteten Ereignisses und physiologische Reaktionen (Orientierungsreaktion). (Fol. 48)',
            },
          ],
        },
        {
          t: 'table',
          caption: 'Physikalisches Wissen – Säuglinge kennen … (Fol. 47–49)',
          head: ['Prinzip', 'Inhalt'],
          rows: [
            ['**Kontinuität**', 'Objekte bewegen sich kontinuierlich, nicht sprunghaft'],
            ['**Kohäsion**', 'Objekte bewegen sich als Ganzes'],
            ['**Solidität**', 'Solide Objekte, die zusammenstossen, bewirken etwas (Spelke: 0;4 schauen länger, wenn ein Ball scheinbar durch ein Brett fällt)'],
            ['**Schwerkraft**', 'Nicht unterstützte Gegenstände fallen herunter; mit 12 Monaten werden Proportion und Form des aufliegenden Objekts beachtet'],
          ],
        },
        { t: 'figure', fig: 'karotte' },
        {
          t: 'list',
          title: 'Biologisches Wissen (Fol. 50)',
          items: [
            'Früh Unterscheidung **belebt/unbelebt**: 2 Monate alte Säuglinge lächeln Menschen- mehr als Puppengesichter an; kommunizieren eher mit Menschen, greifen eher nach Objekten. Hinweise: geschwungene Konturen, Fell, Laute.',
            '**Nur Lebewesen bewegen sich selbst** (mit 7 Monaten; Grundannahme vermutlich schon bei Neugeborenen).',
            '**Kindergartenalter:** Nur Lebewesen wachsen, erkranken, heilen; Lebewesen haben Organe, Maschinen technische Innereien; Pflanzen sind Lebewesen.',
          ],
        },
      ],
    },
    {
      id: 'tom',
      title: 'Psychologisches Wissen & Theory of Mind',
      blocks: [
        {
          t: 'list',
          title: 'Frühe Hinweise (Fol. 51)',
          items: [
            'Verunsicherung bei asynchroner Stimme/Lippenbewegung',
            'Präferenz freundlicher vor ärgerlichen Gesichtern (0;4)',
            '**soziales Referenzieren** (ab ca. 0;8)',
            'Unterscheidung vertraut/unvertraut, Kinder/Erwachsene (ab ca. 0;8)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Theory of Mind (ToM)',
              text: 'Subjektive Theorien über das Funktionieren des menschlichen Bewusstseins: Verständnis von Emotionen, Wünschen und Intentionen anderer (Intentionen durch Beobachtung mit 1;6; Hilfeverhalten schon mit 12–18 Monaten) und von (falschen) Überzeugungen. (Fol. 51)',
            },
          ],
        },
        {
          t: 'study',
          title: 'Smarties-Versuch',
          age: '3 vs. 5 J.',
          method: 'Das Kind sieht eine Smarties-Schachtel und vermutet Smarties, findet darin aber Bleistifte. Frage: Was denkt ein anderes Kind, das die Schachtel sieht?',
          result: '3-Jährige: «Bleistifte» (gehen vom eigenen Wissen aus). 5-Jährige: «Smarties».',
          takeaway: 'ToM entwickelt sich zwischen dem **3. und 5. Lebensjahr**. Sie hängt mit schulischer und sozialer Kompetenz und Beliebtheit zusammen. (Fol. 52)',
        },
        { t: 'widget', w: 'sally-anne' },
        {
          t: 'list',
          title: 'Warum klassische False-Belief-Aufgaben schwierig sind (Fol. 53)',
          items: [
            '(1) die **falsche Überzeugung** erkennen',
            '(2) die Frage verstehen, behalten und eine Antwort **formulieren**',
            '(3) das Wissen über den richtigen Ort **unterdrücken** (inhibitorische Kontrolle)',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Setoh, Scott & Baillargeon (2016)',
          text: 'Mit reduzierten Anforderungen (eingeübte Fragen, geringe Inhibition, keine sprachliche Antwort) lösen schon **2½-Jährige** die Aufgabe – ein weiterer Beleg, dass Piaget kindliche Kompetenzen unterschätzt hat.',
        },
      ],
    },
    {
      id: 'denken',
      title: 'Strukturierung des Denkens',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Kategorie',
              text: 'Begrenzte Menge von Objekten/Ereignissen/Sachverhalten/Handlungen mit bestimmten Gemeinsamkeiten. (Fol. 54)',
            },
            {
              term: 'Konzept',
              text: 'Mentale Repräsentation des Wissens um diese Gemeinsamkeiten und um Unterschiede zu anderen Kategorien. (Fol. 54)',
            },
            { term: 'Prototyp', text: 'Typischer Vertreter einer Kategorie, teilt viele Eigenschaften mit anderen Mitgliedern. (Fol. 54)' },
          ],
        },
        {
          t: 'list',
          title: 'Kategorisierung (Fol. 55)',
          items: [
            '10–11 Monate alte Kinder bilden die Kategorien **Tiere – Möbel**, unabhängig von naturalistischer oder artifizieller Darstellung.',
            'Kategorien sind **hierarchisch** geordnet.',
            'Entwicklung: von der **globalen** (ontologischen/übergeordneten) Ebene zur **Basisebene**; von äusseren zu funktionalen und schwer erkennbaren Eigenschaften; Ausdifferenzierung.',
          ],
        },
        {
          t: 'table',
          caption: 'Kausales Denken – sinnvolle Kategorisierung erfordert das Erkennen kausaler Zusammenhänge (Fol. 56–57)',
          head: ['Alter', 'Kompetenz'],
          rows: [
            ['**7 Monate**', 'Einfache kausale Zusammenhänge (Anstossereignisse)'],
            ['**15 Monate**', 'Mehrstufige Kausalketten'],
            ['**ca. 4 Jahre**', 'Grundlegendes kausales Denken im Alltag – die meisten 3- und alle 4-Jährigen ergänzen Bildsequenzen wie Tasse – Hammer – Scherben korrekt'],
            ['**ca. 12–13 Jahre**', 'Systematische Ursachensuche bei mehreren Einflussfaktoren und systematische Hypothesenprüfung (Pendellänge und -gewicht systematisch variieren)'],
          ],
        },
        {
          t: 'p',
          text: '**Schlussfolgerndes Denken:** Aus gegebenen Informationen wird neues Wissen abgeleitet. (Fol. 58)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Induktiv',
              text: 'Vom **Besonderen aufs Allgemeine**, generiert neues Wissen.',
              bullets: [
                '2-Jährige übertragen «lebt in einem Nest» auf andere Vögel – schwerer bei nicht prototypischen (Dodo).',
                'Ältere berücksichtigen zunehmend Häufigkeiten/Wahrscheinlichkeiten.',
              ],
            },
            {
              title: 'Deduktiv',
              text: 'Vom **Allgemeinen aufs Besondere**, logisch zwingend aus den Prämissen; wendet bekanntes Wissen auf Neues an.',
              bullets: [
                '«Alle Katzen bellen. Rex ist eine Katze. Bellt Rex?» – kleinen Kindern schwer (Weltwissen stört); mit «Stell dir vor …»/«auf einem fremden Planeten» lösen es 4-Jährige.',
                'Erst konkrete, später abstrakte Aufgaben (A<B, B<C → A<C).',
              ],
            },
          ],
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Wason-Kartenwahlaufgabe (Fol. 59)',
          text: 'Die klassische **abstrakte** Aufgabe (Vokal → gerade Zahl: Welche Karten umdrehen?) ist schwer. Eine **konkrete** Regelbruch-Aufgabe («Sally muss draussen einen Mantel tragen») lösen schon 3- bis 4-Jährige.',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Analogiebildung',
              text: 'Vom Zusammenhang zweier Objekte auf den zweier anderer schliessen. 13 Monate: Lösungsstrategie (Barriere entfernen, an Band ziehen) wird auf analoge Aufgaben übertragen; Vorschulalter: einfache Alltagsanalogien (Vogel : Nest = Hund : Hundehütte); mit wachsendem Kausalverständnis Analogien höherer Ordnung. (Fol. 60)',
            },
          ],
        },
      ],
    },
    {
      id: 'intelligenz',
      title: 'Intelligenz',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Intelligenz',
              text: 'Keine allgemeingültige Definition; breit akzeptiert: Fähigkeit, sich an neue Situationen und Anforderungen der Umwelt anzupassen und die Umwelt zielgerichtet zu verändern. (Fol. 61)',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Spearman – Generalfaktor',
              text: 'Allgemeine Intelligenz (**g-Faktor**) + spezifische Begabungsfaktoren (**s-Faktoren**, z. B. verbal, mathematisch); g beeinflusst die s-Faktoren stark.',
            },
            {
              title: 'Thurstone – 7 Primärfaktoren',
              text: 'Räumliches Vorstellungsvermögen, schlussfolgerndes Denken, Merkfähigkeit, Wahrnehmungsgeschwindigkeit, Rechenfähigkeit, Sprachverständnis, Wortflüssigkeit. Aber: Die Primärfaktoren **korrelieren**.',
            },
            {
              title: 'Cattell – fluid / kristallin',
              bullets: [
                '**Fluide:** weitgehend angeboren, ~ g-Faktor (Denkfähigkeit, Verarbeitungsgeschwindigkeit, schlussfolgerndes Denken); Höhepunkt im frühen Erwachsenenalter, **sinkt dann**.',
                '**Kristalline:** bildungs- und kulturabhängig (Faktenwissen, Wortschatz, Rechnen); **bleibt weitgehend stabil**.',
              ],
            },
          ],
        },
        { t: 'p', text: '(Fol. 62–63)' },
        {
          t: 'list',
          title: 'Einflussfaktoren (Fol. 63–64)',
          items: [
            '**Genetik:** ca. **50 %** der IQ-Unterschiede zwischen Personen genetisch (Zwillings-/Adoptionsstudien); Intelligenz ist eine der **stabilsten** Persönlichkeitseigenschaften.',
            '**Förderlich in der Familie:** interessante, stimulierende Umwelt, Angebote zum Explorieren, emotionale Responsivität, häufige erklärende Gespräche, positive und entwicklungsangemessene Erwartungen.',
            '**Familiäre Risikofaktoren:** sozioökonomischer Status (geringe Schulbildung der Mutter, viele Kinder, geringes Einkommen, Minderheitenzugehörigkeit), alleinerziehend, übermässige Ängstlichkeit der Mutter, viele Stresserlebnisse, rigide Erziehungsvorstellungen, negative Mutter-Kind-Interaktion, psychische Probleme der Mutter.',
            '**Förderprogramme** (z. B. Head Start, USA): oft nur **kurzfristige** IQ-Effekte, aber positive Effekte auf Sozialverhalten, Gesundheit und Schulabschluss.',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'IQ und Schulerfolg (Fol. 65)',
          text: [
            'IQ – Schulleistung **r = .44**; Motivation – Schulleistung **r = .28** (Kriegbaum et al., 2018).',
            'Schule verbessert den IQ; Selbstkonzept und Fachinteresse wirken **wechselseitig** mit Leistungen.',
            'Persönlichkeit (intellektuelle Neugier, Gewissenhaftigkeit) trägt neben g zur akademischen Leistung bei.',
          ],
        },
      ],
    },
  ],
};
