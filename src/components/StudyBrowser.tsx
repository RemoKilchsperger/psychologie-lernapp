import { useMemo, useState } from 'react';
import type { Study, Subject, TheoryBlock } from '../types';
import { StudyCard } from './theory/TheoryBlockView';

interface Group {
  sectionId: string;
  sectionTitle: string;
  partTitle: string;
  studies: Study[];
}

function studiesOf(block: TheoryBlock | undefined): Study[] {
  return block?.kind === 'studies' ? block.items : [];
}

/** Sammelt alle Studien eines Fachs (aus Abschnitten und Unterteilen). */
export function collectStudies(subject: Subject): Group[] {
  const groups: Group[] = [];
  for (const s of subject.sections) {
    const direct = studiesOf(s.block);
    if (direct.length) groups.push({ sectionId: s.id, sectionTitle: s.title, partTitle: s.title, studies: direct });
    for (const p of s.parts ?? []) {
      const st = studiesOf(p.block);
      if (st.length) groups.push({ sectionId: s.id, sectionTitle: s.title, partTitle: p.title, studies: st });
    }
  }
  return groups;
}

/** Übersicht aller Studien mit Filter nach Vorlesung und Selbsttest-Modus. */
export function StudyBrowser({ subject }: { subject: Subject }) {
  const groups = useMemo(() => collectStudies(subject), [subject]);
  const sections = useMemo(
    () => Array.from(new Map(groups.map((g) => [g.sectionId, g.sectionTitle])).entries()),
    [groups],
  );
  const [filter, setFilter] = useState<string>('alle');
  const [test, setTest] = useState(false);
  const [allOpen, setAllOpen] = useState(false);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const visible = groups
    .filter((g) => filter === 'alle' || g.sectionId === filter)
    .map((g) => ({
      ...g,
      studies: q
        ? g.studies.filter((s) => [s.title, s.source, s.takeaway, s.method, s.result].join(' ').toLowerCase().includes(q))
        : g.studies,
    }))
    .filter((g) => g.studies.length);
  const count = visible.reduce((n, g) => n + g.studies.length, 0);

  return (
    <div className="study-browser">
      <div className="sb-controls">
        <div className="toc">
          <a href="#" className={filter === 'alle' ? 'on' : ''} onClick={(e) => { e.preventDefault(); setFilter('alle'); }}>
            Alle
          </a>
          {sections.map(([id, title]) => (
            <a key={id} href="#" className={filter === id ? 'on' : ''} onClick={(e) => { e.preventDefault(); setFilter(id); }}>
              {title}
            </a>
          ))}
        </div>
        <div className="sb-row">
          <input type="search" placeholder="Suchen (z.B. Bandura, Klippe, Theory of Mind)" value={query} onChange={(e) => setQuery(e.target.value)} />
          <label>
            <input type="checkbox" checked={test} onChange={(e) => setTest(e.target.checked)} /> Selbsttest: Kernaussage verdecken
          </label>
          <label>
            <input type="checkbox" checked={allOpen} onChange={(e) => setAllOpen(e.target.checked)} /> Alles aufklappen
          </label>
        </div>
        <p className="muted small">{count} Studien</p>
      </div>
      {visible.map((g) => (
        <section key={g.sectionId + g.partTitle} className="theory-section">
          <div className="eyebrow">{g.sectionTitle}</div>
          <h3>{g.partTitle}</h3>
          <div className="studies">
            {g.studies.map((s, i) => (
              <StudyCard key={s.title + i + String(test)} study={s} hideTakeaway={test} open={allOpen ? true : undefined} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
