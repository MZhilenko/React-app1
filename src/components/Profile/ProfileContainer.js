import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setProfileFetchingState,
  setUserProfile,
  getUserProfile,
} from "../../redux/profileReducer";
import Preloader from "../Users/Loading/Preloader";
import Error from "../Users/Error/Error";
import { useParams } from "react-router-dom";

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
      userId = 30924;
    }
    this.props.getUserProfile(userId);
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
  getUserProfile,
  setProfileFetchingState,
})(ProfileContainerWithRouter);
