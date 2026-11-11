import type { Lane, TimelineEpoch, TimelineItem } from '../model';

/**
 * Übersichts-Zeitstrahl aus der Zusammenfassung (S. 2) – vom Altertum bis 1960.
 * Die Achse hat wie im PDF Massstabswechsel: je näher an der Gegenwart, desto gedehnter.
 */

/** Stützstellen der Achse: [Jahr, Anteil der Breite 0..1] – stückweise linear (Werte aus dem PDF abgemessen). */
export const AXIS: [number, number][] = [
  [-800, 0],
  [500, 0.169],
  [1500, 0.295],
  [1750, 0.465],
  [1870, 0.655],
  [1960, 1],
];

/** Massstabswechsel (rote Markierungen im PDF) */
export const BREAKS = [500, 1500, 1750, 1870];

export const TICKS: { year: number; label: string }[] = [
  { year: -800, label: '800 v.' },
  { year: -200, label: '200 v.' },
  { year: 0, label: '0' },
  { year: 200, label: '200' },
  { year: 500, label: '500' },
  { year: 1000, label: '1000' },
  { year: 1500, label: '1500' },
  { year: 1600, label: '1600' },
  { year: 1700, label: '1700' },
  { year: 1750, label: '1750' },
  { year: 1800, label: '1800' },
  { year: 1850, label: '1850' },
  { year: 1870, label: '1870' },
  { year: 1900, label: '1900' },
  { year: 1930, label: '1930' },
  { year: 1960, label: '1960' },
];

export function xOf(year: number): number {
  const y = Math.max(AXIS[0][0], Math.min(AXIS[AXIS.length - 1][0], year));
  for (let i = 1; i < AXIS.length; i++) {
    const [y0, f0] = AXIS[i - 1];
    const [y1, f1] = AXIS[i];
    if (y <= y1) return f0 + ((y - y0) / (y1 - y0)) * (f1 - f0);
  }
  return 1;
}

export function fmtYear(y: number) {
  return y < 0 ? `${-y} v.d.Z.` : String(y);
}

export const lanes: Lane[] = [
  { id: 'seele', title: 'Seelen- & Erkenntnislehren', color: '#2563eb' },
  { id: 'gnostik', title: 'Menschenkenntnis / Psychognostik', color: '#ea580c' },
  { id: 'wiss', title: 'Wissenschaftl. Psychologie & Schulen', color: '#16a34a' },
  { id: 'psychiatrie', title: 'Psychiatrie', color: '#be185d' },
  { id: 'tiefen', title: 'Tiefenpsychologie', color: '#9333ea' },
];

export const epochs: TimelineEpoch[] = [
  { nr: 1, title: 'Religion & Mythologie', range: '2000–500 v.d.Z.', from: -2000, to: -500, text: 'Religion und Mythologie behandeln Seele und psychologische Fragen.' },
  { nr: 2, title: 'Beginn des wissenschaftlichen Denkens', range: '500–200 v.d.Z.', from: -500, to: -200, text: 'Psychologische Themen in Philosophie und Medizin.' },
  { nr: 3, title: 'Rückkehr zur Religion', range: '200 v.d.Z.–1600', from: -200, to: 1600, text: 'Antike Erkenntnisse + christliche Dogmenlehre.' },
  { nr: 4, title: 'Ausdifferenzierung der Wissenschaften', range: '1600–1900', from: 1600, to: 1900, text: 'Psychologie bleibt Teil von Medizin und Metaphysik.' },
  { nr: 5, title: 'Gründungsphase der Psychologie', range: 'Ende 19. Jh.', from: 1870, to: 1900, row: 1, text: 'Erster Lehrstuhl und Laboratorien (Wundt 1879). Überlappt zeitlich mit Epoche 4.' },
  { nr: 6, title: 'Konsolidierungsphase', range: '1900–1960', from: 1900, to: 1960, text: 'Verankerung in Wissenschaft, Etablierung in der Gesellschaft.' },
  { nr: 7, title: 'Vermischung der Grenzen', range: 'seit 1960', from: 1960, to: 2030, text: 'Auflösung/Aufweichung des Schulendenkens (dauert an), unklare Zuteilung als Wissenschaft.' },
];

/** Epoche(n), in die ein Jahr fällt (5 überlappt 4) */
export function epochsOf(year: number): number[] {
  return epochs.filter((e) => year >= e.from && year < e.to).map((e) => e.nr);
}

