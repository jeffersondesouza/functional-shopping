import axios from "axios";

import type { HttpResponse } from "./../../../types/HttpResponse";
import parseHttpResponse from "./parseHttpResponse";

const request = (requestOptions, customMapperFn): HttpResponse =>
  axios(requestOptions).then(parseHttpResponse);

export default request;
