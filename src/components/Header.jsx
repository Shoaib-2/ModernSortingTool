import React from 'react';

export default function Header({ toggleTheme, theme }) {
  return (
    <header className="mb-6 flex flex-col items-center relative">
      <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 tracking-tight drop-shadow-lg">Sorting Visualization Tool</h1>
      <p className="mt-2 text-lg text-indigo-400 dark:text-indigo-500 font-medium">A modern, interactive way to learn sorting algorithms</p>
      <button
        onClick={toggleTheme}
        className="absolute top-0 right-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-7.325l-.707-.707M4.372 19.372l-.707-.707M18.364 18.364l-.707-.707M5.636 5.636l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        )}
      </button>
    </header>
  );
}