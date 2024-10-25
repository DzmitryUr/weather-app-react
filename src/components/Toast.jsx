import React, { useState, useEffect } from 'react';

export const Toast = ({ message, type, duration }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      if (duration) {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, duration);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [message, duration]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`p-2 m-2 rounded text-white shadow-lg transition-opacity duration-300 flex justify-between items-center ${typeStyles[type]}`}
    >
      <span className='mr-4'>{message}</span>
      <button
        onClick={handleClose}
        className='bg-transparent hover:bg-white hover:text-black rounded-full p-1 focus:outline-none'
      >
        &#x2715; {/* Unicode for close (X) symbol */}
      </button>
    </div>
  );
};

const typeStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-orange-500',
  info: 'bg-blue-500',
};
