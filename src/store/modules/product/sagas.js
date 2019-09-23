// @flow

import { takeEvery, put, all, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpFetch from "../../../domain/services/httpFetch";
import ProductFactory from "../../../domain/factories/ProductFactory";
import { loadProductsQuery } from "../../../domain/repositories/ProductRepository";
import pipe from "../../../utils/functions/pipe";

function* loadProductsEffect({ payload }) {
  try {
    // res = {data, status, httpStatus, meta}
    const { data } = yield call(httpFetch.request, loadProductsQuery);

    yield put(
      pipe(
        ProductFactory.buildProducts,
        actions.updateProducts
      )(data.products)
    );

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
