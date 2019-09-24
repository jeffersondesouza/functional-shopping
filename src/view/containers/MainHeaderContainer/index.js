import React from "react";
import { connect } from "react-redux";
import { MainNavBar } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLogged from "../../../store/selectors/selectIsLogged";
import selectTotalProducts from "../../../store/selectors/selectTotalProducts";

const MainHeaderContainer = props => {
  const { isLoggedIn, totalProducts, logout } = props;
  console.log('isLoggedIn:', isLoggedIn)
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
  isLoggedIn: selectIsLogged(state),
  totalProducts: selectTotalProducts(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.user.logoutRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeaderContainer);
