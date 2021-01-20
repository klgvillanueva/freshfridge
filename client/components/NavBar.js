import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <nav className="navbar">
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
      to="/SignUp"
    >
      Sign Up
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/ShoppingList"
    >
      Shopping List
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar_link--active"
      className="navbar_link"
      to="/GroceryList"
    >
      Grocery List
    </NavLink>
  </nav>
);

export default NavBar;
