import { useEffect, useState } from 'react';
import { METRIC, useMetrics } from '../hooks/useMetrics';

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const { metrics, toggleMetric } = useMetrics();

  useEffect(() => {
    const root = document.documentElement;
    darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkTheme]);
  return (
    <header className='flex justify-between items-center bg-white shadow-md p-2 rounded-lg mb-4 w-full dark:bg-gray-800 dark:text-white'>
      <h2 className='text-lg font-bold p-2'>React Weather App</h2>
      <div>
        <button
          onClick={toggleMetric}
          className='mr-2 p-2 bg-blue-500 text-white rounded'
        >
          {metrics.units === METRIC ? 'Fahrenheit' : 'Celsius'}
        </button>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className='p-2 bg-blue-500 text-white rounded'
        >
          {darkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
