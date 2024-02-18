import React, { Component } from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.nav}>
        <a href="#s">Profile</a>
        <a href="#s">Messages</a>
        <a href="#s">News</a>
        <a href="#s">Music</a>
        <div className={classes.line}></div>
        <a href="#s">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
