import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './styles/index.css';
import Root from './Root';
import getBaseUrl from './utils/getBaseUrl';

const wrapped = (
  <BrowserRouter basename={getBaseUrl()}>
    <Root />
  </BrowserRouter>
);

ReactDOM.render(wrapped, document.getElementById('root'));
