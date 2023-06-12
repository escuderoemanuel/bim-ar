import React from 'react';
import './Contacto.css';
import imgContact from '../../../assets/img/img-contacto.png';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className='contacto' id='contact'>
      <div className='contactoContainer'>
        <div className='formContainer'>
          <div>
            <h3>{t('contact.title')}</h3>
            <p>{t('contact.subtitle')}</p>
          </div>
          <form action='submit'>
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
              <label htmlFor='messagge'>{t('contact.form.label3')}</label>
              <textarea
                name='messagge'
                id='messagge'
                cols='30'
                rows='6'></textarea>
            </div>
            <button>{t('contact.form.textBtn')}</button>
          </form>
        </div>
        <img src={imgContact} alt='' />
      </div>
    </section>
  );
};

export default Contacto;
