import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const fetchUserResult = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

const fetchUserFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload,
  };
};

export { fetchUserResult, fetchUserSuccess, fetchUserFailure };
