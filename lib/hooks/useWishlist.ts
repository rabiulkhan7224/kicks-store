import { useAppDispatch, useAppSelector } from "./hooks";
import { toggleWishlist } from "../features/products/cart/cartSlice";
export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.cart.wishlist);

  const toggle = (id: number) => dispatch(toggleWishlist(id));
  const isInWishlist = (id: number) => wishlist.includes(id);

  return { wishlist, toggle, isInWishlist };
};