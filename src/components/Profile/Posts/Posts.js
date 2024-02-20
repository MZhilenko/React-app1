import React, { Component } from "react";
import classes from "./Posts.module.css";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import ProfileCard from "../ProfileCard/ProfileCard";

const Posts = () => {
  return (
    <div className={classes.posts}>
      <ProfileCard />
      <AddPost />
      <Post text="Lorem ipsum dolor sit amet"/>
      <Post text="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed"/>
      <Post text="ullamcorper. Cras pulvinar mattis nunc sed blandit. Non quam lacus suspendisse faucibus interdum. Ornare arcu odio ut sem nulla. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ac tortor vitae purus"/>
    </div>
  );
};

export default Posts;