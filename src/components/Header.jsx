import { useEffect, useState } from 'react';

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkTheme]);
  return (
    <header className='flex justify-between items-center bg-white shadow-md p-2 rounded-lg mb-4 w-full dark:bg-gray-800 dark:text-white'>
      <h2 className='text-lg font-bold p-2'>React Weather App</h2>
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className='p-2 bg-blue-500 text-white rounded'
      >
        {darkTheme ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
