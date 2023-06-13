import React from 'react';
import Datos from './Datos/Datos';
import Derechos from './Derechos/Derechos';
import './Footer.css';
import backgroundImage from '../../assets/img/img-footer.png';

const Footer = () => {
  return (
    <section
      className='footer'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='footerContainer'>
        <Datos></Datos>
        <Derechos></Derechos>
      </div>
    </section>
  );
};

export default Footer;
