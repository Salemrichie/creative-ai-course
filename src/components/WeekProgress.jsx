import React from 'react';

const WeekProgress = ({ weekNumber, isCompleted = false, isCurrent = false, title }) => {
  const getStatusIcon = () => {
    if (isCompleted) return "✅";
    if (isCurrent) return "⏳";
    return "⭕";
  };

  const getStatusColor = () => {
    if (isCompleted) return "text-green-600 bg-green-50 border-green-200";
    if (isCurrent) return "text-indigo-600 bg-indigo-50 border-indigo-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${getStatusColor()}`}>
      <div className="flex items-center gap-3">
        <div className="text-2xl">{getStatusIcon()}</div>
        <div>
          <div className="font-bold">الأسبوع {weekNumber}</div>
          <div className="text-sm opacity-80">{title}</div>
        </div>
      </div>
      {isCurrent && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-indigo-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
      )}
    </div>
  );
};

export default WeekProgress;