// @flow
import Types from "./actionTypes";

type LoginRequest = { email: string, password: string };
type LoginError = { msg: string, hasError: boolean, data: any };

const createOrderRequest = (payload: LoginRequest) => ({
  type: Types.CREATE_ORDER_REQUEST,
  payload
});

const createOrderSuccess = () => ({
  type: Types.CREATE_ORDER_SUCCESS
});

const createOrderFailure = (payload: LoginError) => ({
  type: Types.CREATE_ORDER_FAILURE,
  payload
});

const loadOrdersRequest = () => ({
  type: Types.LOAD_ORDERS_REQUEST
});

const loadOrdersSuccess = (orders: any[]) => ({
  type: Types.LOAD_ORDERS_SUCCESS
});

const loadOrdersFailure = (payload: LoginError) => ({
  type: Types.LOAD_ORDERS_FAILURE,
  payload
});

const updateOrders = (orders: any[]) => ({
  type: Types.UPDATE_ORDERS,
  payload: orders
});

export default {
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
  loadOrdersRequest,
  loadOrdersSuccess,
  loadOrdersFailure,
  updateOrders
};
