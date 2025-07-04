export const APP_CONFIG = {
  ARRAY_SIZE: {
    MIN: 5,
    MAX: 40,
    DEFAULT: 22,
  },
  SPEED: {
    MIN: 1,
    MAX: 5,
    DEFAULT: 3,
    DELAYS: { 1: 800, 2: 400, 3: 200, 4: 120, 5: 60 },
  },
  ALGORITHMS: {
    BUBBLE_SORT: 'bubble_sort',
    INSERTION_SORT: 'insertion_sort',
    SELECTION_SORT: 'selection_sort',
    MERGE_SORT: 'merge_sort',
  },
  VISUALIZATION: {
    CONTAINER_HEIGHT_PX: 550,
    MAX_ARRAY_LENGTH_FOR_VALUE_DISPLAY: 40,
  },
};
