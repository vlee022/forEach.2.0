import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div>
    SideBar Component
    <Link to="/donate"><p>link to donate</p></Link>
    <Link to="/shoutouts"><p>link to shoutouts</p></Link>
  </div>
);

export default SideBar;
