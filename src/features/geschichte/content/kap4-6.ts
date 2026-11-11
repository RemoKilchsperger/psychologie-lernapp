import type { Chapter } from '../model';

/* ═════════════════════════════ 4 Frühe Neuzeit · Block 4 ═════════════════════════════ */

export const kap4: Chapter = {
  id: 'neuzeit',
  nr: 4,
  short: 'Frühe Neuzeit',
  title: 'Frühe Neuzeit: Rationalismus, Empirismus, Materialismus',
  period: '17./18. Jh.',
  epochs: '4',
  block: 'Block 4',
  color: '#0891b2',
  kern: [
    '**Rationalismus** (Descartes): Erkenntnis durch den Verstand – **deduktiv**; Dualismus res cogitans vs. res extensa.',
    '**Empirismus** (Bacon, Hume; Locke: tabula rasa): Erkenntnis durch Erfahrung – **induktiv**.',
    'Beide Verfahren haben Probleme: **Induktionsproblem** (Hume) → **Falsifikation** (Popper). Heute werden beide kombiniert (Kreislauf). (B4/F. 83)',
    '**Materialismus** (La Mettrie, 1748): «Der Mensch als Maschine» – auch die Seele hängt vom Körper ab.',
  ],
  sections: [
    {
      id: 'einbettung',
      title: 'Einbettung',
      blocks: [
        {
          t: 'p',
          text: 'Zeitalter der **Aufklärung** (1650–1800) · **1632** Galilei der Ketzerei angeklagt · **1789** Beginn der Französischen Revolution. Kant: «Habe Mut, dich deines eigenen Verstandes zu bedienen!» (B4/F. 66)',
        },
      ],
    },
    {
      id: 'descartes',
      title: 'Rationalismus – René Descartes',
      blocks: [
        {
          t: 'person',
          name: 'René Descartes',
          dates: '1596–1650',
          tag: 'Rationalismus · Dualismus',
          items: [
            '**Grundsätze:** Es existieren eine Körperwelt und eine Welt des Geistes; in der Welt des Geistes herrscht Vernunft mit logischer Ordnung, die sich in der Körperwelt spiegelt; Erkenntnis durch den **Verstand (deduktiv)**; sittliches Handeln gründet auf Vernunft (Werte). (B4/F. 67)',
            '**«Ich denke, also bin ich»:** radikaler Zweifel an allem (Sinne, Körper, Welt); selbst wenn ein Betrüger mich täuscht, bin ich, der zweifelt/denkt → das **Denken ist die einzige Gewissheit**. (B4/F. 70; LB S. 105)',
            '**Dualistisch:** **res cogitans** (geistige, denkende Substanz, nicht ausgedehnt) vs. **res extensa** (räumlich ausgedehnte Substanz / Körperwelt). (B4/F. 70; LB S. 106)',
            '**Mechanistisch:** **Reflexbogen** (Fuss zieht sich vom Feuer zurück, 1632) – der Körper ist ein Mechanismus, der Gesetzen folgt → deshalb den mechanistischen/materialistischen Vertretern zugerechnet (**aber Seele bleibt eigenständig!**). (B4/F. 70; LB S. 104 f.)',
          ],
        },
        { t: 'callout', tone: 'achtung', title: 'Folie ≠ Lehrbuch', text: 'LB S. 102 gibt **1596–1649** an; für die Prüfung gilt die Folie: **1596–1650**.' },
      ],
    },
    {
      id: 'empirismus',
      title: 'Empirismus – Francis Bacon und David Hume',
      blocks: [
        {
          t: 'p',
          text: '**Grundsätze:** Welt = Ansammlung von Tatsachen; Erkenntnis durch **Erfahrung mit den Sinnen**; Erfahrungen lassen sich verallgemeinern, ordnen, bearbeiten; Erfahrung ist **stückhaft**; es gibt keine (vorgegebene) Ordnung in der Körperwelt. (B4/F. 76)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Tabula rasa',
              text: '«Leeres Blatt»: Der Geist ist bei Geburt leer, alle Inhalte stammen aus Erfahrung, **keine angeborenen Ideen** (**John Locke, 1690**). (LB S. 114)',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Francis Bacon',
              sub: '1561–1626',
              bullets: [
                'Formale Logik sei weltfremd, **praktisches Wissen kommt aus Erfahrung**.',
                '**Verblendung der Wahrnehmung** (durch Kultur, Ideologie, Gewohnheit) → methodische Hilfe nötig.',
                'Empirische Methoden: **Gelegenheitsbeobachtung** vs. **planmässige Beobachtung** (systematische Beobachtung, Experiment). Beispiel: **Magdeburger Halbkugeln** (Guericke, 1657). (B4/F. 72–73; LB S. 101)',
              ],
            },
            {
              title: 'David Hume',
              sub: '1711–1776',
              bullets: [
                'Vorbild **Newton**; Erkenntnis nur aus beobachtbaren Tatsachen.',
                'Prinzipien der Ideenverbindung: **Ähnlichkeit** · **raum-zeitliche Nähe** · (**Verursachung**).',
                '**Problem der Kausalität:** Kausalität ist eine rein im Geist vorkommende Idee (wir sehen nur Abfolgen). (B4/F. 78; LB S. 118)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schliessen',
      title: 'Deduktion, Induktion, Falsifikation',
      blocks: [
        {
          t: 'table',
          head: ['', 'Deduktion (Rationalismus)', 'Induktion (Empirismus)'],
          rows: [
            ['Richtung', 'vom **Allgemeinen aufs Einzelne** (Theorie → Empirie)', 'vom **Einzelnen aufs Allgemeine** (Empirie → Theorie)'],
            ['Beispiel', 'Fische leben im Wasser. Goldfisch Hermann ist ein Fisch. → Hermann lebt im Wasser.', 'Hermann lebt im Wasser, Hermann ist ein Fisch … → Alle Fische leben im Wasser.'],
            ['Problem', 'Schluss nur so gut wie die (unbewiesene) **Prämisse**', '**Induktionsproblem (Hume):** Zeit & Vollständigkeit – nie alle Fälle beobachtet'],
          ],
          caption: '(B4/F. 69, 74, 79–80)',
        },
        { t: 'widget', w: 'kreislauf' },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Truthahn-Beispiel (Induktionsproblem)',
          text: 'Der Truthahn wird jeden Tag gefüttert und schliesst, dass es immer so bleibt – bis zum Festtag. Viele Bestätigungen beweisen keine allgemeine Regel. (B4/F. 79)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Falsifikationismus',
              text: '**Karl Popper:** **schwarzer Schwan** – Verwerfung der Hypothese nach einem Gegenbeispiel. Keine Aussage als bewiesen betrachten, solange nicht alle Möglichkeiten geprüft sind; **jede wissenschaftliche Hypothese muss falsifizierbar sein**. Weitere Beispiele: «Alle Schwäne sind weiss», «Alle Metalle leiten Strom» [Ergänzung]. (B4/F. 79 + Notiz; nicht im LB)',
            },
          ],
        },
        {
          t: 'p',
          text: '**Heute:** In der Wissenschaft werden beide Verfahren **kombiniert** (Kreislauf); hypothesenprüfend meist deduktiv [Ergänzung]. (B4/F. 75, 80)',
        },
        { t: 'widget', w: 'schluss-trainer' },
      ],
    },
    {
      id: 'materialismus',
      title: 'Materialismus – La Mettrie',
      blocks: [
        {
          t: 'list',
          items: [
            'Alle Vorgänge und Phänomene der Welt gehen auf **Materielles** zurück; Geistiges ist nicht eigenständig vorhanden. **«Der Mensch als Maschine»** (Julien Offray de **La Mettrie, 1748**; Arzt, 1709–1751). (B4/F. 81 + Notiz; LB S. 112)',
            '**Descartes vs. La Mettrie:** Descartes – Körper mechanisch, aber **eigenständige Seele** (Dualismus); La Mettrie – auch die **Seele hängt vom Körper ab** (z. B. Nahrung stärkt/schwächt die Seele) → **Monismus**.',
            '**Metaphern:** Maschine, Uhrwerk/Mechanismus («Uhrwerk» = [Ergänzung]); Descartes: Gott als **Brunnenmeister**. (LB S. 102)',
          ],
        },
        { t: 'widget', w: 'weltansichten' },
      ],
    },
  ],
};

