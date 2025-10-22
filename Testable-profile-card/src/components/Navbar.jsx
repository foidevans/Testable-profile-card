import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <h1 className="logo">FOIDE</h1>
      <ul className="navLinks">
        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/About" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/Contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
