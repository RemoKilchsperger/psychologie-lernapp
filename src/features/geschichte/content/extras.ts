import type { ChapterId, Leitfrage, Pitfall } from '../model';

/* ───────────── Stolperfallen & Verwechslungsgefahren (Zusammenfassung S. 12) ───────────── */

export const pitfalls: Pitfall[] = [
  {
    ch: 'antike',
    topic: 'Platon vs. Aristoteles',
    a: { label: 'Platon', text: '**dualistisch**, Idealismus; Teilseelen Begehren – Mut – Denken (**Unterleib / Brust / Kopf**).' },
    b: { label: 'Aristoteles', text: '**monistisch**, Erfahrung; Teilseelen vegetativ – animalisch – denkend (**Pflanze / Tier / Geist**).' },
    tipp: 'Das Mittelalter übernimmt beide: **Augustinus ↔ Platon**, **Thomas ↔ Aristoteles**.',
  },
  {
    ch: 'antike',
    topic: 'Hippokrates vs. Galen',
    a: { label: 'Hippokrates', text: 'Säfte → **Gesundheit/Krankheit** (Humoralpathologie).' },
    b: { label: 'Galen', text: 'Säfte → **Temperamente/Charakter** – ca. 500 Jahre später.' },
    tipp: 'Gleiche vier Säfte, aber Hippokrates erklärt Krankheit, Galen den Charakter.',
  },
  {
    ch: 'antike',
    topic: 'Theophrast vs. Galen',
    a: { label: 'Theophrast', text: '**30 Charakterbilder** aus **Verhaltensbeobachtung**.' },
    b: { label: 'Galen', text: '**4 Temperamente** aus **Körpersäften**.' },
    tipp: 'Theophrast = beobachten (Stereotype), Galen = Körper (materialistisch).',
  },
  {
    ch: 'neuzeit',
    topic: 'Induktion vs. Deduktion',
    a: { label: 'Induktion', text: '**Einzelnes → Allgemeines** (Empirismus, Bacon, Hume-Problem).' },
    b: { label: 'Deduktion', text: '**Allgemeines → Einzelnes** (Rationalismus, Descartes).' },
    tipp: '**In**duktion: von den Daten **hin**auf zur Theorie. **De**duktion: von der Theorie **her**ab.',
  },
  {
    ch: 'neuzeit',
    topic: 'Descartes = Materialist?',
    a: { label: 'Descartes', text: 'Nur bezüglich des **Körpers** mechanistisch (Reflexbogen); die **Seele bleibt eigene Substanz** (Dualismus).' },
    b: { label: 'La Mettrie', text: 'Ganz **materialistisch-monistisch**: auch die Seele hängt vom Körper ab.' },
    tipp: 'Notiz aus der Vorlesung: «Kann nicht einfach schubladisieren.»',
  },
  {
    ch: 'psychognostik',
    topic: 'Physiognomik / Phrenologie / Graphologie',
    a: { label: 'Physiognomik · Phrenologie', text: '**Gesicht/Körper** (della Porta, Lavater, Lombroso) · **Schädelform** (Gall).' },
    b: { label: 'Graphologie · Kritik', text: '**Handschrift** (Michon). Kritiker der Physiognomik: **Lichtenberg**.' },
    tipp: 'Gesicht → Physiognomik, Schädel → Phrenologie, Schrift → Graphologie.',
  },
  {
    ch: 'wissenschaft',
    topic: 'Weber vs. Fechner',
    a: { label: 'Weber', text: 'Konstantes Verhältnis **ΔR/R** (eben merkliche Differenz).' },
    b: { label: 'Fechner', text: 'Logarithmische Beziehung **E = K · ln R + C**, Begriff **Psychophysik**.' },
    tipp: 'Fechner erweitert Weber, weil die Weber-Konstante nur im mittleren Reizbereich gilt.',
  },
  {
    ch: 'wissenschaft',
    topic: 'Wundt-Daten',
    a: { label: 'Wundt', text: '**1874** Zürich → **1875** Leipzig → **1879** Labor/Institut → **1883** «Philosophische Studien».' },
    b: { label: 'Nicht verwechseln', text: '**1883 Hall-Labor** (USA) und **1875 James** (Harvard).' },
    tipp: '1879 = Gründungsjahr der modernen Psychologie.',
  },
  {
    ch: 'wissenschaft',
    topic: 'Verschmelzung vs. Komplikation',
    a: { label: 'Verschmelzung', text: '**Gleiches** Sinnesgebiet (Summ- + Glockenton).' },
    b: { label: 'Komplikation', text: '**Verschiedene** Sinnesgebiete (Glockenton + Stromstoss).' },
    tipp: 'Beides sind Formen der **Apperzeption** bei Wundt.',
  },
  {
    ch: 'schulen',
    topic: 'Leipzig vs. Würzburg',
    a: { label: 'Leipzig (Wundt)', text: 'Elemente, kontrollierte Selbstbeobachtung, Reaktionszeiten.' },
    b: { label: 'Würzburg (Külpe, Ach, Bühler)', text: 'Denken, «Ausfrage»-Selbstbeobachtung; Wundt nennt sie «**Scheinexperimente**» (1907), Bühler verteidigt (1908).' },
    tipp: 'Methodisch steht die heutige Forschung näher bei Wundt.',
  },
  {
    ch: 'schulen',
    topic: 'Ach vs. Bühler',
    a: { label: 'Narziss Ach', text: '**Determinierende Tendenz**.' },
    b: { label: 'Karl Bühler', text: '**Aha-Erlebnis**.' },
    tipp: 'Charlotte Bühler = Menschenbild Selbstverwirklichung (Block 1) – nicht Karl Bühler!',
  },
  {
    ch: 'wissenschaft',
    topic: 'nomothetisch vs. idiographisch',
    a: { label: 'nomothetisch', text: '**Gesetze** (Naturwissenschaft).' },
    b: { label: 'idiographisch', text: '**Einzelfall** (Geisteswissenschaft).' },
    tipp: '**Dilthey** prägte «Geisteswissenschaften», **Windelband** die beiden Begriffe.',
  },
  {
    ch: 'tiefen',
    topic: 'Freud «Entdecker des Unbewussten»?',
    a: { label: 'Nein', text: 'Vorläufer **Fechner, von Hartmann, Nietzsche**.' },
    b: { label: 'Auch beachten', text: 'Hypnose bei Hysterie: **Charcot**; Anna O. war **Breuers** Patientin.' },
    tipp: 'Freud machte das Unbewusste zum Zentrum von Theorie und Therapie – erfunden hat er den Begriff nicht.',
  },
  {
    ch: 'tiefen',
    topic: 'Freud vs. Adler',
    a: { label: 'Freud', text: '**Sexualität (Libido)** als einzige Triebenergie, später + Todestrieb.' },
    b: { label: 'Adler', text: '**Minderwertigkeit, Kompensation, Gemeinschaftsgefühl**, Lebensplan/-stil.' },
    tipp: 'Adler spaltete sich 1911 ab, weil er die zentrale Rolle der Sexualität bestritt.',
  },
  {
    ch: 'grundlagen',
    topic: 'Epochen 4 und 5',
    a: { label: 'Epoche 4', text: 'Ausdifferenzierung der Wissenschaften, **1600–1900**.' },
    b: { label: 'Epoche 5', text: 'Gründungsphase, **Ende 19. Jh.** – überlappt mit 4.' },
    tipp: '**1879** gehört zur **Gründungsphase** (Epoche 5).',
  },
];

