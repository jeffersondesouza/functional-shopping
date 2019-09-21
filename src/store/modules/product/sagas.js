// @flow

import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";
import productListFactory from "../../../domain/factories/productListFactory";
import { loadProductsQuery } from "../../../domain/repositories/ProductRepository";

function* loadProductsEffect({ payload }) {
  try {
    const { data } = yield call(httpFetch.request, loadProductsQuery);

    const products = productListFactory(data.products);

    yield put(actions.updateProducts(products));
    yield put(actions.updateProductsCounter(data.count));
    yield put(actions.loadProductSuccess());
  } catch (error) {
    yield put(
      actions.loadProductFailure({
        msg: "Não foi possível carrregar os produtos",
        data: { ...error },
        hasError: true
      })
    );
  }
}

function* watchLoadProduct() {
  yield takeEvery(actionTypes.LOAD_PRODUCTS_REQUEST, loadProductsEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadProduct()]);
}

export default rootSaga;
