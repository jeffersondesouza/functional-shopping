import React, {useEffect} from "react";
import { connect } from "react-redux";

import actions from "./../../../store/rootActions";
import selectToken from "../../../store/selectors/selectToken";

// TokenKeeperContainer
const TokenKeeperProvider = ({ token }) => {

  return <div>TokenKeeperProvider {token}</div>;
};

const mapStateToProps = state => ({
  token: selectToken(state)
});

const mapDispatchToProps = dispatch => ({
  validateToken: token => dispatch(actions.user.validateTokenRequest(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenKeeperProvider);