/* ───────────── Widersprüche Folien ↔ Lehrbuch (Folienvariante gilt) ───────────── */

export const contradictions: { ch: ChapterId; topic: string; folie: string; lb: string }[] = [
  { ch: 'neuzeit', topic: 'Descartes', folie: '1596–1650', lb: '1596–1649 (S. 102)' },
  { ch: 'antike', topic: 'Hippokrates', folie: '460–370 v.d.Z.', lb: 'etwa 460–380 v. Chr. (S. 32)' },
  { ch: 'psychognostik', topic: 'Lavater, Physiognomische Fragmente', folie: '1772', lb: '1772 erste Schrift «Über Physiognomik», Fragmente ab 1775 (S. 141)' },
  { ch: 'wissenschaft', topic: '«Philosophische Studien»', folie: '1883', lb: 'LB-Tabelle 1881 (S. 226)' },
  {
    ch: 'wissenschaft',
    topic: '1879',
    folie: '«Gründung des ersten experimentalpsychologischen Instituts»',
    lb: '1879 Versuchszimmer, Institut im formellen Sinn 1883 (S. 226 f.)',
  },
  { ch: 'wissenschaft', topic: 'Fechner-Gesetz', folie: 'E = K · ln R + C', lb: 'γ = k (log β − log b) – gleiche Aussage, andere Notation (S. 214)' },
];

/* ───────────── Kontrollfragen der Zusammenfassung (S. 13) ───────────── */

export const controlQuestions: { ch: ChapterId[]; q: string; answer: string[] }[] = [
  {
    ch: ['grundlagen', 'antike', 'mittelalter', 'neuzeit', 'psychognostik', 'wissenschaft', 'tiefen'],
    q: 'Zeitliche Einordnung: Ordne chronologisch und nenne die Epoche nach Schmitthüsen & Krampen: Thomas von Aquin · Wundts Labor · Galen · Descartes · Lavaters Physiognomische Fragmente · Gründung der Mittwoch-Gesellschaft.',
    answer: [
      '**Galen** (ca. 129–199, Epoche 3)',
      '→ **Thomas von Aquin** (1225–1274, Epoche 3)',
      '→ **Descartes** (1596–1650, Epoche 4)',
      '→ **Lavater** (1772, Epoche 4)',
      '→ **Wundt** (1879, Epoche 5)',
      '→ **Mittwoch-Gesellschaft** (1902, Epoche 6)',
    ],
  },
  {
    ch: ['antike'],
    q: 'Erkläre den Unterschied zwischen Platons und Aristoteles’ Seelenlehre anhand der Begriffe dualistisch/monistisch und der Sehkraft-Analogie.',
    answer: [
      '**Platon (dualistisch):** Seele vom Körper getrennt, Denkseele unsterblich.',
      '**Aristoteles (monistisch):** Seele = Form/Zweck des Körpers, ohne Körper nicht existent – «Wäre das Auge ein Lebewesen, so wäre die Sehkraft seine Seele.»',
    ],
  },
  {
    ch: ['neuzeit'],
    q: 'Warum genügen viele bestätigende Beobachtungen nicht, um eine allgemeine Aussage zu beweisen? Nenne das Problem, seinen Urheber und Poppers Lösung.',
    answer: [
      '**Induktionsproblem** (Hume; Truthahn): Zeit & Vollständigkeit – man beobachtet nie alle Fälle.',
      '**Popper: Falsifikation** – ein Gegenbeispiel (schwarzer Schwan) widerlegt; Hypothesen müssen falsifizierbar sein.',
    ],
  },
  {
    ch: ['wissenschaft'],
    q: 'Eine Person nimmt bei 400 g erst ab 410 g einen Unterschied wahr. Ab welchem Gewicht bemerkt sie bei 800 g einen Unterschied, und welches Gesetz steckt dahinter?',
    answer: ['**820 g**', '**Weber-Gesetz:** ΔR/R = const. (hier 10/400 = 20/800 = **2,5 %**).'],
  },
  {
    ch: ['schulen'],
    q: 'Welche Kritik übte Wundt an der Würzburger Schule, und was sind nach Wundt die Anforderungen an ein Experiment?',
    answer: [
      'Wundt (1907): **«Scheinexperimente»**.',
      'Anforderungen: **genaue Bestimmung der Versuchsbedingungen**, **Erfassung der Reaktionen**, **beliebige Wiederholbarkeit**.',
    ],
  },
];

/* ───────────── Leitfragen (Blöcke 1–7 offiziell, 8–9 eigene Repetitionsfragen) ───────────── */

