/* @flow */
import type { HttpRequest } from "./../../../types/HttpRequest";

export default (token: string): HttpRequest => ({
  method: "GET",
  url: "http://localhost:3001/orders",
  headers: {
    Authorization: `bearer ${token}`
  }
});
