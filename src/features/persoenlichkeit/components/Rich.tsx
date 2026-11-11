import { Fragment, type ReactNode } from 'react';

// Gender-Sternchen (Expert*innen) steht direkt nach einem Buchstaben und gilt nicht als Kursiv-Marke.
const TOKEN = /(\*\*.+?\*\*|(?<!\p{L})\*[^*\s][^*]*?\*(?!\p{L})|\((?:S\.\s|Notiz)[^)]*\)|\[Ergänzung\])/gu;
const SUB = /([A-Za-z])_([A-Za-z]{1,3})\b/g;

/** Formelzeichen wie r_MZ oder V_G → r<sub>MZ</sub> */
export function withSubs(text: string, keyBase = ''): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  SUB.lastIndex = 0;
  while ((m = SUB.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Fragment key={`${keyBase}s${m.index}`}>
        <i>{m[1]}</i>
        <sub>{m[2]}</sub>
      </Fragment>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * Rendert **fett** als Fachbegriff, *kursiv*, Quellen wie (S. 13) oder (Notiz) als kleine Marke,
 * [Ergänzung] als gelbe Marke und Formelzeichen wie r_MZ mit Index.
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
            <span key={i} className="pk-erg" title="Steht nicht auf den Folien – nur zum Verständnis">
              Ergänzung
            </span>
          );
        if (/^\((S\.\s|Notiz)/.test(p))
          return (
            <span key={i} className="ew-src" title="Quelle (Seite im OneNote-Export)">
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
  return text.replace(/\*\*/g, '').replace(/\[Ergänzung\]/g, '').replace(/_/g, '');
}
