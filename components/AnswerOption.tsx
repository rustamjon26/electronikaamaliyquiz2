import React from 'react';

interface Props {
  text: string;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean; // Only passed if we want to reveal the answer
  isWrong?: boolean; // Only passed if we want to reveal the answer
  isDisabled: boolean;
  onSelect: () => void;
}

const LABELS = ['A', 'B', 'C', 'D'];

export const AnswerOption: React.FC<Props> = ({
  text, index, isSelected, isCorrect, isWrong, isDisabled, onSelect
}) => {
  
  let baseClasses = "w-full text-left p-4 rounded-xl border transition-all duration-200 relative group overflow-hidden";
  let stateClasses = "border-gray-700 bg-white/5 hover:bg-white/10 hover:border-neon-cyan/50";
  let labelClasses = "bg-gray-700 text-gray-300";

  if (isCorrect) {
    stateClasses = "border-green-500 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.2)]";
    labelClasses = "bg-green-500 text-white";
  } else if (isWrong) {
    stateClasses = "border-red-500 bg-red-500/10 opacity-70";
    labelClasses = "bg-red-500 text-white";
  } else if (isSelected) {
    stateClasses = "border-neon-cyan bg-neon-cyan/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]";
    labelClasses = "bg-neon-cyan text-black font-bold";
  }

  if (isDisabled && !isSelected && !isCorrect && !isWrong) {
     stateClasses += " opacity-50 cursor-not-allowed hover:bg-white/5 hover:border-gray-700";
  }

  return (
    <button 
      onClick={onSelect}
      disabled={isDisabled}
      className={`${baseClasses} ${stateClasses}`}
    >
      <div className="flex items-center gap-4 relative z-10">
        <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-display text-sm transition-colors ${labelClasses}`}>
          {LABELS[index]}
        </div>
        <span className="text-gray-200 text-sm md:text-base font-medium leading-relaxed">{text}</span>
      </div>
      
      {/* Hover/Active glow effect */}
      {isSelected && <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent" />}
    </button>
  );
};