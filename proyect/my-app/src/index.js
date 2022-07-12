import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter1 from '../src/AppRouter1'
import AppRoutingFinal from './AppRoutingFinal'

// Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importante: los estilos propios deben ir por debajo
// de bootstrap para que no nos los pise bootstrap

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingFinal></AppRoutingFinal> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
