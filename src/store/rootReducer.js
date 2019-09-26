import { combineReducers } from "redux";

import productReducer from "./modules/product/reducer";
import userReducer from "./modules/user/reducer";
import orderReducer from "./modules/order/reducer";

const appReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
