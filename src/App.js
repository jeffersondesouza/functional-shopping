import React from "react";
import { Switch, Route } from "react-router-dom";

import MainNavBar from "./view/components/MainNavBar";
import {
  AddProduct,
  Login,
  SignUp,
  Orders,
  ProductDetails,
  Products
} from "./view/pages";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <div className="container App__container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/create-product" component={AddProduct} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={Products} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
