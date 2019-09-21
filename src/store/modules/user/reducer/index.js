import INITIAL_STATE from "../state";

import Type from "../actionTypes";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, isLogged: false };

    case Type.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLogged: true,
        error: { ...INITIAL_STATE.error }
      };

    case Type.LOGIN_FAILURE:
      return {
        ...state,
        isLogged: false,
        isLoggingIn: true,
        error: { ...action.payload }
      };

    default:
      return state;
  }
};

export default reducer;
