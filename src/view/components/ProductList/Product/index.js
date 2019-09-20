import React from "react";
import ProductImage from "./ProductImage";
import ProductAction from "./ProductAction";
import ProductContent from "./ProductContent";

const imgLink =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAuJKZMsVve-JO1mZcuEQ72D-X5e2DPjiNhcvcdlYXKc8nE5h-oc&usqp=CAc";

const Product = () => {
  return (
    <div className="card">
      <ProductImage imgLink={imgLink}>
        <ProductAction />
      </ProductImage>
      <ProductContent />
    </div>
  );
};

export default Product;
