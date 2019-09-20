import React from "react";

const ProductImage = ({ imgLink, children }) => {
  return (
    <div className="card-image">
      <img src={imgLink} alt="" />
      {children}
    </div>
  );
};

export default ProductImage;
