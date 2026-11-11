import type { Chapter } from '../model';

/* ═════════════════════════════ 1 Grundlagen · Block 1 ═════════════════════════════ */

export const kap1: Chapter = {
  id: 'grundlagen',
  nr: 1,
  short: 'Grundlagen',
  title: 'Grundlagen der Psychologiegeschichte',
  period: 'systematisch, ohne Zeitachse',
  epochs: '1–7',
  block: 'Block 1',
  color: '#64748b',
  kern: [
    'Psychologie und ihre Geschichte immer im **Kontext ihrer Zeit** sowie der jeweiligen **Menschenbilder** und **Paradigmen** betrachten. (B1/F. 21)',
    '**«Lange Vergangenheit, kurze Geschichte»** (Ebbinghaus 1908): psychologische Fragen seit der Antike – als eigenständige Wissenschaft erst ab **1879** (Wundt, Leipzig). (B1/F. 10)',
    'Modelle des Geschichtsverlaufs (Pongratz, 1984): **Kreis-**, **Halbkreis-** und **Spiralmodell**.',
    '**7 Epochen** nach Schmitthüsen & Krampen (2015) – von Religion & Mythologie bis zur Vermischung der Grenzen. (B1/F. 20)',
  ],
  sections: [
    {
      id: 'was',
      title: 'Was ist Psychologie – und warum ihre Geschichte?',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Psychologie',
              text: 'Griech. **psyche** = Seele, **logos** = Kunde, Wort, Gesetzmässigkeit. «Die wissenschaftliche Untersuchung des Verhaltens von Individuen und ihren mentalen Prozessen» (Zimbardo & Gerrig, 2008). (B1/F. 8)',
            },
            {
              term: 'Funktionen der Psychologiegeschichte',
              text: 'Nach **Lück (2013)**: **Ordnungs-** und **Korrekturfunktion**, erweitert die Perspektive und lehrt **Bescheidenheit**. Erst wer weiss, wie etwas geworden ist, kann Vorhandenes neu sehen (Reuter, 2014). (B1/F. 9)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'zitat',
          title: 'Hermann Ebbinghaus (1908)',
          text: '«Die Psychologie hat eine lange Vergangenheit, doch nur eine kurze Geschichte.» → Psychologische Fragen gibt es seit Beginn der Menschheit (in Religion, Philosophie, Medizin), als moderne Wissenschaft erst seit **1879**. (B1/F. 10)',
        },
      ],
    },
    {
      id: 'kritik',
      title: 'Kritische Betrachtungen',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: '… zur Vorlesung',
              bullets: [
                'Akzente und Bewertungen sind unvermeidbar, die Auswahl ist **subjektiv**.',
                '**Popper: Scheinwerfertheorie** – Geschichtsschreibung beleuchtet nur, worauf das Interesse den «Scheinwerfer» richtet; es gibt keine vollständige, neutrale Geschichte. (B1/F. 11)',
              ],
            },
            {
              title: '… zur Geschichtsschreibung',
              bullets: [
                '**«Great man»-Geschichtsschreibung**: Fokus auf grosse Einzelpersonen (vgl. LB S. 116: «Wissenschaft – Werk grosser Männer?»).',
                '**Geschichte schreibt, wer/was überlebt.** · Widersprüchlichkeit einiger Denker.',
                '«Die Wahrheit ist eine Tochter der Zeit» (Francis Bacon). (B1/F. 11)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'modelle',
      title: 'Modelle des Geschichtsverlaufs (Pongratz, 1984)',
      blocks: [
        { t: 'widget', w: 'geschichtsmodelle' },
        { t: 'figure', fig: 'spirale' },
      ],
    },
    {
      id: 'menschenbilder',
      title: 'Menschenbilder',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Menschenbild',
              text: '«Gesamtheit der Annahmen und Überzeugungen, was der Mensch von Natur aus ist, wie er in seinem sozialen und materiellen Umfeld lebt und welche Werte und Ziele sein Leben haben sollte» (**Fahrenberg, 2007**). Jede Epoche hat Vorstellungen davon, was der Mensch ist. (B1/F. 15)',
            },
          ],
        },
        {
          t: 'p',
          text: '**Heute:** Die «Verwaltung» des Menschenbilds ist nicht mehr eindeutig geklärt (früher entschied die Macht – Kirche, Staat), keine Glaubensfrage mehr; Menschenbilder gelten als **Arbeitshypothesen**. (B1/F. 15 + Notiz)',
        },
        { t: 'p', text: 'Auch **innerhalb einer Epoche** bestehen verschiedene Menschenbilder – Beispiele (B1/F. 16):' },
        {
          t: 'compare',
          items: [
            {
              title: 'Freud',
              sub: 'Psychoanalyse',
              text: 'Psychischer Determinismus, Lust-Unlust-Prinzip, dynamisches Unbewusstes → Mensch **nicht selbstbestimmt, triebgesteuert**.',
            },
            {
              title: 'Skinner',
              sub: 'Behaviorismus',
              text: 'Experimentelle Analyse – Funktionen werden der «kontrollierenden Umwelt» zugeschrieben; dem «autonomen Menschen» bleibt immer weniger → **Anreize der Umwelt** entscheidend.',
            },
            {
              title: 'Charlotte Bühler',
              sub: 'Humanistische Psychologie',
              text: 'Intentionale, **selbstbestimmte Ganzheit**, Selbstverantwortung, Orientierung an Werten und Zielen, **Selbstverwirklichung**.',
            },
          ],
        },
      ],
    },
    {
      id: 'paradigmen',
      title: 'Paradigmen',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Paradigma',
              text: 'Griech. **pará** = neben, **deigma** = zeigen → **anerkanntes Orientierungsmodell** zur erfolgreichen Problemlösung; legt fest, was als wissenschaftlich befriedigende Lösung gilt und welche Fragestellungen zulässig sind (Dorsch, 2025). (B1/F. 17) LB: Begriff von **Thomas Kuhn (1962)**; Wissenschaftler bleiben ihrem Paradigma meist treu. (LB S. 304 f.)',
            },
            {
              term: 'Experimentelles Paradigma',
              text: '«Paradigma» heisst in der Psychologie auch **Standard-Versuchsanordnung**, z. B. visuelle Suche – nicht verwechseln! (B1/F. 19)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Paradigmen unterscheiden sich bezüglich …',
          items: [
            'Bild vom Individuum / der Welt',
            'grundlegender Theorien',
            'Forschungsgegenstand / Fragestellungen',
            'Forschungsmethoden (Erhebung, Auswertung)',
            'In der Psychologie entsprechen Paradigmen oft den **Schulen** (z. B. kognitive Psychologie). (B1/F. 19 + Notiz)',
          ],
        },
        { t: 'widget', w: 'paradigma-check' },
      ],
    },
    {
      id: 'epochen',
      title: 'Einteilung in 7 Epochen (Schmitthüsen & Krampen, 2015)',
      blocks: [
        { t: 'widget', w: 'epochen' },
        {
          t: 'callout',
          tone: 'achtung',
          text: 'Epoche 4 (1600–1900) und 5 (Ende 19. Jh.) **überlappen** zeitlich; **1879** gehört zur **Gründungsphase** (Epoche 5).',
        },
      ],
    },
  ],
};

