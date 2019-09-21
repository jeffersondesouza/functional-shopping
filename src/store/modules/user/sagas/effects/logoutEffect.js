import { put, call } from "redux-saga/effects";

import actions from "../../actions";

import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { loginQuery } from "../../../../../domain/repositories/UserRepository";
import { buildUser } from "../../../../../domain/factories/UserFactory";

function* logoutEffect({ payload }) {
  try {
    const { data } = yield call(httpFetch.request, loginQuery, payload);

    yield put(
      pipe(
        buildUser,
        actions.updateUser
      )(data)
    );

    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(
      actions.loginFailure({
        data: error,
        msg: "Could Not login",
        hasError: true
      })
    );
  }
}

export default logoutEffect;
