import './Header.css';
import React, { useRef, useState } from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrolled = window.pageXOffset || document.documentElement.scrollTop;

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
        </div>
      </div>
    </section>
  );
};

export default Header;
