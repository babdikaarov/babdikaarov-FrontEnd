# Browser Compatibility and Modern JavaScript Syntax

What JavaScript syntax is new? What is safe to use for any browser? How do we find this out?

These questions all have to do with browser compatibility, the idea that the browsers have to update to use the latest JavaScript features, some browsers haven’t done so yet, and some users haven’t updated their browser to the latest version. When we design a site for browser compatibility, we design our site to work correctly for as many different browsers and browser versions as possible. When thinking about browser compatibility, it is helpful to have a resource that will tell us which language features are supported by which browser versions.

Tools such as [caniuse.com](caniuse.com) provide helpful browser compatibility information. On that site, you can search for language features and see:

- The browser versions that support those features
- Which browser versions don’t support those features
- What percentage of internet users are using these versions

## Introduction to Transpilation

For example, ES6 added string interpolation, allowing variables and expressions to be incorporated into string content:

```js
`You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```

The above line can be easily converted to the old syntax by using concatenation instead:

```js
'You can make carbonara with ' +
  pasta +
  ',' +
  meat +
  ', and a sauce made with ' +
  sauce +
  '.';
```

In order to make our new JavaScript syntax work on old browsers, we need to apply these kinds of transformations. Luckily, tools exist that can automate this process! While compilation translates code from one language to another, transpilation is a term for translating code to different formats of the same language. We can use a transpiler to convert our modern code into a more compatible version.

Before we publish our code online, we take our source code and transpile it. This produces a set of output files that use more browser-compatible syntax. We publish the output files to our web server and can continue to develop our source code with any modern features we want to write!

[Babel](https://babeljs.io/) is a popular transpiler for JavaScript that can be integrated into your projects!

## Targeting Different Browsers

The [`.browserslistrc`](https://github.com/browserslist/browserslist) file is used to specify the list of browsers and their versions that your project or application should support. This configuration file helps tools like Autoprefixer and Babel determine which browser versions need to be considered when applying compatibility fixes and transpiling modern JavaScript features.

Here's a very brief explanation of how to use the `.browserslistrc` file:

1. **Create the File**: In the root directory of your project, create a file named `.browserslistrc`.

2. **Specify Browser Targets**: In the `.browserslistrc` file, list the browser versions you want to target. You can use version ranges and keywords like `last 2 versions`, `> 1%`, and `not dead`. For example:

   ```plaintext
   last 2 versions
   > 1%
   not dead
   ```

3. **Use with Tools**: Tools like Autoprefixer and Babel will automatically read the `.browserslistrc` file to determine which browsers to target when applying CSS prefixes or transpiling JavaScript.

For instance, if you're using Autoprefixer with your CSS, it will add vendor prefixes based on the browser versions specified in `.browserslistrc`. Similarly, Babel will transpile JavaScript code based on the specified browser targets.

Keep in mind that maintaining an accurate `.browserslistrc` file ensures that your project remains compatible with a wide range of browsers while optimizing for performance and modern standards.

## Review

Changes to JavaScript features over time can result in your modern website not working for users with older browsers, this issue is called browser compatibility.
Modern JavaScript can be transpiled into older syntax, making it run on older browser versions.
A popular Node package for transpiling your project automatically is called Babel.
Babel is configured to target a list of browsers or a percentage of internet users via a .browserslistrc file.
Babel can be set up by:

Initializing your project with npm init
Installing the necessary libraries as developer dependencies:
@babel/cli
@babel/preset-env
Adding a build command in package.json specifying your source code directory and the output location.
Using Babel and transpilation, you can make your website more consistent across all of the ways users access the internet!
