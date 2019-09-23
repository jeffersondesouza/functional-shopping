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
});/* 

const logoutRequest = () => ({
  type: Types.LOGOUT_REQUEST
});

const logoutSuccess = () => ({
  type: Types.LOGOUT_SUCCESS
});

const logoutFailure = (payload: LoginError) => ({
  type: Types.LOGOUT_FAILURE,
  payload
});
 */
export default {
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
 /*  logoutRequest,
  logoutSuccess,
  logoutFailure */
};
