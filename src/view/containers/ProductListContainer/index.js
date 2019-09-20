import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProductList } from "../../components";

import actions from "./../../../store/rootActions";
import selectProductList from "../../../store/selectors/selectProductList";
import selectIsLoadingProduct from "../../../store/selectors/selectIsLoadingProduct";

const ProductListContainer = props => {
  const { products, isLoadingProducts, dispatchLoadProducts } = props;

  useEffect(() => {
    dispatchLoadProducts();
  }, [dispatchLoadProducts]);

  return (
    <>
      {isLoadingProducts ? (
        <div>isLoadingProducts...</div>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  products: selectProductList(state),
  isLoadingProducts: selectIsLoadingProduct(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadProducts: () => dispatch(actions.product.loadProductRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
