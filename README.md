# react-native-svg-icon

A simple, but flexible SVG icon component for React Native. [Read the introductory blog post](https://medium.com/@stowball/creating-an-svg-icon-system-in-react-native-fa0964ea5fe4).

[![npm version](https://badge.fury.io/js/react-native-svg-icon.svg)](https://badge.fury.io/js/react-native-svg-icon)
[![Build Status](https://travis-ci.org/stowball/react-native-svg-icon.svg?branch=master)](https://travis-ci.org/stowball/react-native-svg-icon)

## Installation

1. Ensure sure you've installed [`react-native-svg`](https://github.com/react-native-community/react-native-svg)
2. `npm i react-native-svg-icon --save`

### NOTICE

* 0.8.0 - only supports [react-native-svg](https://github.com/react-native-community/react-native-svg) >= 5.3.0
* 0.7.0 - only supports [react-native-svg](https://github.com/react-native-community/react-native-svg) >= 5.3.0
* 0.6.0 - only supports [react-native-svg](https://github.com/react-native-community/react-native-svg) 4.5.0
* 0.5.0 - only supports [react-native-svg](https://github.com/react-native-community/react-native-svg) 4.4.x

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
            viewBox: '0 0 50 50',
        },
    }
    ```

    To conform to React/JSX standards, we need to convert SVG elements to begin with a capital letter, and convert hyphenated attributes to camelCase. For example. `<path>` becomes `<Path>` and `stop-color` becomes `stopColor`.

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
        <Fragment>
          <Icon name="SortArrows" height="20" width="20" />
          <Icon name="Tick" fill="#0f0" viewBox="0 0 200 200" />
          <Icon name="Star" fill="transparent" stroke="#fff" strokeWidth="5" />
        </Fragment>
    );
}
```

**Pro Tip**: An SVG name suffixed with `'.ios'` or `'.android'` will automatically be rendered on the appropriate platform when passing the base name as the `name` prop.

### Props

#### Default

```js
{
    fill: '#000',
    fillRule: 'evenodd',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100',
}
```

These can be overridden in your `<Icon />`'s `defaultProps` or an a per instance basis.

#### Types

```js
{
    defaultViewBox: string,
    fill: string.isRequired,
    fillRule: string,
    height: oneOfType([number, string]).isRequired,
    name: string.isRequired,
    stroke: string,
    strokeWidth: oneOfType([number, string]),
    style: oneOfType([array, object]),
    svgs: object.isRequired,
    width: oneOfType([number, string]).isRequired,
    viewBox: string,
}
```

The specificity order for `viewBox` is:

1. `<Icon viewBox />`
2. `{ Name: { viewBox: '' } }`
3. `Icon.defaultProps.defaultViewBox`
4. `SvgIcon.defaultProps.viewBox`

---

Copyright (c) 2018 [Matt Stow](http://mattstow.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/stowball/react-native-svg-icon/blob/master/LICENSE) for details)*
