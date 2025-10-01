import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice"; 

export const store = configureStore({
  reducer: {
    orders: ordersReducer, 
    cart: cartReducer,
  },
});
