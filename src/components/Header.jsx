import { useEffect, useState } from 'react';
import { METRIC, useMetrics } from '../hooks/useMetrics';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { RiFahrenheitFill, RiCelsiusFill } from 'react-icons/ri';
import { FaGithub, FaYoutube } from 'react-icons/fa6';

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const { metrics, toggleMetric } = useMetrics();

  useEffect(() => {
    const root = document.documentElement;
    darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkTheme]);
  return (
    <header className='flex justify-between items-center bg-white shadow-md p-2 rounded-lg mb-4 w-full dark:bg-gray-800 dark:text-white'>
      <h2 className='text-lg font-bold p-2 flex items-center'>
        React Weather App
        <a
          href='https://github.com/DzmitryUr/weather-app-react'
          className='ml-3 text-3xl'
          target='_blank'
        >
          <FaGithub />
        </a>
        <a
          href='https://youtu.be/rJqAmxqKNiw'
          className='ml-3 text-3xl'
          target='_blank'
        >
          <FaYoutube />
        </a>
      </h2>
      <div className='text-3xl'>
        <button onClick={toggleMetric}>
          {metrics.units === METRIC ? <RiFahrenheitFill /> : <RiCelsiusFill />}
        </button>
        <button onClick={() => setDarkTheme(!darkTheme)} className='mr-3 ml-2'>
          {darkTheme ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
}
