import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProductList } from "../../components";

import actions from "./../../../store/rootActions";
import selectProductList from "../../../store/selectors/selectProductList";

const ProductListContainer = props => {
  const {products, dispatchLoadProducts } = props;

  useEffect(() => {
    dispatchLoadProducts();
  }, [dispatchLoadProducts]);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

const mapStateToProps = state => ({ products: selectProductList(state) });

const mapDispatchToProps = dispatch => ({
  dispatchLoadProducts: () => dispatch(actions.product.loadProductRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
