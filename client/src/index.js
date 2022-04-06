import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Content from './content/content'

import reportWebVitals from './reportWebVitals';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Content />
    </React.StrictMode>
  )
reportWebVitals();