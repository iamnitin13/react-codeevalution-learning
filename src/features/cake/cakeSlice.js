import { createSlice } from "@reduxjs/toolkit";

// action and reducer will be in a single file
const initialState = { numOfCakes: 10 };
//createSlice return the action creators with same name of reducer func & it also return reducer that will passed to our store
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

/**
 * //actions return from slice it
 * handle the actions types,
 * action object ,
 * action creators &
 * the switch case in the reducer &
 * also handling inmutable state
 */
export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;
