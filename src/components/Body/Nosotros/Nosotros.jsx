import './Nosotros.css';
import React from 'react';
import imgNosotros from '../../../assets/img/img-nosotros.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Nosotros = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');
  return (
    <section className='nosotros wrap t' id='aboutUs'>
      <div className='nosotrosContainer'>
        <div className='nosotrosText'>
          <h3>{t('aboutUs.title1')}</h3>
          <h2>
            {t('aboutUs.title2.line1')}
            <span>{t('aboutUs.title2.span1')}</span>
            <br />
            {t('aboutUs.title2.line2')}
            <span> {t('aboutUs.title2.span2')}</span>
          </h2>
          <p>
            {t('aboutUs.paragraph1')}
            <span> {t('aboutUs.span')}</span>
          </p>
          <br />
          <p>{t('aboutUs.paragraph2')}</p>
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
        <div>
          <img src={imgNosotros} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
