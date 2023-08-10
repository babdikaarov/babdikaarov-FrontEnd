After the setup in Jest or Vitest, you will learn how to render a React component in a test with React Testing Library. We will use the following function component called App component from a src/App.js file:

```js
import * as React from 'react';

const title = 'Hello React';

function App() {
  return <div>{title}</div>;
}
```

export default App;

And test it in a src/App.test.js file:

```js
import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});
```

RTL's render function takes any JSX as argument to render it as output. Afterward, you should have access to the React component in your test. To convince yourself that it's there, you can use RTL's debug function:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});
```

After running your test on the command line, you should see the HTML output of your App component. Whenever you write a test for a component with React Testing library, you can render the component first and then debug what's visible for RTL's renderer in the test. This way, you can write your test with more confidence:

```js
<body>
  <div>
    <div>
      Hello React
    </div>
  </div>
</body>
```

The great thing about it, React Testing Library doesn't care much about the actual components. Let's take the following React components which utilize different React features (useState, event handler, props) and concepts (controlled component):

```js
import * as React from 'react';

function App() {
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
```

If you start the test of your App component again, you should see the following output from the debug function:

```js
<body>
  <div>
    <div>
      <div>
        <label
          for="search"
        >
          Search:
        </label>
        <input
          id="search"
          type="text"
          value=""
        />
      </div>
      <p>
        Searches for
        ...
      </p>
    </div>
  </div>
</body>
```

React Testing Library is used to interact with your React components like a human being. What a human being sees is just rendered HTML from your React components, so that's why you see this HTML structure as output rather than two individual React components.
