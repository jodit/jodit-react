# React Jodit WYSIWYG Editor

[![npm](https://img.shields.io/npm/v/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/dm/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/l/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)

React wrapper for [Jodit](https://xdsoft.net/jodit/)

> [Jodit React PRO](https://xdsoft.net/jodit/pro/) it is an extended version of Jodit React with the same API, but with a lot more features.

## Installation

```bash
npm install jodit-react --save
```

## Update editor version

```bash
npm update jodit-react
```

## Run demo

```bash
npm install --dev
npm run demo
```

and open

```
http://localhost:4000/
```

## Usage

### 1. Require and use Jodit-react component inside your application.

```jsx
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Example = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		}),
		[placeholder]
	);

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};
```

### Jodit plugins

You can use all Jodit features and write your [own plugin](https://xdsoft.net/jodit/docs/modules/plugin.html) for example.

```js
import JoditEditor, { Jodit } from 'jodit-react';

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

You can see how to write plugins [in the documentation](https://xdsoft.net/jodit/pro/docs/how-to/create-plugin.md) or [on the stand](https://xdsoft.net/jodit/pro/docs/getting-started/examples.md#jodit-example-paste-link)

## Use with Jodit PRO

You can connect any Jodit constructor and set it as the `JoditConstructor` property of the component.

```jsx
import React from 'react';
import JoditEditor from 'jodit-react';
import {Jodit} from 'jodit-pro';
import 'jodit-pro/es5/jodit.min.css';
// ...

function App() {
  return <JoditEditor JoditConstructor={Jodit} />;
}

```


## License

This package is available under `MIT` License.
