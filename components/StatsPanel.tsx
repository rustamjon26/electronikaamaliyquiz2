import React from 'react';
import { Trophy, Target, Zap, Flame } from 'lucide-react';

interface Props {
  current: number;
  total: number;
  score: number;
  correct: number;
  wrong: number;
  streak: number;
  accuracy: number;
  progress: number;
}

export const StatsPanel: React.FC<Props> = ({
  current, total, score, correct, wrong, streak, accuracy, progress
}) => {
  return (
    <div className="bg-neon-card border border-neon-cyan/20 rounded-2xl p-6 shadow-[0_0_15px_rgba(0,229,255,0.05)]">
      <h3 className="text-neon-cyan font-display tracking-widest text-sm mb-6 uppercase border-b border-white/10 pb-2">
        Joriy Natijalar
      </h3>

      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Jarayon</span>
          <span>{current} / {total}</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-neon-cyan to-blue-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center">
          <Trophy className="text-yellow-400 w-6 h-6 mb-1" />
          <span className="text-xs text-gray-400">Ball</span>
          <span className="text-xl font-bold font-mono">{score}</span>
        </div>
        <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center">
          <Target className="text-neon-magenta w-6 h-6 mb-1" />
          <span className="text-xs text-gray-400">Aniqlik</span>
          <span className="text-xl font-bold font-mono">{accuracy}%</span>
        </div>
      </div>

      <div className="space-y-3 font-mono text-sm">
        <div className="flex justify-between items-center">
          <span className="text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]" /> To'g'ri
          </span>
          <span>{correct}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-red-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]" /> Noto'g'ri
          </span>
          <span>{wrong}</span>
        </div>
      </div>

      {streak > 2 && (
        <div className="mt-6 bg-orange-500/10 border border-orange-500/50 p-3 rounded-lg flex items-center justify-center gap-2 animate-pulse">
          <Flame className="text-orange-500 w-5 h-5" />
          <span className="text-orange-400 font-bold font-display">
            {streak} STREAK!
          </span>
        </div>
      )}
    </div>
  );
};