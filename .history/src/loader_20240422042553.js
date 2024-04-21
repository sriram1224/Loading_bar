import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment progress by 10% until it reaches 100%
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
        setStatus('Complete');
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
        {status}
      </div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
