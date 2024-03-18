import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(
  HeaderContainer
);
