# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## In this unit I will be exploring the vitest + react testing library with examples provided - [on this article](https://www.robinwieruch.de/vitest-react-testing-library/) and [this](https://www.robinwieruch.de/react-testing-library/)

## Setup vitest I had used vite to create react application for testing

```bash
npm i vitest -D
```

## Writing vitest test suit

```js
// explicitly import needed modules from vitest.

import { describe, it, expect } from 'vitest';

// it appears vitest covers most features as jest.

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

```

## Coverage setup

[instruction](https://vitest.dev/guide/coverage.html)

## react testing library setup

- enable HTML in vitest with jsdom

```bash

npm i jsdom -D

```

- add below to vite.cnfig.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // include <=
  },
});
```

- include RTL

```bash
npm i @testing-library/react @testing-library/jest-dom -D
```

- add test/setup.js file

```js

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
```

- And last, include this new test setup file in Vite's configuration file. In addition, make all imports from Vitest global, so that you don't need to perform these imports (e.g. expect) in each file manually anymore:

```js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```

- now render React component in Vitest

```js
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
```
