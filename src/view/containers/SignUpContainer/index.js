import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { SignUpForm } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";

const SignUpContainer = props => {
  const { signUp, isLooged } = props;

  if (isLooged) {
    return <Redirect to="/orders" />;
  }

  return (
    <>
      <SignUpForm onSignUp={signUp} />
    </>
  );
};

const mapStateToProps = state => ({
  isLooged: selectIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(actions.user.signUpRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
