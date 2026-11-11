import type { Chapter } from '../model';

/* ═════════════════════════════ 7 Schulen um 1900 · Block 7 ═════════════════════════════ */

export const kap7: Chapter = {
  id: 'schulen',
  nr: 7,
  short: 'Schulen um 1900',
  title: 'Schulen um die Jahrhundertwende',
  period: 'ca. 1890–1940',
  epochs: '5 → 6',
  block: 'Block 7',
  color: '#0d9488',
  kern: [
    '**Münsterberg** = Pionier der Angewandten Psychologie (**Psychotechnik**, 1914).',
    '**Würzburger Schule** (Külpe, Ach, Bühler) erforscht das Denken – öffnet die Psychologie für **phänomenologische Richtungen**; Wundt nennt die Versuche «**Scheinexperimente**». (B7/F. 46)',
    '**Gestaltpsychologie** und **Lewin** betonen **Ganzheit** und **Person-Umwelt-Interaktion**: V = f(P, U).',
  ],
  sections: [
    {
      id: 'schulen',
      title: 'Was sind «Schulen»?',
      blocks: [
        {
          t: 'p',
          text: 'Schulen = **Wissenschaftlergemeinschaften** («scientific communities»), meist **nebeneinander statt nacheinander**; Erfolge werden gern einer zentralen Figur zugeschrieben (Leitfrage). Die Exkurs-Folien zum ZHAW-Departement (B7/F. 34–36) sind **nicht prüfungsrelevant**.',
        },
      ],
    },
    {
      id: 'muensterberg',
      title: 'Angewandte Psychologie – Hugo Münsterberg',
      blocks: [
        {
          t: 'person',
          name: 'Hugo Münsterberg',
          dates: '1863–1916',
          tag: 'Pionier der Angewandten Psychologie',
          items: [
            'Geboren 1863 in Danzig; Philosophie, Psychologie, Medizin; **Schüler von Wundt**; lehrte an der **Harvard University**. Anfang 20. Jh. war Anwendung psychologischer Erkenntnisse in der Schweiz und in Deutschland noch nahezu unbekannt → gilt als grosser Pionier der Angewandten Psychologie. (B7/F. 32 + Notiz)',
            '*Grundzüge der Psychotechnik* (**1914**): **Psychotechnik** = frühere Bezeichnung der angewandten Psychologie; vom Grundlagenwissen zur Praxis (Lehrer, Anwalt, Arzt, Kaufmann …), verhält sich zur Psychologie **wie Ingenieurwissenschaft zur Physik**. Begriff ursprünglich von **William Stern (1903)**. (B7/F. 33; LB S. 392)',
          ],
        },
      ],
    },
    {
      id: 'wuerzburg',
      title: 'Würzburger Schule – Oswald Külpe',
      blocks: [
        {
          t: 'person',
          name: 'Oswald Külpe',
          dates: '1862–1915',
          tag: 'Würzburger Schule · Denkpsychologie',
          items: [
            '**Schüler Wundts**, ab **1894** Lehrstuhl in Würzburg (LB S. 222); kritisierte das enge Methodenrepertoire der Leipziger Schule (Denken kaum erforschbar).',
            '**Methode:** systematische, **experimentelle Selbstbeobachtung bei Denkprozessen** – experimentelle Herbeiführung psychischer Vorgänge und genaue Schilderung der Erlebnisse (Versuchsleiter stellt Aufgaben und protokolliert). (B7/F. 37)',
            '**Experiment:** Projektion von Figuren mit variierender Grösse/Helligkeit, Darbietungszeiten und Intervallen → Denkprozesse prägen die Wahrnehmung: **Keine Anschauung ohne Denken.** (B7/F. 38; LB S. 222 f.)',
          ],
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Denken ohne Anschauung',
              text: 'Ja: Viele Gedanken sind **unanschaulich** (nicht über die Sinne vermittelt); nicht alle Urteile sind regelhaft hergeleitet (vieles unreflektiert, automatisch); gesonderte Einschätzungen des eigenen Denkens = **«Bewusstseinslagen»** (heute: Metakognition). Beispielaufgabe: «Von allen Seiten wohlwollend behandelt und selbst wohlwollend, müsste ein Genie furchtbar leiden.» (B7/F. 38–40; LB S. 223)',
            },
            {
              term: 'Determinierende Tendenz',
              text: '**Narziss Ach**: zielgerichtetes Denken – die **Aufgabe steuert den Denkablauf**. (B7/F. 40)',
            },
            {
              term: 'Aha-Erlebnis',
              text: '**Karl Bühler**: plötzliche, mühelose **Einsicht in die Lösung** (oft nach einer Phase der Ratlosigkeit). (B7/F. 40)',
            },
          ],
        },
      ],
    },
    {
      id: 'kontroverse',
      title: 'Kontroverse Würzburg vs. Leipzig',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Wundt (1907)',
              sub: 'Leipzig',
              bullets: [
                'Würzburger Versuche seien **«Scheinexperimente»**.',
                'Ein Experiment verlange: **genaue Bestimmung der Versuchsbedingungen** · **Erfassung der Probandenreaktionen** · **beliebige Wiederholbarkeit**.',
              ],
            },
            {
              title: 'Bühler (1908)',
              sub: 'Würzburg',
              bullets: ['Verteidigt: **Aufgabenstellung lenkt Denken und Aufmerksamkeit**.', 'Erlebnisse sind **nicht beliebig**.', 'Aussagen sind **vergleichbar**.'],
            },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          text: 'Heutige Forschung steht **methodisch näher bei Wundts Kriterien** (Standardisierung, Replizierbarkeit) [Ergänzung]; die Würzburger Schule verschaffte aber den **phänomenologischen Richtungen** Eingang in die wissenschaftliche Psychologie. (B7/F. 37, 41, 46)',
        },
      ],
    },
    {
      id: 'gestalt',
      title: 'Kognitivismus I – Gestaltpsychologie',
      blocks: [
        {
          t: 'list',
          items: [
            '**Max Wertheimer** (1880–1943), **Wolfgang Köhler** (1887–1967): Forschung zu Gestaltgesetzen **ab 1910** (Blütezeit 1920er, Berlin und Frankfurt). (B7/F. 42; LB S. 343)',
            '**Das Ganze ist mehr als die Summe seiner Teile** («mehr als eine Und-Summe»): Elemente erhalten ihre Rolle erst aus der **Beziehung zueinander**. (B7/F. 42; LB S. 344)',
            'Suche nach der **guten Gestalt** (einfach, geschlossen, gleichmässig/Prägnanz); ähnliche Tendenzen im Denken, v. a. beim Problemlösen. (B7/F. 42)',
          ],
        },
        { t: 'figure', fig: 'gestalt' },
        { t: 'widget', w: 'gestalt' },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Melodie-Beispiel (Leitfrage)',
          text: 'Transponiert man eine Melodie, sind **alle Töne anders**, die Melodie bleibt erkennbar; zerlegt man sie in Einzeltöne, geht die Gestalt verloren → **Zerlegung in Elemente (wie bei Wundt) verfehlt das Wesentliche**.',
        },
      ],
    },
    {
      id: 'lewin',
      title: 'Kognitivismus II – Kurt Lewin',
      blocks: [
        {
          t: 'person',
          name: 'Kurt Lewin',
          dates: '1890–1947',
          tag: 'kognitive Lerntheorie · Feldtheorie',
          items: [
            '1890 in Mogilno (Polen) geboren, jüdisches Elternhaus. Untersuchte die **Interaktion zwischen Individuum und Umwelt** bzw. zwischen Individuen; viel zur **Sozialpsychologie** beigetragen. (B7/F. 43 + Notiz)',
            '**Ganzheitliche Organisation des Handelns – Entstehung einer Willenshandlung:** P: Motiv («Kampf der Motive») → Entschluss/Vornahme → Zielvorstellung (**innere Spannung**, erst gelöst, wenn die Handlung abgeschlossen ist); U: situative Auslöser. Beispiel: Experiment mit Garnknäuel (**Ovsiankina, 1928**: unterbrochene Aufgaben werden wieder aufgenommen). (B7/F. 43; LB S. 341 f.)',
            '**Feldtheorie:** Der **Lebensraum** («life space») besteht aus **Regionen**, **Grenzen**, als **Vektoren** darzustellenden **Kräften** (Stärke, Richtung) sowie dem **Aufforderungscharakter** (engl. valence) der Regionen und den Bedürfnissen der Person; dargestellt mit mathematischer **Topologie**. Weitere Themen: Minderheiten, Demokratisierung (Führungsstile), Gruppendynamik. (B7/F. 44; LB S. 342 f.)',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Lewin-Formel',
          text: '**V = f(P, U)** – Verhalten V ist eine Funktion f der **Person** P und der **Umwelt** U. (B7/F. 43)',
        },
        { t: 'widget', w: 'lewin' },
      ],
    },
  ],
};

