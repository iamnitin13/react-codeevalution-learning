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
    // loadPost: (state) => {
    //   state.loading = true;
    // },
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
    // getPost: (state, action) => {
    //   console.log("27", action);
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
    // builder.addCase("", (state, action) => {});
  },
});

// export const { fetchProduct, getProduct, getError, getPost, loadPost } =
//   productSlice.actions;
export const { fetchProduct, getProduct, getError } = productSlice.actions;
export default productSlice.reducer;
