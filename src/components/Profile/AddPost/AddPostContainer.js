import React, { Component } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import AddPost from "./AddPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    postChange: (body) => {
      dispatch(updateNewPostTextActionCreator(body));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
