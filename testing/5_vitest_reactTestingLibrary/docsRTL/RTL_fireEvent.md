# FIRE EVENT

So far, we've only tested whether an element rendered (or not) in a React component with getBy (and queryBy) and whether the re-rendered React component has a desired element (findBy). What about actual user interactions? If a user types into an input field, the component may re-render (like in our example), and the new value should be displayed (or used somewhere).

We can use RTL's fireEvent and waitFor functions to simulate interactions of an end user. Let's see how this works for our input field:

```js
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
  });
});
```

The fireEvent function takes an element (here the input field by textbox role) and an event (here an event which has the value "JavaScript"). The debug function's output should show the HTML structure before and after the event; and you should see that the new value of the input field (here "JavaScript") gets rendered appropriately.

Important: If your component is involved in an asynchronous task, like our App component because it fetches a user, you may see the following warning showing up: "Warning: An update to App inside a test was not wrapped in act(...).". For us, this means there is some asynchronous task happening and we need to make sure that our components handles it. Often this can be done with RTL's act function, but this time we just need to wait for the user to resolve:

```js
describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
  });
});
```

Afterward, we can make the assertions from before and after the event:

```js
describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});
```

As alternative, we can also literally wait for an asynchronous update to happen with React Testing Library's waitFor function:

```js
import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    waitFor(() =>
      expect(
        screen.getByText(/Searches for JavaScript/)
      ).toBeInTheDocument()
    );
  });
});
```

In this section, we have used the queryBy search variant to check whether the element isn't there before the event and the getBy search variant to check whether it's there after the event. Sometimes you will see people use queryBy for the latter assertion too, because it can be used similar to getBy when it comes to elements which should be there.

That's it. Aside from the asynchronous behavior that we need to address in the test, RTL's fireEvent function can be used straightforward and assertions can be made afterward.

## User Event

```bash
#in order to use additional package needs to be installed
npm i -D @testing-library/user-event
```

React Testing Library comes with an extended user event library which builds up on top of the fireEvent API. Previously we have used fireEvent to trigger user interactions; this time we will use userEvent as replacement, because the userEvent API mimics the actual browser behavior more closely than the fireEvent API. For example, a fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});
```

Whenever possible, use userEvent over fireEvent when using React Testing Library. At the time of writing this, userEvent doesn't include all the features of fireEvent, however, this may change in the future.
