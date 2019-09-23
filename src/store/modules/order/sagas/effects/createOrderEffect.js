import { put, call } from "redux-saga/effects";

import actions from "../../actions";

import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { loginQuery } from "../../../../../domain/repositories/UserRepository";
import { buildUser } from "../../../../../domain/factories/UserFactory";

function* loginEffect({ payload }) {
  try {
    const { data } = yield call(httpFetch.request, loginQuery, payload);

    yield put(
      pipe(
        buildUser,
        actions.updateUser
      )(data)
    );

    yield put(actions.createOrderSuccess());
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

export default loginEffect;
