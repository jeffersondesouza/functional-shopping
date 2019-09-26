export default (state, action) => ({
  ...state,
  createOrderSuccess: false,
  error: { ...action.payload }
});
