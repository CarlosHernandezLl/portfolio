import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './App';
import { ThemeProvider } from './context/themeProvider';

// Inyectamos los estilos globales y las variables del Dark Mode Premium aquí:
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);