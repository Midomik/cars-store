import React from 'react';
import css from './SharedLayout.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const SharedLayout = ({ children }) => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';
  console.log(location.pathname);
  return (
    <div
      className={
        isWelcomePage
          ? css.global_container_welcome
          : css.global_container_another
      }
    >
      <header>
        <NavLink className="nav_link" to="/">
          Welcome
        </NavLink>{' '}
        <NavLink className="nav_link" to="/catalog">
          Catalog
        </NavLink>{' '}
        <NavLink className="nav_link" to="/favorites">
          Favorites
        </NavLink>{' '}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default SharedLayout;
