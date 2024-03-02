import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
import AddMessage from "./addMessage";

const AddMessageContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    props.dispatch(updateNewMessageTextActionCreator(""));
  };
  let changeText = (newText) => {
    props.dispatch(updateNewMessageTextActionCreator(newText));
  };
  return (
    <AddMessage
      newMessageText={props.newMessageText}
      addMessage={addMessage}
      changeText={changeText}
    />
  );
};

export default AddMessageContainer;
