import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarForProfile.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Page Name */}
        <h2 className="navbar-logo">Student Profile</h2>
        
        {/* Links to other pages */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
