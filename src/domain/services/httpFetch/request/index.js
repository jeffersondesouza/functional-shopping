//  @flow
import axios from "axios";

import type { HttpResponse } from "./../../../types/HttpResponse";
import type { HttpRequest } from "./../../../types/HttpRequest";

import parseHttpResponse from "./parseHttpResponse";

type RequestType = HttpRequest | (() => HttpRequest);

const request = (requestOptions: RequestType, ...args: any[]): HttpResponse => {
  if (typeof requestOptions === "function") {
    return axios(requestOptions(...args)).then(parseHttpResponse);
  }
  return axios(requestOptions).then(parseHttpResponse);
};
export default request;
