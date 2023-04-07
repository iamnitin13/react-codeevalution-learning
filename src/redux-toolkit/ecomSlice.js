import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const ecomSlice = createSlice({
  name: "ecom",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartCount += 1;
    },
    removeCart: (state) => {
      state.cartCount -= 1;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
  },
});

export const { addToCart, removeCart } = ecomSlice.actions;
export default ecomSlice.reducer;
