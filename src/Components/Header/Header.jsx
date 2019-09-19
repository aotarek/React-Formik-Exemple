import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul>
          <li className="header__menu--item">
            <NavLink activeClassName="active" to="/signup">
              Login (With Hoc formik)
            </NavLink>
          </li>
          <li className="header__menu--item">
            <NavLink activeClassName="active" to="/profil">
              profil (With Component formik)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
