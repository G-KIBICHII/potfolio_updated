// import React from 'react'
import "./navbar.css";

// import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img width="50px" src="https://gilbertaz.com/img/gilbert-chamber-logo-white.svg" alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Potfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
