"use client";

import { useState } from "react";
import { ContentSection } from "../lib/types";

interface FlashcardsProps {
  sections: ContentSection[];
}

export default function Flashcards({ sections }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const section = sections[currentIndex];

  const handleReveal = () => setRevealed(true);

  const handleNext = () => {
    setCompleted((prev) => new Set(prev).add(currentIndex));
    setRevealed(false);
    if (currentIndex + 1 < sections.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setRevealed(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJump = (i: number) => {
    setRevealed(false);
    setCurrentIndex(i);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => handleJump(i)}
            className={`w-8 h-8 text-xs font-mono transition-colors ${
              i === currentIndex
                ? "bg-clay-500 text-white"
                : completed.has(i)
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-cream-200 text-ink-500 border border-cream-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="border border-cream-300 bg-white overflow-hidden">
        <div className="p-6 border-b border-cream-300">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-ink-400">QUESTION {currentIndex + 1}/{sections.length}</span>
            {completed.has(currentIndex) && (
              <span className="text-xs text-green-600 font-mono">REVIEWED</span>
            )}
          </div>
          <h3 className="text-xl text-ink-900 font-semibold">{section.heading}</h3>
        </div>

        {!revealed ? (
          <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-ink-400 text-sm mb-4">Take a moment to formulate your answer, then reveal the model response.</p>
            <button
              onClick={handleReveal}
              className="px-6 py-3 bg-clay-500 text-white font-medium text-sm hover:bg-clay-600 transition-colors"
            >
              Reveal Answer
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="text-sm text-ink-400 font-mono mb-3">MODEL ANSWER</div>
            <div
              className="prose-content text-ink-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
            {section.keyTerms && section.keyTerms.length > 0 && (
              <div className="mt-4 pt-4 border-t border-cream-300">
                <div className="text-xs text-ink-400 font-mono mb-2">KEY POINTS</div>
                <div className="space-y-1">
                  {section.keyTerms.map((kt, i) => (
                    <div key={i} className="text-xs text-ink-500">
                      <span className="text-clay-500">{kt.term}:</span> {kt.definition}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="p-4 border-t border-cream-300 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-sm transition-colors ${
              currentIndex === 0 ? "text-ink-300 cursor-not-allowed" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-sm bg-cream-200 text-ink-600 hover:bg-cream-300 transition-colors"
          >
            {currentIndex + 1 >= sections.length ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
