import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerslice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
