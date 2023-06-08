import React from 'react';
import Datos from './Datos/Datos';
import Derechos from './Derechos/Derechos';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footerContainer'>
        <Datos></Datos>
        <Derechos></Derechos>
      </div>
    </section>
  );
};

export default Footer;
