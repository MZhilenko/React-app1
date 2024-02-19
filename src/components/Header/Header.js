import React, { Component } from "react";
import logo from '../../img/logo.png'
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
