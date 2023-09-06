const swap = (arr, indexOne, indexTwo) => {
  // swaping element
  //   arr[indexOne], arr[indexTwo] = arr[indexTwo], arr[indexOne];
  const temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
  return arr;
};

const bubbleSort = (input) => {
  let swapping = true;
  //   outter loop
  while (swapping) {
    swapping = false;
    // inner loop
    for (let i = 0; i < input.length - 1; i++) {
      // comparing two elements
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);
        swap(input, i, i + 1);
        swapping = true;
      }
    }
  }
  return input;
};

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let test = bubbleSort(arr);
// console.log(test);

const recursiveBubbleSort = (input, n) => {
  // base case
  if (n <= 1) {
    return input;
  }
  //   recursive step
  for (let i = 0; i < n - 1; i++) {
    // comparing two elements
    if (input[i] > input[i + 1]) {
      console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);
      swap(input, i, i + 1);
    }
  }
  return recursiveBubbleSort(input, n - 1);
};

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let test = recursiveBubbleSort(arr, arr.length);
console.log(test);
