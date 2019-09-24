// @flow
import { takeEvery, all } from "redux-saga/effects";

import actionTypes from "../actionTypes";

import createOrderEffect from "./effects/createOrderEffect";
import loadOrdersEffect from "./effects/loadOrdersEffect";

function* watchCreateOrder() {
  yield takeEvery(actionTypes.CREATE_ORDER_REQUEST, createOrderEffect);
}

function* watchLoadOrders() {
  yield takeEvery(actionTypes.LOAD_ORDERS_REQUEST, loadOrdersEffect);
}

/* function* watchDeleteOrder() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginEffect);
} */

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchCreateOrder(), watchLoadOrders()]);
}

export default rootSaga;
