import Types from "./actionTypes";

const loadProductRequest = reloadMode => ({
  type: Types.LOAD_PRODUCTS_REQUEST,
  payload: reloadMode,
  meta: {}
});

const loadProductSuccess = payload => ({
  type: Types.LOAD_PRODUCTS_SUCCESS,
  payload
});

const loadProductFailure = error => ({
  type: Types.LOAD_PRODUCT_FAILURE,
  payload: error
});

export default {
  loadProductRequest,
  loadProductSuccess,
  loadProductFailure
};
