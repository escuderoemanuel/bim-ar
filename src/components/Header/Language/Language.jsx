import React from 'react';
import './Language.css';

import { useTranslation } from 'react-i18next';

const Language = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');

  /* translate */
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='languages'>
      <i alt='World Icon' aria-label='World Icon'>
        <box-icon className='icon' name='world' size='28px'></box-icon>
      </i>
      <select
        className='langSelected'
        onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option className='option' value='es'>
          ES
        </option>
        <option className='option' value='en'>
          EN
        </option>
      </select>
    </div>
  );
};

export default Language;
