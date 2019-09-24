// @flow
import { takeEvery, put, all, call, select } from "redux-saga/effects";

import httpFetch from "../../../domain/services/httpFetch";
import ProductFactory from "../../../domain/factories/ProductFactory";
import {
  createProductsQuery,
  loadProductsQuery
} from "../../../domain/repositories/ProductRepository";
import pipe from "../../../utils/functions/pipe";
import selectToken from "../../selectors/selectToken";
import actions from "./actions";
import actionTypes from "./actionTypes";

function* createProductEffect({ payload }) {
  try {
    const token = yield select(selectToken);

    yield call(httpFetch.request, createProductsQuery, token, payload);

    yield put(actions.createProductSuccess());
    yield put(actions.loadProductRequest());
  } catch (error) {
    console.log('error:', error)
    yield put(
      actions.createProductFailure({
        msg: "Não foi possível Criar  o produto",
        data: { ...error },
        hasError: true
      })
    );
  }
}

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

function* watchCreateProduct() {
  yield takeEvery(actionTypes.CREATE_PRODUCT_REQUEST, createProductEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadProduct(), watchCreateProduct()]);
}

export default rootSaga;
