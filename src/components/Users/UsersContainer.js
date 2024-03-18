import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  getUsers,
  setFetchingState,
  setPageNumber,
  setUsers,
  setUsersCount,
  unfollow,
} from "../../redux/usersReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNum) => {
    this.props.setPageNumber(pageNum);
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  onFollow = (userId) => {
    this.props.follow(userId);
  };

  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        fetchingState={this.props.fetchingState}
        users={this.props.users}
        unfollow={this.onUnfollow}
        follow={this.onFollow}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    fetchingState: state.usersPage.fetchingState,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPageNumber,
  setUsersCount,
  setFetchingState,
  getUsers,
})(UsersAPIComponent);
