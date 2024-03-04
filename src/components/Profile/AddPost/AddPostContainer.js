import React, { Component } from "react";
import classes from "./AddPost.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import AddPost from "./AddPost";
import StoreContext from "../../../storeContext";

const AddPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
          let text = "";
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        let onPostChange = (newText) => {
          store.dispatch(updateNewPostTextActionCreator(newText));
        };
        return (
          <AddPost
            postChange={onPostChange}
            addPost={onAddPost}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default AddPostContainer;
