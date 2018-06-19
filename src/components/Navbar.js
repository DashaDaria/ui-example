import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import { Icon } from 'react-icons-kit';
import {caretDown} from 'react-icons-kit/fa/caretDown'


const Navbar = () => {
  return (
    <div className="navigation">
      <img src={logo} className="logo" alt="logo"/>
      <p className="order-filter">Order by <span className="bold">Position</span> <Icon className="icon" icon={caretDown}/></p>
    </div>
  )
}


export default Navbar;
