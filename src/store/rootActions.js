import productActions from "./modules/product/actions";
import userActions from "./modules/user/actions";

export default {
  product: { ...productActions },
  user: { ...userActions }
};