export const leitfragen: Leitfrage[] = [
  /* Block 1 */
  {
    ch: 'grundlagen',
    official: true,
    q: 'Was meinte Hermann Ebbinghaus mit der Aussage: «Die Psychologie hat eine lange Vergangenheit, doch nur eine kurze Geschichte»?',
    a: [
      'Psychologische Fragen (Was ist die Seele? Wie denken, fühlen, erkennen wir?) beschäftigen die Menschen **seit Beginn der Menschheit** – behandelt in Religion, Mythologie, Philosophie und Medizin (= lange Vergangenheit).',
      'Als eigenständige, empirisch-experimentelle Wissenschaft gibt es die Psychologie erst seit Ende des 19. Jh. (**Wundt, 1879**, Leipzig) (= kurze Geschichte).',
    ],
  },
  {
    ch: 'grundlagen',
    official: true,
    q: 'Was meinte Karl Popper mit der Scheinwerfertheorie bezüglich Geschichtsschreibung?',
    a: [
      'Geschichtsschreibung kann die Vergangenheit nie vollständig und neutral abbilden. Wie ein Scheinwerfer beleuchtet sie nur den Ausschnitt, auf den das **Interesse** gerichtet ist.',
      'Akzente und Bewertungen sind unvermeidbar, die Auswahl ist **subjektiv** – auch in dieser Vorlesung.',
    ],
  },
  {
    ch: 'grundlagen',
    official: true,
    q: 'Zu welchem Modell der Geschichtsphilosophie gehört die Aussage: «In der Geschichte ist alles neu und alt. Aber warum?»',
    a: [
      'Zum **Spiralmodell** (Wilhelm Schmidt-Biggemann; Einteilung nach Pongratz, 1984).',
      'Dieselben Grundfragen (Körper/Seele, Induktion/Deduktion, Glauben/Wissen, Objekt/Subjekt, Anlage/Umwelt, Wahrheit/Nutzen) kehren **auf neuer Stufe** wieder.',
      'Abgrenzung: **Kreismodell** = «Ewige Wiederkehr des Gleichen» (Nietzsche); **Halbkreismodell** = «Entstehen und Vergehen» (Vorsokratiker).',
    ],
  },
  {
    ch: 'grundlagen',
    official: true,
    q: 'Was gibt ein Paradigma vor, respektive in welchen Bereichen können sich Paradigmen unterscheiden?',
    a: [
      'Ein Paradigma ist ein **anerkanntes Orientierungsmodell** zur Problemlösung: Es legt fest, was als wissenschaftlich befriedigende Lösung gilt und welche Fragestellungen zulässig sind (Dorsch, 2025).',
      'Unterschiede bezüglich: **Bild vom Individuum/der Welt** · **grundlegender Theorien** · **Forschungsgegenstand/Fragestellungen** · **Forschungsmethoden** (Erhebung, Auswertung).',
      'In der Psychologie entsprechen Paradigmen oft den **Schulen**. Achtung: «experimentelles Paradigma» = Standard-Versuchsanordnung.',
    ],
  },
  {
    ch: 'grundlagen',
    official: true,
    q: 'Was wird unter Menschenbild verstanden?',
    a: [
      'Nach **Fahrenberg (2007)**: «Gesamtheit der Annahmen und Überzeugungen, was der Mensch von Natur aus ist, wie er in seinem sozialen und materiellen Umfeld lebt und welche Werte und Ziele sein Leben haben sollte».',
      'Früher entschieden Machtinstanzen (Kirche, Staat); heute keine Glaubensfrage mehr – Menschenbilder gelten als **Arbeitshypothesen**.',
    ],
  },
  {
    ch: 'grundlagen',
    official: true,
    q: 'Unterscheidet sich ein Menschenbild nur von Epoche zu Epoche, oder können in einer Epoche unterschiedliche Menschenbilder bestehen? Bringen Sie Beispiele.',
    a: [
      'Auch **innerhalb einer Epoche** bestehen verschiedene Menschenbilder, z. B. im 20. Jh.:',
      '**Freud:** triebgesteuert, nicht selbstbestimmt (psychischer Determinismus).',
      '**Skinner:** die kontrollierende Umwelt entscheidet, der «autonome Mensch» tritt zurück.',
      '**Charlotte Bühler:** selbstbestimmte Ganzheit, Selbstverwirklichung.',
    ],
  },

  /* Block 2 */
  {
    ch: 'antike',
    official: true,
    q: 'Wer war Platon?',
    a: [
      'Griechischer Philosoph (**427–347 v.d.Z.**), Schüler des Sokrates, gründete 385 v. Chr. die **Akademie**.',
      'Wichtigster Vertreter des **Idealismus** (Ideenlehre); **dualistische** Seelenlehre.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Was ist das Höhlengleichnis und was möchte es aussagen?',
    a: [
      'Menschen sitzen gefesselt in einer Höhle und sehen nur die **Schatten** der Gegenstände draussen, die sie für die Wirklichkeit halten.',
      'Aussage: Die erfahrbare Welt ist nur Schatten der idealen Welt; Wahrheit erfordert, über die Wirklichkeit hinaus in die **Welt der Ideen** vorzudringen – durch Denken, nicht durch die Sinne.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Was ist das Reich der Ideen?',
    a: [
      '**Ideenwelt** = Urbilder, unvergänglich und unveränderlich; **Körperwelt** = Abbilder, vergänglich und veränderlich.',
      'Gültigkeiten liegen *hinter* den Gegebenheiten; Erkenntnis entsteht durch **Denken/Wiedererinnerung** an die Ideen.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Welche drei Teilseelen unterscheidet Platon?',
    a: [
      '**Begehrende & versorgende Seele** (epithymetikon) – Unterleib.',
      '**Zielstrebige & entschlossene Seele** (thymoeides) – Brust.',
      '**Denkende Seele** (logistikon) – Kopf; unsterblich, hat Vorrang.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Mittels welcher Analogie werden die Seelen oft dargestellt (Stichwort: Wagen)?',
    a: [
      '**Wagengleichnis:** Die Seele ist ein geflügeltes Wagengespann. Ein Ross ist edel (zielstrebige Seele), das andere widerspenstig (begehrende Seele) – «von entgegengesetzter Zucht», deshalb ist die Lenkung schwierig.',
      'Der **Wagenlenker** ist die denkende Seele: Sie soll Begierde und Entschlüsse beherrschen.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Wer war Aristoteles?',
    a: [
      'Griechischer Philosoph (**384–322 v.d.Z.**), Lehrer an Platons Akademie, eigene Schule 335 v. Chr.',
      '**Erster Systematiker** (Logik & Analytik: Widerspruchsfreiheit). Betonte den **Einfluss der Umwelt**: «Nichts sei im Bewusstsein, was nicht zuvor in den Sinnen gewesen ist.» **Monistische** Seelenlehre.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Was versteht er unter «Zweckmässigkeit / Zielgerichtetheit der Seele»?',
    a: [
      'Die Seele ist **Zweckursache** (Entelechie, telos = Ziel): die Form/Gestalt des Körpers, die ihn auf seine Ziele ausrichtet.',
      'Parallele heute: **Aktualisierungs-/Selbstverwirklichungstendenz** der Humanistischen Psychologie.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Wie versteht er das Verhältnis von Leib und Seele, und welche Analogie verwendet er dafür (Stichwort: Sehkraft)?',
    a: [
      '**Monistisch:** Die Seele kann ohne Körper nicht bestehen.',
      '«Wäre das Auge ein Lebewesen, so wäre die **Sehkraft** seine Seele.» – Seele = Funktion des Körpers.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Welche Seelenteile unterscheidet Aristoteles?',
    a: [
      '**Vegetative Seele** (Pflanzenseele): Ernährung, Wachstum, Fortpflanzung.',
      '**Animalische Seele** (Tierseele): Begierden, Empfindungen, Fortbewegung.',
      '**Denkende Seele** (Geistseele): Logik – nur der Mensch. Die Teile sind verbunden und interagieren.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Was war das Ziel der Stoiker im Umgang mit Gefühlen und weshalb?',
    a: [
      'Gefühle und Begierden gelten als **Krankheiten der Seele**.',
      'Ziel: **Ataraxie** (Seelenruhe, Unerschütterlichkeit) bzw. **Apathie** (Freiheit von Leidenschaften) – am besten in einem geordneten Leben.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Was sah der Epikureismus in den Trieben und Gefühlen, und welche drei Formen der Begierde nannte Epikur?',
    a: [
      'Gefühle = **Kraftquellen des Lebens** und Grundlage des Glücks (Lust).',
      'Drei Begierden: **natürliche & notwendige** · **natürliche & nicht notwendige** · **eingebildete** – nur die erste verdient Befriedigung.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Weshalb riet Epikur zur Mässigung? Nennen Sie ein Beispiel, warum übersteigerter Genuss zu Unlust führen könnte.',
    a: ['Übersteigerter Genuss **kippt in Unlust** – Ziel ist dauerhafte Lust, nicht maximale.', 'Beispiel: Übelkeit nach Völlerei, Kater nach zu viel Alkohol.'],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Wie kam Theophrast zu seinen Charaktertypen?',
    a: [
      'Durch **Beobachtung des Verhaltens** mehrerer ähnlicher Personen → Typen.',
      '**30 Charakterbilder** (griech. charakter = eingeritztes Kennzeichen), z. B. der Schmeichler, der Geizige, der Verleumder – alle negativ, moralisch-erzieherischer Zweck.',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Wie hingen Säfte und Charakter zusammen? Welche wurden unterschieden (laut Galen, der auf Hippokrates aufbaute)?',
    a: [
      'Der **vorherrschende Saft** bestimmt das Verhalten → 4 Temperamente (materialistische Theorie); moderne Lesart: Aktivierung & Valenz.',
      '**Blut → Sanguiniker** (Aktivierung +, Valenz +) · **gelbe Galle → Choleriker** (Aktivierung +, Valenz −) · **schwarze Galle → Melancholiker** (Aktivierung −, Valenz −) · **Schleim → Phlegmatiker** (Aktivierung −, Valenz +).',
    ],
  },
  {
    ch: 'antike',
    official: true,
    q: 'Wer war Sokrates, was meint «Ich weiss, dass ich nichts weiss», und was ist die Mäeutik?',
    a: [
      'Athener Philosoph (**470–399 v.d.Z.**), «der sprechende Philosoph» (keine Schriften).',
      'Einsicht ins eigene **Nichtwissen** ist der Ausgangspunkt der Erkenntnis.',
      '**Mäeutik** («Hebammenkunst»): Durch Fragen wird Nichtwissen in Wissen verwandelt – kann **kognitive Dissonanz** auslösen.',
    ],
  },

  /* Block 3 */
  {
    ch: 'mittelalter',
    official: true,
    q: 'Durch was war die Auseinandersetzung mit der Seele im mittelalterlichen Europa hauptsächlich geprägt, und auf welchen Standpunkt stellten sich die Autoritäten bezüglich der Wissenschaft?',
    a: [
      'Durch das **Christentum** (religiöse Maximen, Bibelauslegung).',
      'Viele philosophische Richtungen wurden als **unchristlich abgelehnt**; übernommen wurden nur ausgewählte antike Lehren (Platon, Aristoteles), christlich umgedeutet.',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Wie und wo wurde Wissen im Mittelalter (in Europa) weitergegeben?',
    a: ['In **Klöstern** (Klosterschulen, später Dom- und Pfarrschulen).', 'Universitätsgründungen: **1088 Bologna**, 1365 Wien, 1460 Basel.'],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Warum war die islamische Welt wichtig für die Wissenschaft (allgemein, aber insbesondere auch in Europa)?',
    a: [
      'Weiterentwicklung griechischer und römischer Philosophie, **frei von christlichen Einschränkungen**; Bagdad unter al-Ma’mun: Rationalismus, Toleranz.',
      'Für Europa: **Bewahrung und Weitergabe antiken Wissens**.',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Wer war Augustinus, an welchen antiken Philosophen lehnte er sich an, und wie gelangt man laut ihm zu Erkenntnis?',
    a: [
      'Kirchenvater (**354–430**), Hauptarchitekt der frühen christlichen Philosophie («Über den Gottesstaat»).',
      'Anlehnung an **Platon**: Ablehnung des Körperlichen.',
      'Erkenntnis durch **Glauben** und **Selbsterfahrung/Introspektion** (göttliche Erleuchtung; Gedächtnis als «weite Paläste»).',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Was war Hildegard von Bingens Quelle der Erkenntnis, und wofür ist sie besonders bekannt?',
    a: ['Quelle: **Visionen**.', 'Bekannt für **Heilkunde** (z. B. Zitronenblätter in Wein gegen Fieber).'],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Wer war Thomas von Aquin, und was wird unter Scholastik verstanden?',
    a: [
      'Theologe (**1225–1274**), bedeutendster Vertreter der Scholastik; übernimmt die **aristotelische** Seelenlehre.',
      '**Scholastik:** mittelalterliche Schulphilosophie – Glaubenssätze mit antiker (aristotelischer) Logik begründen; christliche Weisheit vollendet sich in der Verbindung von **Glauben und Wissen**.',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Was könnte unter «Immunisierung/Stärkung der christlichen Lehre durch antike Philosophen» gemeint sein?',
    a: ['Antike Autoritäten (v. a. Aristoteles) **stützen** die christliche Lehre: logisch begründete Glaubenssätze sind schwerer angreifbar – sie werden gegen Kritik «immun».'],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Für was könnte das Zitat von Aquin stehen: «Die Seele verhält sich zum Leib, wie der Schiffer zu seinem Boot, wie der Mensch zu seiner Kleidung»?',
    a: [
      'Beispiel für den **Übertrag aristotelischer Logik**: Die Seele lenkt/nutzt den Körper, bleibt aber **von ihm unterscheidbar**.',
      'So bleibt die christliche Unsterblichkeit der Seele gewahrt, obwohl die aristotelische Seelenlehre übernommen wird.',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Was für eine Haltung vertrat Montaigne bezüglich des Erlangens von Wissen?',
    a: ['**Skepsis** – «Ich enthalte mich»: genau beobachten, präzise beschreiben, Urteil zurückhalten. «Besser unentschieden bleiben, als einem Prinzip verfallen, auch nicht dem meinen.»'],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Welche Weltanschauung wird Montaigne zugeschrieben, und inwiefern hat diese in der heutigen Psychotherapie Einzug gefunden?',
    a: [
      '**Kognitiver Konstruktivismus:** «Wären aber die Dinge wirklich das, für was wir sie halten, so müssten alle Menschen sie gleich empfinden.»',
      'Psychotherapie: In kognitiven Ansätzen lösen **Bewertungen** statt der Dinge selbst Gefühle aus – diese Bewertungen werden bearbeitet.',
    ],
  },
  {
    ch: 'mittelalter',
    official: true,
    q: 'Was für ein Phänomen nutzte Montaigne, um einem Freund bezüglich der Impotenz zu helfen?',
    a: ['Die **Einbildung/Suggestion** – ein Placebo-artiger «Talisman».'],
  },

  /* Block 4 */
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was meint «Ich denke, also bin ich»? Wie kam Descartes zu diesem Ausspruch?',
    a: [
      'Durch **radikalen Zweifel** an allem (Sinne, Körper, Welt).',
      'Selbst wenn ein Betrüger mich täuscht, bin ich, der zweifelt/denkt → **das Denken ist die einzige Gewissheit**.',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Wie gelangt man laut Descartes zu Erkenntnis? Wie nennt man diesen Vorgang? Geben Sie 2–3 Beispiele eines solchen Schlusses.',
    a: [
      'Durch den **Verstand**, vom Allgemeinen aufs Einzelne → **Deduktion**.',
      'Fische leben im Wasser. Goldfisch Hermann ist ein Fisch. → Hermann lebt im Wasser.',
      'Alle Menschen sind sterblich. Sokrates ist ein Mensch. → Sokrates ist sterblich.',
      'Problem: Der Schluss ist nur so gut wie die (unbewiesene) Prämisse.',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Welche zwei Substanzen beschreibt Descartes und wie unterscheiden sie sich?',
    a: ['**Res cogitans:** geistige, denkende Substanz, nicht ausgedehnt.', '**Res extensa:** räumlich ausgedehnte Substanz/Körperwelt. → **Dualismus**.'],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Warum wird Descartes den materialistischen/mechanistischen Vertretern zugeschrieben?',
    a: [
      'Wegen des **Reflexbogens** (Fuss zieht sich vom Feuer zurück, 1632): Der Körper ist ein Mechanismus, der Gesetzen folgt.',
      'Aber: Die **Seele bleibt eigenständig** – er ist kein Materialist im Sinne von La Mettrie.',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was ist Empirismus (beschreiben Sie kurz die grundlegenden Merkmale)?',
    a: [
      'Welt = Ansammlung von Tatsachen; Erkenntnis durch **Erfahrung mit den Sinnen**.',
      'Erfahrungen lassen sich verallgemeinern, ordnen, bearbeiten; Erfahrung ist stückhaft; keine vorgegebene Ordnung in der Körperwelt. Vertreter: Bacon, Hume (Locke: tabula rasa).',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Wie gelangt man im Empirismus zu Erkenntnis? Nennen Sie 2–3 Beispiele für einen solchen Vorgang.',
    a: [
      '**Induktion:** vom Einzelnen aufs Allgemeine.',
      'Hermann lebt im Wasser, Hermann ist ein Fisch … → Alle Fische leben im Wasser.',
      'Jeder Schwan, den ich gesehen habe, war weiss → Alle Schwäne sind weiss.',
      'Problem: Zeit & Vollständigkeit (Induktionsproblem).',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was ist mit «tabula rasa» gemeint?',
    a: ['Der Geist ist bei Geburt ein **leeres Blatt**; alle Inhalte stammen aus Erfahrung, **keine angeborenen Ideen** (John Locke, 1690).'],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Wenn Sie Empirismus und Rationalismus zentralen Denkern aus der Antike zuordnen müssten, welche wären das?',
    a: ['**Empirismus ↔ Aristoteles** («Nichts im Bewusstsein, was nicht zuvor in den Sinnen war»).', '**Rationalismus/Idealismus ↔ Platon** (Erkenntnis durch Denken). Notiz: «Kann nicht einfach schubladisieren.»'],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was beschreibt David Hume mit dem Induktionsproblem?',
    a: [
      'Aus noch so vielen Einzelbeobachtungen folgt nie sicher eine allgemeine Regel – **Zeit & Vollständigkeit**: Man hat nie alle Fälle beobachtet.',
      '**Truthahn-Beispiel:** täglich gefüttert, schliesst er, es bleibe immer so – bis zum Festtag.',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was ist Falsifikationismus und von wem wurde diese Theorie beschrieben? Nennen Sie 2–3 Beispiele.',
    a: [
      '**Karl Popper:** Eine Hypothese wird nach **einem Gegenbeispiel verworfen**; jede wissenschaftliche Hypothese muss **falsifizierbar** sein.',
      'Beispiele: «Alle Schwäne sind weiss» (schwarzer Schwan) · «Alle Metalle leiten Strom».',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Was ist Materialismus, und wie unterscheiden sich Descartes und La Mettrie (Stichwort: Seele)?',
    a: [
      '**Materialismus:** Alle Vorgänge gehen auf Materielles zurück; Geistiges ist nicht eigenständig. «Der Mensch als Maschine» (La Mettrie, 1748).',
      '**Descartes:** Körper mechanisch, aber eigenständige Seele (Dualismus). **La Mettrie:** auch die Seele hängt vom Körper ab, z. B. Nahrung stärkt/schwächt sie (Monismus).',
    ],
  },
  {
    ch: 'neuzeit',
    official: true,
    q: 'Welche Metaphern wurden und werden häufig zur Beschreibung des Materialismus verwendet?',
    a: ['**Maschine**, **Uhrwerk/Mechanismus**; bei Descartes: Gott als **Brunnenmeister**.'],
  },

  /* Block 5 */
  {
    ch: 'psychognostik',
    official: true,
    q: 'Welches waren die drei Hauptmotive, welche die Ansätze der Psychognostik förderten?',
    a: ['(1) Förderung der **Selbsterkenntnis** (Zufriedenheit)', '(2) **pragmatisches Urteil** (Kann ich dieser fremden Person trauen?)', '(3) **Philanthropie** (Teilhabe an den Empfindungen der Mitmenschen)'],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Weshalb verglich Giambattista della Porta Menschen mit Tieren, respektive was sah er als Ursache dafür?',
    a: [
      'Körpermerkmale haben **natürliche Ursachen**: Körper und Seele passen sich an **dieselbe Umwelt** an, die Mensch und Tier teilen.',
      'Dazu die **Temperamentenlehre nach Galen**. → Wer einem Tier ähnelt, hat auch dessen Charakter (Adler-, Schafs-, Eselmensch …).',
    ],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Weshalb waren Vertreter wie Lavater oder Lombroso der Meinung, dass man anhand von Körpermerkmalen auf den Charakter schliessen könne?',
    a: [
      '**Lavater:** Ganzheitlichkeit – das Innere (Seele) entspricht dem Äusseren; Physiognomik als göttliche Offenbarung und «schnelles Menschengefühl».',
      '**Lombroso:** «geborener Verbrecher» – aus Verbrecherbildern Merkmale ableiten, um Täter im Vorfeld zu erkennen.',
    ],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Welche Kritik brachte Lichtenberg diesbezüglich an?',
    a: [
      '«Gelehrte und Narren besitzen oftmals das gleiche Gesicht.»',
      'Der Körper ist für die Anforderungen der Natur gebaut; treffende Urteile beruhen auf **Kleidung, Auftreten, Spuren früherer Handlungen**, nicht auf Gesichtszügen.',
    ],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Gibt es ein wissenschaftliches Fundament für die Physiognomik, und wird diese heute noch angewendet?',
    a: [
      '**Nein.** Qin et al. (2016): 20 Persönlichkeitsmerkmale und IQ liessen sich aus Gesichtern nicht vorhersagen; nur schwache Korrelation bei Regelbefolgung.',
      'Historisch Boden für Rassismus und Eugenik (Lombroso).',
    ],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Was ist mit «Vermögen» gemeint, und was bedeutet eine Ausdehnung bzw. eine Delle am Schädel?',
    a: [
      '**Vermögen** (Gall: 20) = psychische Fähigkeiten/Anlagen mit **festem Sitz im Gehirn**.',
      '**Ausdehnung** = Vermögen stark ausgeprägt; **Delle/Einbuchtung** = schwach ausgeprägt.',
    ],
  },
  {
    ch: 'psychognostik',
    official: true,
    q: 'Weshalb gingen die Graphologen davon aus, dass man anhand der Schrift auf die Persönlichkeit eines Menschen schliessen könne?',
    a: ['Persönlichkeit drückt sich in der **Motorik** aus → unterschiedliches Schriftbild (Michon, 1875).', 'Empirisch nicht haltbar: Dazzi & Pedrabissi (2009).'],
  },

  /* Block 6 */
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Wie und was untersuchten Ernst Heinrich Weber und Gustav Theodor Fechner?',
    a: [
      '**Weber:** wie stark ein Reiz verändert werden muss, damit ein Unterschied bemerkt wird (Gewichte, Druck, Helligkeit, Linienlänge) → eben merkliche Differenz.',
      '**Fechner:** Verhältnis ansteigender Reizstärken zu den Empfindungsintensitäten – «exacte Lehre von den Abhängigkeitsbeziehungen zwischen Körper und Seele» = **Psychophysik**. Beginn der Laboruntersuchungen.',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Was ist mit dem Ausdruck «eben merkliche Differenz» gemeint?',
    a: ['Der **kleinste wahrnehmbare Unterschied** zwischen zwei Reizen.'],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Was ist mit dem «Weber-Gesetz» (Konstante) gemeint? Und warum hat Fechner dieses Gesetz erweitert?',
    a: [
      '**ΔR/R = const.:** Die eben merkliche Differenz steht in konstantem Verhältnis zum Ausgangsreiz (400 g → +10 g, 800 g → +20 g; Gewichte 2,5–3 %).',
      'Fechner erweiterte es, weil die Weber-Konstanten **nur im mittleren Reizbereich** gelten: **E = K · ln R + C** – Reiz wächst geometrisch, Empfindung arithmetisch.',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Wer war Wilhelm Wundt? Wieso gilt er als Begründer der modernen Psychologie, und welches ist das Begründungsjahr?',
    a: [
      'Mediziner/Physiologe (1832–1920), Assistent bei Helmholtz; 1874 Zürich, 1875 Leipzig.',
      '**1879** gründete er das **erste experimentalpsychologische Institut** – erstmals ein Labor eigens für psychologische Experimente; 1883 «Philosophische Studien»; Vorbild für Neugründungen international.',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Welche Methode zur Erfassung der psychischen Vorgänge praktizierte Wundt?',
    a: ['**Instruierte Selbstbeobachtung** (Introspektion unter kontrollierten Laborbedingungen) und **Reaktionszeiten**.'],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Was ist Apperzeption? Welche Formen werden unterschieden und wie wurden sie untersucht?',
    a: [
      '**Apperzeption** = das Bemerken eines Bewusstseinsinhaltes (aktives Verbinden von Vorstellungen).',
      '**Verschmelzung** (gleiches Sinnesgebiet, Summ- + Glockenton) · **Komplikation** (verschiedene Sinnesgebiete, Glockenton + Stromstoss).',
      'Untersucht mit **Reaktionszeiten**: je mehr und je unähnlichere Reize, desto langsamer (Tchisch, 1885).',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Welche Dimensionen der Emotionen unterschied Wundt, wie hat er sie gemessen, und welche konnten sich halten?',
    a: [
      '**Lust/Unlust**, **Erregung/Beruhigung**, **Spannung/Lösung** – gemessen über physiologische Begleiterscheinungen (Puls, Atmung, Blutdruck).',
      'Gehalten haben sich **Lust/Unlust (Valenz)** und **Erregung/Beruhigung (Aktivierung)**.',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Welches war für Wundt der zweite Zweig der wissenschaftlichen Psychologie neben der experimentellen Psychologie? Und wie gelangte er hier zu Erkenntnis?',
    a: [
      'Die **Völkerpsychologie**: höhere seelische Prozesse über **kulturelle Erzeugnisse** (Sprache, Mythen, Sitten).',
      '«Wo das absichtliche Experiment aufhört, da hat die Geschichte für den Psychologen experimentiert.»',
    ],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Warum stellte Wilhelm Dilthey «Geisteswissenschaften» als Oberbegriff den Naturwissenschaften gegenüber?',
    a: ['Geistige Werke (Dichtung), gedankliche Konstruktionen (Religion), soziale Systeme (Staat) brauchen eine **eigene Methode**: **verstehen statt erklären** (Hermeneutik).'],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Was ist mit nomothetisch, was mit idiographisch gemeint?',
    a: ['**Nomothetisch:** allgemeine Gesetze (Naturwissenschaft).', '**Idiographisch:** das Einmalige, Individuelle beschreiben (Geisteswissenschaft). Begriffe von **Windelband**.'],
  },
  {
    ch: 'wissenschaft',
    official: true,
    q: 'Welche Wendung verhalf der Psychologie zu Aufschwung und Emanzipation von der Philosophie, und wo bewegt sie sich heute?',
    a: [
      'Die Hinwendung zur **experimentellen, naturwissenschaftlichen Methode** (Labore, Institute).',
      'Heute zwischen beiden Polen, **überwiegend empirisch-naturwissenschaftlich**.',
    ],
  },

  /* Block 7 */
  {
    ch: 'schulen',
    official: true,
    q: 'Was für Experimente führten Oswald Külpe und seine Mitarbeitenden durch? Und was für Methoden wurden dafür angewendet?',
    a: [
      'Projektion von Figuren mit variierender Grösse/Helligkeit, Darbietungszeiten und Intervallen; Denkaufgaben (z. B. Aphorismen verstehen).',
      'Methode: **systematische, experimentelle Selbstbeobachtung bei Denkprozessen** – Versuchsleiter stellt Aufgaben und protokolliert die Schilderungen.',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Was ist mit «Denken ohne Anschauung» gemeint?',
    a: [
      'Viele Gedanken sind **unanschaulich** (nicht über die Sinne vermittelt); nicht alle Urteile sind regelhaft hergeleitet.',
      'Einschätzungen des eigenen Denkens = **«Bewusstseinslagen»** (heute: Metakognition).',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Anhand welcher Untersuchungen kam Külpe zum Schluss: Es gibt keine Anschauung ohne Denken?',
    a: ['Anhand der **Projektionsversuche** mit Figuren (Grösse, Helligkeit, Darbietungszeiten): Denkprozesse prägen die Wahrnehmung.'],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Narziss Ach beschrieb gewisse Kräfte beim Denkprozess als «determinierende Tendenzen». Was ist damit gemeint?',
    a: ['**Zielgerichtetes Denken**: Die **Aufgabe steuert den Denkablauf**.'],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Karl Bühler prägte den Begriff «Aha-Erlebnis». Was ist damit gemeint und wann wird es oftmals erfahren?',
    a: ['Plötzliche, mühelose **Einsicht in die Lösung** – oft nach einer Phase der **Ratlosigkeit** beim Problemlösen.'],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Welche Kritik brachte Wundt an den Untersuchungen der Würzburger Schule an, und was verlangte er für ein psychologisches Experiment?',
    a: [
      'Wundt (1907): **«Scheinexperimente»**.',
      'Anforderungen: **genaue Bestimmung der Versuchsbedingungen**, **Erfassung der Probandenreaktionen**, **beliebige Wiederholbarkeit**.',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Mit welchen Argumenten verteidigte Bühler die Untersuchungsmethoden?',
    a: ['Bühler (1908): Die **Aufgabenstellung lenkt** Denken und Aufmerksamkeit · Erlebnisse sind **nicht beliebig** · Aussagen sind **vergleichbar**.'],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Welchem Ansatz (Leipziger/Würzburger Schule) stehen wir heute in der Forschung näher?',
    a: [
      'Methodisch **Wundt/Leipzig** (Standardisierung, Replizierbarkeit).',
      'Aber die Würzburger Schule öffnete die Psychologie für **phänomenologische Richtungen** und das Denken als Thema.',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Warum könnte es aus Sicht der Gestaltpsychologie problematisch sein, eine «Gestalt» in ihre einzelnen Elemente herunterzubrechen? Erklären Sie dies anhand einer Melodie.',
    a: [
      '**Das Ganze ist mehr als die Summe seiner Teile.** Transponiert man eine Melodie, sind alle Töne anders – die Melodie bleibt erkennbar.',
      'Zerlegt man sie in Einzeltöne, geht die Gestalt verloren → Zerlegung in Elemente (wie bei Wundt) verfehlt das Wesentliche.',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Welche bekannte Formel stellte Lewin auf, und was stellte er mit Vektoren dar?',
    a: [
      '**V = f(P, U)** – Verhalten ist eine Funktion von Person und Umwelt.',
      '**Vektoren** = Kräfte im Lebensraum mit **Stärke und Richtung**, ausgelöst durch den **Aufforderungscharakter** (valence) der Regionen und die Bedürfnisse der Person.',
    ],
  },
  {
    ch: 'schulen',
    official: true,
    q: 'Warum könnte es dem kleinen Mädchen (Hannah) so schwerfallen, sich auf einen Gegenstand wie den Stein zu setzen? Erklären Sie dies mithilfe von Lewins Feldtheorie.',
    a: [
      'Der Stein ist eine **Zielregion mit positivem Aufforderungscharakter** – die Kraft zieht Hannah zu ihm hin.',
      'Um sich zu setzen, müsste sie sich **von ihm abwenden** (Bewegung weg von der Zielregion) – dagegen wirkt die Kraft.',
    ],
  },

  /* Block 8 – eigene Repetitionsfragen */
  {
    ch: 'psychiatrie',
    official: false,
    q: 'Welche Erklärung psychischer Krankheiten hielt sich von der Antike bis in die Neuzeit?',
    a: ['Die **Humoralpathologie** (Vier-Säfte-Lehre): Krankheit durch ein Ungleichgewicht der Säfte → Aderlass, Abführen, Diäten.'],
  },
  {
    ch: 'psychiatrie',
    official: false,
    q: 'Warum entstand die Psychiatrie als Institution?',
    a: ['Aus der **Not überforderter Familien**, die ihre Angehörigen nicht pflegen konnten; zudem wollte man die Kranken **ausserhalb**, nicht in der Nähe haben.'],
  },
  {
    ch: 'psychiatrie',
    official: false,
    q: 'Was war das «moralische Regime» und wer war ein bekannter Verfechter?',
    a: ['Ab **1790** in Frankreich und England: Verständnis, Freundlichkeit, geduldige Pflege, **Verzicht auf entbehrliche Zwangsmassnahmen**.', 'Verfechter: **Philippe Pinel** (paternalistische Milieutherapie).'],
  },
  {
    ch: 'psychiatrie',
    official: false,
    q: 'Welche Eingriffe prägten die Psychiatrie im 20. Jahrhundert, und was änderte sich nach dem Krieg?',
    a: [
      '**Lobotomie (1935)**, **EKT (1938)** – zunächst breit ohne Indikation, Aufklärung, Anästhesie; ab 1960 durch **Psychopharmaka** verdrängt.',
      'Nachkriegszeit: **Deinstitutionalisierung**, Spezialisierung, **Sozialpsychiatrie**.',
    ],
  },
  {
    ch: 'psychiatrie',
    official: false,
    q: 'Wo sehen Sie Probleme beim Anwenden von Zwangsmassnahmen?',
    a: ['Verletzung von Würde und Autonomie, Traumatisierung, Vertrauensverlust, Missbrauchsgefahr. Historisch: Zwangsmassnahmen zur «Erziehung» erwiesen sich als **verheerend**.'],
  },

  /* Block 9 – eigene Repetitionsfragen */
  {
    ch: 'tiefen',
    official: false,
    q: 'Ist Freud der Entdecker des Unbewussten?',
    a: ['**Nein.** Vorläufer: **Fechner** (Begriff des Unbewussten), **Eduard von Hartmann** (Philosoph des Unbewussten), **Nietzsche**.'],
  },
  {
    ch: 'tiefen',
    official: false,
    q: 'Woher stammt das Setting der Psychoanalyse?',
    a: ['**Charcot** (Hypnose bei Hysterie) → Fall **Anna O.** (Breuers Patientin) → **Redekur / «talking cure»** → Couch, freies Erzählen statt Somnambulie.'],
  },
  {
    ch: 'tiefen',
    official: false,
    q: 'Beschreiben Sie Freuds Strukturmodell.',
    a: [
      '**Es:** Unbewusstes, Triebhaftes; Lustprinzip.',
      '**Ich:** bewusste Instanz; Realitätsprinzip; vermittelt zwischen Es, Über-Ich und Realität.',
      '**Über-Ich:** Gewissen, verinnerlichte Normen (Ödipus-Situation). «Wo Es war, soll Ich werden.»',
    ],
  },
  {
    ch: 'tiefen',
    official: false,
    q: 'Warum trennte sich Adler von Freud, und welche Begriffe gehören zu seiner Individualpsychologie?',
    a: [
      '1911: Er **bestritt die zentrale Rolle der Sexualität**.',
      'Lebensplan, Leitlinien, Lebensstil, **Minderwertigkeit**, **Kompensation** (Überkompensation → neurotische Symptome), **Gemeinschaftsgefühl**.',
    ],
  },
];
