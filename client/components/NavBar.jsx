import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

const NavBar = () => (
  <nav className="navbar">
    <img
      id="logo"
      src="./assets/fflogo.png"
      alt="Fresh Fridge Logo"
      height="100px"
    />

    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/"
    >
      Login
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/user"
    >
      My Fridge
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/household"
    >
      Household
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/"
    >
      Sign Out
    </NavLink>
  </nav>
);

/* make sign out a button and put in an event handler to up */

export default NavBar;
