import React from "react";
import ProductImage from "./ProductImage";
import ProductAction from "./ProductAction";
import ProductContent from "./ProductContent";

const imgLink =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAuJKZMsVve-JO1mZcuEQ72D-X5e2DPjiNhcvcdlYXKc8nE5h-oc&usqp=CAc";

const Product = props => {
  const { id, name } = props;

  return (
    <div className="card">
      <ProductImage imgLink={imgLink}>
        <ProductAction id={id} />
      </ProductImage>
      <ProductContent name={name} id={id} />
    </div>
  );
};

export default Product;
