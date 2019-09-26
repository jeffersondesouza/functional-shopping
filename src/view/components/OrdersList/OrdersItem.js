import React from "react";
import "./styles.scss";

const OrdersItem = props => {
  const { id, product, quantity, onBuy, onDelete } = props;

  const handleBuy = () => onBuy(id);
  const handleDelete = () => onDelete(id);

  return (
    <div className="OrdersItem">
      <div className="OrdersItem__summary">
        <div>{product.name}</div>
        <div className="blue-grey-text darken-4">Quantity: {quantity}</div>
      </div>
      <div className="OrdersItem__action">
        <button
          onClick={handleBuy}
          type="button"
          className="btn green darken-1 OrdersItem__buy"
        >
          Buy
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="btn-floating red darken-4"
        >
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  );
};

export default OrdersItem;
