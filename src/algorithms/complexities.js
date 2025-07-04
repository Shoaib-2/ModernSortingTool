import { APP_CONFIG } from '../config/appConfig.js';

export const complexities = {
  [APP_CONFIG.ALGORITHMS.BUBBLE_SORT]: {
    worst: 'O(n^2)',
    average: 'O(n^2)',
    best: 'O(n)',
  },
  [APP_CONFIG.ALGORITHMS.INSERTION_SORT]: {
    worst: 'O(n^2)',
    average: 'O(n^2)',
    best: 'O(n)',
  },
  [APP_CONFIG.ALGORITHMS.SELECTION_SORT]: {
    worst: 'O(n^2)',
    average: 'O(n^2)',
    best: 'O(n^2)',
  },
  [APP_CONFIG.ALGORITHMS.MERGE_SORT]: {
    worst: 'O(n log n)',
    average: 'O(n log n)',
    best: 'O(n log n)',
  },
};