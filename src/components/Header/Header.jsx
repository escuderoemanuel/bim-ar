import './Header.css';
import React, { useState } from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Language from './Language/Language';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrolled = window.pageXOffset || document.documentElement.scrollTop;

    /*  if (scrolled > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      } */
    scrolled > 0
      ? header.classList.add('scrolled')
      : header.classList.remove('scrolled');
  });

  return (
    <section className='header' id='header'>
      <div className='headerContainer'>
        <Logo></Logo>
        <div className='headerContainerRight'>
          <Navbar></Navbar>
          <Language></Language>
        </div>
      </div>
    </section>
  );
};

export default Header;
