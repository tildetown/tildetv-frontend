import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'normalize.css';
import './styles/index.css';
import Root from './Root';

const wrapped = (
  <HashRouter>
    <Root />
  </HashRouter>
);

ReactDOM.render(wrapped, document.getElementById('root'));
