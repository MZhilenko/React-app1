import React, { Component } from "react";
import classes from "./Contacts.module.css";
import Contact from "./Contact/Contact";

const Contacts = (props) => {
  const dialogsList = props.dialogs.map((item) => (
    <Contact id={item.id} name={item.name} avatar={item.avatar} />
  ));
  return <div className={classes.list}>{dialogsList}</div>;
};

export default Contacts;
