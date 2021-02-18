import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <nav>
      <Link to="/">
        <h3>Logo Here</h3>
      </Link>
      <ul>
        <Link to="/donate">
          <li>Donate</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Navbar;
