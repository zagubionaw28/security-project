import React from 'react';
import ReactDOM from 'react-dom/client';
import './styleSheet/index/index.css';
import App from './App';

// React Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
