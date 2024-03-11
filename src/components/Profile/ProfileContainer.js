import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setProfileFetchingState,
  setUserProfile,
} from "../../redux/profileReducer";
import Preloader from "../Users/Loading/Preloader";
import Error from "../Users/Error/Error";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setProfileFetchingState("success");
        this.props.setUserProfile(response.data);
      })
      .catch((error) => {
        this.props.setProfileFetchingState("error");
      });
  }

  render() {
    switch (this.props.fetchingState) {
      case "success":
        return <Profile {...this.props} />;
      case "loading":
        return <Preloader />;
      case "error":
        return <Error />;
      default:
        break;
    }
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  fetchingState: state.profilePage.fetchingState,
});

export default connect(mapStateToProps, {
  setUserProfile,
  setProfileFetchingState,
})(ProfileContainer);
