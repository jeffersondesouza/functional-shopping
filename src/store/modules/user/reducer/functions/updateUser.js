export default (state, action) => {
  const auth = { ...action.payload.auth, isLoggedIn: true };

  return {
    ...state,
    ...action.payload,
    auth
  };
};
