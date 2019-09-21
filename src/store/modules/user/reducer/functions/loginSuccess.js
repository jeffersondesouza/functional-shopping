export default (state, action) => ({
  ...state,
  isLoggingIn: false,
  isLogged: true,
  error: { msg: "", hasError: false, data: {}}
});
