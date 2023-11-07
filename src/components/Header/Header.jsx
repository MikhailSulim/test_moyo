import React from 'react';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import UserLocation from '../UserLocation/UserLocation';

import './Header.scss';


const Header = () => {
  return (<header className="header">
    <div className='header__left'>
      <BurgerMenu />
      <Logo place={'header'}/>
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
