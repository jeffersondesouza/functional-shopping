import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { SignUpForm } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLogged from "../../../store/selectors/selectIsLogged";

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
  isLooged: selectIsLogged(state)
});

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(actions.user.signUpRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
