import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    productAdd(state, action) {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // If item already exists, increase the quantity
        state[existingItemIndex].quantity += 1;
      } else {
        // If it doesn't exist, add the item with quantity 1
        const itemWithQuantity = { ...action.payload, quantity: 1 };
        state.push(itemWithQuantity);
      }
    },
    productRemove(state, action) {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex >= 0) {
        // Decrease quantity if greater than 1
        if (state[existingItemIndex].quantity > 1) {
          state[existingItemIndex].quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          state.splice(existingItemIndex, 1);
        }
      }
    },

    productRemoveComplete(state, action) {
      return state.filter((item) => item.id !== action.payload); // Complete removal
    },

    clearCart(state) {
      return []; // Clears the cart
    },
  },
});

export const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const { productAdd, productRemove, productRemoveComplete,clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
