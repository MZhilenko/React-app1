import React, { Component } from "react";
import StoreContext from "../../../storeContext";
import Posts from "./Posts";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => <Posts posts={store.getState().profilePage.posts} />}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
