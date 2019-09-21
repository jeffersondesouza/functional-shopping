export default (state, action) => ({
  ...state,
  isLogged: false,
  isSigningUp: false,
  error: { ...action.payload }
});
