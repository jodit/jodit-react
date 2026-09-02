# Changelog

> **Tags:**
>
> -   :boom: [Breaking Change]
> -   :rocket: [New Feature]
> -   :bug: [Bug Fix]
> -   :memo: [Documentation]
> -   :house: [Internal]
> -   :nail_care: [Polish]

## 5.5.0

- chore: minor bump for jodit 4.14.0 (DOM access routed through the `Dom` module, new `cssInline`/`attrRaw` helpers). No wrapper changes; the first published 5.5.x build is produced by the release bot on the next core release.

## 5.4.80

- fix: a stale `value` echo no longer overwrites the editor. When the parent feeds `onChange` back into `value` and a render lands late (slow tree, Next.js dev mode), the wrapper used to write the older snapshot back into the editor, replacing the DOM and throwing the caret to the start of the content (#217). The wrapper now remembers the values the editor itself reported and ignores them when they come back through `value`; a value the parent sets on its own is still applied.
- test: refreshed the smoke snapshots for the `tabindex="-1"` that jodit 4.13.2x puts on toolbar buttons. The stale snapshots had been failing the publish workflow, so 5.4.73–5.4.79 were tagged but never reached npm; this is the first published build since 5.4.72 and ships jodit ^4.13.25.

## 5.4.63

- fix: forwarded `ref` kept pointing at the destructed editor instance after the editor was recreated (e.g. when `config` is passed as an inline object), so methods called through the ref silently did nothing (#301). The ref is now (re)assigned in the same effect that creates the editor.
- chore: update `jodit` to 4.13.12
- chore: merged community fix for outdated smoke-test snapshots (#334, #335), 9 dependabot lockfile bumps

## 5.3.3

- fix: update formatting in README and .prettierrc.json for consistency

## 5.3.2

- feat: enhance release workflow with lint, test, and build steps; add Next.js usage example in README

## 5.3.1

- feat: update package.json for module exports and types, add esm build
- chore: upgrade devDependencies to latest versions
- fix: add eslint disable comment for usePrevious hook
- test: migrate tests from Jest to Vitest, update snapshots and test cases
- refactor: remove webpack.config.js, add webpack.config.ts for improved configuration
- chore: add vitest.config.ts for Vitest setup

## 5.0.9

- Fixed ref forwarding issue

## 5.0.7

- [Fix: Avoid "Abort async" error by utilizing waitForReady API in Jodit destruct handling #287](https://github.com/jodit/jodit-react/pull/287)
- Fixed Config type issue
- Support React 19


## 4.0.1

-

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
