import React from "react";
import "./styles.scss";
const imgLink =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAuJKZMsVve-JO1mZcuEQ72D-X5e2DPjiNhcvcdlYXKc8nE5h-oc&usqp=CAc";

const ProductDetails = () => {
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
        <form action="#" className="ChartForm">
          <div className="ChartForm__content">
            <div className="ChartForm__quantity">
              <input value="1" />
            </div>
            <div className="ChartForm__buttons">
              <button type="button" className="btn-floating deep-purple">
                <i className="material-icons">add</i>
              </button>
              <button type="button" className="btn-floating deep-purple">
                <i className="material-icons">remove</i>
              </button>
            </div>
            <div className="ChartForm__action">
              <button className="btn deep-purple">Add to Chart</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
