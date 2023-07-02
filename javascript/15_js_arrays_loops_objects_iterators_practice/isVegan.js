// Write your code here:
const isTheDinnerVegan = (arr) => arr.every(x => x.source === 'plant') 


// Feel free to comment out the code below to test your function

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(meal))
console.log(isTheDinnerVegan(dinner))
// Should print false
