import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: (headers) => {
    // If we have a token set in state, let's assume that we should be passing it.
    if (localStorage.getItem("starter:token")) {
      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("starter:token")}`
      );
    }

    return headers;
  },
});
