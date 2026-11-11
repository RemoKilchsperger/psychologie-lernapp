import { Fragment } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\((?:B\d|LB S\.|Notiz|Leitfrage)[^)]*\)|\[Ergänzung\])/g;

/**
 * Rendert **fett** als Fachbegriff, *kursiv*, Quellen wie (B3/F. 54) oder (LB S. 83) als kleine Marke
 * und [Ergänzung] als gelbe Marke.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.length > 2 && p.startsWith('*') && p.endsWith('*')) return <em key={i}>{p.slice(1, -1)}</em>;
        if (p === '[Ergänzung]')
          return (
            <span key={i} className="gs-erg" title="Steht weder auf den Folien noch im Lehrbuch – nur zum Verständnis">
              Ergänzung
            </span>
          );
        if (/^\((B\d|LB S\.|Notiz|Leitfrage)/.test(p))
          return (
            <span key={i} className="ew-src" title="Quelle">
              {p.slice(1, -1)}
            </span>
          );
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

/** Entfernt Markup – für Suche und Vergleiche. */
export function plain(text: string) {
  return text.replace(/\*\*/g, '').replace(/\[Ergänzung\]/g, '');
}
