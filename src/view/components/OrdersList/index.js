import React from "react";
import OrdersItem from "./OrdersItem";

const OrdersList = () => (
  <ul className="collection">
    <li className="collection-item">
      <OrdersItem />
    </li>
    <li className="collection-item">
      <OrdersItem />
    </li>
    <li className="collection-item">
      <OrdersItem />
    </li>
    <li className="collection-item">
      <OrdersItem />
    </li>
  </ul>
);

export default OrdersList;
