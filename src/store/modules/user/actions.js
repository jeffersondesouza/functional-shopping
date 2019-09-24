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

const signUpRequest = (payload: LoginRequest) => ({
  type: Types.SIGN_UP_REQUEST,
  payload
});

const signUpSuccess = () => ({
  type: Types.SIGN_UP_SUCCESS
});

const signUpFailure = (payload: LoginError) => ({
  type: Types.SIGN_UP_FAILURE,
  payload
});

const validateTokenRequest = (token: string) => ({
  type: Types.VALIDATE_TOKEN_REQUEST,
  payload: token
});

const validateTokenSuccess = () => ({
  type: Types.VALIDATE_TOKEN_SUCCESS
});

const validateTokenFailure = (payload: LoginError) => ({
  type: Types.VALIDATE_TOKEN_FAILURE,
  payload
});

const updateToken = (token: string) => ({
  type: Types.UPDATE_TOKEN,
  payload: token
});

export default {
  updateUser,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  validateTokenRequest,
  validateTokenSuccess,
  validateTokenFailure,
  updateToken
};
