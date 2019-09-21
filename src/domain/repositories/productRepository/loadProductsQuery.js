/* @flow */
import type { HttpRequest } from "./../../types/HttpRequest";

export default (): HttpRequest => ({
  method: "GET",
  url: "http://localhost:3001/products"
});
