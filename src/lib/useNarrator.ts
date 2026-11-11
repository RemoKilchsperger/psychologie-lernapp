import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Vorlese-Engine auf Basis der Web Speech API (speechSynthesis).
 * Läuft komplett im Browser, ohne Server. Texte werden in kurze Stücke
 * zerlegt, weil einige Browser (Chrome) lange Äusserungen nach ~15 s abbrechen.
 */

export interface SpeakTarget {
  /** Epoche auf der Zeitachse hervorheben */
  epoch?: number;
  blockId?: string;
  tab?: 'inhalte' | 'leitfragen' | 'personen';
  /** data-speak-Id des Elements, das hervorgehoben und angescrollt wird */
  el?: string;
  /** Leitfragen-Key, dessen Antwort aufgedeckt wird */
  reveal?: string;
  person?: string;
}

export interface Segment {
  key: string;
  label: string;
  text: string;
  target: SpeakTarget;
  /** Pause nach dem Segment in ms (z.B. Denkpause nach einer Leitfrage) */
  pauseAfter?: number;
  /** true = die Pause danach ist eine Denkpause (wird angezeigt) */
  think?: boolean;
}

export interface TtsSettings {
  rate: number;
  voiceURI: string | null;
  /** Denkpause zwischen Leitfrage und Antwort in Sekunden */
  think: number;
  inhalte: boolean;
  personen: boolean;
  leitfragen: boolean;
  /** nur Leitfragen, die noch nicht als «gewusst» markiert sind */
  onlyOpen: boolean;
  /** beim Vorlesen automatisch mitscrollen */
  follow: boolean;
}

const KEY = 'psy-lernapp-tts-v1';
const DEFAULTS: TtsSettings = {
  rate: 1,
  voiceURI: null,
  think: 5,
  inhalte: true,
  personen: true,
  leitfragen: true,
  onlyOpen: false,
  follow: true,
};

function loadSettings(): TtsSettings {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    /* localStorage nicht verfügbar */
  }
  return DEFAULTS;
}

/** Text in Stücke von max. ~220 Zeichen an Satzgrenzen zerlegen */
function chunk(text: string, max = 220): string[] {
  // Sätze, und sehr lange Sätze zusätzlich an Kommas
  const pieces = text
    .split(/(?<=[.!?:;])\s+/)
    .flatMap((s) => (s.length > max ? s.split(/(?<=,)\s+/) : [s]));
  const out: string[] = [];
  let cur = '';
  for (const p of pieces) {
    if (cur && cur.length + p.length + 1 > max) {
      out.push(cur);
      cur = p;
    } else {
      cur = cur ? `${cur} ${p}` : p;
    }
  }
  if (cur) out.push(cur);
  return out.filter((c) => c.trim());
}

/** Beste deutsche Stimme wählen: natürliche Schweizer Stimme > natürliche deutsche > de-CH > de-DE > irgendeine */
function pickVoice(voices: SpeechSynthesisVoice[]) {
  const de = voices.filter((v) => v.lang.toLowerCase().startsWith('de'));
  const natural = (v: SpeechSynthesisVoice) => /natural|online|neural|premium|enhanced/i.test(v.name);
  return (
    de.find((v) => natural(v) && /ch/i.test(v.lang)) ??
    de.find(natural) ??
    de.find((v) => /de-ch/i.test(v.lang)) ??
    de.find((v) => /de-de/i.test(v.lang)) ??
    de[0] ??
    null
  );
}

export type NarratorStatus = 'idle' | 'playing' | 'paused';

