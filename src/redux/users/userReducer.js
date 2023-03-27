import axios from "axios";
import {
  fetchUserFailure,
  fetchUserResult,
  fetchUserSuccess,
} from "./userActions";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
      return { isLoading: false, users: action.payload, error: "" };
    case FETCH_USER_FAILURE:
      return { isLoading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

//async action creator using thunk

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserResult());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export default userReducer;
