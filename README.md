# React Native Simple Styles [![npm version](http://img.shields.io/npm/v/react-native-simple-styles.svg?style=flat)](https://npmjs.org/package/react-native-simple-styles "View this project on npm") [![npm version](http://img.shields.io/npm/l/react-native-simple-styles.svg?style=flat)](https://npmjs.org/package/react-native-simple-styles "View this project on npm")


Not everyone wants to write scoped CSS. This package allows you to write CSS that:

-   All lives in the one file;
-   Is applied using a classNames prop (similar to React);
-   Is compatible with an atomic CSS approach;
-   Doesn't need to be repeated for every component;
-   Doesn't require you to import and use `StyleSheet.create()` in every component

## Usage

Write your CSS in a single `style.js` file and also import the `react-native-simple-styles` npm package here. You should also make sure to export the `react-native-simple-styles` package from here using whatever name you like (this will make your life easier with importing later!). Use standard CSS-in-JS object format. You can organise your CSS however you like. E.g.

```
// styles.js

import reactNativeSimpleStyles from "react-native-simple-styles";

const headings = {
	h1: { fontSize: 56 },
	h2: { fontSize: 36 },
	h3: { fontSize: 24 },
}

const textUtilities = {
	uppercase: { textTransform: 'uppercase'},
	italic: { fontStyles: 'italic'}
}

export const styles = {
	centerAll: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	hScreen: {
		height: '100vh'
	}
	...headings,
	...textUtilities,
}

export const simpleStyles = reactNativeSimpleStyles;
```

In your components pass in your stylesheet to the `react-native-simple-styles` function you exported from `style.js`.  All of the [standard React Native core components](https://reactnative.dev/docs/components-and-apis) will be returned that you can use as normal. The only difference is that they now accept a `className` prop that you can pass your classNames to.

```
import { styles, simpleStyles) from "./styles/style";
const { View, Text } = simpleStyles(styles);

const Example = () => (
	<View className="centerAll hScreen">
		<Text className="h1 uppercase italic">
			Just like native CSS (almost!)
		</Text>
	</View>
);

export default Example;
```

You can also mix and match classNames and inline styles and it will work fine.

```
<Text className='uppercase' style={{ fontWeight: bold }> This works fine too. </Text>
```

## Under the hood

Under the hood reactNativeSimpleStyles is simply a higher order compnent that wraps the regular react native components.

This HOC uses React Native's `StyleSheet` component along with your stylesheet to find your styles and abstracts away the manual process of creating a `StyleSheet` for each component. Since the `StyleSheet` component is used under the hood you still get the same performance benefits (as compared to simply using inline styles, for example)

## Disclaimers & Contributions

Full disclosure that I am **not** primarily a React Native developer and I may have overlooked certain issues that may exist with this library.

If you would like to enhance this library, fix bugs, add typescript support, add tests, or otherwise contribute in any other way you are more than welcome to raise an issue or make a PR.
