// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/" style={linkStyle}>
          PRIME PG FACILITY
        </Link>
      </h1>
      <div className="nav-links">
        <Link to="/" style={linkStyle}>
          HOME
        </Link>
        <Link to="/facilities" style={linkStyle}>
          FACILITIES
        </Link>
        <Link to="/register" style={linkStyle}>
          REGISTER
        </Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

export default Navbar;