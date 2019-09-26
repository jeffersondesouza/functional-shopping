/* @flow */
import type { HttpRequest } from "./../../../types/HttpRequest";
import type { SignUp } from "./../../../types/SignUp";

// parse params to camle case for  example;
const mapToSignUpAPI = data => data;

export default (data: SignUp): HttpRequest => ({
  method: "POST",
  url: "http://localhost:3001/user/signup",
  data: mapToSignUpAPI(data)
});
