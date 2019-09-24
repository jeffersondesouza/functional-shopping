// @flow

import type { Order } from "../../types/Order";

const buildProduct = product => ({
  id: product.Id,
  name: product.name
});

export default (data: any): Order => ({
  id: data.Id,
  quantity: data.quantity,
  product: buildProduct(data.product || {})
});
