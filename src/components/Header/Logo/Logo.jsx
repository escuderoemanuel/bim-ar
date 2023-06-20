import React from 'react';
import './Logo.css';
import imgLogo from '../../../assets/img/img-logo.svg';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <img
      className='imgLogo'
      src={imgLogo}
      aria-label={t('logo.alt')}
      alt={t('logo.alt')}
    />
  );
};

export default Logo;
