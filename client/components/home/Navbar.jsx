import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';

const Navbar = () => (
  <div className="nav-bar">
    <nav>
      <Link className="logo-link" to="/">
        <img className="logo" alt="" src={logo} />
        <span>Codesmith.forEach()</span>
      </Link>
      <ul>
        <Link to="/donate">
          <button type="button">Donate</button>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <a href="https://codesmith.io/">
          <li>Codesmith</li>
        </a>
      </ul>
    </nav>
  </div>
);

export default Navbar;
