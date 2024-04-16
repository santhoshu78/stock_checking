// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing

const Header = () => {
  return (
    <header className="header">
      <div className="brand">Your Brand Name</div>
      <nav className="nav">
        <ul>
          <li><Link to="/user/login">User Login</Link></li>
          <li><Link to="/user/registration">User Registration</Link></li>
          <li><Link to="/admin/login">Admin Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
