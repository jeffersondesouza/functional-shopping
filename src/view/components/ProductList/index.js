import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  
  return (
    <ul className="row">
      {products.map(item => (
        <li key={item.id} className="col s12 m4">
          <Product {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
