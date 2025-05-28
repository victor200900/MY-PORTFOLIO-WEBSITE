import React from 'react';
import './navbar.css';
import { Link }  from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-anime px-3 fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold" >Hi, am Victor</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white anime-hover"  id='nav'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white anime-hover"  id='nav'>About</Link>
            </li>
            <li className="nav-item">
              <Link  to="/services" className="nav-link text-white anime-hover"  id='nav'>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link text-white anime-hover"  id='nav'>Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="connect" className="nav-link text-white anime-hover"  id='nav'>Connect</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link text-white anime-hover"  id='nav'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
