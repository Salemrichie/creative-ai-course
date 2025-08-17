import React from 'react';

const ProgressBar = ({ currentWeek, totalWeeks = 4 }) => {
  const progress = (currentWeek / totalWeeks) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="text-xs text-gray-600 mt-2 text-center">
        الأسبوع {currentWeek} من {totalWeeks}
      </div>
    </div>
  );
};

export default ProgressBar;