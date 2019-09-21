import { combineReducers } from "redux";

import productReducer from "./modules/product/reducer";
import userReducer from "./modules/user/reducer";

const appReducer = combineReducers({
  product: productReducer,
  user: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
