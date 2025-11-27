import React from 'react';

// Feedback State: Loading
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gc-primary"></div>
      <p className="ml-4 text-lg text-gray-400">Loading movies...</p>
    </div>
  );
};

export default LoadingSpinner;