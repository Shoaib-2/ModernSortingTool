import { APP_CONFIG } from '../config/appConfig.js';

export default function Controls({
  arraySize = 40,
  speed = 3,
  currentAlgorithm = '',
  onSizeChange = () => {},
  onSpeedChange = () => {},
  onAlgorithmChange = () => {},
  onRandomize = () => {},
  onExecute = () => {},
  onStop = () => {},
  sorting = false,
}) {
  return (
    <section className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 p-4 mb-3 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-4">
        {/* Array Size Control */}
        <div className="flex flex-col items-center gap-1">
          <label 
            htmlFor="size_array" 
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            Array Size
          </label>
          <input 
            id="size_array" 
            type="range" 
            min={APP_CONFIG.ARRAY_SIZE.MIN} 
            max={APP_CONFIG.ARRAY_SIZE.MAX} 
            step="1" 
            value={arraySize} 
            onChange={onSizeChange} 
            className="w-28 h-2 bg-white-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:shadow-md
                     [&::-webkit-slider-thumb]:hover:bg-indigo-600 [&::-webkit-slider-thumb]:transition-colors
                     [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-md
                     hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-200" 
          />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-full min-w-[1.5rem] text-center">
            {arraySize}
          </span>
        </div>

        {/* Speed Control */}
        <div className="flex flex-col items-center gap-1">
          <label 
            htmlFor="speed_array" 
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            Speed
          </label>
          <input 
            id="speed_array" 
            type="range" 
            min={APP_CONFIG.SPEED.MIN} 
            max={APP_CONFIG.SPEED.MAX} 
            step="1" 
            value={speed} 
            onChange={onSpeedChange} 
            className="w-28 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:shadow-md
                     [&::-webkit-slider-thumb]:hover:bg-indigo-600 [&::-webkit-slider-thumb]:transition-colors
                     [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-md
                     hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-200" 
          />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-full min-w-[1.5rem] text-center">
            {speed}
          </span>
        </div>

        {/* Algorithm Selection */}
        <div className="relative">
          <select
            id="sort_dropdown"
            className="appearance-none border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2 pr-8 
                     bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 font-medium shadow-sm
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 
                     transition-all duration-200 w-40 cursor-pointer text-sm
                     hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-400 dark:hover:border-slate-500
                     disabled:opacity-50 disabled:cursor-not-allowed"
            value={currentAlgorithm}
            onChange={onAlgorithmChange}
            disabled={sorting}
          >
            <option value="" disabled>SELECT ALGORITHM</option>
            <option value={APP_CONFIG.ALGORITHMS.SELECTION_SORT}>SELECTION SORT</option>
            <option value={APP_CONFIG.ALGORITHMS.INSERTION_SORT}>INSERTION SORT</option>
            <option value={APP_CONFIG.ALGORITHMS.BUBBLE_SORT}>BUBBLE SORT</option>
            <option value={APP_CONFIG.ALGORITHMS.MERGE_SORT}>MERGE SORT</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onRandomize}
            className="px-3 py-2 rounded-lg bg-gray-600 dark:bg-gray-700 text-white font-medium shadow-sm text-sm
                     hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 
                     dark:focus:ring-gray-400 transition-all duration-200 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            aria-label="Randomize array"
            disabled={sorting}
          >
            New Array
          </button>
          
          <button
            type="button"
            onClick={onExecute}
            className="px-3 py-2 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white font-medium shadow-sm text-sm
                     hover:bg-indigo-700 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                     dark:focus:ring-indigo-400 transition-all duration-200 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            aria-label="Execute sort"
            disabled={sorting || !currentAlgorithm}
          >
            Execute
          </button>
          
          <button
            type="button"
            onClick={onStop}
            className="px-3 py-2 rounded-lg bg-red-600 dark:bg-red-500 text-white font-medium shadow-sm text-sm
                     hover:bg-red-700 dark:hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                     dark:focus:ring-red-400 transition-all duration-200 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            aria-label="Stop sorting"
            disabled={!sorting}
          >
            Stop
          </button>
        </div>
      </div>
    </section>
  );
}