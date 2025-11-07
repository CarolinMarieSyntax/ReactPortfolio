import React from 'react';

function ProgressBar({ progress = 0, className = '', showLabel = true }) {
  const percentage = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        {showLabel && (
          <span className="text-sm font-medium text-gray-300">
            Progress
          </span>
        )}
        <span className="text-sm font-medium text-gray-300">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;

