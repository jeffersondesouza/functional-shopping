// @flow
import { takeEvery, all } from "redux-saga/effects";

import actionTypes from "../actionTypes";


import loginEffect from "./effects/loginEffect";
import logoutEffect from "./effects/logoutEffect";

function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutEffect);
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLogin(), watchLogout()]);
}

export default rootSaga;
