import { addToCart, removeFromCart, updateQuantity } from "../features/products/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity, 
    0
  );

  // Calculate total items (sum of quantities)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const add = (product: any, size: number) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: size,
      quantity: 1
    }));
  };

  const remove = (id: number, size: number) => {
    dispatch(removeFromCart({ id, size }));
  };

  const updateQty = (id: number, size: number, quantity: number) => {
    dispatch(updateQuantity({ id, size, quantity }));
  };

  return {
    items,
    totalPrice,
    totalItems,
    add,
    remove,
    updateQty,
    isEmpty: items.length === 0
  };
};