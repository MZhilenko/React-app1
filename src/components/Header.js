import React, { Component } from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className='header__inner'>
          <div className="logo">
            <img src='logo.png' alt='logo'/>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Header;     