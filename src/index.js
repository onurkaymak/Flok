import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';

import { BrowserRouter, } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './components/store/index';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
