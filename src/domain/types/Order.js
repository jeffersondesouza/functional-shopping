// @flow

export type Order = {
  id: string,
  quantity: number,
  product: { id: string, name: string }
};
