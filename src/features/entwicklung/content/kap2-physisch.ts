import type { Chapter } from '../model';

export const kap2: Chapter = {
  id: 'physisch',
  nr: 2,
  short: 'Physische Entwicklung',
  title: 'Physische Entwicklung',
  date: '24.09.',
  folien: 'Fol. 6–17',
  lohaus: 'Kap. 6 (ohne 6.2.3.4 und 6.2.4) · 18.3.3.1 Pränatale Faktoren · 18.6.1',
  color: '#eb6834',
  kern: [
    'Pränatal: **Zygoten-** (0.–2. Woche) → **Embryonal-** (3.–8. Woche, sensibelste Phase, strukturelle Schäden) → **Fötalstadium** (ab 9. Woche, funktionelle Schäden).',
    '**Teratogene**: Tabak, Alkohol (FAS), Drogen, Medikamente, Infektionen, Strahlung, Umweltgifte.',
    'Frühgeburt = vor der 37. GW oder < 2500 g; Folgen kognitiv, psychisch, schulisch und bis ins Erwachsenenalter.',
    'Neugeborene: **Apgar-Index**, SIDS-Prävention, ca. 16 h Schlaf mit ca. 50 % REM.',
    'Gehirn: Neurogenese, Synaptogenese, Synapseneliminierung, Myelinisierung, Spezialisierung; **erfahrungserwartende** (sensible Phasen) vs. **erfahrungsabhängige** Plastizität (lebenslang).',
  ],
  sections: [
    {
      id: 'praenatal',
      title: 'Pränatale Entwicklung',
      blocks: [
        { t: 'widget', w: 'praenatal-zeit' },
        {
          t: 'table',
          head: ['Stadium', 'Zeitraum', 'Kennzeichen'],
          rows: [
            ['**Zygotenstadium**', '0.–2. Lebenswoche', 'Verschmelzung Ei- und Samenzelle; Einnistung des befruchteten Eis'],
            [
              '**Embryonalstadium**',
              '3.–8. Lebenswoche',
              'Differenzierung der Organsysteme durch Zellteilung, Zellmigration, Zellspezialisierung, Zellsterben (programmierter Zelltod); Entwicklung des Unterstützungssystems',
            ],
            [
              '**Fötalstadium**',
              '9. Woche bis Geburt',
              'Erste Reflexe, Gehirn beginnt Koordination, Kopfdrehen, Mimik; individuelle Verhaltensunterschiede; Bewegungen für Mutter spürbar (ca. 5. Mon.); Schlaf-Wach-Zeiten; im letzten Drittel alle Sinne ausgebildet (Sehen, Hören, Geschmack, Geruch, Tastsinn, vermutl. Schmerz)',
            ],
          ],
          caption: 'Fol. 6–7',
        },
        { t: 'figure', fig: 'praenatal' },
      ],
    },
    {
      id: 'teratogene',
      title: 'Risikofaktoren: Teratogene',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Teratogene',
              text: 'Äussere Einwirkungen, die bereits pränatal physische oder psychische Schäden verursachen und die Entwicklung beeinträchtigen können. (Fol. 7)',
            },
          ],
        },
        {
          t: 'compare',
          items: [
            { title: 'Embryonalzeit (3.–8. Woche)', text: 'v. a. **strukturelle** Veränderungen → Fehlbildungen' },
            { title: 'Fötalzeit (ab 9. Woche)', text: 'eher **funktionelle** Veränderungen → z. B. Intelligenzminderung, Verhaltensänderungen' },
          ],
        },
        {
          t: 'table',
          caption: 'Fol. 8–10',
          head: ['Teratogen', 'Folgen'],
          rows: [
            [
              '**Tabak** (auch passiv)',
              'Geringeres Gewicht, verlangsamtes Wachstum, plötzlicher Kindstod; langfristig erhöhte Blutfette und schlechtere Lungenfunktion in der Kindheit, Verhaltensprobleme, Rauchen im Jugendalter. RKI 2018: 11 % der Mütter rauchten in der Schwangerschaft (2007: 20 %); sozialer Status spielt eine Rolle',
            ],
            [
              '**Alkohol → FAS**',
              'Gehirnschäden (Mikrozephalie), Gesichts-/Organfehlbildungen, Wachstumsstörungen; kognitiv: verminderte Intelligenz, Merk- und Konzentrationsfähigkeit; sozial-emotional: Hyperaktivität, Impulsivität, distanzlos, leicht verführbar; Wahrnehmungsdefizite, schmerzunempfindlich',
            ],
            ['**Cannabis**', 'Häufigste illegale Droge bei Schwangeren; höheres Risiko für ADHS, Lern- und Gedächtnisstörungen; wirkt schon in den ersten Gestationswochen auf das ZNS'],
            ['**Strahlung**', 'Nach Tschernobyl mehr Fehlgeburten, unterentwickelte Gehirne, Deformationen, langsameres Wachstum'],
            ['**Infektionen**', 'HIV: 20–30 % Übertragung ohne Therapie; Röteln → Rötelnembryofetopathie (Innenohr, Herz, Auge …)'],
            [
              '**Medikamente**',
              'Contergan (früh in der Schwangerschaft) → Fehlbildungen der Extremitäten; Valproinsäure → 30–40 % Risiko für Entwicklungsstörungen, 5-fach erhöhtes Autismusrisiko, Spina bifida',
            ],
            ['**Umweltgifte**', 'Blei (hohe Dosen) → Störung von Neuronenproduktion/-migration; Quecksilber, Pestizide'],
          ],
        },
        {
          t: 'callout',
          tone: 'merke',
          title: 'Fetales Alkoholsyndrom (FAS) – Zahlen & Fakten',
          text: [
            'Auch **partielles FAS** ohne sichtbare Fehlbildungen möglich.',
            'Inzidenz FAS **1:300**, gesamtes Spektrum **1:100**.',
            '**Keine sicher unschädliche Dosis**; seltener intensiver Konsum ist schädlicher als regelmässiger geringer.',
            'Schwer zu diagnostizieren.',
            'Alkohol wirkt als Ausnahme schon in den Wochen 1–2.',
          ],
        },
      ],
    },
    {
      id: 'fruehgeburt',
      title: 'Frühgeburt',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Frühgeburt',
              text: 'Geburt vor der 37. Gestationswoche (GW) oder Geburtsgewicht < 2500 g. (Fol. 10)',
            },
          ],
        },
        {
          t: 'list',
          items: [
            'Regelschwangerschaft **40 GW** (ab letzter Menstruation), durchschnittlich ca. 38 Wochen.',
            'Schweiz: ca. **7 %** aller Geburten sind Frühgeburten (ca. 5 % in der 32.–36. GW).',
            'Erhöhtes Komplikationsrisiko (z. B. Hirnblutungen).',
          ],
        },
        { t: 'widget', w: 'fruehgeburt' },
        {
          t: 'table',
          caption: 'Langfristige Folgen (Fol. 10–11)',
          head: ['Bereich', 'Befund'],
          rows: [
            ['**Kognitiv mit 2 J.**', 'Frühgeborene (< 32 GW / < 1500 g) mit Migrationshintergrund MDI 77.8 vs. 87.3 ohne (Normbereich 85–115)'],
            ['**Psychische Störungen** im Jugend-/jungen Erwachsenenalter', '1.3–2.7-fach (32.–36. GW), 2.5–7.4-fach (< 32. GW)'],
            ['**Schule**', 'Je kürzer die Schwangerschaft, desto schlechter die Leistungen (sehr früh Geborene: 34 % vs. 5.4 % unterdurchschnittlich)'],
            ['**Einkommen**', 'Je geringer das Geburtsgewicht, desto tiefer das Einkommen mit 30'],
          ],
        },
      ],
    },
    {
      id: 'postnatal',
      title: 'Nach der Geburt: Apgar, SIDS, Schlaf',
      blocks: [
        {
          t: 'p',
          text: 'Der **Apgar-Index** wird 1, 5 und 10 Minuten nach der Geburt erhoben und prüft die unmittelbare Überlebensfähigkeit: 5 Parameter à 0–2 Punkte. (Fol. 12)',
        },
        { t: 'widget', w: 'apgar' },
        {
          t: 'compare',
          items: [
            {
              title: 'Säuglingssterblichkeit (Fol. 12)',
              bullets: [
                '= Lebendgeborene, die im **1. Lebensjahr** sterben',
                'CH: 1980 9/1000 → 2024 **3.3/1000**',
                'Risiko in den **ersten 7 Tagen** am höchsten (2.5/1000)',
                'International z. B. Nigeria 71.2/1000',
              ],
            },
            {
              title: 'SIDS-Risikofaktoren (Fol. 12)',
              bullets: [
                'früherer lebensbedrohlicher Zustand',
                'SIDS bei Geschwister',
                'Frühgeburt / extrem niedriges Gewicht',
                'Drogenkonsum der Mutter',
              ],
            },
            {
              title: 'SIDS-Prävention (Fol. 13)',
              bullets: [
                '**Rückenlage** (Bauchlage 10-fach Risiko)',
                '**rauchfreie Eltern** (sonst 8-fach)',
                'feste Matratze ohne Kissen/Fell',
                'nicht überwärmen (16–18 °C)',
                'Stillen; Atemmonitor bei Risikokindern',
                'SIDS-Anteil an Todesfällen CH: 1990 17 % → 2010 4 %',
              ],
            },
          ],
        },
        {
          t: 'list',
          title: 'Schlaf-Wach-Rhythmus (Fol. 13–14)',
          items: [
            '**Frühe Entwicklungsaufgabe:** Anpassung der eigenen zirkadianen Rhythmik an die soziale Umgebung; Schlafintervalle verlängern sich, Annäherung an den Tag-Nacht-Rhythmus.',
            'Neugeborene: ca. **16 h Schlaf**, davon ca. **50 % REM**.',
            'REM-Schlaf unterstützt Lernen und Informationsverarbeitung und in den ersten Monaten die Reifung der Sinnessysteme (**Autostimulationstheorie**).',
          ],
        },
        { t: 'figure', fig: 'schlaf' },
        { t: 'widget', w: 'aktivierung' },
      ],
    },
    {
      id: 'schreibabys',
      title: 'Schreibabys',
      blocks: [
        {
          t: 'defs',
          items: [
            {
              term: 'Schreibaby',
              text: 'Exzessives, regelmässiges, lang anhaltendes Schreien ohne erkennbaren Grund; gehört zu den frühen Regulationsstörungen. (Fol. 15)',
            },
            {
              term: 'Wessel-Kriterium («Regel der Drei»)',
              text: '≥ 3 Std. an ≥ 3 Tagen über ≥ 3 Wochen; modifiziert: ≥ 3 Std. an ≥ 3 Tagen einer Woche. (Fol. 15)',
            },
          ],
        },
        {
          t: 'list',
          items: [
            'Grosse Unterschiede, was Eltern als belastend erleben.',
            'Jungen und Mädchen **gleich** betroffen; viele entwickeln sich gut.',
            'Aber: Ehemalige **persistierende** Schreibabys (meist mit weiteren Regulationsstörungen) zeigten mit 8–10 J. häufiger Hyperaktivitäts- und Verhaltensprobleme als die Kontrollgruppe (Wolke et al., 2002). (Fol. 15)',
          ],
        },
      ],
    },
    {
      id: 'gehirn',
      title: 'Gehirnentwicklung',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Neurogenese', text: 'Bildung neuer Gehirnzellen (fast nur pränatal)' },
            { title: 'Synaptogenese', text: 'Bildung neuer Synapsen' },
            { title: 'Synapseneliminierung', text: 'Beseitigung überschüssiger, wenig genutzter Synapsen' },
            { title: 'Myelinisierung', text: 'Isolationsschicht um Nervenbahnen → schnellere Reizweiterleitung' },
            { title: 'Spezialisierung', text: 'Von Hirnarealen und Hemisphären (asymmetrische Entwicklung)' },
          ],
        },
        {
          t: 'p',
          text: 'Das Gehirn ist **dynamisch, nicht linear**. Erfahrungen bestimmen, welche Synapsen erhalten bleiben → **Neuroplastizität** = Anpassung des ZNS an die Lebenserfahrung. (Fol. 15)',
        },
        {
          t: 'compare',
          items: [
            {
              title: 'Erfahrungserwartende Plastizität',
              text: 'Hirnfunktionen entwickeln sich durch **allgemeine** Erfahrungen, die jeder Mensch in einer normalen Umwelt macht. **Gebunden an sensible Phasen** (Zeitfenster), in denen bestimmte Erfahrungen nötig sind.',
            },
            {
              title: 'Erfahrungsabhängige Plastizität',
              text: 'Hirnfunktionen entwickeln sich durch **spezifische** Erfahrungen; flexible Synapsenbildung/-eliminierung nach Bedarf. **Unabhängig von sensiblen Phasen, lebenslang.**',
            },
          ],
        },
        {
          t: 'callout',
          tone: 'achtung',
          text: 'Nur die **erfahrungserwartende** Plastizität ist an sensible Phasen gebunden.',
        },
      ],
    },
  ],
};
