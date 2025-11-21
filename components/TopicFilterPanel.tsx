import React from 'react';
import { Topic } from '../types';
import { Filter } from 'lucide-react';

interface Props {
  selectedTopics: Topic[];
  onToggle: (topic: Topic) => void;
}

const TOPICS: Topic[] = ["BJT", "FET", "OpAmp", "RC", "Digital", "Power"];

export const TopicFilterPanel: React.FC<Props> = ({ selectedTopics, onToggle }) => {
  return (
    <div className="bg-neon-card border border-neon-magenta/20 rounded-2xl p-6 shadow-[0_0_15px_rgba(255,51,204,0.05)] h-full">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-2">
        <h3 className="text-neon-magenta font-display tracking-widest text-sm uppercase">
          Mavzular
        </h3>
        <Filter className="w-4 h-4 text-gray-500" />
      </div>

      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => {
          const isActive = selectedTopics.includes(topic);
          return (
            <button
              key={topic}
              onClick={() => onToggle(topic)}
              className={`
                px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 border
                ${isActive 
                  ? 'bg-neon-magenta/20 border-neon-magenta text-white shadow-[0_0_10px_rgba(255,51,204,0.3)]' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }
              `}
            >
              {topic}
            </button>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5 text-center">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Rejim</span>
        <div className="mt-2 font-display text-neon-cyan">
          {selectedTopics.length === 0 ? "HAMMASI (RANDOM)" : "MAVZULASHTIRILGAN"}
        </div>
      </div>
    </div>
  );
};