/* @flow */
import type { HttpRequest } from "./../../types/HttpRequest";

export default (token: string, data: any): HttpRequest => ({
  method: "POST",
  url: "http://localhost:3001/products",
  data,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`
  }
});
