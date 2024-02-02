import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AppRouter from './AppRouter.jsx';
import './index.css';

// Créez le root une seule fois
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez root.render() sans passer l'élément DOM une seconde fois
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
