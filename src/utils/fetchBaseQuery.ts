import { RootState } from '@/store';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: (headers, api) => {
    const state = api.getState() as RootState;
    const auth = state.auth;

    // If we have a token set in state, let's assume that we should be passing it.
    if (auth?.data?.user) {
      headers.set('authorization', `Bearer ${auth.data.accessToken}`);
    }

    return headers;
  },
});
