import React, {Component} from 'react';

import JoditEditor from "../../src/";

export default class From extends Component {
    state = {
        config: {
            readonly: false,
            toolbar: true,
        },
        value: 'Test',
        spin: 1
    };

    toggleToolbar = () => {
        this.setState(prevState => {
            let config = {
                readonly: prevState.config.readonly,
                toolbar: !prevState.config.toolbar
            };

            return {
                config: config,
                value: prevState.value
            }
        });
    };

    toggleReadOnly = () => {
        this.setState(prevState => {
            let config = {
                toolbar: prevState.config.toolbar,
                readonly: !prevState.config.readonly
            };

            return {
                config: config,
                value: prevState.value
            }
        });
    };

    onChangeInput = () => {
        this.setState(prevState => ({
            config: prevState.config,
            value: this.refs.input.value
        }));
    };

    spin = () => {
        this.setState(prevState => ({
            config: prevState.config,
            value: prevState.value,
            spin: prevState.spin + 1
        }));
    };

    render () {
        return <div>
            <JoditEditor
                value={this.state.value}
                config={this.state.config}
                onChange={console.log}
            />
            <input placeholder={"entre some text"} ref="input" type="text" onChange={this.onChangeInput}/>
            <button type="button" onClick={this.toggleReadOnly}>Toggle Read-Only</button>
            <button type="button" onClick={this.toggleToolbar}>Toggle Toolbar</button>
            <button type="button" onClick={this.spin}>Spin {this.state.spin}</button>
        </div>
    };
}
