import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    fetchProduct: (state) => {
      state.loading = true;
    },
    getProduct: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    getError: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
  },
});

export const { fetchProduct, getProduct, getError } = productSlice.actions;
export default productSlice.reducer;
