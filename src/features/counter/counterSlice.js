import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

//create slice object
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const selectCount = (state) => state.counter.count;

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
