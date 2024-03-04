import React from "react";
import classes from "./Profile.module.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import AddPostContainer from "./AddPost/AddPostContainer";
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileCard />
      <AddPostContainer
      // dispatch={props.dispatch}
      // newPostText={props.newPostText}
      />
      <PostsContainer
      //   posts={props.posts}
      />
    </div>
  );
};

export default Profile;
