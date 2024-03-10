import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  addUsersAC,
  followAC,
  setPageNumberAC,
  setUsersCountAC,
  unfollowAC,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    addUsers: (users) => {
      dispatch(addUsersAC(users));
    },
    setPageNumber: (pageNumber) => {
      dispatch(setPageNumberAC(pageNumber));
    },
    setUsersCount: (usersCount) => {
      dispatch(setUsersCountAC(usersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
