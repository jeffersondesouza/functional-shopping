import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OrdersList } from "../../components";

import actions from "../../../store/rootActions";
import selectOrders from "../../../store/selectors/selectOrders";

const OrdersContainer = props => {
  const { loadOrders, orders, buyOrder, deleteOrder } = props;

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <>
      <OrdersList orders={orders} onBuy={buyOrder} onDelete={deleteOrder} />
    </>
  );
};

const mapStateToProps = state => ({ orders: selectOrders(state) });

const mapDispatchToProps = dispatch => ({
  loadOrders: () => dispatch(actions.order.loadOrdersRequest()),
  buyOrder: id => dispatch(actions.order.buyOrderRequest(id)),
  deleteOrder: id => dispatch(actions.order.deleteOrdersRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
