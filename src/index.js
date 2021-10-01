import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './styles/index.scss';
import App from './App';

ReactGA.initialize('G-8TQ1FSX5QZ');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
