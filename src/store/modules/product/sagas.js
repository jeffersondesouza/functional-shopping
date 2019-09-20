//  @flow
import { takeEvery, put, all, select, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";

function* loadProductsEffect({ payload }) {
  yield put(actions.loadProductSuccess());
}

function* watchLoadProduct() {
  yield takeEvery(actionTypes.LOAD_PRODUCTS_REQUEST, loadProductsEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadProduct()]);
}

export default rootSaga;
