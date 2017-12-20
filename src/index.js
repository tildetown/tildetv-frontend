import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './styles/index.css';
import Root from './Root';

const wrapped = (
  <BrowserRouter basename={process.env.PUBLIC_URL || null}>
    <Root />
  </BrowserRouter>
);

ReactDOM.render(wrapped, document.getElementById('root'));
