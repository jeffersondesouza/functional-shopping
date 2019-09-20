import React from "react";
import { Link } from "react-router-dom";

const ProductContent = () => (
  <div className="card-content">
    <span className="card-title">Card Title</span>
    <Link to={`/products/${1}`}>More Details</Link>
  </div>
);

export default ProductContent;
