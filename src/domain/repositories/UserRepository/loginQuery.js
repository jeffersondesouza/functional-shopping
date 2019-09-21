/* @flow */
import type { HttpRequest } from "./../../types/HttpRequest";
import type { Login } from "./../../types/Login";

export default (data: Login): HttpRequest => ({
  method: "POST",
  url: "http://localhost:3001/user/login",
  data,
  headers: {
    'Content-Type': 'application/json',
  },
});
