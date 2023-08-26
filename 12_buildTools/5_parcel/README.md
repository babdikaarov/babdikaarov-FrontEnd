# Parcel

## getting started

[Official doc](https://parceljs.org/getting-started/webapp/)

```bash
npm i -D parcel
```

## The Serve and Build Commands

```json
// pakcg.json
{
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html --public-url ./"
  }
}
```

In the code block above, the start command bundles and runs our app at the entry point src/index.html, with the bundled assets served from ./dist. Likewise, the build command runs with the same entry point at src/index.html.

If your website files are hosted somewhere other than the root folder (/), the build command will require an additional `--public-url` flag to specify that file path. In the example above, `./` specifies that the site will be served from the working directory, in our case, the `./dist` folder, which Parcel automatically generates when you run the build command.

A convenient feature of Parcel’s built-in dev server is [`hot reloading`](https://parceljs.org/features/development/#hot-reloading). When you run npm run start, you will see the following message:

```bash
Server running at <http://localhost:1234>
```

Try navigating to `<http://localhost:1234>` on your browser and making a small change to your app (like the font size of a heading). You’ll see that Parcel automatically re-bundles and updates your app in the browser without the need for a page refresh!

However, if you’re following along with the provided React app, running either command will produce the following error in the terminal:

```bash
Error: No transformers found for src/sun.svg.
```

## Transformers

Parcel supports out-of-the-box transformers for many kinds of files without the need for additional configuration. These include CSS, TypeScript, JSX, and images.

## Images

Parcel allows you to directly import a variety of image file types to your code using import but they must be converted into URLs, by prepending `'url:'` before the file paths.

In our example React app, we need to edit the import statement for `sun.svg` in Carousel.js to use the url: prefix like below:

```js
// as of recent updates parcel no longer need to use below syntax "url:"
import sun from 'url:./sun.svg';
```

more about image [transformer](https://parceljs.org/recipes/image/) in Parcel

## CSS

When CSS files are imported directly in JavaScript with the import statement, Parcel will automatically gather all referenced CSS files and bundle them into a single CSS file at the exit point.

We import Carousel.css in Carousel.js like below:

```js
import './Carousel.css';
```

Parcel doesn’t need any additional transformer configurations in order to bundle the Carousel.css file.

Putting It All Together
Now that we’ve set up package.json and imported our assets, running the build command should generate a ./dist folder that holds the bundled assets of our project.

Remember that you can preview the bundled app on the dev server by running:

```bash
npm run start
```

Try using Parcel to build your next web project!
