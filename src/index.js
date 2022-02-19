import React from 'react';
import {render} from 'react-dom';
import './scss/style.scss';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
