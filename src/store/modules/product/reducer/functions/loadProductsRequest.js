export default (state, action) => ({
  ...state,
  isLoadingProducts: true,
  productList: []
});
