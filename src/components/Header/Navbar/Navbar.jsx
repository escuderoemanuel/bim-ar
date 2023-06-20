import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';

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
    setIsScrolling(true);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowsLoad = () => {
      scroll.scrollToTop({ duration: 500 });
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
          className={`navbar-link  ${
            activeSection === 'home' && !isScrolling ? 'active' : ''
          }`}
          aria-label={t('header.navbar.link1')}
          alt={t('header.navbar.link1')}
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
            activeSection === 'aboutUs' && !isScrolling ? 'active' : ''
          }`}
          aria-label={t('header.navbar.link2')}
          alt={t('header.navbar.link2')}
          to='aboutUs'
          spy={true}
          offset={-95}
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('aboutUs')}>
          {t('header.navbar.link2')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'services' && !isScrolling ? 'active' : ''
          }`}
          aria-label={t('header.navbar.link3')}
          alt={t('header.navbar.link3')}
          to='services'
          spy={true}
          offset={-95}
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('services')}>
          {t('header.navbar.link3')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'contact' && !isScrolling ? 'active' : ''
          }`}
          aria-label={t('header.navbar.link4')}
          alt={t('header.navbar.link4')}
          to='contact'
          spy={true}
          smooth={true}
          offset={-95}
          duration={500}
          onClick={() => handleLinkClick('contact')}>
          {t('header.navbar.link4')}
        </Link>
        <Language />
      </nav>
    </>
  );
};

export default Navbar;
