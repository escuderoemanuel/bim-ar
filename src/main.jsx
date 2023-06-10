import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importaciones necesarias para el translate
import translation_en from './translations/en/global.json';
import translation_es from './translations/es/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

// Creación translate init
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      global: translation_en,
    },
    es: {
      global: translation_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
