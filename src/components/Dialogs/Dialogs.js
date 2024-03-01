import React, { Component } from "react";
import classes from "./Dialogs.module.css";
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
import { Route, Routes } from "react-router-dom";

const dialogsArr = [
  {
    id: 1,
    messages: [
      {
        who: "me",
        text: "0 ullamco laboris nisi ut aliquip",
      },

      {
        who: "me",
        text: "0ncididunt , quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },

      {
        who: "he",
        text: "0ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },

      {
        who: "me",
        text: "0ncididunt quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },
    ],
  },
  {
    id: 2,
    messages: [
      {
        who: "me",
        text: "1 ullamco laboris nisi ut aliquip",
      },

      {
        who: "me",
        text: "1ncididunt , quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },

      {
        who: "he",
        text: "1ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },

      {
        who: "he",
        text: "1ncididunt quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },
    ],
  },
];

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <Contacts dialogs={props.dialogs} />
      <Messages
        messages={props.messages}
        dispatch={props.dispatch}
        newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
