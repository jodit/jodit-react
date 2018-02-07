import React, {Component} from 'react';

import JoditEditor from "../../src/";

export default class From extends Component {
    state = {
        config: {
            readonly: false,
        },
        value: 'Test'
    };
    toggleReadOnly = () => {
        this.setState(prevState => {
            let config = {
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
    render () {
        return <div>
            <JoditEditor
                value={this.state.value}
                config={this.state.config}
                onChange={console.log}
            />
            <input placeholder={"entre some text"} ref="input" type="text" onChange={this.onChangeInput}/>
            <button type="button" onClick={this.toggleReadOnly}>Toggle Read-Only</button>
        </div>
    };
}