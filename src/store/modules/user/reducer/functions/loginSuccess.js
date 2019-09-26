export default (state, action) => ({
  ...state,
  error: { msg: "", hasError: false, data: {}}
});
