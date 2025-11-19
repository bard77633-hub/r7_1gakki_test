import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types';
import { Button } from './Button';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onNext, isLastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    const isCorrect = index === question.correctAnswerIndex;
    onAnswer(isCorrect);
  };

  const getOptionStyles = (index: number) => {
    const base = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 relative overflow-hidden";
    
    if (!isAnswered) {
      return `${base} border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 bg-white text-slate-700`;
    }

    if (index === question.correctAnswerIndex) {
      return `${base} border-green-500 bg-green-50 text-green-800 shadow-md`;
    }

    if (selectedOption === index && index !== question.correctAnswerIndex) {
      return `${base} border-red-500 bg-red-50 text-red-800`;
    }

    return `${base} border-slate-100 bg-slate-50 text-slate-400 opacity-60`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isAnswered}
            className={getOptionStyles(index)}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option}</span>
              {isAnswered && index === question.correctAnswerIndex && (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              )}
              {isAnswered && selectedOption === index && index !== question.correctAnswerIndex && (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-6 animate-slide-up">
          <div className="bg-indigo-50 rounded-xl p-4 mb-6 border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 mb-1">Explanation</h4>
            <p className="text-indigo-700 text-sm leading-relaxed">
              {question.explanation}
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={onNext} className="group">
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};