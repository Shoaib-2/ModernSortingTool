// MergeSort.js - ES6 module
export async function mergeSort(array, update, delay) {
  let arr = array.slice();
  async function mergeSortHelper(start, end) {
    if (end - start <= 1) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSortHelper(start, mid);
    await mergeSortHelper(mid, end);
    let merged = [], i = start, j = mid;
    while (i < mid && j < end) {
      if (arr[i] < arr[j]) {
        merged.push(arr[i++]);
      } else {
        merged.push(arr[j++]);
      }
      update([...arr.slice(0, start), ...merged, ...arr.slice(i, mid), ...arr.slice(j, end), ...arr.slice(end)], [i, j]);
      await new Promise(res => setTimeout(res, delay));
    }
    while (i < mid) merged.push(arr[i++]);
    while (j < end) merged.push(arr[j++]);
    for (let k = 0; k < merged.length; k++) {
      arr[start + k] = merged[k];
      update(arr, [start + k]);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  await mergeSortHelper(0, arr.length);
  update(arr, []);
  return arr;
}
