// works by selecting 1 element (pivot) and finding the index where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = findPivot(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}


console.log(quickSort([2, 10, 5, 1, 11]));
console.log(quickSort([141, 10, 4, 1, 200]));


function findPivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

function swap(arr, ind1, ind2) {
  const temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}