import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { 
  isLogin: false,
  isSignedUp: false
};

const loginSlice = createSlice({
  name: "slice1",
  initialState,
  reducers: {
    Login(state) {
      state.isLogin = !state.isLogin;
    },
    SignUp(state) {
      state.isSignedUp = !state.isSignedUp;
    }
  },
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export const sliceAction = loginSlice.actions;
export default store;
