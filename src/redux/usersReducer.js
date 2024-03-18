import { usersAPI } from "../api";

let initialState = {
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
  fetchingState: "success",
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }
    case "SET_PAGE_NUMBER": {
      return { ...state, currentPage: action.pageNumber };
    }
    case "SET_USERS_COUNT": {
      return { ...state, totalUsersCount: action.usersCount };
    }
    case "SET_FETCHING_STATE": {
      return { ...state, fetchingState: action.fetchingState };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: "FOLLOW", userId });
export const unfollowSuccess = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsers = (users) => ({ type: "SET_USERS", users });
export const setUsersCount = (usersCount) => ({
  type: "SET_USERS_COUNT",
  usersCount,
});
export const setPageNumber = (pageNumber) => ({
  type: "SET_PAGE_NUMBER",
  pageNumber,
});
export const setFetchingState = (fetchingState) => ({
  type: "SET_FETCHING_STATE",
  fetchingState,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetchingState("loading"));
    usersAPI
      .getUsers(currentPage, pageSize)
      .then((response) => {
        dispatch(setFetchingState("success"));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersCount(Number(response.data.totalCount)));
      })
      .catch((error) => {
        dispatch(setFetchingState("error"));
      });
  };
};

export const follow = (userId) => (dispatch) => {
  usersAPI.followUser(userId).then((response) => {
    if (response.data.resultCode == 0) {
      dispatch(followSuccess(userId));
    }
  });
};

export const unfollow = (userId) => (dispatch) => {
  usersAPI.unfollowUser(userId).then((response) => {
    if (response.data.resultCode == 0) {
      dispatch(unfollowSuccess(userId));
    }
  });
};

export default usersReducer;
