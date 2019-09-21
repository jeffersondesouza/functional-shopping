import React from "react";
import { connect } from "react-redux";
import { LoginForm } from "../../components";

import actions from "./../../../store/rootActions";

const LoginContainer = props => {
  return (
    <>
      <LoginForm onLogin={props.dispatchLogin} />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  dispatchLogin: data => dispatch(actions.user.loginRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
