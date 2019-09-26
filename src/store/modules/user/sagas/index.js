// @flow
import { takeEvery, all } from "redux-saga/effects";

import actionTypes from "../actionTypes";

import loginEffect from "./effects/loginEffect";
import logoutEffect from "./effects/logoutEffect";
import signUpEffect from "./effects/signUpEffect";
import validateTokenEffect from "./effects/validateTokenEffect";

function* watchSignUp() {
  yield takeEvery(actionTypes.SIGN_UP_REQUEST, signUpEffect);
}

function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutEffect);
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
}

function* watchValidateToken() {
  yield takeEvery(actionTypes.VALIDATE_TOKEN_REQUEST, validateTokenEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLogin(), watchLogout(), watchSignUp(), watchValidateToken()]);
}

export default rootSaga;
