import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/Login" />;
      return <Component {...this.props} />;
    }
  }
  let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  RedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return RedirectComponent;
};

export default withAuthRedirect;
