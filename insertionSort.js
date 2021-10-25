// builds up the sort by gradually creating a larger left half which is always sorted

// start by picking the 2nd element in the array
// now compare the 2nd element with the one before it and swap if necessary
// continue to next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// repeat until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

// [5, 12, 3]
// [5, 12, 12]
// [5, 5, 12]
// [3, 5, 12]


console.log(insertionSort([2, 10, 5, 1, 11]));
console.log(insertionSort([141, 10, 4, 1, 200]));