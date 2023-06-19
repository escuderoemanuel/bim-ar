import React, { useEffect } from 'react';
import './Contacto.css';
import imgContact from '../../../assets/img/img-contacto.png';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    const form = document.querySelector('#form');
    const buttonMailto = document.querySelector('#mailto');
    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formulario = new FormData(this);
    console.log(formulario.get('name'));

    const buttonMailto = document.querySelector('#mailto');
    buttonMailto.setAttribute(
      'href',
      `mailto:emanuelescudero.dev@gmail.com?subject=${formulario.get(
        'name'
      )}&body=${formulario.get('messagge')}`
    );
    buttonMailto.click();

    setTimeout(() => {
      const form = document.querySelector('#form');
      form.reset();
    }, 5000);
  }

  return (
    <section className='contacto ' id='contact'>
      <div className='contactoContainer wrap'>
        <div className='formContainer'>
          <div>
            <h3>{t('contact.title')}</h3>
            <p>{t('contact.subtitle')}</p>
          </div>
          <form action='submit' id='form'>
            <div className='labelNameEmail'>
              <div className='name'>
                <label htmlFor='name'>{t('contact.form.label1')}</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='email'>
                <label htmlFor='email'>{t('contact.form.label2')}</label>
                <input type='email' name='email' id='email' />
              </div>
            </div>
            <div className='textArea'>
              <label className='labelTextArea' htmlFor='messagge'>
                {t('contact.form.label3')}
              </label>
              <textarea
                name='messagge'
                id='messagge'
                cols='30'
                rows='6'></textarea>
            </div>
            <button>{t('contact.form.textBtn')}</button>
          </form>
          <a href='mailto:escudero.mdz@gmail.com' id='mailto'></a>
        </div>
        <img src={imgContact} alt='' />
      </div>
    </section>
  );
};

export default Contacto;
