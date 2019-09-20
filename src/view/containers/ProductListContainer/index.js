import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProductList } from "../../components";

import actions from "./../../../store/rootActions";

const ProductListContainer = props => {
  const { dispatchLoadProducts } = props;

  useEffect(() => {
    dispatchLoadProducts();
  }, [dispatchLoadProducts]);

  return (
    <>
      <ProductList />
    </>
  );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  dispatchLoadProducts: () => dispatch(actions.product.loadProductRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
