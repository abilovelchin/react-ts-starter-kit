import { userApi } from "$services/user.service";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/app.slice";
import authSlice from "./features/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { authMiddleware } from "./middlewares/error.middleware";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_PERSIST_KEY,
});

const persistConfig = {
  key: "ea",
  storage,
  transforms: [encryptor],
  whitelist: ["auth"],
  // blacklist: [""],
};

const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
  [userApi.reducerPath]: userApi.reducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(userApi.middleware)
      .prepend(authMiddleware),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
