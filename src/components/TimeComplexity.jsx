import React from 'react';
import { complexities } from '../algorithms/complexities.js';
import { APP_CONFIG } from '../config/appConfig.js';

export default function TimeComplexity({ currentAlgorithm, executionTime }) {
  const complexity = complexities[currentAlgorithm] || { worst: '', average: '', best: '' };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-slate-700 flex flex-col gap-2 w-full max-w-md mx-auto">
      <h3 className="font-semibold text-lg text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Time Complexity
      </h3>
      <div className="space-y-1 text-sm text-gray-700 dark:text-slate-300">
        <div className="flex justify-between"><span>Worst Case:</span><span className="font-mono text-gray-900 dark:text-white">{complexity.worst}</span></div>
        <div className="flex justify-between"><span>Average Case:</span><span className="font-mono text-gray-900 dark:text-white">{complexity.average}</span></div>
        <div className="flex justify-between"><span>Best Case:</span><span className="font-mono text-gray-900 dark:text-white">{complexity.best}</span></div>
      </div>
      {executionTime !== null && (
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-700">
          <p className="text-sm text-gray-700 dark:text-slate-300">Actual Execution Time: <span className="font-bold text-indigo-600 dark:text-indigo-400">{(executionTime / 1000).toFixed(2)} s</span></p>
        </div>
      )}
    </div>
  );
}