// Need to use the React-specific entry point to import createApi
import type { User } from '@/types/user.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/utils/fetchBaseQuery';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<User[], void>({
      query: () => `/users`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
