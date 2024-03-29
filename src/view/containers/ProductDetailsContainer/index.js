import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, ProductDetails, LoginForm } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLoggedIn from "../../../store/selectors/selectIsLoggedIn";
import selectCreateOrderSuccess from "../../../store/selectors/selectCreateOrderSuccess";

const ProductDetailsContainer = props => {
  const {
    isLoggedIn,
    login,
    addOrderSuccess,
    createOrder,
    createOrderSuccess
  } = props;

  const [modal, setModal] = useState(null);
  const [order, setOrder] = useState({});

  const { M } = { window };

  useEffect(() => {
    setModal(window.M.Modal.getInstance(document.getElementById("modal1")));
    return () => {
      setOrder({});
    };
  }, [M]);

  useEffect(() => {
    if (isLoggedIn && order.productId) {
      createOrder(order);
    }

    if (isLoggedIn && modal) {
      modal.close();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, modal, order]);

  useEffect(() => {
    setOrder({});
  }, [addOrderSuccess]);

  const handleAddToChart = newOrder => {
    setOrder(newOrder);
    if (!isLoggedIn && modal) {
      modal.open();
    }
  };

  const handleLogin = data => {
    login(data);
  };

  return (
    <>
      <Modal modalId="modal1">
        <header>Antes de Adicionar ao Carrinho faça Seu Login</header>
        <LoginForm onLogin={handleLogin} />
      </Modal>

      <ProductDetails
        createOrderSuccess={createOrderSuccess}
        productId={props.match.params.id}
        onAddToChart={handleAddToChart}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  createOrderSuccess: selectCreateOrderSuccess(state)
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(actions.user.loginRequest(data)),
  createOrder: data => dispatch(actions.order.createOrderRequest(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetailsContainer)
);
