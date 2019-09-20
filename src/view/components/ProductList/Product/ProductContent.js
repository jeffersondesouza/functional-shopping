import React from "react";
import { Link } from "react-router-dom";

const ProductContent = ({ name, id }) => (
  <div className="card-content">
    <span className="card-title">{name}</span>
    <Link to={`/products/${id}`}>More Details</Link>
  </div>
);

export default ProductContent;
