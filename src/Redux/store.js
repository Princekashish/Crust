import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feature/Cart/CartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
