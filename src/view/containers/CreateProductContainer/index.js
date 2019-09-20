import React from "react";
import { connect } from "react-redux";
import { CreateProductForm } from "../../components";

import actions from "../../../store/rootActions";

const CreateProductContainer = props => {
  return (
    <>
      <CreateProductForm />
    </>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductContainer);
