import React from "react";
import { connect } from "react-redux";
import { SignUpForm } from "../../components";

import actions from "../../../store/rootActions";

const SignUpContainer = props => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
