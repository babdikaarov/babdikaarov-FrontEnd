const mergeSort = (startArray) => {
  const length = startArray.length;
  // base case
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);
  //   merging sorted arrays(recursive case)
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

//   merge function
const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  //   iterative base case
  while (leftArray.length && rightArray.length) {
    // conditional merge
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      //  narrowing to base case
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      //  narrowing to base case

      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
};

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));
