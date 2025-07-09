import React from 'react';

import { APP_CONFIG } from '../config/appConfig.js';

export default function Visualization({ array = [], highlight = [] }) {
  // Container height in px
  const containerHeight = APP_CONFIG.VISUALIZATION.CONTAINER_HEIGHT_PX;
  return (
    <div
      id="array_container"
      className="flex items-end w-full gap-2 bg-gradient-to-t from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-inner border border-gray-200 dark:border-slate-600 p-2 min-h-[18rem]"
      aria-label="Array visualization"
      style={{ height: `${containerHeight}px` }}
    >
      {array.length === 0 ? (
        <div className="text-center w-full text-gray-500 dark:text-gray-400">No data to visualize</div>
      ) : (
        array.map((value, idx) => (
          <div
            key={idx}
            className={`relative flex-1 min-w-0 flex items-center justify-center rounded-t border transition-all duration-200 ${
              highlight.includes(idx) 
                ? 'bg-gradient-to-t from-pink-500 to-pink-400 dark:from-pink-400 dark:to-pink-300 border-pink-600 dark:border-pink-500 shadow-lg scale-110 text-white' 
                : 'bg-gradient-to-t from-indigo-500 to-indigo-400 dark:from-indigo-500 dark:to-indigo-400 border-indigo-600 dark:border-indigo-500 text-white'
            }`}
            style={{
              height: `${(value / 101) * containerHeight}px`,
              marginLeft: idx === 0 ? 0 : '1px',
              marginRight: idx === array.length - 1 ? 0 : '1px',
              fontSize: '1rem',
              maxWidth: '48px',
            }}
            aria-label={`Value: ${value}`}
          >
            {array.length <= APP_CONFIG.VISUALIZATION.MAX_ARRAY_LENGTH_FOR_VALUE_DISPLAY && (
              <span className="absolute inset-0 flex items-center justify-center select-none font-bold text-base" style={{pointerEvents: 'none'}}>{value}</span>
            )}
          </div>
        ))
      )}
    </div>
  );
}