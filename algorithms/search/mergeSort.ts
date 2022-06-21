function merge(array1: number[], array2: number[]): number[] {
  const sorted: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (sorted.length < array1.length + array2.length) {
    if (
      rightIndex === array2.length ||
      (leftIndex < array1.length &&
        (array1[leftIndex] as number) < (array2[rightIndex] as number))
    ) {
      sorted.push(array1[leftIndex] as number);
      leftIndex++;
    } else if (rightIndex < array2.length) {
      sorted.push(array2[rightIndex] as number);
      rightIndex++;
    }
  }

  return sorted;
}

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Test an empty array
console.log(mergeSort([]));
// Test an already sorted array
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
// Test a backward sorted array
console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]));
// Test an array with all the same values
console.log(mergeSort([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]));
// Test an array with duplicates
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 3, 4, 5]));
