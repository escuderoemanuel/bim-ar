import React from 'react';
import './Inicio.css';
import Banner from './Banner/Banner';
import backgroundImage from '../../../assets/img/img-home.png';
import backgroundImageInicio from '../../../assets/img/img-inicio.png';

/* Translate */
import { useTranslation } from 'react-i18next';
const Inicio = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');

  return (
    <section
      className='inicio'
      id='home'
      style={{ backgroundImage: `url(${backgroundImageInicio})` }}>
      <div className='inicioContainer wrap'>
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
