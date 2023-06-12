import React from 'react';
import './Derechos.css';
import { useTranslation } from 'react-i18next';

const Derechos = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div className='derechos'>
      <p>{t('footer.rights.text1')}</p>
      <a href='#'>
        <p>{t('footer.rights.text2')}</p>
      </a>
    </div>
  );
};

export default Derechos;
