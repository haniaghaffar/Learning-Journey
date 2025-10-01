// src/redux/slices/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],       // keep all orders if you want
  lastOrder: null,  // only the latest order
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.lastOrder = action.payload; // save the latest order
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
