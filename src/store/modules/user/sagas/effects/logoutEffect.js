import { put } from "redux-saga/effects";

import actions from "../../actions";

function* logoutEffect({ payload }) {
  try {
    yield put(actions.logoutSuccess());
    window.location.reload();
  } catch (error) {
    yield put(
      actions.logoutFailure({
        data: error,
        msg: "Could Not login",
        hasError: true
      })
    );
  }
}

export default logoutEffect;
