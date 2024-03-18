import React from "react";
import classes from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/avatar.png";
import Preloader from "./Loading/Preloader";
import Error from "./Error/Error";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(Number(props.totalUsersCount) / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.users}>
      {props.fetchingState === "loading" && <Preloader />}
      {props.fetchingState === "error" && <Error />}
      {props.users.map((user) => (
        <div key={user.id} className={classes.user}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small ? user.photos.small : defaultUserPhoto}
              alt={user.name}
              className={classes.avatar}
            />
          </NavLink>
          <div className={classes.info}>
            <NavLink to={"/profile/" + user.id}>
              <div className={classes.name}>{user.name}</div>
            </NavLink>
            <div className={classes.status}>{user.status}</div>
            <div className={classes.location}>South Park</div>
          </div>
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}
              className={classes.unfollow}
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}
              className={classes.follow}
            >
              FOLLOW
            </button>
          )}
        </div>
      ))}
      <div className={classes.pagination}>
        {pages.map((page) => {
          if (page <= 5)
            return (
              <span
                onClick={() => {
                  props.onPageChanged(page);
                }}
                className={props.currentPage == page && classes.active}
              >
                {page}
              </span>
            );
        })}
      </div>
    </div>
  );
};

export default Users;
