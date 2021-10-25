// largest values bubble to the top or end of array

function bubbleSort(arr) {
  for (let last = arr.length - 1; last >= 0; last--) {
    let noSwaps = true;

    for (let start = 0; start < last; start++) {
      const current = arr[start];
      const next = arr[start + 1];

      if (current > next) {
        arr[start] = next;
        arr[start + 1] = current;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([2, 10, 5, 1, 11]));
console.log(bubbleSort([141, 10, 4, 1, 200]));