import type { ControlQuestion, KeyNumber, Pitfall } from '../model';

/** Prüfungsrelevante Zahlen und Befunde – kapitelübergreifend. */
export const keyNumbers: KeyNumber[] = [
  { ch: 'einfuehrung', value: 'r = .51', text: 'Intelligenz – Berufserfolg (Schmidt & Hunter 1998; neu Sackett et al. 2021: .31)', src: 'S. 23, 25' },
  { ch: 'einfuehrung', value: 'r = .31', text: 'Gewissenhaftigkeit – Berufserfolg (neu: .19)', src: 'S. 23, 25' },
  { ch: 'einfuehrung', value: 'r = .36', text: 'Persönlichkeit – Wohlbefinden', src: 'S. 25' },
  { ch: 'einfuehrung', value: '.56 vs. .49', text: 'Computer-Urteil aus Facebook-Likes vs. Urteil von Facebook-Freunden (Youyou et al. 2015)', src: 'S. 25' },
  { ch: 'einfuehrung', value: '1575', text: 'Huarte, «Examen» – «Geburtstag der differentiellen Psychologie»', src: 'S. 21' },
  { ch: 'einfuehrung', value: '> 100', text: 'Definitionen von Persönlichkeit bei Allport (1937)', src: 'S. 11' },
  { ch: 'intelligenz', value: 'M 100 · SD 15', text: 'Abweichungs-IQ nach Wechsler, bezogen auf die Altersgruppe', src: 'S. 39' },
  { ch: 'intelligenz', value: '7 PMA', text: 'Primärfaktoren nach Thurstone (56 Tests, 218 Collegestudierende)', src: 'S. 43' },
  { ch: 'intelligenz', value: '4 × 3', text: 'BIS: 4 Operationen × 3 Inhalte + g (545 Berliner Abiturient*innen)', src: 'S. 45' },
  { ch: 'intelligenz', value: 'r = .63 (.73)', text: 'IQ-Stabilität über 66 Jahre (Deary et al. 2000), korrigiert .73; gegen 90 J. ca. .50', src: 'S. 49' },
  { ch: 'intelligenz', value: '1–5 IQ-Punkte', text: 'pro zusätzlichem Bildungsjahr (Ritchie & Tucker-Drob 2018)', src: 'S. 51' },
  { ch: 'intelligenz', value: '+0,3 / Jahr', text: 'Flynn-Effekt im 20. Jh. (≈ 30 Punkte in 100 Jahren)', src: 'S. 29' },
  { ch: 'intelligenz', value: 'ρ ≈ .20', text: 'Offenheit – Intelligenz (stärkstes Big-Five-Korrelat neben N; Anglim et al. 2022)', src: 'S. 51' },
  { ch: 'eigenschaften', value: '≥ .30', text: 'Faktorladung, ab der eine Variable einem Faktor zugeordnet wird', src: 'S. 59' },
  { ch: 'eigenschaften', value: '≈ 18 000', text: 'persönlichkeitsrelevante Wörter im Englischen (Allport & Odbert 1936)', src: 'S. 63' },
  { ch: 'eigenschaften', value: '5 × 6', text: 'FFM: 5 Faktoren mit je 6 Facetten (Costa & McCrae 1992)', src: 'S. 64' },
  { ch: 'eigenschaften', value: '700 / 39', text: '«neurotische» Soldaten / Variablen in Eysencks Herleitung von E und N (1947)', src: 'S. 66' },
  { ch: 'anlage', value: '> 98 %', text: 'der DNA ist allen Menschen gemeinsam; ca. 97 % der Gene teilen wir mit Schimpansen', src: 'S. 78' },
  { ch: 'anlage', value: 'h² = 2 (rMZ − rDZ)', text: 'Falconer-Formel; Beispiel .86/.60 → .52', src: 'S. 98–99' },
  { ch: 'anlage', value: 'ca. 50 %', text: 'genetischer Anteil an IQ-Unterschieden; steigt von ca. 40 % (Kindheit) auf ca. 60 % (Erwachsene)', src: 'S. 84, 94' },
  { ch: 'anlage', value: '5 : 4', text: 'Gene : Umwelt beim IQ (Asendorpf 2024: 50 % genetisch, 40 % Umwelt, 10 % Fehler)', src: 'S. 85' },
  { ch: 'anlage', value: '.30–.40', text: 'Heritabilität der Big Five (E .42, O .41, N .39, A .35, C .31)', src: 'S. 86' },
  { ch: 'anlage', value: 'r = .78', text: 'getrennt aufgewachsene EZ, Intelligenz (Pedersen et al. 1992) – obere Schranke', src: 'S. 83' },
  { ch: 'anlage', value: '75 % vs. 25 %', text: 'Uni-Besuch im obersten vs. untersten PGI-Dezil (Plomin & von Stumm 2022)', src: 'S. 94' },
  { ch: 'anlage', value: '7 %', text: 'der Genexpressions-Änderungen bei Scott Kelly blieben nach der Rückkehr bestehen', src: 'S. 96' },
  { ch: 'stabilitaet', value: '.40–.60', text: 'Rank-order-Stabilität über 10 Jahre (über ≥ 30 Jahre ca. .20)', src: 'S. 107' },
  { ch: 'stabilitaet', value: '60 vs. 25', text: 'Peak der Rangstabilität: Folie «um 60 J.» vs. Metaanalyse Bleidorn 2022 «Plateau ab ca. 25»', src: 'S. 107, 113' },
  { ch: 'stabilitaet', value: 'd = .37', text: 'Trait-Veränderung durch Psychotherapie (Roberts et al. 2017; 207 Studien, Ø 24 Wochen)', src: 'S. 112–113' },
  { ch: 'lerntheorie', value: '≤ 10 %', text: 'der negativen Zustände erklären Situationsfaktoren allein', src: 'S. 138–139' },
  { ch: 'ei', value: 'r ≈ .50', text: 'Fragebogen-EI – Big Five (Dawda & Hart 2000)', src: 'S. 177' },
  { ch: 'ei', value: '21', text: 'Emotionsforschende (ISRE) im Expert*innenkriterium', src: 'S. 162–165' },
  { ch: 'ei', value: '.38 vs. .22', text: 'Wohlbefinden: Mixed-Model-Fragebogen vs. Fähigkeitstests (Sánchez-Álvarez et al. 2016)', src: 'S. 188' },
  { ch: 'ei', value: '.29 / .31 / .22', text: 'EI – psychische / psychosomatische / körperliche Gesundheit (Schutte et al. 2006)', src: 'S. 190' },
  { ch: 'ei', value: 'ca. 30', text: 'Messinstrumente für EI', src: 'S. 191' },
  { ch: 'wohlbefinden', value: '1 von 3', text: 'Studierenden zeigt Depressionssymptome – fast doppelt so viele wie in der Wohnbevölkerung', src: 'S. 193' },
  { ch: 'wohlbefinden', value: 'M = 4.74', text: 'Lebenszufriedenheit Schweiz auf Skala 1–7 (SD 1.23, N = 14 169; Ruch 2010)', src: 'S. 205' },
  { ch: 'wohlbefinden', value: '24 / 6', text: 'VIA: 24 Charakterstärken in 6 Tugenden', src: 'S. 209' },
  { ch: 'wohlbefinden', value: '3–7', text: 'Signaturstärken pro Person (empirisch nicht belegt)', src: 'S. 216' },
  { ch: 'wohlbefinden', value: '≥ 4', text: 'Signaturstärken am Arbeitsplatz → mehr Positives, eher Berufung (Harzer & Ruch 2012)', src: 'S. 220' },
];

