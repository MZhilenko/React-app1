import React, { Component } from "react";
import classes from "./Sidebar.module.css";

console.log(classes);

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.nav}>
        <a href="#s" className={`${classes.link} ${classes.active}`}>Feed</a>
        <a className={classes.link} href="#s">Profile</a>
        <a className={classes.link} href="#s">Messages</a>
        <a className={classes.link} href="#s">News</a>
        <a className={classes.link} href="#s">Music</a>
        <div className={classes.line}></div>
        <a className={classes.link} href="#s">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
