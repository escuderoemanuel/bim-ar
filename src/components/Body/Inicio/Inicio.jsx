import React from 'react';
import './Inicio.css';

/* Translate */
import { useTranslation } from 'react-i18next';
const Inicio = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');

  return (
    <section className='inicio' id='home'>
      <div className='inicioContainer'>
        <h1>
          {t('home.line1')} <br />
          {t('home.line2')} <span> {t('home.span')}</span>
        </h1>
        <p></p>
      </div>
    </section>
  );
};

export default Inicio;
