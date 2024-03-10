let initialState = {
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
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
    case "ADD_USERS": {
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
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const addUsersAC = (users) => ({ type: "ADD_USERS", users });
export const setUsersCountAC = (usersCount) => ({
  type: "SET_USERS_COUNT",
  usersCount,
});
export const setPageNumberAC = (pageNumber) => ({
  type: "SET_PAGE_NUMBER",
  pageNumber,
});

export default usersReducer;
