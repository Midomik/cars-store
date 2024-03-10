import React from 'react';
import { NavLink } from 'react-router-dom';

const SharedLayout = ({ children }) => {
  return (
    <>
      <header>
        <NavLink to="/">Welcome</NavLink>{' '}
        <NavLink to="/catalog">Catalog</NavLink>{' '}
        <NavLink to="/favorites">Favorites</NavLink>{' '}
      </header>
      <main>{children}</main>
    </>
  );
};

export default SharedLayout;
