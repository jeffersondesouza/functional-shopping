import { all } from "redux-saga/effects";

import productSagas from "./modules/product/sagas";
import userSagas from "./modules/user/sagas";
import orderSagas from "./modules/order/sagas";

export default function* rootSaga() {
  yield all([productSagas(), userSagas(), orderSagas()]);
}
