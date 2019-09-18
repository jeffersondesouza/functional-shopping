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
      <Switch>
        <Route exact to="/" component={Login} />
        <Route to="/signup" component={SignUp} />
        <Route to="/products" component={Orders} />
        <Route to="/add-products" component={AddProduct} />
        <Route to="/products/:id" component={ProductDetails} />
        <Route to="/orders" component={Products} />
        <Route to="*" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
