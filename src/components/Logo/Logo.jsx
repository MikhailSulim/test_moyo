import React from 'react';

import logo from './../../images/logo.png';

import './Logo.scss';


const Logo = () => {
  return (
    <img className='logo logo_header' src={logo} alt='логотип' />
  );
};

export default Logo;