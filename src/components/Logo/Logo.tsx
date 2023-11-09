import React from 'react';

import logo from './../../images/logo.png';

import './Logo.scss';

interface LogoProps {
  place: 'main' | 'header';
}

const Logo: React.FC<LogoProps> = ({ place }) => {
  return <img className={`logo logo_${place}`} src={logo} alt="логотип" />;
};

export default Logo;
