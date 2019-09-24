import INITIAL_STATE from "../state";

import Type from "../actionTypes";

import createOrderRequest from "./functions/createOrderRequest";
import createOrderSuccess from "./functions/createOrderSuccess";
import createOrderFailure from "./functions/createOrderFailure";
import updateOrders from "./functions/updateOrders";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.CREATE_ORDER_REQUEST:
      return createOrderRequest(state, action);

    case Type.CREATE_ORDER_SUCCESS:
      return createOrderSuccess(state, action);

    case Type.CREATE_ORDER_FAILURE:
      return createOrderFailure((state, action));

    case Type.UPDATE_ORDERS:
      return updateOrders(state, action);

    default:
      return state;
  }
};

export default reducer;
