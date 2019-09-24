import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OrdersList } from "../../components";

import actions from "../../../store/rootActions";

const OrdersContainer = props => {
  const { loadOrders } = props;

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <>
      <OrdersList />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(actions.order.loadOrdersRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
