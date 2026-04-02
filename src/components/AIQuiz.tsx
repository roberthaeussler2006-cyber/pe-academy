"use client";

import { useState } from "react";
import { QuizQuestion } from "../lib/types";

interface AIQuizProps {
  moduleId: number;
  moduleTitle: string;
  topics: string;
}

export default function AIQuiz({ moduleId, moduleTitle, topics }: AIQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState("");

  const generateQuestions = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId, moduleTitle, topics }),
      });
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setCurrentQ(0);
        setScore(0);
        setFinished(false);
        setSelected(null);
        setSubmitted(false);
        setShowResult(false);
      } else {
        setError("Could not generate questions. Try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="border border-cream-300 bg-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-clay-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-mono">AI</span>
          </div>
          <h3 className="text-lg font-semibold text-ink-900">AI-Generated Quiz</h3>
        </div>
        <p className="text-sm text-ink-500 mb-4">
          Generate fresh practice questions on this module using AI. Each set is unique.
        </p>
        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
        <button
          onClick={generateQuestions}
          disabled={loading}
          className={`px-5 py-2 text-sm font-medium transition-colors ${
            loading ? "bg-cream-200 text-ink-400" : "bg-clay-500 text-white hover:bg-clay-600"
          }`}
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="border border-cream-300 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-clay-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-mono">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-ink-900">AI Quiz Complete</h3>
          </div>
          <span className={`font-mono text-2xl ${pct >= 80 ? "text-green-600" : pct >= 60 ? "text-clay-500" : "text-red-500"}`}>
            {pct}%
          </span>
        </div>
        <p className="text-ink-500 text-sm mb-4">
          You scored {score}/{questions.length} on AI-generated questions.
        </p>
        <div className="flex gap-3">
          <button
            onClick={generateQuestions}
            disabled={loading}
            className="px-4 py-2 text-sm bg-clay-500 text-white hover:bg-clay-600 transition-colors"
          >
            {loading ? "Generating..." : "New Questions"}
          </button>
          <button
            onClick={() => { setQuestions([]); setFinished(false); }}
            className="px-4 py-2 text-sm bg-cream-200 text-ink-600 hover:bg-cream-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="border border-cream-300 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-clay-500 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold font-mono">AI</span>
          </div>
          <h3 className="text-sm font-semibold text-ink-900">AI-Generated Quiz</h3>
        </div>
        <span className="font-mono text-sm text-ink-400">{currentQ + 1}/{questions.length}</span>
      </div>
      <div className="w-full bg-cream-200 h-1 mb-4">
        <div className="bg-clay-500 h-1 transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>
      <p className="text-ink-800 mb-4 text-sm">{q.question}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let cls = "border-cream-300 hover:border-cream-400";
          if (selected === i && !showResult) cls = "border-clay-500 bg-clay-500/5";
          if (showResult && i === q.correctIndex) cls = "border-green-500 bg-green-50";
          if (showResult && selected === i && i !== q.correctIndex) cls = "border-red-400 bg-red-50";
          return (
            <button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              disabled={submitted}
              className={`w-full text-left p-3 border text-sm transition-colors ${cls} ${submitted ? "cursor-default" : "cursor-pointer"}`}
            >
              <span className="font-mono text-xs text-ink-400 mr-2">{String.fromCharCode(65 + i)}.</span>
              <span className="text-ink-700">{opt}</span>
            </button>
          );
        })}
      </div>
      {showResult && q.explanation && (
        <div className="p-3 bg-cream-100 border border-cream-300 mb-4">
          <p className="text-sm text-ink-500">{q.explanation}</p>
        </div>
      )}
      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={() => { if (selected === null) return; setSubmitted(true); setShowResult(true); if (selected === q.correctIndex) setScore((s) => s + 1); }}
            disabled={selected === null}
            className={`px-5 py-2 text-sm font-medium transition-colors ${selected === null ? "bg-cream-200 text-ink-300 cursor-not-allowed" : "bg-clay-500 text-white hover:bg-clay-600"}`}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => {
              if (currentQ + 1 >= questions.length) { setFinished(true); }
              else { setCurrentQ(currentQ + 1); setSelected(null); setSubmitted(false); setShowResult(false); }
            }}
            className="px-5 py-2 text-sm font-medium bg-clay-500 text-white hover:bg-clay-600 transition-colors"
          >
            {currentQ + 1 >= questions.length ? "See Results" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
