import React, { useEffect } from 'react';
import './Derechos.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Derechos = () => {
  const { t, i18n } = useTranslation('global');
  const currentLanguage = i18n.language;

  let termsPath = '/terms'; // Ruta por defecto para idiomas desconocidos
  if (currentLanguage === 'es') {
    termsPath = '/terms-es'; // Ruta para idioma español
  } else if (currentLanguage === 'en') {
    termsPath = '/terms-en'; // Ruta para idioma inglés
  }

  return (
    <div className='derechos'>
      <p>{t('footer.rights.text1')}</p>
      <Link
        to={termsPath}
        className='link'
        target='_blank'
        rel='noopener noreferrer'>
        <p>{t('footer.rights.text2')}</p>
      </Link>
    </div>
  );
};

export default Derechos;
