import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: { isLogin: false },
  mitra: { isLogin: false}
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState.user,
  reducers: {
    Login(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

const mitraSlice = createSlice({
  name: "mitraSlice",
  initialState: initialState.mitra,
  reducers: {
    Login(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

const rootReducer = {
  user: userSlice.reducer,
  mitra: mitraSlice.reducer
}

const store = configureStore({
  reducer: rootReducer,
});

export const userAction = userSlice.actions;
export const mitraAction = mitraSlice.actions;
export default store;
