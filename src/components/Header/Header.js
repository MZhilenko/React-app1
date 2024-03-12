import React from "react";
import logo from "../../img/logo.png";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.login}>
            {props.isAuth ? (
              <NavLink to={`/profile/` + props.id}>{props.login}</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
