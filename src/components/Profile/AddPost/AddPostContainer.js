import React, { Component } from "react";
import classes from "./AddPost.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
  let onAddPost = () => {
    props.dispatch(addPostActionCreator());
    let text = "";
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  let onPostChange = (newText) => {
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <AddPost
      postChange={onPostChange}
      addPost={onAddPost}
      newPostText={props.newPostText}
    />
  );
};

export default AddPostContainer;
