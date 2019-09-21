/* @flow */
import type { HttpRequest } from "./../../types/HttpRequest";
import type { Login } from "./../../types/Login";

const logoutQuery = (data: Login): HttpRequest => ({
  method: "POST",
  url: "http://localhost:3001/user/logout",
  data,
  headers: {
    "Content-Type": "application/json"
  }
});

export default logoutQuery;
