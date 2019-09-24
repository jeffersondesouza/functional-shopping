import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginForm } from "../../components";

import actions from "./../../../store/rootActions";
import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";

const LoginContainer = props => {
  const { dispatchLogin, isLoggedIn } = props;

  if (isLoggedIn) {
    return <Redirect to="/orders" />;
  }

  return <LoginForm onLogin={dispatchLogin} />;
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: data => dispatch(actions.user.loginRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
