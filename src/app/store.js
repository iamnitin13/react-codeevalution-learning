import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/users/userSlice";

// const logger = createLogger();

// configureStore is aabstraction over the standard Redux createStore() function
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // getDefaultMiddleware by default add some middleware to our store ;so concat with other middleware list

  /**  if we want to add some middleware it must be concated to getDefaultMiddleware,
   * like createAsyncThunk uses thunk middlewar internally which is by default provided to it;but when adding any custom middleare like saga,
   * it must be concated with default ; else we will get error for
   * i got error for action must be plan object
   */
});

export default store;
