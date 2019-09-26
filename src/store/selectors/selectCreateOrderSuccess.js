import Maybe from "../../utils/functors/Maybe";

export default state => {
  return Maybe.of(state.order)
    .map(user => user.createOrderSuccess)
    .get();
};
