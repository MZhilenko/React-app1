import React, { Component } from "react";
import classes from "./Message.module.css";
// import Contacts from "./Contacts/Contacts";

const Message = (props) => {
  let addClass = props.isMe ? classes.me : "";
  return (
    <div className={`${classes.item} ${addClass}`}>
      <div className={`${classes.text} ${addClass}`}>{props.text}</div>
    </div>
  );
};

export default Message;
