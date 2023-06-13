import React from 'react';
import './Terms.css';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className='terms' id='terms'>
      <h2>{t('footer.rights.terms.title')}</h2>
      <p>{t('footer.rights.terms.text')}</p>
    </section>
  );
};

export default Terms;
