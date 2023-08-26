# ASYNCHRONOUS / ASYNC

We have seen before how we can use async await when testing with React Testing Library in order to wait for certain elements to appear with the findBy search variant. Now we will go through a small example for testing data fetching in React. Let's take the following React component which uses axios for fetching data from a remote API:

```js
import * as React from 'react';
import axios from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

function App() {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

On button click, we are fetching a list of stories from the Hacker News API. If everything goes right, we will see the list of stories rendered as list in React. If something goes wrong, we will see an error. The test for the App component would look like the following:

```js
import * as React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// Jest
// jest.mock('axios');
// Vitest
vi.mock('axios');

describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });
});
```

Before we render the App component, we make sure that the API gets mocked. In our case, axios' return value from its get method gets mocked. However, if you are using another library or the browser's native fetch API for data fetching, you would have to mock these.

After mocking the API and rendering the component, we use the userEvent API to click to the button which leads us to the API request. Since the request is asynchronous, we have to wait for the component to update. As before, we are using RTL's findBy search variant to wait for element(s) which appear eventually.

```js
import * as React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// Jest
// jest.mock('axios');
// Vitest
vi.mock('axios');

describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    ...
  });

  it('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });
});
```

This last test shows you how to test an API request from your React component that fails. Instead of mocking the API with a promise that resolves successfully, we reject the promise with an error. After rendering the component and clicking the button, we wait for the error message to show up.

```js
import * as React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// Jest
// jest.mock('axios');
// Vitest
vi.mock('axios');

describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    waitFor(() => promise);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('fetches stories from an API and fails', async () => {
    ...
  });
});
```

For the sake of completeness, this last test shows you how to await a promise in a more explicit way which also works if you don't want to wait for a HTML to show up.

After all, it's not too difficult to test async behavior in React with React Testing Library. You have to use Vitest (or Jest) for mocking external modules (here remote API), and then just await data or re-renders of your React components in your tests.
