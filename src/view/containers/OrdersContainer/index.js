import React from "react";
import { connect } from "react-redux";
import { OrdersList } from "../../components";

import actions from "../../../store/rootActions";

const OrdersContainer = props => {
  return (
    <>
      <OrdersList />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
