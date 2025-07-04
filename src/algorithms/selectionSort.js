// SelectionSort.js - ES6 module
export async function selectionSort(array, update, delay) {
  let arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
      update(arr, [i, j, minIdx]);
      await new Promise(res => setTimeout(res, delay));
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      update(arr, [i, minIdx]);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  update(arr, []);
  return arr;
}
