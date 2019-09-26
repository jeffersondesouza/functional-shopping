export default (state, action) => ({
  ...state,
  totalProducts: action.payload
});
