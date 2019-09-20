import Types from "./actionTypes";

const updateProducts = products => ({
  type: Types.UPDATE_PRODUCTS,
  payload: products,
  meta: {}
});

const loadProductRequest = () => ({
  type: Types.LOAD_PRODUCTS_REQUEST
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
  loadProductFailure,
  updateProducts
};
