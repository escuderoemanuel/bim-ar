import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Language from './Language/Language';
import './Header.css';

const Header = () => {
  return (
    <section className='header'>
      <div className='headerContainer'>
        <Logo></Logo>
        <Navbar></Navbar>
        <Language></Language>
      </div>
    </section>
  );
};

export default Header;
