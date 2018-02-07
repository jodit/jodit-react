import React, { Component } from 'react';
import Jodit from 'jodit'

export default class JoditEditor extends Component {
    /**
     *Jodit editor
     *
     * @name JoditEditor#editor
     * @type Jodit
     */
    editor;

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            config: props.config || {},
            onChange: props.onChange
        };
    }

    changeListener = (value) => {
        this.state.value = value;
        if (typeof this.state.onChange === 'function') {
            this.state.onChange(value);
        }
    };

    componentDidMount () {
        this.editor = new Jodit(this.refs.element, this.state.config);
        this.editor.value = this.state.value;
        this.editor.events.on('change', this.changeListener);
    }

    componentWillUnmount () {
        this.editor && this.editor.destruct();
    }

    render() {
        return <textarea ref="element"></textarea>
    }
}