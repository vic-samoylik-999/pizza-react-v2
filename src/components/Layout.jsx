import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const SearchContext = React.createContext();

export default function Layout() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export { SearchContext };
