import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
import AddMessage from "./addMessage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
      dispatch(updateNewMessageTextActionCreator(""));
    },
    changeText: (body) => {
      dispatch(updateNewMessageTextActionCreator(body));
    },
  };
};

const AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage);

export default AddMessageContainer;
