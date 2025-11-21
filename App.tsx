import React, { useState, useEffect, useMemo } from 'react';
import { QUESTIONS } from './data/questions';
import { Question, Topic } from './types';
import { LayoutShell } from './components/LayoutShell';
import { StatsPanel } from './components/StatsPanel';
import { QuestionCard } from './components/QuestionCard';
import { TopicFilterPanel } from './components/TopicFilterPanel';
import { BottomNavBar } from './components/BottomNavBar';
import { TimerDisplay } from './components/TimerDisplay';
import { Menu, Activity, Zap } from 'lucide-react';

// Constants
const POINTS_PER_CORRECT = 10;
const SESSION_TIME_SECONDS = 20 * 60; // 20 minutes

const App: React.FC = () => {
  // -- State --
  const [currentRawIndex, setCurrentRawIndex] = useState<number>(0);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  // Map of questionId -> selected option index
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [showExplanationId, setShowExplanationId] = useState<number | null>(null);
  
  // Stats
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  
  // Timer
  const [timeLeft, setTimeLeft] = useState(SESSION_TIME_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  // Mobile UI state
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // -- Derived State --
  
  // Filter questions
  const activeQuestions = useMemo(() => {
    if (selectedTopics.length === 0) return QUESTIONS;
    return QUESTIONS.filter(q => selectedTopics.includes(q.topic));
  }, [selectedTopics]);

  // Ensure index is valid when filters change
  useEffect(() => {
    if (currentRawIndex >= activeQuestions.length) {
      setCurrentRawIndex(Math.max(0, activeQuestions.length - 1));
    }
  }, [activeQuestions.length, currentRawIndex]);

  const currentQuestion = activeQuestions[currentRawIndex];
  const totalQuestions = activeQuestions.length;
  const progress = totalQuestions > 0 ? ((currentRawIndex + 1) / totalQuestions) * 100 : 0;
  
  const accuracy = (correctCount + wrongCount) > 0 
    ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
    : 0;

  // -- Effects --

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // -- Handlers --

  const handleTopicToggle = (topic: Topic) => {
    setSelectedTopics(prev => {
      if (prev.includes(topic)) return prev.filter(t => t !== topic);
      return [...prev, topic];
    });
    // Reset view to start when filter changes
    setCurrentRawIndex(0);
    setIsFiltersOpen(false); // Auto close on mobile
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (isTimeUp || !currentQuestion) return;
    
    // If already answered, do nothing (or allow changing without score update? 
    // Let's enforce: Once answered, it's locked for scoring purposes).
    if (selectedAnswers[currentQuestion.id] !== undefined) return;

    const isCorrect = optionIndex === currentQuestion.correctIndex;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setStreak(prev => prev + 1);
      setScore(prev => prev + POINTS_PER_CORRECT);
    } else {
      setWrongCount(prev => prev + 1);
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentRawIndex < activeQuestions.length - 1) {
      setCurrentRawIndex(prev => prev + 1);
      setShowExplanationId(null);
    }
  };

  const handlePrev = () => {
    if (currentRawIndex > 0) {
      setCurrentRawIndex(prev => prev - 1);
      setShowExplanationId(null);
    }
  };

  const handleFlag = () => {
    if (!currentQuestion) return;
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) next.delete(currentQuestion.id);
      else next.add(currentQuestion.id);
      return next;
    });
  };

  const handleToggleExplanation = () => {
    if (!currentQuestion) return;
    if (showExplanationId === currentQuestion.id) {
      setShowExplanationId(null);
    } else {
      setShowExplanationId(currentQuestion.id);
    }
  };

  // -- Render --

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-100 relative bg-neon-dark">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-neon-dark/90 backdrop-blur-md border-b border-neon-cyan/30 px-4 py-3 shadow-glow-cyan">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-neon-cyan w-6 h-6" />
            <h1 className="text-lg md:text-xl font-display font-bold tracking-wider text-white">
              ELEKTRONIKA <span className="text-neon-cyan">SUPER TEST</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 text-sm font-medium">
             <div className="hidden md:flex items-center gap-2">
                <span className="text-gray-400">Mavzu:</span>
                <span className="text-neon-magenta uppercase">
                  {selectedTopics.length === 1 ? selectedTopics[0] : selectedTopics.length > 1 ? "Mixed" : "Hammasi"}
                </span>
             </div>
             <TimerDisplay seconds={timeLeft} isUrgent={timeLeft < 60} />
             <div className="hidden md:block">
                <span className="text-neon-cyan font-mono text-lg">{score} XP</span>
             </div>
          </div>
        </div>
      </header>

      {/* MOBILE CONTROLS */}
      <div className="md:hidden flex border-b border-white/10 bg-neon-card">
        <button 
          onClick={() => setIsStatsOpen(!isStatsOpen)}
          className={`flex-1 py-3 text-sm font-display text-center border-r border-white/10 ${isStatsOpen ? 'text-neon-cyan bg-white/5' : 'text-gray-400'}`}
        >
          <Activity className="w-4 h-4 inline-block mr-2 mb-0.5" /> Natijalar
        </button>
        <button 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`flex-1 py-3 text-sm font-display text-center ${isFiltersOpen ? 'text-neon-magenta bg-white/5' : 'text-gray-400'}`}
        >
          <Menu className="w-4 h-4 inline-block mr-2 mb-0.5" /> Mavzular
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6 relative">
        
        {/* LEFT: Stats Panel */}
        <aside className={`
          md:col-span-3 
          ${isStatsOpen ? 'block' : 'hidden'} md:block
        `}>
          <StatsPanel 
            current={currentRawIndex + 1} 
            total={totalQuestions} 
            score={score}
            correct={correctCount}
            wrong={wrongCount}
            streak={streak}
            accuracy={accuracy}
            progress={progress}
          />
        </aside>

        {/* CENTER: Question Card */}
        <section className="md:col-span-6 flex flex-col justify-start pt-2 pb-20 md:pb-0">
          {activeQuestions.length > 0 ? (
            <QuestionCard 
              question={currentQuestion}
              selectedAnswer={selectedAnswers[currentQuestion.id]}
              isFlagged={flaggedQuestions.has(currentQuestion.id)}
              showExplanation={showExplanationId === currentQuestion.id}
              onSelectOption={handleAnswerSelect}
              isDisabled={isTimeUp}
            />
          ) : (
            <div className="bg-neon-surface border border-red-500/30 p-8 rounded-2xl text-center animate-pulse">
              <h2 className="text-xl font-display text-red-400 mb-2">Savollar topilmadi</h2>
              <p className="text-gray-400">Tanlangan mavzular bo'yicha savollar mavjud emas.</p>
            </div>
          )}
        </section>

        {/* RIGHT: Filters */}
        <aside className={`
          md:col-span-3 
          ${isFiltersOpen ? 'block' : 'hidden'} md:block
        `}>
          <TopicFilterPanel 
            selectedTopics={selectedTopics}
            onToggle={handleTopicToggle}
          />
        </aside>

      </main>

      {/* BOTTOM NAV */}
      <BottomNavBar 
        onPrev={handlePrev} 
        onNext={handleNext} 
        onFlag={handleFlag}
        onExplain={handleToggleExplanation}
        isPrevDisabled={currentRawIndex === 0}
        isNextDisabled={currentRawIndex === activeQuestions.length - 1}
        isFlagged={currentQuestion ? flaggedQuestions.has(currentQuestion.id) : false}
        showingExplanation={showExplanationId === (currentQuestion?.id ?? -1)}
      />
      
      {/* Time Up Modal */}
      {isTimeUp && (
        <div className="fixed inset-0 z-[100] bg-neon-dark/90 flex items-center justify-center backdrop-blur-sm p-4">
          <div className="bg-neon-surface border-2 border-red-500 shadow-lg shadow-red-500/20 rounded-3xl p-8 max-w-md w-full text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">VAQT TUGADI!</h2>
            <div className="text-6xl mb-6">⏰</div>
            <p className="text-gray-300 mb-6">Imtihon vaqti o'z nihoyasiga yetdi. Natijalaringizni tekshiring.</p>
            <div className="text-2xl font-mono text-neon-cyan mb-2">Jami ball: {score}</div>
            <div className="text-lg text-gray-400">To'g'ri javoblar: {accuracy}%</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;