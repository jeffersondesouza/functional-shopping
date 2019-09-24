import { put, call, select } from "redux-saga/effects";

import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { createOrderQuery } from "../../../../../domain/modules/Order/OrderRepository";
import selectToken from "../../../../selectors/selectToken";

import actions from "../../actions";

function* createOrderEffect({ payload }) {
  try {
    const token = yield select(selectToken);

    yield call(httpFetch.request, createOrderQuery, token, payload);

    yield put(actions.createOrderSuccess());
  } catch (error) {
    yield put(
      actions.createOrderFailure({
        data: error,
        msg: "Could Not create order",
        hasError: true
      })
    );
  }
}

export default createOrderEffect;
