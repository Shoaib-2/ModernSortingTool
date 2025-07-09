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

  const handleClear = () => {
    setInput('');
    inputRef.current?.focus();
  };

  // Accessibility: focus input on mount
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 p-4 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
          Search Array
        </h3>

        {/* Input Section */}
        <div className="flex flex-col gap-2">
          <label 
            htmlFor="searchInput" 
            className="text-xs font-medium text-gray-700 dark:text-gray-300"
          >
            Enter a number to search
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              type="number"
              id="searchInput"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="e.g., 42"
              className="border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2 w-full text-sm
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 
                       dark:bg-slate-900 dark:text-white bg-white text-gray-900
                       placeholder:text-gray-400 dark:placeholder:text-gray-500
                       transition-all duration-200 shadow-sm hover:border-gray-400 dark:hover:border-slate-500"
              aria-label="Enter a number to search"
            />
            {input && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 
                         dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-1"
                aria-label="Clear input"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button
          type="button"
          onClick={handleSearch}
          disabled={!input.trim()}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 
                   dark:from-indigo-400 dark:to-blue-400 text-white font-medium shadow-md text-sm
                   hover:from-indigo-600 hover:to-blue-600 dark:hover:from-indigo-500 dark:hover:to-blue-500 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-300 
                   transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                   active:scale-95 transform"
          aria-label="Search"
        >
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </div>
        </button>

        {/* Search Result */}
        {searchResult && (
          <div
            role="status"
            aria-live="polite"
            className={`p-3 rounded-lg border transition-all duration-300 ${
              searchResult.found 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {searchResult.found ? (
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="font-medium text-xs">
                {searchResult.message}
              </span>
            </div>
          </div>
        )}

        {/* Array Info */}
        {array.length > 0 && (
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-1 border-t border-gray-200 dark:border-slate-700">
            Array: {array.length} elements
          </div>
        )}
      </div>
    </div>
  );
}