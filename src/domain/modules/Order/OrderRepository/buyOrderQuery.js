/* @flow */
import type { HttpRequest } from "./../../../types/HttpRequest";

export default (token: string, orderID: string): HttpRequest => ({
  method: "POST",
  url: `http://localhost:3001/orders/${orderID}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`
  }
});
