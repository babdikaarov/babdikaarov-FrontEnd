# [Webpack](https://webpack.js.org/)

## Webpack Project [`Setup`](https://webpack.js.org/configuration/)

- Set Up package.json which hold [important project metadata](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

```bash
npm init -y
```

- Install Webpack and Webpack CLI

```bash
npm install --save-dev webpack webpack-cli
```

- Make an entry point

The default Webpack entry point is **index.js** in a **src** folder, although this can be [changed](https://webpack.js.org/concepts/entry-points/). If we want to use the default entry point, we should make an **src** folder with an **index.js** inside of it.

- Define the Build Command  

A build command is often defined in the scripts section of package.json for running Webpack. You can find more information on the scripts section [here](<https://docs.npmjs.com/cli/v7/using-npm/scripts>). Using a build command makes the way we build the project independent of what build tools we use. We define the build command like so:

```bash
"scripts": {
  "build": "webpack --watch" # `--watch` is optional it will rebuild if changes accure
}
```

## examples

- Packing One JavaScript File

```js
const greetUser = () => {
  console.log('Hello User!');
}
const askUserStatus = () => {
  console.log('How are you?');
}
greetUser();
askUserStatus();
// this is comment

/* above code will be bundled to below */
console.log("Hello User!"),console.log("How are you?");
```

- Packing Multiple JavaScript Files

```js
//greetUser.js
const greet = (username, firstName) => {
  console.log(`Hello ${username}, or should I call you ${firstName}?`);
}
export {greet};
//myUser.js
const user = {
  username: 'Beepum',
  firstName: 'Gert'
};
export {user};
//index.js
import {greet} from './greetUser.js';
import {user} from './myUser.js';
greet(user.username, user.firstName);

/* above codes will be bundled below as */
(()=>{"use strict";console.log("Hello Beepum, or should I call you Gert?")})();
```

## Creating a Webpack Config

Webpack automatically looks for a configuration file named webpack.config.js. We define Webpack’s settings in an object defined using [the module.exports syntax](https://webpack.js.org/configuration/configuration-languages/).

[check](https://webpack.js.org/configuration/mode/)

```js
//webpack.config.js
module.exports = {
  mode: 'development'
}
```

or

```json
//package.json
 "scripts": {
  "build": "webpack --watch --mode=development"
},
```

## Defining Entry and Exit Points

The entry point allows us to define a path relative to where our webpack.config.js is located.

Unlike the entry point, the exit point requires an absolute path, which is best specified with the path Node module. We set the exit point under the output configuration option like so:

```js
const path = require('path');

module.exports = {
  entry: './application/home.js',
  output: {
    filename: 'fast.js',
    path: path.resolve(__dirname, 'built'),
  },
  // ...
}
```

In the provided Webpack configuration, the value of __dirname is a Node.js global variable that refers to the directory name of the current module. It represents the absolute path of the directory containing the currently executing script.

In the context of your Webpack configuration file, __dirname will resolve to the absolute path of the directory where the configuration file (webpack.config.js) is located. This is useful for specifying paths relative to the location of the configuration file, such as the path option in the output object.

So, in your case, __dirname will point to the directory where your webpack.config.js file is located.

## Viewing Our App with Webpack Dev Server

[Webpack Dev Server configuration](https://github.com/webpack/webpack-dev-server)
[check this also for configuration](https://webpack.js.org/api/webpack-dev-server/)

Use a tool called `webpack-dev-server` to preview our code and update it as we make changes.

We would first install `webpack-dev-server` as a development dependency in a local environment:

```bash
npm install --save-dev webpack-dev-server
```

Embed the JavaScript from our exit point:

```html
<script src="./dist/main.js"></script>
```

To use webpack-dev-server, we’ll add start command to package.json inside of the scripts section.

```json
"build": "webpack --watch",
"start": "webpack serve"
```

The `build` command is going to compile our project as well as update it when we make changes.
The `serve` command is going to serve our build and refresh when the build changes. You would need  a second terminal and run the start command to serve the site.

This is building our project and then serving it to the browser.

## Introduction to Webpack Rules

For documentation check [this](https://webpack.js.org/configuration/module/#modulerules)

Webpack uses rules to know what to do with different file types. Webpack expects an array of rules in a configuration option called module. The syntax looks like:

```js
module.exports = 
{
  module: 
  {
    rules: []
  }
}
```

A rule has a test configuration option defined as a regular expression. If a file matches the regular expression, Webpack will use the rule on that file. For example, if we define test as \.txt$\i, the rule will apply to files ending in `.txt`.

The other part of the rule needs to tell Webpack what to do with files that match the test. That part of the rule varies by file type.

For `.txt` files, the rule inside of rules would look like:

```js

rules: 
[
  {
    test: /\.txt$/i,
    type: 'asset/source'
  }
]
```

Here, [type: 'asset/source'](https://webpack.js.org/guides/asset-modules/) is telling Webpack that `.txt` files are an asset that can be added directly to the source code, not requiring much processing. Once we add a rule for a file type, we can import files of that type into our code. Here’s an example with a .txt file:

```js
import Text from './example.txt';
document.querySelector('h1').innerHTML = Text;
```

## Adding CSS to Our Builds

While we `import .txt` files as assets, other file types often need loaders to get bundled by Webpack. Instead of a type attribute, files that use one or several loaders require a use attribute.

CSS files use two loaders, `css-loader` and `style-loader`.`css-loader` takes the CSS out of a .css file and adds it to the JavaScript code. `style-loader` takes the output of `css-loader` and puts it in a style tag in the HTML. We need both loaders and to apply `css-loader` first. We specify multiple loaders with an array, and Webpack applies them in reverse order.

The rule for CSS files looks like:

```json
{
        test: /\.css$/i,
        use: ['style-loader','css-loader']
}
```

We can add this rule anywhere within our rules array.

In a local environment, we’d also install the loaders as developer dependencies.

```bash
npm install --save-dev style-loader css-loader
```

We can then import CSS files directly into our JavaScript using another form of the import statement:

```js
import './style.css';
import Text from './example.txt';
document.querySelector('h1').innerHTML = Text;
```

When we build and start our preview server, the CSS is applied to the HTML!

## Adding Images to Our Builds

Use type with asset/resource rather than asset/source. asset/resource creates a file in the build and imports it into the code as a URL. You may want to explore more about [asset types.](<https://webpack.js.org/guides/asset-modules/>) The rule above would only match with \*\*\*.png\*\* files, but we could have it handle many image types:

```js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
}
```

When an image rule has been defined in webpack.config.js, we can import images into our JavaScript as if they were code

## Adding Fonts to Our Builds

```json
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource'
}
```

The above rule would support .woff, .woff2, .eot, .ttf, and .otf font files.

Unlike the other resources we’ve seen so far, font files are imported in CSS, not in JavaScript. We use a font in our CSS like so:

```css
@font-face {
  font-family: 'Roboto-Black';
  src: url('../Roboto-Black.ttf');
}

h1 {
  font-family: 'Roboto-Black';
}
```

The url is the location of the font file. We use font-family to define a name for our font that we can use later in the CSS.

When we build the project, we can see our fonts! or you could [bring @fontface into you js file using mdn doc](https://developer.mozilla.org/en-US/docs/Web/API/FontFace/FontFace)
