# Emotion intro

## instalation

```bash
npm i @emotion/react # to use css prop
npm i @emotion/styled # to use styled components
```

```js
/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
```

for TS: [check this out](https://emotion.sh/docs/typescript)

good to go now .

## CSS prop

- `Object Styles`

```js
<main
  css={{
    color: "#03045e",
  }}
>
  ...
</main>
```

- `String Styles`

[it uses template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
<img
  src={logo}
  alt="logo"
  css={css`
    display: absolute;
    margin-top: 15px;
    margin-left: 15px;
    height: 100px;
    width: 100px;
  `}
/>
```

## `Styled Components`

```js
const CardWrapper = styled.div`
  width: 250px;
  height: 325px;
  background: #fff;
  border-radius: 15px;
  padding-bottom: 5px;
  @media (max-width: 900px) {
    width: 400px;
  }
`;
const myApp = () => {

   return (
      <CardWrapper >
              <img src={hotel.src} alt={hotel.alt} />
              <div>
                <h2>{hotel.title}</h2>
                <h3>{hotel.description}</h3>
              </div>
              <div>
                <button>Details</button>
                <button>Book</button>
              </div>
            </CardWrapper>
          );
    }
```

## [`Composition`](https://emotion.sh/docs/composition)

```js
const Button = styled.button`
  width: 100%;
  margin-right: 10px;
  margin-top: 4px;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #03045e;
  color: #caf0f8;
`;

export const SecondaryButton = styled(Button)`
  background-color: #caf0f8;
  color: #03045e;
`;

/* or u can use it in css prop */

import { css } from '@emotion/react'

const base = css`
  color: hotpink;
`

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
)
```

## [`Theming`](https://emotion.sh/docs/theming)

Theming is included in the `@emotion/react` package.

Add `ThemeProvider` to the top level of your app and access the theme with `props.theme` in a styled component or provide a function that accepts the theme as the `css prop`.

- `css prop`

```js
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

render(
  <ThemeProvider theme={theme}>
    <div css={theme => ({ color: theme.colors.primary })}>some other text</div>
  </ThemeProvider>
)
```

- `styled component`

```js
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`

render(
  <ThemeProvider theme={theme}>
    <SomeText>some text</SomeText>
  </ThemeProvider>
)
```

- `useTheme hook`

```js
import { ThemeProvider, useTheme } from '@emotion/react'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

function SomeText(props) {
  const theme = useTheme()
  return <div css={{ color: theme.colors.primary }} {...props} />
}

render(
  <ThemeProvider theme={theme}>
    <SomeText>some text</SomeText>
  </ThemeProvider>
)
```

## [`Keyframes / Animation`](https://emotion.sh/docs/keyframes)

```js
import { css, keyframes } from '@emotion/react'

const bounce = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-40px,0);
  }
`

render(
  <div
    css={css`
      animation: ${bounce} 1s ease infinite;
    `}
  >
    some bouncing text!
  </div>
)
```
