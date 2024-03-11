import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import {
  follow,
  setFetchingState,
  setPageNumber,
  setUsers,
  setUsersCount,
  unfollow,
} from "../../redux/usersReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setFetchingState("loading");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFetchingState("success");
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(Number(response.data.totalCount));
      })
      .catch((error) => {
        this.props.setFetchingState("error");
      });
  }
  onPageChanged = (pageNum) => {
    this.props.setFetchingState("loading");
    this.props.setPageNumber(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFetchingState("success");
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        this.props.setFetchingState("error");
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        fetchingState={this.props.fetchingState}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
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
})(UsersAPIComponent);
