import React, { Component } from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return (
    <div className={classes.profileCard}>
      <img
        src={props.profile.photos.large}
        alt={props.profile.fullName}
        className={classes.img}
      />
      <div className={classes.info}>
        <div className={classes.name}>{props.profile.fullName}</div>

        <div className={classes.item}>{props.profile.aboutMe}</div>
        <div className={classes.item}>
          <strong>Education:</strong> RosNOU
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
