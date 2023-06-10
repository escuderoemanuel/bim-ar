import React, { useState } from 'react';
import './Navbar.css';

import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
const Navbar = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');

  /* Estado inicial de la visibilidad de la navbar */
  const [isNavVisible, setIsNavVisible] = useState(false);
  /* Estado inicial de la section activa*/
  const [activeSection, setActiveSection] = useState('home');
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
    setIsNavVisible(false);
    setIsActive(false);
  };

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
        <a
          className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
          href='#home'
          onClick={() => handleLinkClick('home')}>
          {t('header.navbar.link1')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'aboutUs' ? 'active' : ''
          }`}
          href='#aboutUs'
          onClick={() => handleLinkClick('aboutUs')}>
          {t('header.navbar.link2')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'services' ? 'active' : ''
          }`}
          href='#services'
          onClick={() => handleLinkClick('services')}>
          {t('header.navbar.link3')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'contact' ? 'active' : ''
          }`}
          href='#contact'
          onClick={() => handleLinkClick('contact')}>
          {t('header.navbar.link4')}
        </a>
      </nav>
    </>
  );
};

export default Navbar;
