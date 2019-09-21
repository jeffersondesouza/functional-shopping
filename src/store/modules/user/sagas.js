// @flow

import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";

function* loginEffect({ payload }) {
  yield put(actions.LoginSuccess());
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLogin()]);
}

export default rootSaga;
