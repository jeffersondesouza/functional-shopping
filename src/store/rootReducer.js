import { combineReducers } from "redux";

import productReducer from "./modules/product/reducer";

const appReducer = combineReducers({
  product: productReducer
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
