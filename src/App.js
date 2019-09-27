import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import {
  MainHeaderContainer
  // ProtectedRoutesContainer
} from "./view/containers";
import PrivateRoutesContainer from "./view/containers/PrivateRoutesContainer";
import TokenKeeperProvider from "./view/containers/TokenKeeperProvider";

/* import {
  CreateProduct,
  Login,
  SignUp,
  Orders,
  ProductDetails,
  Products
} from "./view/pages";
 */

const CreateProduct = React.lazy(() => import("./view/pages/CreateProduct"));
const Login = React.lazy(() => import("./view/pages/Login"));
const SignUp = React.lazy(() => import("./view/pages/SignUp"));
const Orders = React.lazy(() => import("./view/pages/Orders"));
const ProductDetails = React.lazy(() => import("./view/pages/ProductDetails"));
const Products = React.lazy(() => import("./view/pages/Products"));

const App = () => {
  return (
    <div className="App">
      <TokenKeeperProvider>
        {params => {
          const { storedToken } = params;
          return (
            <Suspense fallback={<div>Loading Pages...</div>}>
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
            </Suspense>
          );
        }}
      </TokenKeeperProvider>
    </div>
  );
};

export default App;