/* ═════════════════════════════ 8 Psychiatriegeschichte · Block 8 ═════════════════════════════ */

export const kap8: Chapter = {
  id: 'psychiatrie',
  nr: 8,
  short: 'Psychiatrie',
  title: 'Psychiatriegeschichte',
  period: 'Längsschnitt Antike bis 20. Jh.',
  epochs: 'Längsschnitt',
  block: 'Block 8',
  color: '#be185d',
  kern: [
    '**Humoralpathologie** von der Antike bis in die Neuzeit. (B8/F. 64)',
    'Psychiatrie entsteht aus der **Not überforderter Familien**; Kranke wollte man ausserhalb haben.',
    'Ab **1790 moralisches Regime** (Pinel); im 19./20. Jh. Zwangsmassnahmen, Zwangssterilisation, Lobotomie, EKT – **Zwangsmassnahmen zur «Erziehung» erwiesen sich als verheerend**.',
  ],
  sections: [
    {
      id: 'leitfrage',
      title: 'Leitfrage',
      blocks: [
        {
          t: 'p',
          text: '*Wie war früher der Umgang mit psychisch kranken Menschen?* Quelle der Folien v. a. **Brückner (2023)**, *Kurze Geschichte der Psychiatrie*; im LB Kap. 5.3.5/5.3.6 und 9.3.3. (B8/F. 50)',
        },
        { t: 'widget', w: 'psychiatrie' },
      ],
    },
    {
      id: 'antike-ma',
      title: 'Antike und Mittelalter',
      blocks: [
        {
          t: 'list',
          title: 'Antike · ca. 800 v.d.Z.–500 n.d.Z.',
          items: [
            'Weniger «Individualität» und «Persönlichkeit» wichtig – **kollektive Werte** (soziale Rangfolge, Tugendhaftigkeit). Krankheiten im Kopf oder Fieber im Herzen: **Heilpflanzen**, Früchte, Öl, Honig; übernatürliche Methoden: **Amulette, Gebete, Rituale**. (B8/F. 51)',
            '**Hippokratische Texte** (Corpus Hippocraticum; Hippokrates ca. 460–370 v.d.Z.): «Über die heilige Krankheit» (= **Fallsucht/Epilepsie**), **Humoralpathologie** (Vier-Säfte-Lehre; Fall **Timokrates**: Raserei/Manie durch schwarze Galle, Abführmittel). (B8/F. 52 + Notiz)',
            '**Galen** (ca. 129–199 n.d.Z.): Denken im **Gehirn**, Wille im **Herzen**, Begehren in der **Leber**; Austausch von Leib und Seele über das feine Fluidum **pneuma**; **Theorie der Halluzinationen**: verdampfende, heisse Gallensäfte steigen ins Hirn/Auge. (B8/F. 52)',
          ],
        },
        {
          t: 'list',
          title: 'Mittelalter · 500–1500 n.d.Z.',
          items: [
            'Christliche Werte → neue Vorstellungen über Gesund- und Kranksein. Krankheit: **humoralpathologisch** oder **Strafe Gottes**. Psychische Grenzerfahrungen: Heiligenerscheinungen, Visionen. (B8/F. 53)',
            '**Spätmittelalter (ca. 1250–1500):** christliche **Hospitäler** mit ersten Abteilungen für «Wahnsinnige»; Pflege meist **innerhalb der Familie**. (B8/F. 53)',
            '**Behandlung:** Hildegard von Bingen (Kräuter, Spruchformeln, Mütze zur Erwärmung des Kopfes; Epilepsie-Mischung aus Maulwurfsblut u. a.); Angehörige, **Barbier oder Bader** (Wunden säubern, Aderlässe, Kräuter, Amulette); extreme Fälle: kirchliche Armenspitäler, **Holzkäfige** oder **Verbannung** (man wollte die Kranken ausserhalb, nicht in der Nähe haben). (B8/F. 55 + Notiz)',
            '**Hospital St. Mary of Bethlehem** (London, «Bedlam»): **1403** 9 Plätze für Unzurechnungsfähige. (LB S. 153)',
            '**Fall Margery Kempe** (geb. ca. 1373, Norfolk): Weinkrämpfe, Körperwinden – als Epilepsie vermutet, verspottet und ausgegrenzt. (B8/F. 54)',
          ],
        },
      ],
    },
    {
      id: 'neuzeit',
      title: 'Neuzeit und 19. Jahrhundert',
      blocks: [
        {
          t: 'list',
          title: 'Neuzeit · Übergang 1450–1500, ab 1500',
          items: [
            '**Hexenverfolgungen**; Melancholie; Sektionsunterricht durch **Andreas Vesalius** (1515–1564).',
            'Unterteilung der Psyche: **Geistseele** (Vernunft, Urteilskraft, Ethik, freier Wille) vs. **Körperseele** (Sensorik, Bewegung, Wahrnehmung, Verstand, Gedächtnis); Behandlung: Saunatherapie, Diäten, Lebensführung, Schröpfen, Abführen, Aderlass, pflanzliche Drogen. (B8/F. 56)',
            '**17./18. Jh.:** Erklärung von «Manie» und «Melancholie»; chemische Substanzen, invasive Methoden. **18. Jh.: Tollhäuser** (z. B. Bayreuth: Bezahlung, keine ärztliche Versorgung; Männer Marmorfabrik, Frauen Spinnerei). (B8/F. 57)',
            '**Ab 1790** wird die soziale Lage psychisch Kranker verstärkt diskutiert → in Frankreich und England **«moralisches Regime»**: Verständnis, Freundlichkeit, geduldige Pflege, Verzicht auf entbehrliche Zwangsmassnahmen. Verfechter: **Philippe Pinel** (1745–1826; paternalistische Milieutherapie; Salpêtrière Paris; Bild «Pinel befreit die Irren von ihren Ketten», 1876). (B8/F. 57; LB S. 154 f.)',
          ],
        },
        {
          t: 'list',
          title: '19. Jahrhundert',
          items: [
            'Rechtlich: **Zwangseinweisungen** mehrheitlich durch Gerichtsentscheid. **Drastische Zunahme** an Institutionen und Patient·innen.',
            'Behandlung: «psychische Medizin» (Digitalis, Opium, Belladonna), warme/kalte Bäder, Diäten, Aderlässe, Einläufe, moralisches Regime; invasive, schmerzhafte Methoden (Krankheitskonzept **Überreiztheit/Unterreiztheit**): Isolierung, **Zwangsstuhl («Tranquillizer»)**, Maulkorb, Leinensack, **Drehbett**. (B8/F. 58)',
            '**1870–1890:** überdauernde neurowissenschaftliche Erfolge, Forschung an Universitäten – aber **fast ganz von der Anstaltspraxis abgekoppelt** · ab 1870 erste Leitfäden und Fachbücher für Pflegepersonal · **1895 Proteste** ehemaliger Anstaltsinsassen · **Zwangssterilisationen ab ca. 1880er Jahren** (Eugen Bleuler, Burghölzli 1909). (B8/F. 59)',
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          title: 'Lektüre: «Nothschrei eines Magnetisch-Vergifteten» (1852)',
          text: 'Von **Friedrich Krauss** (1791–1868): über 1000 Seiten Selbstzeugnis – fühlte sich durch «magnetische» Einflüsse verfolgt (Theorie des **animalischen Magnetismus nach Mesmer**), hörte Stimmen; empfand sich **nie als «geisteskrank»**; einzigartiges Dokument der Erfahrung des Wahnsinns. (B8 Lektüre, Brückner 2023)',
        },
      ],
    },
    {
      id: 'jh20',
      title: '20. Jahrhundert',
      blocks: [
        {
          t: 'list',
          items: [
            '**1. Weltkrieg (1914–1918):** Pflegekräfte und Ärzte im Krieg; «Kriegsneurotiker»/«Kriegszitterer» (Max Nonne, 1917: Hypnose); ca. **70’000 Tote** in deutschen Anstalten. (B8/F. 59)',
            '**Lobotomie (1935):** operative Zerstörung von Hirnmasse; Burghölzli 1946–1959: 162 Operierte. (B8/F. 61)',
            '**Elektrokrampftherapie (EKT, 1938):** kurze Stromimpulse; 1940 breite Anwendung ohne Indikation, Aufklärung, Anästhesie; **1960 Verdrängung durch Psychopharmaka**; **2000 «Renaissance»** – heute modifiziert bei schweren, therapieresistenten Depressionen (Indikationen: Depression, manische Episoden, Schizophrenie; Nebenwirkungen: Kopfschmerz, Übelkeit, Kurzzeitgedächtnis). (B8/F. 61–62)',
            '**Nachkriegszeit:** **Deinstitutionalisierung**, Spezialisierung (Alters-, Kinder- und Jugendpsychiatrie, Suchtklinik), **Sozialpsychiatrie** (dezentrale, partizipative Versorgung), **Psychopharmaka ab den 1950er Jahren**. (B8/F. 63)',
          ],
        },
      ],
    },
  ],
};

/* ═════════════════════════════ 9 Tiefenpsychologie · Block 9 ═════════════════════════════ */

export const kap9: Chapter = {
  id: 'tiefen',
  nr: 9,
  short: 'Tiefenpsychologie',
  title: 'Tiefenpsychologie (Teil 1): Freud und Adler',
  period: 'ca. 1880–1939',
  epochs: '6',
  block: 'Block 9',
  color: '#9333ea',
  kern: [
    'Freud ist **nicht der Entdecker des Unbewussten** – Vorläufer: Fechner, von Hartmann, Nietzsche.',
    '**Freud:** Unbewusstes, **Strukturmodell** (Es/Ich/Über-Ich), Abwehr, Sexualität (Libido) als Triebenergie. (B9/F. 77–80)',
    '**Adler** spaltet sich 1911 ab – **Individualpsychologie**: Minderwertigkeit, Kompensation, Gemeinschaftsgefühl. (B9/F. 83–84)',
  ],
  sections: [
    {
      id: 'vorlaeufer',
      title: 'Vorläufer',
      blocks: [
        {
          t: 'p',
          text: '**Fechner** (Begriff des Unbewussten), **Eduard von Hartmann** (Philosoph des Unbewussten), **Friedrich Nietzsche** (Skepsis an einer Übermacht des Verstandes; «Was weiss der Mensch eigentlich von sich selbst!», 1873). → **Freud ist nicht der Entdecker des Unbewussten.** (B9/F. 70–71)',
        },
      ],
    },
    {
      id: 'freud',
      title: 'Sigmund Freud – Psychoanalyse',
      blocks: [
        {
          t: 'person',
          name: 'Sigmund Freud',
          dates: '1856–1939',
          tag: 'Psychoanalyse',
          items: [
            'Humanistisches Gymnasium, Medizinstudium, Promotion und Habilitation in **Neuropathologie**; geprägt durch die Laborforschung seines Lehrers **Ernst Wilhelm von Brücke**; humanistische Bildungseinflüsse (Belletristik, Philosophie, Archäologie); Kontext: Sexualität und Erotik in Kunst und Gesellschaft des frühen 20. Jh. (Klimt, Kokoschka, Schiele). (B9/F. 72–73)',
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Charcot', text: '**Jean Martin Charcot** (1825–1893, Salpêtrière Paris) erprobt **Hypnose** bei Hysterie/Lähmungen.' },
            {
              title: 'Anna O.',
              text: 'Patientin von **Josef Breuer** (1842–1925): psychogene Absenzen, Lähmungen, Wahrnehmungsstörungen, Stimmungsschwankungen.',
            },
            { title: 'Redekur', text: '**«talking cure»** → Begründung des **psychoanalytischen Settings** (Couch, freies Erzählen statt Somnambulie).' },
          ],
        },
        { t: 'p', text: 'Entwicklung des psychoanalytischen Settings. (B9/F. 75; LB S. 296–298)' },
      ],
    },
    {
      id: 'struktur',
      title: 'Strukturmodell und Abwehr',
      blocks: [
        { t: 'widget', w: 'instanzen' },
        {
          t: 'defs',
          items: [
            { term: 'Es', text: 'Das **Unbewusste, Triebhafte**, Unkontrollierte; **Lustprinzip**. (B9/F. 77; LB S. 325–328)' },
            { term: 'Ich', text: 'Bewusste Instanz des Denkens und Handelns; **Realitätsprinzip**; **vermittelt** zwischen Es und Über-Ich (und Realität).' },
            { term: 'Über-Ich', text: 'Instanz des **Gewissens** und der Kontrolle, verinnerlichte Normen (entsteht in der **Ödipus-Situation**).' },
            {
              term: 'Abwehr / Verdrängung',
              text: 'Abwehr unerlaubter Triebwünsche: **Reaktionsbildung** (Umkehr, z. B. Liebe → Hass), **Projektion** (eigene Wünsche Anderen zuschreiben), **Intellektualisierung**, **Sublimierung** u. a. (B9/F. 77; LB S. 328)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'zitat',
          title: 'Freud',
          text: '**«Wo Es war, soll Ich werden.»** Das Ich als «armes Ding … unter dreierlei Dienstbarkeiten»: **Aussenwelt**, **Libido des Es**, **Strenge des Über-Ichs**. (B9/F. 77–78)',
        },
      ],
    },
    {
      id: 'entwicklung',
      title: 'Fallbeispiel und weitere Entwicklung',
      blocks: [
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Fallbeispiel «der kleine Hans» (1909)',
          text: '5-jähriger Junge mit **Pferdephobie**; Freuds Deutung: Mutter-Sohn-Bindung, Vater-Sohn-Konflikt, Kastrationsangst, Todeswunsch (**Pferd steht für den Vater**) → **Ödipuskomplex**. (B9/F. 79; LB S. 327)',
        },
        {
          t: 'steps',
          items: [
            { title: '1902', text: 'Psychologische **Mittwoch-Gesellschaft**' },
            { title: '1908', text: 'Wiener Psychoanalytische Vereinigung' },
            { title: '1910', text: '**Internationale** Psychoanalytische Vereinigung (IPV)' },
          ],
        },
        {
          t: 'list',
          items: [
            'Bedingungsloses Bekenntnis zur **Sexualität als einziger Triebenergie (Libido)** → **Abspaltungen** u. a. **Adler** und **C. G. Jung**. Später stellt Freud dem Sexualtrieb den **Todestrieb** gegenüber (**1920**). **1939** in London gestorben. (B9/F. 80; LB S. 329)',
            'Briefwechsel **Einstein–Freud «Warum Krieg?»** (**1932**): Einstein fragt u. a., ob es einen Weg gibt, die Menschen vom Verhängnis des Krieges zu befreien, und ob man die psychische Entwicklung gegen Psychosen des Hasses widerstandsfähiger machen kann. (B9/F. 81)',
          ],
        },
      ],
    },
    {
      id: 'hysterie',
      title: 'Exkurs Hysterie',
      blocks: [
        {
          t: 'p',
          text: 'Veralteter Begriff (griech. **hystera** = Gebärmutter). Galt lange als weibliches Störungsbild (Weinkrämpfe, Schreien, Ohnmacht, Sprech-, Lähmungsstörungen); Neurose der Männer: Hypochondrie, später Neurasthenie. (B9/F. 76)',
        },
        {
          t: 'table',
          head: ['Antike (Hippokrates)', 'Mittelalter (Sydenham)', 'Neuzeit (u. a. Charcot, Freud, Janet)'],
          rows: [
            [
              'somatisch; **umherschweifender Uterus**, sexuelles Unbefriedigtsein; weibliches Problem',
              'somatisch (weiblich); verhext (weiblich); **nervlich bedingt** (Sydenham); männliche Ausprägung = hypochondrisch, weiblich = hysterisch',
              'multiple somatische Symptome; quasi neurologisch (hyst. Anfall), somatische Ursache; **Konversion** (Freud); **Dissoziation** (Janet); psychogen, ödipal; **keine Geschlechtszuordnung**',
            ],
          ],
          caption: 'Moderne Einteilung: somatoforme Störungen (Dissoziation), histrionische Persönlichkeitsstörung. (B9/F. 76)',
        },
      ],
    },
    {
      id: 'adler',
      title: 'Alfred Adler – Individualpsychologie',
      blocks: [
        {
          t: 'person',
          name: 'Alfred Adler',
          dates: '1870–1937',
          tag: 'Individualpsychologie',
          items: [
            '1870 in einem Wiener Vorort geboren, wenig behütete Kindheit; Kindheitserfahrungen und eher untersetzte Gestalt (LB: Rachitis) werden mit seiner Lehre von der **Organminderwertigkeit** in Verbindung gebracht. 1888 Medizinstudium, Wehrdienst, eigene Praxis; **1902** Einladung in Freuds Mittwoch-Gesellschaft, **1910 Präsident** der Wiener Vereinigung für Psychoanalyse. (B9/F. 83; LB S. 333)',
            '**1911** Gründung des **Vereins für freie Psychoanalyse**, 2 Jahre später: Verein für Vergleichende Individualpsychologie. Grund: **bestritt die zentrale Rolle der Sexualität**. (B9/F. 84; LB S. 332)',
            '**Theorie:** Gelingen des **Lebensplans** · **Lebensstil** (Grundmuster und -vorstellungen, sich der Welt zu stellen) · Hindernisse wie **Minderwertigkeitserfahrungen** · **Kompensation** (positiver vs. negativer Prozess; **Überkompensation** → neurotische Symptome) · **Gemeinschaftsgefühl** als Grenze des Machtstrebens. (B9/F. 84; LB S. 333)',
            'Orthodoxe Psychoanalyse konnte mit der neuen Richtung nichts anfangen; eigenes therapeutisches Setting; 1932 Gastprofessur USA, 1936 Emigration, **1937 in Aberdeen** (Schottland) gestorben. Menschenbild: «Der Mensch ist von Natur aus **nicht böse** … er **kann sich ändern**.» (B9/F. 85–87)',
          ],
        },
        { t: 'widget', w: 'adler' },
        {
          t: 'compare',
          items: [
            {
              title: 'Freud',
              sub: 'Psychoanalyse',
              text: '**Sexualität (Libido)** als einzige Triebenergie, später + **Todestrieb**; Strukturmodell, Abwehr; Mensch triebgesteuert.',
            },
            {
              title: 'Adler',
              sub: 'Individualpsychologie',
              text: '**Minderwertigkeit**, **Kompensation**, **Gemeinschaftsgefühl**, Lebensplan/-stil; Mensch nicht böse, kann sich ändern.',
            },
          ],
        },
      ],
    },
  ],
};
