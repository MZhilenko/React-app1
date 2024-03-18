import { authAPI } from "../api";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  fetchingState: "success",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_USER_DATA": {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (data) => ({
  type: "SET_AUTH_USER_DATA",
  data,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI
    .me()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data));
      }
    })
    .catch((error) => {
      // this.props.setFetchingState("error");
    });
};

export default authReducer;
