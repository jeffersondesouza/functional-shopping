import Maybe from "../../utils/functors/Maybe";

export default state => {
  return Maybe.of(state.user)
    .map(user => user.auth)
    .map(auth => auth.isLoggedIn)
    .get();
};
