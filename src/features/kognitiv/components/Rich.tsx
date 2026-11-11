import { Fragment, type ReactNode } from 'react';

// Quellenmarken: (F. 32), (F. 37–40), (LB S. 7), (Notiz); [Web] und [Ergänzung] als farbige Marken.
const TOKEN = /(\*\*.+?\*\*|(?<!\p{L})\*[^*\s][^*]*?\*(?!\p{L})|\((?:(?:Einf|Wahrn|Vorst|Aufm)\.\s)?(?:F\.\s|LB\sS\.|Notiz)[^)]*\)|\[Web\]|\[Ergänzung\])/gu;
const SRC = /^\((?:(?:Einf|Wahrn|Vorst|Aufm)\.\s)?(?:F\.\s|LB\sS\.|Notiz)/;
const SUB = /\b([A-Za-z]{1,3})_([A-Za-zäöü]{1,14})\b/g;

/** Formelzeichen wie RT_A oder t_Entscheidung → RT<sub>A</sub> */
export function withSubs(text: string, keyBase = ''): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  SUB.lastIndex = 0;
  while ((m = SUB.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Fragment key={`${keyBase}s${m.index}`}>
        {m[1].length === 1 ? <i>{m[1]}</i> : m[1]}
        <sub>{m[2]}</sub>
      </Fragment>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * Rendert **fett** als Fachbegriff, *kursiv*, Quellen wie (F. 32) oder (LB S. 7) als kleine Marke,
 * [Web] als blaue und [Ergänzung] als gelbe Marke sowie Formelzeichen wie RT_A mit Index.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <strong key={i}>
              <Rich text={p.slice(2, -2)} />
            </strong>
          );
        if (p.length > 2 && p.startsWith('*') && p.endsWith('*')) return <em key={i}>{withSubs(p.slice(1, -1), `${i}`)}</em>;
        if (p === '[Ergänzung]')
          return (
            <span key={i} className="pk-erg" title="Steht weder auf den Folien noch in der Zusammenfassung – nur zum Verständnis">
              Ergänzung
            </span>
          );
        if (p === '[Web]')
          return (
            <span key={i} className="kg-web" title="Ergänzung aus einer Internetquelle der Notizen (nicht Folie, nicht Lehrbuch)">
              Web
            </span>
          );
        if (SRC.test(p))
          return (
            <span key={i} className="ew-src" title={p.startsWith('(LB') ? 'Lehrbuch Anderson (2013), Seite' : 'Folie des jeweiligen Foliensatzes'}>
              {p.slice(1, -1)}
            </span>
          );
        return <Fragment key={i}>{withSubs(p, `${i}`)}</Fragment>;
      })}
    </>
  );
}

/** Entfernt Markup – für Suche und Vergleiche. */
export function plain(text: string) {
  return text.replace(/\*\*/g, '').replace(/\[(Ergänzung|Web)\]/g, '').replace(/_/g, '');
}
