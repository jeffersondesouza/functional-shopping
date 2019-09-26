import React from "react";
import { connect } from "react-redux";
import { CreateProductForm } from "../../components";

import actions from "../../../store/rootActions";

const CreateProductContainer = props => {
  const { createProductSuccess, createProduct } = props;

  return (
    <>
      <CreateProductForm
        onCreateProduct={createProduct}
        createProductSuccess={createProductSuccess}
      />
    </>
  );
};

const mapStateToProps = state => ({
  createProductSuccess: state.product.createProductSuccess
});

const mapDispatchToProps = dispatch => ({
  createProduct: data => dispatch(actions.product.createProductRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);
