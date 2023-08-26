# CALLBACK HANDLERS

Sometimes you will test React components in isolation as unit tests. Often these components will not have any side-effects or state, but only input (props) and output (JSX, callback handlers). We have already seen how we can test the rendered JSX given a component and props. Now we will test callback handlers for this Search component:

```js
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

export { Search };
```

All the rendering and asserting happens as before. However, this time we are using a utility from Vitest (or Jest) to mock the onChange function which is passed to the component. Then, after triggering the user interaction on the input field, we can assert that the onChange callback function has been called:

```js
describe('Search', () => {
  it('calls the onChange callback handler', () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
```

Here again, we can see how userEvent matches the user behavior in the browser more closely as fireEvent. While fireEvent executes the change event by only calling the callback function once, userEvent triggers it for every key stroke:

```js
describe('Search', () => {
  it('calls the onChange callback handler', async () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
```

Anyway, React Testing Library encourages you to test your React components not too much in isolation, but in integration (integration test) with other components. Only this way you can actually test whether state changes were applied in the DOM and whether side-effects took effect.
