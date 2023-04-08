import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const ecomSlice = createSlice({
  name: "ecom",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeToCart: (state, action) => {
      const index = state.cartData.findIndex(
        (data) => data.id === action.payload
      );
      if (index > -1) {
        state.cartData.splice(index, 1);
      }
    },
    clearToCart: (state) => {
      state.cartData = [];
    },
  },
  extraReducers: (builder) => {
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
  },
});

export const { addToCart, removeToCart, clearToCart } = ecomSlice.actions;
export default ecomSlice.reducer;
