import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const totalCartQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
