"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { markModuleAccessed, getModuleProgress } from "../../../lib/progress";
import { Module, ModuleProgress } from "../../../lib/types";
import Quiz from "../../../components/Quiz";
import Calculator from "../../../components/Calculator";
import Flashcards from "../../../components/Flashcards";
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

  if (!mounted || !mod) return <div className="min-h-screen bg-navy-900" />;

  const isInterviewModule = moduleId === 8;
  const isMetricsModule = moduleId === 6;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-600 font-mono mb-6">
        <Link href="/" className="hover:text-gray-400 transition-colors">HOME</Link>
        <span>/</span>
        <span className="text-gray-400">MODULE {String(moduleId).padStart(2, "0")}</span>
      </div>

      {/* Module header */}
      <div className="mb-8 pb-6 border-b border-navy-600">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-gold-500 bg-gold-500/10 px-2 py-1">
            MODULE {moduleId}
          </span>
          <span className="font-mono text-xs text-gray-600">{mod.estimatedMinutes} MIN READ</span>
          {progress?.completed && (
            <span className="font-mono text-xs text-green-500 bg-green-500/10 px-2 py-1">COMPLETE</span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{mod.title}</h1>
        <p className="text-gray-500">{mod.subtitle}</p>
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
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-gold-500 font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <div
                className="text-gray-300 text-sm leading-relaxed prose-content"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
              {section.keyTerms && section.keyTerms.length > 0 && (
                <div className="mt-4 bg-navy-800 border border-navy-600 p-4">
                  <div className="text-xs text-gray-500 font-mono mb-3">KEY TERMS</div>
                  <div className="grid gap-2">
                    {section.keyTerms.map((kt, j) => (
                      <div key={j} className="flex gap-2 text-sm">
                        <span className="text-gold-500 font-medium whitespace-nowrap">{kt.term}</span>
                        <span className="text-gray-500">-</span>
                        <span className="text-gray-400">{kt.definition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {section.numericalExample && (
                <div className="mt-4 bg-navy-800 border border-navy-600 p-4 overflow-x-auto">
                  <div className="text-xs text-gray-500 font-mono mb-3">{section.numericalExample.title}</div>
                  <table className="w-full text-sm font-mono">
                    <tbody>
                      {section.numericalExample.rows.map((row, r) => (
                        <tr key={r} className={r === 0 ? "text-gray-500" : "text-gray-300"}>
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={`py-1 pr-4 ${c === 0 ? "text-left" : "text-right"} ${
                                r === 0 ? "border-b border-navy-600 text-xs" : ""
                              } ${r === section.numericalExample!.rows.length - 1 ? "text-gold-500 font-semibold border-t border-navy-600 pt-2" : ""}`}
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
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <span className="text-gold-500 font-mono text-sm">TOOL</span>
            Interactive Calculator
          </h2>
          <Calculator />
        </div>
      )}

      {/* Quiz section */}
      <div className="mb-12">
        {!showQuiz && !progress?.completed ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full p-4 border border-navy-600 bg-navy-800 text-left hover:border-gold-500/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-sm">Ready for the quiz?</div>
                <div className="text-gray-500 text-xs">{mod.quiz.length} questions to test your understanding</div>
              </div>
              <span className="text-gold-500 font-mono text-sm">START</span>
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

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-navy-600">
        {moduleId > 1 ? (
          <Link
            href={`/module/${moduleId - 1}`}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Previous Module
          </Link>
        ) : (
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Dashboard
          </Link>
        )}
        {moduleId < 8 ? (
          <Link
            href={`/module/${moduleId + 1}`}
            className="text-sm text-gold-500 hover:text-gold-400 transition-colors"
          >
            Next Module
          </Link>
        ) : (
          <Link href="/" className="text-sm text-gold-500 hover:text-gold-400 transition-colors">
            Back to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
