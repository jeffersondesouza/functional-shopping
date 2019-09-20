import INITIAL_STATE from "../state";
import Types from "../actionTypes";

const updateProducts = (state, action) => ({
  ...state,
  productList: [...action.payload]
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_PRODUCTS:
      return updateProducts(state, action);

    case Types.LOAD_PRODUCTS_REQUEST:
      return state;

    case Types.LOAD_PRODUCTS_SUCCESS:
      return state;

    case Types.LOAD_PRODUCT_FAILURE:
      return state;

    default:
      return state;
  }
};

/* manter a ideia de combinar reuest actions e update actios via um combineReducers */

export default reducer;
