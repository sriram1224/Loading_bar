import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // You can style your progress bar in this CSS file

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment progress by 10% until it reaches 100%
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000); // You can adjust the interval duration as per your requirement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="status">
        {progress < 100 ? 'Loading' : 'Complete'}
      </div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
