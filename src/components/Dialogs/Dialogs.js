import React, { Component } from "react";
import classes from "./Dialogs.module.css";
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <Contacts />
      <Messages />
    </div>
  );
};

export default Dialogs;
