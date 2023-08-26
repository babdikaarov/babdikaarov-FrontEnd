# SELECTING ELEMENTS

After you have rendered your React component(s), React Testing Library offers you different search functions to grab elements. These elements are then used for assertions or for user interactions. But before we can do these things, let's learn about how to grab them:

```jsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.getByText('Search:');
  });
});
```

Always use RTL's debug function if you don't really know what's the rendered output of RTL's render function. After you know about the HTML structure, you can start to select elements with RTL's screen object's functions. The selected element can then be used for user interactions or assertions. We will do an assertion that checks whether the element is in the DOM:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
```

Conveniently getByText throws an error by default if the element cannot be found. This is useful for giving you a hint while writing the test that the selected element isn't there in the first place. A few people exploit this behavior to use search functions like getByText as implicit assertion replacement instead of an explicit assertion with expect, because it does not throw the error if the element is there:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
```

The getByText function accepts a string as argument, as we are using it right now, but also a regular expression. Whereas a string argument is used for the exact match, a regular expression can be used for a partial match which is often more convenient:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    // fails
    expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });
});
```

The getByText function is only one of many types of search functions in React Testing Library. Let's see what else is there.
