# Changelog

> **Tags:**
>
> -   :boom: [Breaking Change]
> -   :rocket: [New Feature]
> -   :bug: [Bug Fix]
> -   :memo: [Documentation]
> -   :house: [Internal]
> -   :nail_care: [Polish]

## 1.3.19

#### :rocket: New Feature

-   The package now re-exports imperative Jodit, so you can write plugins and use all Jodit helpers

```js
import JoditEditor, { Jodit } from '../../src/';

/**
 * @param {Jodit} jodit
 */
function preparePaste(jodit) {
	jodit.e.on(
		'paste',
		e => {
			if (confirm('Change pasted content?')) {
				jodit.e.stopPropagation('paste');
				jodit.s.insertHTML(
					Jodit.modules.Helpers.getDataTransfer(e)
						.getData(Jodit.constants.TEXT_HTML)
						.replace(/a/g, 'b')
				);
				return false;
			}
		},
		{ top: true }
	);
}
Jodit.plugins.add('preparePaste', preparePaste);

//...
return <JoditEditor />;
```

#### :house: Internal

-   Update

```
eslint-plugin-react-hooks    ^4.5.0  →    ^4.6.0
@babel/core                 ^7.16.0  →   ^7.19.0
@babel/eslint-parser        ^7.17.0  →   ^7.18.9
@babel/preset-env           ^7.16.0  →   ^7.19.0
@babel/preset-react         ^7.16.0  →   ^7.18.6
@types/react               ^16.14.2  →  ^18.0.18
babel-loader                 ^8.2.2  →    ^8.2.5
css-loader                   ^3.6.0  →    ^6.7.1
eslint                       ^8.9.0  →   ^8.23.0
eslint-config-prettier       ^8.4.0  →    ^8.5.0
eslint-plugin-prettier       ^4.0.0  →    ^4.2.1
eslint-plugin-react         ^7.28.0  →   ^7.31.8
husky                        ^7.0.4  →    ^8.0.1
lint-staged                 ^12.3.4  →   ^13.0.3
prettier                     ^2.5.1  →    ^2.7.1
style-loader                ^0.20.3  →    ^3.3.1
webpack                     ^4.44.2  →   ^5.74.0
webpack-cli                 ^3.3.12  →   ^4.10.0
webpack-dev-server          ^3.11.0  →   ^4.11.0
```

## 1.3.18

#### :bug: Bug Fix

-   [Jodit not cleaning up after unmount #196](https://github.com/jodit/jodit-react/issues/196)

## 1.2.1

#### :bug: Bug Fix

-   [Editor duplicates after re-render (state change) #172](https://github.com/jodit/jodit-react/issues/172)
