/* @flow */
import type { HttpRequest } from "./../../../types/HttpRequest";

type ProductOrder = {
  productId: string,
  quantity: number
};

export default (token: string, data: ProductOrder): HttpRequest => ({
  method: "POST",
  url: "http://localhost:3001/orders",
  data,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`
  }
});
