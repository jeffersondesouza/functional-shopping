//  @flow
import { takeEvery, put, all, select, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";

function* loadBeersEffect({ payload }) {
  yield put(actions.loadBeersSuccess());

  yield put(actions.updateBeers([]));
}

function* watchLoadBeers() {
  yield takeEvery(actionTypes.LOAD_BEERS_REQUEST, loadBeersEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadBeers()]);
}

export default rootSaga;
