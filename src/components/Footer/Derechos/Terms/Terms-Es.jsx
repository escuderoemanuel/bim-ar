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
          <h4>{termsEs.text.title1}</h4>
          <p>{termsEs.text.text1}</p>
          <h4>{termsEs.text.title2}</h4>
          <p>{termsEs.text.text2}</p>
          <h4>{termsEs.text.title3}</h4>
          <p>{termsEs.text.text3}</p>
          <h4>{termsEs.text.title4}</h4>
          <p>{termsEs.text.text4}</p>
          <h4>{termsEs.text.title5}</h4>
          <p>{termsEs.text.text5}</p>
          <h4>{termsEs.text.title6}</h4>
          <p>{termsEs.text.text6}</p>
          <h4>{termsEs.text.title7}</h4>
          <p>{termsEs.text.text7}</p>
          <h4>{termsEs.text.title8}</h4>
          <p>{termsEs.text.text8}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsEs;
