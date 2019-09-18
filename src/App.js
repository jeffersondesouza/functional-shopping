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
      <div className="container">
        <Switch>
          <Route exact to="/" component={Login} />
          <Route exact to="/signup" component={SignUp} />
          <Route exact to="/products" component={Orders} />
          <Route exact to="/add-products" component={AddProduct} />
          <Route exact to="/products/:id" component={ProductDetails} />
          <Route exact to="/orders" component={Products} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