/* ═════════════════════════════ 2 Antike · Block 2 ═════════════════════════════ */

export const kap2: Chapter = {
  id: 'antike',
  nr: 2,
  short: 'Antike',
  title: 'Antike: Seelen-, Erkenntnis- und Charakterlehren',
  period: 'ca. 800 v.d.Z.–500 n.d.Z.',
  epochs: '1–2',
  block: 'Block 2',
  color: '#2563eb',
  kern: [
    'Antike Grundpositionen wirken bis heute: **Platon** (dualistisch, Idealismus) vs. **Aristoteles** (monistisch, Erfahrung). (B2/F. 40)',
    'Gefühle: **Stoiker** = Krankheiten der Seele (Ziel Ataraxie) vs. **Epikur** = Kraftquellen des Lebens (mit Mässigung).',
    'Charakterlehren: **Säftelehre** (Hippokrates) → **4 Temperamente** (Galen); **30 Charakterbilder** (Theophrast).',
  ],
  sections: [
    {
      id: 'rahmen',
      title: 'Rahmen und zwei Erkenntnislehren',
      blocks: [
        {
          t: 'p',
          text: 'Griechisch-römische Antike; Philosophieschulen mit Naturkunde (Physik), Logik (Grammatik, Rhetorik, Dialektik) und Ethik. **Theoretische Philosophie** = Wissen in Ist-Form (Was-, Wie-, Warum-Frage); **praktische Philosophie** = Kunstlehre, Regeln in Wenn-Dann-Form. Leitfrage: *Aus welchen Quellen stammen Erkenntnisse?* (B2/F. 29)',
        },
        {
          t: 'defs',
          items: [
            { term: 'Empirismus', text: 'Griech. **empeiria** = Erfahrung: Erkenntnis aus der Erfahrung. Kritik in der Antike: unzureichend. (B2/F. 30)' },
            { term: 'Idealismus', text: 'Griech. **idea** = Gestalt, Urbild: Ideenlehre nach **Platon** – Höhlengleichnis. (B2/F. 30)' },
          ],
        },
      ],
    },
    {
      id: 'sokrates',
      title: 'Sokrates',
      blocks: [
        {
          t: 'person',
          name: 'Sokrates',
          dates: '470–399 v.d.Z.',
          tag: '«Der sprechende Philosoph»',
          items: [
            'Hinterliess keine Schriften [Ergänzung]. **«Ich weiss, dass ich nichts weiss.»** → Einsicht ins eigene Nichtwissen als Ausgangspunkt der Erkenntnis.',
            '**Sokratischer Dialog – Mäeutik** («Hebammenkunst» [Ergänzung]): Durch Fragen wird **Nichtwissen in Wissen** verwandelt; kann **kognitive Dissonanz** auslösen. (B2/F. 39)',
          ],
        },
      ],
    },
    {
      id: 'platon',
      title: 'Platon – dualistisch, idealistisch',
      blocks: [
        {
          t: 'person',
          name: 'Platon',
          dates: '427–347 v.d.Z.',
          tag: 'dualistisch · Idealismus',
          items: [
            'Schüler des Sokrates [Ergänzung]; gründete **385 v. Chr.** die erste Philosophieschule (**Akademie**). (LB S. 39)',
            '**Idealismus:** Gültigkeiten liegen *hinter* den Gegebenheiten. **Ideenwelt** (Urbild: unvergänglich, unveränderlich) vs. **Körperwelt** (Abbild: vergänglich, veränderlich). Sinnliche Erfahrung gibt keinen Aufschluss über das Wesentliche; Erkenntnis durch **Denken / Wiedererinnerung** an die Ideen. (B2/F. 32)',
            '**Höhlengleichnis:** Menschen sehen in der Höhle nur Schatten der Gegenstände draussen → die erfahrbare Welt ist nur Schatten der idealen Welt; Wahrheit erfordert, über die Wirklichkeit hinaus in die Welt der Ideen vorzudringen. (LB S. 42)',
          ],
        },
        { t: 'widget', w: 'platon-erkenntnis' },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Wagengleichnis',
          text: 'Seele = **geflügeltes Wagengespann**; beim Menschen ist ein Ross edel, das andere «von entgegengesetzter Zucht» → Lenkung schwierig. Die **Denkseele** soll Begierde und Entschlüsse beherrschen wie ein tüchtiger **Wagenlenker**. (B2/F. 33; LB S. 43, 50)',
        },
      ],
    },
    {
      id: 'aristoteles',
      title: 'Aristoteles – monistisch',
      blocks: [
        {
          t: 'person',
          name: 'Aristoteles',
          dates: '384–322 v.d.Z.',
          tag: 'monistisch · Erfahrung',
          items: [
            'Lehrer an Platons Akademie, eigene Schule **335 v. Chr.** (LB S. 39). **Erster Systematiker:** Gedanken systematisch entwickelt; **Logik & Analytik** (Widerspruchsfreiheit: ein Satz ist entweder wahr oder falsch).',
            'Betonte den **Einfluss der Umwelt**: «Nichts sei im Bewusstsein, was nicht zuvor in den Sinnen gewesen ist.» (B2/F. 35)',
            '**Seele als Zweckursache / Zielgerichtetheit** (**Entelechie**, griech. telos = Ziel): Seele ist die Form/Gestalt des Körpers, die ihn auf seine Ziele ausrichtet → Parallele zur **Aktualisierungs-/Selbstverwirklichungstendenz** der Humanistischen Psychologie. (B2/F. 34; LB S. 43 f.)',
            '**Leib-Seele:** Seele kann ohne Körper nicht bestehen (monistisch). **Sehkraft-Analogie:** «Wäre das Auge ein Lebewesen, so wäre die Sehkraft seine Seele.» (B2/F. 34; LB S. 44)',
          ],
        },
        { t: 'widget', w: 'teilseelen' },
      ],
    },
    {
      id: 'gefuehle',
      title: 'Gefühle in der Antike',
      blocks: [
        {
          t: 'compare',
          items: [
            {
              title: 'Stoiker',
              sub: 'ca. 200 v.d.Z.–300 n.d.Z.',
              bullets: [
                'Gefühle und Begierden = **Krankheiten der Seele**.',
                'Ziel: **Ataraxie** (Seelenruhe, Unerschütterlichkeit) bzw. **Apathie** (Freiheit von Leidenschaften) – am besten in einem geordneten Leben. (B2/F. 36; LB S. 52)',
              ],
            },
            {
              title: 'Epikureismus',
              sub: 'Epikur 341–271 v.d.Z.',
              bullets: [
                '**Gartenschule**; Gefühle = **Kraftquellen des Lebens** und Grundlage des Glücks (Lust). (B2/F. 36)',
                'Drei Begierden: **natürliche & notwendige** · **natürliche & nicht notwendige** · **eingebildete** – nur die erste verdient Befriedigung → **Mässigung** (übersteigerter Genuss kippt in Unlust, z. B. Übelkeit nach Völlerei [Ergänzung]). (LB S. 53 f.)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'charakter',
      title: 'Charakterlehren',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Säftelehre (Humoralpathologie)',
              text: 'Früher Vertreter **Hippokrates von Kos** (460–370 v.d.Z.; LB: 460–380) – Körper enthält **Blut, Schleim, gelbe und schwarze Galle** → Gesundheit/Krankheit. (B2/F. 38; LB S. 32)',
            },
            {
              term: 'Temperamentenlehre (Galen)',
              text: '**Galen** (Galenos von Pergamon, ca. 129–199 n.d.Z.) überträgt die Säftelehre auf den **Charakter**: Der vorherrschende Saft bestimmt das Verhalten → **4 Temperamente** (materialistische Theorie). (B2/F. 38; LB S. 67)',
            },
            {
              term: 'Charakterbilder (Theophrast)',
              text: '**Theophrast** (ca. 371–281 v.d.Z., Schüler des Aristoteles): **30 Charakterbilder** (griech. charakter = eingeritztes Kennzeichen) – Stereotype aus **beobachtbarem Verhalten**, z. B. der Schmeichler, der Geizige, der Verleumder. Aus Beobachtung mehrerer ähnlicher Personen → Typen; alle negativ, moralisch-erzieherischer Zweck. (B2/F. 37; LB S. 57 f.)',
            },
          ],
        },
        { t: 'widget', w: 'temperamente' },
      ],
    },
  ],
};

