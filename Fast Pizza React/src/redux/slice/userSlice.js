import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUserName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { storeUserName } = userSlice.actions;

export const userReducer = userSlice.reducer;
