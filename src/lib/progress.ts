"use client";

import { UserProgress, ModuleProgress } from "./types";

const STORAGE_KEY = "pe-academy-progress";

const defaultProgress: UserProgress = {
  modules: {},
  lastModuleId: null,
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    return JSON.parse(stored);
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getModuleProgress(moduleId: number): ModuleProgress | null {
  const progress = getProgress();
  return progress.modules[moduleId] || null;
}

export function markModuleAccessed(moduleId: number): void {
  const progress = getProgress();
  if (!progress.modules[moduleId]) {
    progress.modules[moduleId] = {
      completed: false,
      quizScore: null,
      quizAnswers: [],
      lastAccessed: new Date().toISOString(),
    };
  } else {
    progress.modules[moduleId].lastAccessed = new Date().toISOString();
  }
  progress.lastModuleId = moduleId;
  saveProgress(progress);
}

export function saveQuizScore(
  moduleId: number,
  score: number,
  answers: number[]
): void {
  const progress = getProgress();
  if (!progress.modules[moduleId]) {
    progress.modules[moduleId] = {
      completed: true,
      quizScore: score,
      quizAnswers: answers,
      lastAccessed: new Date().toISOString(),
    };
  } else {
    progress.modules[moduleId].quizScore = score;
    progress.modules[moduleId].quizAnswers = answers;
    progress.modules[moduleId].completed = true;
    progress.modules[moduleId].lastAccessed = new Date().toISOString();
  }
  progress.lastModuleId = moduleId;
  saveProgress(progress);
}

export function getCompletedCount(): number {
  const progress = getProgress();
  return Object.values(progress.modules).filter((m) => m.completed).length;
}

export function getAverageScore(): number | null {
  const progress = getProgress();
  const scores = Object.values(progress.modules)
    .map((m) => m.quizScore)
    .filter((s): s is number => s !== null);
  if (scores.length === 0) return null;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

export function getNextModuleId(): number {
  const progress = getProgress();
  for (let i = 1; i <= 8; i++) {
    if (!progress.modules[i]?.completed) return i;
  }
  return 1;
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
