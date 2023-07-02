const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            let number = arr[i];
            let pwr = 2;
            while (pwr < number) {
                  pwr = pwr * 2;               
            }            
            results.push(pwr);      
      }
      return results
}

// console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
function test(arr){
  let result = [];
  arr.map(number => {
    let pow = 1;
    while (number > pow) {
      pow *= 2
    }
    result.push(pow)
  })
  return result
  }
  
console.log(test(numbers))