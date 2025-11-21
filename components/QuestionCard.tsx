import React from 'react';
import { Question } from '../types';
import { AnswerOption } from './AnswerOption';
import { Bookmark, Cpu } from 'lucide-react';

interface Props {
  question: Question;
  selectedAnswer?: number; // The user's selected index
  isFlagged: boolean;
  showExplanation: boolean;
  onSelectOption: (index: number) => void;
  isDisabled: boolean;
}

export const QuestionCard: React.FC<Props> = ({
  question, selectedAnswer, isFlagged, showExplanation, onSelectOption, isDisabled
}) => {
  
  // Determine visualization state
  const hasAnswered = selectedAnswer !== undefined;
  
  // If explanation is shown, we reveal colors. 
  // Also if the user has answered, we typically want to give feedback immediately in this app design
  // OR only after they click "Check"? 
  // Based on requirement: "highlight correct answer in green" if explanation visible.
  const reveal = hasAnswered; 

  return (
    <div className="bg-neon-card/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Meta */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
           <span className={`
             px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border
             ${question.difficulty === 'easy' ? 'border-green-500/30 text-green-400 bg-green-500/5' : ''}
             ${question.difficulty === 'medium' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' : ''}
             ${question.difficulty === 'hard' ? 'border-red-500/30 text-red-400 bg-red-500/5' : ''}
           `}>
             {question.difficulty}
           </span>
           <span className="text-gray-500 text-xs flex items-center gap-1">
             <Cpu className="w-3 h-3" /> {question.topic}
           </span>
        </div>
        {isFlagged && (
          <Bookmark className="text-neon-magenta fill-neon-magenta w-6 h-6 animate-pulse" />
        )}
      </div>

      {/* Question Text */}
      <h2 className="text-xl md:text-2xl font-display font-medium text-white mb-8 leading-normal">
        {question.text}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, idx) => (
          <AnswerOption 
            key={idx}
            index={idx}
            text={opt}
            isSelected={selectedAnswer === idx}
            isCorrect={reveal && idx === question.correctIndex}
            isWrong={reveal && selectedAnswer === idx && idx !== question.correctIndex}
            isDisabled={isDisabled || (hasAnswered && selectedAnswer !== idx)} 
            onSelect={() => onSelectOption(idx)}
          />
        ))}
      </div>

      {/* Explanation Panel */}
      {showExplanation && (
        <div className="mt-8 p-6 bg-blue-900/20 border-l-4 border-neon-cyan rounded-r-xl animate-in fade-in slide-in-from-bottom-2">
          <h4 className="text-neon-cyan font-display text-sm mb-2">IZOH:</h4>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {question.explanation || "Ushbu savol bo'yicha qo'shimcha izoh kiritilmagan."}
          </p>
        </div>
      )}
    </div>
  );
};