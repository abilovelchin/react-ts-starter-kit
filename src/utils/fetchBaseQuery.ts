import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "$store/index";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth.user;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
