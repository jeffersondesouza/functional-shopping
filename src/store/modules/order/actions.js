// @flow
import Types from "./actionTypes";

type LoginRequest = { email: string, password: string };
type LoginError = { msg: string, hasError: boolean, data: any };

const updateUser = (payload: any) => ({
  type: Types.UPDATE_USER,
  payload
});

const loginRequest = (payload: LoginRequest) => ({
  type: Types.LOGIN_REQUEST,
  payload
});

const loginSuccess = () => ({
  type: Types.LOGIN_SUCCESS
});

const loginFailure = (payload: LoginError) => ({
  type: Types.LOGIN_FAILURE,
  payload
});

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

export default {
  updateUser,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
};
