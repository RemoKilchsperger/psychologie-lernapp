import { Fragment } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\((?:Fol\.|LB S\.|Notiz)[^)]*\))/g;

/** Rendert **fett** als Fachbegriff und Quellenangaben wie (Fol. 3) als kleine Marke. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (/^\((Fol\.|LB S\.|Notiz)/.test(p))
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
  return text.replace(/\*\*/g, '');
}
