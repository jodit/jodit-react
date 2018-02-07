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
    oldConfig = {};

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
            config: props.config || {},
            onChange: props.onChange
        };

        this.oldConfig = this.state.config;
    }

    changeListener = (value) => {
        this.state.value = value;
        if (typeof this.state.onChange === 'function') {
            this.state.onChange(value);
        }
    };

    componentDidMount () {
        this.createEditor();
    }

    createEditor() {
        this.editor && this.editor.destruct();
        this.editor = new Jodit(this.refs.element, this.props.config);
        this.editor.value = this.state.value;
        this.editor.events.on('change', this.changeListener);
    }

    componentWillUnmount () {
        this.editor && this.editor.destruct();
    }

    componentDidUpdate () {
        if (this.oldConfig !== this.props.config) {
            this.oldConfig = this.props.config;
            this.createEditor();
        }

        if (JSON.stringify(this.editor.value) === JSON.stringify(this.props.value)) {
            return;
        }

        this.editor.value = this.props.value;
    }

    render() {
        return <textarea ref="element"></textarea>
    }
}