/* ═════════════════════════════ 5 Psychognostik · Block 5 ═════════════════════════════ */

export const kap5: Chapter = {
  id: 'psychognostik',
  nr: 5,
  short: 'Psychognostik',
  title: 'Psychognostik – Menschenkenntnis',
  period: '16.–19. Jh. (Aufklärung)',
  epochs: '4',
  block: 'Block 5',
  color: '#ea580c',
  kern: [
    '**Psychognostik:** körperliche Merkmale als **Seelenzeichen** – Physiognomik (Gesicht/Körper), Phrenologie (Schädel), Graphologie (Handschrift).',
    'Aus Körpermerkmalen lässt sich **nicht zuverlässig** auf Persönlichkeit schliessen. (B5/F. 101)',
    'Kritik **Lichtenberg** (1778); Lombroso bereitet Boden für Rassismus und Eugenik.',
  ],
  sections: [
    {
      id: 'hintergrund',
      title: 'Hintergrund und Motive',
      blocks: [
        {
          t: 'p',
          text: '**Hintergrund:** Bürgertum im Zeichen der Aufklärung – Gestaltung von Beziehungen (Ehe, Freundschaft, Geschäft): *Wie soll man sich einschätzen, wie behandeln?* (B5/F. 87)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Psychognostik (Psychognosis)',
              text: 'Wissen über den Menschen als Gattung, über Typen von Menschen und über individuelle Personen. Kerngedanke: **körperliche Merkmale als Seelenzeichen**. (B5/F. 88; LB S. 135)',
            },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Selbsterkenntnis', text: 'Förderung der Selbsterkenntnis (Zufriedenheit)' },
            { title: 'Pragmatisches Urteil', text: 'Kann ich dieser fremden Person trauen?' },
            { title: 'Philanthropie', text: 'Teilhabe an den Empfindungen der Mitmenschen' },
          ],
        },
        { t: 'p', text: 'Die **drei Motive** der Psychognostik. (B5/F. 88)' },
      ],
    },
    {
      id: 'methoden',
      title: 'Die drei Deutungslehren im Überblick',
      blocks: [{ t: 'widget', w: 'psychognostik' }],
    },
    {
      id: 'physiognomik',
      title: 'Physiognomik – Deutung des Gesichts/Körpers',
      blocks: [
        { t: 'p', text: 'Seit der Antike verbreitet; Überzeugung: **Körperoberfläche weist auf den Charakter hin**. (B5/F. 90)' },
        {
          t: 'person',
          name: 'Giambattista della Porta',
          dates: '1535–1615 · Werk 1593',
          tag: 'Mensch-Tier-Vergleiche',
          items: [
            'Mensch-Tier-Vergleiche (Adler-, Schafs-, Eselmensch …).',
            'Begründung: Körpermerkmale haben **natürliche Ursachen** – Körper und Seele passen sich an **dieselbe Umwelt** an (Mensch und Tier teilen sie); dazu **Temperamentenlehre nach Galen**. (B5/F. 89–90; LB S. 137–139)',
          ],
        },
        {
          t: 'person',
          name: 'Johann Caspar Lavater',
          dates: '1741–1801',
          tag: 'Zürcher Pfarrer',
          items: [
            'Feste Zuordnungen – **hohe Stirn** = Klugheit und Edelmut, **knapper Augenabstand** = List, **gerade Nase** = kalter Verstand.',
            '*Physiognomische Fragmente* (Folie: **1772**; LB: erste Schrift 1772, Fragmente ab 1775).',
            'Begründung: **Ganzheitlichkeit** – das Innere (Seele) entspricht dem Äusseren; Physiognomik als **göttliche Offenbarung** und **«schnelles Menschengefühl»**, nicht als Wissenschaft. Beispiel: Profile von Waisenknaben beurteilen. (B5/F. 91–94; LB S. 139–141)',
          ],
        },
        {
          t: 'callout',
          tone: 'zitat',
          title: 'Kritik Lichtenberg (Göttinger Physikprofessor, 1778)',
          text: [
            '«Gelehrte und Narren besitzen oftmals das gleiche Gesicht.»',
            'Der Körper ist für die Anforderungen der Natur gebaut, nicht als Anzeige des Geistes; treffende Urteile beruhen auf **Kleidung, Auftreten, Spuren früherer Handlungen** – nicht auf Gesichtszügen. Sonst müsste, wer eine platt gedrückte Nase bekommt, schadenfroh werden. (B5 Notiz; LB S. 141)',
          ],
        },
        {
          t: 'person',
          name: 'Cesare Lombroso',
          dates: '1836–1909',
          tag: '«geborener Verbrecher»',
          items: [
            'Aus Verbrecherbildern Merkmale ableiten, um Täter im Vorfeld zu erkennen; **Boden für rassistisches Gedankengut und Eugenik** (gezielte Förderung des Genpools). (B5/F. 96 + Notizen)',
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Heute',
          text: '**Kein wissenschaftliches Fundament.** Neuere Studie (**Qin et al., 2016**: 20 Persönlichkeitsmerkmale und IQ aus Gesichtern): konnte nicht vorhergesagt werden, keine Zusammenhänge, nur schwache Korrelation bei Regelbefolgung. (B5/F. 96 + Notizen)',
        },
      ],
    },
    {
      id: 'phrenologie',
      title: 'Phrenologie und Graphologie',
      blocks: [
        {
          t: 'person',
          name: 'Franz Joseph Gall',
          dates: '1758–1828',
          tag: 'Phrenologie – Schädelform',
          items: [
            '**20 Vermögen** im Menschen (psychische Fähigkeiten/Anlagen mit **festem Sitz im Gehirn**); individuell unterschiedliche Ausdehnung des zugehörigen Hirnteils spiegelt sich an der **Schädelform**.',
            '**Ausdehnung** = Vermögen stark ausgeprägt; **Delle/Einbuchtung** = schwach ausgeprägt. (B5/F. 97; LB S. 274)',
          ],
        },
        {
          t: 'person',
          name: 'Jean-Hippolyte Michon',
          dates: '1806–1881',
          tag: 'Graphologie – Handschrift',
          items: [
            'Gab der Graphologie den Namen (**1875**): Persönlichkeit drückt sich in der **Motorik** aus → unterschiedliches Schriftbild.',
            'Vorläufer: Lavaters **Pathognomik** (Deutung der Bewegung, z. B. Schriftstärke = Willensstärke). (B5/F. 98; LB S. 141)',
            'Studie **Dazzi & Pedrabissi (2009)**: keine Evidenz für klassische Graphologie. (B5/F. 98)',
          ],
        },
      ],
    },
    {
      id: 'knigge',
      title: 'Menschenbehandlung',
      blocks: [
        {
          t: 'p',
          text: 'Allgemeine Verhaltensregeln und gute Sitten im Sinne der Aufklärung: **Adolph von Knigge** (1752–1796), *Über den Umgang mit Menschen* (**1788**) – Umgang mit Leuten verschiedener Gemütsarten, Leben im Haushalt. «Jeder Mensch muss sich in der Welt selbst geltend machen.» (B5/F. 100)',
        },
      ],
    },
  ],
};

