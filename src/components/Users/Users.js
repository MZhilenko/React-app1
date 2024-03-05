import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={classes.users}>
      {props.users.map((user) => (
        <div className={classes.user}>
          <img
            src={user.avatar}
            alt={user.fullName}
            className={classes.avatar}
          />
          <div className={classes.info}>
            <div className={classes.name}>{user.fullName}</div>
            <div className={classes.status}>{user.status}</div>
            <div className={classes.location}>
              {user.location.city}, {user.location.country}
            </div>
          </div>
          {user.followed ? (
            <button
              onClick={() => props.unfollow(user.id)}
              className={classes.unfollow}
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              onClick={() => props.follow(user.id)}
              className={classes.follow}
            >
              FOLLOW
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
