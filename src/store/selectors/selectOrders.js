import Maybe from "../../utils/functors/Maybe";

export default state =>
  Maybe.of(state.order)
    .map(order => order.orderList)
    .get([]);