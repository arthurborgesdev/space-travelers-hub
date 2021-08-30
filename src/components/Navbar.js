import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="nav-class">
      <NavLink to="/" activeClassName="selected" exact>Rockets</NavLink>
      <NavLink to="/missions" activeClassName="selected">Missions</NavLink>
      <NavLink to="/profile" activeClassName="selected">My Profile</NavLink>
    </div>
  </nav>
);

export default Navbar;
