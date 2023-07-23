# Password "swordfish"

1. Import React: Import the `react` module to use React features and JSX.

```jsx
import React from 'react';
```

2. Create the Component: Define a function or class that represents your component. Function components are the simplest way to create a component.

```jsx
// Function Component
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};
```

3. Use JSX: Write JSX code within the component's return statement to describe the component's UI.

4. Export the Component: Make the component available for use in other parts of your application.

```jsx
export default MyComponent;
```

Putting it all together:

```jsx
// Import React
import React from 'react';

// Create the Component
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// Export the Component
export default MyComponent;
```

These rules outline the basic steps to create a simple React component. The example provided is a functional component that renders a basic header with the text "Hello, World!".
