import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/Cart/CartSlice";
import orderReducer from "./feature/Order/OrderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
