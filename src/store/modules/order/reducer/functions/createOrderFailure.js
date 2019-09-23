export default (state, action) => ({
  ...state,
  error: { ...action.payload }
});
