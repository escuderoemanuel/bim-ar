import React from 'react';
import './Body.css';
import Inicio from './Inicio/Inicio';
import Nosotros from './Nosotros/Nosotros';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';
import Proyectos from './Proyectos/Proyectos';

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <Inicio></Inicio>
        <Nosotros></Nosotros>
        <Servicios></Servicios>
        {/* <Proyectos></Proyectos> */}
        <Contacto></Contacto>
      </div>
    </div>
  );
};

export default Body;
