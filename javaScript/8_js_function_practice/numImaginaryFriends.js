// Write your function here:
const numImaginaryFriends = (total) => {
  if (typeof total !== 'number' || total < 1) {
    return "input should be a positive number"
  } else {
  return total = Math.ceil(total / 4);
  }
}



// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

console.log(numImaginaryFriends('b'))
console.log(numImaginaryFriends(-2))
console.log(numImaginaryFriends(true))