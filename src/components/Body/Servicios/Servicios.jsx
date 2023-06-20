import React, { useEffect } from 'react';
import './Servicios.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/img/img-servicios.png';
import arrowPrev from '../../../assets/others/arrowLeft.png';
import arrowNext from '../../../assets/others/arrowRight.png';

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

  const handlePrevClick = () => {
    const slider = document.querySelector('.servContainer');
    slider.scrollLeft -= 210;
  };

  const handleNextClick = () => {
    const slider = document.querySelector('.servContainer');
    slider.scrollLeft += 210;
  };

  useEffect(() => {
    const prev = document.querySelector('.arrowPrev');
    const next = document.querySelector('.arrowNext');

    prev.addEventListener('click', handlePrevClick);
    next.addEventListener('click', handleNextClick);

    return () => {
      prev.removeEventListener('click', handlePrevClick);
      next.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <section
      className='servicios'
      id='services'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='serviciosContainer wrap'>
        <div className='serviciosText'>
          <h2>{t('services.title1')}</h2>
          <p className=''>
            {t('services.paragraph1.line1')}
            <br />
            {t('services.paragraph1.line2')}
            <br />
            {t('services.paragraph1.line3')}
          </p>
        </div>
        <div className='servContainer'>
          <div className='serv'>
            <h1>{t('services.servicesList.3d.title')}</h1>
            <h3>{t('services.servicesList.3d.subtitle')}</h3>
            <p>
              {t('services.servicesList.3d.text.line1')}
              <br />
              {t('services.servicesList.3d.text.line2')}
              <br />
              {t('services.servicesList.3d.text.line3')}
              <br />
              {t('services.servicesList.3d.text.line4')}
              <br />
              {t('services.servicesList.3d.text.line5')}
              <br />
              {t('services.servicesList.3d.text.line6')}
              <br />
              {t('services.servicesList.3d.text.line7')}
            </p>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.4d.title')}</h1>
            <h3>{t('services.servicesList.4d.subtitle')}</h3>
            <p>
              {t('services.servicesList.4d.text.line1')}
              <br />
              {t('services.servicesList.4d.text.line2')}
              <br />
              {t('services.servicesList.4d.text.line3')}
              <br />
              {t('services.servicesList.4d.text.line4')}
              <br />
              {t('services.servicesList.4d.text.line5')}
              <br />
              {t('services.servicesList.4d.text.line6')}
              <br />
              {t('services.servicesList.4d.text.line7')}
              <br />
              {t('services.servicesList.4d.text.line8')}
            </p>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.5d.title')}</h1>
            <h3>
              {t('services.servicesList.5d.subtitle.line1')}
              <br />
              {t('services.servicesList.5d.subtitle.line2')}
            </h3>
            <p>
              {t('services.servicesList.5d.text.line1')}
              <br />
              {t('services.servicesList.5d.text.line2')}
              <br />
              {t('services.servicesList.5d.text.line3')}
              <br />
              {t('services.servicesList.5d.text.line4')}
              <br />
              {t('services.servicesList.5d.text.line5')}
              <br />
              {t('services.servicesList.5d.text.line6')}
            </p>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.6d.title')}</h1>
            <h3>{t('services.servicesList.6d.subtitle')}</h3>
            <p>
              {t('services.servicesList.6d.text.line1')}
              <br />
              {t('services.servicesList.6d.text.line2')}
              <br />
              {t('services.servicesList.6d.text.line3')}
              <br />
              {t('services.servicesList.6d.text.line4')}
              <br />
              {t('services.servicesList.6d.text.line5')}
              <br />
              {t('services.servicesList.6d.text.line6')}
              <br />
              {t('services.servicesList.6d.text.line7')}
              <br />
              {t('services.servicesList.6d.text.line8')}
            </p>
          </div>

          <div className='serv'>
            <h1>{t('services.servicesList.7d.title')}</h1>
            <h3>{t('services.servicesList.7d.subtitle')}</h3>
            <p>
              {t('services.servicesList.7d.text.line1')}
              <br />
              {t('services.servicesList.7d.text.line2')}
              <br />
              {t('services.servicesList.7d.text.line3')}
              <br />
              {t('services.servicesList.7d.text.line4')}
              <br />
              {t('services.servicesList.7d.text.line5')}
              <br />
              {t('services.servicesList.7d.text.line6')}
              <br />
              {t('services.servicesList.7d.text.line7')}
            </p>
          </div>
        </div>
        <div className='arrowsSlide'>
          <button
            onClick={handlePrevClick}
            aria-label='Arrow Preview'
            alt='Arrow Preview'>
            <img
              className='arrow arrowPrev'
              src={arrowPrev}
              aria-label='Arrow Preview'
              alt='Arrow Arrow Preview'
            />
          </button>
          <button
            onClick={handleNextClick}
            aria-label='Arrow Next'
            alt='Arrow Next'>
            <img
              className='arrow arrowNext'
              src={arrowNext}
              aria-label='Arrow Next'
              alt='Arrow Next'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
