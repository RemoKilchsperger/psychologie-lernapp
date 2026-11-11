import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../types';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Quiz({ questions, onFinish }: { questions: QuizQuestion[]; onFinish: (score: number) => void }) {
  const [round, setRound] = useState(0);
  // Fragen und Antwortoptionen mischen, damit die Position der richtigen Antwort nichts verrät
  const order = useMemo(
    () =>
      shuffle(questions).map((q) => {
        const opts = shuffle(q.options.map((text, i) => ({ text, ok: i === q.correct })));
        return { ...q, options: opts.map((o) => o.text), correct: opts.findIndex((o) => o.ok) };
      }),
    [questions, round],
  );
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  if (questions.length === 0) return <p className="muted">Für dieses Fach gibt es noch keine Quizfragen.</p>;

  const restart = () => {
    setRound(round + 1);
    setIdx(0);
    setPicked(null);
    setCorrectCount(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((correctCount / order.length) * 100);
    return (
      <div className="quiz-result">
        <div className="big">{pct}%</div>
        <p>
          {correctCount} von {order.length} richtig
        </p>
        <button className="btn" onClick={restart}>
          Nochmals
        </button>
      </div>
    );
  }

  const q = order[idx];
  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.correct) setCorrectCount((c) => c + 1);
  };
  const next = () => {
    if (idx + 1 >= order.length) {
      setDone(true);
      onFinish(correctCount / order.length);
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-progress">
        Frage {idx + 1} / {order.length}
        <div className="bar">
          <div style={{ width: `${(idx / order.length) * 100}%` }} />
        </div>
      </div>
      <h3>{q.question}</h3>
      <div className="options">
        {q.options.map((o, i) => {
          let cls = 'option';
          if (picked !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === picked) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => answer(i)} disabled={picked !== null}>
              {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="feedback">
          <strong>{picked === q.correct ? 'Richtig!' : 'Leider falsch.'}</strong>
          {q.explanation && <p>{q.explanation}</p>}
          <button className="btn" onClick={next}>
            {idx + 1 >= order.length ? 'Auswertung' : 'Weiter'}
          </button>
        </div>
      )}
    </div>
  );
}
