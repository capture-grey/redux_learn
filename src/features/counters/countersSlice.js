import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    count: 1,
  },
  {
    id: 2,
    count: 0,
  },
];

const coutersSlice = createSlice({
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

export default coutersSlice.reducer;
