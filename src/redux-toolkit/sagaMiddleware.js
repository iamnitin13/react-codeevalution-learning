import { all, call, put, takeEvery } from "redux-saga/effects";
import ecom from "../product/product.json";
import { fetchProduct, getError, getProduct } from "./productSlice";

/**
 *
 * Effects are objects that describe a side-effect that the saga wants to perform, such as calling an API or dispatching an action}
 */

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * When a saga encounters a yield statement followed by an effect, it suspends its execution and returns the effect to the middleware.
 * The middleware then executes the effect and resumes the saga with the result of the effect.
 */

function* fetchProducts() {
  try {
    yield call(delay, 1000); //{CALL:{fn:delay,args:1000}} //call is an side-effect provide by saga for calling an API or any function
    yield put(getProduct(ecom.products)); // {PUT:{type:'product/getProduct'}} // call is an side-effect provide by saga for dispatching an action.
  } catch (error) {
    yield put(getError(error.message));
  }
}

function* watchFetchProducts() {
  yield takeEvery(fetchProduct().type, fetchProducts);
  //takeEvery is an side-effect provide by saga for running everytime a certain action is dispatched that matches to the givrn action type and call generator fun;
  // takeLatest is smiliar to takeEvery; but it run on the latest dipatch and cancel the previous dispatch execution
}

export default function* rootSaga() {
  yield all([watchFetchProducts()]); // all is afunction that run multipl saga at a same time , waiting for all of them to completed before continuing;
  // usefull for calling multiple api or performing multiple async op at same time
}
