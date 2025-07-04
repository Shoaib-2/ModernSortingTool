import React, { useState, useRef, useEffect } from 'react';
import Header from './Header.jsx';
import Controls from './Controls.jsx';
import Visualization from './Visualization.jsx';
import TimeComplexity from './TimeComplexity.jsx';
import Search from './Search.jsx';
import InstructionsModal from './InstructionsModal.jsx';

import { bubbleSort } from '../algorithms/bubbleSort.js';
import { insertionSort } from '../algorithms/insertionSort.js';
import { selectionSort } from '../algorithms/selectionSort.js';
import { mergeSort } from '../algorithms/mergeSort.js';
import { linearSearch, binarySearch } from '../algorithms/search.js';
import { APP_CONFIG } from '../config/appConfig.js';

export default function App() {
  const [array, setArray] = useState(() => randomArray(APP_CONFIG.ARRAY_SIZE.DEFAULT));
  const [arraySize, setArraySize] = useState(APP_CONFIG.ARRAY_SIZE.DEFAULT);
  const [speed, setSpeed] = useState(APP_CONFIG.SPEED.DEFAULT);
  const [currentAlgorithm, setCurrentAlgorithm] = useState('');
  const [sorting, setSorting] = useState(false);
  const [highlight, setHighlight] = useState([]);
  const [result, setResult] = useState('');
  const [executionTime, setExecutionTime] = useState(null);
  const stopRequested = useRef(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark'; // Default to dark mode
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  function randomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  }

  function handleSizeChange(e) {
    const size = Number(e.target.value);
    setArraySize(size);
    setArray(randomArray(size));
    setHighlight([]);
  }

  function handleSpeedChange(e) {
    setSpeed(Number(e.target.value));
  }

  function handleAlgorithmChange(e) {
    setCurrentAlgorithm(e.target.value);
    setHighlight([]);
    stopRequested.current = true;
    setSorting(false);
  }

  function handleRandomize() {
    setArray(randomArray(arraySize));
    setHighlight([]);
  }

  async function handleExecute() {
    if (!currentAlgorithm || sorting) return;
    setSorting(true);
    stopRequested.current = false;
    const startTime = performance.now();
    let delay = APP_CONFIG.SPEED.DELAYS[speed] || APP_CONFIG.SPEED.DELAYS[APP_CONFIG.SPEED.DEFAULT];
    const update = (arr, highlight) => {
      setArray([...arr]);
      setHighlight([...highlight]);
    };
    try {
      switch (currentAlgorithm) {
        case APP_CONFIG.ALGORITHMS.BUBBLE_SORT:
          await bubbleSort(array, async (arr, highlight) => {
            if (stopRequested.current) throw 'stopped';
            update(arr, highlight);
            await new Promise(res => setTimeout(res, delay));
          }, delay);
          break;
        case APP_CONFIG.ALGORITHMS.INSERTION_SORT:
          await insertionSort(array, async (arr, highlight) => {
            if (stopRequested.current) throw 'stopped';
            update(arr, highlight);
            await new Promise(res => setTimeout(res, delay));
          }, delay);
          break;
        case APP_CONFIG.ALGORITHMS.SELECTION_SORT:
          await selectionSort(array, async (arr, highlight) => {
            if (stopRequested.current) throw 'stopped';
            update(arr, highlight);
            await new Promise(res => setTimeout(res, delay));
          }, delay);
          break;
        case APP_CONFIG.ALGORITHMS.MERGE_SORT:
          await mergeSort(array, async (arr, highlight) => {
            if (stopRequested.current) throw 'stopped';
            update(arr, highlight);
            await new Promise(res => setTimeout(res, delay));
          }, delay);
          break;
        default:
          break;
      }
    } catch (e) {
      if (e !== 'stopped') {
        console.error('Algorithm execution error:', e);
      }
    }
    const endTime = performance.now();
    setExecutionTime(endTime - startTime);
    setSorting(false);
    setHighlight([]);
  }

  function handleStop() {
    stopRequested.current = true;
    setSorting(false);
    setHighlight([]);
  }

  const [searchResult, setSearchResult] = useState(null);

  function handleSearch(target) {
    if (!currentAlgorithm) return;
    const num = parseInt(target, 10);
    if (isNaN(num)) return;

    let index = -1;
    if (currentAlgorithm === 'selection_sort') {
      // Use binary search for sorted array
      const sortedArray = [...array].sort((a, b) => a - b);
      index = binarySearch(sortedArray, num);
    } else {
      index = linearSearch(array, num);
    }

    if (index !== -1) {
      setSearchResult({ found: true, message: `Number ${num} found.` });
      setHighlight([index]);
    } else {
      setSearchResult({ found: false, message: `Number ${num} not found.` });
      setHighlight([]);
    }
  }

  function handleSearchResult(msg) {
    setResult(msg);
  }

  React.useEffect(() => {
    // Debug: log the array to ensure it's not empty
    // console.log('Visualization array:', array);
  }, [array]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-5xl w-full mx-auto p-4">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="md:col-span-3 flex flex-col gap-6">
              <Controls
                arraySize={arraySize}
                speed={speed}
                currentAlgorithm={currentAlgorithm}
                onSizeChange={handleSizeChange}
                onSpeedChange={handleSpeedChange}
                onAlgorithmChange={handleAlgorithmChange}
                onRandomize={handleRandomize}
                onExecute={handleExecute}
                onStop={handleStop}
                sorting={sorting}
              />
              <div className="rounded-lg shadow bg-white dark:bg-slate-800 p-4 min-h-[300px] flex items-end justify-center">
                <Visualization array={array} highlight={highlight} />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TimeComplexity currentAlgorithm={currentAlgorithm} executionTime={executionTime} />
              <Search array={array} onSearch={handleSearch} searchResult={searchResult} />
              {result && <div className="text-center text-indigo-700 font-semibold mt-2">{result}</div>}
            </div>
          </div>
        </div>
      </div>
      <InstructionsModal />
    </div>
  );
}
