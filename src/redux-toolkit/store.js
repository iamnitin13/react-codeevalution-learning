import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import ecomReducer from "./ecomSlice";
import productReducer from "./productSlice";
import rootSaga from "./sagaMiddleware";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    ecomReducer,
    productReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
