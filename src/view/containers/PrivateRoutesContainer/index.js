import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";

const PrivateRoutesContainer = props => {
  const { children, isLoggedIn } = props;

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export default connect(mapStateToProps)(PrivateRoutesContainer);
