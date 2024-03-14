import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  getUsersThunkCreator,
  setFetchingState,
  setPageNumber,
  setUsers,
  setUsersCount,
  unfollow,
} from "../../redux/usersReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNum) => {
    this.props.setPageNumber(pageNum);
    this.props.getUsersThunkCreator(pageNum, this.props.pageSize);
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
  getUsersThunkCreator,
})(UsersAPIComponent);
