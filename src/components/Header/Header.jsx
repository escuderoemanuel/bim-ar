import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Language from './Language/Language';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Logo></Logo>
      <Navbar></Navbar>
      <Language></Language>
    </div>
  );
};

export default Header;