export const pitfalls: Pitfall[] = [
  /* 1 Einführung */
  {
    ch: 'einfuehrung',
    topic: 'Charakter vs. Temperament',
    a: { label: 'Charakter', text: '**moralischer** Aspekt; bei Eysenck konativ (Wille)' },
    b: { label: 'Temperament', text: '**affektiv**, früh vorhanden, genetische Komponente' },
    tipp: 'Beide sind Teile der Persönlichkeit, nicht dasselbe wie sie.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Typologie vs. Differentielle Psychologie',
    a: { label: 'Typologie', text: 'Kategorien, **keine Abstufung** innerhalb eines Typs' },
    b: { label: 'Differentiell', text: '**Dimensionen**, Differenzierung entlang mehrerer Kontinua' },
    tipp: 'Die Persönlichkeitspsychologie denkt heute dimensional.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Trait vs. State',
    a: { label: 'Trait', text: 'relativ **stabile** Eigenschaft, z. B. Heiterkeit als Eigenschaft' },
    b: { label: 'State', text: '**Zustand**, z. B. Stimmung' },
    tipp: 'Beispiel Ruch: Trait-Heiterkeit bestimmt, wie stark die State-Stimmung unter widrigen Umständen sinkt.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Hippokrates vs. Galen',
    a: { label: 'Hippokrates', text: '**Säftelehre** (Humoralpathologie), medizinisch: Gleichgewicht = Gesundheit' },
    b: { label: 'Galen', text: 'verbindet Säfte ↔ **vier Temperamente** (psycho-physische Konstitution)' },
    tipp: '«Geburtstag der differentiellen Psychologie» = **Huarte 1575**, nicht Galton oder Wundt.',
  },
  {
    ch: 'einfuehrung',
    topic: 'Idiographisch vs. nomothetisch',
    a: { label: 'Idiographisch', text: 'individuumzentriert: Persönlichkeit einzigartig, kein Vergleich' },
    b: { label: 'Nomothetisch', text: 'allgemeine Gesetzmässigkeiten: Differentielle Psych., Typologien, Allgemeine Psych.' },
    tipp: 'Typologien sind nomothetisch – sie vergleichen Personen, aber nur grob in Kategorien.',
  },
  /* 2 Intelligenz */
  {
    ch: 'intelligenz',
    topic: 'Galton vs. Binet',
    a: { label: 'Galton', text: '**eine allgemeine** Fähigkeit' },
    b: { label: 'Binet', text: '**Bündel separater** Fähigkeiten' },
    tipp: 'Leicht zu vertauschen! Galton → «g-Tradition», Binet → «Bündel».',
  },
  {
    ch: 'intelligenz',
    topic: 'Spearman vs. Thurstone',
    a: { label: 'Spearman', text: '**g + s**; s wird als Fehler behandelt' },
    b: { label: 'Thurstone', text: 'mehrere **gleichrangige Primärfaktoren**; g ohne inhaltliche Bedeutung' },
    tipp: 'Unterschied v. a. durch Stichprobe (homogene Collegestudierende) und Methode.',
  },
  {
    ch: 'intelligenz',
    topic: 'Fluide vs. kristallisierte Intelligenz',
    a: { label: 'gf', text: 'neue Probleme, **kulturfair** messbar, nimmt im Alter ab («Mechanics»)' },
    b: { label: 'gc', text: 'gelerntes Wissen, bleibt länger erhalten («Pragmatics»)' },
    tipp: 'Nur gf lässt sich «kulturfrei» messen (CFT). Offenheit korreliert stärker mit gc.',
  },
  {
    ch: 'intelligenz',
    topic: 'BIS: Operationen vs. Inhalte',
    a: { label: '4 Operationen', text: 'Bearbeitungsgeschwindigkeit, Gedächtnis, Einfallsreichtum, Verarbeitungskapazität' },
    b: { label: '3 Inhalte', text: 'figural-bildhaft, verbal, numerisch' },
    tipp: 'Vier **Operationen** (nicht Inhalte!) – «bimodal», weil jede Leistung beides betrifft.',
  },
  {
    ch: 'intelligenz',
    topic: 'Flynn vs. Anti-Flynn',
    a: { label: 'Flynn-Effekt', text: '**Anstieg** um ca. 0,3 IQ-Punkte/Jahr im 20. Jh.' },
    b: { label: 'Anti-Flynn', text: '**Rückgang** u. a. in DK, NO, DE, CH' },
    tipp: 'Beides spricht für **Umwelteinflüsse** (Norwegen: jüngere Brüder schlechter).',
  },
  /* 3 Eigenschaften */
  {
    ch: 'eigenschaften',
    topic: 'Orthogonale vs. oblique Rotation',
    a: { label: 'Orthogonal', text: 'Faktoren **unkorreliert**' },
    b: { label: 'Oblique', text: 'Faktoren **korreliert** → Superfaktoren höherer Ordnung möglich' },
    tipp: 'Nur bei obliquer Rotation lassen sich Faktoren höherer Ordnung bilden.',
  },
  {
    ch: 'eigenschaften',
    topic: 'Lexikalischer Ansatz: wer ja, wer nein?',
    a: { label: 'Cattell, FFM', text: 'bauen auf dem lexikalischen Ansatz auf' },
    b: { label: 'Eysenck', text: '**lehnt ihn ab**; Extremgruppen + biologische Basis' },
    tipp: 'Die lexikalische Hypothese geht auf **Galton (1884)** zurück.',
  },
  {
    ch: 'eigenschaften',
    topic: 'Psychotizismus vs. Psychose',
    a: { label: 'Psychotizismus (P)', text: '**Kontinuum** im Normalbereich (quantitativ)' },
    b: { label: 'Psychose', text: 'klinische Störung; hohes P = erhöhtes Risiko' },
    tipp: 'Kategorial wäre «Mandarine vs. Apfel» – genau das bestreitet Eysenck.',
  },
  {
    ch: 'eigenschaften',
    topic: 'A vs. C (englische Kürzel)',
    a: { label: 'A = Agreeableness', text: '**Verträglichkeit**' },
    b: { label: 'C = Conscientiousness', text: '**Gewissenhaftigkeit**' },
    tipp: 'OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.',
  },
  {
    ch: 'eigenschaften',
    topic: 'NEO (1985) vs. NEO-PI-R (1992)',
    a: { label: 'NEO 1985', text: 'zuerst nur **3 Faktoren** (N, E, O)' },
    b: { label: 'NEO-PI-R 1992', text: '**FFM** mit 5 Faktoren × 6 Facetten' },
    tipp: '[Ergänzung] Das Akronym NEO steht für die ersten drei Faktoren.',
  },
  {
    ch: 'eigenschaften',
    topic: 'Eysencks P im FFM',
    a: { label: 'Psychotizismus', text: 'Impulskontrolle vs. Impulsivität' },
    b: { label: 'Im FFM', text: '**niedrige Verträglichkeit + niedrige Gewissenhaftigkeit**' },
    tipp: 'Costa & McCrae: P sei eine «willkürliche Vermischung» von V und G. Offenheit fehlt bei Eysenck.',
  },
  /* 4 Anlage */
  {
    ch: 'anlage',
    topic: 'h² = .50 – was heisst das?',
    a: { label: 'Falsch', text: '«Die Hälfte **meiner** Intelligenz ist vererbt.»' },
    b: { label: 'Richtig', text: '50 % der **Varianz in der Population** gehen auf genetische Unterschiede zurück.' },
    tipp: 'Erblichkeit = Populationsstatistik, keine Aussage über den Einzelfall.',
  },
  {
    ch: 'anlage',
    topic: 'Hohe Erblichkeit vs. Veränderbarkeit',
    a: { label: 'Hohe h²', text: 'viel Varianz genetisch erklärt' },
    b: { label: 'Aber', text: '≠ unveränderbar, ≠ stabil, ≠ Gruppenunterschiede genetisch' },
    tipp: 'Erblichkeit ist keine Naturkonstante.',
  },
  {
    ch: 'anlage',
    topic: 'Geteilte vs. nicht geteilte Umwelt',
    a: { label: 'Geteilt', text: 'macht Familienmitglieder **ähnlich** (SES, Familienklima)' },
    b: { label: 'Nicht geteilt', text: 'macht **unähnlich** (Freunde, Geschwisterposition, Unfälle)' },
    tipp: 'Nicht geteilte Umwelt ist meist wichtiger – Ausnahme: IQ bis zum Verlassen des Elternhauses.',
  },
  {
    ch: 'anlage',
    topic: 'Selektive Partnerwahl',
    a: { label: 'Familien-/Adoptionsdesign', text: '**Überschätzung** der Erblichkeit' },
    b: { label: 'Zwillingsdesign', text: '**Unterschätzung** (DZ werden ähnlicher, MZ nicht)' },
    tipp: 'In der Falconer-Formel schrumpft die Differenz rMZ − rDZ, wenn rDZ steigt.',
  },
  {
    ch: 'anlage',
    topic: 'Chancengleichheit und Heritabilität',
    a: { label: 'Intuition', text: 'Mehr Chancengleichheit → weniger Einfluss der Gene' },
    b: { label: 'Tatsächlich', text: 'gleichere Umwelt → kleinere Umweltvarianz → **höhere** Heritabilität' },
    tipp: 'h² = VG / (VG + VU): sinkt VU, steigt h².',
  },
  {
    ch: 'anlage',
    topic: 'Falconer-Formel richtig anwenden',
    a: { label: 'Häufiger Fehler', text: 'Faktor 2 vergessen oder DZ − MZ rechnen' },
    b: { label: 'Richtig', text: 'a² = **2 · (rMZ − rDZ)**' },
    tipp: 'Kontrolle: c² = rMZ − a². Beispiel .86/.60 → a² = .52, c² = .34.',
  },
  /* 5 Stabilität */
  {
    ch: 'stabilitaet',
    topic: 'Mean-level vs. rank-order',
    a: { label: 'Mean-level', text: '**Gruppenmittel** bleibt gleich' },
    b: { label: 'Rank-order', text: '**Rangfolge / Korrelation** bleibt gleich' },
    tipp: 'Beide können unabhängig voneinander hoch oder tief sein. Reifung zeigt sich in **Mittelwertveränderungen**.',
  },
  {
    ch: 'stabilitaet',
    topic: 'Kohorte vs. Alter',
    a: { label: 'Generationsunterschied', text: 'Kohorteneffekt (anderer Jahrgang)' },
    b: { label: 'Altersveränderung', text: 'echte Entwicklung über das Leben' },
    tipp: 'Querschnittstudien vermischen beides.',
  },
  {
    ch: 'stabilitaet',
    topic: 'Pubertät vs. sehr hohes Alter',
    a: { label: 'Pubertät', text: 'disruption: **−C, −E, −A** (vorübergehend)' },
    b: { label: 'Sehr hohes Alter', text: 'Abnahme emotionaler Stabilität: **+N**, −A, −E, −C' },
    tipp: 'Pubertät = Abnahme, nicht Zunahme sozial relevanter Traits.',
  },
  {
    ch: 'stabilitaet',
    topic: 'Peak der Rangstabilität',
    a: { label: 'Folie S. 107', text: 'Peak **um 60 Jahre**' },
    b: { label: 'Bleidorn 2022 (S. 113)', text: '**Plateau ab ca. 25** Jahren' },
    tipp: 'In der Prüfung die Aussage der jeweiligen Folie im Blick behalten.',
  },
  /* 6 Lerntheorie */
  {
    ch: 'lerntheorie',
    topic: 'Erwartung vs. Verstärkungswert',
    a: { label: 'Erwartung (E)', text: '**Wahrscheinlichkeit**, dass Verstärkung folgt' },
    b: { label: 'Verstärkungswert (VW)', text: '**wie sehr** man die Folge will' },
    tipp: 'VP = f(E & VW) ist **keine Rechenformel** – das «&» ist keine mathematische Verknüpfung.',
  },
  {
    ch: 'lerntheorie',
    topic: 'Kontrollüberzeugung vs. Selbstwirksamkeit',
    a: { label: 'Kontrollüberzeugung', text: 'Rotter; **generalisierte Erwartung**, wo die Kontrolle liegt' },
    b: { label: 'Selbstwirksamkeit', text: 'Bandura; Vertrauen in die **eigene Handlungsfähigkeit**' },
    tipp: 'Locus of control = internal/external; Self-efficacy = «Ich kann das».',
  },
  {
    ch: 'lerntheorie',
    topic: 'Objektive vs. psychologische Situation',
    a: { label: 'Behaviorismus', text: 'objektive Reize steuern das Verhalten' },
    b: { label: 'Rotter', text: 'es zählt die **subjektive Einschätzung** (psychologische Situation)' },
    tipp: 'Rotter: Persönlichkeit ist stabil **und** veränderbar – beides begründet über Lernerfahrungen.',
  },
  /* 7 EI */
  {
    ch: 'ei',
    topic: 'Ability vs. Trait vs. Mixed',
    a: { label: 'Ability (Salovey & Mayer)', text: '**maximales** Verhalten, Test (MSCEIT)' },
    b: { label: 'Trait (Petrides) / Mixed (Bar-On, Goleman)', text: '**typisches** Verhalten, Fragebogen; Mixed = Mischung mit Persönlichkeit' },
    tipp: 'Fragebogen-EI ≈ Big Five (r ≈ .50) und korreliert nicht mit dem MSCEIT.',
  },
  {
    ch: 'ei',
    topic: 'Konsensus- vs. Expert*innenkriterium',
    a: { label: 'Konsensus', text: 'Punkte = **Häufigkeit** der Antwort in der Normstichprobe; Anwendung' },
    b: { label: 'Expert*innen', text: 'Zustimmung von 21 Emotionsforschenden; **nur Forschung**' },
    tipp: 'Dritte Variante: Target = Übereinstimmung mit der Zielperson.',
  },
  {
    ch: 'ei',
    topic: 'Erfahrungsbasierte vs. strategische EI',
    a: { label: 'Erfahrungsbasiert', text: 'Zweige 1–2: Wahrnehmung, Nutzung' },
    b: { label: 'Strategisch', text: 'Zweige 3–4: Verständnis, Management' },
    tipp: 'Hierarchie von Wahrnehmung (unten) bis Management (oben).',
  },
  {
    ch: 'ei',
    topic: 'Mixed-EI und Wohlbefinden',
    a: { label: 'Befund', text: 'Mixed-Fragebogen .38 vs. Fähigkeitstests .22' },
    b: { label: 'Aber', text: 'teils **Methodenartefakt** (gleiche Methode, überlappende Inhalte)' },
    tipp: 'Golemans «EI wichtiger als IQ» ist nicht belegt.',
  },
  /* 8 Wohlbefinden */
  {
    ch: 'wohlbefinden',
    topic: 'Was macht glücklich?',
    a: { label: 'Kaum Zusammenhang', text: 'Einkommen, Bildung, Intelligenz, Alter, Geschlecht, Attraktivität' },
    b: { label: 'Hoher Zusammenhang', text: 'Dankbarkeit, Optimismus, Arbeit haben, Selbstachtung' },
    tipp: 'Persönlichkeit und soziale Faktoren sind wichtiger als Soziodemografie.',
  },
  {
    ch: 'wohlbefinden',
    topic: 'Top-down vs. kompetenzorientiert',
    a: { label: 'Top-down', text: 'Persönlichkeit bestimmt Wohlbefinden (stabil)' },
    b: { label: 'Kompetenzorientiert', text: 'Bewältigung und Passung (Situation × Person)' },
    tipp: 'Subjektive Lebensumstände sind massgeblicher als objektive.',
  },
  {
    ch: 'wohlbefinden',
    topic: 'PERMA und Signaturstärken',
    a: { label: 'PERMA', text: '**unabhängige** Indikatoren, kein Summenwert eines Traits' },
    b: { label: 'Signaturstärken', text: '3–7 ist eine **Annahme**, empirisch nicht belegt' },
    tipp: 'Arbeitsplatz-Befund: ≥ 4 Signaturstärken anwendbar → mehr Positives, eher Berufung.',
  },
];

