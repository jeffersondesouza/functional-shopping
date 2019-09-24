import { put, call, select } from "redux-saga/effects";

import httpFetch from "../../../../../domain/services/httpFetch";
import { deleteOrderQuery } from "../../../../../domain/repositories/OrderRepository";
import selectToken from "../../../../selectors/selectToken";

import actions from "../../actions";

function* deleteOrderEffect({ payload }) {
  try {
    const token = yield select(selectToken);
    console.log('token, payload:', token, payload)

    yield call(httpFetch.request, deleteOrderQuery, token, payload);

    yield put(actions.deleteOrdersSuccess());
    yield put(actions.loadOrdersRequest());
  } catch (error) {
    console.log("error:", error);
    yield put(
      actions.deleteOrdersFailure({
        data: error,
        msg: "Could Not delete order",
        hasError: true
      })
    );
  }
}

export default deleteOrderEffect;
