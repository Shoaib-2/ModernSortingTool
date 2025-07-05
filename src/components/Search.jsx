import React, { useState, useRef } from 'react';

export default function Search({ array = [], onSearch, searchResult }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSearch = () => {
    if (onSearch) onSearch(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // Accessibility: focus input on mount
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl shadow p-4 border border-indigo-100 dark:border-slate-700 flex flex-col gap-2 w-full max-w-md mx-auto">
      <label htmlFor="searchInput" className="text-sm font-medium text-indigo-700 dark:text-indigo-200">
        Search for a number
      </label>
      <input
        ref={inputRef}
        type="number"
        id="searchInput"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a number"
        className="border border-indigo-200 dark:border-slate-600 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-300 dark:bg-slate-900 dark:text-white"
        aria-label="Enter a number to search"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-400 to-blue-400 text-white font-bold shadow hover:from-indigo-500 hover:to-blue-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
        aria-label="Search"
      >
        Search
      </button>
      {searchResult && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-2 text-sm font-semibold ${searchResult.found ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
        >
          {searchResult.message}
        </div>
      )}
    </div>
  );
}