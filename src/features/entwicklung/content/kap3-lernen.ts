import type { Chapter } from '../model';

export const kap3: Chapter = {
  id: 'lernen',
  nr: 3,
  short: 'Lernen',
  title: 'Lernen',
  date: '08.10.',
  folien: 'Fol. 18–24',
  lohaus: '2.3 (Lerntheorien) · 3.4 (Habituations-Dishabituationsparadigma S. 63/64; verzögerte Nachahmung S. 66) · 9.1',
  color: '#1baf7a',
  kern: [
    'Lernen findet **ab Geburt** statt: Habituation, klassisches und operantes Konditionieren, Beobachtungslernen.',
    'Das **Habituations-Dishabituations-Paradigma** ist die zentrale Methode der Säuglingsforschung.',
    '**Positiv/negativ** = etwas kommt hinzu / wird weggenommen. **Verstärkung** erhöht, **Bestrafung** senkt die Verhaltenswahrscheinlichkeit.',
    'Imitation ist früh vorhanden; mit 1;6 werden sogar **Absichten** nachgeahmt. Bandura: Aneignung ≠ Ausführung.',
  ],
  sections: [
    {
      id: 'habituation',
      title: 'Habituation',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Habituation',
              text: 'Abnahme der Reaktion bei wiederholter gleichartiger Stimulation → zeigt, dass Lernen stattgefunden hat. Die Geschwindigkeit gilt als Indikator für die Effektivität der Informationsverarbeitung. (Fol. 18)',
            },
            {
              term: 'Dishabituation',
              text: 'Wiederanstieg der Reaktion (Orientierungsreaktion) bei einem neuen Reiz → der Säugling unterscheidet die Reize. (Fol. 19)',
            },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Habituationsphase', text: 'Ein Reiz wird so lange dargeboten, bis die Reaktion abnimmt (Habituation).' },
            { title: 'Testphase', text: 'Ein neuer Reiz wird gezeigt.' },
            { title: 'Auswertung', text: 'Nimmt die Reaktion wieder zu (Orientierungsreaktion) → Dishabituation → Reize werden unterschieden.' },
          ],
        },
        {
          t: 'p',
          text: '**Indikatoren:** Blickdauer, Herzfrequenz (sinkt bei Orientierung). (Fol. 19)',
        },
        { t: 'figure', fig: 'habituation' },
        {
          t: 'compare',
          items: [
            { title: 'Präferenz für Neues', text: 'Testphase **direkt** nach der Habituation → **Kurzzeitgedächtnis**' },
            { title: 'Präferenz für Vertrautes', text: '**Spätere** Testphase → **Langzeitgedächtnis**' },
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Kinder bevorzugen meist das Neue; mit zeitlicher Verzögerung wird das Vertraute präferiert. (Fol. 20; Notiz)',
        },
      ],
    },
    {
      id: 'klassisch',
      title: 'Klassisches Konditionieren (Pawlow)',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Vorher', text: 'Unkonditionierter Reiz (Brust/Flasche) → unkonditionierte Reaktion (Saugen)' },
            { title: 'Kopplung', text: 'Neutraler Reiz (Glockenton) wird wiederholt zusammen mit dem unkonditionierten Reiz dargeboten' },
            { title: 'Nachher', text: 'Glockenton = konditionierter Reiz → löst die konditionierte Reaktion (Saugen) aus' },
          ],
        },
        {
          t: 'p',
          text: '**Generalisierung** auf ähnliche Reize und **Diskrimination** sind möglich. (Fol. 20)',
        },
      ],
    },
    {
      id: 'operant',
      title: 'Operantes Konditionieren',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Operantes Konditionieren',
              text: '(Instrumentelles Lernen) Erlernen der Kontingenz zwischen eigenem (zunächst eher zufälligem) Verhalten und dessen Folgen. (Fol. 20–21)',
            },
            {
              term: 'Kontingenzlernen',
              text: 'Säuglinge lernen in Minuten den Zusammenhang zwischen Strampeln und einem Mobile; frühes Kontingenzlernen korreliert mit Intelligenz im Kindergartenalter. (Fol. 21)',
            },
          ],
        },
        {
          t: 'list',
          items: [
            'Je **jünger** das Kind, desto näher müssen Verhalten und Konsequenz **räumlich und zeitlich** beieinander liegen. (Fol. 20)',
            'Verstärkung → Verhalten **häufiger**; Bestrafung → Verhalten **seltener**. Ob etwas verstärkt oder bestraft, sieht man erst an der **Veränderung der Verhaltenswahrscheinlichkeit**. (Fol. 21; Notiz)',
          ],
        },
        { t: 'widget', w: 'verstaerkung' },
        {
          t: 'p',
          text: '**Verstärkerformen** (Fol. 21): kontinuierlich – intermittierend; primär – sekundär (z. B. Geld: nicht selbst belohnend, aber man kann Belohnendes kaufen); intern – extern; direkt – indirekt; positiv – negativ.',
        },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Beispiele aus der Vorlesung (Notiz)',
          text: [
            'Vermeidung einer Angstsituation beendet die Angst → **negative Verstärkung** → die Angst bleibt bestehen (z. B. Höhenangst).',
            'Nur bestrafen lehrt **kein erwünschtes Verhalten**.',
            'Bestrafung kann bei Kindern mit wenig Aufmerksamkeit als **positive Verstärkung** wirken (Zuwendung).',
          ],
        },
      ],
    },
    {
      id: 'beobachtung',
      title: 'Beobachtungs- und Nachahmungslernen',
      blocks: [
        {
          t: 'table',
          caption: 'Imitation im Entwicklungsverlauf (Fol. 22–23). Notation 0;6 = 0 Jahre, 6 Monate (Notiz)',
          head: ['Alter', 'Befund'],
          rows: [
            ['**2 Wochen**', 'Neugeborene strecken häufiger die Zunge heraus, wenn ein Erwachsener es vormacht'],
            ['**0;6–0;9**', 'Neuartige Handlungen werden noch nach 24 h nachgeahmt (Paradigma der **verzögerten Nachahmung**)'],
            ['**1;3**', 'Imitation von im Fernsehen gesehenen Handlungen'],
            ['**12–18 Monate**', '1–2 neue Verhaltensweisen pro Tag'],
            ['**1;6**', 'Nachahmung von **Absichten**'],
          ],
        },
        {
          t: 'study',
          title: 'Nachahmung von Absichten (Hantel-Versuch)',
          age: '1;6',
          method: 'Ein Erwachsener versucht erfolglos, eine Hantel auseinanderzuziehen. Kontrollbedingung: eine mechanische Vorrichtung macht dieselbe Bewegung.',
          result: 'Die Kinder ziehen die Hantel erfolgreich auseinander. Bei der mechanischen Vorrichtung kaum.',
          takeaway: 'Kinder imitieren die **Absicht**, nicht die Handlung – und schreiben Absichten nur Menschen zu. (Fol. 23)',
        },
        {
          t: 'p',
          text: '**Banduras soziale Lerntheorie:** Lernen aus den Erfahrungen anderer. (Fol. 22)',
        },
        { t: 'figure', fig: 'bandura' },
        {
          t: 'study',
          title: 'Bobo-Doll-Experiment',
          source: 'Bandura',
          age: 'Vorschulkinder',
          method: 'Kinder beobachten ein Modell, das sich aggressiv gegenüber einer Puppe verhält. Das Modell wird belohnt, bestraft oder erfährt keine Konsequenz.',
          result: 'Modell belohnt → Kinder aggressiver; bestraft → weniger aggressiv; keine Konsequenz → aggressiver.',
          takeaway: 'Die beobachteten Konsequenzen am Modell steuern die **Ausführung** (Motivation) des gelernten Verhaltens. (Fol. 23; Notiz)',
        },
      ],
    },
  ],
};
