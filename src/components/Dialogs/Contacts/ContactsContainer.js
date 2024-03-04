import React, { Component } from "react";
import Contacts from "./Contacts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

const ContactsContainer = connect(mapStateToProps)(Contacts);

export default ContactsContainer;
