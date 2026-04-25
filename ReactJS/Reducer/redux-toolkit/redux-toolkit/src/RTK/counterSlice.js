import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "Initial State",
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    change: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset, change } = counterSlice.actions;
