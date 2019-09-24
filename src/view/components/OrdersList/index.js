import React from "react";
import OrdersItem from "./OrdersItem";

const OrdersList = ({ orders }) => (
  <ul className="collection">
    {orders.map(order => (
      <li key={order.id} className="collection-item">
        <OrdersItem {...order} />
      </li>
    ))}
  </ul>
);

export default OrdersList;
