import React from "react";
import { connect } from "react-redux";
import { CreateProductForm } from "../../components";

import actions from "../../../store/rootActions";

const CreateProductContainer = props => {
  const { createProductSuccess } = props;

  return (
    <>
      <CreateProductForm createProductSuccess={createProductSuccess} />
    </>
  );
};

const mapStateToProps = state => ({
  createProductSuccess: state.product.createProductSuccess
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);
