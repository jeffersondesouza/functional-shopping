import { all } from "redux-saga/effects";

import productSagas from "./modules/product/sagas";

export default function* rootSaga() {
  yield all([productSagas()]);
}
