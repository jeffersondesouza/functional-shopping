import React from "react";
import { connect } from "react-redux";

import Maybe from "../../../utils/functors/Maybe";
import actions from "./../../../store/rootActions";
import selectToken from "../../../store/selectors/selectToken";

class TokenKeeperProvider extends React.Component {
  state = {
    isLoadingPage: true,
    storedToken: ""
  };

  handleReloadPage = event => {
    if (Maybe.of(this.props.token).get()) {
      window.localStorage.setItem("token", this.props.token);
    }
  };

  componentDidMount() {
    console.log("TokenKeeperProvider");
    const storedToken = window.localStorage.getItem("token");

    this.setState({
      isLoadingPage: true,
      storedToken
    });

    if (storedToken) {
      this.props.updateToken(storedToken);
      window.localStorage.removeItem("token");
    }
    window.addEventListener("beforeunload", this.handleReloadPage);

    this.setState({
      isLoadingPage: false
    });
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleReloadPage);
  }

  render() {
    const { isLoadingPage, storedToken } = this.state;
    if (isLoadingPage) {
      return <div>Is Loading...</div>;
    }
    return this.props.children({ isLoadingPage, storedToken });
  }
}

const mapStateToProps = state => ({
  token: selectToken(state)
});

const mapDispatchToProps = dispatch => ({
  updateToken: token => dispatch(actions.user.updateToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenKeeperProvider);
