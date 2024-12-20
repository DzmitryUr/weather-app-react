import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { RiFahrenheitFill, RiCelsiusFill } from 'react-icons/ri';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { METRIC, useMetrics } from '../hooks/useMetrics';

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const { metrics, toggleMetric } = useMetrics();

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
    const mode = darkTheme ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
  }, [darkTheme]);
  return (
    <header className='flex justify-between items-center bg-white shadow-md p-2 rounded-lg mb-4 w-full dark:bg-gray-800 dark:text-white'>
      <h2 className='text-lg font-bold p-2 flex items-center'>
        React Weather App
        <a
          href='https://github.com/DzmitryUr/weather-app-react'
          target='_blank'
          className='ml-3 text-3xl'
          aria-label='Link to source code on GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://youtu.be/rJqAmxqKNiw'
          target='_blank'
          className='ml-3 text-3xl'
          aria-label='Link to YouTube video'
        >
          <FaYoutube />
        </a>
      </h2>
      <div className='text-3xl'>
        <button onClick={toggleMetric} title='Unit'>
          {metrics.units === METRIC ? <RiFahrenheitFill /> : <RiCelsiusFill />}
        </button>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className='mr-3 ml-2'
          title='Mode'
        >
          {darkTheme ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
}
