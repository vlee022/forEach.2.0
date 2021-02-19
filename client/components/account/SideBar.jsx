import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className="account-sidebar">
    <Link to="/donate"><button className="btn-sidebar">Donate</button></Link>
    <br />
    <Link to="/shoutouts"><button className="btn-sidebar">Shoutout</button></Link>
  </div>
);

export default SideBar;
