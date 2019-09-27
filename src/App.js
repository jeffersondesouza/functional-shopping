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
  MainHeaderContainer
  // ProtectedRoutesContainer
} from "./view/containers";
import PrivateRoutesContainer from "./view/containers/PrivateRoutesContainer";
import TokenKeeperProvider from "./view/containers/TokenKeeperProvider";

const App = () => {
  return (
    <div className="App">
      <TokenKeeperProvider>
        {params => {
          const { storedToken } = params;
          return (
            <>
              <div>{JSON.stringify(params)}</div>
              <MainHeaderContainer />
              <div className="container App__container">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/products" component={Products} />
                  <Route
                    exact
                    path="/products/:id"
                    component={ProductDetails}
                  />
                  <PrivateRoutesContainer storedToken={storedToken}>
                    <Route
                      exact
                      path="/create-product"
                      component={CreateProduct}
                    />
                    <Route exact path="/orders" component={Orders} />
                  </PrivateRoutesContainer>
                  <Route path="*" component={Products} />
                </Switch>
              </div>
            </>
          );
        }}
      </TokenKeeperProvider>
    </div>
  );
};

export default App;
