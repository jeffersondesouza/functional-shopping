import Types from "./actionTypes";

const loginRequest = () => ({
  type: Types.LOGIN_REQUEST
});

const loginSuccess = payload => ({
  type: Types.LOGIN_SUCCESS,
  payload
});

const loginFailure = error => ({
  type: Types.LOGIN_FAILURE,
  payload: error
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure
};
