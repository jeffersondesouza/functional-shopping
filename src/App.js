import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  CreateProduct,
  Login,
  SignUp,
  Orders,
  ProductDetails,
  Products
} from "./view/pages";
import {
  MainHeaderContainer,
  ProtectedRoutesContainer
} from "./view/containers";

const App = () => {
  return (
    <div className="App">
      <MainHeaderContainer />
      <div className="container App__container">
        <ProtectedRoutesContainer>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/create-product" component={CreateProduct} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={Products} />
          </Switch>
        </ProtectedRoutesContainer>
      </div>
    </div>
  );
};

export default App;
