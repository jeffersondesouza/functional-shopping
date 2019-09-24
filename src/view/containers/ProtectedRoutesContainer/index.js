import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "./../../../store/rootActions";
import selectToken from "../../../store/selectors/selectToken";
import Maybe from "../../../utils/functors/Maybe";
import selectIsValidatingToken from "../../../store/selectors/selectIsValidatingToken";

export class ProtectedRoutesContainer extends Component {

  onUnload = event => {
    if (Maybe.of(this.props.token).get()) {
      window.localStorage.setItem("token", this.props.token);
    }
  };

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (token) {
      this.props.validateToken(token);
      window.localStorage.removeItem("token");
    }
    window.addEventListener("beforeunload", this.onUnload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload);
  }

  render() {
    const { children, isValidatingToken } = this.props;

    if (isValidatingToken) {
      return <div>Loadding</div>;
    }

    return <>{children}</>;
  }
}

const mapStateToProps = state => ({
  token: selectToken(state),
  isValidatingToken: selectIsValidatingToken(state)
});

const mapDispatchToProps = dispatch => ({
  validateToken: token => dispatch(actions.user.validateTokenRequest(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoutesContainer);
