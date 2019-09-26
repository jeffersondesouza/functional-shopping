export default (state, action) => ({
  ...state,
  isSigningUp: false,
  isLogged: true,
  error: { msg: "", hasError: false, data: {} }
});
