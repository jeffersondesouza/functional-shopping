// @flow
import { takeEvery, all } from "redux-saga/effects";

import actionTypes from "../actionTypes";

import createOrderEffect from "./effects/createOrderEffect";
import loadOrdersEffect from "./effects/loadOrdersEffect";
import buyOrderEffect from "./effects/buyOrderEffect";
import deleteOrderEffect from "./effects/deleteOrderEffect";

function* watchCreateOrder() {
  yield takeEvery(actionTypes.CREATE_ORDER_REQUEST, createOrderEffect);
}

function* watchLoadOrders() {
  yield takeEvery(actionTypes.LOAD_ORDERS_REQUEST, loadOrdersEffect);
}

function* watchDeleteOrder() {
  yield takeEvery(actionTypes.BUY_ORDER_REQUEST, buyOrderEffect);
}

function* watchBuyeOrder() {
  yield takeEvery(actionTypes.DELETE_ORDER_REQUEST, deleteOrderEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([
    watchCreateOrder(),
    watchLoadOrders(),
    watchDeleteOrder(),
    watchBuyeOrder()
  ]);
}

export default rootSaga;
