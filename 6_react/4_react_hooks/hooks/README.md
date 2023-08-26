# Passing Thoughts

What if you could post something and know it wouldn’t live forever? In this project, we’ll build a place for our passing thoughts. Once you add a short thought, it’ll disappear after just 15 seconds. Build an application taking this as base for your project.

Here are some general rules and guidelines for using React Hooks, specifically `useState()` and `useEffect()`:

## Rules for Using `useState()` Hook:

1. Import `useState()`:
   - Import the `useState()` function from the 'react' module at the beginning of your component file.

```jsx
import React, { useState } from 'react';
```

2. Initialize State:
   - Use the `useState()` hook to initialize state variables in functional components. The `useState()` hook returns an array with the state variable and a function to update that variable.

```jsx
const [count, setCount] = useState(0);
```

3. Use State Values:
   - Access the state variable (`count` in this example) to read its current value.

```jsx
console.log(count); // Output: 0
```

4. Update State:
   - Use the state update function (`setCount` in this example) to change the state value. Do not modify the state directly.

```jsx
setCount(count + 1);
```

5. State Variable Naming:
   - Use descriptive and meaningful names for state variables to improve code readability.

6. State Initialization:
   - You can provide an initial value when calling `useState()`. The initial value can be a primitive type, an object, or an array.

```jsx
const [user, setUser] = useState({ name: 'John', age: 30 });
const [todos, setTodos] = useState([]);
```

## Rules for Using `useEffect()` Hook:

1. Import `useEffect()`:
   - Import the `useEffect()` function from the 'react' module at the beginning of your component file.

```jsx
import React, { useEffect } from 'react';
```

2. Effect Callback:
   - Pass a callback function as the first argument to the `useEffect()` hook. This callback will run after each render.

```jsx
useEffect(() => {
  // Code to be executed after each render
});
```

3. Dependencies Array:
   - Optionally, provide a dependencies array as the second argument to the `useEffect()` hook. It specifies values that the effect depends on. If any of the dependencies change, the effect will run again.

```jsx
useEffect(() => {
  // Code to be executed after each render
}, [dependency1, dependency2]);
```

4. Cleanup Function:
   - You can return a cleanup function from the effect callback. It will run before the component is unmounted or before the next effect runs.

```jsx
useEffect(() => {
  // Code to be executed after each render

  return () => {
    // Cleanup code (optional)
  };
});
```

5. Using `useEffect()` with No Dependencies:
   - If the `useEffect()` has an empty dependencies array, the effect will run only once, after the initial render.

```jsx
useEffect(() => {
  // Code to be executed only once, after the initial render
}, []);
```

6. Avoid Infinite Loops:
   - Be careful not to create infinite loops by accidentally updating the state inside the effect without specifying the correct dependencies array.

These are some general rules and guidelines to follow when using React Hooks like `useState()` and `useEffect()`. Adhering to these best practices will help you write clean and maintainable code in your React components.
