import type { Chapter } from '../model';

export const kap2: Chapter = {
  id: 'wahrnehmung',
  nr: 2,
  short: 'Wahrnehmung',
  title: 'Wahrnehmung',
  pages: 'S. 5–10',
  lit: 'Foliensatz «Wahrnehmung» (F. 47–49 und 80–84 fehlen in der Datei); Anderson (2013), Kap. 2',
  color: '#0891b2',
  kern: [
    '**Wahrnehmung** = Organisation und Interpretation sensorischer Information; Fragen: Was? Wo? Was kann ich damit tun? (F. 3)',
    'Das Netzhautbild ist **unterbestimmt** → Wahrnehmung ist **«Detektivarbeit»** mit Hinweisen. Probleme: **Ambiguität, Invarianz, fehlende Information, Generalisierung**. (F. 6, 9–10)',
    'Drei Ebenen: **A Merkmalsextraktion → B Objektwahrnehmung → C Objekterkennung**; parallel **«Was»** (ventral/temporal) und **«Wo»** (dorsal/parietal). (F. 11, 20)',
    '**Rezeptive Felder:** On-/Off-Zentrum-Zellen melden Kontrast; ihre Verschaltung ergibt **Balken- und Kantendetektoren**. (F. 22–25)',
    'Gruppierung über **Gestaltprinzipien** (gelten «ceteris paribus», können konkurrieren), Textursegmentierung, Figur-Grund. (F. 35–45)',
    'Objekterkennung: **Schablonenabgleich, Merkmalsanalyse, Geone (Biederman)** – jeweils mit Grenzen. (F. 51–76, 89–90)',
    '**Signalentdeckungstheorie** trennt **Sensitivität (d′)** vom **Antwortkriterium**. (F. 56–62)',
    '**Basisebene = «entry level»**; Expertise verschiebt sie nach unten. Kontext/Erwartungen wirken **top-down** (Fingerabdruck-Experten, Pistole). (F. 64–65, 77–79, 85–92)',
  ],
  sections: [
    {
      id: 'schwierig',
      title: 'Warum Wahrnehmung schwierig ist',
      blocks: [
        {
          t: 'list',
          items: [
            'Wirkt **schnell und mühelos**, ist aber komplex; Maschinen sind fehleranfällig (**DARPA Grand Challenge 2004**: bestes Fahrzeug 7.3 Meilen, ca. 5 %). (F. 5, 8)',
            '**«The Dress»:** gleiches Netzhautbild, verschiedene Farbwahrnehmung (blau-schwarz vs. weiss-gold); vermutet: unterschiedliche **angenommene Beleuchtung**. (F. 7) [Web]',
            'Das Netzhautbild ist **unterbestimmt** → Wahrnehmung als **«Detektivarbeit»** mit Hinweisen. (F. 6)',
          ],
        },
        {
          t: 'defs',
          items: [
            { term: 'Ambiguität', text: '**Ein Bild – mehrere mögliche Objekte** (eins-zu-viele). (F. 9–10)' },
            { term: 'Invarianz', text: '**Verschiedene Ansichten – ein Objekt** (viele-zu-eins). (F. 9–10)' },
            { term: 'Fehlende Information', text: 'Teile des Objekts sind nicht sichtbar, z. B. durch **Verdeckung**. (F. 9–10)' },
            { term: 'Generalisierung', text: '**Verschiedene Individuen → eine Kategorie** (alle sind «Hund»). (F. 9–10)' },
          ],
        },
        { t: 'widget', w: 'probleme-sort' },
        {
          t: 'study',
          title: 'Kognitive Undurchdringbarkeit? Rucksack-Studie',
          source: 'Proffitt et al. (2003) [Web] (F. 12)',
          method: 'Personen schätzen Distanzen – einmal mit, einmal ohne schweren Rucksack.',
          result: 'Mit schwerem Rucksack werden Distanzen **grösser** geschätzt.',
          takeaway: 'Würde bedeuten, dass Körperzustand/Wissen die Wahrnehmung beeinflusst. **Kritik:** Evtl. ändert sich nur das **Urteil**, nicht die **Wahrnehmung**.',
        },
        { t: 'figure', fig: 'ebenen' },
      ],
    },
    {
      id: 'auge',
      title: 'Vom Auge zum Kortex',
      blocks: [
        {
          t: 'p',
          text: '**Bildentwerfend:** Hornhaut, Pupille, Augenkammern, Linse, Glaskörper; **bildaufnehmend:** Netzhaut. (F. 13); (LB S. 28)',
        },
        {
          t: 'table',
          head: ['', 'Zapfen (cones)', 'Stäbchen (rods)'],
          rows: [
            ['Anzahl', 'ca. **6 Mio.**', 'ca. **120 Mio.**'],
            ['Ort', 'Zentrum (**Fovea**)', '**Peripherie** (fehlen in der Fovea)'],
            ['Dämmerung', 'wenig empfindlich', '**hoch empfindlich**'],
            ['Farbe / Detail', '**ja / hohe Auflösung**', 'nein / geringe Auflösung'],
          ],
          caption: 'Photorezeptoren (F. 14); (LB S. 28–29)',
        },
        {
          t: 'list',
          items: [
            '**Netzhautschichten** (von innen): Ganglien-, Amakrin-, Bipolar-, Horizontalzellen, Rezeptoren; Licht durchquert **alle Schichten**; Axone der Ganglienzellen bilden den **Sehnerv**. (F. 15) Rezeptoren zeigen **vom Licht weg** (Kontakt zum Pigmentepithel). (F. 16)',
            '**Blinder Fleck:** Sehnervaustritt, **keine Rezeptoren**. Die Feuerrate einer Ganglienzelle kodiert die Lichtmenge; ca. **800 000 Ganglienzellen** pro Sehnerv. (F. 16); (LB S. 29)',
          ],
        },
        { t: 'widget', w: 'sehbahn' },
        {
          t: 'defs',
          items: [
            {
              term: 'Chiasma opticum',
              text: 'Sehnervenkreuzung: Die **nasalen** Fasern kreuzen → das **linke Gesichtsfeld** gelangt in die **rechte Hemisphäre**. (F. 17); (LB S. 29)',
            },
            {
              term: 'CGL / LGN',
              text: 'Corpus geniculatum laterale (**Thalamus**): **6 Schichten** – 4 dorsale **parvozelluläre**, 2 ventrale **magnozelluläre**. Im linken CGL: Schichten **2, 3, 5 ipsilateral** (linkes Auge), **1, 4, 6 kontralateral**. «Dorsal/ventral» = hier **nur Lage**, nicht Was/Wo! (F. 18)',
            },
            {
              term: 'V1 (Area striata)',
              text: '**BA 17**; **Retinotopie** (benachbarte Netzhautpunkte → benachbarte V1-Punkte) und **kortikale Vergrösserung** der Fovea. (F. 19); (LB S. 29–30)',
            },
            {
              term: 'Was- und Wo-Bahn',
              text: '**Was** = **ventral**, Temporallappen (Objekterkennung); **Wo** = **dorsal**, Parietallappen (Lokalisation); Läsionsbefunde bei Affen. **Milner & Goodale (1995):** Wo-Pfad als Pfad für **Handlungen**. (F. 20); (LB S. 30)',
            },
          ],
        },
        {
          t: 'p',
          text: 'Weitere Areale: **V2 (BA 18)**, V3; V4, **V5/MT**. Alternativer Weg vom Sehnerv: **Colliculus superior**. (F. 17, 20)',
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: [
            '**Zapfen** = Fovea, Farbe, Schärfe; **Stäbchen** = Peripherie, Dämmerung. In der Fovea gibt es **keine Stäbchen**, im blinden Fleck **gar keine Rezeptoren**.',
            'CGL-Schichten «dorsal/ventral» (Lage) **≠** dorsale/ventrale **Bahn** (Wo/Was).',
          ],
        },
      ],
    },
    {
      id: 'merkmale',
      title: 'A: Merkmalsextraktion',
      blocks: [
        { t: 'p', text: 'Die Rezeptoren liefern nur eine **Matrix von Intensitätswerten**. (F. 21)' },
        {
          t: 'defs',
          items: [
            {
              term: 'Rezeptives Feld (On-Zentrum/Off-Umfeld)',
              text: '**Kuffler (1953):** Licht im **Zentrum erhöht**, Licht im **Umfeld senkt** die Feuerrate der Ganglienzelle; **Off-On-Zellen** umgekehrt; CGL-Zellen gleich. Solche Zellen melden **Kontrast**. (F. 22); (LB S. 30)',
            },
            { term: 'Balkendetektor', text: 'On-Zentren **in einer Reihe** verschaltet → reagiert auf einen Balken mit bestimmter **Orientierung** (V1). (F. 24–25)' },
            { term: 'Kantendetektor', text: '**Eine Reihe On-Off + eine Reihe Off-On** nebeneinander → reagiert auf eine Hell-Dunkel-Kante. (F. 24–25)' },
            {
              term: 'Hypersäule',
              text: 'Organisationseinheit von V1 (**2 × 2 mm**): ein Ort im Gesichtsfeld, gegliedert nach **Auge** und **Orientierung** (**Hubel & Wiesel, 1977**). (LB S. 31)',
            },
          ],
        },
        { t: 'widget', w: 'rezeptives-feld' },
        { t: 'widget', w: 'merkmalspfade' },
      ],
    },
    {
      id: 'objektwahrnehmung',
      title: 'B: Objektwahrnehmung',
      blocks: [
        {
          t: 'p',
          text: 'Frage: **Was gehört zusammen?** (F. 27–33) **Segmentierung:** Welche Kanten gehören zu welchem Objekt (Überschneidungen)? Kanten-Algorithmen finden **zu wenige** (Kontrast verschwindet) oder **zu viele** Kanten (Textur). **Illusorische Konturen** (Kanizsa-Dreieck): Kanten, wo keine sind. **Fazit:** Objektwahrnehmung ≠ Addition einfacher Merkmale. (F. 28–33)',
        },
        {
          t: 'defs',
          items: [
            { term: 'Konturintegration', text: '**Ausgerichtete, glatt fortsetzende** Elemente werden zu Konturen verbunden. (F. 34); (LB S. 34)' },
            {
              term: 'Ceteris paribus',
              text: 'Jedes Gestaltprinzip gilt nur **«im Übrigen gleich»**; Prinzipien **konkurrieren** (Verbundenheit schlägt Nähe, F. 38); wie integriert wird, ist **ungelöst** (Quinlan & Wilton, 1998; F. 39).',
            },
            { term: 'Textursegmentierung', text: 'Regionen über **zusammenfassende Statistiken** («mittleres Merkmal», z. B. mittlere Orientierung) trennen. (F. 40–41)' },
            {
              term: 'Bindungsproblem',
              text: 'Wie werden **Merkmale verschiedener Art** (Orientierung + Farbe) verbunden? Der «Leim» ist der **räumliche Ort**; dafür braucht es **Aufmerksamkeit**. (F. 42); (LB S. 74)',
            },
            {
              term: 'Figur-Grund',
              text: 'Eine Kante gehört **nur zur Figur** (**Rubinsche Vase**). Die Figur ist eher **konvex, kleiner, symmetrisch, eingefasst, bedeutungsvoll**. (F. 43–44)',
            },
            {
              term: 'Verdeckung / Relatability',
              text: '**Zuordenbarkeit**: Kanten sind durch eine einfache Kurve verbindbar. Nicht-zufällige Merkmale: **T-Kreuzung = Verdeckung**, **Y-/Pfeil-Kreuzung = Körperecke**. (F. 45)',
            },
            {
              term: 'Globaler Vorrang (Navon)',
              text: '**Navon (1977):** grosse Buchstaben aus kleinen; **Globales schneller als Lokales** – stellt eine strikte Abfolge lokal → global infrage. (F. 46) [Web]',
            },
          ],
        },
        { t: 'widget', w: 'gestalt' },
        { t: 'figure', fig: 'gestalt' },
        {
          t: 'list',
          title: 'Neuere Gruppierungsprinzipien (F. 37)',
          items: ['**Zeitliche Synchronizität** (Palmer & Levitin)', '**Gemeinsame Region** (Palmer, 1992)', '**Verbundenheit** (Palmer & Rock, 1994)'],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: '**Bindungsproblem** = Merkmale **verschiedener Dimensionen** verbinden (Farbe + Orientierung) – nicht Linie A mit Linie B.',
        },
      ],
    },
    {
      id: 'objekterkennung',
      title: 'C: Objekterkennung',
      blocks: [
        { t: 'p', text: 'Abgleich des **organisierten Inputs** mit **gespeicherten Repräsentationen**. (F. 50) Drei Ansätze (F. 51):' },
        {
          t: 'compare',
          items: [
            {
              title: '1 Schablonenabgleich',
              sub: 'template matching (F. 52); (LB S. 34)',
              bullets: [
                'Reiz **als Ganzes** mit gespeicherten Schablonen vergleichen; beste Übereinstimmung gewinnt.',
                '**Problem:** kleine Abweichungen (Schrift, Grösse, Orientierung, Blickwinkel) zerstören die Übereinstimmung.',
                'Laut Folie für **prototypische Form** (Rotkehlchen) → individuelle Entitäten. (F. 68)',
              ],
            },
            {
              title: '2 Merkmalsanalyse',
              sub: 'feature matching (F. 66–68)',
              bullets: [
                '**Gibson (1969):** Buchstaben = Kombination definierender Merkmale (gerade/gekrümmte Linien, Überschneidung, Redundanz, Diskontinuität). (LB S. 35–36)',
                '**Pandämonium** (Selfridge, 1959).',
                'Laut Folie für **keine prototypische Form** (Emu) → Kategorien. (F. 68)',
              ],
            },
            {
              title: '3 Komponentiale Erkennung',
              sub: 'recognition by components; Biederman 1987 (F. 69–76)',
              bullets: [
                'Objekt = **Geone** (Biederman: **36**, z. B. Zylinder, Quader) + ihre **Konfiguration** = strukturelle Beschreibung.',
                'Gleiche Teile in falscher Anordnung werden **nicht** erkannt. (F. 69); (LB S. 37)',
              ],
            },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Bild-Dämonen', text: 'registrieren das Bild.' },
            { title: 'Merkmals-Dämonen', text: 'melden einzelne Merkmale.' },
            { title: 'Kognitive Dämonen', text: '«schreien» je nach **Merkmalsübereinstimmung** unterschiedlich laut.' },
            { title: 'Entscheidungs-Dämon', text: 'wählt den **lautesten**. (F. 67)' },
          ],
        },
        {
          t: 'study',
          title: 'Fingerabdruck-Expertise',
          source: 'Thompson & Tangen (2014) (F. 53–55)',
          method:
            'AFIS liefert Kandidatenliste, Experten entscheiden. Design: Expertise (between) × Trial type (Match / ähnlicher / unähnlicher Nicht-Match) × Deadline 60 s («Kopf») vs. 2 s («Bauch»).',
          result:
            'Experten auch unter Zeitdruck gut; **bessere Sensitivität** und **konservativeres Kriterium** (mehr «no match», mehr Misses). Laien scheitern v. a. an **ähnlichen Nicht-Matches**.',
          takeaway: 'Sensitivität und Kriterium sind **unabhängig**: Experten sind besser **und** vorsichtiger.',
        },
        {
          t: 'study',
          title: 'Kontext beeinflusst Experten',
          source: 'Dror, Charlton & Péron (2006) (F. 64–65)',
          method: 'Experten erhalten ein früher **selbst als «match»** beurteiltes Paar mit der Falschinfo, es sei der **FBI-Fehlmatch** (Madrid-Bombenleger).',
          result: 'Die meisten ändern ihr Urteil zu «no match» oder «can’t decide».',
          takeaway: 'Kontextinformation wirkt **top-down** – sogar auf Expertenurteile.',
        },
        { t: 'figure', fig: 'biederman' },
        {
          t: 'list',
          title: 'Ablauf der komponentialen Erkennung (bottom-up, F. 70)',
          items: [
            '**Kanten-Extraktion** (Ergebnis: Linienzeichnung)',
            'Entdecken **nicht-zufälliger Merkmale** (z. B. zwei parallele Kanten) + **Parsing an konkaven Regionen**',
            '**Bestimmung der Komponenten** (z. B. Zylinder)',
            '**Vergleich** der Anordnung mit der Objektrepräsentation (z. B. Bogen seitlich an Zylinder)',
            '**Identifikation** (z. B. Tasse)',
          ],
        },
        {
          t: 'table',
          head: ['Befund', 'Studie', 'Zahlen'],
          rows: [
            ['Wenige Komponenten genügen', 'Biederman, Ju & Clapper (1985) (F. 72–73)', 'Flugzeug: Fehler **21 %** bei 3, **8 %** bei 4 Komponenten'],
            ['Strichzeichnung ≈ Farbfoto', 'Biederman & Ju (1988) (F. 75); (LB S. 38)', 'ab **65 ms** so gut wie Farbfotos'],
            [
              'Fehlende **Teile von Komponenten** schaden mehr als fehlende **ganze Komponenten**',
              'Biederman (F. 76); (LB S. 38–40)',
              'bei 65 ms ca. **36 vs. 23 %** Fehler; bei **200 ms** angeglichen',
            ],
            ['**Grenze:** natürliche Szenen', 'Sanocki et al. (1998) (F. 89–90)', 'Kantenbilder **mit Hintergrund** nur ca. **41 %** korrekt (ohne ca. 70 %; Farbfotos ca. 90 %)'],
          ],
          caption: 'Belege und Grenze der Geon-Theorie. Fazit Sanocki: In natürlichen Szenen braucht es **Farbe/Oberfläche**.',
        },
        { t: 'widget', w: 'erkennung-sort' },
        {
          t: 'defs',
          items: [
            { term: 'Schablonenabgleich', text: 'Reiz **als Ganzes** mit gespeicherten Schablonen vergleichen; scheitert an kleinen Abweichungen (Schrift, Grösse, Orientierung, Blickwinkel). (F. 52); (LB S. 34)' },
            { term: 'Merkmalsanalyse', text: 'Erkennung über **definierende Merkmale** (Gibson 1969: gerade/gekrümmte Linien, Überschneidung …); Modell: Pandämonium. (F. 66–68); (LB S. 35–36)' },
            {
              term: 'Pandämonium',
              text: '**Selfridge (1959):** Bild-Dämonen → Merkmals-Dämonen → kognitive Dämonen «schreien» je nach Merkmalsübereinstimmung → **Entscheidungs-Dämon** wählt den lautesten. (F. 67)',
            },
            { term: 'Geon', text: '«geometric icon»: Grundkomponente in **Biedermans** Theorie (36, z. B. Zylinder, Quader). Objekt = Geone + **Konfiguration**. (F. 69); (LB S. 37)' },
          ],
        },
      ],
    },
    {
      id: 'sdt',
      title: 'Exkurs: Signalentdeckungstheorie (SDT)',
      blocks: [
        {
          t: 'p',
          text: 'Ja/Nein-Urteile unter Unsicherheit: «Signal» vom «Rauschen» trennen. (F. 56) Zwei Verteilungen (**noise** vs. **signal + noise**) über «wie sehr sieht es nach Match aus»; das **Antwortkriterium** (senkrechte Linie) teilt in «match»/«no match». (F. 57)',
        },
        {
          t: 'table',
          head: ['', 'sagt «match»', 'sagt «no match»'],
          rows: [
            ['**Match**', '**Hit** ✓', '**Miss** ✗'],
            ['**kein Match**', '**False Alarm** ✗', '**TNEG** ✓ (korrekte Zurückweisung)'],
          ],
          caption: 'Vierfeldertafel der SDT (F. 58)',
        },
        { t: 'widget', w: 'sdt' },
        {
          t: 'defs',
          items: [
            { term: 'Sensitivität d′', text: '**Abstand der Verteilungen**; gross → wenig Verwechslungen, **unabhängig vom Kriterium** (d′ ≈ 0 / 1 / 4). (F. 59)' },
            {
              term: 'Antwortkriterium',
              text: '**Liberal** (links) → viele Hits **und** viele FA; **konservativ** (rechts) → wenige FA, **mehr Misses**. Ein Kriteriumswechsel verschiebt die **Fehlerarten**, nicht d′. (F. 60)',
            },
            {
              term: 'ROC-Kurve',
              text: 'x = **Falschalarmrate**, y = **Trefferrate**. Diagonale = Zufall; stärker gebogen = höheres d′. Kriteriumswechsel verschiebt den Punkt **entlang derselben Kurve** (konservativ unten links, liberal oben rechts). (F. 61)',
            },
          ],
        },
        { t: 'figure', fig: 'roc' },
        {
          t: 'p',
          text: '**Zahlenbeispiel (F. 62):** Perfekte Sensitivität = 50 Hits, 0 Miss, 0 FA, 50 TNEG. Bei geringerer Sensitivität: liberal 50/0/50/0, neutral je 25, konservativ 0/50/0/50 (Hit/Miss/FA/TNEG).',
        },
        {
          t: 'formula',
          name: 'Sensitivität (Ergänzung, nicht auf den Folien)',
          formula: 'd′ = z(H) − z(FA)',
          legend: ['*z(H)*, *z(FA)*: z-transformierte Treffer- bzw. Falschalarmrate'],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: ['**Konservativ = mehr Misses**, nicht mehr Falschalarme.', 'Sensitivität und Kriterium sind **unabhängig**.'],
        },
      ],
    },
    {
      id: 'entry',
      title: 'Entry-level-Kategorie',
      blocks: [
        {
          t: 'p',
          text: 'Hierarchie: **superordinate** (Tier) – **basic** (Vogel/Hund) – **subordinate** (Spatz/Dalmatiner). (F. 77–79)',
        },
        { t: 'widget', w: 'entry-level' },
        {
          t: 'defs',
          items: [
            {
              term: 'Entry level (Basisebene)',
              text: '**Rosch et al. (1976)**, Verifikationsaufgabe: Die **Basisebene** wird am schnellsten verifiziert (ca. **535 ms** vs. 590 superordinate, 660 subordinate) → Einstiegsebene der Erkennung. (F. 77–79)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: '**Entry level = Basisebene**, nicht die spezifischste Ebene – ausser bei Experten (**Tanaka & Taylor, 1991**: subordinate so schnell wie basic).',
        },
      ],
    },
    {
      id: 'topdown',
      title: 'Kontext und Erwartungen (top-down)',
      blocks: [
        { t: 'p', text: 'Wahrnehmung ist **kein Einweg-Fluss**: top-down wirkt auf Merkmale, Gruppierung und Erkennung. (F. 85); (LB S. 48)' },
        {
          t: 'study',
          title: 'Szenenkontext',
          source: 'Biederman, Glass & Stacy (1973) (F. 87–88)',
          method: 'Objekte in **zusammenhängenden** vs. **durcheinandergewürfelten** Szenen beurteilen.',
          result: 'In zusammenhängenden Szenen **schneller** beurteilt; am stärksten bei «möglich – nein».',
          takeaway: 'Szenenkontext erleichtert die Erkennung (top-down). **Abweichung:** Das Lehrbuch nennt Identifikationsgenauigkeit (LB S. 48–49), die Folie zeigt RTs → **Folienvariante gilt**.',
        },
        {
          t: 'study',
          title: 'Wer eine Pistole hält …',
          source: 'Witt & Brockmole (2012) (F. 91–92)',
          method: 'Personen halten eine (Spielzeug-)**Pistole** oder einen **Ball** und entscheiden, ob eine Person eine Pistole hält.',
          result: 'Mit Pistole eher «Pistole vorhanden» (**B″ ca. −0.11** vs. **+0.27** mit Ball) → **liberaleres Kriterium**.',
          takeaway: 'Offene Frage wie bei Proffitt: Wird die **Wahrnehmung** oder nur das **Urteil** verändert?',
        },
        { t: 'callout', tone: 'notiz', title: 'Überleitung (F. 93)', text: 'Zu viel Information → wir brauchen **Aufmerksamkeit** (Kapitel 4).' },
      ],
    },
  ],
};
