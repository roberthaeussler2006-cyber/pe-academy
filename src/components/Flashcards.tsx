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
      {/* Card grid for jumping */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => handleJump(i)}
            className={`w-8 h-8 text-xs font-mono transition-colors ${
              i === currentIndex
                ? "bg-gold-500 text-navy-900"
                : completed.has(i)
                ? "bg-green-900/40 text-green-400 border border-green-800"
                : "bg-navy-700 text-gray-500 border border-navy-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Flashcard */}
      <div className="border border-navy-600 bg-navy-800 overflow-hidden">
        <div className="p-6 border-b border-navy-600">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-gray-600">QUESTION {currentIndex + 1}/{sections.length}</span>
            {completed.has(currentIndex) && (
              <span className="text-xs text-green-500 font-mono">REVIEWED</span>
            )}
          </div>
          <h3 className="text-xl text-white font-semibold">{section.heading}</h3>
        </div>

        {!revealed ? (
          <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-gray-500 text-sm mb-4">Take a moment to formulate your answer, then reveal the model response.</p>
            <button
              onClick={handleReveal}
              className="px-6 py-3 bg-gold-500 text-navy-900 font-medium text-sm hover:bg-gold-400 transition-colors"
            >
              Reveal Answer
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="text-sm text-gray-500 font-mono mb-3">MODEL ANSWER</div>
            <div
              className="prose-content text-gray-300 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
            {section.keyTerms && section.keyTerms.length > 0 && (
              <div className="mt-4 pt-4 border-t border-navy-600">
                <div className="text-xs text-gray-500 font-mono mb-2">KEY POINTS</div>
                <div className="space-y-1">
                  {section.keyTerms.map((kt, i) => (
                    <div key={i} className="text-xs text-gray-400">
                      <span className="text-gold-500">{kt.term}:</span> {kt.definition}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="p-4 border-t border-navy-600 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-sm transition-colors ${
              currentIndex === 0 ? "text-gray-700 cursor-not-allowed" : "text-gray-400 hover:text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-sm bg-navy-700 text-gray-300 hover:bg-navy-600 transition-colors"
          >
            {currentIndex + 1 >= sections.length ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
