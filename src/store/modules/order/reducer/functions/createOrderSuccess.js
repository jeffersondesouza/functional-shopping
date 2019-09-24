export default (state, action) => ({
  ...state,
  createOrderSuccess: true,
  error: { msg: "", hasError: false, data: {} }
});
