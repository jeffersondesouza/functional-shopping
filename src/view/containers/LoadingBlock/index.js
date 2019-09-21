import React from "react";

import "./styles.scss";

const LoadingBlock = ({ isLoading, children }) => {
  return (
    <div className="LoadingBlock">
      {isLoading ? <div className="LoadingBlock__spinner">Loading...</div> : children}
    </div>
  );
};

export default LoadingBlock;
