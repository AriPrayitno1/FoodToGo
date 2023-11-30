import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isLogin: false };

const loginSlice = createSlice({
  name: "slice1",
  initialState,
  reducers: {
    Login(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export const sliceAction = loginSlice.actions;
export default store;
