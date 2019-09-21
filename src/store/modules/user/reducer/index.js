import INITIAL_STATE from "../state";

import Type from "../actionTypes";

import updateUser from "./functions/updateUser";
import loginRequest from "./functions/loginRequest";
import loginSuccess from "./functions/loginSuccess";
import loginFailure from "./functions/loginFailure";

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

    default:
      return state;
  }
};

export default reducer;
