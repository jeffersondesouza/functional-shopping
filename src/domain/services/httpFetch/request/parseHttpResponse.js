// @flow
import type { HttpResponse } from "./../../../types/HttpResponse";

import parseToCamel from "../../../../utils/object/parseSnakeCaseToCamelObject";
import Try from "../../../../utils/functors/Try";
import Maybe from "../../../../utils/functors/Maybe";

type ServerResponse = { data: any, status: number, headers: any };

export default (res: ServerResponse): HttpResponse => ({
  data: Try.of(() => parseToCamel(res.data), res.data).get(),
  status: Maybe.of(res.data)
    .map(data => data.status)
    .get(0),
  httpStatus: res.status,
  meta: res.headers
});
