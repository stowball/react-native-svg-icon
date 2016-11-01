# react-native-svg-icon

A simple, but flexible SVG icon component for React Native. [Read the introductory blog post](https://medium.com/@stowball/creating-an-svg-icon-system-in-react-native-fa0964ea5fe4).

[![npm version](https://badge.fury.io/js/react-native-svg-icon.svg)](https://badge.fury.io/js/react-native-svg-icon)
[![Build Status](https://travis-ci.org/stowball/react-native-svg-icon.svg?branch=master)](https://travis-ci.org/stowball/react-accessible-tabs)

## Installation

1. Ensure sure you've installed [`react-native-svg`](https://github.com/react-native-community/react-native-svg)
2. `npm i react-native-svg-icon --save`

## Setup

1. Create an object of your SVG icons

    ```js
    import React from 'react';
    import { G, Path } from 'react-native-svg';

    // Each nameValuePair can be:
    // * Name: <Svg />; or
    // * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

    export default {
        SortArrows: <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G>,
        Tick: {
            svg: <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z"/>,
            viewBox: '0 0 50 50'
        }
    }
    ```

2. Create an `<Icon />` component as a bridge between react-native-svg-icon's `<SvgIcon />` which `import`s the above SVGs

    ```js
    import React from 'react';
    import SvgIcon from 'react-native-svg-icon';
    import svgs from './assets/svgs';

    const Icon = (props) => <SvgIcon {...props} svgs={svgs} />;

    export default Icon;
    ```

## Usage

Use your `<Icon />` in your views.

```js
import Icon from './components/Icon';

// Inside some view component
render() {
    return (
        <Icon name="SortArrows" height="20" width="20" />
        <Icon name="Tick" viewBox="0 0 200 200" />
    );
}
```

### Props

#### Required

```js
{
    name: <string>
}
```

#### Default

```js
{
    fill: '#000',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100'
}
```

These can be overridden in your `<Icon />`'s `defaultProps` or an a per instance basis.

The specificity order for `viewBox` is:

1. `<Icon viewBox />`
2. `Icon.defaultProps.viewBox`
3. `{ Name: { viewBox: '' } }`
4. `SvgIcon.defaultProps.viewBox`

---

Copyright (c) 2016 [Matt Stow](http://mattstow.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/stowball/react-native-svg-icon/blob/master/LICENSE) for details)*
