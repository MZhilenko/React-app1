import React, { Component } from "react";
import classes from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { LoremIpsum, Avatar, fullname } from "react-lorem-ipsum";

const Contact = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`} className={classes.item}>
      <Avatar className={classes.avatar} />
      <div className={classes.info}>
        <div className={classes.name}>{fullname()}</div>
        <div className={classes.lastMessage}>
          <LoremIpsum random={true} />
        </div>
      </div>
    </NavLink>
  );
};

export default Contact;
