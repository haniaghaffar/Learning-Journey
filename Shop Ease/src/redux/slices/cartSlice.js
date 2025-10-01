import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
      saveCart(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCart(state.items);
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) product.quantity += 1;
      saveCart(state.items);
    },
    decrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart([]);
    },
    setCart: (state, action) => {
      state.items = action.payload;
      saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
