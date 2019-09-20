import React from "react";
import Product from "./Product";

const ProductList = () => (
  <ul className="row">
    <li className="col s12 m4">
      <Product />
    </li>
    <li className="col s12 m4">
      <Product />
    </li>
    <li className="col s12 m4">
      <Product />
    </li>
    <li className="col s12 m4">
      <Product />
    </li>
  </ul>
);

export default ProductList;
