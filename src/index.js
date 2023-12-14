import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/AppApp';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

