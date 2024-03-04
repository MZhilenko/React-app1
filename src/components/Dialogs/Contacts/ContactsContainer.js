import React, { Component } from "react";
import classes from "./Contacts.module.css";
import Contact from "./Contact/Contact";
import StoreContext from "../../../storeContext";
import Contacts from "./Contacts";

const ContactsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => <Contacts dialogs={store.getState().dialogsPage.dialogs} />}
    </StoreContext.Consumer>
  );
};

export default ContactsContainer;
