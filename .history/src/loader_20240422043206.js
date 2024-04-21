import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading.....');

 useEffect(() => {
  const interval = setInterval(() => {
    if (progress < 100) {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + 1;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    } else {
      clearInterval(interval);
      setStatus('Complete');
    }
  }, 100);

  return () => clearInterval(interval);
}, [progress]); // Include progress in the dependency array

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="status">
        {status}
      </div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
