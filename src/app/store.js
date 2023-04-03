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
});

export default store;
