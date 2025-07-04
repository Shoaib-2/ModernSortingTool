import React from 'react';

export default function InstructionsModal({ showInstructions, onClose }) {
  return (
    <div id="popupInstruction" className={`fixed inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center z-50 ${showInstructions ? '' : 'hidden'}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-indigo-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-200 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-400 dark:text-indigo-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>
          Welcome to Sorting Visualization System
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Sliders control the speed and size of the array.</li>
          <li>Select an algorithm from the drop-down menu.</li>
          <li>Click 'Next Array' to generate a random array.</li>
          <li>Click 'Execute' after selecting an algorithm.</li>
          <li>Click 'Stop' to terminate the algorithm.</li>
          <li>Type a number to search in the array.</li>
          <li>Use 'Search' to find a specific number (binary search only on selection sort).</li>
        </ul>
        <button id="popupClosed" onClick={onClose} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-bold shadow hover:from-indigo-600 hover:to-blue-500 transition cursor-pointer">Close</button>
      </div>
    </div>
  );
}
