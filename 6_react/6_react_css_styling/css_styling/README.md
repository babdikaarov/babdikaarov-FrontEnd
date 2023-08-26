Let's demonstrate styling in React using inline styles and other methods such as CSS Modules and CSS-in-JS with styled-components.

1. Inline Styles:

In React, you can apply inline styles by passing a JavaScript object with style properties as a prop to the `style` attribute of the component.

```jsx
import React from "react";

const InlineStyleExample = () => {
  const containerStyle = {
    color: "blue",
    fontSize: "18px",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  };

  return <div style={containerStyle}>This is an example with inline styles.</div>;
};

export default InlineStyleExample;
```

2. CSS Modules:

CSS Modules allow you to write CSS styles for specific components and avoid class name clashes by generating unique class names for each component.

Create a CSS file with your styles:

```css
/* styles.module.css */

.container {
  color: blue;
  font-size: 18px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
```

Then, import the CSS file and use the generated class name in your component:

```jsx
import React from "react";
import styles from "./styles.module.css";

const CSSModuleExample = () => {
  return <div className={styles.container}>This is an example with CSS Modules.</div>;
};

export default CSSModuleExample;
```

3. CSS-in-JS with styled-components:

Styled-components is a popular CSS-in-JS library that allows you to write CSS directly inside your components using template literals.

```bash
npm install styled-components
```

Then, use styled-components to define styles within your component:

```jsx
import React from "react";
import styled from "styled-components";

const StyledComponentExample = () => {
  const Container = styled.div`
    color: blue;
    font-size: 18px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
  `;

  return <Container>This is an example with styled-components.</Container>;
};

export default StyledComponentExample;
```

Each method has its benefits and use cases. Inline styles are simple and straightforward, while CSS Modules and styled-components provide more scoped and component-based styling. Choose the method that best fits your project's requirements and development preferences.