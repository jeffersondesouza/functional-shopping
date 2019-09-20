export default (state, action) => ({
  ...state,
  isLoadingProducts: false,
  error: action.payload.error
});
