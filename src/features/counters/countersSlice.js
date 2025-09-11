import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value--;
    },
    reset: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value = 0;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement, reset } = countersSlice.actions;