export function useNarrator() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [settings, setSettingsState] = useState<TtsSettings>(loadSettings);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [queue, setQueue] = useState<Segment[]>([]);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<NarratorStatus>('idle');
  const [waiting, setWaiting] = useState(false);

  const r = useRef({
    queue: [] as Segment[],
    index: 0,
    chunk: 0,
    gen: 0,
    timer: 0 as ReturnType<typeof setTimeout> | 0,
    status: 'idle' as NarratorStatus,
    settings,
    voices: [] as SpeechSynthesisVoice[],
    utter: null as SpeechSynthesisUtterance | null,
    chunks: new WeakMap<Segment, string[]>(),
  });
  r.current.settings = settings;
  r.current.voices = voices;

  /* Stimmen laden (werden in Chrome asynchron geliefert) */
  useEffect(() => {
    if (!supported) return;
    const load = () => setVoices(speechSynthesis.getVoices());
    load();
    speechSynthesis.addEventListener('voiceschanged', load);
    return () => speechSynthesis.removeEventListener('voiceschanged', load);
  }, [supported]);

  const germanVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('de'));
  const voice = voices.find((v) => v.voiceURI === settings.voiceURI) ?? pickVoice(voices);

  const setSettings = useCallback((patch: Partial<TtsSettings>) => {
    setSettingsState((s) => {
      const next = { ...s, ...patch };
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignorieren */
      }
      return next;
    });
  }, []);

  const setStat = (st: NarratorStatus) => {
    r.current.status = st;
    setStatus(st);
  };

  const halt = () => {
    const s = r.current;
    s.gen++;
    if (s.timer) clearTimeout(s.timer);
    s.timer = 0;
    setWaiting(false);
    if (supported) speechSynthesis.cancel();
  };

  /** ab aktuellem Segment/Stück vorlesen */
  const run = useCallback(() => {
    if (!supported) return;
    halt();
    const s = r.current;
    const gen = s.gen;
    const finish = () => {
      setStat('idle');
      setWaiting(false);
    };
    const step = () => {
      if (gen !== s.gen) return;
      const seg = s.queue[s.index];
      if (!seg) return finish();
      let chunks = s.chunks.get(seg);
      if (!chunks) s.chunks.set(seg, (chunks = chunk(seg.text)));

      if (s.chunk >= chunks.length) {
        if (s.index + 1 >= s.queue.length) return finish();
        const wait = seg.think ? s.settings.think * 1000 : (seg.pauseAfter ?? 400);
        if (seg.think && wait > 0) setWaiting(true);
        s.timer = setTimeout(() => {
          if (gen !== s.gen) return;
          setWaiting(false);
          s.index++;
          s.chunk = 0;
          setIndex(s.index);
          step();
        }, wait);
        return;
      }

      const u = new SpeechSynthesisUtterance(chunks[s.chunk]);
      const v = s.voices.find((x) => x.voiceURI === s.settings.voiceURI) ?? pickVoice(s.voices);
      if (v) u.voice = v;
      u.lang = v?.lang ?? 'de-CH';
      u.rate = s.settings.rate;
      u.onend = () => {
        if (gen !== s.gen) return;
        s.chunk++;
        step();
      };
      u.onerror = (e) => {
        if (gen !== s.gen || e.error === 'interrupted' || e.error === 'canceled') return;
        s.chunk++;
        step();
      };
      s.utter = u; // Referenz halten, sonst feuert onend in Chrome teils nicht
      speechSynthesis.speak(u);
    };
    setStat('playing');
    // kurze Verzögerung: Chrome verschluckt speak() direkt nach cancel()
    s.timer = setTimeout(step, 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supported]);

  const play = useCallback(
    (segments: Segment[], start = 0) => {
      const s = r.current;
      s.queue = segments;
      s.index = Math.max(0, Math.min(start, segments.length - 1));
      s.chunk = 0;
      setQueue(segments);
      setIndex(s.index);
      if (segments.length) run();
    },
    [run],
  );

  /** Warteschlange ersetzen (z.B. nach Änderung der Optionen), Position möglichst halten */
  const replace = useCallback(
    (segments: Segment[]) => {
      const s = r.current;
      const curKey = s.queue[s.index]?.key;
      const found = segments.findIndex((x) => x.key === curKey);
      s.queue = segments;
      setQueue(segments);
      if (found >= 0) {
        s.index = found;
        setIndex(found);
        return;
      }
      s.index = Math.min(s.index, Math.max(0, segments.length - 1));
      s.chunk = 0;
      setIndex(s.index);
      if (s.status === 'playing') run();
    },
    [run],
  );

  const pause = useCallback(() => {
    halt();
    setStat('paused');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resume = useCallback(() => {
    if (r.current.queue.length) run();
  }, [run]);

  const stop = useCallback(() => {
    halt();
    const s = r.current;
    s.queue = [];
    s.index = 0;
    s.chunk = 0;
    setQueue([]);
    setIndex(0);
    setStat('idle');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jump = useCallback(
    (to: number) => {
      const s = r.current;
      if (!s.queue.length) return;
      s.index = Math.max(0, Math.min(to, s.queue.length - 1));
      s.chunk = 0;
      setIndex(s.index);
      if (s.status === 'playing') run();
      else halt();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [run],
  );

  const next = useCallback(() => jump(r.current.index + 1), [jump]);
  /** zurück: erst an den Anfang des aktuellen Segments, dann ein Segment zurück */
  const prev = useCallback(() => {
    const s = r.current;
    jump(s.chunk > 0 && s.status === 'playing' ? s.index : s.index - 1);
  }, [jump]);

  /* Tempo oder Stimme während des Vorlesens geändert: aktuelles Stück neu starten */
  useEffect(() => {
    if (r.current.status === 'playing') run();
  }, [settings.rate, settings.voiceURI, run]);

  /* beim Verlassen der Seite verstummen */
  useEffect(
    () => () => {
      r.current.gen++;
      if (r.current.timer) clearTimeout(r.current.timer);
      if (supported) speechSynthesis.cancel();
    },
    [supported],
  );

  const current = status !== 'idle' || queue.length ? (queue[index] ?? null) : null;

  return {
    supported,
    settings,
    setSettings,
    voices: germanVoices,
    voice,
    queue,
    index,
    current,
    status,
    waiting,
    play,
    replace,
    pause,
    resume,
    stop,
    next,
    prev,
    jump,
  };
}

export type Narrator = ReturnType<typeof useNarrator>;
