import { put, call, select } from "redux-saga/effects";

import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { createOrderQuery } from "../../../../../domain/repositories/OrderRepository";
import selectToken from "../../../../selectors/selectToken";

import actions from "../../actions";

function* createOrderEffect({ payload }) {
  console.log("payload:", payload);
  try {
    const token = yield select(selectToken);

    const { data } = yield call(
      httpFetch.request,
      createOrderQuery,
      token,
      payload
    );

    console.log("data:", data);
    /*
     */

    // console.log("data:", data);
    /* 
    yield put(
      pipe(
        buildUser,
        actions.updateUser
      )(data)
    );
    yield put(actions.createOrderSuccess());
 */
  } catch (error) {
    yield put(
      actions.createOrderFailure({
        data: error,
        msg: "Could Not create order",
        hasError: true
      })
    );
  }
}

export default createOrderEffect;
