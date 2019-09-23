import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, ProductDetails, LoginForm } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLogged from "../../../store/selectors/selectIsLogged";

const ProductDetailsContainer = props => {
  const { isLoggedIn, login, addOrderSuccess } = props;

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
    if (isLoggedIn && order.id) {
      console.log(order);
    }

    if (isLoggedIn && modal) {
      modal.close();
    }
  }, [isLoggedIn, modal, order]);

  useEffect(() => {
    setOrder({});
  }, [addOrderSuccess]);

  const handleAddToChart = newOrder => {
    setOrder(newOrder);
    if (!isLoggedIn) {
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
        id={props.match.params.id}
        onAddToChart={handleAddToChart}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLogged(state)
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(actions.user.loginRequest(data)),
  creteOrder: data => dispatch(actions.order.createOrderRequest(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetailsContainer)
);
