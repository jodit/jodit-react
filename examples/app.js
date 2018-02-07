import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

ReactDOM.render(<JoditEditor
  value={"test"}
  config={{
    readonly: false
  }}
  onChange={console.log}
/>, document.getElementById('editor'));