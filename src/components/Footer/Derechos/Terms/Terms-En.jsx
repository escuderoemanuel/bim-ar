import React from 'react';
import Logo from '../../../Header/Logo/Logo';
import './Terms.css';
import termsEnData from '../../../../translations/en/termsEn.json';

const TermsEn = () => {
  const termsEn = termsEnData;

  return (
    <div id='terms-es' className='terms'>
      <div className='termsContainer'>
        <div className='headerTerms'>
          <Logo />
        </div>
        <div className='bodyTerms'>
          <h3 className='title'>{termsEn.title}</h3>
          {Object.values(termsEn.text).map((text, id) => (
            <p className='text' key={id}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsEn;
