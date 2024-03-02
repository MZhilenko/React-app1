import React, { Component } from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import AddMessageContainer from "./addMessage/addMessageContainer";
// import Contacts from "./Contacts/Contacts";

const Messages = (props) => {
  const messagesList = props.messages.map((item) => (
    <Message isMe={item.who === "me"} text={item.text} />
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>{messagesList}</div>
      <AddMessageContainer
        dispatch={props.dispatch}
        newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Messages;
