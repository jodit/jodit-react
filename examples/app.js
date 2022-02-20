import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import "jodit";
import 'jodit/build/jodit.min.css';
import Form from './components/Form';

ReactDOM.render(<Form />, document.getElementById('editor'));
