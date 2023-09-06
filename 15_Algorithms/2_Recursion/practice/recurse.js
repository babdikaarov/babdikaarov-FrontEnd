/* Introduction */
const iterativeFactorial = (n) => {
  let result = 1;
  for (let i = result; i <= n; i++) {
    result *= i;
  }
  // while(n > 0) {
  //   result *= n;
  //   n -= 1;
  // }
  return result;
};

/* Recursion */
// Set fourFactorial

// let fourFactorial = iterativeFactorial(4);
// console.log(fourFactorial);

// const recursiveFactorial = (n) => {
//   if (n > 0) {
//     console.log(`Execution context: ${n}`);

//     recursiveFactorial(n - 1);
//   }
// };

// const recursiveSolution = recursiveFactorial(4);
// console.log(recursiveSolution);

/* Recursive Case */

// const recursiveFactorial = (n) => {
//   if (n > 0) {
//     console.log(`Execution context: ${n}`);

//     return n * recursiveFactorial(n - 1);
//   }
//   console.log(n);
// };

// const recursiveSolution = recursiveFactorial(4);
// console.log(recursiveSolution);

/* Base Case */
const recursiveFactorial = (n) => {
  // Add a condition below
  // if(n === 1){
  //     return 1;
  //   }
  //   console.log(`Execution context: ${n}`);

  //   return recursiveFactorial(n - 1) * n;
  while (n > 0) {
    console.log(`Execution context: ${n}`);

    return recursiveFactorial(n - 1) * n;
  }
  return 1;
};

const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);
