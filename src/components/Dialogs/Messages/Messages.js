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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      />
      <Message
        isMe={true}
        text="r in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E"
      />
      <Message isMe={true} text="quis nostrud" />
      <Message
        isMe={false}
        text="ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
      />
      <Message isMe={false} text="sit " />
    </div>
  );
};

export default Messages;
