// Write your function here:
const tipCalculator = (quality, total) => {
    switch (quality) {
      case 'bad':
        return  total * .05;
        break;
      case 'ok':
        return  total * .15;
        break;
      case 'good':
        return  total * .20;
        break;
      case ('excellent'):
        return  total * .30;
        break;
      default:
        return  total * .18;
        break;
    }
}



// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
console.log(tipCalculator('bad', 100)); // Output: 5
console.log(tipCalculator('ok', 100)); // Output: 15
console.log(tipCalculator('excellent', 100)); // Output: 30
console.log(tipCalculator('average', 100)); // Output: 18