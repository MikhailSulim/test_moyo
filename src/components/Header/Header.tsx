import React, { useEffect, useState } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { MOBILE_SCREEN_WIDTH } from '../../utils/constants';
import BurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import UserLocation from '../UserLocation/UserLocation';

import './Header.scss';

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    windowWidth > MOBILE_SCREEN_WIDTH ? setMobile(false) : setMobile(true);
  }, [windowWidth]);

  return (
    <header className="header">
      <div className="header__left">
        <BurgerMenuBtn />
        {!mobile && <Logo place={'header'} />}
      </div>
      <div className="header__search">
        {!mobile && <SearchInput />}
        {mobile && <Logo place={'header'} />}
      </div>
      <div className="header__right">
        <HeaderBtn mobile={mobile} />
        {!mobile && <UserLocation />}
      </div>
    </header>
  );
};

export default Header;
