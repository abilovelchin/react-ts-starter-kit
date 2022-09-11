import { userApi } from "$services/user.service";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/app.slice";
import authSlice from "./features/auth.slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
