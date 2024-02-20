import React, { Component } from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

console.log(classes);

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <a href="#s" className={classes.link}>
          Feed
        </a>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.activeLink} ${classes.link}` : classes.link
          }
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.activeLink} ${classes.link}` : classes.link
          }
          to="/messages"
        >
          Messages
        </NavLink>
        <a className={classes.link}>News</a>
        <a className={classes.link}>Music</a>
        <div className={classes.line}></div>
        <a className={classes.link}>Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;
