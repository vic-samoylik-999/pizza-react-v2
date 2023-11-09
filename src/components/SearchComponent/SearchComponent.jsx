import React from 'react';
import { SearchContext } from '../../App';

import searchIcon from '../../assets/img/searchIcon.svg';
import closeIcon from '../../assets/img/closeIcon.svg';

function SearchComponent() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className="header__search search">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        name="search-input"
        className="search__input"
        placeholder="Поиск пиццы..."
      />
      <img className="search__loupe" src={searchIcon} alt="Search Icon" />
      {searchValue && <img className="search__close" src={closeIcon} alt="Close Icon" />}
    </div>
  );
}

export default SearchComponent;
