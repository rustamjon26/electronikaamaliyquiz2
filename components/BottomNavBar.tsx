import React from 'react';
import { ChevronLeft, ChevronRight, Flag, BookOpen } from 'lucide-react';

interface Props {
  onPrev: () => void;
  onNext: () => void;
  onFlag: () => void;
  onExplain: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  isFlagged: boolean;
  showingExplanation: boolean;
}

export const BottomNavBar: React.FC<Props> = ({
  onPrev, onNext, onFlag, onExplain, isPrevDisabled, isNextDisabled, isFlagged, showingExplanation
}) => {
  
  const btnBase = "flex items-center justify-center gap-2 px-4 py-3 rounded-full font-display text-sm tracking-wide transition-all active:scale-95";
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-neon-dark/80 backdrop-blur-xl border-t border-white/5 p-4 z-40">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        
        <button 
          onClick={onPrev}
          disabled={isPrevDisabled}
          className={`${btnBase} ${isPrevDisabled ? 'text-gray-600 cursor-not-allowed' : 'text-white bg-white/5 hover:bg-white/10 hover:text-neon-cyan'}`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Oldingi</span>
        </button>

        <div className="flex gap-2 sm:gap-4">
           <button 
             onClick={onFlag}
             className={`${btnBase} border ${isFlagged ? 'bg-neon-magenta/20 border-neon-magenta text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
             title="Savolni belgilash"
           >
             <Flag className={`w-4 h-4 ${isFlagged ? 'fill-white' : ''}`} />
             <span className="hidden sm:inline">Belgilash</span>
           </button>
           
           <button 
             onClick={onExplain}
             className={`${btnBase} border ${showingExplanation ? 'bg-neon-cyan/20 border-neon-cyan text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
             title="Izohni ko'rish"
           >
             <BookOpen className="w-4 h-4" />
             <span className="hidden sm:inline">Izoh</span>
           </button>
        </div>

        <button 
          onClick={onNext}
          disabled={isNextDisabled}
          className={`${btnBase} ${isNextDisabled ? 'text-gray-600 cursor-not-allowed' : 'bg-neon-cyan text-black font-bold hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.3)]'}`}
        >
          <span className="hidden sm:inline">Keyingi</span>
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};