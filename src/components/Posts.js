import React, { Component } from "react";
import classes from "./Posts.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import ProfileCard from "./ProfileCard";

const Posts = () => {
  return (
    <div className={classes.posts}>
      <ProfileCard />
      <AddPost />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
