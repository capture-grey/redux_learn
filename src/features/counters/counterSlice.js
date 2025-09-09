const { createSlice } = require("@reduxjs/toolkit");

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

const couterSlice = createSlice({
  name: "counters",
});
