import React from 'react';
import './Inicio.css';
import Banner from './Banner/Banner';

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
      </div>
      <Banner></Banner>
    </section>
  );
};

export default Inicio;
