# SEARCH TYPES

You have learned about getByText where Text is one of several search types. While Text is often the common way to select elements with React Testing Library, another strong is Role with getByRole.

The getByRole function is usually used to retrieve elements by aria-label attributes. However, there are also implicit roles on HTML elements -- like button for a button element. Thus you can select elements not only by visible text, but also by their accessibility role with React Testing Library. A neat feature of getByRole is that it suggests roles if you provide a role that's not available. Both, getByText and getByRole are RTL's most widely used search functions.

The neat thing about getByRole: it shows all the selectable roles if you provide a role that isn't available in the rendered component's HTML:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.getByRole('');
  });
});
```

This means that the previous test outputs the following to the command line after running it:

```txt
Unable to find an accessible element with the role ""

Here are the accessible roles:

document:

Name "":
<body />

--------------------------------------------------
textbox:

Name "Search:":
<input
  id="search"
  type="text"
  value=""
/>

--------------------------------------------------
```

Because of the implicit roles of our HTML elements, we have at least a text box (here `<input />`) element that we can retrieve with this search type:

```js
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

So quite often it isn't necessary to assign aria roles to HTML elements explicitly for the sake of testing, because the DOM already has implicit roles attached to HTML elements. This is what makes getByRole a strong contender to the getByText search function from React Testing Library.

There are other search types which are more element specific:

LabelText: getByLabelText: `<label for="search" />`
PlaceholderText: getByPlaceholderText: `<input placeholder="Search" />`
AltText: getByAltText: `<img alt="profile" />`
DisplayValue: getByDisplayValue: `<input value="JavaScript" />`
And there is the last resort search type TestId with getByTestId where one needs to assign data-testid attributes in the source code's HTML. After all, getByText and getByRole should be your go-to search types to select elements from your rendered React components with React Testing Library.

getByText
getByRole
getByLabelText
getByPlaceholderText
getByAltText
getByDisplayValue
Again, these were all the different search types available in RTL.
