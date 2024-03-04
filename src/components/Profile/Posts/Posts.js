import React, { Component } from "react";
import classes from "./Posts.module.css";
import Post from "../Post/Post";
import ProfileCard from "../ProfileCard/ProfileCard";
import AddPostContainer from "../AddPost/AddPostContainer";

const Posts = (props) => {
  let postList = props.posts.map((post) => (
    <Post
      text={post.text}
      img={post.img}
      date={post.date}
      likeCount={post.likeCount}
    />
  ));
  return <div className={classes.posts}>{postList}</div>;
};

export default Posts;
