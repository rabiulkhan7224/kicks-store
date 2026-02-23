import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: number[];
}

const initialState: CartState = {
  items: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // FIX: Match by BOTH ID and Size so different sizes are treated as unique items
      const existing = state.items.find(
        (item) => 
          item.id === action.payload.id && 
          item.size === action.payload.size
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size: number }>,
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; size: number; quantity: number }>,
    ) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.size === action.payload.size
      );
      if (item) {
        // Ensure quantity doesn't drop below 1
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },

    toggleWishlist: (state, action: PayloadAction<number>) => {
      const isItemInWishlist = state.wishlist.includes(action.payload);
      if (isItemInWishlist) {
        state.wishlist = state.wishlist.filter((id) => id !== action.payload);
      } else {
        state.wishlist.push(action.payload);
      }
    },
  },
});

export const { addToCart, toggleWishlist, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;