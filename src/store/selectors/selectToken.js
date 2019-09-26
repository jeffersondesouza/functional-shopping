import Maybe from "../../utils/functors/Maybe";

export default state =>
  Maybe.of(state.user)
    .map(user => user.auth)
    .map(auth => auth.token)
    .get();
