import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#010440',
    },
    secondary: {
      main: '#F2C879',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#A0D3F2',
    },
    background: {
      default: '#E6E5ED',
    },
    warning: {
      main: '#F2EB80',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
    {
    serviceWorkerRegister()
  }
  </React.StrictMode>,
  
  document.getElementById('root'),
  

);
function serviceWorkerRegister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(() => console.log('Service Worker registered successfully.'))
      .catch(error =>
        console.log('Service Worker registration failed:', error)
      );
  }
}