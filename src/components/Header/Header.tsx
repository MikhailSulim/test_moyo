import React, { useEffect, useState } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth.ts';
import { MOBILE_SCREEN_WIDTH } from '../../utils/constants.ts';
import BurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn.tsx';
import HeaderBtn from '../HeaderBtn/HeaderBtn.tsx';
import Logo from '../Logo/Logo.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';
import UserLocation from '../UserLocation/UserLocation.tsx';

import './Header.scss';

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const [mobile, setMobile] = useState(false);

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
