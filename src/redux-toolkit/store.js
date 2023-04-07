import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import ecomReducer from "./ecomSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    ecomReducer,
  },
  middleware: [sagaMiddleware],
});

// sagaMiddleware.run();
