import './Datos.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { useTranslation } from 'react-i18next';
import Logo from '../../Header/Logo/Logo';
import faceIcon from '../../../assets/social/facebook.png';
import instaIcon from '../../../assets/social/instagram.png';
import linkedIcon from '../../../assets/social/linkedin.png';
import imgMap from '../../../assets/img/img-map.svg';

const Datos = () => {
  const [t, i18n] = useTranslation('global');

  /* Estado inicial de la visibilidad de la navbar */
  const [isNavVisible, setIsNavVisible] = useState(false);
  /* Estado inicial de la section activa*/
  const [activeSection, setActiveSection] = useState('');
  /* Estado inicial de toggle */
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    /* Visibilidad del menú */
    setIsNavVisible(false);
    /* Visibilidad del toggle */
    setIsActive(false);
  };

  return (
    <div className='datos'>
      <div className='datosContainer wrap'>
        <div className='columna1'>
          <Logo></Logo>
          <div className='social'>
            <img src={linkedIcon} alt={t('footer.data.social.social1.name')} />
            <img src={instaIcon} alt={t('footer.data.social.social2.name')} />
            <img src={faceIcon} alt={t('footer.data.social.social3.name')} />
          </div>
        </div>
        <div className='columna2'>
          <h3>{t('footer.data.section2.title')}</h3>
          <nav>
            <Link
              className={`navbar-link  ${
                activeSection === 'home' ? 'active' : ''
              }`}
              to='home'
              offset={-95}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick('home')}>
              {t('header.navbar.link1')}
            </Link>
            <Link
              className={`navbar-link ${
                activeSection === 'aboutUs' ? 'active' : ''
              }`}
              to='aboutUs'
              offset={-95}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick('aboutUs')}>
              {t('header.navbar.link2')}
            </Link>
            <Link
              className={`navbar-link ${
                activeSection === 'services' ? 'active' : ''
              }`}
              to='services'
              offset={-95}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick('services')}>
              {t('header.navbar.link3')}
            </Link>
            <Link
              className={`navbar-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              to='contact'
              offset={-95}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick('contact')}>
              {t('header.navbar.link4')}
            </Link>
          </nav>
        </div>
        <div className='columna3'>
          <img src={imgMap} alt={t('footer.data.section3.alt')} />
          <button className='arrowUp'>
            <Link
              className={`navbar-link  ${
                activeSection === 'home' ? 'active' : ''
              }`}
              to='home'
              smooth={true}
              duration={500}
              onClick={() => handleLinkClick('home')}>
              <box-icon name='chevron-up' type='solid'></box-icon>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datos;
