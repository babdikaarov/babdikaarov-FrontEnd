# SEARCH VARIANTS

In contrast to search types, there exist search variants as well. One of the search variants in React Testing Library is getBy which is used for getByText or getByRole. This is also the search variant which is used by default when testing React components.

Two other search variants are queryBy and findBy; which both can get extended by the same search types that getBy has access to. For example, queryBy with all its search types:

- queryByText
- queryByRole
- queryByLabelText
- queryByPlaceholderText
- queryByAltText
- queryByDisplayValue

And findBy with all its search types:

- findByText
- findByRole
- findByLabelText
- findByPlaceholderText
- findByAltText
- findByDisplayValue

What's the difference between getBy vs queryBy?

The big question in the room: When to use getBy and when to use the other two variants queryBy and findBy. You already know that getBy returns an element or an error. It's a convenient side-effect of getBy that it returns an error, because it makes sure that we as developers notice early that there is something wrong in our test. However, this makes it difficult to check for elements which shouldn't be there:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();

    // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});
```

This doesn't work, because, even though debug output shows that the element with the text "Searches for JavaScript" isn't there, getBy throws an error before we can make the assertion, because it cannot find the element with this text. In order to assert elements which aren't there, we can exchange getBy with queryBy:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});
```

So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy. So what about findBy then?

When to use findBy?

The findBy search variant is used for asynchronous elements which will be there eventually. For a suitable scenario, let's extend our React components with the following feature (which is independent from the search input field): After its initial render, the App component fetches a user from a simulated API. The API returns a JavaScript promise which immediately resolves with a user object, and the component stores the user from the promise in the component's state. The component updates and re-renders; and afterward the conditional rendering should render "Signed in as" after the component update:

```js
const getUser = () => {
  return Promise.resolve({ id: '1', name: 'Robin' });
};

function App() {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

```

If we want to test the component over the stretch of its first render to its second render due to the resolved promise, we have to write an async test, because we have to wait for the promise to resolve asynchronously. In other words, we have to wait for the user to be rendered after the component updates for one time after fetching it:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});
```

After its initial render, we assert that the "Signed in as" text is not there by using the queryBy instead of the getBy search variant. Then we await the new element to be found, and it will be found eventually when the promise resolves and the component re-renders again.

If you don't believe that this actually works, include these two debug functions and verify their outputs on the command line:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug();
  });
});
```

For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. If you assert for a missing element, use queryBy. Otherwise default to getBy.

What about multiple elements?

You have learned about the three search variants getBy, queryBy and findBy; which all can be associated with the search types (e.g. Text, Role, PlaceholderText, DisplayValue). If all of these search functions return only one element, how to assert if there are multiple elements (e.g. a list in a React component). All search variants can be extended with the All word:

- getAllBy
- queryAllBy
- findAllBy

Whereas all of them return an array of elements and can be associated with the search types again.
