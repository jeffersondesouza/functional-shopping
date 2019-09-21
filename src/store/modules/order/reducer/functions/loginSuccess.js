export default (state, action) => ({
  ...state,
  isLoggingIn: false,
  error: { msg: "", hasError: false, data: {}}
});
