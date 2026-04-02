"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { markModuleAccessed, getModuleProgress } from "../../../lib/progress";
import { Module, ModuleProgress } from "../../../lib/types";
import Quiz from "../../../components/Quiz";
import Calculator from "../../../components/Calculator";
import Flashcards from "../../../components/Flashcards";
import ChatBot from "../../../components/ChatBot";
import AIQuiz from "../../../components/AIQuiz";
import { getModuleById } from "../../../data/modules";

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = Number(params.id);
  const [mod, setMod] = useState<Module | null>(null);
  const [progress, setProgress] = useState<ModuleProgress | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const m = getModuleById(moduleId);
    if (!m) {
      router.push("/");
      return;
    }
    setMod(m);
    markModuleAccessed(moduleId);
    setProgress(getModuleProgress(moduleId));
    setMounted(true);
  }, [moduleId, router]);

  if (!mounted || !mod) return <div className="min-h-screen bg-cream-100" />;

  const isInterviewModule = moduleId === 8;
  const isMetricsModule = moduleId === 6;
  const topics = mod.content.map((s) => s.heading).join(", ");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-ink-400 font-mono mb-6">
        <Link href="/" className="hover:text-ink-600 transition-colors">HOME</Link>
        <span>/</span>
        <span className="text-ink-600">MODULE {String(moduleId).padStart(2, "0")}</span>
      </div>

      {/* Module header */}
      <div className="mb-8 pb-6 border-b border-cream-300">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-clay-600 bg-clay-500/10 px-2 py-1">
            MODULE {moduleId}
          </span>
          <span className="font-mono text-xs text-ink-400">{mod.estimatedMinutes} MIN READ</span>
          {progress?.completed && (
            <span className="font-mono text-xs text-green-700 bg-green-100 px-2 py-1">COMPLETE</span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-2">{mod.title}</h1>
        <p className="text-ink-500">{mod.subtitle}</p>
      </div>

      {/* Content */}
      {isInterviewModule ? (
        <div className="mb-12">
          <Flashcards sections={mod.content} />
        </div>
      ) : (
        <div className="space-y-10 mb-12">
          {mod.content.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-ink-900 mb-4 flex items-center gap-3">
                <span className="text-clay-500 font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <div
                className="text-ink-700 text-sm leading-relaxed prose-content"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
              {section.keyTerms && section.keyTerms.length > 0 && (
                <div className="mt-4 bg-cream-50 border border-cream-300 p-4">
                  <div className="text-xs text-ink-400 font-mono mb-3">KEY TERMS</div>
                  <div className="grid gap-2">
                    {section.keyTerms.map((kt, j) => (
                      <div key={j} className="flex gap-2 text-sm">
                        <span className="text-clay-500 font-medium whitespace-nowrap">{kt.term}</span>
                        <span className="text-ink-300">-</span>
                        <span className="text-ink-500">{kt.definition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {section.numericalExample && (
                <div className="mt-4 bg-white border border-cream-300 p-4 overflow-x-auto">
                  <div className="text-xs text-ink-400 font-mono mb-3">{section.numericalExample.title}</div>
                  <table className="w-full text-sm font-mono">
                    <tbody>
                      {section.numericalExample.rows.map((row, r) => (
                        <tr key={r} className={r === 0 ? "text-ink-400" : "text-ink-700"}>
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={`py-1 pr-4 ${c === 0 ? "text-left" : "text-right"} ${
                                r === 0 ? "border-b border-cream-300 text-xs" : ""
                              } ${r === section.numericalExample!.rows.length - 1 ? "text-clay-500 font-semibold border-t border-cream-300 pt-2" : ""}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Calculator for Module 6 */}
      {isMetricsModule && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-ink-900 mb-4 flex items-center gap-3">
            <span className="text-clay-500 font-mono text-sm">TOOL</span>
            Interactive Calculator
          </h2>
          <Calculator />
        </div>
      )}

      {/* Module Quiz */}
      <div className="mb-8">
        {!showQuiz && !progress?.completed ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full p-4 border border-cream-300 bg-white text-left hover:border-clay-400 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-ink-900 font-semibold text-sm">Ready for the quiz?</div>
                <div className="text-ink-400 text-xs">{mod.quiz.length} questions to test your understanding</div>
              </div>
              <span className="text-clay-500 font-mono text-sm">START</span>
            </div>
          </button>
        ) : (
          <Quiz
            moduleId={moduleId}
            questions={mod.quiz}
            onComplete={() => {
              setProgress(getModuleProgress(moduleId));
            }}
          />
        )}
      </div>

      {/* AI Quiz */}
      <div className="mb-12">
        <AIQuiz moduleId={moduleId} moduleTitle={mod.title} topics={topics} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-cream-300">
        {moduleId > 1 ? (
          <Link
            href={`/module/${moduleId - 1}`}
            className="text-sm text-ink-400 hover:text-ink-700 transition-colors"
          >
            Previous Module
          </Link>
        ) : (
          <Link href="/" className="text-sm text-ink-400 hover:text-ink-700 transition-colors">
            Dashboard
          </Link>
        )}
        {moduleId < 8 ? (
          <Link
            href={`/module/${moduleId + 1}`}
            className="text-sm text-clay-500 hover:text-clay-600 transition-colors"
          >
            Next Module
          </Link>
        ) : (
          <Link href="/" className="text-sm text-clay-500 hover:text-clay-600 transition-colors">
            Back to Dashboard
          </Link>
        )}
      </div>

      {/* AI Chat */}
      <ChatBot moduleContext={`Module ${moduleId}: ${mod.title}. Topics: ${topics}`} />
    </div>
  );
}
