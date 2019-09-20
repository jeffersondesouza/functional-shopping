import React, { useEffect } from "react";
import axios from "axios";
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

const token =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW8xQGVtYWlsLmNvbSIsInVzZXJJZCI6IjVkODIzYzRlMjA3NjVjMWI0MzE1OWFlNiIsImlhdCI6MTU2ODg1NDAyMSwiZXhwIjoxNTY4ODU3NjIxfQ.C-MZvrGOntbdxmV2pfQWXF-6F5krL-6bFSpOQW6vnPc";

const App = () => {
  useEffect(() => {/* 
    const productsConfig = {
      method: "get",
      url: "http://localhost:3001/products"
    };

    const ordersConfig = {
      method: "get",
      url: "http://localhost:3001/orders",
      headers: { Authorization: token }
    };

    axios(productsConfig)
      .then(res => res.data)
      .then(res => console.log("res:", res));

    axios(ordersConfig)
      .then(res => res.data)
      .then(res => console.log("res:", res)); */
  }, []);

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
};

export default App;
