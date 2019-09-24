import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OrdersList } from "../../components";

import actions from "../../../store/rootActions";
import selectOrders from "../../../store/selectors/selectOrders";

const OrdersContainer = props => {
  const { loadOrders, orders } = props;

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <>
      <OrdersList orders={orders} />
    </>
  );
};

const mapStateToProps = state => ({ orders: selectOrders(state) });

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(actions.order.loadOrdersRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
