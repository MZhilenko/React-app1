import React, { Component } from "react";
import classes from "./Dialogs.module.css";
// import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
// import { Route, Routes } from "react-router-dom";
import ContactsContainer from "./Contacts/ContactsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <ContactsContainer
      // dialogs={props.dialogs}
      />
      <MessagesContainer
      // messages={props.messages}
      // dispatch={props.dispatch}
      // newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
