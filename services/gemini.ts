import { QuizQuestion } from "../types";
import { QUESTION_BANK } from "../data/staticQuestions";

// Utility to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateQuizQuestions = async (chapterTitle: string, difficulty: string): Promise<QuizQuestion[]> => {
  // Simulate network delay for realism
  await new Promise(resolve => setTimeout(resolve, 800));

  let candidateQuestions: QuizQuestion[] = [];

  if (chapterTitle === "All") {
    // Gather questions from all chapters
    Object.values(QUESTION_BANK).forEach(questions => {
      candidateQuestions = [...candidateQuestions, ...questions];
    });
  } else {
    // Get questions for specific chapter
    candidateQuestions = QUESTION_BANK[chapterTitle] || [];
  }

  if (candidateQuestions.length === 0) {
    throw new Error("No questions found for this chapter.");
  }

  // Shuffle questions and take a subset (e.g., 5 questions per game)
  // If "All" is selected, maybe take more (e.g., 10)
  const count = chapterTitle === "All" ? 10 : 5;
  const shuffledQuestions = shuffleArray(candidateQuestions);
  const selectedQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));

  // For each selected question, shuffle the options to make it dynamic
  // NOTE: We need to adjust correctAnswerIndex after shuffling options
  const processedQuestions = selectedQuestions.map(q => {
    const originalOptions = q.options;
    const correctOptionText = originalOptions[q.correctAnswerIndex];
    
    const shuffledOptions = shuffleArray(originalOptions);
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

    return {
      ...q,
      options: shuffledOptions,
      correctAnswerIndex: newCorrectIndex
    };
  });

  return processedQuestions;
};