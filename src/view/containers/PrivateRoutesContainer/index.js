import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import actions from "./../../../store/rootActions";
import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";
import selectToken from "../../../store/selectors/selectToken";

const PrivateRoutesContainer = props => {
  const {
    children,
    validateToken,
    token,
    isLoggedIn,
    isValidatingToken
  } = props;

  const [isLoadingComponent, setIsLoadingComponent] = useState(true);

  useEffect(() => {
    console.log("PrivateRoutesContainer: ", token);
    if (!isLoggedIn) {
      console.log("validate ");
      validateToken(token);
    }
  }, [token]);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoadingComponent(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isValidatingToken) {
      setIsLoadingComponent(false);
    }
  }, [isValidatingToken]);

  console.log({ 1: 1, isLoggedIn, isValidatingToken, isLoadingComponent });

  if (isValidatingToken || isLoadingComponent) {
    return <div>Loading...</div>;
  }
  console.log({ isLoggedIn, isValidatingToken });

  if (!isLoggedIn && !isValidatingToken) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

const mapStateToProps = state => ({
  token: selectToken(state),
  isLoggedIn: selectIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  validateToken: token => dispatch(actions.user.validateTokenRequest(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoutesContainer);
