# What testing means?

In tech jargon testing means checking that our code meets some expectations. For example: a function called "transformer" should returns the expected output given some input.

There are many types of testing and soon you'll be overwhelmed by the terminology, but long story short tests fall into three main categories:

- unit testing
- integration testing
- UI testing

## First things first

- import the function to test
- give an input to the function
- define what to expect as the output
- check if the function produces the expected output

## ECMA modules

use babel compiler to local development package

jest comes with preset babel package.
in order to enable it  add in package.json

```json
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },

// create babel.config.json at root directory

{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                }
            }
        ]
    ]
}

```

```bash
# install dependency and you are good to go
npm install @babel/preset-env --save-dev
```

## Specifications and test-driven development

Being a test-savvy JavaScript developer you want to follow test-driven development, a discipline which imposes to write a failing test before starting to code.

By default, Jest expects to find test files in a folder called __tests__ in your project folder. Create the new folder:

mkdir __tests__
Next up create a new file called filterByTerm.spec.js inside __tests__. You may wonder why the extension includes .spec.. It is a convention borrowed from Ruby for marking the file as a specification for a given functionality.

## Test structure, and a first failing test

```js
describe("Filter function", () => {
  // test stuff
});
```

Our first friend is describe, a Jest method for containing one or more related tests

another function called test which is the actual test block:

```js
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    // actual test
  });
});
```
