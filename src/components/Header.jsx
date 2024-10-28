import { useState, useEffect } from 'react';

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkTheme]);

  return (
    <header className='flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg mb-4 w-full p-2'>
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
