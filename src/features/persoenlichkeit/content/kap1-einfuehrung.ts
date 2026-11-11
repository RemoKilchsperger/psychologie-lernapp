import type { Chapter } from '../model';

export const kap1: Chapter = {
  id: 'einfuehrung',
  nr: 1,
  short: 'Einführung',
  title: 'Einführung und historische Wegbereitende',
  date: '18.09.2026',
  pages: 'S. 11–27',
  color: '#db2777',
  kern: [
    '**Persönlichkeit** = relativ stabile, situationsübergreifende Merkmale des Verhaltens und Erlebens. Definitionen sind **beschreibend, nicht wertend**. (S. 11, 13)',
    'Abgrenzung: **Charakter** = moralischer Aspekt; **Temperament** = früh vorhanden, genetische Komponente, Affekt/Stimmung. (S. 11)',
    '**Differentielle Psychologie** untersucht verhaltensrelevante interindividuelle Unterschiede; die Allgemeine Psychologie sucht Gesetzmässigkeiten für alle. (S. 13)',
    '**Traits** sind latente Konstrukte, aus beobachtbarem Verhalten erschlossen. Die Persönlichkeitspsychologie denkt **dimensional**. (S. 11, 27)',
    'Die **4-Temperamentenlehre** (Hippokrates → Galen → Kant → Wundt → Eysenck) entwickelte sich von **Typen zu Dimensionen**; **Huarte (1575)** = «Geburtstag der differentiellen Psychologie». (S. 19–21)',
    'Persönlichkeit sagt relevante Kriterien vorher, z. B. Berufserfolg: Intelligenz *r* = .51, Gewissenhaftigkeit *r* = .31. (S. 25)',
  ],
  sections: [
    {
      id: 'was',
      title: 'Was ist Persönlichkeit?',
      blocks: [
        {
          t: 'p',
          text: 'Herkunft: lat. **persona** = Maske im antiken Theater (Symbol der Rolle, Schallverstärker) → das nach aussen gezeigte Bild. Aber: Auch **nicht beobachtbare** Merkmale gehören zur Persönlichkeit. (S. 11)',
        },
        {
          t: 'defs',
          items: [
            {
              term: 'Persönlichkeit',
              text: 'Relativ stabile, situationsübergreifende Merkmale des Verhaltens und Erlebens einer Person. Definitionen sind beschreibend, nicht wertend. (S. 11, 13)',
            },
            {
              term: 'Charakter',
              text: 'Der **moralische** Aspekt der Persönlichkeit (bei Eysenck: konatives Verhalten, Wille). (S. 11, 13)',
            },
            {
              term: 'Temperament',
              text: 'Früh vorhanden, mit **genetischer Komponente**; betrifft Affekt und Stimmung (bei Eysenck: affektives Verhalten). (S. 11)',
            },
          ],
        },
        {
          t: 'list',
          title: 'Klassische Definitionen',
          items: [
            '**Allport (1937)** listet über 100 Definitionen; im Alltag ist der Begriff mehrdeutig («ist eine Persönlichkeit», «Persönlichkeitsproblem»). (S. 11)',
            '**Guilford (1964):** die **einzigartige Struktur** von Persönlichkeitszügen (traits, Eigenschaften) eines Individuums. (S. 13)',
            '**Eysenck (1970):** mehr oder weniger **stabile, dauerhafte Organisation** von Charakter, Temperament, Intellekt und Körperbau; bestimmt die einzigartige Anpassung an die Umwelt. (S. 13)',
            '**Kluckhohn & Murray (1953):** Jeder Mensch ist **wie jeder andere, wie manche andere, wie kein anderer**. Universelle Merkmale existieren, manche haben eine genetische Basis. (S. 17)',
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Charakter', sub: 'konativ', text: 'Wille' },
            { title: 'Temperament', sub: 'affektiv', text: 'Emotion, Gefühl' },
            { title: 'Intellekt', sub: 'kognitiv', text: 'Intelligenz' },
            { title: 'Körperbau', sub: 'physisch', text: 'Gestalt und neuroendokrine Ausstattung' },
          ],
        },
        {
          t: 'callout',
          tone: 'pruefung',
          title: 'Eysenck (1970): vier Systeme der Persönlichkeit',
          text: 'Merksatz: **C**harakter – **T**emperament – **I**ntellekt – **K**örperbau ↔ konativ – affektiv – kognitiv – physisch.',
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Der Ausdruck von Eigenschaften hängt von Kultur, Zeit und Umfeld ab. Die Preisgabe ist teils willentlich (explizit), teils schwer steuerbar (implizit); das Fremdbild wird durch den Kontext verzerrt. (S. 11, Notiz)',
        },
      ],
    },
    {
      id: 'landkarte',
      title: 'Landkarte der Persönlichkeit',
      blocks: [
        {
          t: 'p',
          text: 'Persönlichkeit umfasst zwei grosse Bereiche: **Fähigkeiten** (Leistungsbereich – es gibt «besser/schlechter») und **Habitus** (typisches Verhalten – kein besser/schlechter). (S. 17, 33, 145)',
        },
        { t: 'widget', w: 'landkarte' },
        {
          t: 'callout',
          tone: 'notiz',
          text: '**Kompetenz** = Mischung aus Fähigkeit und Habitus. **Emotionale Intelligenz** und **Kreativität** sind nicht eindeutig zuzuordnen. (S. 17, Notiz)',
        },
      ],
    },
    {
      id: 'einordnung',
      title: 'Einordnung innerhalb der Psychologie',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Psychologie',
              text: 'Lehre vom Verhalten und Erleben, seinen Ursachen und Konsequenzen (Teilgebiete: Allgemeine, Sozial-, Entwicklungs-, Physiologische Psychologie …). (S. 13)',
            },
            {
              term: 'Differentielle Psychologie',
              text: 'Lehre vom **unterschiedlichen** Verhalten und Erleben; zentraler Gegenstand sind **interindividuelle Differenzen**, sofern verhaltensrelevant (z. B. Geschlecht, soziale Gruppen, Kulturen, Altersgruppen). (S. 13)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Merkmale wie das Geschlecht sind differentialpsychologisch relevant, aber **keine Persönlichkeitseigenschaft**. (S. 15, Notiz)',
        },
        {
          t: 'table',
          head: ['Ansatz', 'Art', 'Fokus', 'Annahme'],
          rows: [
            ['**Individuumzentriert**', 'idiographisch', 'persönliche Eigenschaften', 'Persönlichkeit ist einzigartig, kein Vergleich möglich'],
            ['**Differentielle Psychologie**', 'nomothetisch', 'allgemeine Eigenschaften', 'Differenzierung entlang **mehrerer Dimensionen**'],
            ['**Typologien**', 'nomothetisch', 'Merkmalskomplexe', 'Einteilung in Typen, **keine Differenzierung innerhalb eines Typs**'],
            ['**Allgemeine Psychologie**', 'nomothetisch', '«Fehler»-Varianz', '«durchschnittliche» Persönlichkeit, Unterschiede nicht angestrebt'],
          ],
          caption: 'Tab. 1: Forschungsansätze (S. 13). Idiographisch = nur der individuumzentrierte Ansatz; die drei anderen sind nomothetisch.',
        },
        {
          t: 'callout',
          tone: 'notiz',
          text: 'Eine Typologie verlangt bestimmte Ausprägungen in mehreren Merkmalen. Problem: Oft passen **mehr Personen nicht in die Typen als hinein**. (S. 13, Notiz)',
        },
      ],
    },
    {
      id: 'traits',
      title: 'Eigenschaften (Traits)',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Trait (Eigenschaft)',
              text: 'Verhaltensabstraktion, die eine Fülle von Informationen zusammenfasst; **latente** Variable / Konstrukt / Disposition, aus beobachtbarem Verhalten **erschlossen**. (S. 27)',
            },
            {
              term: 'State (Zustand)',
              text: 'Nicht stabiler Zustand, z. B. eine Stimmung. Stabilität von Traits ist **relativ, nie absolut**. (S. 13, Notiz)',
            },
            {
              term: 'Latente Variable',
              text: 'Nicht direkt beobachtbares Merkmal (z. B. Angst, Intelligenz, Extraversion, Kreativität), das aus beobachtbaren Indikatoren (spricht leise, wird leicht rot, lacht oft) erschlossen wird. (S. 27)',
            },
          ],
        },
        { t: 'widget', w: 'trait-hierarchie' },
        {
          t: 'callout',
          tone: 'beispiel',
          title: 'Beispiel Ruch: Trait vs. State',
          text: 'Versuchsteilnahme unter heiteren vs. widrigen Umständen: Je nach **Trait-Heiterkeit** sinkt die **Stimmung (State)** unterschiedlich stark. (S. 13)',
        },
      ],
    },
    {
      id: 'temperamente',
      title: 'Historische Wegbereitende: 4-Temperamentenlehre',
      blocks: [
        {
          t: 'list',
          items: [
            '**Hippokrates (ca. 460–370 v. Chr.):** **Humoralpathologie** (4-Säfte-Lehre). Elemente haben ihren Sitz in den Säften: Luft = Blut, Wasser = Schleim, Erde = schwarze Galle, Feuer = gelbe Galle. Gleichgewicht der Säfte = Gesundheit; Lebensumstände (Alter, Geschlecht, Bäder, Schlaf, Sport) beeinflussen das Mischverhältnis. (S. 19)',
            '**Galen (ca. 130–200):** verbindet die vier Säfte mit **vier Temperamenten**; das Mischverhältnis ist nicht mehr pathologisch, sondern bestimmt die psycho-physische Konstitution. (S. 19)',
            '**Kant (1798):** Temperamente des **Gefühls** vs. der **Tätigkeit**, jeweils stark/schwach; emotionale Grundlage der Persönlichkeit. (S. 21)',
            '**Wundt (1903):** zwei Dimensionen – **Stärke** und **Wechsel (Schnelligkeit)** der Gemütsbewegungen. (S. 21)',
            '**Eysenck (1954):** die 4 Temperamente als Kombinationen der Superfaktoren **Extraversion (E)** und **Neurotizismus (N)**, in Anlehnung an Wundt. (S. 21, 71)',
          ],
        },
        {
          t: 'table',
          head: ['Temperament', 'Körpersaft', 'Beschreibung'],
          rows: [
            ['**Sanguiniker** (leichtblütig)', 'Blut', 'heiter, lebhaft, gesprächig, leichtsinnig'],
            ['**Phlegmatiker** (kaltblütig)', 'Schleim', 'passiv, ruhig, träge, zuverlässig'],
            ['**Melancholiker** (schwerblütig)', 'schwarze Galle', 'traurig, nachdenklich'],
            ['**Choleriker** (warmblütig)', 'gelbe Galle', 'reizbar, durchsetzungsfähig'],
          ],
          caption: 'Tab. 2: Die vier Temperamente nach Galen (S. 19)',
        },
        { t: 'widget', w: 'temperamente' },
        {
          t: 'defs',
          items: [
            {
              term: 'Huarte (1575), «Examen»',
              text: 'Es gibt Abweichungen von den Typen; Menschen haben verschiedene Fähigkeiten; das Individuelle rückt in den Fokus → «**Geburtstag der differentiellen Psychologie**». (S. 21)',
            },
            {
              term: 'Humoralpathologie',
              text: '4-Säfte-Lehre nach Hippokrates: Gesundheit = Gleichgewicht von Blut, Schleim, schwarzer und gelber Galle. (S. 19)',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Fazit Temperamentenlehre (S. 21)',
          text: [
            'Zuerst **Typen** (Kategorien), später **Dimensionen**; Typologie mit ca. 2000-jähriger Geschichte.',
            'Zuerst rein **physiologische** (kausale), danach **deskriptiv-psychologische** Theorie. Die Humoralphysiologie wurde im späten Mittelalter als unzutreffend erkannt; der Verhaltensanteil lebt in der Anthropologie weiter (Kant).',
            'Enger Zusammenhang **Persönlichkeit–Emotion** schon von den Griechen beschrieben (heute vielfach bestätigt).',
          ],
        },
      ],
    },
    {
      id: 'psychognostik',
      title: 'Vorwissenschaftliche Methoden: Psychognostik',
      blocks: [
        {
          t: 'compare',
          items: [
            { title: 'Physiognomik', text: 'Persönlichkeit aus dem **Gesichtsschnitt**.' },
            { title: 'Phrenologie', text: 'Persönlichkeit aus der Form der **Schädeldecke**.' },
            { title: 'Graphologie', text: 'Persönlichkeit aus dem **Schriftbild**.' },
          ],
        },
        { t: 'p', text: 'Alle drei gelten als vorwissenschaftlich. (S. 23)' },
      ],
    },
    {
      id: 'wozu',
      title: 'Wozu Persönlichkeit und Persönlichkeitstheorien?',
      blocks: [
        {
          t: 'p',
          text: 'Konstrukte und Theorien sind **Modelle, nicht «the truth»**. Wissen über Persönlichkeit hilft zu verstehen, wie und warum sich Menschen in Situationen verhalten und was sich verändern/trainieren lässt. (S. 13, 25)',
        },
        { t: 'widget', w: 'validitaeten' },
        {
          t: 'list',
          title: 'Weitere Befunde',
          items: [
            'Vergleich (Schmidt-Atzert & Amelang 2012): Intelligenz–Berufserfolg *r* = .51; Gewissenhaftigkeit–Berufserfolg *r* = .31; **Persönlichkeit–Wohlbefinden *r* = .36**. (S. 25)',
            '**Digitale Spuren:** Computer-Urteile aus Facebook-Likes (*r* = .56) sind treffsicherer als Urteile von Facebook-Freunden (*r* = .49) (Youyou et al. 2015). Kosinski: aus 68 Likes Hautfarbe (95 %), sexuelle Orientierung (88 %), Partei (85 %). (S. 25)',
          ],
        },
      ],
    },
  ],
};
