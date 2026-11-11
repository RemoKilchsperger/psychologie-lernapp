import type { Chapter } from '../model';

export const kap4: Chapter = {
  id: 'anlage',
  nr: 4,
  short: 'Anlage & Umwelt',
  title: 'Anlage und Umwelt',
  date: '28.10.2026',
  pages: 'S. 73–99',
  lit: 'Asendorpf (2024)',
  color: '#059669',
  kern: [
    '**Nature vs. Nurture:** extreme Positionen (Collie-Beispiel vs. Watsons «Dutzend gesunder Kinder»); das Pendel schwang im 20. Jh. hin und her. (S. 75–76)',
    'Variation eines Traits in einer Population = **Gene + geteilte Umwelt** (Familie) **+ nicht geteilte Umwelt** (individuell) + Messfehler. (S. 77, 85)',
    'Ohne **genetisch sensitive Designs** (Familien-, Adoptions-, Zwillingsstudien) lässt sich nicht entscheiden, ob Ähnlichkeit sozial oder genetisch bedingt ist. (S. 76)',
    '**Falconer:** *h²* = 2 (r_MZ − r_DZ). **IQ** ca. 50 % genetisch, Erblichkeit **steigt mit dem Alter**; **Big Five** ca. .30–.40, nicht geteilte Umwelt wichtiger als geteilte. (S. 84–98)',
    'Erblichkeit ist eine **Populationsstatistik**: keine Aussage über Einzelfall, Gruppenunterschiede, Stabilität oder Veränderbarkeit. (S. 95)',
    'Gene und Umwelt **interagieren** (Scarr-Rowe-Interaktion, Epigenetik). (S. 91, 95)',
  ],
  sections: [
    {
      id: 'ausgangslage',
      title: 'Ausgangslage',
      blocks: [
        {
          t: 'p',
          text: '**Praxisrelevanz:** Glaubenssätze von Klient*innen («Ich bin so, weil ich so erzogen wurde», «Das liegt mir in den Genen»). (S. 73)',
        },
        {
          t: 'list',
          title: 'Kriterien universeller Persönlichkeitsmerkmale (Zuckerman 2005; S. 74)',
          items: [
            'unabhängig von Alter, Kultur, Geschlecht **reliabel identifizierbar**',
            '**intraindividuell stabil**',
            'auch bei **anderen sozialen Lebewesen** beobachtbar',
            '**biologisches Korrelat**',
            '**Erblichkeit**',
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Umweltmodell', text: 'Das Leseverhalten der Eltern fördert die verbalen Fähigkeiten der Kinder.' },
            { title: 'Genetisches Modell', text: '**Gemeinsame Gene** erklären beides – Leseverhalten der Eltern und verbale Fähigkeiten der Kinder.' },
            { title: 'Gemischtes Modell', text: 'Beides trägt bei.' },
          ],
        },
        { t: 'p', text: 'Drei Denkmodelle am Beispiel elterliches Leseverhalten → verbale Fähigkeiten der Kinder. (S. 76)' },
      ],
    },
    {
      id: 'genetik',
      title: 'Genetische Grundlagen',
      blocks: [
        {
          t: 'list',
          items: [
            '**DNS** (engl. DNA) bestimmt die Physiologie; **> 98 %** ist allen Menschen gemeinsam, ca. **97 %** der Gene teilen wir mit Schimpansen; der Rest variiert. (S. 78)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Quantitative Genetik',
              text: 'Untersucht **kontinuierlich** (annähernd normal) verteilte Merkmale (Intelligenz, Körpergrösse); schätzt die relative Bedeutung von Genen, geteilter und nicht geteilter Umwelt für einen Trait **in einer Population**; braucht **Variation**. Abgrenzung zur **molekularen Genetik**. (S. 77, 79)',
            },
            {
              term: 'Dynamisch-interaktionistisches Konzept (Asendorpf 2024)',
              text: 'Persönlichkeit ist nicht im Genom vorprogrammiert; das Genom gleicht einem **Text, aus dem immer wieder Teile abgelesen werden** – was gelesen wird, hängt von früher Gelesenem und dessen Wirkungen ab. Genetische Einflüsse wirken meist **indirekt** über vermittelnde Merkmale. (S. 81)',
            },
          ],
        },
        { t: 'widget', w: 'verwandtschaft' },
      ],
    },
    {
      id: 'designs',
      title: 'Untersuchungsdesigns',
      blocks: [
        {
          t: 'list',
          title: 'Logik (S. 80): genetischer und «Umwelt-Verwandtschaftsgrad» sind bekannt',
          items: [
            'Einfluss **geteilter Umwelt** → Umwelt-Verwandte (z. B. Adoptivgeschwister) sind ähnlicher als Umwelt-Fremde.',
            'Einfluss der **Gene** → getrennt aufgewachsene Verwandte sind ähnlicher als genetisch Fremde; Ähnlichkeit steigt mit dem Verwandtschaftsgrad.',
            'Spielen beide eine Rolle, muss eine Variable **konstant gehalten** werden.',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Eineiige Zwillinge (EZ / MZ)',
              text: 'Monozygot: aus **einer** befruchteten Eizelle, genetisch identisch, immer gleichgeschlechtlich. (S. 82)',
            },
            {
              term: 'Zweieiige Zwillinge (ZZ / DZ)',
              text: 'Dizygot: aus **zwei** Eizellen, teilen die Hälfte der variablen Gene; ca. **3/4** aller Zwillingsgeburten. (S. 82)',
            },
            {
              term: 'Adoptionsstudie',
              text: 'Korrelation des Adoptivkinds mit biologischen Eltern, Adoptiveltern und Adoptivgeschwistern. (S. 82)',
            },
            {
              term: 'Getrennt aufgewachsene EZ',
              text: 'Ihre Korrelation gilt als **obere Schranke** der Erblichkeit (z. B. *r* = .78 für Intelligenz, Pedersen et al. 1992); Gefahr der **Überschätzung**, wenn die Umwelten doch ähnlich sind. (S. 83)',
            },
            {
              term: 'Kombinationsmethoden',
              text: 'Zwillings- + Adoptionsdaten, Stiefgeschwister usw. → genauere Schätzungen; «state of the art». (S. 82)',
            },
            {
              term: 'Selektive Partnerwahl',
              text: 'Eltern sind sich genetisch ähnlich → bei Familien-/Adoptionsdesigns **Überschätzung**, bei Zwillingsdesigns **Unterschätzung** der Erblichkeit (DZ werden ähnlicher, MZ nicht). (S. 84)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          text: 'Die zentrale Frage bei Zwillingen: Sind EZ ähnlicher wegen **gleicher Behandlung** oder wegen **gleicher Gene**? (S. 82)',
        },
      ],
    },
    {
      id: 'formeln',
      title: 'Formeln zur Erblichkeit',
      blocks: [
        {
          t: 'formula',
          name: 'Erblichkeitskoeffizient (Heritabilität)',
          formula: 'h² = V_G / V_P = V_G / (V_G + V_U)',
          legend: [
            '*h²* = Heritabilität (0 = kein, 1 = maximaler genetischer Einfluss)',
            '*V_G* = genotypische Varianz',
            '*V_P* = phänotypische Varianz (beobachtbare Unterschiede)',
            '*V_U* = umweltbedingte Varianz',
          ],
          source: 'S. 98',
        },
        { t: 'widget', w: 'heritabilitaet' },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Problem der fehlenden Variation',
          text: 'Voraussetzung: Das Merkmal **variiert**. «Zwei Ohren haben» hat *h²* = 0, obwohl es genetisch bedingt ist. Die Heritabilität **sinkt mit steigender Umweltvarianz**. (S. 98)',
        },
        {
          t: 'formula',
          name: 'Falconer-Formel (gemeinsam aufgewachsene Zwillinge)',
          formula: 'r_MZ = a² + c²   ·   r_DZ = 0,5 a² + c²   ⇒   a² = 2 (r_MZ − r_DZ)',
          legend: [
            '*a²* = additiver genetischer Einfluss (= *h²*)',
            '*c²* = Einfluss der geteilten Umwelt',
            '*r_MZ*, *r_DZ* = Korrelationen eineiiger bzw. zweieiiger Zwillinge',
            'Rechenbeispiel (Bouchard & McGue 1981): *r_MZ* = .86, *r_DZ* = .60 → *a²* = 2 (.86 − .60) = **.52** → 52 % der Varianz genetisch (S. 99)',
          ],
          source: 'S. 98–99',
        },
        { t: 'widget', w: 'falconer' },
        {
          t: 'formula',
          name: 'Adoptionsstudien (nicht adoptierte vs. adoptierte Geschwister)',
          formula: 'r_na = 0,5 a² + c²   ·   r_a = c²   ⇒   a² = 2 (r_na − r_a)',
          legend: [
            '*r_na* = Korrelation leiblicher (nicht adoptierter) Geschwister',
            '*r_a* = Korrelation adoptierter Geschwister = **direkte Schätzung der geteilten Umwelt** *c²*',
          ],
          source: 'S. 99',
        },
      ],
    },
    {
      id: 'befunde',
      title: 'Befunde: Intelligenz und Big Five',
      blocks: [
        { t: 'widget', w: 'plomin' },
        {
          t: 'list',
          title: 'Intelligenz',
          items: [
            'Interindividuelle IQ-Unterschiede sind **mindestens zur Hälfte genetisch**; Schätzungen schwanken nach Design, Methode, Stichprobe. (S. 84)',
            'Erbanteil **steigt mit dem Alter** (ca. 40 % Kindheit → ca. 60 % Erwachsene; Kombinationsstudien .40–.65); der Einfluss der **geteilten Umwelt sinkt** und verschwindet. (S. 84, 94)',
            '**Asendorpf (2024):** genetische Varianz 50 %; bei Reliabilität .90 Fehleranteil 10 % → Umweltvarianz 40 %; Verhältnis **Gene : Umwelt = 5 : 4**. (S. 85)',
            'IQ-Unterschiede beruhen auf **Tausenden von Allelen/SNPs** (nach Scheitern des QTL-Ansatzes). (S. 94)',
          ],
        },
        {
          t: 'table',
          head: ['Big-Five-Faktor', 'Heritabilität (Asendorpf 2024, Tab. 6.4)'],
          rows: [
            ['Extraversion', '**.42**'],
            ['Offenheit', '.41'],
            ['Neurotizismus', '.39'],
            ['Verträglichkeit', '.35'],
            ['Gewissenhaftigkeit', '.31'],
          ],
          caption: 'Big Five: Heritabilitäten .30–.40 (Vukasović & Bratko 2015); genetischer Einfluss nimmt ab dem jungen Erwachsenenalter leicht ab (Bleidorn et al. 2014); ähnliche Werte bei Verhaltensbeobachtung. (S. 86)',
        },
      ],
    },
    {
      id: 'umwelt',
      title: 'Umwelteinflüsse',
      blocks: [
        {
          t: 'p',
          text: 'In der quantitativen Genetik ist **Umwelt = alles Nicht-Vererbte**, auch vorgeburtliche Einflüsse (toxische Substanzen, Mangelversorgung, Gewalt gegen die Mutter, Lärm, Umweltverschmutzung). (S. 86–87)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Geteilte Umwelt',
              text: 'Umwelteinflüsse, die Familienmitglieder gemeinsam erleben und die sie **ähnlicher** machen: z. B. sozioökonomischer Status, Wohnumgebung, Familienklima, Erziehungsziele. (S. 81, 86)',
            },
            {
              term: 'Nicht geteilte Umwelt',
              text: 'Individuelle Umwelteinflüsse, die Familienmitglieder **unähnlicher** machen (z. B. Geburtsumstände, Geschwisterposition, elterliche Bevorzugung, Freundeskreis, Schulklasse, Unfälle). Für fast alle Eigenschaften **bedeutsamer** als geteilte Umwelt. (S. 81, 86, 88)',
            },
          ],
        },
        {
          t: 'study',
          title: 'Kontrollzwillingsdesign',
          source: 'Caspi et al. 2004 (S. 88)',
          method: 'Eineiige Zwillinge: Die Mutter beschreibt mit 5 Jahren beide Kinder; zwei Jahre später wird das antisoziale Verhalten beurteilt.',
          result: 'Der von der Mutter negativer beschriebene Zwilling wurde 2 Jahre später als antisozialer beurteilt.',
          takeaway: 'Da EZ genetisch identisch sind, muss der Effekt **umweltvermittelt** sein (nicht geteilte Umwelt).',
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Nicht geteilte Umwelt ist für fast alle Eigenschaften bedeutsamer als geteilte – **Ausnahme: IQ bis zum Verlassen des Elternhauses**. Einzelne Effekte sind klein (viele Bedingungen, Modifikation durch Persönlichkeit, Zufall). (S. 88)',
        },
      ],
    },
    {
      id: 'zusammenspiel',
      title: 'Zusammenspiel: Bildungsbericht Schweiz 2026',
      blocks: [
        {
          t: 'list',
          items: [
            'Kinder aus einkommensschwachen Verhältnissen erleben öfter weniger Stimulation; **frühkindliche Programme und Mentoring** können Unterschiede verringern (Geldtransfers nicht immer). (S. 90)',
            '**Peer-Effekte** beeinflussen kognitive und nichtkognitive Fähigkeiten; am stärksten in der **Adoleszenz**. (S. 90)',
            '**Geschwisterstudien:** 20–45 % der Ähnlichkeit in Bildungsergebnissen genetisch; Eltern-Gene wirken **direkt** (Vererbung) und **indirekt** (Erziehung). (S. 93)',
            '**75 %** der Personen im obersten PGI-Dezil besuchen eine Universität, im untersten **25 %** (Plomin & von Stumm 2022). (S. 94)',
            '**Mehr Bildungschancen** und weniger Ungleichheit → Assoziation Genetik–Schulerfolg **verstärkt**. (S. 91)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Polygener Index (PGI)',
              text: 'Fasst **viele genetische Varianten** zu einem Wert zusammen; viele Gene wirken auf mehrere Merkmale. (S. 91–92, Notiz)',
            },
            {
              term: 'Scarr-Rowe-Interaktion',
              text: 'Günstige Umwelt und günstige Anlage **ergänzen sich**: Genetische Varianten für Kognition wirken bei **höherem SES stärker**. (S. 91)',
            },
          ],
        },
        { t: 'widget', w: 'arold' },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Intelligenz = **Potenzial**; Bildungsergebnis = Mischung aus Potenzial, Beschulung usw. (S. 93, Notiz)',
        },
      ],
    },
    {
      id: 'epigenetik',
      title: 'Epigenetik und Schlussfolgerungen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Epigenetik',
              text: 'Mechanismen, durch die Umweltbedingungen (Medikamente, Psychotherapie, Lebensereignisse) Gene **an- und abschalten**, ohne die DNA-Sequenz zu ändern; Muster werden an Tochterzellen und z. T. an Nachkommen weitergegeben (**Methylierung**, RNA-Interferenz, Histon-Modifikation). (S. 95)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'NASA-Zwillingsstudie',
          text: 'Veränderte Genexpression bei Scott Kelly im All; **7 %** der Änderungen blieben nach der Rückkehr bestehen. (S. 96)',
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Erblichkeit (Riemann 2005) = Anteil der beobachteten Varianz, der auf genetische Variation zurückgeht. Sie ist … (S. 95)',
          text: [
            'eine **Populationsstatistik** ohne Bedeutung für den Einzelfall,',
            '**keine Naturkonstante** (variiert mit Umwelt- und Genvarianz),',
            '**kein Beleg**, dass Gruppenunterschiede genetisch sind,',
            '**ohne Aussage** über Stabilität oder Veränderbarkeit eines Merkmals.',
          ],
        },
        {
          t: 'list',
          items: [
            'Persönlichkeit ist im Einzelfall **immer Produkt von Anlage und Umwelt**; exakte Populationsschätzungen gibt es nicht. (S. 94)',
            'Wenn alle ihr Potenzial verwirklichen können (**gleichere Umwelt**), **steigt** die Heritabilität. (S. 94)',
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Gene = **Entwicklungspotenzial**, Umwelt = **Ausschöpfungsgrad**; je ähnlicher die Umwelt, desto stärker erklären Gene die Unterschiede; hohe Erblichkeit des IQ trotz starker Veränderung in den ersten Lebensjahren. (S. 95–96, Notiz)',
        },
      ],
    },
  ],
};
