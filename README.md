<p align="center">
  <img
    src="https://raw.githubusercontent.com/jorenrui/cionru/main/assets/img/logo.svg"
    alt="cionru logo"
    width="300"
    height="300"
  />
</p>

# Cionru (WIP)

> A work-in-progress React UI component library that aims to be accessible, responsive, modern and minimal.

[![0.2.1 NPM Version](https://img.shields.io/badge/npm-v0.2.1-orange)](http://npmjs.com/package/cionru)
[![MIT License Status](https://img.shields.io/badge/license-MIT-blue)](https://github.com/jorenrui/cionru/blob/main/LICENSE)

A React UI component library built with EmotionJS.

NOTE: Cionru is like a newborn baby, so currently there's only one component in this library, the button component.

## Installation

Install it using [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):

```bash
# Using NPM
npm install --save cionru

# Using Yarn
yarn add cionru
```

## Usage

### Getting Started

After installing `cionru`, you may now use it like so:

```javascript
import * as React from 'react';
import { Button, KIND, SIZE, COLOR } from 'cionru';

function App() {
  const handleClick = () => {
    alert('click');
  }

  return (
    <div>
      <Button
        size={SIZE.small}
        color={COLOR.accent}
        kind={KIND.primary}
        onClick={handleClick}
      >
        Click Me!
      </Button >
    </div>
  );
}
```

### Theming

#### Theme Customization

Cionru allows theme customization. You may do it by adding a `ThemeProvider` to the root component of your application then supplying it with your own custom theme:

```javascript
import * as React from 'react';
import { ThemeProvider } from 'cionru';
import { theme } from '../path/to/custom/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Components />
    </ThemeProvider>
  );
}
```

#### Default Theme

However, you may also use Cionru's default theme by using either `CionProvider` or `ThemeProvider`.

##### `CionProvider` (preferred way)

To use the default theme, add the `CionProvider` to the root component of your application:

```javascript
import * as React from 'react';
import { CionProvider } from 'cionru';

function App() {
  return (
    <CionProvider>
      <Components />
    </CionProvider>
  );
}
```

##### `ThemeProvider`

To use the default theme, add the `ThemeProvider` to the root component of your application. Then supply it with Cionru's `theme`.

```javascript
import * as React from 'react';
import { ThemeProvider, theme } from 'cionru';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Components />
    </ThemeProvider>
  );
}
```

## Inspirations

### [BaseWeb](https://github.com/uber/baseweb)

BaseWeb is the first React UI component library that I've used. It is an implementation of the Base design. Its modern and clean look makes me love it all the more. Moreover, it uses [styletron](https://styletron.org/). If you're looking a component library to use for your app, you should take a look at this. Also look at their [docs](https://baseweb.design/), the interactive playground is so kwel! 👀

### [Material UI](https://material-ui.com/)

A popular library that is a React implementation of [Material Design](https://material.io/design/), tho of course, you can customize the design/theme it if you want. I also recommend using this 😁

## Changelog

[Changelog](https://github.com/jorenrui/cionru/blob/main/CHANGELOG.md)

## License

MIT © [Joeylene Rivera](https://github.com/jorenrui)
