import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const LayoutShell: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-neon-dark text-white font-sans selection:bg-neon-cyan selection:text-neon-dark">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-magenta shadow-glow-cyan" />
      {children}
    </div>
  );
};