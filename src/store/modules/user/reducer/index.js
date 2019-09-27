import INITIAL_STATE from "../state";

import Type from "../actionTypes";

import updateUser from "./functions/updateUser";

import loginRequest from "./functions/loginRequest";
import loginSuccess from "./functions/loginSuccess";
import loginFailure from "./functions/loginFailure";

import signUpRequest from "./functions/signUpRequest";
import signUpSuccess from "./functions/signUpSuccess";
import signUpFailure from "./functions/signUpFailure";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.UPDATE_USER:
      return updateUser(state, action);

    case Type.LOGIN_REQUEST:
      return loginRequest(state, action);

    case Type.LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case Type.LOGIN_FAILURE:
      return loginFailure((state, action));

    case Type.SIGN_UP_REQUEST:
      return signUpRequest((state, action));

    case Type.SIGN_UP_SUCCESS:
      return signUpSuccess((state, action));

    case Type.SIGN_UP_FAILURE:
      return signUpFailure((state, action));

    case Type.VALIDATE_TOKEN_REQUEST:
      return { ...state, isValidatingToken: true };

    case Type.VALIDATE_TOKEN_SUCCESS:
      return { ...state, isValidatingToken: false };

    case Type.VALIDATE_TOKEN_FAILURE:
      return { ...state, isValidatingToken: false };

    case Type.UPDATE_AUTH:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.token,
          isLoggedIn: action.payload.isLoggedIn
        }
      };
    case Type.UPDATE_TOKEN:
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
