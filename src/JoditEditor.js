import React, { Component } from 'react';
import Jodit from 'jodit'
import 'jodit/build/jodit.min.css';

export default class JoditEditor extends Component {
    editor;
    componentDidMount () {
        this.editor = new Jodit(this.refs.element);
    }
    componentWillUnmount () {
        this.editor && this.editor.destruct();
    }
    render() {
        return <textarea ref="element"></textarea>
    }
}