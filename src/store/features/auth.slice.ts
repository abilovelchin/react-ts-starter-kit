import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "$store/index";
import { User } from "$types/user.type";

// Define the initial state using that type
const initialState = {
  user: {} as Partial<User>,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = {} as User;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
