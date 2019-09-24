import { put, call, select } from "redux-saga/effects";


import pipe from "../../../../../utils/functions/pipe";
import httpFetch from "../../../../../domain/services/httpFetch";
import { loadOrdersQuery } from "../../../../../domain/repositories/OrderRepository";
import OrderFactory from "../../../../../domain/factories/OrderFactory";
import selectToken from "../../../../selectors/selectToken";
import actions from "../../actions";

function* loadOrdersEffect() {
  try {
    const token = yield select(selectToken);

    const { data } = yield call(httpFetch.request, loadOrdersQuery, token);

    console.log("data:", data);

    yield put(actions.loadOrdersSuccess());

    yield put(
      pipe(
        OrderFactory.buildOrdersList,
        actions.updateOrders
      )(data.orders)
    );
  } catch (error) {
    console.log('error:', error)
    yield put(
      actions.loadOrdersFailure({
        data: error,
        msg: "Could Not login",
        hasError: true
      })
    );
  }
}

export default loadOrdersEffect;
