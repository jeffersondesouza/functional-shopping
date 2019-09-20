// @flow
import type { Product } from "../../types/Product";
import Maybe from "../../../utils/functors/Maybe";
import productFactory from "../productFactory";

type Response = {
  products: any[],
  count: number
};

const buildProductsList = products => products.map(productFactory);

export default (data: Response): Product[] =>
  Maybe.of(data)
    .map(data => data.products)
    .map(buildProductsList)
    .get([]);
