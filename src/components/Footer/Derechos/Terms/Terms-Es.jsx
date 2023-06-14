import React from 'react';
import Logo from '../../../Header/Logo/Logo';
import './Terms.css';
import termsEsData from '../../../../translations/es/termsEs.json';

const TermsEs = () => {
  const termsEs = termsEsData;

  return (
    <div id='terms-es' className='terms'>
      <div className='termsContainer'>
        <div className='headerTerms'>
          <Logo />
        </div>
        <div className='bodyTerms'>
          <h3 className='title'>{termsEs.title}</h3>
          {Object.values(termsEs.text).map((text, id) => (
            <p className='text' key={id}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsEs;
