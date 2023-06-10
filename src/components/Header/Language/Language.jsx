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
      <i>
        <box-icon className='icon' name='world' size='28px'></box-icon>
      </i>
      <select
        className='langSelected'
        onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
    </div>
  );
};

export default Language;
