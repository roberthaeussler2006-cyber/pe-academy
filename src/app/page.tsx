"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getProgress,
  getCompletedCount,
  getAverageScore,
  getNextModuleId,
  resetProgress,
} from "../lib/progress";
import { UserProgress } from "../lib/types";

const modules = [
  { id: 1, title: "What is Private Equity", subtitle: "Fund structure, fees, and lifecycle", mins: 20 },
  { id: 2, title: "LBO Mechanics", subtitle: "Leveraged buyouts from first principles", mins: 30 },
  { id: 3, title: "Good LBO Targets", subtitle: "Identifying ideal acquisition candidates", mins: 20 },
  { id: 4, title: "Value Creation", subtitle: "How PE firms generate returns", mins: 25 },
  { id: 5, title: "Deal Process", subtitle: "From sourcing to exit", mins: 25 },
  { id: 6, title: "Key Metrics", subtitle: "IRR, MOIC, multiples, and the calculator", mins: 25 },
  { id: 7, title: "Real Estate PE", subtitle: "REPE strategies and the platform model", mins: 25 },
  { id: 8, title: "Interview Prep", subtitle: "Questions, frameworks, and model answers", mins: 30 },
];

export default function Home() {
  const [progress, setProgress] = useState<UserProgress>({ modules: {}, lastModuleId: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-navy-900" />;

  const completedCount = getCompletedCount();
  const avgScore = getAverageScore();
  const nextId = getNextModuleId();
  const totalMinutes = modules.reduce((acc, m) => acc + m.mins, 0);
  const completedMinutes = modules
    .filter((m) => progress.modules[m.id]?.completed)
    .reduce((acc, m) => acc + m.mins, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">PE Academy</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Private equity fundamentals, LBO mechanics, and interview preparation. 8 modules. No fluff.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
        <div className="bg-navy-800 border border-navy-600 p-4">
          <div className="text-xs text-gray-500 font-mono mb-1">PROGRESS</div>
          <div className="text-2xl font-mono font-bold text-white">
            {completedCount}<span className="text-gray-600">/8</span>
          </div>
          <div className="text-xs text-gray-600">modules complete</div>
        </div>
        <div className="bg-navy-800 border border-navy-600 p-4">
          <div className="text-xs text-gray-500 font-mono mb-1">AVG SCORE</div>
          <div className={`text-2xl font-mono font-bold ${avgScore === null ? "text-gray-600" : avgScore >= 80 ? "text-green-400" : "text-gold-500"}`}>
            {avgScore !== null ? `${avgScore}%` : "--"}
          </div>
          <div className="text-xs text-gray-600">quiz average</div>
        </div>
        <div className="bg-navy-800 border border-navy-600 p-4">
          <div className="text-xs text-gray-500 font-mono mb-1">TIME</div>
          <div className="text-2xl font-mono font-bold text-white">
            {completedMinutes}<span className="text-gray-600">/{totalMinutes}</span>
          </div>
          <div className="text-xs text-gray-600">minutes studied</div>
        </div>
        <div className="bg-navy-800 border border-navy-600 p-4">
          <div className="text-xs text-gray-500 font-mono mb-1">STATUS</div>
          <div className="text-2xl font-mono font-bold text-gold-500">
            {completedCount === 8 ? "DONE" : completedCount === 0 ? "NEW" : "ACTIVE"}
          </div>
          <div className="text-xs text-gray-600">{completedCount === 8 ? "all modules done" : "keep going"}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
          <span>OVERALL PROGRESS</span>
          <span>{Math.round((completedCount / 8) * 100)}%</span>
        </div>
        <div className="w-full bg-navy-700 h-2">
          <div
            className="bg-gold-500 h-2 transition-all duration-500"
            style={{ width: `${(completedCount / 8) * 100}%` }}
          />
        </div>
      </div>

      {/* Continue button */}
      <div className="mb-10">
        <Link
          href={`/module/${nextId}`}
          className="inline-flex items-center gap-3 bg-gold-500 text-navy-900 px-6 py-3 font-semibold text-sm hover:bg-gold-400 transition-colors"
        >
          {completedCount === 0 ? "Start Learning" : completedCount === 8 ? "Review Modules" : "Continue"}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </Link>
      </div>

      {/* Module list */}
      <div className="mb-8">
        <h2 className="text-sm font-mono text-gray-500 mb-4">CURRICULUM</h2>
        <div className="space-y-2">
          {modules.map((mod) => {
            const mp = progress.modules[mod.id];
            const isComplete = mp?.completed;
            const hasStarted = !!mp;
            const score = mp?.quizScore;

            return (
              <Link
                key={mod.id}
                href={`/module/${mod.id}`}
                className="flex items-center gap-4 p-4 bg-navy-800 border border-navy-600 hover:border-navy-500 transition-colors group"
              >
                <div className={`w-10 h-10 flex items-center justify-center border ${
                  isComplete ? "border-green-700 bg-green-900/30" : hasStarted ? "border-gold-600 bg-gold-900/20" : "border-navy-600 bg-navy-700"
                }`}>
                  {isComplete ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-8" stroke="#22c55e" strokeWidth="2" />
                    </svg>
                  ) : (
                    <span className="font-mono text-sm text-gray-500">{mod.id}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white group-hover:text-gold-500 transition-colors">
                    {mod.title}
                  </div>
                  <div className="text-xs text-gray-600 truncate">{mod.subtitle}</div>
                </div>
                <div className="text-right hidden sm:block">
                  {score !== null && score !== undefined && (
                    <div className={`font-mono text-sm ${score >= 80 ? "text-green-400" : "text-gold-500"}`}>{score}%</div>
                  )}
                  <div className="text-xs text-gray-600 font-mono">{mod.mins} min</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Reset */}
      {completedCount > 0 && (
        <button
          onClick={() => {
            if (confirm("Reset all progress? This cannot be undone.")) {
              resetProgress();
              setProgress({ modules: {}, lastModuleId: null });
            }
          }}
          className="text-xs text-gray-700 hover:text-gray-500 font-mono transition-colors"
        >
          RESET PROGRESS
        </button>
      )}
    </div>
  );
}
