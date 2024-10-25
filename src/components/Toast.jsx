import { useEffect, useState } from 'react';

export function Toast({ message, type, duration }) {
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <div
      className={`p-2 m-2 rounded text-white shadow-lg transition-opacity duration-300 flex justify-between items-center ${typeStyles[type]}`}
    >
      <span className='mr-4'>{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className='bg-transparent hove:bg-white hover:text-black rounded-full p-1 '
      >
        X
      </button>
    </div>
  );
}

const typeStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-orange-500',
};
