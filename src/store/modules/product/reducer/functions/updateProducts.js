export default (state, action) => ({
  ...state,
  productList: [...action.payload]
});
