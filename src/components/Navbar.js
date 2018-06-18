import React from 'react';
import logo from './logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <img src={logo} className="logo" alt="logo"/>
      <p className="order-filter">Order by <strong>Position</strong></p>
    </div>
  )
}


export default Navbar;
