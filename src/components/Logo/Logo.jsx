import React from 'react';

import logo from './../../images/logo.png';

import './Logo.scss';

const Logo = ({ place }) => {
  return (
    <img className={`logo logo_${place}`} src={logo} alt='логотип' />
  );
};

export default Logo;