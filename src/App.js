import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

/* import {
  CreateProduct,
  Login,
  SignUp,
  Orders,
  ProductDetails,
  Products
} from "./view/pages";
 */

/* import PrivateRoutesContainer from "./view/containers/PrivateRoutesContainer";
import TokenKeeperProvider from "./view/containers/TokenKeeperProvider";
import MainHeaderContainer from "./view/containers/MainHeaderContainer";
 */
const PrivateRoutesContainer = React.lazy(() =>
  import("./view/containers/PrivateRoutesContainer")
);
const TokenKeeperProvider = React.lazy(() =>
  import("./view/containers/TokenKeeperProvider")
);
const MainHeaderContainer = React.lazy(() =>
  import("./view/containers/MainHeaderContainer")
);

const CreateProduct = React.lazy(() => import("./view/pages/CreateProduct"));
const Login = React.lazy(() => import("./view/pages/Login"));
const SignUp = React.lazy(() => import("./view/pages/SignUp"));
const Orders = React.lazy(() => import("./view/pages/Orders"));
const ProductDetails = React.lazy(() => import("./view/pages/ProductDetails"));
const Products = React.lazy(() => import("./view/pages/Products"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Pages...</div>}>
        <TokenKeeperProvider>
          {params => {
            const { storedToken } = params;
            return (
              <>
                <div>{JSON.stringify(params)}</div>
                <Router basename={process.env.PUBLIC_URL}>
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
                </Router>
              </>
            );
          }}
        </TokenKeeperProvider>
      </Suspense>
    </div>
  );
};

export default App;
