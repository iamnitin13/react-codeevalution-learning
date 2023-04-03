import { createSlice } from "@reduxjs/toolkit";
import { restocked as cakeRestocked } from "../cake/cakeSlice";

const initialState = { numOfIceCream: 20 };
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    // builder.addCase("cake/restocked", (state, action) => {
    //   state.numOfIceCream += action.payload; // action will be from reducer from 'cake/restocked' action types
    // });
    builder.addCase(cakeRestocked, (state, action) => {
      state.numOfIceCream += action.payload; // action will be from reducer from 'cake/restocked' action types
    });
  },
});

//extraReducer when dispacth action from another reducer trigger state from other slice also mutate (not happen by default in toolkit)
// map of actionTypes to the reducer; two way
// 1; use [actionTypes]:reducerFn;
// recommened 2. use builder objct and add case i.e builder.addCase(actionType,reducerFn)

export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
