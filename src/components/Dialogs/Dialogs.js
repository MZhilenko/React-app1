import React from "react";
import classes from "./Dialogs.module.css";
import ContactsContainer from "./Contacts/ContactsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <ContactsContainer />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
