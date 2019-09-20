import INITIAL_STATE from "../state";

import Types from "../actionTypes";
import updateProducts from "./functions/updateProducts";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_PRODUCTS:
      return updateProducts(state, action);

    case Types.LOAD_PRODUCTS_REQUEST:
      return { ...state, isLoadingProducts: true };

    case Types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, isLoadingProducts: false };

    case Types.LOAD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoadingProducts: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

/* manter a ideia de combinar reuest actions e update actios via um combineReducers */

export default reducer;
