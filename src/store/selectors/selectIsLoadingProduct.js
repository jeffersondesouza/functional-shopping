import Maybe from "../../utils/functors/Maybe";

export default state =>
  Maybe.of(state.product)
    .map(product => product.isLoadingProducts)
    .get();
    
