import React from "react";
import { connect } from "react-redux";
import { ProductList } from "../../components";

import actions from "../../../store/rootActions";

const OrdersContainer = props => {
  return (
    <>
      <ProductList />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
