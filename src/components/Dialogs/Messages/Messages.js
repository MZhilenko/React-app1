import React, { Component } from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";
// import Contacts from "./Contacts/Contacts";

const Messages = (props) => {
  return (
    <div className={classes.list}>
      <Message isMe={true} text="hi" />
      <Message
        isMe={false}
        text={
          props.id +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        }
      />
      <Message
        isMe={true}
        text={
          props.id +
          "r in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E"
        }
      />
      <Message isMe={true} text="quis nostrud" />
      <Message
        isMe={false}
        text={
          props.id +
          "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
      />
      <Message isMe={false} text={props.id + "sit"} />
    </div>
  );
};

export default Messages;
