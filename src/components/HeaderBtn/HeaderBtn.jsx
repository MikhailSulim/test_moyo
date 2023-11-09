import React, { useEffect, useState } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import './HeaderBtn.scss';

const HeaderBtn = ({ mobile = false }) => {

  return mobile ? (
    <button type="button" className="header-btn header-btn_mobile">
      <svg>
        <use xlinkHref="/sprite.svg#user" />
      </svg>
    </button>
  ) : (
    <button type="button" className="header-btn">войти</button>
  );
};

export default HeaderBtn;
