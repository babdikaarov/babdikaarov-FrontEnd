
1. JSX Expression in curly braces: To include JavaScript expressions or variables inside JSX, wrap them in curly braces `{}`. For example: `<div>{someVariable}</div>`.

2. One Root Element: JSX should have a single root element. This means that all JSX elements should be wrapped inside a single parent element. For example:

```jsx
// Correct:
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>

// Incorrect:
<h1>Hello</h1>
<p>World</p>
```

3. Self-Closing Tags: For components or elements without children, use self-closing tags. For example: `<img src="..." alt="..." />`.

4. Class vs ClassName: Use `className` instead of `class` when adding CSS classes to JSX elements. The `class` keyword is reserved in JavaScript. For example:

```jsx
// Correct:
<div className="my-class">Content</div>

// Incorrect:
<div class="my-class">Content</div>
```

5. CamelCase for Event Handlers: Event handler attributes should be in camelCase. For example: `onClick`, `onChange`, `onSubmit`, etc.

6. Inline Styles: To apply inline styles, use the `style` attribute with an object containing key-value pairs. Style property names should be in camelCase. For example:

```jsx
<div style={{ color: 'red', fontSize: '16px' }}>Styled Text</div>
```

7. Comments: To add comments inside JSX, use curly braces and `/* ... */`. For example:

```jsx
<div>
  {/* This is a comment */}
  <p>Content</p>
</div>
```

8. HTML Entities: Use HTML entities for special characters. For example, use `&nbsp;` for a non-breaking space and `&copy;` for the copyright symbol.

9. Import React: In files that use JSX, you need to import React. For example:

```jsx
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};
```

10. Single Expression or Variable: A JSX element can only have a single expression or variable as its content. If you need to render multiple elements or expressions, wrap them in a parent element.
