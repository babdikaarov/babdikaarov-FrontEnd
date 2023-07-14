# JavaScript Practice: Arrays, Loops, Objects, Iterators

<details>
<summary><h2>reverseArray()</h2></summary>
Instructions:

- Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

</details>

<details>
<summary><h2>greetAliens()</h2></summary>
Instructions:

Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
The greeting should take the following format:

- “Oh powerful [stringElement], we humans offer our unconditional surrender!”

</details>

<details>
<summary><h2>convertToBaby()</h2></summary>
Instructions:

- Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

</details>
<details>
<summary><h2>smallestPowerOfTwo()</h2></summary>
Instructions:

We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

It's not doing what we want. Please fix the code.
</details>
<details>
<summary><h2>declineEverything()</h2></summary>
Instructions:

- Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function by passing in the veggies array or by making your own array!

<summary><h2>acceptEverything()</h2></summary>

- Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

</details>

<details>
<summary><h2>squareNums()</h2></summary>
Instructions:

- Write a function squareNums() that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
</details>
<details>
<summary><h2>shoutGreetings()</h2></summary>
Instructions:

- Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end. For example, 'heya' should become 'HEYA!'.
</details>

<details>
<summary><h2>sortYears()</h2></summary>
Instructions:

- Write a function sortYears() that takes in an array of years and, using the built-in .sort() method, returns that array with the years sorted in descending order.
</details>

<details>
<summary><h2>justCoolStuff()</h2></summary>
Instructions:

- Write a function justCoolStuff() that takes in two arrays of strings and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
</details>

<details>
<summary><h2>isTheDinnerVegan()</h2></summary>
Instructions:

- Write a function isTheDinnerVegan() that takes in an array of food objects in the format {name: 'cabbage', source: 'plant'} and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
For example:

```js
const meal = [
  {name: 'arugula', source: 'plant'},
  {name: 'tomatoes', source: 'plant'},
  {name: 'lemon', source: 'plant'},
  {name: 'olive oil', source: 'plant'}
];

isTheDinnerVegan(meal); // Should return true
```

</details>

<details>
<summary><h2>sortSpeciesByTeeth()</h2></summary>
Instructions:

- Write a function sortSpeciesByTeeth() that takes in an array of species objects in the following format:

```js

{speciesName: 'shark', numTeeth: 50}
```

The array contains multiple species objects.

Sort the array in ascending order based on the average number of teeth that each species possesses (numTeeth property).

You can use either a named comparison function or an anonymous function as an argument to the .sort() method.

</details>


<details>
<summary><h2>findMyKeys()</h2></summary>
Instructions:

- Write a function findMyKeys() that takes in an array of strings.

- The array may or may not contain the string 'keys'.

- If the 'keys' are present in the array, your function should return the index at which they can be found.

- If the 'keys' are not present in the array, your function should return -1.

```js
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
```
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

</details>

<details>
<summary><h2>dogFactory()</h2></summary>
Instructions:

- Write a function dogFactory().

- It should have 3 parameters: name, breed, and weight (in that order).

- Expect name and breed to be strings.

- Expect weight to be a number.

- Return an object.

Have each of those parameters as keys on the returned object with the values of the arguments that were passed in.
```js
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
```

- Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

- Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

</details>

To view the implementation and test cases for the reverseArray() function, you can click on the header to expand and collapse the section.

