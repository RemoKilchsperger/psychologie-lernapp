import type { FigureKey } from './model';
import konvergenzmodell from './img/konvergenzmodell.png';
import praenatal from './img/sensible-phasen-praenatal.png';
import schlaf from './img/schlaf-lebensspanne.png';
import habituation from './img/habituation.png';
import bandura from './img/bandura.png';
import gehen from './img/wege-zum-gehen.png';
import wauwau from './img/schema-wauwau.png';
import erhaltung from './img/erhaltungsaufgaben.png';
import karotte from './img/karottenversuch.png';
import sallyanne from './img/sally-anne.png';
import fuersorge from './img/bindung-fuersorge.png';
import waage from './img/bindung-waage.png';

export interface Figure {
  nr: number;
  src: string;
  title: string;
  caption: string;
  source: string;
  /** schmale Hochformat-Grafik */
  narrow?: boolean;
}

/** Die Abbildungen aus der Zusammenfassung (Nummerierung wie im PDF). */
export const figures: Record<FigureKey, Figure> = {
  konvergenzmodell: {
    nr: 1,
    src: konvergenzmodell,
    title: 'Konvergenzmodell',
    caption: 'Stichprobe A und B werden je über drei Zeitpunkte verfolgt und überlappen im Alter 3. So wird mit zwei kurzen Längsschnitten das Altersspektrum 1–5 abgedeckt.',
    source: 'Fol. 5',
  },
  praenatal: {
    nr: 2,
    src: praenatal,
    title: 'Sensible Phasen in der pränatalen Entwicklung',
    caption: 'Blau = hochsensible Phase (strukturelle Schäden), grün = geringere Sensibilität (funktionelle Schäden). Wochen 1–2: meist keine Teratogenwirkung (Ausnahme Alkohol).',
    source: 'Fol. 7; Quelle: Berk',
  },
  schlaf: {
    nr: 3,
    src: schlaf,
    title: 'Schlaf über die Lebensspanne',
    caption: 'Gesamtschlaf, REM- und Non-REM-Schlaf: Neugeborene schlafen ca. 16 h, davon rund die Hälfte REM. Der REM-Anteil ist beim Neugeborenen am grössten.',
    source: 'Fol. 13; Quelle: Siegler',
  },
  habituation: {
    nr: 4,
    src: habituation,
    title: 'Habituation und Dishabituation',
    caption: 'Die Blickdauer nimmt bei gleichem Reiz ab (Durchgänge 1–11 = Habituation). Beim neuen Reiz steigt sie wieder an (Dishabituation).',
    source: 'Fol. 19',
  },
  bandura: {
    nr: 5,
    src: bandura,
    title: 'Beobachtungslernen nach Bandura',
    caption: 'Verhaltensaneignung (Aufmerksamkeit, Behalten) und Verhaltensausführung (motorische Reproduktionskompetenz, Motivation) sind getrennte Schritte.',
    source: 'Fol. 22',
  },
  gehen: {
    nr: 6,
    src: gehen,
    title: 'Unterschiedliche Wege zum freien Gehen',
    caption: '87 % krabbeln im Vierfüsslergang vor dem Gehen – andere rutschen, rollen oder überspringen das Krabbeln. Alles «normale» Entwicklung.',
    source: 'Fol. 27; Quelle: Largo, 1999',
  },
  wauwau: {
    nr: 7,
    src: wauwau,
    title: 'Schema «Wauwau»',
    caption: 'Ein neuer, ähnlicher Hund wird assimiliert. Ein ganz anders aussehender (klein, bissig) erzwingt Akkommodation – das Schema wird erweitert.',
    source: 'Fol. 38',
  },
  erhaltung: {
    nr: 8,
    src: erhaltung,
    title: 'Erhaltungsaufgaben (Invarianz)',
    caption: 'Flüssigkeit, feste Masse, Anzahl: Präoperationale Kinder zentrieren auf eine Dimension (Höhe, Länge) und verneinen die Gleichheit.',
    source: 'Fol. 41',
  },
  karotte: {
    nr: 9,
    src: karotte,
    title: 'Baillargeons Karottenversuch',
    caption: 'Die grosse Karotte müsste im Fenster der Wand sichtbar sein. Säuglinge betrachten das unmögliche Ereignis länger → Erwartung wurde enttäuscht.',
    source: 'Fol. 49',
  },
  sallyanne: {
    nr: 10,
    src: sallyanne,
    title: 'Sally-Anne-Aufgabe',
    caption: 'Sally legt den Ball in den Korb und geht. Anne legt ihn in die Schachtel. «Wo sucht Sally den Ball?»',
    source: 'Fol. 53',
    narrow: true,
  },
  fuersorge: {
    nr: 11,
    src: fuersorge,
    title: 'Bindungs- und Fürsorgesystem',
    caption: 'Bedrohung der Sicherheit aktiviert das Bindungssystem (Weinen, Anklammern, Nachkrabbeln). Dieses Bindungsverhalten aktiviert das Fürsorgesystem der Bezugsperson (Aufnehmen, Wiegen, Singen). Gleiches Ziel: Nähe und Sicherheit des Kindes.',
    source: 'Bindung Fol. 3',
  },
  waage: {
    nr: 12,
    src: waage,
    title: 'Bindung als Balance zwischen Bindungs- und Explorationsverhalten',
    caption: 'Links B-Typ (ausgeglichen), Mitte A-Typ (zur Exploration verschoben), rechts C-Typ (zum Bindungsverhalten verschoben). Die angehobene Seite mit Pfeil zeigt jeweils, welches Verhalten überwiegt.',
    source: 'Bindung Fol. 14–16; nach Gloger-Tippelt 2004',
  },
};
