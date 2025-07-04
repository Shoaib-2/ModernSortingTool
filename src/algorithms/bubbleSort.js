// Example: Bubble Sort as ES6 module
export async function bubbleSort(array, update, delay) {
  let arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        update(arr, [j, j + 1]);
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }
  update(arr, []);
  return arr;
}
