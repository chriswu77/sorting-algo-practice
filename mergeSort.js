// split into arrays or 0 or 1 length
// then merge these "sorted" arrays

// 12:04

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midpoint));
  const right = mergeSort(arr.slice(midpoint));
  return mergeArrays(left, right);
}

console.log(mergeSort([2, 10, 5, 1, 11]));
console.log(mergeSort([141, 10, 4, 1, 200]));

// console.log(mergeArrays([1,2], [3,4]));

function mergeArrays(arr1, arr2) {
  const mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}