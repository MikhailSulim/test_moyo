import React from 'react';

import './BurgerMenu.scss';

const BurgerMenu = () => {
  return (
    <button type='button' className='burger-menu-btn'>
      <svg>
        <use xlinkHref="/sprite.svg#burger"/>
      </svg>
    </button>

  );
};

export default BurgerMenu;