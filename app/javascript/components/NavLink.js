import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <nav>
    <ul>
        <li>
        <NavLink className="link" to="/">Home</NavLink>
        </li>
      <li>
        <NavLink className="link" to="/greetings">Greetings</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavLinks;