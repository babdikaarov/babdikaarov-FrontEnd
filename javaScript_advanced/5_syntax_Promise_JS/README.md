# Promise syntax 

- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
- Promises can be in one of three states: pending, resolved, or rejected.
- A promise is settled if it is either resolved or rejected.
- We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
- setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
- We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
- We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
- To use promise composition correctly, we have to remember to return promises constructed within a .then().
- We should chain multiple promises rather than nesting them.
- To take advantage of concurrency, we can use Promise.all().

## async/await sugar syntax

- async...await is syntactic sugar built on native JavaScript promises and generators.
- We declare an async function with the keyword async.
- Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
- await returns the resolved value of the awaited promise.
- We can write multiple await statements to produce code that reads like synchronous code.
- We use try...catch statements within our async functions for error handling.
- We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
