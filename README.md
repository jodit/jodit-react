# React Jodit WYSIWYG Editor

[![npm](https://img.shields.io/npm/v/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/dm/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)
[![npm](https://img.shields.io/npm/l/jodit-react.svg)](https://www.npmjs.com/package/jodit-react)

React wrapper for Jodit

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

## Usage

### 1. Require and use Jodit component inside your application.

```jsx
import React from 'react';
import JoditEditor from "jodit-react";

class Example  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	content: 'content',
        }
    }

    updateContent(value) {
        this.setState({content:value})
    }

    render() {
        return <JoditEditor value={this.state.content} onChange={this.updateContent.bind(this)} />
    }
}
```

