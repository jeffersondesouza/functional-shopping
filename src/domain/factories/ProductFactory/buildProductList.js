// @flow
import type { Product } from "../../types/Product";
import Maybe from "../../../utils/functors/Maybe";
import productFactory from "./buildProduct";

const buildProductsList = products => products.map(productFactory);

export default (products: any[]): Product[] =>
  Maybe.of(products)
    .map(buildProductsList)
    .get([]);
