// @flow

import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";
import { loginQuery } from "../../../domain/repositories/UserRepository";
import { buildUser } from "../../../domain/factories/UserFactory";

function* loginEffect({ payload }) {
  try {
    const { data } = yield call(httpFetch.request, loginQuery, payload);
    const user = buildUser(data);

    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(
      actions.loginFailure({
        data: error,
        msg: "Could Not login",
        hasError: true
      })
    );
  }
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLogin()]);
}

export default rootSaga;
