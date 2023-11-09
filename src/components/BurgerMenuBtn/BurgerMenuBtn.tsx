import React from 'react';

import './BurgerMenuBtn.scss';

const BurgerMenu: React.FC = () => {
  return (
    <button type="button" className="burger-menu-btn">
      <svg>
        <use xlinkHref="sprite.svg#burger" />
      </svg>
    </button>
  );
};

export default BurgerMenu;
