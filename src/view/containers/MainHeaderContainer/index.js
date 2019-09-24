import React from "react";
import { connect } from "react-redux";
import { MainNavBar } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";
import selectTotalProducts from "../../../store/selectors/selectTotalProducts";

const MainHeaderContainer = props => {
  const { isLoggedIn, totalProducts, logout } = props;
  return (
    <>
      <MainNavBar
        totalProducts={totalProducts}
        isLoggedIn={isLoggedIn}
        onLogout={logout}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  totalProducts: selectTotalProducts(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.user.logoutRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeaderContainer);
