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
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI
      .getProfileUser(userId)
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

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
  setProfileFetchingState,
})(ProfileContainerWithRouter);
