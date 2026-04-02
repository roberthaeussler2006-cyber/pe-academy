export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  content: ContentSection[];
  quiz: QuizQuestion[];
}

export interface ContentSection {
  heading: string;
  body: string;
  keyTerms?: { term: string; definition: string }[];
  numericalExample?: { title: string; rows: string[][] };
}

export interface ModuleProgress {
  completed: boolean;
  quizScore: number | null;
  quizAnswers: number[];
  lastAccessed: string;
}

export interface UserProgress {
  modules: Record<number, ModuleProgress>;
  lastModuleId: number | null;
}
