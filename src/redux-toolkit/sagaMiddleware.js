import { all, call, put, takeEvery } from "redux-saga/effects";
import products from "../product/product.json";
import { fetchProduct, getError, getProduct } from "./productSlice";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchProducts() {
  try {
    yield call(delay, 1000); //{CALL:{fn:delay,args:1000}}
    yield put(getProduct(products)); // {PUT:{type:'product/getProduct'}}
  } catch (error) {
    yield put(getError(error.message));
  }
}

function* watchFetchProducts() {
  yield takeEvery(fetchProduct().type, fetchProducts);
}

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
