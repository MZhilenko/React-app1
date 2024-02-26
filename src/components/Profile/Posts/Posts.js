import React, { Component } from "react";
import classes from "./Posts.module.css";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import ProfileCard from "../ProfileCard/ProfileCard";

const Posts = (props) => {
  let postList = props.posts.map((post) => (
    <Post
      text={post.text}
      img={post.img}
      date={post.date}
      likeCount={post.likeCount}
    />
  ));
  return (
    <div className={classes.posts}>
      <ProfileCard />
      <AddPost />
      {postList}
    </div>
  );
};

export default Posts;
