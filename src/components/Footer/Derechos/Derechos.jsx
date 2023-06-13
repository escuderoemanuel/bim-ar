import React from 'react';
import './Derechos.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Derechos = () => {
  const { t } = useTranslation('global');

  return (
    <div className='derechos'>
      <p>{t('footer.rights.text1')}</p>
      <Link
        to='/terms'
        className='link'
        target='_blank'
        rel='noopener noreferrer'>
        <p>{t('footer.rights.text2')}</p>
      </Link>
    </div>
  );
};

export default Derechos;
