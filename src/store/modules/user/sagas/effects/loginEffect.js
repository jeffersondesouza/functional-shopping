import { put, call } from "redux-saga/effects";

import actions from "../../actions";

import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { loginQuery } from "../../../../../domain/modules/User/UserRepository";
import { buildUser } from "../../../../../domain/modules/User/UserFactory";

function* loginEffect({ payload }) {
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

export default loginEffect;
