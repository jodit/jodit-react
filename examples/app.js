import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import JoditEditor from "jodit-react";

ReactDOM.render(<JoditEditor
  value={"test"}
  config={{
    readonly: false
  }}
  onChange={console.log}
/>, document.getElementById('editor'));