import React, { useState, useEffect } from "react";
import naturalSum from "../../../utils/math/naturalSum";

const imgLink =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAuJKZMsVve-JO1mZcuEQ72D-X5e2DPjiNhcvcdlYXKc8nE5h-oc&usqp=CAc";

const ProductDetails = props => {
  const { productId, onAddToChart } = props;

  const [order, setOrder] = useState({ productId: null, quantity: 0 });

  useEffect(() => {
    setOrder({
      productId: productId,
      quantity: 0
    });
  }, [productId]);

  const handleSubmit = e => {
    e.preventDefault();
    onAddToChart(order);
  };

  const handlChangeQuantity = increment => () =>
    setOrder({
      ...order,
      quantity: naturalSum(order.quantity, increment)
    });

  /* See tghe diference   
  const handlChangeQuantity = increment => () => {
    const newQuantity = order.quantity + increment;
    setOrder({
      ...order,
      quantity: newQuantity >= 0 ? newQuantity : 0
    });

    const setQuantity = (actualQuantity, increment) =>
      naturalValue(actualQuantity + increment);
  };
  */

  return (
    <div className="row">
      <div className="col s12 m5">
        <img src={imgLink} alt="" className="responsive-img" />
      </div>
      <div className="col s12 m6">
        <header>
          <h4>Product</h4>
        </header>
        <div className="ProductDetails__description">
          <p>description of the product</p>
        </div>
        <form onSubmit={handleSubmit} className="ChartForm">
          <div className="ChartForm__content">
            <div className="ChartForm__quantity">
              <input value={order.quantity} readOnly />
            </div>
            <div className="ChartForm__buttons">
              <button
                type="button"
                onClick={handlChangeQuantity(1)}
                className="btn-floating deep-purple"
              >
                <i className="material-icons">add</i>
              </button>
              <button
                onClick={handlChangeQuantity(-1)}
                type="button"
                className="btn-floating deep-purple"
              >
                <i className="material-icons">remove</i>
              </button>
            </div>
            <div className="ChartForm__action">
              <button onClick={handleSubmit} className="btn deep-purple">
                Add to Chart
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
