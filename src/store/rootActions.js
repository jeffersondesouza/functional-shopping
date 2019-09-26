import productActions from "./modules/product/actions";
import userActions from "./modules/user/actions";
import orderActions from "./modules/order/actions";

export default {
  product: { ...productActions },
  user: { ...userActions },
  order: { ...orderActions }
};
