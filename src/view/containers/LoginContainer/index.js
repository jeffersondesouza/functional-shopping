import React from "react";
import { connect } from "react-redux";
import { LoginForm } from "../../components";

import actions from "./../../../store/rootActions";

const LoginContainer = props => {
  const handleLogin = data => {
    console.log("data:", data);
  };

  return (
    <>
      <LoginForm onLogin={handleLogin} />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
