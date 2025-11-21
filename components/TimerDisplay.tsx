import React from 'react';
import { Clock } from 'lucide-react';

interface Props {
  seconds: number;
  isUrgent: boolean;
}

export const TimerDisplay: React.FC<Props> = ({ seconds, isUrgent }) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const timeString = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  return (
    <div className={`
      flex items-center gap-2 font-mono text-lg
      ${isUrgent ? 'text-red-500 animate-pulse' : 'text-white'}
    `}>
      <Clock className="w-4 h-4" />
      {timeString}
    </div>
  );
};