export const items: TimelineItem[] = [
  /* ───────── Seelen- & Erkenntnislehren ───────── */
  {
    id: 'spa', lane: 'seele', row: 0, label: 'Sokrates · Platon · Aristoteles', from: -470, to: -322, date: '470–322 v.d.Z.', ch: 'antike',
    text: '**Sokrates** (470–399): Mäeutik, «Ich weiss, dass ich nichts weiss». **Platon** (427–347): dualistisch, Idealismus, Ideenwelt vs. Körperwelt. **Aristoteles** (384–322): monistisch, Erfahrung, Seele als Form des Körpers.',
  },
  {
    id: 'hildegard', lane: 'seele', row: 0, label: 'Hildegard v. Bingen', from: 1098, to: 1179, date: '1098–1179', ch: 'mittelalter',
    text: 'Benediktinernonne; Erkenntnisquelle: **Visionen**. Bekannt für Heilkunde (Zitronenblätter in Wein gegen Fieber).',
  },
  {
    id: 'descartes', lane: 'seele', row: 0, label: 'Descartes (Rationalismus)', from: 1596, to: 1650, date: '1596–1650 (LB: 1649)', ch: 'neuzeit',
    text: '«Ich denke, also bin ich». Dualismus **res cogitans** vs. **res extensa**; Erkenntnis deduktiv durch den Verstand; Reflexbogen (Körper als Mechanismus).',
  },
  {
    id: 'revolution', lane: 'seele', row: 0, label: '1789 Frz. Revolution', from: 1789, date: '1789', side: 'right', ch: 'neuzeit',
    text: 'Ende des Aufklärungszeitalters (1650–1800). Ab 1790 auch in der Psychiatrie Reformen: **moralisches Regime**.',
  },
  {
    id: 'epikur-stoa', lane: 'seele', row: 1, label: 'Epikur · Stoa (Gefühle)', from: -341, to: 300, date: 'Epikur 341–271 v.d.Z. · Stoa ca. 200 v.d.Z.–300 n.d.Z.', ch: 'antike',
    text: '**Stoiker:** Gefühle = Krankheiten der Seele, Ziel Ataraxie/Apathie. **Epikur:** Gefühle = Kraftquellen des Lebens; drei Begierden, Mässigung.',
  },
  {
    id: 'thomas', lane: 'seele', row: 1, label: 'Thomas v. Aquin', from: 1225, to: 1274, date: '1225–1274', ch: 'mittelalter',
    text: '**Scholastik**: Glauben + Wissen; übernimmt die **aristotelische** Seelenlehre (Pflanzen-, Tier-, Geistseele); neu: Motivation gleichwertig neben Kognition.',
  },
  {
    id: 'hume', lane: 'seele', row: 1, label: 'Hume', from: 1711, to: 1776, date: '1711–1776', ch: 'neuzeit',
    text: 'Empirist, Vorbild Newton. **Induktionsproblem**; Kausalität ist eine rein im Geist vorkommende Idee.',
  },
  {
    id: 'augustinus', lane: 'seele', row: 2, label: 'Augustinus', from: 354, to: 430, date: '354–430', ch: 'mittelalter',
    text: 'Kirchenvater, Anlehnung an **Platon**. Glauben als Erkenntnisprinzip; **Introspektion** (Bekenntnisse, 397: Gedächtnis als «weite Paläste»).',
  },
  {
    id: 'luther', lane: 'seele', row: 2, label: '1521 Luther', from: 1521, date: '1521', ch: 'mittelalter',
    text: 'Reformation: Martin Luther (1483–1546) wendet sich 1521 vom Papst ab → Psychologie als **freie Kunst**.',
  },
  {
    id: 'montaigne', lane: 'seele', row: 2, label: 'Montaigne', from: 1533, to: 1592, date: '1533–1592', ch: 'mittelalter',
    text: '**Skepsis** («Ich enthalte mich») und **kognitiver Konstruktivismus** – Wirklichkeit wird subjektiv konstruiert.',
  },
  {
    id: 'galilei', lane: 'seele', row: 2, label: '1632 Galilei angeklagt', from: 1632, date: '1632', side: 'right', ch: 'neuzeit',
    text: 'Galilei wird der Ketzerei angeklagt – Einbettung der frühen Neuzeit (Aufklärung).',
  },
  {
    id: 'islam', lane: 'seele', row: 3, label: 'Islam. Blütezeit (ab Kalifat 622)', from: 622, date: 'ab 622', star: true, ch: 'mittelalter',
    text: '«Islamic golden age»: Weiterentwicklung griechischer/römischer Philosophie; **Bagdad** unter al-Ma’mun, Toleranz, Rationalismus. Bewahrung und Weitergabe antiken Wissens an Europa.',
  },
  {
    id: 'bacon', lane: 'seele', row: 3, label: 'Bacon (Empirismus)', from: 1561, to: 1626, date: '1561–1626', ch: 'neuzeit',
    text: 'Praktisches Wissen aus Erfahrung; Verblendung der Wahrnehmung; Gelegenheits- vs. planmässige Beobachtung (Experiment).',
  },
  {
    id: 'lamettrie', lane: 'seele', row: 3, label: '1748 La Mettrie: Mensch als Maschine', from: 1748, date: '1748', side: 'right', ch: 'neuzeit',
    text: '**Materialismus**: auch die Seele hängt vom Körper ab (Monismus) – im Unterschied zu Descartes.',
  },
  {
    id: 'bologna', lane: 'seele', row: 4, label: '1088 Univ. Bologna', from: 1088, date: '1088', ch: 'mittelalter',
    text: 'Erste Universitätsgründung (weitere: 1365 Wien, 1460 Basel). Wissen wurde sonst in Klöstern gepflegt.',
  },
  {
    id: 'humanismus', lane: 'seele', row: 4, label: '14. Jh. Humanismus/Renaissance', from: 1300, date: 'ab 14. Jh.', side: 'right', ch: 'mittelalter',
    text: 'Freiheit und Lebensfreude als Gebote der Menschlichkeit; Bürgergesellschaft mit zunehmendem Selbstbewusstsein; Kirche angefochten.',
  },

  /* ───────── Menschenkenntnis / Psychognostik ───────── */
  {
    id: 'hippo-galen', lane: 'gnostik', row: 0, label: 'Hippokrates → Galen: Säfte/Temperamente', from: -460, to: 199, date: 'Hippokrates 460–370 v.d.Z. · Galen ca. 129–199', ch: 'antike',
    text: '**Hippokrates:** Säfte → Gesundheit/Krankheit (Humoralpathologie). **Galen** (ca. 500 Jahre später): Säfte → **4 Temperamente**/Charakter.',
  },
  {
    id: 'porta', lane: 'gnostik', row: 0, label: 'della Porta (Physiognomik)', from: 1535, to: 1615, date: '1535–1615 (Werk 1593)', ch: 'psychognostik',
    text: 'Mensch-Tier-Vergleiche; Körpermerkmale haben natürliche Ursachen (gleiche Umwelt für Mensch und Tier) + Temperamentenlehre nach Galen.',
  },
  {
    id: 'gall', lane: 'gnostik', row: 0, label: 'Gall (Phrenologie)', from: 1758, to: 1828, date: '1758–1828', ch: 'psychognostik',
    text: '**20 Vermögen** mit festem Sitz im Gehirn → Schädelform: Ausdehnung = stark, Delle = schwach ausgeprägt.',
  },
  {
    id: 'lombroso', lane: 'gnostik', row: 0, label: 'Lombroso', from: 1836, to: 1909, date: '1836–1909', ch: 'psychognostik',
    text: '«Geborener Verbrecher» – Boden für rassistisches Gedankengut und **Eugenik**.',
  },
  {
    id: 'theophrast', lane: 'gnostik', row: 1, label: 'Theophrast: Charaktere', from: -371, to: -281, date: 'ca. 371–281 v.d.Z.', ch: 'antike',
    text: 'Schüler des Aristoteles: **30 Charakterbilder** aus beobachtbarem Verhalten (Schmeichler, Geiziger …), alle negativ, moralisch-erzieherisch.',
  },
  {
    id: 'lavater', lane: 'gnostik', row: 1, label: '1772 Lavater: Physiogn. Fragmente', from: 1772, date: '1772 (LB: Fragmente ab 1775)', ch: 'psychognostik',
    text: 'Zürcher Pfarrer (1741–1801): feste Zuordnungen (hohe Stirn = Klugheit); Physiognomik als göttliche Offenbarung und «schnelles Menschengefühl».',
  },
  {
    id: 'michon', lane: 'gnostik', row: 1, label: 'Michon (Graphologie)', from: 1806, to: 1881, date: '1806–1881 (Name 1875)', ch: 'psychognostik',
    text: 'Gab der Graphologie den Namen (1875): Persönlichkeit drückt sich in der Motorik aus. Dazzi & Pedrabissi (2009): keine Evidenz.',
  },
  {
    id: 'lichtenberg', lane: 'gnostik', row: 2, label: '1778 Lichtenberg-Kritik', from: 1778, date: '1778', star: true, ch: 'psychognostik',
    text: '«Gelehrte und Narren besitzen oftmals das gleiche Gesicht.» Urteile beruhen auf Kleidung, Auftreten, Spuren früherer Handlungen.',
  },
  {
    id: 'knigge', lane: 'gnostik', row: 2, label: '1788 Knigge', from: 1788, date: '1788', side: 'right', ch: 'psychognostik',
    text: '**Menschenbehandlung**: Adolph von Knigge, «Über den Umgang mit Menschen» – Verhaltensregeln im Sinne der Aufklärung.',
  },

  /* ───────── Wissenschaftliche Psychologie & Schulen ───────── */
  {
    id: 'weber-fechner', lane: 'wiss', row: 0, label: 'Weber & Fechner: Psychophysik', from: 1795, to: 1887, date: 'Weber 1795–1878 · Fechner 1801–1887', ch: 'wissenschaft',
    text: '**Weber:** eben merkliche Differenz, ΔR/R = const. **Fechner:** E = K · ln R + C, Begriff Psychophysik. Beginn der Laboruntersuchungen.',
  },
  {
    id: 'lewin', lane: 'wiss', row: 0, label: 'Lewin (Feldtheorie)', from: 1890, to: 1947, date: '1890–1947', ch: 'schulen',
    text: 'V = f(P, U); Lebensraum mit Regionen, Grenzen, Vektoren und Aufforderungscharakter; Sozialpsychologie.',
  },
  {
    id: 'wundt', lane: 'wiss', row: 1, label: '1879 Wundt: 1. Labor (Leipzig)', from: 1879, date: '1879', ch: 'wissenschaft',
    text: '**Gründungsjahr der modernen Psychologie**: erstes experimentalpsychologisches Institut. Instruierte Selbstbeobachtung, Reaktionszeiten, Elementenpsychologie.',
  },
  {
    id: 'dilthey', lane: 'wiss', row: 1, label: '1883 Dilthey: Geisteswiss.', from: 1883, date: '1883 (LB)', side: 'right', star: true, ch: 'wissenschaft',
    text: '«Geisteswissenschaften» als Oberbegriff – verstehen statt erklären (Hermeneutik).',
  },
  {
    id: 'hall', lane: 'wiss', row: 2, label: '1883 Hall-Labor / Phil. Studien', from: 1883, date: '1883', ch: 'wissenschaft',
    text: '**G. Stanley Hall** gründet das erste experimentalpsychologische Labor der USA (Johns Hopkins). Gleiches Jahr: Wundts Zeitschrift **«Philosophische Studien»** (LB-Tabelle: 1881).',
  },
  {
    id: 'james', lane: 'wiss', row: 2, label: '1890 James: Principles', from: 1890, date: '1890', side: 'right', ch: 'wissenschaft',
    text: '**William James**, «The Principles of Psychology» – «Vater der amerikanischen Psychologie» (Harvard-Labor schon 1875, v. a. Demonstrationen).',
  },
  {
    id: 'washburn', lane: 'wiss', row: 3, label: '1894 Washburn Dr.', from: 1894, date: '1894', ch: 'wissenschaft',
    text: '**Margaret Washburn** (1871–1939): erste Frau mit Doktortitel in Psychologie (Cornell University).',
  },
  {
    id: 'wundt-buehler', lane: 'wiss', row: 3, label: '1907/08 Wundt vs. Bühler', from: 1907, date: '1907/1908', side: 'right', ch: 'schulen',
    text: 'Wundt nennt die Würzburger Versuche «**Scheinexperimente**» (1907); Karl Bühler verteidigt sie (1908).',
  },
  {
    id: 'kuelpe', lane: 'wiss', row: 4, label: '1894 Külpe Würzburg', from: 1894, date: '1894 (LB)', star: true, ch: 'schulen',
    text: '**Würzburger Schule**: experimentelle Selbstbeobachtung bei Denkprozessen; «Keine Anschauung ohne Denken».',
  },
  {
    id: 'gestalt', lane: 'wiss', row: 4, label: 'ab 1910 Gestaltpsych.', from: 1910, date: 'ab 1910', side: 'right', ch: 'schulen',
    text: 'Wertheimer, Köhler: «Das Ganze ist mehr als die Summe seiner Teile»; gute Gestalt (Prägnanz).',
  },
  {
    id: 'muensterberg', lane: 'wiss', row: 5, label: '1914 Münsterberg Psychotechnik', from: 1914, date: '1914', ch: 'schulen',
    text: '«Grundzüge der Psychotechnik»: Pionier der **Angewandten Psychologie** (Begriff Psychotechnik von William Stern, 1903).',
  },

  /* ───────── Psychiatrie ───────── */
  {
    id: 'ps-antike', lane: 'psychiatrie', row: 0, label: 'Antike: Säfte, Heilpflanzen, Amulette', from: -800, to: 500, date: 'ca. 800 v.d.Z.–500 n.d.Z.', ch: 'psychiatrie',
    text: 'Kollektive Werte statt Individualität; Heilpflanzen, Öl, Honig; Amulette, Gebete, Rituale. Hippokratische Texte (Epilepsie, Humoralpathologie); Galen: pneuma, Halluzinationstheorie.',
  },
  {
    id: 'ps-hospital', lane: 'psychiatrie', row: 0, label: 'Spät-MA: Hospitäler', from: 1250, to: 1500, date: 'ca. 1250–1500', ch: 'psychiatrie',
    text: 'Christliche Hospitäler mit ersten Abteilungen für «Wahnsinnige»; Pflege meist innerhalb der Familie.',
  },
  {
    id: 'ps-toll', lane: 'psychiatrie', row: 0, label: '18. Jh. Tollhäuser', from: 1700, to: 1800, date: '18. Jh.', ch: 'psychiatrie',
    text: 'Z. B. Bayreuth: Bezahlung, keine ärztliche Versorgung; Männer Marmorfabrik, Frauen Spinnerei.',
  },
  {
    id: 'ps-nothschrei', lane: 'psychiatrie', row: 0, label: '1852 Nothschrei', from: 1852, date: '1852', side: 'right', ch: 'psychiatrie',
    text: '«Nothschrei eines Magnetisch-Vergifteten» von Friedrich Krauss: über 1000 Seiten Selbstzeugnis der Erfahrung des Wahnsinns.',
  },
  {
    id: 'ps-wk1', lane: 'psychiatrie', row: 0, label: '1. Weltkrieg', from: 1914, to: 1918, date: '1914–1918', ch: 'psychiatrie',
    text: '«Kriegszitterer» (Nonne 1917: Hypnose); ca. 70’000 Tote in deutschen Anstalten.',
  },
  {
    id: 'ps-lobotomie', lane: 'psychiatrie', row: 0, label: '1935 Lobotomie', from: 1935, date: '1935', side: 'right', ch: 'psychiatrie',
    text: 'Operative Zerstörung von Hirnmasse; Burghölzli 1946–1959: 162 Operierte.',
  },
  {
    id: 'ps-ma', lane: 'psychiatrie', row: 1, label: 'Mittelalter: Strafe Gottes / Säfte', from: 500, to: 1500, date: '500–1500', ch: 'psychiatrie',
    text: 'Krankheit humoralpathologisch oder **Strafe Gottes**; Barbier/Bader, Holzkäfige, Verbannung.',
  },
  {
    id: 'ps-pinel', lane: 'psychiatrie', row: 1, label: 'ab 1790 moral. Regime (Pinel)', from: 1790, date: 'ab 1790', side: 'right', ch: 'psychiatrie',
    text: '**Moralisches Regime** (Frankreich, England): Verständnis, Freundlichkeit, geduldige Pflege, Verzicht auf entbehrliche Zwangsmassnahmen. Philippe Pinel (1745–1826).',
  },
  {
    id: 'ps-steril', lane: 'psychiatrie', row: 1, label: 'ab 1880er Zwangssterilisation', from: 1880, date: 'ab ca. 1880er', side: 'right', ch: 'psychiatrie',
    text: 'Zwangssterilisationen (Eugen Bleuler, Burghölzli 1909).',
  },
  {
    id: 'ps-ekt', lane: 'psychiatrie', row: 1, label: '1938 EKT', from: 1938, date: '1938', side: 'right', ch: 'psychiatrie',
    text: 'Elektrokrampftherapie: 1940 breite Anwendung ohne Indikation; 1960 durch Psychopharmaka verdrängt; 2000 «Renaissance» bei therapieresistenter Depression.',
  },
  {
    id: 'ps-bethlehem', lane: 'psychiatrie', row: 2, label: '1403 Bethlehem', from: 1403, date: '1403', ch: 'psychiatrie',
    text: 'Hospital St. Mary of Bethlehem (London, «Bedlam»): 9 Plätze für Unzurechnungsfähige.',
  },
  {
    id: 'ps-hexen', lane: 'psychiatrie', row: 2, label: 'Hexenverfolgung', from: 1480, date: 'Übergang zur Neuzeit (1450–1500)', side: 'right', ch: 'psychiatrie',
    text: 'Neuzeit: Hexenverfolgungen, Melancholie; Unterteilung Geistseele vs. Körperseele.',
  },
  {
    id: 'ps-proteste', lane: 'psychiatrie', row: 2, label: '1895 Proteste', from: 1895, date: '1895', side: 'right', ch: 'psychiatrie',
    text: 'Proteste ehemaliger Anstaltsinsassen.',
  },
  {
    id: 'ps-pharmaka', lane: 'psychiatrie', row: 3, label: 'ab 1950er Psychopharmaka', from: 1950, date: 'ab den 1950er Jahren', ch: 'psychiatrie',
    text: 'Nachkriegszeit: Psychopharmaka, Deinstitutionalisierung, Spezialisierung, Sozialpsychiatrie.',
  },
  {
    id: 'ps-vesalius', lane: 'psychiatrie', row: 3, label: 'Vesalius', from: 1515, to: 1564, date: '1515–1564', ch: 'psychiatrie',
    text: 'Andreas Vesalius: Sektionsunterricht (Anatomie) in der Neuzeit.',
  },

  /* ───────── Tiefenpsychologie ───────── */
  {
    id: 'charcot', lane: 'tiefen', row: 0, label: 'Charcot (Hypnose)', from: 1825, to: 1893, date: '1825–1893', ch: 'tiefen',
    text: 'Salpêtrière Paris: erprobt **Hypnose** bei Hysterie/Lähmungen – prägt Freud.',
  },
  {
    id: 'mittwoch', lane: 'tiefen', row: 0, label: '1902 Mittwoch-Ges.', from: 1902, date: '1902', side: 'right', ch: 'tiefen',
    text: 'Psychologische Mittwoch-Gesellschaft (Freud); Adler wird eingeladen. → 1908 Wiener Psychoanalytische Vereinigung.',
  },
  {
    id: 'einstein', lane: 'tiefen', row: 0, label: '1932 Einstein–Freud', from: 1932, date: '1932', side: 'right', ch: 'tiefen',
    text: 'Briefwechsel «Warum Krieg?».',
  },
  {
    id: 'freud', lane: 'tiefen', row: 1, label: 'Freud', from: 1856, to: 1939, date: '1856–1939', ch: 'tiefen',
    text: 'Psychoanalyse: Unbewusstes, Strukturmodell Es/Ich/Über-Ich, Abwehr, Libido; 1920 Todestrieb; 1939 in London gestorben.',
  },
  {
    id: 'adler', lane: 'tiefen', row: 2, label: 'Adler', from: 1870, to: 1937, date: '1870–1937', ch: 'tiefen',
    text: 'Individualpsychologie: Minderwertigkeit, Kompensation, Gemeinschaftsgefühl, Lebensplan/-stil.',
  },
  {
    id: 'hans', lane: 'tiefen', row: 3, label: '1909 kleiner Hans', from: 1909, date: '1909', ch: 'tiefen',
    text: 'Pferdephobie eines 5-Jährigen; Freuds Deutung → Ödipuskomplex.',
  },
  {
    id: 'adler-verein', lane: 'tiefen', row: 3, label: '1911 Adler: eigener Verein', from: 1911, date: '1911', side: 'right', ch: 'tiefen',
    text: 'Verein für freie Psychoanalyse – Adler bestreitet die zentrale Rolle der Sexualität.',
  },
  {
    id: 'ipv', lane: 'tiefen', row: 4, label: '1910 IPV', from: 1910, date: '1910', ch: 'tiefen',
    text: 'Internationale Psychoanalytische Vereinigung.',
  },
];
