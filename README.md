# React Jodit WYSIWYG Editor

[![npm](https://img.shields.io/npm/v/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/dm/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/l/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)

React wrapper for [Jodit](https://xdsoft.net/jodit/)

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
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

const Example = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	
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
}
```


License
-----
This package is available under `MIT` License.
