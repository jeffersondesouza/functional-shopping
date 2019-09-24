import Maybe from "../../utils/functors/Maybe";

export default state =>
  Maybe.of(state.user)
    .map(user => user.isValidatingToken)
    .get();
