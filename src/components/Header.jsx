export function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className='flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg mb-4 w-full p-2'>
      <h2 className='text-lg font-bold p-2'>React Weather App</h2>
      <button
        onClick={toggleTheme}
        className='p-2 bg-blue-500 text-white rounded'
      >
        Toggle Mode
      </button>
    </header>
  );
}
