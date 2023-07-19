import { Cart } from "@/components/cart/cart";
import { HomePages } from "@/components/home-pages";
import { MainLayout } from "@/components/layout/main-layout/main-layout";

const ShoppingCart = () => {
  return <Cart />;
};

ShoppingCart.Layout = MainLayout;
export default ShoppingCart;
