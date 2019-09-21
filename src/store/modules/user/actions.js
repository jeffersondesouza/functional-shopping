// @flow
import Types from "./actionTypes";

type LoginRequest = { email: string, password: string };
type LoginError = { msg: string, hasError: boolean,data: any
};

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

export default {
  loginRequest,
  loginSuccess,
  loginFailure
};
