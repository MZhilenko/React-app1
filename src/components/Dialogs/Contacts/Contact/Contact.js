import React, { Component } from "react";
import classes from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { LoremIpsum, Avatar, fullname } from "react-lorem-ipsum";

const Contact = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`} className={classes.item}>
      <img className={classes.avatar} src={props.avatar} alt="user" />
      <div className={classes.info}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.lastMessage}>
          <LoremIpsum random={true} />
        </div>
      </div>
    </NavLink>
  );
};

export default Contact;
