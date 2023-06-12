import React from 'react';
import './Banner.css';
/* Translate */
import { useTranslation } from 'react-i18next';

const Banner = () => {
  /* i18next */
  const [t, i18n] = useTranslation('global');
  return (
    <div className='banner'>
      <p>
        {t('home.banner.word1')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word2')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word3')}
      </p>
      <p>
        {t('home.banner.word1')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word2')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word3')}
      </p>
      <p>
        {t('home.banner.word1')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word2')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word3')}
      </p>
      <p>
        {t('home.banner.word1')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word2')}
        <span>&nbsp;+&nbsp;</span>
        {t('home.banner.word3')}
      </p>
    </div>
  );
};

export default Banner;
