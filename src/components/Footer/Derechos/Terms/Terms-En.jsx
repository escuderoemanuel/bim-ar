import React from 'react';
import Logo from '../../../Header/Logo/Logo';
import './Terms.css';
import termsEnData from '../../../../translations/en/termsEn.json';

const TermsEs = () => {
  const termsEn = termsEnData;

  return (
    <div id='terms-en' className='terms'>
      <div className='termsContainer'>
        <div className='headerTerms'>
          <Logo />
        </div>
        <div className='bodyTerms'>
          <h3 className='title'>{termsEn.title}</h3>
          <h4>{termsEn.text.title1}</h4>
          <p>{termsEn.text.text1}</p>
          <h4>{termsEn.text.title2}</h4>
          <p>{termsEn.text.text2}</p>
          <h4>{termsEn.text.title3}</h4>
          <p>{termsEn.text.text3}</p>
          <h4>{termsEn.text.title4}</h4>
          <p>{termsEn.text.text4}</p>
          <h4>{termsEn.text.title5}</h4>
          <p>{termsEn.text.text5}</p>
          <h4>{termsEn.text.title6}</h4>
          <p>{termsEn.text.text6}</p>
          <h4>{termsEn.text.title7}</h4>
          <p>{termsEn.text.text7}</p>
          <h4>{termsEn.text.title8}</h4>
          <p>{termsEn.text.text8}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsEs;
