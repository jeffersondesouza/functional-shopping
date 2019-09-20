import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";
import productListFactory from "../../../domain/factories/productListFactory";

function* loadProductsEffect({ payload }) {
  const { data } = yield call(httpFetch.request, {
    method: "GET",
    url: "http://localhost:3001/products"
  });

  const products = productListFactory(data);
  console.log("products:", products);

  yield put(actions.loadProductSuccess());
}

function* watchLoadProduct() {
  yield takeEvery(actionTypes.LOAD_PRODUCTS_REQUEST, loadProductsEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadProduct()]);
}

export default rootSaga;