/* ═════════════════════════════ 6 Psychologie wird Wissenschaft · Block 6 ═════════════════════════════ */

export const kap6: Chapter = {
  id: 'wissenschaft',
  nr: 6,
  short: 'Wissenschaft',
  title: 'Die Psychologie wird eine Wissenschaft',
  period: '2. Hälfte 19. Jh.',
  epochs: '5',
  block: 'Block 6',
  color: '#16a34a',
  kern: [
    '**Emanzipation von der Philosophie:** Naturwissenschaften (Medizin, Physiologie) als Vorbild für Laborforschung. (B6/F. 24, 26)',
    '**Psychophysik:** Weber (eben merkliche Differenz, ΔR/R = const.) und Fechner (E = K · ln R + C).',
    '**Wundt 1879** Leipzig: erstes experimentalpsychologisches Institut; instruierte Selbstbeobachtung, Reaktionszeiten, Elementenpsychologie.',
    'Daneben bleibt die **geisteswissenschaftliche Linie** (Dilthey: verstehen statt erklären; nomothetisch vs. idiographisch).',
  ],
  sections: [
    {
      id: 'hintergruende',
      title: 'Hintergründe',
      blocks: [
        {
          t: 'list',
          items: [
            '**Materialistisches Zeitalter** – Abkehr von der Romantik, Industrialisierung; Fortschritte der Biologie und Medizin; Anwendung empirisch-naturwissenschaftlicher Methoden («Materialisten-Credo»: im Organismus wirken nur physikalisch-chemische Kräfte). (B6/F. 14)',
            'Neuer Geist im Umgang mit Menschen (Fachsprache); **Emanzipation von der Philosophie** – im späten 19. Jh. eigenes Fach an der Universität.',
            '**1894: Margaret Washburn** (1871–1939) erste Frau mit Doktortitel in Psychologie (Cornell University, USA). (B6/F. 15)',
          ],
        },
      ],
    },
    {
      id: 'psychophysik',
      title: 'Psychophysik – Weber und Fechner',
      blocks: [
        { t: 'p', text: '**Beginn der Laboruntersuchungen.**' },
        {
          t: 'defs',
          items: [
            {
              term: 'Eben merkliche Differenz',
              text: '**Ernst Heinrich Weber** (1795–1878, Medizin Leipzig): Je nach Sinnesgebiet sind unterschiedlich starke Reizveränderungen nötig, um einen Unterschied wahrzunehmen → **kleinster wahrnehmbarer Unterschied**. Innerhalb eines Sinnesgebiets steht sie in **konstantem Verhältnis zum Ausgangsreiz**. (B6/F. 16; LB S. 213)',
            },
            {
              term: 'Psychophysik',
              text: '**Gustav Theodor Fechner** (1801–1887; Medizin, Physik, Mathematik): «eine exacte Lehre von den functionellen oder Abhängigkeitsbeziehungen zwischen Körper und Seele». Untersuchte das Verhältnis ansteigender Reizstärken zu den Empfindungsintensitäten. **Erweiterte Webers Gesetz**, weil die Weber-Konstanten nur im **mittleren Reizbereich** gelten. (B6/F. 17–18; LB S. 211–214)',
            },
          ],
        },
        { t: 'figure', fig: 'weberfechner' },
        { t: 'widget', w: 'weber' },
        { t: 'widget', w: 'fechner' },
        {
          t: 'callout',
          tone: 'achtung',
          title: 'Folie ≠ Lehrbuch',
          text: 'LB-Notation: γ = k (log β − log b) mit b = Absolutschwelle (LB S. 214) – inhaltlich gleich, **Folien-Schreibweise E = K · ln R + C** verwenden.',
        },
      ],
    },
    {
      id: 'wundt',
      title: 'Leipziger Schule – Wilhelm Wundt',
      blocks: [
        {
          t: 'person',
          name: 'Wilhelm Wundt',
          dates: '1832–1920',
          tag: 'Begründer der experimentellen Psychologie',
          items: [
            'Studierte Medizin, Dissertation über das Verhalten der Nerven, Habilitation in Physiologie; Assistent bei **Helmholtz**. (LB S. 216)',
            '**Ziel:** seelische Vorgänge auf Grundlage physiologischer Veränderungen erklären, Bewusstsein in **Kleinstbestandteile** zerlegen («Welches sind die Elemente des Bewusstseins? Welche Verbindungen gehen sie ein?») → **Elementenpsychologie**. (B6/F. 22)',
            '**Methode:** **instruierte Selbstbeobachtung** (Introspektion unter kontrollierten Laborbedingungen) und **Reaktionszeiten**. Forschungsschwerpunkte: Psychophysik/Sinnesempfindungen, Apperzeption und Reaktion, Emotionen. (B6/F. 20)',
          ],
        },
        { t: 'widget', w: 'wundt-weg' },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Warum 1879?',
          text: 'LB: 1879 zunächst nur «ein bescheidenes Zimmer für psychologische Versuche», offizielles Institut 1883 (LB S. 226 f.); «Philosophische Studien» laut LB-Tabelle ab 1881. **Für die Prüfung: 1879 = Gründungsjahr**, weil erstmals ein Labor eigens für psychologische Experimente eingerichtet wurde.',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Apperzeption',
              sub: 'Bemerken eines Bewusstseinsinhaltes',
              text: 'Aktives Verbinden von Vorstellungen. Untersucht mit **Reaktionszeiten**: je mehr und je unähnlichere Reize gleichzeitig, desto langsamer (Tchisch, 1885). (B6/F. 20; LB S. 216 f.)',
            },
            {
              title: 'Verschmelzung',
              sub: 'gleiches Sinnesgebiet',
              text: 'Vorstellungen verbinden sich, sind nicht mehr einzeln erkennbar – z. B. **Summ- und Glockenton**; Töne → Akkord.',
            },
            {
              title: 'Komplikation',
              sub: 'verschiedene Sinnesgebiete',
              text: 'Verbindung aus verschiedenen Sinnesgebieten – z. B. **Glockenton und Stromstoss**.',
            },
          ],
        },
        {
          t: 'list',
          title: 'Emotionen – eine der ersten Emotionstheorien',
          items: [
            '**3 Dimensionen:** **Lust/Unlust**, **Erregung/Beruhigung**, **Spannung/Lösung**; gemessen über physiologische Begleiterscheinungen (Puls, Atmung, Blutdruck) mit Apparaten. (B6/F. 21; LB S. 218)',
            'Empirisch gehalten haben sich v. a. **Lust/Unlust (Valenz)** und **Erregung/Beruhigung (Aktivierung)** (Leitfrage) – vgl. Temperamentenschema B2/F. 38.',
          ],
        },
        {
          t: 'p',
          text: '**Zweiter Zweig: Völkerpsychologie** (letzte 20 Jahre seines Wirkens): höhere seelische Prozesse über kulturelle Erzeugnisse (Sprache, Mythen, Sitten) erschliessen [Ergänzung] – «Wo das absichtliche Experiment aufhört, da hat die Geschichte für den Psychologen experimentiert» (Wundt, 1863). Mit 88 Jahren in Grossbothen bei Leipzig gestorben. (B6/F. 22)',
        },
      ],
    },
    {
      id: 'usa',
      title: 'Entwicklungen in Europa und den USA',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Europa',
              sub: 'Anfang 19. Jh.',
              text: 'Deutsche Universitäten mit **akademischer Freiheit**; England und Frankreich: viel Wissenschaft, aber Begrenzung auf Physik und Chemie, Einfluss der Religion. (B6/F. 23)',
            },
            {
              title: 'USA',
              sub: '2. Hälfte 19. Jh.',
              bullets: [
                '**1876** Johns Hopkins University (Baltimore) nach deutschem Vorbild.',
                '**1883 G. Stanley Hall** gründet dort das erste experimentalpsychologische Labor der USA.',
                '**1875 William James:** Labor an der Harvard University (Demonstrationen für den Unterricht, weniger experimentell).',
                '**1890** *The Principles of Psychology* – James = «Vater der amerikanischen Psychologie». (B6/F. 23)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'natur-geist',
      title: 'Natur- und Geisteswissenschaften',
      blocks: [
        {
          t: 'p',
          text: 'Siegeszug der Naturwissenschaft. **Wilhelm Dilthey** (1833–1911) führte Ende 19. Jh. (**1883**, LB) **«Geisteswissenschaften»** als Oberbegriff ein: für geistige Werke (Dichtung), gedankliche Konstruktionen (Religion), soziale Systeme (Staat) – als eigenständige Gruppe mit eigener Methode (**verstehen statt erklären**; Hermeneutik). (B6/F. 24; LB S. 209–211)',
        },
        {
          t: 'compare',
          items: [
            { title: 'Nomothetisch', sub: 'Naturwissenschaft', text: '**Allgemeine Gesetze** aufstellen. (B6/F. 24)' },
            {
              title: 'Idiographisch',
              sub: 'Geisteswissenschaft',
              text: 'Das **Einmalige, Individuelle** beschreiben – «… er hat nur Wert, wenn er einmalig ist». Begriffe von **Wilhelm Windelband**. (B6/F. 25; LB S. 232)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Wendepunkt',
          text: 'Die Hinwendung zur **experimentellen, naturwissenschaftlichen Methode** (Labore, Institute) verhalf der Psychologie zum Aufschwung und zur **Emanzipation von der Philosophie**. Heute bewegt sie sich zwischen beiden Polen (überwiegend empirisch-naturwissenschaftlich) [Ergänzung]. (B6/F. 26; LB S. 224)',
        },
      ],
    },
  ],
};
