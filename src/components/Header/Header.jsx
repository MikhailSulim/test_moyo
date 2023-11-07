import React from 'react';

import UserLocation from '../UserLocation/UserLocation';
import SearchInput from '../SearchInput/SearchInput';
import Logo from '../Logo/Logo';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.scss';


const Header = () => {
  return (<header className="header">
    <div className='header__left'>
      <BurgerMenu />
      <Logo />
    </div>
    <div className='header__search'>
      <SearchInput />
    </div>
    <div className='header__right'>
      <HeaderBtn />
      <UserLocation />
    </div>
  </header>);
};

export default Header;
