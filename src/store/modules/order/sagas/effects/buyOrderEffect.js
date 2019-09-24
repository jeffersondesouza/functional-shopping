import { put, call, select } from "redux-saga/effects";

import httpFetch from "../../../../../domain/services/httpFetch";
import { buyOrderQuery } from "../../../../../domain/repositories/OrderRepository";
import selectToken from "../../../../selectors/selectToken";

import actions from "../../actions";

function* buyOrderEffect({ payload }) {
  try {
    const token = yield select(selectToken);

    yield call(httpFetch.request, buyOrderQuery, token, payload);

    yield put(actions.buyOrderSuccess());
    yield put(actions.loadOrdersRequest());
  } catch (error) {
    yield put(
      actions.buyOrderFailure({
        data: error,
        msg: "Could Not Buy order",
        hasError: true
      })
    );
  }
}

export default buyOrderEffect;
