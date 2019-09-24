import Types from "./actionTypes";

const updateProducts = products => ({
  type: Types.UPDATE_PRODUCTS,
  payload: products,
  meta: {}
});

const updateProductsCounter = total => ({
  type: Types.UPDATE_PRODUCTS_COUNTER,
  payload: total
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

const createProductRequest = product => ({
  type: Types.CREATE_PRODUCT_REQUEST,
  payload: product
});

const createProductSuccess = payload => ({
  type: Types.CREATE_PRODUCT_SUCCESS,
  payload
});

const createProductFailure = error => ({
  type: Types.CREATE_PRODUCTFAILURE,
  payload: error
});

export default {
  loadProductRequest,
  loadProductSuccess,
  loadProductFailure,
  updateProducts,
  updateProductsCounter,
  createProductRequest,
  createProductSuccess,
  createProductFailure
};
