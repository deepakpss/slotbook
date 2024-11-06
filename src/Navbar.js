import React, { useState } from "react";
import './navbar.css';  // Import the CSS for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <nav className="navbarForHome">
      <div className="navbar-brand">
        <h2>Badminton Court Booking</h2>
      </div>
      <div className="navbar-links-home">
      <ul className="navbar-links-home">
          <li>
            <Link className="navbar-item" to="/ProfilePage">Profile</Link>
          </li>
          <li>
            <Link  className="navbar-item" to="/list">Check Slot Availability</Link>
          </li>
          <li>
            <Link  className="navbar-item" to="/logout">Logout</Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;

/* Styling the navbar */