export const controlQuestions: ControlQuestion[] = [
  /* 1 */
  {
    ch: ['einfuehrung'],
    q: 'Welche vier Systeme umfasst Persönlichkeit nach Eysenck (1970)?',
    answer: ['**Charakter** – konatives Verhalten (Wille)', '**Temperament** – affektives Verhalten (Emotion, Gefühl)', '**Intellekt** – kognitives Verhalten (Intelligenz)', '**Körperbau** – physische Gestalt und neuroendokrine Ausstattung', 'zusammen: stabile, dauerhafte Organisation, die die einzigartige Anpassung an die Umwelt bestimmt (S. 13)'],
  },
  {
    ch: ['einfuehrung'],
    q: 'Worin unterscheiden sich idiographischer und nomothetischer Ansatz, und wo stehen Typologien?',
    answer: ['**Idiographisch** (individuumzentriert): Persönlichkeit ist einzigartig, kein Vergleich möglich.', '**Nomothetisch**: allgemeine Gesetzmässigkeiten – Differentielle Psychologie (Dimensionen), Typologien, Allgemeine Psychologie.', '**Typologien** sind nomothetisch: Einteilung in Typen anhand von Merkmalskomplexen, keine Differenzierung innerhalb eines Typs. (S. 13)'],
  },
  {
    ch: ['einfuehrung'],
    q: 'Warum sind Persönlichkeitseigenschaften «latente Variablen»? Nennen Sie ein Beispiel.',
    answer: ['Sie sind **nicht direkt beobachtbar**, sondern werden aus beobachtbarem Verhalten **erschlossen** (Verhaltensabstraktionen).', 'Beispiel: «Lady G. ist gesellig» ← schliesst schnell Freundschaft, ist gern unter Leuten, liebt Partys, ist gesprächig. (S. 27)'],
  },
  {
    ch: ['einfuehrung', 'eigenschaften'],
    q: 'Welche zwei Dimensionen nutzte Wundt, und wie griff Eysenck sie auf?',
    answer: ['Wundt (1903): **Stärke** und **Wechsel (Schnelligkeit)** der Gemütsbewegungen.', 'Eysenck (1954): die 4 Temperamente als Kombinationen von **Neurotizismus** (≈ Stärke) und **Extraversion** (≈ Wechsel). Z. B. Choleriker = labil + extravertiert, Phlegmatiker = stabil + introvertiert. (S. 21, 71)'],
  },
  {
    ch: ['einfuehrung'],
    q: 'Welche Validität hat Gewissenhaftigkeit für Berufserfolg im Vergleich zu Intelligenz?',
    answer: ['Schmidt & Hunter (1998): Intelligenz **.51**, Gewissenhaftigkeit **.31**.', 'Sackett et al. (2021): Intelligenz .31, Gewissenhaftigkeit .19 – v. a. wegen konservativerer Korrekturen. (S. 23, 25)'],
  },
  /* 2 */
  {
    ch: ['intelligenz'],
    q: 'Wie wird der Abweichungs-IQ berechnet, und was bedeuten die Variablen?',
    answer: ['IQ = 100 + 15 · (X − M) / s', 'X = individueller Rohwert, M = Mittelwert der **Altersgruppe**, s = deren Standardabweichung; (X − M)/s = z-Wert.', 'Norm mit Mittelwert 100 und SD 15. (S. 39)'],
  },
  {
    ch: ['intelligenz'],
    q: 'Warum fand Thurstone mehr Faktoren als Spearman? Nennen Sie drei Gründe.',
    answer: ['**Homogenere Stichprobe** (Collegestudierende) → eingeschränkte Varianz → kleinere Interkorrelationen → mehr Faktoren.', '**Mehr Tests**; **neuere FA** (multiple statt g-FA).', '**Einfachere Tests** – Spearmans Tests entsprechen Thurstones Faktoren. (S. 43)'],
  },
  {
    ch: ['intelligenz'],
    q: 'Grenzen Sie fluide und kristallisierte Intelligenz ab. Welche lässt sich kulturfair messen?',
    answer: ['**gf**: Anpassung an neue Probleme ohne wesentliche Lernerfahrung (figurale Relationen, Gedächtnisspanne, Induktion); nimmt ab ca. 25 ab.', '**gc**: kumulierte Lerneffekte, «Endprodukt» von gf und Schulbesuch; bleibt erhalten.', 'Nur **gf** lässt sich kulturfrei messen (CFT). (S. 43)'],
  },
  {
    ch: ['intelligenz'],
    q: 'Beschreiben Sie den Aufbau des BIS. Warum heisst es «bimodal»?',
    answer: ['4 **Operationen** (Bearbeitungsgeschwindigkeit, Gedächtnis, Einfallsreichtum, Verarbeitungskapazität) × 3 **Inhalte** (figural-bildhaft, verbal, numerisch), an der Spitze **g**.', '«Bimodal», weil jede Leistung gleichzeitig eine Operation **und** einen Inhalt betrifft. Vereint Spearman und Thurstone. (S. 45)'],
  },
  {
    ch: ['intelligenz'],
    q: 'Was spricht für, was gegen einen g-Faktor?',
    answer: ['**Für g:** kaum Testleistungen ohne Korrelation mit anderen (keine Nullkorrelationen).', '**Gegen g:** nach Extraktion des ersten Faktors bleibt reliable Varianz.', '→ «sowohl-als-auch»: hierarchische Modelle berücksichtigen alle Ebenen. (S. 47)'],
  },
  /* 3 */
  {
    ch: ['eigenschaften'],
    q: 'Erklären Sie in 1–2–3 Sätzen: Was ist eine Faktorenanalyse, wozu dient sie, wie funktioniert sie?',
    answer: ['**Was:** mathematisch-statistisches Verfahren zur Datenreduktion.', '**Wozu:** viele Variablen (Items, Verhaltensweisen) auf wenige Dimensionen (Faktoren) reduzieren; zeigt, welche Items eine Dimension gut erfassen.', '**Wie:** analysiert die Korrelationen; Variablen, die häufig gemeinsam auftreten, werden zu Faktoren zusammengefasst, die möglichst viel Varianz erklären; Ladungen ≥ .30; Rotation → Einfachstruktur. (S. 59–62)'],
  },
  {
    ch: ['eigenschaften'],
    q: 'Welche Annahmen hat die lexikalische Hypothese, und welche vier Wortkategorien fanden Allport & Odbert?',
    answer: ['Alle relevanten Beschreibungen sind in der Sprache enkodiert; je mehr Synonyme/Wörter, desto wichtiger der Trait; gilt für alle Sprachen (Galton 1884, Goldberg 1982).', 'Ca. 18 000 Wörter: **Persönlichkeitsmerkmale** (4505), **aktuelle Befindlichkeit** (4541), **Bewertungen** (5226), **Restkategorie** (3682). (S. 63)'],
  },
  {
    ch: ['eigenschaften'],
    q: 'Ordnen Sie zu: «Erlebnishunger», «Besonnenheit», «Freimütigkeit», «Verletzlichkeit», «Ästhetik».',
    answer: ['Erlebnishunger → **Extraversion**', 'Besonnenheit → **Gewissenhaftigkeit**', 'Freimütigkeit → **Verträglichkeit**', 'Verletzlichkeit → **Neurotizismus**', 'Ästhetik → **Offenheit** (S. 64)'],
  },
  {
    ch: ['eigenschaften'],
    q: 'Wie gewann Eysenck E und N, und warum fehlt Offenheit in seinem Modell?',
    answer: ['1947: 700 «neurotische» Soldaten, 39 Variablen aus Fremdbeobachtung faktorenanalysiert: 1. unrotierter Faktor = N; 2. bipolarer Faktor Dysthymie vs. Hysterie → Introversion vs. Extraversion.', 'Offenheit fehlt: Eysenck zählt O zu den **Einstellungen**; vermutlich nicht gefunden, weil die Stichprobe aus **traumatisierten Soldaten** bestand. (S. 66, 69, 71)'],
  },
  {
    ch: ['eigenschaften'],
    q: 'Wo findet sich Eysencks P im Fünf-Faktoren-Modell wieder?',
    answer: ['Aufgeteilt in **niedrige Verträglichkeit** und **niedrige Gewissenhaftigkeit**.', 'Costa & McCrae: P sei eine «willkürliche Vermischung» von V und G. (S. 69, 71)'],
  },
  /* 4 */
  {
    ch: ['anlage'],
    q: 'Berechnen Sie h² für rMZ = .70 und rDZ = .45.',
    answer: ['a² = 2 · (.70 − .45) = 2 · .25 = **.50**', 'Zusatz: c² = rMZ − a² = .70 − .50 = .20; Rest (e² + Fehler) = .30.'],
  },
  {
    ch: ['anlage'],
    q: 'Warum gilt die Korrelation getrennt aufgewachsener EZ als obere Schranke der Erblichkeit?',
    answer: ['Getrennt aufgewachsene EZ teilen alle Gene, aber (theoretisch) keine Umwelt – ihre Ähnlichkeit wird ganz den Genen zugeschrieben.', 'Sind die Umwelten **doch ähnlich** (z. B. ähnliche Adoptivfamilien), wird die Erblichkeit **überschätzt** (z. B. r = .78 für Intelligenz). (S. 83)'],
  },
  {
    ch: ['anlage'],
    q: 'Wie verändert sich die Erblichkeit des IQ über das Lebensalter, und was geschieht mit dem Einfluss der geteilten Umwelt?',
    answer: ['Erblichkeit **steigt**: ca. 40 % in der Kindheit → ca. 60–65 % bei Erwachsenen.', 'Einfluss der **geteilten Umwelt sinkt** und verschwindet (nach dem Verlassen des Elternhauses). (S. 84, 94)'],
  },
  {
    ch: ['anlage'],
    q: 'Nennen Sie vier Dinge, die ein hoher Erblichkeitskoeffizient nicht aussagt.',
    answer: ['nichts über den **Einzelfall** (Populationsstatistik)', 'keine **Naturkonstante** (variiert mit Umwelt- und Genvarianz)', 'kein Beleg, dass **Gruppenunterschiede** genetisch sind', 'nichts über **Stabilität** oder **Veränderbarkeit** (Riemann 2005; S. 95)'],
  },
  {
    ch: ['anlage'],
    q: 'Was versteht man unter der Scarr-Rowe-Interaktion?',
    answer: ['Günstige Umwelt und günstige Anlage **ergänzen sich**.', 'Genetische Varianten für Kognition wirken bei **höherem SES stärker** – in anregender Umwelt kann sich das genetische Potenzial besser entfalten. (S. 91)'],
  },
  /* 5 */
  {
    ch: ['stabilitaet'],
    q: 'Erklären Sie mean-level stability, rank-order stability und personality coherence an einem Beispiel.',
    answer: ['**Mean-level:** Der Gewissenhaftigkeits-Mittelwert einer Klasse ist mit 20 und 30 gleich – Einzelne können sich trotzdem verschieben.', '**Rank-order:** Wer mit 20 am gewissenhaftesten war, ist es auch mit 30 (hohe Korrelation) – auch wenn alle zugelegt haben.', '**Coherence:** gleiche latente Ausprägung über **altersgemässe Indikatoren** (z. B. Aggressivität: mit 8 Raufen, mit 30 verbale Angriffe). (S. 104–105)'],
  },
  {
    ch: ['stabilitaet'],
    q: 'Warum sind Längsschnittstudien ideal, und welche Probleme haben sie?',
    answer: ['Ideal, weil dieselben Personen über die Zeit verfolgt werden → echte Altersveränderung statt Kohorteneffekt.', 'Probleme: **teuer**, **selektiver Schwund** (Umzug, Abbruch, Tod); bisher v. a. **WEIRD**-Stichproben. Alternativen: Querschnitt (Stichproben-Bias, Kohorte ≠ Alter) oder Kurzzeit-Längsschnitte mehrerer Kohorten. (S. 106, 112)'],
  },
  {
    ch: ['stabilitaet'],
    q: 'Welche Lebensereignisse gehören laut Bleidorn et al. (2016) zu den einflussreichsten?',
    answer: ['**Erste romantische Beziehung** (N↓, teils E↑)', '**Schul-/Hochschuleintritt** (O, C, A↑, N↓)', '**Erster Job** (O, C↑) (S. 108)'],
  },
  {
    ch: ['stabilitaet'],
    q: 'Was besagt die disruption hypothesis?',
    answer: ['In der **Pubertät** nehmen sozial relevante Traits **vorübergehend ab** (−C, −E, −A).', 'Repliziert in Quer- und Längsschnitt, Selbst- und Elternberichten. (S. 109)'],
  },
  {
    ch: ['stabilitaet'],
    q: 'Welche Traits verändern sich durch Psychotherapie am stärksten?',
    answer: ['Vor allem **emotionale Stabilität** (N↓), dann **Extraversion** (E↑); d = .37.', 'Unabhängig von der Therapierichtung; am stärksten bei Angststörungen, am geringsten bei Substanzabhängigkeit; Effekte bleiben (Roberts et al. 2017; S. 112–113).'],
  },
  /* 6 */
  {
    ch: ['lerntheorie'],
    q: 'Erklären Sie Rotters Theorie mit den Begriffen Verhalten, Verhaltenspotenzial, Verstärker, Erwartung, Verstärkungswert, psychologische Situation.',
    answer: ['In einer **psychologischen Situation** (subjektiv wahrgenommen) stehen mehrere **Verhaltensweisen** zur Wahl.', 'Für jede hat die Person eine **Erwartung** (Wahrscheinlichkeit, dass ein **Verstärker** – die Folge – eintritt) und einen **Verstärkungswert** (wie sehr sie die Folge will).', 'Daraus ergibt sich das **Verhaltenspotenzial** VP = f(E & VW); das Verhalten mit dem grössten VP wird am wahrscheinlichsten gezeigt. (S. 127–131)'],
  },
  {
    ch: ['lerntheorie'],
    q: 'Inwiefern ist Persönlichkeit nach Rotter stabil, inwiefern veränderbar?',
    answer: ['**Veränderbar**, weil ständig neue Erfahrungen gemacht werden.', '**Stabil**, weil neue Erfahrungen durch frühere Lernerfahrungen beeinflusst (gefiltert) werden. (S. 124, 126)'],
  },
  {
    ch: ['lerntheorie'],
    q: 'Was bedeutet locus of control, welche Formen gibt es, und welche Korrelate sind bekannt?',
    answer: ['Generalisierte Erwartung, ob man selbst Kontrolle hat (**internal**) oder Macht, Glück, andere (**external**).', 'External: ängstlicher, aggressiver, dogmatischer, misstrauischer, misserfolgsvermeidend; korreliert mit Depressionsschwere.', 'Internal: effizientere Informationsverarbeitung, höhere Lebensqualität bei chronischer Krankheit, bessere Stressverarbeitung. (S. 133–134, 138)'],
  },
  {
    ch: ['lerntheorie'],
    q: 'Was versteht Bandura unter Selbstwirksamkeitserwartung, und wie kann man sie fördern?',
    answer: ['Überzeugung, aufgrund eigener Fähigkeiten mit bestimmten Handlungen ein gewünschtes Ergebnis zu erreichen; wichtig für Motivation und Resilienz.', 'Lernbar durch **Ausführen** des Verhaltens, **stellvertretende Erfahrung** (Modelllernen) und **teilnehmende Modellierung** («Trockenübung»). (S. 135–136)'],
  },
  {
    ch: ['lerntheorie'],
    q: 'Nennen Sie Vor- und Nachteile der sozialen Lerntheorie.',
    answer: ['**Pro:** geht über reine Verstärkung hinaus (Selbstverstärkung, Selbstregulation); verbindet kognitive, soziale und lerntheoretische Ansätze; «objektive» Daten; empirische Belege; hohe Relevanz in der angewandten Forschung.', '**Contra:** keine Diskussion genetischer/biologischer Einflüsse. (S. 137)'],
  },
  /* 7 */
  {
    ch: ['ei'],
    q: 'Grenzen Sie EI als Fähigkeit, Trait und Kompetenz ab und nennen Sie je eine Vertretung.',
    answer: ['**Fähigkeit:** Salovey & Mayer – Standardintelligenz, maximales Verhalten, Test (MSCEIT).', '**Trait:** Petrides & Furnham – «trait emotional self-efficacy», typisches Verhalten, Fragebogen.', '**Kompetenz (mixed):** Bar-On, Goleman – nichtkognitive, erfolgsrelevante Merkmale, Fragebogen. (S. 155–159)'],
  },
  {
    ch: ['ei'],
    q: 'Nennen Sie die vier Zweige des Ability-Modells und je einen MSCEIT-Untertest.',
    answer: ['1 **Wahrnehmung** – Gesichter, Bilder', '2 **Nutzung** – Unterstützen, Sinneseindrücke', '3 **Verständnis** – Veränderungen, komplexe Emotionen', '4 **Management** – Umgang mit eigenen Emotionen, Emotionen in Beziehungen (S. 166–175)'],
  },
  {
    ch: ['ei'],
    q: 'Wie funktioniert das Konsensuskriterium? Rechnen Sie ein Beispiel.',
    answer: ['Der Punktwert einer Antwort = **relative Häufigkeit**, mit der die Normstichprobe dieselbe Antwort gewählt hat.', 'Beispiel: Wählen 21 % Stufe 4, gibt Stufe 4 **.21 Punkte**; wählen 45 % Stufe 3, gibt Stufe 3 .45 Punkte. (S. 162–165)'],
  },
  {
    ch: ['ei'],
    q: 'Warum korrelieren Fragebogen-EI und MSCEIT kaum, Fragebogen-EI und Big Five aber hoch?',
    answer: ['Fragebogen erfassen **typisches** Verhalten bzw. Selbstwahrnehmung – inhaltlich und methodisch nah an Persönlichkeitsfragebogen (r ≈ .50, Ladungen auf E, P, N).', 'Der MSCEIT misst **maximales** Verhalten (Performanz) – eine andere Konstruktfacette und Methode → verwandte, aber verschiedene Konstrukte. (S. 176–177)'],
  },
  {
    ch: ['ei'],
    q: 'Was ist mit «EI als breite Intelligenz» und «hot information processing» gemeint?',
    answer: ['Mayer et al. (2016): EI ist eine **breite Fähigkeit** auf der mittleren Ebene eines hierarchischen Modells (wie Carrolls three stratum model) – neben gf, gc usw., unterhalb von g.', '**Hot information processing:** Verarbeitung von Informationen mit hoher **persönlicher Relevanz** (Emotionen). (S. 180–183)'],
  },
  /* 8 */
  {
    ch: ['wohlbefinden'],
    q: 'Welche Big-Five-Faktoren hängen am stärksten mit Wohlbefinden zusammen, und in welche Richtung?',
    answer: ['**Neurotizismus** (v. a. Ängstlichkeit) **negativ**.', '**Extraversion** am deutlichsten **positiv**; Verträglichkeit, Offenheit, Gewissenhaftigkeit schwächer positiv. (S. 197–198)'],
  },
  {
    ch: ['wohlbefinden'],
    q: 'Nennen Sie je zwei Faktoren mit keinem/geringem, mittlerem und hohem Zusammenhang mit Lebenszufriedenheit.',
    answer: ['**Kein/gering:** Einkommen, Intelligenz (auch Alter, Geschlecht, Bildung …)', '**Mittel:** Anzahl Freunde, Extraversion (auch verheiratet, Gesundheit, interne Kontrollüberzeugung …)', '**Hoch:** Dankbarkeit, Optimismus (auch Arbeit haben, Selbstachtung …) (S. 198)'],
  },
  {
    ch: ['wohlbefinden'],
    q: 'Wofür stehen die Buchstaben in PERMA?',
    answer: ['**P**ositive Emotions – **E**ngagement – **R**elationships – **M**eaning – **A**ccomplishment', 'fünf unabhängige Indikatoren von Wohlbefinden/Flourishing (Seligman 2011; S. 204)'],
  },
  {
    ch: ['wohlbefinden'],
    q: 'Grenzen Sie Top-down- und kompetenzorientierte Theorien des Wohlbefindens ab.',
    answer: ['**Top-down:** Eigenschaften/Temperament bestimmen Wohlbefinden → zeitstabil, situationsunabhängig.', '**Kompetenzorientiert:** Wohlbefinden = Ergebnis erfolgreicher Bewältigung; Situation × Disposition, Person-Umwelt-Fit, subjektive Umstände wichtiger. (S. 202)'],
  },
  {
    ch: ['wohlbefinden'],
    q: 'Was sind Signaturstärken, und welchen Nutzen haben sie am Arbeitsplatz?',
    answer: ['3–7 individuell besonders bedeutsame Charakterstärken («Fingerabdruck»); ihre Ausübung ist belohnend (Zahl und Kriterien empirisch nicht belegt).', 'Wer **≥ 4** am Arbeitsplatz einsetzen kann, erlebt mehr Positives und empfindet die Arbeit eher als **Berufung** (Harzer & Ruch 2012; S. 216–220).'],
  },
  /* kapitelübergreifend */
  {
    ch: ['einfuehrung', 'eigenschaften', 'stabilitaet'],
    q: 'Wie hängen die Begriffe Trait, Stabilität und Konsistenz zusammen – und was unterscheidet einen Trait von einem State?',
    answer: ['Traits sind latente Verhaltens- und Erlebensmuster mit **Stabilität** (über Zeit) und **Konsistenz** (über Situationen).', 'Stabilität ist Teil der Trait-Definition, aber immer **relativ** (rank-order über 10 J. ca. .40–.60).', 'States (Stimmungen) sind nicht stabil. (S. 13, 58, 103, 107)'],
  },
  {
    ch: ['intelligenz', 'ei'],
    q: 'Vergleichen Sie, wie Intelligenz und emotionale Intelligenz gemessen werden. Was bedeutet «maximales vs. typisches Verhalten»?',
    answer: ['**Maximales Verhalten:** Leistungstests (IQ-Tests, MSCEIT) – richtige/falsche Antworten, weniger verfälschbar, meist hochreliabel.', '**Typisches Verhalten:** Fragebogen (Trait-EI, Mixed-EI, Big Five) – Selbstbericht, anfällig für soziale Erwünschtheit.', 'Beide Leistungsmasse werden als IQ-Norm (100 + 15z) ausgewertet. (S. 47, 166, 176)'],
  },
  {
    ch: ['anlage', 'stabilitaet'],
    q: 'Eine Kommilitonin sagt: «Neurotizismus ist zu 40 % erblich – also kann ich daran nichts ändern.» Was antworten Sie?',
    answer: ['h² ist eine **Populationsstatistik**: 40 % der Varianz in der Population gehen auf Gene zurück – nichts über ihren Einzelfall.', 'Erblichkeit sagt **nichts über Veränderbarkeit**: Psychotherapie senkt Neurotizismus deutlich (d = .37), Lebensereignisse und change goals wirken ebenfalls. (S. 95, 111–113)'],
  },
];
