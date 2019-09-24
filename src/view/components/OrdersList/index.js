import React from "react";
import OrdersItem from "./OrdersItem";

const OrdersList = ({ orders, onBuy, onDelete }) => (
  <ul className="collection">
    {orders.map(order => (
      <li key={order.id} className="collection-item">
        <OrdersItem {...order} onBuy={onBuy} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);

export default OrdersList;
