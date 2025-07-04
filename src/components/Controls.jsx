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
    <section className="bg-white/80 dark:bg-slate-800/80 rounded-xl shadow flex flex-wrap md:flex-row items-center gap-4 px-6 py-4 mb-2 border border-indigo-100 dark:border-slate-700">
      <div className="flex flex-col items-center">
        <label htmlFor="size_array" className="font-medium text-indigo-700 dark:text-indigo-200">Array Size</label>
        <input id="size_array" type="range" min={APP_CONFIG.ARRAY_SIZE.MIN} max={APP_CONFIG.ARRAY_SIZE.MAX} step="1" value={arraySize} onChange={onSizeChange} className="w-32 accent-indigo-500 dark:accent-indigo-400" />
        <span className="text-xs text-gray-500 dark:text-gray-400">{arraySize}</span>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="speed_array" className="font-medium text-indigo-700 dark:text-indigo-200">Speed</label>
        <input id="speed_array" type="range" min={APP_CONFIG.SPEED.MIN} max={APP_CONFIG.SPEED.MAX} step="1" value={speed} onChange={onSpeedChange} className="w-32 accent-indigo-500 dark:accent-indigo-400" />
        <span className="text-xs text-gray-500 dark:text-gray-400">{speed}</span>
      </div>
      <div className="relative">
        <select
          id="sort_dropdown"
          className="appearance-none border border-indigo-200 dark:border-slate-600 rounded-lg px-4 py-2 pr-10 bg-white/90 dark:bg-slate-900 text-indigo-700 dark:text-indigo-200 font-semibold shadow focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition w-48 cursor-pointer hover:bg-indigo-50 dark:hover:bg-slate-800"
          value={currentAlgorithm}
          onChange={onAlgorithmChange}
        >
          <option value="" disabled>SELECT ALGORITHM</option>
          <option value={APP_CONFIG.ALGORITHMS.SELECTION_SORT}>SELECTION SORT</option>
          <option value={APP_CONFIG.ALGORITHMS.INSERTION_SORT}>INSERTION SORT</option>
          <option value={APP_CONFIG.ALGORITHMS.BUBBLE_SORT}>BUBBLE SORT</option>
          <option value={APP_CONFIG.ALGORITHMS.MERGE_SORT}>MERGE SORT</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </div>
      <button
          type="button"
          onClick={onRandomize}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white font-bold shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition cursor-pointer"
          aria-label="Randomize array"
          disabled={sorting}
        >
          Next Array
        </button>
        <button
          type="button"
          onClick={onExecute}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50 cursor-pointer"
          aria-label="Execute sort"
          disabled={sorting || !currentAlgorithm}
        >
          Execute
        </button>
        <button
          type="button"
          onClick={onStop}
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition disabled:opacity-50 cursor-pointer"
          aria-label="Stop sorting"
          disabled={!sorting}
        >
          Stop
        </button>
    </section>
  );
}
