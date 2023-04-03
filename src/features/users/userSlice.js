import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//createAsyncThunk help in creating & dispatching async actions
// 1.name must be start must the slice name followed by the action type
// 2. payload creator callback function
// createAsyncThunk dispatch the action based on the lifecycle of promise by generating these actiontypes ,i.e: pending,fullfiled,rejected --
// it use redux-thunk library under the hood
export const fetchUsers = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  // not hanlded error block;
  return response.data.map((user) => user.id);
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
