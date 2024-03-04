import React from "react";
import classes from "./Profile.module.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import AddPostContainer from "./AddPost/AddPostContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
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
