# installing unit test framework

* part of text from babel doc

## install packages

install nodejs
```bash
npm init
```

## jest

```bash
npm i jest --save-dev

```

## JEST to work with esmodules

Installation
babel-jest is now automatically loaded by Jest and fully integrated. This step is only required if you are using babel-jest to transform TypeScript files.
``````
npm install --save-dev babel-jest
``````
3Usage
In your package.json file make the following changes:

```jsx

{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}

```

For more information see the babel-jest repo.

- Create babel.config.json configuration file

Great! You've configured Babel but you haven't made it actually do anything. Create a babel.config.json config in your project root and enable some presets.

To start, you can use the env preset, which enables transforms for ES2015+

``````bash
npm install @babel/preset-env --save-dev
``````

In order to enable the preset you have to define it in your babel.config.json file, like this:

```jsx
{
  "presets": ["@babel/preset-env"]
}
```

## mocha

```bash
npm i mocha --save-dev
```

- Create .mocharc.yaml in your project root:

```jsx
require:
  - '@babel/register'
```

<details>

<summary>

### Some features may require a polyfill:  (no idea as of now what os polyfill)

</summary>
```bash 
# Polyfills for builtin methods
npm install --save core-js
```

- Add import polyfills before @babel/register.

```jsx
require:
  - 'core-js'
  - '@babel/register'
```

</details>



- Create babel.config.json in your project root:

```jsx
{
  "presets": ["@babel/preset-env"]
}
```

For more information see the babel mocha-examples.


Create babel.config.json configuration file

Great! You've configured Babel but you haven't made it actually do anything. Create a babel.config.json config in your project root and enable some presets.

To start, you can use the env preset, which enables transforms for ES2015+

```bash
npm install @babel/preset-env --save-dev
```

In order to enable the preset you have to define it in your babel.config.json file, like this:

```jsx
{
  "presets": ["@babel/preset-env"]
}
```
- incase if throwing error for module register
```bash
#Error: Cannot find module 'babel-register'
npm install --save-dev @babel/register
```
