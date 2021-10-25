// similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// 11:07 - 11:12
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      const cur = arr[j];
      if (cur < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([2, 10, 5, 1, 11]));
console.log(selectionSort([141, 10, 4, 1, 200]));