import { useCallback, useEffect, useState } from 'react';

/** Lernfortschritt, gespeichert im localStorage des Browsers. */
export interface Progress {
  /** gelesene Abschnitte: "semester/fach/abschnitt" -> true */
  read: Record<string, boolean>;
  /** bestes Quiz-Ergebnis pro Fach: "semester/fach" -> Anteil 0..1 */
  quizBest: Record<string, number>;
  /** Selbsteinschätzung Leitfragen: key -> 'known' | 'again' */
  flags: Record<string, string>;
}

const KEY = 'psy-lernapp-progress-v1';
const EVENT = 'psy-progress-change';

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { read: {}, quizBest: {}, flags: {}, ...JSON.parse(raw) };
  } catch {
    /* localStorage nicht verfügbar */
  }
  return { read: {}, quizBest: {}, flags: {} };
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignorieren */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load);

  useEffect(() => {
    const sync = () => setProgress(load());
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const toggleRead = useCallback((key: string) => {
    const p = load();
    p.read[key] = !p.read[key];
    save(p);
  }, []);

  const recordQuiz = useCallback((key: string, score: number) => {
    const p = load();
    p.quizBest[key] = Math.max(p.quizBest[key] ?? 0, score);
    save(p);
  }, []);

  const setFlag = useCallback((key: string, value: string | null) => {
    const p = load();
    if (value === null) delete p.flags[key];
    else p.flags[key] = value;
    save(p);
  }, []);

  const reset = useCallback(() => save({ read: {}, quizBest: {}, flags: {} }), []);

  return { progress, toggleRead, recordQuiz, setFlag, reset };
}
