// Insertionsort.js - ES6 module
export async function insertionSort(array, update, delay) {
  let arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      update(arr, [j, j + 1]);
      await new Promise(res => setTimeout(res, delay));
      j--;
    }
    arr[j + 1] = key;
    update(arr, [j + 1]);
    await new Promise(res => setTimeout(res, delay));
  }
  update(arr, []);
  return arr;
}
