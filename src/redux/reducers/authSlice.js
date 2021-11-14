import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userLoggedIn: false,
    user: {},
    errorMessage: null,
    successMessage: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.userLoggedIn = true;
      state.user=action.payload;
      state.successMessage = "Logged in succesfully";
    },
    logout: (state) => {
      state.userLoggedIn = false;
      state.user={};
      state.successMessage = "Logged out succesfully";
    }
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
