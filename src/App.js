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
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products" component={Orders} />
        <Route path="/add-products" component={AddProduct} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/orders" component={Products} />
        <Route path="*" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
