"use client";

import { useState } from "react";
import { QuizQuestion } from "../lib/types";
import { saveQuizScore, getModuleProgress } from "../lib/progress";

interface QuizProps {
  moduleId: number;
  questions: QuizQuestion[];
  onComplete: () => void;
}

export default function Quiz({ moduleId, questions, onComplete }: QuizProps) {
  const existing = getModuleProgress(moduleId);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>(existing?.quizAnswers?.length === questions.length ? existing.quizAnswers : []);
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(existing?.completed && existing?.quizAnswers?.length === questions.length);

  if (finished && answers.length === questions.length) {
    const score = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="border border-cream-300 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-ink-900">Quiz Complete</h3>
          <span className={`font-mono text-2xl ${pct >= 80 ? "text-green-600" : pct >= 60 ? "text-clay-500" : "text-red-500"}`}>
            {pct}%
          </span>
        </div>
        <p className="text-ink-500 text-sm mb-4">
          You scored {score}/{questions.length} correct.
        </p>
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={i} className={`p-3 border ${answers[i] === q.correctIndex ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}`}>
              <p className="text-sm text-ink-700 mb-1">{q.question}</p>
              {answers[i] !== q.correctIndex && (
                <p className="text-xs text-ink-500">
                  Your answer: {q.options[answers[i]]} | Correct: {q.options[q.correctIndex]}
                </p>
              )}
              <p className="text-xs text-ink-400 mt-1">{q.explanation}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setAnswers([]);
            setCurrentQ(0);
            setSelected(null);
            setShowResult(false);
            setSubmitted(false);
            setFinished(false);
          }}
          className="mt-4 px-4 py-2 text-sm bg-cream-200 text-ink-600 hover:bg-cream-300 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQ];

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    setShowResult(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected!];
    setAnswers(newAnswers);
    setSelected(null);
    setShowResult(false);
    setSubmitted(false);

    if (currentQ + 1 >= questions.length) {
      const score = newAnswers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
      const pct = Math.round((score / questions.length) * 100);
      saveQuizScore(moduleId, pct, newAnswers);
      setFinished(true);
      onComplete();
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="border border-cream-300 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-ink-900">Module Quiz</h3>
        <span className="font-mono text-sm text-ink-400">
          {currentQ + 1}/{questions.length}
        </span>
      </div>
      <div className="w-full bg-cream-200 h-1 mb-6">
        <div
          className="bg-clay-500 h-1 transition-all duration-300"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>
      <p className="text-ink-800 mb-4">{q.question}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let borderColor = "border-cream-300 hover:border-cream-400";
          if (selected === i && !showResult) borderColor = "border-clay-500 bg-clay-500/5";
          if (showResult && i === q.correctIndex) borderColor = "border-green-500 bg-green-50";
          if (showResult && selected === i && i !== q.correctIndex) borderColor = "border-red-400 bg-red-50";

          return (
            <button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              disabled={submitted}
              className={`w-full text-left p-3 border text-sm transition-colors ${borderColor} ${
                submitted ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="font-mono text-xs text-ink-400 mr-2">{String.fromCharCode(65 + i)}.</span>
              <span className="text-ink-700">{opt}</span>
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="p-3 bg-cream-100 border border-cream-300 mb-4">
          <p className="text-sm text-ink-500">{q.explanation}</p>
        </div>
      )}
      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className={`px-5 py-2 text-sm font-medium transition-colors ${
              selected === null
                ? "bg-cream-200 text-ink-300 cursor-not-allowed"
                : "bg-clay-500 text-white hover:bg-clay-600"
            }`}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-5 py-2 text-sm font-medium bg-clay-500 text-white hover:bg-clay-600 transition-colors"
          >
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}
