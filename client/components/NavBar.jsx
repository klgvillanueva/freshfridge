import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

const NavBar = ({ logOut, getUserItems, getHouseholdItems }) => {

  return (
      <nav className="navbar">
        <NavLink
          exact
          activeClassName="navbar_link--active"
          className="navbar_link"
          to="/user"
          >My Fridge
        </NavLink>
        <NavLink
          exact
          activeClassName="navbar_link--active"
          className="navbar_link"
          to="/household"
          >Household
        </NavLink>
        {/* <Link>
          <button>
          </button>
        </Link> */}
        <NavLink
          exact
          activeClassName="navbar_link--active"
          className="navbar_link"
          to="/"
          >Sign Out
        </NavLink>
      </nav>
  )

  }

/* make sign out a button and put in an event handler to up */

export default NavBar;
