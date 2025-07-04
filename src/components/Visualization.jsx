import React from 'react';

import { APP_CONFIG } from '../config/appConfig.js';

export default function Visualization({ array = [], highlight = [] }) {
  // Container height in px
  const containerHeight = APP_CONFIG.VISUALIZATION.CONTAINER_HEIGHT_PX;
  return (
    <div
      id="array_container"
      className="flex items-end w-full gap-2 bg-gradient-to-t from-indigo-100 to-white dark:from-slate-700 dark:to-slate-900 rounded-xl shadow-inner border border-indigo-100 dark:border-slate-700 p-2 min-h-[18rem]"
      aria-label="Array visualization"
      style={{ height: `${containerHeight}px` }}
    >
      {array.length === 0 ? (
        <div className="text-center w-full text-gray-400 dark:text-gray-500">No data to visualize</div>
      ) : (
        array.map((value, idx) => (
          <div
            key={idx}
            className={`relative flex-1 min-w-0 flex items-center justify-center rounded-t border border-indigo-300 ${highlight.includes(idx) ? 'bg-pink-500 shadow-lg scale-110' : 'bg-indigo-400'} transition-all duration-200`}
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
              <span className="absolute inset-0 flex items-center justify-center select-none text-black font-bold text-base" style={{pointerEvents: 'none'}}>{value}</span>
            )}
          </div>
        ))
      )}
    </div>
  );
}
