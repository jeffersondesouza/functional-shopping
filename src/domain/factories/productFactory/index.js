// @flow

import type { Product } from "../../types/Product";

export default (data: any): Product => ({
  id: data.Id,
  name: data.name,
  price: data.price,
  productImage: data.productImage
});
