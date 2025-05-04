import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Akpan Victor</a>

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
              <a className="nav-link text-white" href="#home" id='nav'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about" id='nav'>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services" id='nav'>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#resume" id='nav'>Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio" id='nav'>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact" id='nav'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
