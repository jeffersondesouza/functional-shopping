export default (state, action) => ({
  ...state,
  auth: {
    ...action.payload,
    isLoggedIn: true
  }
});
