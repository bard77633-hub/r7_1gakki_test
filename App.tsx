import React, { useState, useCallback, useEffect } from 'react';
import { BrainCircuit, Trophy, AlertCircle, BookOpen, Layers, Star, CheckCircle2, History } from 'lucide-react';
import { GameState, QuizQuestion, ChapterStats } from './types';
import { generateQuizQuestions } from './services/gemini';
import { Button } from './components/Button';
import { QuizCard } from './components/QuizCard';
import { ProgressBar } from './components/ProgressBar';

const CHAPTERS = [
  "01 情報とメディアの特性",
  "02 問題解決",
  "03 情報モラル",
  "04 個人情報",
  "05 知的財産権",
  "06 情報セキュリティ",
  "07 情報技術の発展",
  "08 メディアとコミュニケーション",
  "09 情報デザイン",
  "10 アナログとデジタル",
];

const STORAGE_KEY = 'gemini_quiz_stats_v1';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Record<string, ChapterStats>>({});

  // Load stats from local storage on mount
  useEffect(() => {
    const savedStats = localStorage.getItem(STORAGE_KEY);
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        console.error("Failed to parse stats", e);
      }
    }
  }, []);

  // Save stats when game finishes
  useEffect(() => {
    if (gameState === GameState.FINISHED) {
      setStats(prevStats => {
        const currentChapter = selectedChapter;
        const prevChapterStats = prevStats[currentChapter] || { highScore: 0, totalQuestions: questions.length, playedCount: 0, lastPlayedAt: 0 };
        
        const newStats = {
          ...prevStats,
          [currentChapter]: {
            highScore: Math.max(prevChapterStats.highScore, score),
            totalQuestions: questions.length, // Always update to latest length
            playedCount: prevChapterStats.playedCount + 1,
            lastPlayedAt: Date.now(),
          }
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
        return newStats;
      });
    }
  }, [gameState, selectedChapter, score, questions.length]);

  const startQuiz = async (chapter: string) => {
    setSelectedChapter(chapter);
    setGameState(GameState.GENERATING);
    setError(null);

    try {
      const fetchedQuestions = await generateQuizQuestions(chapter, 'Medium');
      setQuestions(fetchedQuestions);
      setScore(0);
      setCurrentQuestionIndex(0);
      setGameState(GameState.PLAYING);
    } catch (err) {
      console.error(err);
      setError("Failed to load quiz data. Please try again.");
      setGameState(GameState.ERROR);
    }
  };

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState(GameState.FINISHED);
    }
  }, [currentQuestionIndex, questions.length]);

  const resetGame = () => {
    setGameState(GameState.IDLE);
    setSelectedChapter('');
    setQuestions([]);
  };

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear all progress history?")) {
      localStorage.removeItem(STORAGE_KEY);
      setStats({});
    }
  };

  const renderChapterButton = (chapterTitle: string, isAll: boolean = false) => {
    const chapterStats = stats[chapterTitle];
    const isPlayed = !!chapterStats;
    const isPerfect = isPlayed && chapterStats.highScore === chapterStats.totalQuestions && chapterStats.totalQuestions > 0;
    const percentage = isPlayed && chapterStats.totalQuestions > 0 
      ? Math.round((chapterStats.highScore / chapterStats.totalQuestions) * 100) 
      : 0;

    // Different styling for "All" button vs regular chapters
    const baseClasses = isAll 
      ? "group relative bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-600 hover:to-purple-600 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 md:col-span-2 lg:col-span-3"
      : "group relative bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 p-5 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10";

    // Perfect score glow
    const borderClass = isPerfect ? "ring-2 ring-yellow-500/50 shadow-yellow-500/20" : "";

    return (
      <button
        key={chapterTitle}
        onClick={() => startQuiz(chapterTitle)}
        className={`${baseClasses} ${borderClass}`}
      >
        <div className="flex items-start gap-4 mb-2">
          <div className={`p-2 rounded-lg transition-colors ${isAll ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-300 group-hover:text-white group-hover:bg-indigo-500'}`}>
            {isAll ? <Layers className="w-6 h-6" /> : <BookOpen className="w-5 h-5" />}
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold ${isAll ? 'text-white text-lg' : 'text-slate-100 group-hover:text-white text-sm'} leading-tight`}>
              {isAll ? "Comprehensive Test (All Chapters)" : chapterTitle.split(' ')[1]}
            </h3>
            {!isAll && (
              <span className="text-xs text-slate-400 group-hover:text-indigo-200 mt-1 block">
                Chapter {chapterTitle.split(' ')[0]}
              </span>
            )}
          </div>
          {isPerfect && (
             <div className="absolute top-3 right-3">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
             </div>
          )}
        </div>

        {/* Stats Footer */}
        {isPlayed && (
          <div className={`mt-2 pt-3 border-t ${isAll ? 'border-white/20' : 'border-white/5'} flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              {percentage >= 80 ? (
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Cleared
                </span>
              ) : (
                <span className="text-[10px] text-slate-400 font-medium">In Progress</span>
              )}
            </div>
            <div className="text-xs font-mono font-medium text-indigo-200">
              Best: <span className={isPerfect ? "text-yellow-400 font-bold" : "text-white"}>{percentage}%</span>
            </div>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-4 text-slate-100 font-sans">
      
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header / Logo */}
        <div className="mb-10 flex items-center space-x-3 animate-fade-in-down">
          <div className="p-3 bg-indigo-600/20 rounded-xl backdrop-blur-sm border border-indigo-500/30 shadow-lg shadow-indigo-500/20">
            <BrainCircuit className="w-8 h-8 text-indigo-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 tracking-tight">
              Info Tech Master
            </h1>
            <p className="text-xs text-indigo-300/80 tracking-wider uppercase font-semibold">High School Curriculum Quiz</p>
          </div>
        </div>

        {/* Screen: IDLE (Start) */}
        {gameState === GameState.IDLE && (
          <div className="w-full animate-fade-in-up space-y-6 pb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Select a Chapter</h2>
              <p className="text-indigo-200 text-sm">Choose a topic from your textbook to practice.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {CHAPTERS.map((chapter) => renderChapterButton(chapter))}
              {renderChapterButton("All", true)}
            </div>

            {Object.keys(stats).length > 0 && (
               <div className="flex justify-center mt-12">
                 <button 
                    onClick={clearHistory}
                    className="flex items-center gap-2 text-xs text-slate-500 hover:text-red-400 transition-colors px-4 py-2 rounded-lg hover:bg-red-500/10"
                 >
                    <History className="w-3 h-3" /> Reset All Progress
                 </button>
               </div>
            )}
          </div>
        )}

        {/* Screen: GENERATING */}
        {gameState === GameState.GENERATING && (
          <div className="text-center animate-pulse mt-12">
            <div className="w-24 h-24 mx-auto mb-6 relative">
               <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30"></div>
               <div className="absolute inset-0 rounded-full border-4 border-t-indigo-500 animate-spin"></div>
               <BrainCircuit className="absolute inset-0 m-auto w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Preparing Quiz...</h3>
            <p className="text-indigo-300">Loading questions for <br/><span className="font-semibold text-white">"{selectedChapter === "All" ? "Comprehensive Test" : selectedChapter.split(' ')[1]}"</span></p>
          </div>
        )}

        {/* Screen: PLAYING */}
        {gameState === GameState.PLAYING && questions.length > 0 && (
          <div className="w-full max-w-2xl">
            <div className="mb-6 flex justify-between items-center text-sm font-medium text-indigo-200">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span className="bg-indigo-900/50 px-3 py-1 rounded-full border border-indigo-500/30 text-xs truncate max-w-[200px]">
                {selectedChapter === "All" ? 'Comprehensive' : selectedChapter.split(' ')[1]}
              </span>
            </div>
            
            <ProgressBar current={currentQuestionIndex} total={questions.length} />
            
            <QuizCard 
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onNext={handleNext}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          </div>
        )}

        {/* Screen: FINISHED */}
        {gameState === GameState.FINISHED && (
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full animate-scale-in mt-8">
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-yellow-500/10">
              <Trophy className="w-10 h-10 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h2>
            <p className="text-indigo-200 mb-8">
              {score === questions.length ? "Perfect score! Outstanding!" : "Great effort! Keep learning."}
            </p>
            
            <div className="bg-slate-900/50 rounded-2xl p-6 mb-8 border border-slate-800">
              <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                {score} <span className="text-2xl text-slate-400 font-normal">/ {questions.length}</span>
              </div>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">Final Score</p>
              {/* Show Personal Best update if applicable */}
              {stats[selectedChapter] && score >= stats[selectedChapter].highScore && (
                 <div className="mt-2 text-xs text-green-400 font-semibold animate-pulse">
                    New Personal Best!
                 </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button onClick={resetGame} variant="secondary" fullWidth>
                Return to Chapters
              </Button>
            </div>
          </div>
        )}

        {/* Screen: ERROR */}
        {gameState === GameState.ERROR && (
          <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 p-8 rounded-2xl max-w-md w-full text-center mt-12">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Error</h3>
            <p className="text-red-200 mb-6 text-sm">{error}</p>
            <Button onClick={() => setGameState(GameState.IDLE)} variant="secondary">
              Try Again
            </Button>
          </div>
        )}

      </div>
      
      {/* Footer */}
      <div className="fixed bottom-4 right-4 text-[10px] text-slate-500/50 pointer-events-none">
        Internal Quiz Engine • v2.0
      </div>
    </div>
  );
};

export default App;