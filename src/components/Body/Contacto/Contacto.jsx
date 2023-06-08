import React from 'react';
import './Contacto.css';
const Contacto = () => {
  return (
    <section className='contacto'>
      <div className='contactoContainer'>
        <h2>Contacto</h2>
        <form action=''>
          <input type='text' name='' id='' placeholder='Nombre y Apellido' />
          <input type='text' name='' id='' placeholder='Email' />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Mensaje'></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
