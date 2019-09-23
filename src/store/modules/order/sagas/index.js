// @flow
import { takeEvery, all } from "redux-saga/effects";

import actionTypes from "../actionTypes";

import createOrderEffect from "./effects/createOrderEffect";

function* watchCreateOrder() {
  yield takeEvery(actionTypes.CREATE_ORDER_REQUEST, createOrderEffect);
}

/* function* watchDeleteOrder() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
} */

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchCreateOrder()]);
}

export default rootSaga;
