export enum GameState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizConfig {
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface ChapterStats {
  highScore: number;
  totalQuestions: number;
  playedCount: number;
  lastPlayedAt: number;
}