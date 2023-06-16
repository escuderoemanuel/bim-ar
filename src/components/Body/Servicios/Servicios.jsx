import React from 'react';
import './Servicios.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/img/img-servicios.png';

const ServicioItem = ({ titleKey, subtitleKey, textKey }) => {
  const [t] = useTranslation('global');

  return (
    <div className='serv'>
      <h1>{t(titleKey)}</h1>
      <div>
        <h3>{t(subtitleKey)}</h3>
        <p>{t(textKey)}</p>
      </div>
    </div>
  );
};

const Servicios = () => {
  const [t] = useTranslation('global');
  const servicesList = [
    { title: '3d', subtitle: '3d.subtitle', text: '3d.text' },
    { title: '4d', subtitle: '4d.subtitle', text: '4d.text' },
    { title: '5d', subtitle: '5d.subtitle', text: '5d.text' },
    { title: '6d', subtitle: '6d.subtitle', text: '6d.text' },
    { title: '7d', subtitle: '7d.subtitle', text: '7d.text' },
  ];

  return (
    <section
      className='servicios wrap'
      id='services'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='serviciosContainer'>
        <div className='serviciosText'>
          <h2>{t('services.title1')}</h2>
          <p className=''>{t('services.paragraph1')}</p>
        </div>
        <div className='servContainer'>
          {servicesList.map((service) => (
            <ServicioItem
              key={service.title}
              titleKey={`services.servicesList.${service.title}.title`}
              subtitleKey={`services.servicesList.${service.title}.subtitle`}
              textKey={`services.servicesList.${service.title}.text`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
