import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { GlobalStyle } from './global/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);
