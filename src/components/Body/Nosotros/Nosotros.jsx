import './Nosotros.css';
import React from 'react';
import imgNosotros from '../../../assets/img/img-nosotros.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Nosotros = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');
  return (
    <section className='nosotros wrap' id='aboutUs'>
      <div className='nosotrosContainer'>
        <div className='nosotrosText'>
          <h3>{t('aboutUs.title1')}</h3>
          <h2>
            {t('aboutUs.title2.line1.line')}
            <span>{t('aboutUs.title2.line1.span')}</span>
            <br />
            {t('aboutUs.title2.line2.line')}
            <span> {t('aboutUs.title2.line2.span')}</span>
          </h2>
          <p>
            {t('aboutUs.paragraph1.line1')}
            <br />
            {t('aboutUs.paragraph1.line2')}
            <br />
            {t('aboutUs.paragraph1.line3')}
            <br />
            {t('aboutUs.paragraph1.line4')}
            <br />
            {t('aboutUs.paragraph1.line5.line')}
            <span> {t('aboutUs.paragraph1.line5.span')}</span>
          </p>
          <br />
          <p>
            {t('aboutUs.paragraph2.line1')}
            <br />
            {t('aboutUs.paragraph2.line2')}
            <br />
            {t('aboutUs.paragraph2.line3')}
          </p>
          <button>
            <Link to='contact' smooth={true} duration={500}>
              <div className='divBtn'>
                {t('aboutUs.textBtn')}
                <i>
                  <box-icon name='right-arrow-alt'></box-icon>
                </i>
              </div>
            </Link>
          </button>
        </div>
        <div className='imgNosotros'>
          <img src={imgNosotros} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
