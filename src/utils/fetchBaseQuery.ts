import { RootState } from "@/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: (headers, api) => {
    const state: RootState = api.getState();
    const { user } = state.auth;

    // If we have a token set in state, let's assume that we should be passing it.
    if (user) {
      headers.set("authorization", `Bearer ${user.token}`);
    }

    return headers;
  },
});
