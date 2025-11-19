import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.min(100, Math.max(0, ((current) / total) * 100));

  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6 overflow-hidden">
      <div 
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};