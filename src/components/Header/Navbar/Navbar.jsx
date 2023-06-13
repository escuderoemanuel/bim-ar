import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { use } from 'i18next';

const Navbar = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');

  /* Estado inicial de la visibilidad de la navbar */
  const [isNavVisible, setIsNavVisible] = useState(false);
  /* Estado inicial de la section activa*/
  const [activeSection, setActiveSection] = useState('');
  /* Estado inicial de toggle */
  const [isActive, setIsActive] = useState(false);
  /* Estado por defecto 'navbar' */
  const navbarClass = `navbar ${isNavVisible ? 'visible' : 'hidden'}`;

  /* Manejador de click */
  const handleToggleClick = () => {
    /* Visibilidad del menú */
    setIsNavVisible(!isNavVisible);
    /* Visibilidad del toggle */
    setIsActive(!isActive);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    /* Visibilidad del menú */
    setIsNavVisible(false);
    /* Visibilidad del toggle */
    setIsActive(false);
  };

  useEffect(() => {
    const handleWindowsLoad = () => {
      scroll.scrollToTop();
    };

    window.addEventListener('load', handleWindowsLoad);

    return () => {
      window.removeEventListener('load', handleWindowsLoad);
    };
  }, []);

  return (
    <>
      <div
        className={`toggle ${isActive ? 'active' : ''}`}
        onClick={handleToggleClick}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>

      <nav className={navbarClass} id='navbar'>
        <Link
          className={`navbar-link  ${activeSection === 'home' ? 'active' : ''}`}
          to='home'
          offset={-150}
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
          spy={true}
          offset={-100}
          smooth={true}
          duration={300}
          onClick={() => handleLinkClick('aboutUs')}>
          {t('header.navbar.link2')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'services' ? 'active' : ''
          }`}
          to='services'
          spy={true}
          offset={-100}
          smooth={true}
          duration={300}
          onClick={() => handleLinkClick('services')}>
          {t('header.navbar.link3')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'contact' ? 'active' : ''
          }`}
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          onClick={() => handleLinkClick('contact')}>
          {t('header.navbar.link4')}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
