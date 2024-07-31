import type { ResponseType } from '@/types/common.type';
import type { Auth, AuthAsanPayload, AuthLoginPayload } from '@/types/auth.type';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/utils/fetchBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation<ResponseType<Auth>, AuthAsanPayload>({
      query: (body) => ({
        method: 'POST',
        url: 'auth/asan/login',
        body,
      }),
    }),

    login: builder.mutation<Auth, AuthLoginPayload>({
      query: (body) => ({
        method: 'POST',
        url: 'auth/login',
        body,
      }),
      transformResponse: (response: ResponseType<Auth>) => response.data,
    }),

    signOut: builder.mutation<ResponseType<null>, void>({
      query: () => ({
        method: 'POST',
        url: 'auth/logout',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignInMutation, useSignOutMutation } = authApi;
