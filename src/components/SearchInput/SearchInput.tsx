import React from 'react';

import './SearchInput.scss';

const SearchInput: React.FC = () => {
  return (
    <form className="search">
      <input className="search__input" placeholder="Поиск" />
      <button type="submit" className="search__btn">
        <svg>
          <use xlinkHref="sprite.svg#search" />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
