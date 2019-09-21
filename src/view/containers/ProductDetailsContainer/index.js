import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, ProductDetails, LoginForm } from "../../components";

import actions from "../../../store/rootActions";
import selectIsLogged from "../../../store/selectors/selectIsLogged";

const ProductDetailsContainer = props => {
  const { isLoggedIn, login } = props;

  const [modal, setModal] = useState(null);
  const [order, setOrder] = useState({ id: null, quantity: 0 });

  const { M } = { window };

  useEffect(() => {
    setModal(window.M.Modal.getInstance(document.getElementById("modal1")));
  }, [M]);

  const handleAddToChart = () => {
    // modal.open();
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
  login: data => dispatch(actions.user.loginRequest(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetailsContainer)
);
