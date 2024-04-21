import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment progress by 1% until it reaches 100%
      if (progress < 100) {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 1;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      } else {
        clearInterval(interval);
        setStatus('Complete');
      }
    }, 1000); // Adjust the interval duration as per your preference for smoothness

    return () => clearInterval(interval);
  }, []);

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
