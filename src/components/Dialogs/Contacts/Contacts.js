import React, { Component } from "react";
import classes from "./Contacts.module.css";
import Contact from "./Contact/Contact";

const Contacts = (props) => {
  return (
    <div className={classes.list}>
      <Contact id={1} />
      <Contact id={2} />
      <Contact id={3} />
      <Contact id={4} />
      <Contact id={5} />
    </div>
  );
};

export default Contacts;
