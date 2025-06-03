import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-anime px-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-black" href="#home">Hi, am Victor</a>

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
              <a href="#home" className="nav-a text-black anime-hover">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-a text-black anime-hover">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-a text-black anime-hover">Services</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-a text-black anime-hover">Resume</a>
            </li>
            <li className="nav-item">
              <a href="#connect" className="nav-a text-black anime-hover">Connect</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-a text-black anime-hover">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