/* ═════════════════════════════ 3 Mittelalter · Block 3 ═════════════════════════════ */

export const kap3: Chapter = {
  id: 'mittelalter',
  nr: 3,
  short: 'Mittelalter',
  title: 'Mittelalter, Humanismus, Renaissance',
  period: 'ca. 500–1600',
  epochs: '3',
  block: 'Block 3',
  color: '#7c3aed',
  kern: [
    'Seelen- und Erkenntnislehre vom **Christentum** geprägt – ausgewählte antike Lehren werden **übernommen und umgedeutet**: **Augustinus ↔ Platon**, **Thomas ↔ Aristoteles**. (B3/F. 47, 59)',
    'Die **islamische Blütezeit** bewahrt und entwickelt antikes Wissen weiter und gibt es an Europa weiter.',
    'Ab dem 14. Jh. **Humanismus, Renaissance, Reformation** → Psychologie als freie Kunst; **Montaigne**: Skepsis und kognitiver Konstruktivismus.',
  ],
  sections: [
    {
      id: 'rahmen',
      title: 'Rahmen',
      blocks: [
        {
          t: 'list',
          items: [
            '**500 n.d.Z.** Fall Westroms bis **1500** (Entdeckung Amerikas, Reformation). Zusammenleben in Zentraleuropa durch religiöse Maximen und Bibelauslegung geregelt; viele philosophische Richtungen als **unchristlich abgelehnt**. (B3/F. 46)',
            'Wissen wurde in **Klöstern** gepflegt (Klosterschulen, später Dom- und Pfarrschulen) (LB S. 80); Universitätsgründungen: **1088 Bologna**, 1365 Wien, 1460 Basel. (B3/F. 46)',
          ],
        },
        {
          t: 'callout',
          tone: 'zitat',
          title: 'Pongratz (1984)',
          text: '«Das Christentum hat keine von Grund auf neue Seelenlehre entwickelt. Es hat das platonische und aristotelische Gedankengut übernommen und nach christlichem Geiste umgeformt.» (B3/F. 47)',
        },
        { t: 'widget', w: 'erbe' },
      ],
    },
    {
      id: 'augustinus',
      title: 'Aurelius Augustinus',
      blocks: [
        {
          t: 'person',
          name: 'Aurelius Augustinus',
          dates: '354–430',
          tag: 'Kirchenvater · ↔ Platon',
          items: [
            'Werk: *Über den Gottesstaat*; Hauptarchitekt der frühen christlichen Philosophie. **Anlehnung an Platon:** Ablehnung von Körperlichem. (B3/F. 48)',
            '**Erkenntnis:** **Glauben als Erkenntnisprinzip** – Teilhabe am Gottesgeist durch Selbsterfahrung (göttliche Erleuchtung, Lichtmetapher; «Glaube führt zu Wissen und Wissen zu Glauben»). (B3/F. 48; LB S. 74)',
            '**Introspektion:** *Bekenntnisse* (397) – Selbstbeobachtung als Erkenntnisquelle, z. B. Beschreibung des Gedächtnisses als **«weite Paläste»**. (B3/F. 49; LB S. 74)',
          ],
        },
      ],
    },
    {
      id: 'hildegard',
      title: 'Hildegard von Bingen',
      blocks: [
        {
          t: 'person',
          name: 'Hildegard von Bingen',
          dates: '1098–1179',
          tag: 'Benediktinernonne',
          items: [
            '«Schrieb» über Musik, Heilkunde, Theologie/Philosophie. **Erkenntnisquelle: Visionen.**',
            'Besonders bekannt für **Heilkunde** (z. B. Zitronenblätter in Wein gegen Fieber). (B3/F. 50; LB S. 80)',
          ],
        },
      ],
    },
    {
      id: 'islam',
      title: 'Blütezeit des Islams («Islamic golden age»)',
      blocks: [
        {
          t: 'list',
          items: [
            'Weiterentwicklung griechischer und römischer Philosophie, **weg von den Einschränkungen christlicher Lehren**.',
            'Unter **Kalif al-Ma’mun**: **Bagdad** als Zentrum, Rationalismus der Mu’tazila, **Toleranz** gegenüber Religionen/Kulturen; Verschmelzung mit griechischem Rationalismus → humanistische Bewegung, wie sie erst im 15. Jh. in Italien wiederkehrt (Al-Khalili, 2011).',
            'Bedeutung für Europa: **Bewahrung und Weitergabe antiken Wissens**. (B3/F. 51–52)',
          ],
        },
      ],
    },
    {
      id: 'thomas',
      title: 'Thomas von Aquin – Scholastik',
      blocks: [
        {
          t: 'person',
          name: 'Thomas von Aquin',
          dates: '1225–1274',
          tag: 'Scholastik · ↔ Aristoteles',
          items: [
            '**Scholastik** = mittelalterliche Schulphilosophie: Glaubenssätze mit antiker (v. a. aristotelischer) Logik begründen [Ergänzung]. Thomas: christliche Weisheit vollendet sich erst in der **Verbindung von Glauben und Wissen** (Philosophie der Theologie untergeordnet, aber aufgewertet). (B3/F. 54; LB S. 83)',
            'Antike Philosophie als **«Immunisierung»** der Auslegung: antike Autoritäten stützen/stärken die christliche Lehre gegen Kritik.',
            '**Übernahme der aristotelischen Seelenlehre:** Pflanzen-, Tier- und Geistseele; Erkenntnis beginnt mit der sinnlichen Wahrnehmung. (B3/F. 55)',
            '**Neu:** gleichwertige Einbeziehung der **Motivation** neben der **Kognition**. (LB S. 84)',
          ],
        },
        {
          t: 'callout',
          tone: 'zitat',
          title: 'Thomas von Aquin',
          text: '«Die Seele verhält sich zum Leib, wie der Schiffer zu seinem Boot, wie der Mensch zu seiner Kleidung.» → Beispiel für den Übertrag aristotelischer Logik; Seele lenkt/nutzt den Körper, bleibt aber von ihm unterscheidbar. (B3/F. 54)',
        },
        { t: 'widget', w: 'thomas-funktionen' },
      ],
    },
    {
      id: 'humanismus',
      title: 'Humanismus, Renaissance, Reformation',
      blocks: [
        {
          t: 'p',
          text: 'Anfänge im **14. Jh.** **Humanismus:** Freiheit und Lebensfreude als Gebote der Menschlichkeit · **Renaissance:** künstlerische Bewegung · Bürgergesellschaft mit zunehmendem Selbstbewusstsein; Dogmatik und Zentralgewalt der Kirche angefochten. **Reformation:** Martin Luther (1483–1546), **1521** Abwendung vom Papst. → **Psychologie als freie Kunst.** (B3/F. 56)',
        },
        {
          t: 'person',
          name: 'Michel de Montaigne',
          dates: '1533–1592',
          tag: 'Skepsis · kognitiver Konstruktivismus',
          items: [
            '**«Ich enthalte mich»** (Skepsis): genau beobachten, präzise beschreiben, Urteil zurückhalten – «Besser unentschieden bleiben, als einem Prinzip verfallen, auch nicht dem meinen.» (B3/F. 57)',
            '**Kognitiver Konstruktivismus:** «Wären aber die Dinge wirklich das, für was wir sie halten, so müssten alle Menschen sie gleich empfinden.» → Wirklichkeit wird subjektiv konstruiert; Grundgedanke kognitiver Ansätze der heutigen **Psychotherapie** (Bewertungen statt Dinge selbst) [Ergänzung]. LB: soziale Umstände und Meinungen prägen Charakter und Verhalten. (B3/F. 57; LB S. 147)',
            'Essays über Alltagsthemen, u. a. **Impotenz**: Montaigne half einem Freund mit einem **Placebo-artigen «Talisman»** – Wirkung der Einbildung/Suggestion (Leitfrage). (B3/F. 57)',
          ],
        },
      ],
    },
  ],
};
