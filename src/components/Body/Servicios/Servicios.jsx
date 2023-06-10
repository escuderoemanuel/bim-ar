import React from 'react';
import './Servicios.css';
import { useTranslation } from 'react-i18next';

const Servicios = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className='servicios' id='services'>
      <div className='serviciosContainer'>
        <div className='serviciosText'>
          <h2>{t('services.title1')}</h2>
          <p>{t('services.paragraph1')}</p>
        </div>
        <div className='servContainer'>
          <div className='serv'>
            <h1>{t('services.servicesList.3d.title')}</h1>
            <div>
              <h3>{t('services.servicesList.3d.subtitle')}</h3>
              <p>{t('services.servicesList.3d.text')}</p>
            </div>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.4d.title')}</h1>
            <div>
              <h3>{t('services.servicesList.4d.subtitle')}</h3>
              <p>{t('services.servicesList.4d.text')}</p>
            </div>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.5d.title')}</h1>
            <div>
              <h3>{t('services.servicesList.5d.subtitle')}</h3>
              <p>{t('services.servicesList.5d.text')}</p>
            </div>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.6d.title')}</h1>
            <div>
              <h3>{t('services.servicesList.6d.subtitle')}</h3>
              <p>{t('services.servicesList.6d.text')}</p>
            </div>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.7d.title')}</h1>
            <div>
              <h3>{t('services.servicesList.7d.subtitle')}</h3>
              <p>{t('services.servicesList.7d.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
