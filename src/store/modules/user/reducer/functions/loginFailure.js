export default (state, action) => ({
  ...state,
  isLogged: false,
  isLoggingIn: true,
  error: { ...action.payload }
});
