import React from 'react';

import './HeaderBtn.scss';

interface HeaderBtnProps {
  mobile: boolean;
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({ mobile = false }) => {
  return mobile ? (
    <button type="button" className="header-btn header-btn_mobile">
      <svg>
        <use xlinkHref="sprite.svg#user" />
      </svg>
    </button>
  ) : (
    <button type="button" className="header-btn">
      войти
    </button>
  );
};

export default HeaderBtn;
