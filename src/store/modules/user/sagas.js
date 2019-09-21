// @flow

import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";
import { loginQuery } from "../../../domain/repositories/UserRepository";

function* loginEffect({ payload }) {
  console.log("payload:", payload);

  const data = yield call(httpFetch.request, loginQuery, payload);

  console.log("data:", data);
  yield put(actions.loginSuccess());
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLogin()]);
}

export default rootSaga;
