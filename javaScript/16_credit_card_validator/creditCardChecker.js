// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const nazgulCard = [4, 3, 4, 2, 0, 4, 7, 9, 3, 2, 2, 4, 0, 0, 2, 1];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1, valid2, valid3, valid4, valid5,
  invalid1, invalid2, invalid3, invalid4, invalid5,
  mystery1, mystery2, mystery3, mystery4, mystery5
];

// Array to store valid cards
let validCards = [];

// Array to store invalid cards
let invalidCards = [];

// Variable to store the index of the last digit
let lastDigit = 0;

// Array to store a new sub-array
let newSubArr = [];

// Array to store intermediate result
let intermediateResult = [];

// Helper function to create a new array excluding the last digit
function newArray(subArr) {
  lastDigit = subArr.length - 1;
  newSubArr = subArr.slice(0, lastDigit);
}

// Helper function to double every other digit starting from the second-to-last
function oddDigitMultiply(arr) {
  return arr.map((num, index) => (index + 1) % 2 !== 0 ? num * 2 : num);
}

// Helper function to split each number into separate digits
const splitEachDigit = arr => arr.join('').split('').map(Number);

// Helper function to calculate the sum of all digits in an array
const sumOfDigits = arr => arr.reverse().reduce((a, b) => a + b);

// Helper function to reverse an array
const reverseArray = arr => arr.reverse();

// Function to validate credit card numbers
const validateCred = test => {
  newArray(test);
  intermediateResult = oddDigitMultiply(newSubArr);
  const digits = splitEachDigit(intermediateResult);
  const sum = sumOfDigits(digits);
  return (sum + test[lastDigit]) % 10 === 0;
};
  
// Function to find invalid cards in a batch
function findInvalidCards(arr) {
  for (const element of arr) {
    if (validateCred(element) === true) {
      validCards.push(element);
    } else {
      invalidCards.push(element);
    }
  }
}

// Find invalid cards in the batch
findInvalidCards(batch);

// Function to identify the companies of invalid cards
const idInvalidCardCompanies = arr => arr.map(x => {
  if (x.join().startsWith(3)) {
    return "Amex (American Express)";
  } else if (x.join().startsWith(4)) {
    return "Visa";
  } else if (x.join().startsWith(5)) {
    return "Mastercard";
  } else if (x.join().startsWith(6)) {
    return "Discover";
  } else {
    return "Company not found";
  }
});

// Get unique company names from invalid cards
// const companies = [...new Set(idInvalidCardCompanies(invalidCards))];
const companies = idInvalidCardCompanies(invalidCards)
    .filter((company, index, arr) => arr
    .indexOf(company) === index);
// Output results

console.log("Valid Cards:", validCards);
console.log("Invalid Cards:", invalidCards);
console.log("Invalid Card Companies:", companies);
