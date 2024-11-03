import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: null,
  reducers: {
    saveOrderDetails(state, action) {
      return action.payload; // Save the order details
    },
    clearOrder(state) {
      return null; // Clear order details
    },
  },
});

export const { saveOrderDetails, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
