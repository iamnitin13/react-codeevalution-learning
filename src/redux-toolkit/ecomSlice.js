import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const ecomSlice = createSlice({
  name: "ecomSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cartData.findIndex(
        (data) => data.id === action.payload
      );
      if (index > -1) {
        state.cartData.splice(index, 1);
      }
    },
    emptyCart: (state) => {
      state.cartData = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = ecomSlice.actions;
export default ecomSlice.reducer;
