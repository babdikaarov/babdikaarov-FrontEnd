const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => {
  // return arr.map(num => num * num)
  return arr.map(num => Math.pow(num, 2))
}

console.log(squareNums(numbers));
