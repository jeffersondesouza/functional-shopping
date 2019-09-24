import { put, call } from "redux-saga/effects";

import actions from "../../actions";

import httpFetch from "../../../../../domain/services/httpFetch";
import { validateTokenQuery } from "../../../../../domain/repositories/UserRepository";

function* loginEffect({ payload }) {
  try {
    const { httpStatus } = yield call(
      httpFetch.request,
      validateTokenQuery,
      payload
    );
    if (httpStatus === 200) {
      yield put(actions.validateTokenSuccess());
      yield put(actions.updateToken(payload));
    }
  } catch (error) {
    yield put(
      actions.validateTokenFailure({
        data: error,
        msg: "Could Not login",
        hasError: true
      })
    );
  }
}

export default loginEffect;
