import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
import AddMessage from "./addMessage";
import StoreContext from "../../../../storeContext";

const AddMessageContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
          store.dispatch(updateNewMessageTextActionCreator(""));
        };
        let changeText = (newText) => {
          store.dispatch(updateNewMessageTextActionCreator(newText));
        };
        return (
          <AddMessage
            newMessageText={store.getState().dialogsPage.newMessageText}
            addMessage={addMessage}
            changeText={changeText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default AddMessageContainer;
