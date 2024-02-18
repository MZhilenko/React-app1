import React, { Component } from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={classes.profileCard}>
      <img
        src="https://preview.redd.it/eric-cartman-from-south-park-v0-k3zxtwfpy4la1.png?width=640&crop=smart&auto=webp&s=25e933970099cceea6e7a1842c5bdc75703d5d0a"
        alt="user"
        className={classes.img}
      />
      <div className={classes.info}>
        <div className={classes.name}>Eric Cartman</div>
        <div className={classes.item}>
          <strong>Date of Barth:</strong> 18 March
        </div>
        <div className={classes.item}>
          <strong>City:</strong> Moscow
        </div>
        <div className={classes.item}>
          <strong>Education:</strong> RosNOU
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
