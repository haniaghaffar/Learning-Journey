import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
  deleteItem(state, action) {
    state.cart = state.cart.filter((item) => item.id !== action.payload);
  },
  increaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
});

export const { addItem,deleteItem,decreaseItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
