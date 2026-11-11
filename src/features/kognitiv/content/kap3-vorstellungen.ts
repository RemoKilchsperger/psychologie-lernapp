import type { Chapter } from '../model';

export const kap3: Chapter = {
  id: 'vorstellungen',
  nr: 3,
  short: 'Vorstellungen',
  title: 'Mentale Vorstellungen',
  pages: 'S. 10–13',
  lit: 'Foliensatz «Mentale Vorstellungen»; Anderson (2013), Kap. 4',
  color: '#db2777',
  kern: [
    '**Mentale Vorstellung** = Repräsentation wahrnehmungsbezogener Information **ohne sensorischen Input**. (F. 3); (LB S. 75)',
    '**Mentale Rotation:** RT steigt **linear mit dem Drehwinkel** – in der Bildebene wie in der Tiefe. (F. 4–5)',
    '**«Imagery debate»:** propositional (**Pylyshyn**; Bilder = Epiphänomen) vs. bildhaft/räumlich (**Kosslyn**). (F. 6–8)',
    '**Scanning:** Scanzeit steigt mit der Distanz (Kosslyn 1973, 1978); Kritik durch **Lea**, **Bobrow**, **Versuchsleitereffekte**. (F. 9–19)',
    '**Bildgebung:** Wahrnehmung und Vorstellung überlappen **stark, aber nicht vollständig**; V1 wird **topographisch** genutzt (Bildgrösse ↔ posterior/anterior). (F. 22–23, 27–32)',
    '**TMS über V1** verlangsamt auch die Vorstellung → V1 ist **funktionell bedeutsam**. (F. 37–38); (LB S. 84)',
    '**Doppelte Dissoziation** (R. M. vs. C. K.) → Systeme nicht identisch. (F. 39)',
    '**Anwendung:** Vorstellung hilft beim Lesen/Behalten, motorischen Lernen und steigert Food Craving. (F. 40–44)',
  ],
  sections: [
    {
      id: 'rotation',
      title: 'Definition und mentale Rotation',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Mentale Vorstellung',
              text: 'Repräsentation **wahrnehmungsbezogener Information ohne sensorischen Input**. Wahrnehmung: Reiz vorhanden; Vorstellung: Bild aus dem **Gedächtnis**, im **Kurzzeitgedächtnis** gehalten. (F. 3); (LB S. 75)',
            },
            {
              term: 'Mentale Rotation',
              text: '**Shepard & Metzler (1971):** Paare von 3-D-Würfelobjekten – identisch (in Bildebene oder Tiefe gedreht) oder spiegelbildlich? RT steigt **linear mit dem Winkel**. (F. 4–5); (LB S. 77)',
            },
          ],
        },
        { t: 'p', text: 'Beispiele: Fenster des Hauses zählen, Möbel im Schlafzimmer, welches Grün dunkler ist. (F. 2); (LB S. 75)' },
        { t: 'widget', w: 'rotation' },
        { t: 'figure', fig: 'rotation' },
        {
          t: 'list',
          title: 'Ergebnis Shepard & Metzler (F. 5); (LB S. 77–78)',
          items: [
            'RT **linear** mit dem Winkel (ca. **1 s bei 0°** bis ca. **4–4.5 s bei 180°**) – analog zu einer physikalischen Drehung.',
            'Rotation in die **Tiefe nicht langsamer** als in der Ebene → **3-D-Repräsentation**.',
            'Aktivität im **Parietalkortex**.',
          ],
        },
      ],
    },
    {
      id: 'debate',
      title: 'Die Imagery Debate',
      blocks: [
        { t: 'widget', w: 'imagery-debate' },
        {
          t: 'table',
          head: ['', 'Propositional (Pylyshyn)', 'Bildhaft/räumlich (Kosslyn)'],
          rows: [
            ['Format', 'abstrakt, sprachähnlich: Relation/Prädikat + Argumente, z. B. *in(Katze, Kommode)*', 'ähnelt dem Objekt; enthält **analoge** Info (z. B. Farbton)'],
            ['Stärke', 'auch **Abstraktes** darstellbar («Ursachen der Erwärmung»)', '**Distanzen** im Bild entsprechen realen Distanzen'],
            ['Bilderleben', '**Epiphänomen** ohne funktionale Rolle (Pylyshyn, 1973; (LB S. 75))', '**funktional relevant**'],
          ],
          caption: 'Imagery debate (F. 6–8). Die propositionale Sicht ist verwandt mit **semantischen Netzwerken** (Gedächtniskapitel). (F. 6)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Propositionale Repräsentation',
              text: '**Pylyshyn:** abstraktes, sprachähnliches Format aus **Relation/Prädikat + Argumenten** (z. B. *in(Katze, Kommode)*); auch Abstraktes darstellbar. Bilderleben = **Epiphänomen**. (F. 6–8); (LB S. 75)',
            },
            {
              term: 'Bildhafte (analoge) Repräsentation',
              text: '**Kosslyn:** Repräsentation **ähnelt dem Objekt** und enthält analoge Info; Distanzen im Bild entsprechen realen Distanzen; Bilder sind **funktional relevant**. (F. 6–8)',
            },
            { term: 'Epiphänomen', text: 'Begleiterscheinung **ohne funktionale Rolle** – so sieht Pylyshyn das bildhafte Erleben. (LB S. 75)' },
          ],
        },
      ],
    },
    {
      id: 'scanning',
      title: 'Scanning-Studien und Kritik',
      blocks: [
        { t: 'widget', w: 'scanning' },
        {
          t: 'steps',
          items: [
            {
              title: 'Kosslyn (1973)',
              text: 'Gelerntes **Boot** (Motor – Luke – Anker). Fokus auf ein Ende → RT **steigt mit der Distanz**; Bild als Ganzes → flach. Deutung: Scannen über ein inneres Bild. (F. 10–11)',
            },
            {
              title: 'Kritik 1 – Lea (1975)',
              text: 'Distanz und **Anzahl Zwischenobjekte** getrennt variiert → RT hängt v. a. von der **Anzahl Zwischenobjekte** ab → spricht für **listen-/netzwerkartige** Repräsentation. (F. 12–13)',
            },
            {
              title: 'Kritik 2 – Bobrow',
              text: '**Strukturelle Beschreibung** (≈ semantisches Netz): Motor → Luke **3 Links**, Motor → Anker **4 Links** → mehr Links = längere Suche, **ohne Bild**; Bilderleben = Epiphänomen. (F. 14)',
            },
            {
              title: 'Kosslyn et al. (1978)',
              text: '**Fiktive Insel**, **Zwischenobjekte kontrolliert** → Scanzeit steigt **linear mit der Distanz**. (F. 15–16) [Web]',
            },
            {
              title: 'Kritik 3 – Versuchsleiter-Erwartung',
              text: '**Intons-Peterson (1983):** Erwartung (Imagery schneller/langsamer als Perception) verschiebt die **Höhe** der Scanzeiten; der **Distanzeffekt bleibt**. (F. 17) [Web] **Jolicoeur & Kosslyn (1985):** trotz suggerierter U-Kurve linearer Anstieg. (F. 18)',
            },
            {
              title: 'Kritik 4 – Aufgabenanforderungen',
              text: '**Dror, Kosslyn & Waag (1993):** Piloten schneller, aber bei beiden steigt die RT mit der Distanz; Wahrnehmung und Vorstellung beruhen auf **ähnlichen Mechanismen**. (F. 19)',
            },
          ],
        },
        { t: 'figure', fig: 'lea' },
        { t: 'figure', fig: 'kosslyn' },
        {
          t: 'study',
          title: 'Bildgrösse: Kaninchen neben Elefant oder Fliege',
          source: 'Kosslyn (F. 20; Jahr «1995» laut Folie nicht verifiziert)',
          method: 'Ein Kaninchen wird neben einem **Elefanten** (Kaninchen klein) oder neben einer **Fliege** (Kaninchen gross) vorgestellt; danach Frage nach einem Detail.',
          result: 'Neben dem Elefanten ist die Detailfrage ca. **211 ms langsamer**.',
          takeaway: '**Kleine Bildteile** sind im Vorstellungsbild **schlechter auflösbar** – wie bei der Wahrnehmung.',
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Lea** (Anzahl Zwischenobjekte) und **Bobrow** (Links im Netz) argumentieren **propositional**; **Kosslyn (1978)** kontrolliert die Zwischenobjekte.',
            'Versuchsleitereffekte verschoben die **Höhe**, nicht den linearen **Distanzeffekt**.',
          ],
        },
      ],
    },
    {
      id: 'bildgebung',
      title: 'Belege aus bildgebenden Verfahren',
      blocks: [
        {
          t: 'p',
          text: '**Hypothesen** (F. 21); (LB S. 83–84): **(A)** Wahrnehmung und Vorstellung aktivieren **dieselben Areale**, insb. **V1**; **(B)** V1 ist dabei **funktionell bedeutsam**.',
        },
        { t: 'widget', w: 'evidenz-leiter' },
        {
          t: 'study',
          title: 'Vorstellen vs. Ansehen im fMRI',
          source: 'Ganis, Thompson & Kosslyn (2004) (F. 22–23)',
          method: 'Objekt **vorstellen** vs. **undeutliche Zeichnung ansehen**, dann Frage («breiter als hoch?»).',
          result: '**Grosse, aber nicht vollständige** Überlappung: mehr frontal/parietal, weniger temporal/okzipital. Ähnlich **O’Craven & Kanwisher (2000)**: FFA/PPA aktiv, schwächer. (LB S. 83)',
          takeaway: 'Wahrnehmung und Vorstellung teilen viele Areale – aber nicht alle.',
        },
        { t: 'widget', w: 'v1-karte' },
        {
          t: 'list',
          items: [
            '**V1 topographisch** (F. 24–26): räumliche Struktur des Reizes als (verzerrte, gespiegelte) Karte; **Fovea posterior, Peripherie anterior**.',
            '**Kosslyn et al. (1993), PET** (F. 27–29): **kleine** Buchstaben vorstellen → Aktivität weiter **posterior** in Area 17; **grosse** → weiter **anterior**. (LB S. 83)',
            '**Kosslyn et al. (1995), PET** (F. 30–33): Objekte klein/mittel/gross vorstellen → Aktivierung **wandert mit der Grösse nach anterior**; A17 gegenüber Baselines aktiviert. **Aber: Aktivierung ≠ Funktion.**',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'MVPA',
              text: '**Multivoxel Pattern Analysis:** Ein Klassifikator lernt Aktivierungsmuster über viele Voxel (**Training**) und erkennt Reize in neuen Daten (**Test**). **Johnson & Johnson (2014):** 4 Szenen; AUC **Perception 63 %**, **Imagery 56 %** (Zufall 50 %) → auch vorgestellte Szenen sind dekodierbar, schwächer. (F. 34–36)',
            },
            {
              term: 'TMS',
              text: '**Transkranielle Magnetstimulation:** stört kurzzeitig die Aktivität eines Areals → erlaubt Schlüsse auf **Ursächlichkeit** (nicht nur Beteiligung). Vergleich mit **Sham** (Schein-Stimulation). (F. 37–38)',
            },
          ],
        },
        {
          t: 'study',
          title: 'TMS über Area 17',
          source: 'Kosslyn et al. (1999) (F. 37–38); (LB S. 84)',
          method: 'Streifenmuster in **vier Quadranten** werden verglichen – **wahrgenommen** oder **vorgestellt**; echte TMS vs. Sham über Area 17.',
          result: 'Echte TMS verlängert die RT in **beiden** Bedingungen gegenüber Sham.',
          takeaway: '**V1 ist ursächlich beteiligt** – erst TMS zeigt funktionelle Bedeutung; PET/fMRI zeigen nur Beteiligung.',
        },
        { t: 'figure', fig: 'tms' },
      ],
    },
    {
      id: 'dissoziation',
      title: 'Widersprechende Befunde: doppelte Dissoziation',
      blocks: [
        { t: 'widget', w: 'dissoziation' },
        {
          t: 'table',
          head: ['Patient', 'Wahrnehmung', 'Vorstellung'],
          rows: [
            ['**R. M.** (Farah et al., 1993)', '**OK** (erkennt, zeichnet ab)', '**gestört** (kein Zeichnen aus dem Gedächtnis)'],
            ['**C. K.** (Behrmann et al., 1994)', '**gestört** (visuelle Agnosie)', '**OK** (zeichnet aus dem Gedächtnis)'],
          ],
          caption: 'Doppelte Dissoziation (F. 39)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Doppelte Dissoziation',
              text: 'Patient 1 zeigt Störung in A bei intakter B, Patient 2 umgekehrt (**R. M.**: Vorstellung gestört; **C. K.**: Wahrnehmung gestört) → die beiden Funktionen beruhen auf **nicht identischen Systemen**. (F. 39)',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Folie (massgeblich)', text: 'Systeme **nicht identisch**; identische Mechanismen für **«vision for action»** und **unbewusste mentale Bilder**. (F. 39)' },
            {
              title: 'Lehrbuch (nach Behrmann, 2000)',
              text: 'Viele **gemeinsame Ebenen**; Wahrnehmung braucht zusätzlich Prozesse **niederer** Ebene, Vorstellung zusätzlich **Generierung**; Läsion niedrig → nur Wahrnehmung gestört, hoch → nur Vorstellung. (LB S. 90–91)',
            },
          ],
        },
        { t: 'callout', tone: 'pruefung', text: 'Beide Formulierungen weichen ab – **massgeblich ist die Folie**.' },
      ],
    },
    {
      id: 'anwendung',
      title: 'Anwendungen',
      blocks: [
        {
          t: 'table',
          head: ['Studie', 'Vorgehen', 'Befund'],
          rows: [
            ['**Pressley (1976)** (F. 40–41)', 'Drittklässler, Vorstellungsinstruktion beim Lesen', 'Verbessert die Leistung, **besonders bei schwächeren Lesern** (Interaktion; ca. 17.5 vs. 14 gegenüber 18.7 vs. 17)'],
            ['**Bower & Winzenz (1970)** (F. 42)', 'Wortpaare in **interagierendem Bild** verbinden vs. stilles Wiederholen', '**≫** stilles Wiederholen (ca. **13 vs. 5**)'],
            ['**Nyberg et al. (2006)** (F. 43)', 'Fingersequenzen mental vs. motorisch üben', 'Mentales Üben verbessert die trainierte Sequenz, aber **weniger als motorisches Üben**'],
            ['**Harvey, Kemps & Tiggemann (2005)** (F. 44)', 'Essen vs. Ferien vorstellen', 'Essen vorstellen steigert **Food Craving** (ca. **33 → 60**), Ferien nicht'],
          ],
        },
      ],
    },
  ],
};
