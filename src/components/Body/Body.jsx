import React from 'react';
import './Body.css';
import Inicio from './Inicio/Inicio';
import Nosotros from './Nosotros/Nosotros';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <Inicio></Inicio>
        <Nosotros></Nosotros>
        <Servicios></Servicios>
        <Contacto></Contacto>
      </div>
    </div>
  );
};

export default Body;
