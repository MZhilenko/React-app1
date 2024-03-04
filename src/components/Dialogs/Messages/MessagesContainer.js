import React, { Component } from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import AddMessageContainer from "./addMessage/addMessageContainer";
import StoreContext from "../../../storeContext";
import Messages from "./Messages";
// import Contacts from "./Contacts/Contacts";

const MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => <Messages messages={store.getState().dialogsPage.messages} />}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
