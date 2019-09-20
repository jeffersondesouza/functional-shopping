import INITIAL_STATE from "../state";

import Type from "../actionTypes";
import updateProducts from "./functions/updateProducts";
import updateProductsCounter from "./functions/updateProductsCounter";
import loadProductsRequest from "./functions/loadProductsRequest";
import loadProductsSuccess from "./functions/loadProductsSuccess";
import loadProductsFailure from "./functions/loadProductsFailure";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.UPDATE_PRODUCTS:
      return updateProducts(state, action);

    case Type.UPDATE_PRODUCTS_COUNTER:
      return updateProductsCounter(state, action);

    case Type.LOAD_PRODUCTS_REQUEST:
      return loadProductsRequest(state, action);

    case Type.LOAD_PRODUCTS_SUCCESS:
      return loadProductsSuccess(state, action);

    case Type.LOAD_PRODUCT_FAILURE:
      return loadProductsFailure(state, action);

    default:
      return state;
  }
};

/* manter a ideia de combinar reuest actions e update actios via um combineReducers */

export default reducer;
